<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $category = Category::all();
        return response()->json($category);
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
    public function store(Request $request )
    {
     $category =  Category::create([
            "nom"=>$request->nom,
            'url'=>$request->url,
            'slug'=>$request->slug,
            'visibility'=>$request->visibility, 
            'description'=>$request-> description
        ]);
         return response()->json(['message' =>'Category Created Successfully!!',
        'category'=> $category]);
    
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $category = Category::find($id);

        if (!$category) {
            return response()->json(['message' => 'Client non trouvé'], 404);
        }
    
     
        return response()->json(['category'=>$category ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $category = Category::find($id);
        $request->validate([
            'nom' => 'required',
            'slug' => 'required',
            'url' => 'required',
            'visibility' => 'boolean',
            'description' => 'required',
        ]);
    $category ->update($request->all());
    return response()->json(['message' => 'Categories mise à jour avec succès'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
           //
           $category = Category::find($id);
           if($category){
               $category->delete();
               return  response()->json(['message' => 'category supprimer ']);
           }
           else {
               // Gérer le cas où l'objet n'a pas été trouvé
               return response()->json(['message' => 'L\'objet n\'existe pas.'], 404);
           }
    }
}
