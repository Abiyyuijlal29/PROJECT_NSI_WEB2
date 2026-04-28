<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SupportDashboardController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\BillingController;
use App\Http\Controllers\PackageController;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('login');
})->name('home');

Route::get('support', [SupportDashboardController::class, 'index'])->name('support.dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('customers', [CustomerController::class, 'index'])->name('customers');
    Route::get('billing', [BillingController::class, 'index'])->name('billing');
    Route::get('packages', [PackageController::class, 'index'])->name('packages');
});

require __DIR__.'/settings.php';
