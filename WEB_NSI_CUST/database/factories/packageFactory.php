<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\package>
 */
class packageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
{
    return [
        'nama_paket' => fake()->randomElement(['Basic', 'Silver', 'Gold', 'Platinum']),
        'kecepatan' => fake()->numberBetween(10, 100) . ' Mbps',
        'harga' => fake()->numberBetween(100000, 500000),
        
    ];
}
}
