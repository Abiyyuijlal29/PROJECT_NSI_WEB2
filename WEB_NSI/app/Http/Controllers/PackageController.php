<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class PackageController extends Controller
{
    public function index(): Response
    {
        $dbPackages = \App\Models\Package::all();

        $packages = $dbPackages->map(function ($pkg) {
            return [
                'id'          => $pkg->packet_id,
                'name'        => $pkg->name,
                'speed'       => $pkg->speed,
                'price'       => 'Rp ' . number_format($pkg->price, 0, ',', '.'),
                'subscribers' => $pkg->subscribers,
                'color'       => $pkg->color_theme,
                'icon'        => $pkg->icon,
            ];
        });

        $package_config = $dbPackages->map(function ($pkg) {
            return [
                'name'        => $pkg->name . ' Package',
                'description' => 'Managed Tier', // or another column
                'bandwidth'   => $pkg->bandwidth_up . 'Mbps / ' . $pkg->bandwidth_down . 'Mbps',
                'price'       => 'Rp ' . number_format($pkg->price, 0, ',', '.'),
                'status'      => $pkg->status,
            ];
        });

        $totalSubscribers = $dbPackages->sum('subscribers');
        
        $colorMap = ['blue' => 'bg-slate-500', 'yellow' => 'bg-indigo-500', 'purple' => 'bg-blue-500', 'pink' => 'bg-yellow-400'];

        $bandwidth_usage = $dbPackages->sortByDesc('subscribers')->map(function ($pkg) use ($totalSubscribers, $colorMap) {
            $pct = $totalSubscribers > 0 ? round(($pkg->subscribers / $totalSubscribers) * 100, 1) : 0;
            return [
                'label' => $pkg->name . ' (' . $pkg->bandwidth_down . 'Mbps)',
                'pct'   => $pct,
                'color' => $colorMap[$pkg->color_theme] ?? 'bg-blue-500',
            ];
        })->values();

        return Inertia::render('Packages', [
            'packages'        => $packages,
            'package_config'  => $package_config,
            'bandwidth_usage' => $bandwidth_usage,
        ]);
    }
}
