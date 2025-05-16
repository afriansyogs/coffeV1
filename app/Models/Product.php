<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'category_id',
        'product_name',
        'product_img',
        'price',
        'stock',
        'description'
    ];

    public function category() {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
