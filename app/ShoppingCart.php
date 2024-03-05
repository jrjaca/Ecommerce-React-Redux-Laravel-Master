<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ShoppingCart extends Model
{
    //
    use SoftDeletes;
    protected $table = "shoppingCart";
    protected $primaryKey = "shoppingCartId";

    protected $guarded = [];

    public function products(){
        return $this->hasMany('App\Product', 'productId', 'product_id');
    }
}
