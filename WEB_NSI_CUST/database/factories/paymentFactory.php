<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\payment>
 */
class paymentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
{
    return [
        'customer_id' => \App\Models\Customer::factory(),
        'bulan' => fake()->monthName(),
        'jumlah_bayar' => fake()->numberBetween(100000, 500000),
        'tanggal_bayar' => fake()->date(),
        'status' => fake()->randomElement(['lunas', 'belum']),
    ];
}
}
