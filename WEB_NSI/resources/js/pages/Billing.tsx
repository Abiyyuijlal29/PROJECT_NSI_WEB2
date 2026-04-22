import { Head } from '@inertiajs/react';
import AdminLayout from '@/layouts/AdminLayout';
import { TrendingUp, AlertCircle, TrendingDown, BarChart3, CheckCircle, AlertTriangle, MessageSquare } from 'lucide-react';
import React from 'react';

interface BillingStats {
    total_revenue: string;
    outstanding_receivables: string;
    total_expenses: string;
    net_profit: string;
    uncollected_count: number;
}

interface Invoice {
    customer_name: string;
    invoice_id: string;
    amount: string;
    due_date: string;
    status: string;
}

interface WhatsAppLog {
    type: string;
    message: string;
    to: string;
    time: string;
}

interface Props {
    stats: BillingStats;
    invoices: Invoice[];
    whatsapp_log: WhatsAppLog[];
}

const invoiceStatusStyles: Record<string, string> = {
    Paid:    'bg-emerald-500/15 text-emerald-400 border border-emerald-500/25',
    Pending: 'bg-slate-500/15 text-slate-400 border border-slate-500/25',
    Overdue: 'bg-red-500/15 text-red-400 border border-red-500/25',
};

// Simple inline sparkline arc chart
const ProfitChart = () => {
    const points = [60,55,65,58,80,90,75,85,95,88,100,92,85,96,105,98,115,108,95,110,120,105,118,128];
    const maxV = Math.max(...points);
    const minV = Math.min(...points);
    const norm = (v: number) => 130 - ((v - minV) / (maxV - minV)) * 110;
    const pathD = points.map((v, i) => `${i === 0 ? 'M' : 'L'} ${(i / (points.length - 1)) * 680} ${norm(v)}`).join(' ');
    const areaD = `${pathD} L 680 140 L 0 140 Z`;

    const months = ['Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

    return (
        <div className="relative w-full h-[200px]">
            <svg viewBox="0 0 700 150" preserveAspectRatio="none" className="w-full h-full">
                <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path d={areaD} fill="url(#areaGrad)" />
                <path d={pathD} fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex justify-between mt-2 px-1">
                {months.map(m => (
                    <span key={m} className="text-xs text-slate-500">{m}</span>
                ))}
            </div>
        </div>
    );
};

const defaultStats: BillingStats = {
    total_revenue: '$45,280.00',
    outstanding_receivables: '$3,840.15',
    total_expenses: '$18,400.00',
    net_profit: '$26,880.00',
    uncollected_count: 17,
};

const defaultInvoices: Invoice[] = [
    { customer_name: 'Budi Santoso', invoice_id: '#INV-2024-001', amount: '$45.00',  due_date: 'Oct 12, 2024', status: 'Paid' },
    { customer_name: 'Siti Aminah',  invoice_id: '#INV-2024-002', amount: '$32.00',  due_date: 'Oct 14, 2024', status: 'Pending' },
    { customer_name: 'David Miller', invoice_id: '#INV-2024-003', amount: '$115.00', due_date: 'Oct 10, 2024', status: 'Overdue' },
    { customer_name: 'Dewi Lestari', invoice_id: '#INV-2024-004', amount: '$45.00',  due_date: 'Oct 15, 2024', status: 'Pending' },
];

const defaultLog: WhatsAppLog[] = [
    { type: 'sent',    message: 'Payment Confirmation Sent', to: '+62 812-3456-7890', time: '2 minutes ago' },
    { type: 'created', message: 'Invoice Generated',         to: '+62 813-1122-3344', time: '45 minutes ago' },
    { type: 'sent',    message: 'Payment Reminder Sent',     to: '+62 877-3368-7786', time: '1 hour ago' },
    { type: 'sent',    message: 'Payment Confirmation Sent', to: '+62 811-2233-4455', time: '2 hours ago' },
];

const logColors: Record<string, string> = {
    sent:    'bg-emerald-500',
    created: 'bg-blue-500',
};

const BillingPage = ({ stats = defaultStats, invoices = defaultInvoices, whatsapp_log = defaultLog }: Props) => {
    return (
        <>
            <Head title="Penagihan" />

            {/* Page Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-white tracking-tight">Halaman Penagihan</h1>
                <p className="text-sm text-slate-400 mt-0.5">Ikhtisar penagihan & pembukuan real-time untuk NSI Net Satu Internews</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Total Revenue */}
                <div className="bg-[#111827]/70 border border-slate-800 rounded-xl p-5 relative overflow-hidden">
                    <div className="absolute top-3 right-3 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">+12.5%</div>
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3">
                        <BarChart3 className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="text-xs text-slate-500 font-medium mb-1">Total Pendapatan (MTD)</div>
                    <div className="text-xl font-bold text-white">{stats.total_revenue}</div>
                </div>

                {/* Outstanding Receivables */}
                <div className="bg-[#111827]/70 border border-slate-800 rounded-xl p-5 relative overflow-hidden">
                    <div className="absolute top-3 right-3 text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">{stats.uncollected_count} Belum Tertagih</div>
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                        <AlertCircle className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="text-xs text-slate-500 font-medium mb-1">Piutang Belum Lunas</div>
                    <div className="text-xl font-bold text-white">{stats.outstanding_receivables}</div>
                </div>

                {/* Total Expenses */}
                <div className="bg-[#111827]/70 border border-slate-800 rounded-xl p-5 relative overflow-hidden">
                    <div className="absolute top-3 right-3 text-xs font-bold text-slate-400 bg-slate-500/10 px-2 py-0.5 rounded-full">Bandwidth & Ops</div>
                    <div className="w-9 h-9 rounded-lg bg-slate-500/10 border border-slate-500/20 flex items-center justify-center mb-3">
                        <TrendingDown className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="text-xs text-slate-500 font-medium mb-1">Total Pengeluaran</div>
                    <div className="text-xl font-bold text-white">{stats.total_expenses}</div>
                </div>

                {/* Net Profit */}
                <div className="bg-[#111827]/70 border border-slate-800 rounded-xl p-5 relative overflow-hidden">
                    <div className="absolute top-3 right-3 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">+18.3%</div>
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-xs text-slate-500 font-medium mb-1">Laba Bersih</div>
                    <div className="text-xl font-bold text-white">{stats.net_profit}</div>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Left: P&L Chart + Invoices */}
                <div className="lg:col-span-2 flex flex-col gap-5">
                    {/* Profit & Loss Chart */}
                    <div className="bg-[#111827]/70 border border-slate-800 rounded-xl p-5">
                        <div className="flex items-center justify-between mb-1">
                            <div>
                                <h2 className="text-base font-bold text-white">Laporan Laba &amp; Rugi</h2>
                                <p className="text-xs text-slate-500 mt-0.5">Pendapatan Bulanan vs. Pengeluaran Operasional</p>
                            </div>
                            <button className="text-xs text-slate-300 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg font-semibold hover:bg-slate-700 transition-colors">
                                6 Bulan Terakhir
                            </button>
                        </div>
                        <ProfitChart />
                    </div>

                    {/* Recent Invoices */}
                    <div className="bg-[#111827]/70 border border-slate-800 rounded-xl overflow-hidden">
                        <div className="px-5 py-4 border-b border-slate-800/60 flex items-center justify-between">
                            <h2 className="text-base font-bold text-white">Faktur Otomatis Terbaru</h2>
                            <button className="text-xs text-blue-400 hover:text-blue-300 font-semibold transition-colors">Lihat Semua</button>
                        </div>
                        <table className="w-full">
                            <thead>
                                <tr className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800/40 bg-[#0D1424]/40">
                                    <th className="px-5 py-3 text-left">Nama Pelanggan</th>
                                    <th className="px-5 py-3 text-left">ID Faktur</th>
                                    <th className="px-5 py-3 text-left">Jumlah</th>
                                    <th className="px-5 py-3 text-left">Jatuh Tempo</th>
                                    <th className="px-5 py-3 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/30">
                                {invoices.map((inv, i) => (
                                    <tr key={i} className="hover:bg-slate-800/20 transition-colors">
                                        <td className="px-5 py-4 text-sm font-semibold text-slate-200">{inv.customer_name}</td>
                                        <td className="px-5 py-4 text-sm text-blue-400 font-medium">{inv.invoice_id}</td>
                                        <td className="px-5 py-4 text-sm font-bold text-white">{inv.amount}</td>
                                        <td className="px-5 py-4 text-sm text-slate-400">{inv.due_date}</td>
                                        <td className="px-5 py-4">
                                            <span className={`px-2.5 py-1 text-[10px] font-bold rounded uppercase tracking-wider ${invoiceStatusStyles[inv.status] ?? invoiceStatusStyles['Pending']}`}>
                                                {inv.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right: Payment Gateways + WhatsApp Log */}
                <div className="flex flex-col gap-5">
                    {/* Payment Gateways */}
                    <div className="bg-[#111827]/70 border border-slate-800 rounded-xl p-5">
                        <h2 className="text-base font-bold text-white mb-4">Gerbang Pembayaran</h2>
                        <div className="flex flex-col gap-3">
                            <GatewayItem name="QRIS / Midtrans" status="Active" icon="🟦" color="emerald" />
                            <GatewayItem name="VA Bank Transfer" status="Active" icon="🏦" color="emerald" />
                            <GatewayItem name="Retail Outlets" status="Degraded" icon="🏪" color="amber" />
                        </div>
                    </div>

                    {/* WhatsApp Log */}
                    <div className="bg-[#111827]/70 border border-slate-800 rounded-xl p-5 flex-1">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-base font-bold text-white">WhatsApp Log</h2>
                            <MessageSquare className="w-4 h-4 text-slate-400" />
                        </div>
                        <div className="flex flex-col gap-4">
                            {whatsapp_log.map((log, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${logColors[log.type] ?? 'bg-slate-500'}`}></div>
                                    <div>
                                        <div className="text-sm font-semibold text-slate-200">{log.message}</div>
                                        <div className="text-xs text-slate-500 mt-0.5">Dikirim ke: {log.to}</div>
                                        <div className="text-xs text-slate-600 mt-0.5">{log.time}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

function GatewayItem({ name, status, icon, color }: { name: string; status: string; icon: string; color: 'emerald' | 'amber' }) {
    const isActive = status === 'Active';
    return (
        <div className="flex items-center justify-between p-3 bg-[#0D1424] rounded-xl border border-slate-800/60 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-lg">{icon}</div>
                <div>
                    <div className="text-sm font-semibold text-slate-200">{name}</div>
                    <div className={`flex items-center gap-1 text-xs font-medium mt-0.5 ${isActive ? 'text-emerald-400' : 'text-amber-400'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
                        {status}
                    </div>
                </div>
            </div>
            {isActive ? (
                <CheckCircle className="w-5 h-5 text-emerald-400" />
            ) : (
                <AlertTriangle className="w-5 h-5 text-amber-400" />
            )}
        </div>
    );
}

BillingPage.layout = (page: React.ReactNode) => <AdminLayout children={page} />;
export default BillingPage;
