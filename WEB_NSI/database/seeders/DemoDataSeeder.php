<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Customer;
use App\Models\Ticket;

class DemoDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $c1 = Customer::create(['name' => 'Sarah Jenkins', 'tier' => 'Tier 3 Platinum', 'avatar_url' => 'https://i.pravatar.cc/150?u=sarah']);
        $c2 = Customer::create(['name' => 'David Miller', 'tier' => 'Home Fiber 500', 'avatar_url' => 'https://i.pravatar.cc/150?u=david']);
        $c3 = Customer::create(['name' => 'Michael Chang', 'tier' => 'Business Enterprise', 'avatar_url' => 'https://i.pravatar.cc/150?u=michael']);
        $c4 = Customer::create(['name' => 'Anita Desai', 'tier' => 'Standard Fiber 100', 'avatar_url' => 'https://i.pravatar.cc/150?u=anita']);

        Ticket::create(['ticket_number' => '#VX-9281', 'customer_id' => $c1->id, 'category' => 'Technical', 'priority' => 'High', 'status' => 'In Progress', 'technician' => 'Marcus Thorne']);
        Ticket::create(['ticket_number' => '#VX-9275', 'customer_id' => $c2->id, 'category' => 'Billing', 'priority' => 'Medium', 'status' => 'Open', 'technician' => 'Elena Rodriguez']);
        Ticket::create(['ticket_number' => '#VX-9270', 'customer_id' => $c3->id, 'category' => 'Account', 'priority' => 'Low', 'status' => 'Resolved', 'technician' => 'Sam Wilson']);
        Ticket::create(['ticket_number' => '#VX-9268', 'customer_id' => $c4->id, 'category' => 'Technical', 'priority' => 'High', 'status' => 'In Progress', 'technician' => 'Marcus Thorne']);
    }
}
