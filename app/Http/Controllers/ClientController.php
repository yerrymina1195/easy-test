<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateClientRequest;
use App\Models\Client;

class ClientController extends Controller
{
    public function index()
    {
        $clients = Client::all();
        return response()->json($clients);
    }
    public function store(CreateClientRequest $request)
{
    $data = $request->validated();

    $client = Client::create($data);

    return response()->json(['message' => 'Client créé avec succès'], 201);
}
    //
}
