<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        return response()->json(auth()->user()->favorites, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
        ]);

        auth()->user()->favorites()->attach($request->product_id);

        return response()->json([
            'message' => 'Product added to favorites'
        ], 201);
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $productId)
    {
        auth()->user()->favorites()->detach($productId);

        return response()->json([
            'message' => 'Product removed from favorites'
        ], 204);
    }
}
