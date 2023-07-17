<?php

namespace App\Http\Controllers;

use App\Http\Requests\Keyword\StoreKeywordRequest;
use App\Models\DailySearch;
use App\Models\Keyword;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;

class KeywordController extends Controller
{
    private $apiBase = 'https://graph.facebook.com/v16.0';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $query = Keyword::orderBy('id', 'desc')->take(10);

        if (Auth::check()) {
            $data = $query->where('user_id', Auth::id())->get(['name', 'id']);
        } else {
            $data = $query->get(['name', 'id']);
        }

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

        if (Auth::check()) {
            $this->authUser($data);
        } else {
            $this->notAuthUser($data);
        }

        $result = $this->search($data);
        return response()->json(json_decode($result));
    }

    private function authUser($data)
    {
        $keyword = Keyword::where('name', $data['name'])->where('lang', $data['lang'])->first();

        if ($keyword) {
            $keyword->update(['hit' => $keyword->hit + 1]);
        } else {
            Keyword::create([
                'name' => $data['name'],
                'lang' => $data['lang'],
                'user_id' => Auth::id(),
                'hit' => 1
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

        if ($search) {
            $saveDate = Carbon::parse($search->date);
            $now = Carbon::now();

            if ($saveDate->isSameDay($now)) {
                if ($search->count > 7) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Robot',
                        'data' => []
                    ]);
                }

                $search->update(['count' => $search->count + 1]);
            } else {
                $search->update(['count' => 1, 'date' => Carbon::now()]);
            }
        } else {
            DailySearch::create([
                'cookie' => $cookie,
                'count' => 1,
                'date' => Carbon::now(),
            ]);
        }
    }

    private function search($data)
    {
        $client = new Client();
        $type = $data['type'] ?? 'adinterest';
        $limit = $data['limit'] ?? '1000';
        $key = $data['name'];

        $url = sprintf(
            '%s/search?type=%s&q=%s&limit=%s&locale=&access_token=%s',
            $this->apiBase,
            $type,
            $key,
            $limit,
            'EAA3HC1jMtEoBAKllVbZB0tobtL3ktGBXUenwH6tRnXPkCOmGwF6jc1OKeMnZAZCP3E3u8gHkgKYS46Rcm7cT2RRHW8QZCcBV7cZAwOGEnvAbKcbSKk64kC8h6gEqkbXZA3JG2Yh9htRZBZAtBtNZBZBZBuaqg7FCgypG7C84jfAbUS4vjjRVdS3FUHck6x3z5u2dRkZD'
        );

        $response = $client->get($url);
        return $response->getBody()->getContents();
    }
}
