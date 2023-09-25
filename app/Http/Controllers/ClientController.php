<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateClientRequest;
use App\Http\Requests\UpdateClientRequest;
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
public function show($id)
{
    $client = Client::find($id);

    if (!$client) {
        return response()->json(['message' => 'Client non trouvé'], 404);
    }

    return response()->json($client);
}
public function destroy($id)
{
    $client = Client::find($id);

    if (!$client) {
        return response()->json(['message' => 'Client non trouvé'], 404);
    }

    $client->delete();

    return response()->json(['message' => 'Client supprimé avec succès']);
}
public function update(UpdateClientRequest $request, $id)
{
    $data = $request->validated();

    $client = Client::find($id);

    if (!$client) {
        return response()->json(['message' => 'Client non trouvé'], 404);
    }

    $client->update($data);

    return response()->json(['message' => 'Client mis à jour avec succès']);
}
    //
}
