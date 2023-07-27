<?php

namespace App\Http\Controllers;

use App\Http\Requests\Keyword\StoreKeywordRequest;
use App\Models\DailySearch;
use App\Models\Keyword;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Laravel\Sanctum\PersonalAccessToken;

class KeywordController extends Controller
{

    private $apiBase = 'https://graph.facebook.com/v16.0';
    private $user = null;

    /**
     * 
     * 
     * @return boolean;
     */
    private function isAuthenticated()
    {
        $headers = apache_request_headers();
        if (!isset($headers['Authorization']) || strpos($headers['Authorization'], 'Bearer') === false) {
            return false;
        }

        $token = str_replace('Bearer ', '', $headers['Authorization']);

        // Fetch the associated token Model
        $find_token = PersonalAccessToken::findToken($token);

        if (!$find_token) {
            return false;
        }
        // Get the assigned user
        $this->user = $find_token->tokenable;
        return true;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data_query = Keyword::orderByDesc('id')->take(10);
        if ($this->isAuthenticated()) {
            $data_query->where('user_id', $this->user['id']);
        }
        $data = $data_query->get(['name', 'id']);
        return response()->json($data);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Keyword\StoreKeywordRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreKeywordRequest $request)
    {

        $data = $request->validated();

        $response = $this->isAuthenticated() ? $this->authUser($data) : $this->notAuthUser($data);
        if ($response) {
            return $response;
        }
        $this->updateOrCreateKeyword($data);
        return $this->search($data);


    }

    private function authUser($data)
    {

        if (isset($data['cookie']) && !empty($data['cookie'])) {
            DailySearch::where('cookie', $data['cookie'])->delete();
            Keyword::where('cookie', $data['cookie'])->update([
                'user_id' => $this->user['id'],
                'cookie' => null,
            ]);
        }


    }

    private function notAuthUser($data)
    {


        if (!isset($data['cookie']) || empty($data['cookie'])) {
            return response()->json([
                'success' => false,
                'message' => 'Validation errors',
                'data' => ['Cookie is required']
            ]);

        }

        $cookie = $data['cookie'];
        $search = DailySearch::where('cookie', $cookie)->first();

        if (!$search) {
            DailySearch::create([
                'cookie' => $cookie,
                'count' => 1,
                'date' => Carbon::now(),
            ]);
            return;
        }

        if (!(Carbon::parse($search['date'])->isSameDay(Carbon::now()))) {
            $search->update(['count' => 1, 'date' => Carbon::now()]);
            return;
        }

        if ($search['count'] >= 7 * 100) {
            return response()->json([
                'success' => false,
                'message' => 'Robot',
                'data' => []
            ], 400);
        }
        $search->increment('count');
    }


    private function updateOrCreateKeyword($data)
    {

        $find = Keyword::where('name', $data['name'])->first();
        if ($find) {
            $find->increment('hit');
            return;
        }

        Keyword::create([
            'name' => $data['name'],
            'lang' => $data['lang'],
            'hit' => 1,
            'user_id' => $this->user ? $this->user['id'] : null,
            'cookie' => !$this->user && isset($data['cookie']) ? $data['cookie'] : null
        ]);

    }


    public function search($data)
    {

        $client = new Client();
        $type = isset($data['type']) ? $data['type'] : 'adinterest';
        $limit = isset($data['limit']) ? $data['limit'] : '1000';
        $key = $data['name'];

        $url = sprintf('%s/search?type=%s&q=%s&limit=%s&locale=&access_token=%s', $this->apiBase, $type, $key, $limit, env('FACEBOOK_ACCESS_TOKEN'));

        $response = $client->get($url);
        return response()->json(json_decode($response->getBody()->getContents()));

    }
}