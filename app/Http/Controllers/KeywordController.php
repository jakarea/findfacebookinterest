<?php

namespace App\Http\Controllers;

use App\Http\Requests\Keyword\KeywordStoreRequest;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

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
        //
        $url = $this->apiBase . "/search?type=adinterest&q=fitness&limit=10000&locale=&access_token=" . env('FACEBOOK_ACCESS_TOKEN');
        $data = $this->makeGetRequest($url);
        return ($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(KeywordStoreRequest $request)
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


    private function makeGetRequest($url)
    {
        $client = new Client();
        $response = $client->get($url);

        // Get the response body as a string
        $body = $response->getBody()->getContents();

        // Process the response
        // ...

        return response()->json($body);
    }
}