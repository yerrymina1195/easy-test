<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClientController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\ProduitController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::post('/signup',[AuthController::class, 'signup']);
Route::post('/login',[AuthController::class, 'login']);
Route::post('/clients', [ClientController::class, 'store']);
Route::get('/clients', [ClientController::class, 'index']);
Route::get('/clients/{id}', [ClientController::class, 'show']);
Route::delete('/clients/{id}', [ClientController::class, 'destroy']);
Route::delete('/bgCategory/{id}/delete', [ClientController::class, 'destroy']);
Route::put('/clients/{id}', [ClientController::class, 'update']);
Route::put('categorie/{id}',[CategoryController::class,'update']);
Route::get('categorie/{id}',[CategoryController::class,'show']);
Route::get('categorie',[CategoryController::class,'index']);
Route::delete('categorie/{id}',[CategoryController::class,'destroy']);
Route::resource('categorie',CategoryController::class);
Route::put('brand/{id}',[BrandController::class,'update']);
Route::delete('brand/{id}',[BrandController::class,'destroy']);
Route::resource('brand',BrandController::class);
Route::resource('produit',ProduitController::class);
Route::put('produit/{id}',[ProduitController::class,'update']);
Route::delete('produit/{id}',[ProduitController::class,'destroy']);




