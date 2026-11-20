<?php

use App\Models\Cart;
use App\Models\Product;
use App\Models\User;

test('an admin can change a user role', function () {
    $admin = User::factory()->admin()->create();
    $user = User::factory()->create();

    $this->actingAs($admin)
        ->patchJson("/api/users/{$user->id}", ['role' => 'admin'])
        ->assertOk();

    expect($user->fresh()->role)->toBe('admin');
});

test('an admin can delete another user', function () {
    $admin = User::factory()->admin()->create();
    $user = User::factory()->create();

    $this->actingAs($admin)
        ->deleteJson("/api/users/{$user->id}")
        ->assertSuccessful();

    expect(User::find($user->id))->toBeNull();
});

test('an admin cannot delete their own account', function () {
    $admin = User::factory()->admin()->create();

    $this->actingAs($admin)
        ->deleteJson("/api/users/{$admin->id}")
        ->assertForbidden();

    expect(User::find($admin->id))->not->toBeNull();
});

test('a regular user cannot reach the admin endpoints', function () {
    $user = User::factory()->create();

    $this->actingAs($user)->getJson('/api/users')->assertForbidden();
});

test('an admin can update a product and keep its name', function () {
    $admin = User::factory()->admin()->create();
    $product = Product::factory()->create(['name' => 'Air Runner Pro']);

    $this->actingAs($admin)
        ->putJson("/api/products/{$product->id}", [
            'name' => 'Air Runner Pro',
            'price' => 120,
            'brand' => 'Nike',
            'category' => 'Men',
            'stock' => 10,
        ])
        ->assertOk();

    expect($product->fresh()->price)->toEqual('120.00');
});

test('a user can only remove their own cart items', function () {
    $owner = User::factory()->create();
    $other = User::factory()->create();
    $product = Product::factory()->create();
    $item = Cart::create(['user_id' => $owner->id, 'product_id' => $product->id, 'quantity' => 1]);

    $this->actingAs($other)->deleteJson("/api/cart/{$item->id}")->assertSuccessful();
    expect(Cart::find($item->id))->not->toBeNull();

    $this->actingAs($owner)->deleteJson("/api/cart/{$item->id}")->assertSuccessful();
    expect(Cart::find($item->id))->toBeNull();
});

test('seeded product images resolve to the frontend assets folder', function () {
    $product = Product::factory()->create(['primaryImg' => './assets/images/product-1.jpg']);

    expect($product->primary_img_url)->toBe('/assets/images/product-1.jpg');
});
