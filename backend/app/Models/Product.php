<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;

    protected $fillable = ['name', 'price', 'brand', 'category', 'description', 'stock', 'inStock', 'primaryImg', 'secondaryImg'];

    protected $casts = [
        'price' => 'decimal:2',
        'stock' => 'integer',
        'inStock' => 'boolean'
    ];

    public function getPrimaryImgUrlAttribute()
    {
        if (str_starts_with($this->primaryImg, 'http') || str_starts_with($this->primaryImg, './')) {
            return $this->primaryImg;
        }
        return $this->primaryImg ? asset('storage/' . $this->primaryImg) : null;
    }

    public function getSecondaryImgUrlAttribute()
    {
        if (str_starts_with($this->secondaryImg, 'http') || str_starts_with($this->secondaryImg, './')) {
            return $this->secondaryImg;
        }
        return $this->secondaryImg ? asset('storage/' . $this->secondaryImg) : null;
    }

    protected $appends = ['primary_img_url', 'secondary_img_url'];

    public function favoritedBy () {
        return $this->belongsToMany(User::class, 'favorites');
    }
}
