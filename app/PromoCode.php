<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PromoCode extends Model
{
    //
    protected $table = "promoCode";
    protected $primaryKey = "promoCodeId";

    public function usedBy(){
        return $this->hasMany('App\UserPromoCode', 'promoCodeId', 'promoCodeId');
    }
}
