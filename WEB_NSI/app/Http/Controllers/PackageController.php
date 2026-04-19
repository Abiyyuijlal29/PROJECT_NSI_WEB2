<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class PackageController extends Controller
{
    public function index(): Response
    {
        $packages = [
            [
                'id'          => 'VX-LT10',
                'name'        => 'Lite',
                'speed'       => '10 Mbps Fiber',
                'price'       => 'Rp 150.000',
                'subscribers' => 120,
                'color'       => 'blue',
                'icon'        => 'wifi',
            ],
            [
                'id'          => 'VX-ST20',
                'name'        => 'Standard',
                'speed'       => '20 Mbps Fiber',
                'price'       => 'Rp 300.000',
                'subscribers' => 450,
                'color'       => 'yellow',
                'icon'        => 'zap',
            ],
            [
                'id'          => 'VX-PR50',
                'name'        => 'Pro',
                'speed'       => '50 Mbps Fiber',
                'price'       => 'Rp 550.000',
                'subscribers' => 890,
                'color'       => 'purple',
                'icon'        => 'rocket',
            ],
            [
                'id'          => 'VX-UL100',
                'name'        => 'Ultra',
                'speed'       => '100 Mbps Fiber',
                'price'       => 'Rp 950.000',
                'subscribers' => 210,
                'color'       => 'pink',
                'icon'        => 'gem',
            ],
        ];

        $package_config = [
            ['name' => 'Lite Package',     'description' => 'Entry Level',         'bandwidth' => '5Mbps / 10Mbps',   'price' => 'Rp 150.000', 'status' => 'Active'],
            ['name' => 'Standard Package', 'description' => 'Home Use',            'bandwidth' => '10Mbps / 20Mbps',  'price' => 'Rp 300.000', 'status' => 'Active'],
            ['name' => 'Ultra Package',    'description' => 'Pro Gamer/Business',  'bandwidth' => '50Mbps / 100Mbps', 'price' => 'Rp 950.000', 'status' => 'Disabled'],
        ];

        $bandwidth_usage = [
            ['label' => 'Pro (50Mbps)',      'pct' => 53.2, 'color' => 'bg-blue-500'],
            ['label' => 'Standard (20Mbps)', 'pct' => 26.9, 'color' => 'bg-indigo-500'],
            ['label' => 'Ultra (100Mbps)',   'pct' => 12.5, 'color' => 'bg-yellow-400'],
            ['label' => 'Lite (10Mbps)',     'pct' => 7.4,  'color' => 'bg-slate-500'],
        ];

        return Inertia::render('Packages', [
            'packages'        => $packages,
            'package_config'  => $package_config,
            'bandwidth_usage' => $bandwidth_usage,
        ]);
    }
}
