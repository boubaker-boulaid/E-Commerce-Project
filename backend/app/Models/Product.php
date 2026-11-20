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
        return $this->imageUrl($this->primaryImg);
    }

    public function getSecondaryImgUrlAttribute()
    {
        return $this->imageUrl($this->secondaryImg);
    }

    /**
     * Turn a stored image path into a URL the React app can load.
     * Seeded images live in the frontend's public folder (/assets/...),
     * uploaded ones on the public storage disk.
     */
    private function imageUrl(?string $path): ?string
    {
        if (! $path) {
            return null;
        }
        if (str_starts_with($path, 'http')) {
            return $path;
        }
        if (str_starts_with($path, './')) {
            return substr($path, 1);
        }
        if (str_starts_with($path, '/')) {
            return $path;
        }

        return asset('storage/'.$path);
    }

    protected $appends = ['primary_img_url', 'secondary_img_url'];

    public function favoritedBy () {
        return $this->belongsToMany(User::class, 'favorites');
    }
}
