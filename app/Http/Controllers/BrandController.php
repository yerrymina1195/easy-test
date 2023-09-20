<?php
namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $brand = Brand::all();
        return response()->json($brand);
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
          $brand = Brand::create([
            "nom"=>$request->nom,
            'url'=>$request->url,
            'slug'=>$request->slug,
            'visibility'=>$request->visibility, 
            'description'=>$request-> description
        ]);
         return response()->json(['message' =>'Brand Created Successfully!!',
        'brand'=> $brand]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Brand  $brand
     * @return \Illuminate\Http\Response
     */
    public function show(Brand $brand)
    {
        //
        return response()->json([
            'brand'=>$brand
            
        ]);
        console.log($brand);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Brand  $brand
     * @return \Illuminate\Http\Response
     */
    public function edit(Brand $brand)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Brand  $brand
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Brand $brand)
    {
        //

            // Validez les données du formulaire
            $request->validate([
                'nom' => 'required|string',
                'slug' => 'required|string',
                'url' => 'nullable|string',
                'visibility' => 'boolean',
                'description' => 'nullable|string',
            ]);
        
            // Récupérez la catégorie à mettre à jour
            $category = Category::findOrFail($id);
        
            // Mettez à jour les données de la catégorie
            $category->update([
                'nom' => $request->input('nom'),
                'slug' => $request->input('slug'),
                'url' => $request->input('url'),
                'visibility' => $request->input('visibility', false),
                'description' => $request->input('description'),
            ]);
        
            return response()->json(['message' => 'Catégorie mise à jour avec succès'], 200);
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Brand  $brand
     * @return \Illuminate\Http\Response
     */
    public function destroy(Brand $brand)
    {
        //
    }
}
