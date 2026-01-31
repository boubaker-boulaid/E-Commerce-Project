<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductStoreUpdateRequest;
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
    public function store(ProductStoreUpdateRequest $request)
    {
        $validated = $request->validated();

        $newProduct = Product::create($validated);

        return response()->json([
            'message' => 'product created successfully',
            'product' => $newProduct
        ], 201);
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
    public function update(ProductStoreUpdateRequest $request, Product $product)
    {
        $validated = $request->validated();

        $product->update($validated);

        return response()->json([
            'message' => 'product updated successfully'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json([
            'message' => 'product deleted successfully'
        ], 204);
    }

    public function statistic()
    {
        $allProducts = Product::latest()->get();
        $productsCount = Product::count();
        $cheapestProduct = Product::orderBy('price', 'asc')->first();
        $mostExpensiveProduct = Product::orderBy('price', 'desc')->first();
        $mostLikedProduct = Product::withCount('favoritedBy')
            ->orderBy('favorited_by_count', 'desc')
            ->first();

        return response()->json([
            'allProducts' => $allProducts,
            'productsCount' => $productsCount,
            'cheapestProduct' => $cheapestProduct,
            'mostExpensiveProduct' => $mostExpensiveProduct,
            'mostLikedProduct' => $mostLikedProduct
        ], 200);
    }
}
