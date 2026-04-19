<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Inertia\Inertia;
use Inertia\Response;

class BillingController extends Controller
{
    public function index(): Response
    {
        $invoices = [
            ['customer_name' => 'Budi Santoso',  'invoice_id' => '#INV-2024-001', 'amount' => '$45.00',  'due_date' => 'Oct 12, 2024', 'status' => 'Paid'],
            ['customer_name' => 'Siti Aminah',   'invoice_id' => '#INV-2024-002', 'amount' => '$32.00',  'due_date' => 'Oct 14, 2024', 'status' => 'Pending'],
            ['customer_name' => 'David Miller',  'invoice_id' => '#INV-2024-003', 'amount' => '$115.00', 'due_date' => 'Oct 10, 2024', 'status' => 'Overdue'],
            ['customer_name' => 'Dewi Lestari',  'invoice_id' => '#INV-2024-004', 'amount' => '$45.00',  'due_date' => 'Oct 15, 2024', 'status' => 'Pending'],
        ];

        $stats = [
            'total_revenue'           => '$45,280.00',
            'outstanding_receivables' => '$3,840.15',
            'total_expenses'          => '$18,400.00',
            'net_profit'              => '$26,880.00',
            'uncollected_count'       => 17,
        ];

        $whatsapp_log = [
            ['type' => 'sent',    'message' => 'Payment Confirmation Sent', 'to' => '+62 812-3456-7890', 'time' => '2 minutes ago'],
            ['type' => 'created', 'message' => 'Invoice Generated',         'to' => '+62 813-1122-3344', 'time' => '45 minutes ago'],
            ['type' => 'sent',    'message' => 'Payment Reminder Sent',     'to' => '+62 877-3368-7786', 'time' => '1 hour ago'],
            ['type' => 'sent',    'message' => 'Payment Confirmation Sent', 'to' => '+62 811-2233-4455', 'time' => '2 hours ago'],
        ];

        return Inertia::render('Billing', [
            'stats'        => $stats,
            'invoices'     => $invoices,
            'whatsapp_log' => $whatsapp_log,
        ]);
    }
}
