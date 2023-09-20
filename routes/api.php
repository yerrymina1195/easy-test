<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClientController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\BrandController;

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
Route::resource('/categorie',CategoryController::class);
Route::resource('/brand',BrandController::class);



