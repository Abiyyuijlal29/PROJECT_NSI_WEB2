<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\customer>
 */
class customerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
{
    return [
        'nama' => fake()->name(),
        'alamat' => fake()->address(),
        'no_hp' => fake()->phoneNumber(),
        'package_id' => \App\Models\Package::factory(),
        'status' => fake()->randomElement(['aktif', 'nonaktif']),
    ];
}
}
