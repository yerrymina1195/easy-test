<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom',
        'slug',
        'description',
        'image',
        'prix',  
        'compare_prix',  
        'cost',  
        'sku',
        'barcode',
        'quantity',
        'security_stock',
        'product_return',
        'product_shiped',
        'visibility',
        'date',
        'brand',
        'category',

    ];
    protected $casts = [
        'product_return' => 'boolean',
        'product_shiped' => 'boolean',
        'visibility' => 'boolean',
    ];
}
