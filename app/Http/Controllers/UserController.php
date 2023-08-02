<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginFormRequest;
use App\Mail\UserConfirmMail;
use App\Mail\UserVerifiedMail;
use App\Models\Role;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Laravel\Sanctum\Exceptions\MissingAbilityException;
use Mail;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $creds = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'name' => 'nullable|string',
        ]);

        $user = User::where('email', $creds['email'])->first();
        if ($user) {
            return response(['error' => 1, 'message' => 'user already exists'], 409);
        }

        $hash = bcrypt(env('CONFIRM_PASSWORD_HASH_SECRET'));

        $user = User::create([
            'email' => $creds['email'],
            'password' => Hash::make($creds['password']),
            'name' => $creds['name'],
        ]);

        $user->update(['confirm_hash' => $hash]);

        $defaultRoleSlug = config('hydra.default_user_role_slug', 'user');
        $user->roles()->attach(Role::where('slug', $defaultRoleSlug)->first());


        $url = env('APP_URL') . '/verify/account/' . $creds['email'] . '?token=' . $hash;
        try {
            $data = [
                'subject' => 'Verify you account',
                'body' => 'Welcome to our app. To Move Forward please verify your email',
                "url" => $url
            ];
            Mail::to($creds['email'])->send(new UserConfirmMail($data));
            return $user;
        } catch (\Throwable $th) {
            return response()->json(['Sorry! Please try again latter']);
        }

    }

    /**
     * Authenticate an user and dispatch token.
     *
     * @param  \App\Http\Requests\Auth\LoginFormRequest;  $request
     * @return \Illuminate\Http\Response
     */
    public function login(LoginFormRequest $request)
    {
        $creds = $request->validated();
        if (isset($creds['isOAuth']) && $creds['isOAuth']) {
            $authType = $creds['OAuthType'];
            if ($authType && $authType === 'google') {
                return $this->googleOAuthLogin($creds['access_token']);
            }
            if ($authType && $authType === 'facebook') {
                return $this->facebookOAuthLogin($creds['access_token']);
            }
        }

        $user = User::where('email', $creds['email'])->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(([
                'success' => false,
                'message' => 'invalid credentials',
                'data' => null

            ]), 401);
        }

        if (config('hydra.delete_previous_access_tokens_on_login', false)) {
            $user->tokens()->delete();
        }

        $roles = $user->roles->pluck('slug')->all();

        $plainTextToken = $user->createToken('hydra-api-token', $roles)->plainTextToken;

        return response(['error' => 0, 'id' => $user->id, 'token' => $plainTextToken], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \App\Models\User  $user
     */
    public function show(User $user)
    {
        return $user;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return User
     *
     * @throws MissingAbilityException
     */
    public function update(Request $request, User $user)
    {
        $user->name = $request->name ?? $user->name;
        $user->email = $request->email ?? $user->email;
        $user->password = $request->password ? Hash::make($request->password) : $user->password;
        $user->email_verified_at = $request->email_verified_at ?? $user->email_verified_at;

        //check if the logged in user is updating it's own record

        $loggedInUser = $request->user();
        if ($loggedInUser->id == $user->id) {
            $user->update();
        } elseif ($loggedInUser->tokenCan('admin') || $loggedInUser->tokenCan('super-admin')) {
            $user->update();
        } else {
            throw new MissingAbilityException('Not Authorized');
        }

        return $user;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $adminRole = Role::where('slug', 'admin')->first();
        $userRoles = $user->roles;

        if ($userRoles->contains($adminRole)) {
            //the current user is admin, then if there is only one admin - don't delete
            $numberOfAdmins = Role::where('slug', 'admin')->first()->users()->count();
            if (1 == $numberOfAdmins) {
                return response(['error' => 1, 'message' => 'Create another admin before deleting this only admin user'], 409);
            }
        }

        $user->delete();

        return response(['error' => 0, 'message' => 'user deleted']);
    }

    /**
     * Return Auth user
     *
     * @param  Request  $request
     * @return mixed
     */
    public function me(Request $request)
    {
        return $request->user();
    }


    /**
     * /**
     * Verify newly Registered User
     *
     * @param  Request  $request
     * @return mixed
     */
    public function verify(Request $request)
    {
        $email = $request->route('email');
        $token = $request->input('token');

        if (!(Hash::check(env('CONFIRM_PASSWORD_HASH_SECRET'), $token))) {
            return response(['error' => 1, 'message' => 'Bad request'], 400);
        }

        $query = User::where('confirm_hash', $token)->where('email', $email);
        $user = $query->get();
        if ($user->count()) {
            $query->update(['email_verified_at' => Carbon::now(), 'confirm_hash' => null]);
            $data = [
                'subject' => 'Your account is verified',
                'body' => 'Welcome to our app. To Move Forward please verify your email',
            ];

            Mail::to($email)->send(new UserVerifiedMail($data));
            return response(['error' => 0, 'message' => 'Email verified successfully', 'user' => $user], 200);
        } else {
            return response(['error' => 1, 'message' => 'Bad request'], 400);
        }
    }

    /**
     * OAuth login
     *
     * @param  $data
     * @return \Illuminate\Http\Response
     */
    private function googleOAuthLogin($access_token)
    {

        $tokenData = $this->getDataFromGoogleAccessToken($access_token);

        if (!$tokenData) {
            return response()->json([
                'success' => false,
                'message' => 'Authentication errors',
                'data' => ['Invalid credentials']
            ]);
        }
        $user = User::where('email', $tokenData['email'])->where('auth_type', 'google')->first();

        if (!$user) {
            $user = User::create([
                'email' => $tokenData['email'],
                'name' => $tokenData['name'],
                "auth_type" => 'google',
                'password' => null
            ]);

            $defaultRoleSlug = config('hydra.default_user_role_slug', 'user');
            $user->roles()->attach(Role::where('slug', $defaultRoleSlug)->first());
        }

        if (config('hydra.delete_previous_access_tokens_on_login', false)) {
            $user->tokens()->delete();
        }

        $roles = $user->roles->pluck('slug')->all();

        $plainTextToken = $user->createToken('hydra-api-token', $roles)->plainTextToken;

        return response()->json(['error' => 0, 'id' => $user->id, 'token' => $plainTextToken], 200);
    }

    private function getDataFromGoogleAccessToken($token)
    {

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->get('https://www.googleapis.com/oauth2/v1/userinfo?access_token=' . $token);

        if ($response->successful()) {
            $data = $response->json();
            return $data;
        } else {
            return false;
        }
    }


    // oauth for facebook
    private function facebookOAuthLogin($access_token)
    {

        $tokenData = $this->getDataFromFacebookAccessToken($access_token);

        if (!$tokenData) {
            return response()->json([
                'success' => false,
                'message' => 'Authentication errors',
                'data' => ['Invalid credentials']
            ]);
        }

        $emailOrId = isset($tokenData['email']) ? $tokenData['email'] : $tokenData['id'];

        $user = User::where('email', $emailOrId)->where('auth_type', 'facebook')->first();

        if (!$user) {
            $user = User::create([
                'email' => $emailOrId,
                'name' => $tokenData['name'],
                "auth_type" => 'facebook',
                'password' => null
            ]);

            $defaultRoleSlug = config('hydra.default_user_role_slug', 'user');
            $user->roles()->attach(Role::where('slug', $defaultRoleSlug)->first());
        }

        if (config('hydra.delete_previous_access_tokens_on_login', false)) {
            $user->tokens()->delete();
        }

        $roles = $user->roles->pluck('slug')->all();

        $plainTextToken = $user->createToken('hydra-api-token', $roles)->plainTextToken;

        return response()->json(['error' => 0, 'id' => $user->id, 'token' => $plainTextToken], 200);
    }

    private function getDataFromFacebookAccessToken($token)
    {

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->get('https://graph.facebook.com/v16.0/574998071050123?fields=name,email&access_token=' . $token);

        if ($response->successful()) {
            $data = $response->json();
            return $data;
        } else {
            return false;
        }
    }

}