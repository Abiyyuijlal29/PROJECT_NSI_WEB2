import { Head } from '@inertiajs/react';
import AdminLayout from '@/layouts/AdminLayout';
import { Wifi, Zap, Rocket, Gem, Pencil, Trash2, Download, Radio } from 'lucide-react';
import React from 'react';

interface Package {
    id: string;
    name: string;
    speed: string;
    price: string;
    subscribers: number;
    color: string;
    icon: string;
}

interface PackageConfig {
    name: string;
    description: string;
    bandwidth: string;
    price: string;
    status: string;
}

interface BandwidthUsage {
    label: string;
    pct: number;
    color: string;
}

interface Props {
    packages: Package[];
    package_config: PackageConfig[];
    bandwidth_usage: BandwidthUsage[];
}

const cardColors: Record<string, { border: string; icon: string; badge: string }> = {
    blue:   { border: 'border-blue-500/20',   icon: 'text-blue-400 bg-blue-500/10',   badge: 'text-blue-400' },
    yellow: { border: 'border-yellow-500/20', icon: 'text-yellow-400 bg-yellow-500/10', badge: 'text-yellow-400' },
    purple: { border: 'border-purple-500/20', icon: 'text-purple-400 bg-purple-500/10', badge: 'text-purple-400' },
    pink:   { border: 'border-pink-500/20',   icon: 'text-pink-400 bg-pink-500/10',   badge: 'text-pink-400' },
};

const IconMap: Record<string, React.FC<any>> = {
    wifi:   Wifi,
    zap:    Zap,
    rocket: Rocket,
    gem:    Gem,
};

const defaultPackages: Package[] = [
    { id: 'VX-LT10',  name: 'Lite',     speed: '10 Mbps Fiber',  price: 'Rp 150.000', subscribers: 120, color: 'blue',   icon: 'wifi' },
    { id: 'VX-ST20',  name: 'Standard', speed: '20 Mbps Fiber',  price: 'Rp 300.000', subscribers: 450, color: 'yellow', icon: 'zap' },
    { id: 'VX-PR50',  name: 'Pro',      speed: '50 Mbps Fiber',  price: 'Rp 550.000', subscribers: 890, color: 'purple', icon: 'rocket' },
    { id: 'VX-UL100', name: 'Ultra',    speed: '100 Mbps Fiber', price: 'Rp 950.000', subscribers: 210, color: 'pink',   icon: 'gem' },
];

const defaultConfig: PackageConfig[] = [
    { name: 'Lite Package',     description: 'Entry Level',        bandwidth: '5Mbps / 10Mbps',   price: 'Rp 150.000', status: 'Active' },
    { name: 'Standard Package', description: 'Home Use',           bandwidth: '10Mbps / 20Mbps',  price: 'Rp 300.000', status: 'Active' },
    { name: 'Ultra Package',    description: 'Pro Gamer/Business', bandwidth: '50Mbps / 100Mbps', price: 'Rp 950.000', status: 'Disabled' },
];

const defaultBandwidth: BandwidthUsage[] = [
    { label: 'Pro (50Mbps)',      pct: 53.2, color: 'bg-blue-500' },
    { label: 'Standard (20Mbps)', pct: 26.9, color: 'bg-indigo-500' },
    { label: 'Ultra (100Mbps)',   pct: 12.5, color: 'bg-yellow-400' },
    { label: 'Lite (10Mbps)',     pct: 7.4,  color: 'bg-slate-500' },
];

// Donut chart component
const DonutChart = ({ pct }: { pct: number }) => {
    const r = 54;
    const circ = 2 * Math.PI * r;
    const dash = (pct / 100) * circ;
    return (
        <div className="relative w-36 h-36 mx-auto">
            <svg viewBox="0 0 128 128" className="w-full h-full -rotate-90">
                <circle cx="64" cy="64" r={r} fill="none" stroke="#1e2d45" strokeWidth="16" />
                <circle
                    cx="64" cy="64" r={r}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="16"
                    strokeDasharray={`${dash} ${circ - dash}`}
                    strokeLinecap="round"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-white">{pct}%</span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Pro Tier</span>
            </div>
        </div>
    );
};

