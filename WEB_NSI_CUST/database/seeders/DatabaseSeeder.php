<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Package;
use App\Models\Customer;
use App\Models\Payment;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Buat 5 data paket wifi
        Package::factory(5)->create();

        // Buat 10 data customer
        Customer::factory(10)->create();

        // Buat 15 data pembayaran
        Payment::factory(15)->create();
    }
}