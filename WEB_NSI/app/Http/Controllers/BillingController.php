<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Inertia\Inertia;
use Inertia\Response;

class BillingController extends Controller
{
    public function index(): Response
    {
        $dbInvoices = \App\Models\Invoice::with('customer')->latest()->take(10)->get();
        $invoices = $dbInvoices->map(function ($inv) {
            return [
                'customer_name' => $inv->customer->name ?? 'Unknown',
                'invoice_id'    => '#' . $inv->invoice_number,
                'amount'        => 'Rp ' . number_format($inv->amount, 0, ',', '.'),
                'due_date'      => $inv->due_date->format('M d, Y'),
                'status'        => $inv->status,
            ];
        });

        $totalRevenue = \App\Models\Invoice::where('status', 'Paid')->sum('amount');
        $outstanding = \App\Models\Invoice::where('status', '!=', 'Paid')->sum('amount');
        $uncollectedCount = \App\Models\Invoice::where('status', '!=', 'Paid')->count();
        $totalExpenses = 18400000; // hardcoded example expense
        $netProfit = $totalRevenue - $totalExpenses;

        $stats = [
            'total_revenue'           => 'Rp ' . number_format($totalRevenue, 0, ',', '.'),
            'outstanding_receivables' => 'Rp ' . number_format($outstanding, 0, ',', '.'),
            'total_expenses'          => 'Rp ' . number_format($totalExpenses, 0, ',', '.'),
            'net_profit'              => 'Rp ' . number_format($netProfit, 0, ',', '.'),
            'uncollected_count'       => $uncollectedCount,
        ];

        $dbLogs = \App\Models\WhatsappLog::latest('sent_at')->take(10)->get();
        $whatsapp_log = $dbLogs->map(function ($log) {
            return [
                'type'    => $log->type,
                'message' => $log->message,
                'to'      => $log->recipient_number,
                'time'    => $log->sent_at ? $log->sent_at->diffForHumans() : 'Unknown',
            ];
        });

        return Inertia::render('Billing', [
            'stats'        => $stats,
            'invoices'     => $invoices,
            'whatsapp_log' => $whatsapp_log,
        ]);
    }
}
