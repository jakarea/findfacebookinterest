<?php

namespace App\Http\Controllers;

use App\Http\Requests\AccountRecover\AccountRecoverUpdatePassword;
use App\Http\Requests\AccountRecoverVerifyRequest;
use App\Http\Requests\AccountRecoveryStoreRequest;
use App\Mail\AccountRecoveryMail;
use App\Models\User;
use Carbon\Carbon;
use Hash;
use Illuminate\Support\Facades\DB;
use Mail;

class AccountRecoveryController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AccountRecoveryStoreRequest $request)
    {
        $creds = $request->all();

        $user = User::where('email', $creds['email'])->first();
        if (!$user) {
            return response()->json(['error' => 1, 'message' => 'User not found!'], 404);
        }

        $hash = bcrypt(env('RESET_PASSWORD_HASH_SECRET'));
        $url = env('APP_URL') . '/recover/account/' . $creds['email'] . '?token=' . $hash;
        try {
            $data = [
                'subject' => 'Account Recover',
                'body' => 'Welcome to our app. To Move Forward please and update your password',
                "url" => $url
            ];
            Mail::to($creds['email'])->send(new AccountRecoveryMail($data));

            $data = DB::table('password_resets')->where('email', $creds['email'])->first();
            if ($data) {
                DB::table('password_resets')->where('email', $creds['email'])->update(['token' => $hash, 'created_at' => Carbon::now()]);
            } else {
                DB::table('password_resets')->insert(['email' => $creds['email'], 'token' => $hash]);
            }

            return response()->json(['success' => true, 'message' => 'We have send you an email please check!'], 202);
        } catch (\Throwable $th) {
            return response()->json(['Sorry! Please try again latter']);
        }

    }
    /**
     * Verify email and token for resetting password.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function verify(AccountRecoverVerifyRequest $request)
    {
        $creds = $request->all();

        if (!$this->is_token_email_exist($creds['email'], $creds['token'])) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid Credentials',
                'data' => []
            ], 400);
        }

        return response()->json([
            'success' => true,
            'message' => 'Credential verified!',
            'data' => []
        ]);

    }


    public function update(AccountRecoverUpdatePassword $request)
    {
        $creds = $request->all();

        if (!$this->is_token_email_exist($creds['email'], $creds['token'])) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid Credentials',
                'data' => []
            ], 400);
        }

        $user = User::where('email', $creds['email'])->first();

        $hash = bcrypt($creds['password']);

        $user->update(['password' => $hash]);
        return $user;

    }

    private function is_token_email_exist($email, $token)
    {
        if (!Hash::check(env('RESET_PASSWORD_HASH_SECRET'), $token)) {
            return false;
        }

        $item = DB::table('password_resets')->where('email', $email)->first();
        if (!$item) {
            return false;
        }

        if ($item->token != $token) {
            return false;
        }

        return true;
    }


}