<?php

namespace App\Http\Controllers;

use App\Http\Requests\Keyword\KeySearchRequest;
use App\Http\Requests\Keyword\StoreKeywordRequest;
use App\Models\Keyword;
use GuzzleHttp\Client;

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

        $item = Keyword::create($data);

        return response()->json($item);
    }




    public function search(KeySearchRequest $request)
    {

        $data = $request->all();
        $client = new Client();

        $type = 'adinterest';
        $limit = '10000';
        $key = $data['key'];
        if (array_key_exists('type', $data))
            $type = $data['type'];
        if (array_key_exists('limit', $data))
            $limit = $data['limit'];

        $url = sprintf('%s/search?type=%s&q=%s&limit=%s&locale=&access_token=%s', $this->apiBase, $type, $key, $limit, env('FACEBOOK_ACCESS_TOKEN'));
        $response = $client->get($url);
        $body = $response->getBody()->getContents();
        return response()->json(json_decode($body));
    }
}