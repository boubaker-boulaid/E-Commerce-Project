<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->unique()->sentence(2),
            'price' => $this->faker->randomFloat(2, 10, 99999),
            'brand' => $this->faker->randomElement(['Nike', 'Adidas', 'Puma', 'Bata', 'Apex']),
            'category' => $this->faker->randomElements(['Sports', 'Men', 'Women']),
            'description' => $this->faker->sentence(20),
            'stock' => $this->faker->numberBetween(1, 100),
            'primaryImg' => './assets/images/product-' . $this->faker->numberBetween(1, 8) . '.jpg',
        ];
    }
}
