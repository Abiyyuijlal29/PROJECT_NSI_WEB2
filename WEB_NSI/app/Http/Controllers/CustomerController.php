<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Inertia\Inertia;
use Inertia\Response;

class CustomerController extends Controller
{
    public function index(): Response
    {
        $customers = Customer::latest()->get()->map(function ($customer) {
            return [
                'id'           => $customer->id,
                'name'         => $customer->name,
                'tier'         => $customer->tier,
                'avatar_url'   => $customer->avatar_url,
                'customer_id'  => 'ID: VN-' . str_pad($customer->id, 4, '0', STR_PAD_LEFT),
                'address'      => $customer->address ?? 'Address not updated',
                'contact'      => true, // or some logic
                'status'       => $customer->status,
                'last_activity'=> $customer->last_activity ? $customer->last_activity->format('M d, Y') : 'Unknown',
            ];
        });

        return Inertia::render('Customers', [
            'customers' => $customers,
        ]);
    }
}
