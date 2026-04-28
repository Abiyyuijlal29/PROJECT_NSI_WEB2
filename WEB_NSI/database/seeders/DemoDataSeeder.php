<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Customer;
use App\Models\Ticket;
use App\Models\Package;
use App\Models\Invoice;
use App\Models\WhatsappLog;

class DemoDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Clear existing demo data to prevent duplicates
        Ticket::query()->delete();
        Invoice::query()->delete();
        Customer::query()->delete();
        Package::query()->delete();
        WhatsappLog::query()->delete();

        // 1. Packages
        Package::create(['packet_id' => 'VX-LT10',  'name' => 'Lite',     'speed' => '10 Mbps Fiber',  'price' => 150000, 'bandwidth_up' => 5,  'bandwidth_down' => 10,  'status' => 'Active',   'color_theme' => 'blue',   'icon' => 'wifi',   'subscribers' => 120]);
        Package::create(['packet_id' => 'VX-ST20',  'name' => 'Standard', 'speed' => '20 Mbps Fiber',  'price' => 300000, 'bandwidth_up' => 10, 'bandwidth_down' => 20,  'status' => 'Active',   'color_theme' => 'yellow', 'icon' => 'zap',    'subscribers' => 450]);
        Package::create(['packet_id' => 'VX-PR50',  'name' => 'Pro',      'speed' => '50 Mbps Fiber',  'price' => 550000, 'bandwidth_up' => 50, 'bandwidth_down' => 50,  'status' => 'Active',   'color_theme' => 'purple', 'icon' => 'rocket', 'subscribers' => 890]);
        Package::create(['packet_id' => 'VX-UL100', 'name' => 'Ultra',    'speed' => '100 Mbps Fiber', 'price' => 950000, 'bandwidth_up' => 50, 'bandwidth_down' => 100, 'status' => 'Disabled', 'color_theme' => 'pink',   'icon' => 'gem',    'subscribers' => 210]);

        // 2. Customers
        $c1 = Customer::create(['name' => 'Sarah Jenkins', 'tier' => 'Pro',      'avatar_url' => 'https://i.pravatar.cc/150?u=sarah',   'address' => '321 Navy Way, Florida',       'status' => 'ACTIVE',    'last_activity' => now()->subHours(2)]);
        $c2 = Customer::create(['name' => 'David Miller',  'tier' => 'Standard', 'avatar_url' => 'https://i.pravatar.cc/150?u=david',   'address' => '789 Cobalt Ave, Texas',       'status' => 'ACTIVE',    'last_activity' => now()->subDays(1)]);
        $c3 = Customer::create(['name' => 'Michael Chang', 'tier' => 'Ultra',    'avatar_url' => 'https://i.pravatar.cc/150?u=michael', 'address' => '88 Pacific Rd, Washington',   'status' => 'INACTIVE',  'last_activity' => now()->subDays(5)]);
        $c4 = Customer::create(['name' => 'Anita Desai',   'tier' => 'Lite',     'avatar_url' => 'https://i.pravatar.cc/150?u=anita',   'address' => '45 Ember Lane, Nevada',       'status' => 'SUSPENDED', 'last_activity' => now()->subDays(12)]);

        // 3. Tickets
        Ticket::create(['ticket_number' => '#VX-9281', 'customer_id' => $c1->id, 'category' => 'Technical', 'priority' => 'High', 'status' => 'In Progress', 'technician' => 'Marcus Thorne']);
        Ticket::create(['ticket_number' => '#VX-9275', 'customer_id' => $c2->id, 'category' => 'Billing', 'priority' => 'Medium', 'status' => 'Open', 'technician' => 'Elena Rodriguez']);
        Ticket::create(['ticket_number' => '#VX-9270', 'customer_id' => $c3->id, 'category' => 'Account', 'priority' => 'Low', 'status' => 'Resolved', 'technician' => 'Sam Wilson']);
        Ticket::create(['ticket_number' => '#VX-9268', 'customer_id' => $c4->id, 'category' => 'Technical', 'priority' => 'High', 'status' => 'In Progress', 'technician' => 'Marcus Thorne']);

        // 4. Invoices
        Invoice::create(['customer_id' => $c1->id, 'invoice_number' => 'INV-2024-001', 'amount' => 550000, 'due_date' => now()->addDays(5),  'status' => 'Pending']);
        Invoice::create(['customer_id' => $c2->id, 'invoice_number' => 'INV-2024-002', 'amount' => 300000, 'due_date' => now()->addDays(2),  'status' => 'Paid']);
        Invoice::create(['customer_id' => $c3->id, 'invoice_number' => 'INV-2024-003', 'amount' => 950000, 'due_date' => now()->subDays(3),  'status' => 'Overdue']);
        Invoice::create(['customer_id' => $c4->id, 'invoice_number' => 'INV-2024-004', 'amount' => 150000, 'due_date' => now()->addDays(10), 'status' => 'Pending']);

        // 5. Whatsapp Logs
        WhatsappLog::create(['type' => 'sent',    'message' => 'Payment Confirmation Sent', 'recipient_number' => '+62 812-3456-7890', 'sent_at' => now()->subMinutes(2)]);
        WhatsappLog::create(['type' => 'created', 'message' => 'Invoice Generated',         'recipient_number' => '+62 813-1122-3344', 'sent_at' => now()->subMinutes(45)]);
        WhatsappLog::create(['type' => 'sent',    'message' => 'Payment Reminder Sent',     'recipient_number' => '+62 877-3368-7786', 'sent_at' => now()->subHours(1)]);
        WhatsappLog::create(['type' => 'sent',    'message' => 'Payment Confirmation Sent', 'recipient_number' => '+62 811-2233-4455', 'sent_at' => now()->subHours(2)]);
    }
}
