<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Product::query();

        // filter by category
        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }

        // filter by brand
        if ($request->filled('brand')) {
            $query->where('brand', $request->brand);
        }

        if ($request->filled('sort')) {
            [$feildToSort, $direction] = explode('-', $request->sort);

            $query->orderBy($feildToSort, $direction);
        } else {
            // Only apply default sorting if no custom sort is specified
            $query->latest();
        }

        if ($request->filled('inStock')) {
            $query->where('inStock', $request->boolean('inStock'));
        }

        $products = $query->paginate(8);

        return response()->json($products, 200);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return response()->json($product, 200);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
