<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use App\Models\Package;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::with('package')->get();
        return view('customers.index', compact('customers'));
    }

    public function create() 
    {
        $packages = Package:: all();
        return view('customers.create', compact('packages'));
    }
    public function store(Request $request) 
    {
        $request->validate([
        'nama' => 'required',
        'alamat' => 'required',
        'no_hp' => 'required',
        'package_id' => 'required',
        'status' => 'required',
    ]);

    Customer::create($request->all());

    return redirect('/customers')->with('success', 'Customer berhasil ditambahkan');
}
    public function show(string $id) {}
    public function edit(string $id) {}
    public function update(Request $request, string $id) {}
    public function destroy(string $id) {}
}