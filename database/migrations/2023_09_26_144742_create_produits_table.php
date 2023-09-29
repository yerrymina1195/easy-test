<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProduitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('produits', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('slug');
            $table->text('description');
            $table->string('image');
            $table->decimal('prix');  
            $table->decimal('compare_prix');  
            $table->decimal('cost');  
            $table->integer('sku');
            $table->integer('barcode');
            $table->integer('quantity');
            $table->integer('security_stock');
            $table->boolean('product_return')->default(0);
            $table->boolean('product_shiped')->default(0);
            $table->boolean('visibility')->default(0);
            $table->date('date');
            $table->string('brand');
            $table->string('category');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('produits');
    }
}
