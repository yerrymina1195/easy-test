<?php

namespace App\Http\Controllers;

use App\Models\Produit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage; // Importez la classe Storage

class ProduitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $produit= Produit::all();
        return response()->json($produit);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'nom' => 'required',
            'slug' => 'required',
            'description' => 'required',
            'image' =>'required|image|mimes:jpeg,png,jpg,gif|max:2048' ,
            'prix' =>'required' ,  
            'compare_prix' => 'required',  
            'cost' => 'required',  
            'sku' => 'required',
            'barcode' => 'required',
            'quantity'=> 'required',
            'security_stock' => 'required',
            'product_return' =>'required' ,
            'product_shiped' =>'required' ,
            'visibility' =>'required' ,
            'date' =>'required' ,
            'brand' => 'required',
            'category' => 'required',
        ]);
        $data = $request->all();
        $productReturn = $request->input('product_return') ? 1 : 0;
        $productShiped = $request->input('product_shiped') ? 1 : 0;
        $visibility = $request->input('visibility') ? 1 : 0;
        $data['product_return']=$productReturn;
        $data['product_shiped']=$productShiped;
        $data['visibility']=$visibility;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('public/images'); // Stockez l'image dans le répertoire de stockage public
            $imageUrl = asset(Storage::url($imagePath)); // Générez l'URL de l'image à l'aide de Storage
            $data['image'] = $imageUrl;
        }
      
        $produit = Produit::create($data);
          return response()->json(['products' => $produit,'message'=> 'produit create succefull'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Produit  $produit
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $produit= Produit::find($id);
        if(!$produit){
            return response()->json(['message' => 'Produit non trouvé'], 404);
        }
        // Retournez les détails du produit au format JSON
    return response()->json(['product' => $produit], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Produit  $produit
     * @return \Illuminate\Http\Response
     */
    public function edit(Produit $produit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Produit  $produit
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $request->validate([
            'nom' => 'required',
            'slug' => 'required',
            'description' => 'required',
            'image' =>'nullable' ,
            'prix' =>'required' ,  
            'compare_prix' => 'required',  
            'cost' => 'required',  
            'sku' => 'required',
            'barcode' => 'required',
            'quantity'=> 'required',
            'security_stock' => 'required',
            'product_return' =>'required' ,
            'product_shiped' =>'required' ,
            'visibility' =>'required' ,
            'date' =>'required' ,
            'brand' => 'required',
            'category' => 'required',
        ]);
        
        try {
        $data= $request->all();
        
        $produit= Produit::find($id);
        if (!$produit) {
            return response()->json(['message' => 'Produit non trouvé'], 404);
        }  
        $produit->update($request->all());
    // 5. Traitement de l'image
       if ($request->hasFile('image')) {
        if($produit->image){
            $exist= asset(Storage::url($request->file('image')->store('public/images')));
            if($exists){
                Storage::url($request->file('image')->store('public/images'));
            };
        };
           $imagePath = $request->file('image')->store('public/images');
           $imageUrl = asset(Storage::url($imagePath));
           $data['image'] = $imageUrl;
           $produit->save();
       }
       
        return response()->json(['message' => 'Produit mis à jour avec succès'], 200);
    } catch (\Exception $e) {
        return response()->json(['message' => 'Erreur lors de la mise à jour du produit'], 500);
    }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Produit  $produit
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $produit = Produit::find($id);
        if($produit){
            $produit->delete();
            return  response()->json(['message' => ' produit supprimer']);
        }
        else {
            // Gérer le cas où l'objet n'a pas été trouvé
            return response()->json(['message' => 'L\'objet n\'existe pas.'], 404);
        }
    }
}
