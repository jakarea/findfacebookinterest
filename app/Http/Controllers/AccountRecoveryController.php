<?php

namespace App\Http\Controllers;

use App\Http\Requests\AccountRecoveryStoreRequest;
use App\Mail\AccountRecoveryMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Mail;

class AccountRecoveryController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function index()
    {
        //
    }

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
                'subject' => 'Verify your account',
                'body' => 'Welcome to our app. To Move Forward please and update your password',
                "url" => $url
            ];
            Mail::to($creds['email'])->send(new AccountRecoveryMail($data));

            $data = DB::table('password_resets')->where('email', $creds['email'])->first();
            if ($data) {
                DB::table('password_resets')->where('email', $creds['email'])->update(['token' => $hash]);
            } else {
                DB::table('password_resets')->insert(['email' => $creds['email'], 'token' => $hash]);
            }

            return response()->json(['success' => true, 'message' => 'We have send you an email please check!'], 202);
        } catch (\Throwable $th) {
            return response()->json(['Sorry! Please try again latter']);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}