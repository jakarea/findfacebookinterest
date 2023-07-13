<?php

namespace App\Http\Controllers;

use App\Http\Requests\Keyword\StoreKeywordRequest;
use App\Models\DailySearch;
use App\Models\Keyword;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Auth;

class KeywordController extends Controller
{

    private function isAuthenticated()
    {
        return Auth::check();
    }

    private $apiBase = 'https://graph.facebook.com/v16.0';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Keyword::all();
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
        $data = $request->all();

        if ($this->isAuthenticated()) {
            $results = $this->authUser($data);
        } else {
            $results = $this->notAuthUser($data);
        }

        if (!$results['status']) {
            return response()->json($results['result']);
        }
        $this->createKeyword($data);

        $data = $this->search($data);
        return response()->json(json_decode($data));
    }


    private function authUser($data)
    {

        $keyQuery = Keyword::where('name', $data['name'])->where('lang', $data['lang']);
        $key = $keyQuery->get();
        if ($key->count()) {
            $keyQuery->update(['hit', $key['hit'] + 1]);
        } else {
            Keyword::create([
                'name' => $data['name'],
                'lang' => $data['lang'],
                'user_id' => Auth::id(),
            ]);
        }
        return ['status' => true];

    }

    private function notAuthUser($data)
    {
        if (!array_key_exists('cookie', $data) || !$data['cookie']) {
            return [
                'status' => false,
                'result' => [
                    'success' => false,
                    'message' => 'Validation errors',
                    'data' => ['Cookie is required']
                ]
            ];

        }


        $cookie = $data['cookie'];

        $search = DailySearch::where('cookie', $cookie)->first();
        if ($search && $search->count()) {
            $saveDate = Carbon::parse($search['date']);
            $now = Carbon::now();
            if ($saveDate->isSameDay($now)) {
                if ($search['count'] > 7) {
                    return [
                        'status' => false,
                        'result' => [
                            'success' => false,
                            'message' => 'Robot',
                            'data' => []
                        ]
                    ];

                }
                DailySearch::where('cookie', $cookie)->update(['count' => $search['count'] + 1]);
                return ['status' => true];

            }
            DailySearch::where('cookie', $cookie)->update(['count' => 1, 'date' => Carbon::now()]);
            return ['status' => true];

        }
        $values = [
            'cookie' => $cookie,
            'count' => 1,
            'date' => Carbon::now(),
        ];
        DailySearch::create($values);
        return ['status' => true];


    }


    private function createKeyword($data)
    {

        $find_query = Keyword::where('name', $data['name']);
        $find = $find_query->first();

        if ($find && $find->count()) {
            // dd($find);
            $find_query->update(['hit' => $find['hit'] + 1]);
        } else {


            $keyword_values = [
                'name' => $data['name'],
                'lang' => $data['lang'],
                'hit' => 1
            ];

            if ($this->isAuthenticated()) {
                $keyword_values['user_id'] = Auth::id();
            } else {
                $keyword_values['cookie'] = $data['cookie'];
            }

            Keyword::create($keyword_values);
        }
    }




    public function search($data)
    {

        $client = new Client();

        $type = 'adinterest';
        $limit = '10000';
        $key = $data['name'];
        if (array_key_exists('type', $data))
            $type = $data['type'];
        if (array_key_exists('limit', $data))
            $limit = $data['limit'];

        $url = sprintf('%s/search?type=%s&q=%s&limit=%s&locale=&access_token=%s', $this->apiBase, $type, $key, $limit, env('FACEBOOK_ACCESS_TOKEN'));
        $response = $client->get($url);
        return $response->getBody()->getContents();

    }
}