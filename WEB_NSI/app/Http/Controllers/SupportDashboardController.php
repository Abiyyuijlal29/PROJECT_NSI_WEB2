<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Ticket;
use Inertia\Inertia;

class SupportDashboardController extends Controller
{
    public function index()
    {
        $tickets = Ticket::with('customer')->orderBy('created_at', 'desc')->get();
        return Inertia::render('Support/Dashboard', [
            'tickets' => $tickets
        ]);
    }
}
