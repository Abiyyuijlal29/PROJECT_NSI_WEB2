<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Ticket;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Display the application dashboard.
     */
    public function index(): Response
    {
        return Inertia::render('Dashboard', [
            'stats' => [
                'total_customers' => Customer::count(),
                'monthly_revenue' => 145200, // Hardcoded for demo as seen in image
                'network_status' => '99.9% Online',
                'open_tickets' => Ticket::where('status', 'Open')->count(),
            ],
            'recent_activity' => Customer::latest()->take(3)->get()->map(function ($customer) {
                return [
                    'id' => $customer->id,
                    'name' => $customer->name,
                    'package' => $customer->tier,
                    'status' => 'ACTIVE', // Mock for demo
                    'usage' => (rand(10, 50) / 10) . ' TB',
                ];
            }),
            'urgent_tickets' => Ticket::with('customer')
                ->where('priority', 'High')
                ->latest()
                ->take(3)
                ->get(),
        ]);
    }
}