const PackagesPage = ({
    packages = defaultPackages,
    package_config = defaultConfig,
    bandwidth_usage = defaultBandwidth,
}: Props) => {
    const totalSubs = packages.reduce((s, p) => s + p.subscribers, 0);
    const topPct = totalSubs > 0 ? (packages[2]?.subscribers ?? 0) / totalSubs * 100 : 53.2;

    return (
        <>
            <Head title="Ringkasan Paket Layanan" />

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-white tracking-tight">Ringkasan Paket Layanan</h1>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Jaringan Stabil
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full">
                        <Radio className="w-3 h-3 text-blue-400" />
                        {packages.length} Tingkat Aktif
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all shadow-lg shadow-blue-600/20">
                        + Tambah Paket Baru
                    </button>
                </div>
            </div>

            {/* Package Tier Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
                {packages.map((pkg) => {
                    const colors = cardColors[pkg.color] ?? cardColors.blue;
                    const IconComp = IconMap[pkg.icon] ?? Wifi;
                    return (
                        <div key={pkg.id} className={`bg-[#111827]/70 border ${colors.border} rounded-xl p-5 hover:border-opacity-50 transition-all`}>
                            <div className="flex items-center justify-between mb-3">
                                <div className={`w-9 h-9 rounded-lg ${colors.icon} flex items-center justify-center`}>
                                    <IconComp className="w-4 h-4" />
                                </div>
                                <span className="text-[10px] text-slate-500 font-mono">ID: {pkg.id}</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-0.5">{pkg.name}</h3>
                            <p className={`text-xs font-semibold mb-4 ${colors.badge}`}>{pkg.speed}</p>
                            <div className="flex justify-between text-xs text-slate-500 mb-1">
                                <span>Harga</span>
                                <span>Pelanggan</span>
                            </div>
                            <div className="flex justify-between mb-3">
                                <span className="text-sm font-bold text-slate-200">{pkg.price}</span>
                                <span className={`text-sm font-bold ${colors.badge}`}>{pkg.subscribers} Aktif</span>
                            </div>
                            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                <div
                                    className={`h-full rounded-full ${pkg.color === 'blue' ? 'bg-blue-500' : pkg.color === 'yellow' ? 'bg-yellow-400' : pkg.color === 'purple' ? 'bg-purple-500' : 'bg-pink-500'}`}
                                    style={{ width: `${Math.min((pkg.subscribers / 1000) * 100, 100)}%` }}
                                ></div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Package Configuration Table */}
                <div className="lg:col-span-2 bg-[#111827]/70 border border-slate-800 rounded-xl overflow-hidden">
                    <div className="px-5 py-4 border-b border-slate-800/60 flex items-center justify-between">
                        <h2 className="text-base font-bold text-white">Konfigurasi Paket</h2>
                        <button className="text-xs text-blue-400 hover:text-blue-300 font-semibold transition-colors">Lihat Semua Paket</button>
                    </div>
                    <table className="w-full">
                        <thead>
                            <tr className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800/40 bg-[#0D1424]/40">
                                <th className="px-5 py-3 text-left">Nama Paket</th>
                                <th className="px-5 py-3 text-left">Bandwidth (U/D)</th>
                                <th className="px-5 py-3 text-left">Harga Bulanan</th>
                                <th className="px-5 py-3 text-left">Status</th>
                                <th className="px-5 py-3 text-left">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/30">
                            {package_config.map((pkg, i) => (
                                <tr key={i} className="hover:bg-slate-800/20 transition-colors group">
                                    <td className="px-5 py-4">
                                        <div className="text-sm font-bold text-slate-200">{pkg.name}</div>
                                        <div className="text-xs text-slate-500">{pkg.description}</div>
                                    </td>
                                    <td className="px-5 py-4 text-sm text-slate-400 font-medium">{pkg.bandwidth}</td>
                                    <td className="px-5 py-4 text-sm font-bold text-slate-200">{pkg.price}</td>
                                    <td className="px-5 py-4">
                                        <span className={`px-2.5 py-1 text-[10px] font-bold rounded uppercase tracking-wider ${
                                            pkg.status === 'Active'
                                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                                : 'bg-slate-500/10 text-slate-400 border border-slate-500/20'
                                        }`}>
                                            {pkg.status}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-2">
                                            <button className="p-1.5 text-slate-500 hover:text-blue-400 hover:bg-blue-400/10 rounded-lg transition-all">
                                                <Pencil className="w-3.5 h-3.5" />
                                            </button>
                                            <button className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all">
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Bandwidth Usage Insights */}
                <div className="bg-[#111827]/70 border border-slate-800 rounded-xl p-5">
                    <h2 className="text-base font-bold text-white mb-5">Wawasan Penggunaan Bandwidth</h2>
                    <DonutChart pct={Math.round(topPct)} />
                    <div className="mt-6 flex flex-col gap-3">
                        {bandwidth_usage.map((item, i) => (
                            <div key={i}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-xs text-slate-400">{item.label}</span>
                                    <span className="text-xs font-bold text-slate-300">{item.pct}%</span>
                                </div>
                                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                    <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.pct}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/50 text-slate-300 hover:text-white text-sm font-medium rounded-lg transition-all">
                        <Download className="w-4 h-4" />
                        Unduh Laporan Penggunaan
                    </button>
                </div>
            </div>
        </>
    );
};

PackagesPage.layout = (page: React.ReactNode) => <AdminLayout children={page} />;
export default PackagesPage;
