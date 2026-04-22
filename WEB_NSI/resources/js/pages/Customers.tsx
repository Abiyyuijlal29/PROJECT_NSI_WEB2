import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/layouts/AdminLayout';
import { customers } from '@/routes';
import {
    Search, UserPlus, Eye, Pencil, MoreHorizontal,
    MapPin, MessageSquare, ChevronLeft, ChevronRight, SlidersHorizontal
} from 'lucide-react';
import { useState } from 'react';

interface Customer {
    id: number;
    name: string;
    tier: string;
    avatar_url?: string;
    customer_id: string;
    address: string;
    contact: boolean;
    status: string;
    last_activity: string;
}

interface Props {
    customers: Customer[];
}

const statusStyles: Record<string, string> = {
    ACTIVE:    'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20',
    SUSPENDED: 'text-red-400 bg-red-500/10 border border-red-500/20',
    INACTIVE:  'text-slate-400 bg-slate-500/10 border border-slate-500/20',
};

const mockCustomers: Customer[] = [
    { id: 1, name: 'Alex Rivera',    tier: 'Fiber Gig 1000',  avatar_url: 'https://i.pravatar.cc/40?u=alex',    customer_id: 'ID: VN-8042', address: '123 Sapphire St, New York',    contact: true, status: 'ACTIVE',    last_activity: 'Oct 24, 2023' },
    { id: 2, name: 'Elena Vance',    tier: 'Home Basic 100',  avatar_url: 'https://i.pravatar.cc/40?u=elena',   customer_id: 'ID: VN-4902', address: '456 Azure Blvd, California',  contact: true, status: 'SUSPENDED', last_activity: 'Oct 24, 2023' },
    { id: 3, name: 'Marcus Thorne',  tier: 'Fiber Gig 1000',  avatar_url: 'https://i.pravatar.cc/40?u=marcus',  customer_id: 'ID: VN-1856', address: '789 Cobalt Ave, Texas',       contact: true, status: 'INACTIVE',  last_activity: 'Oct 23, 2023' },
    { id: 4, name: 'Sarah Jenkins',  tier: 'Home Plus 500',   avatar_url: 'https://i.pravatar.cc/40?u=sarah',   customer_id: 'ID: VN-3920', address: '321 Navy Way, Florida',       contact: true, status: 'ACTIVE',    last_activity: 'Oct 22, 2023' },
    { id: 5, name: 'James Okafor',   tier: 'Business Pro',    avatar_url: 'https://i.pravatar.cc/40?u=james',   customer_id: 'ID: VN-5512', address: '88 Pacific Rd, Washington',  contact: true, status: 'ACTIVE',    last_activity: 'Oct 21, 2023' },
    { id: 6, name: 'Anita Desai',    tier: 'Standard 100',    avatar_url: 'https://i.pravatar.cc/40?u=anita',   customer_id: 'ID: VN-7703', address: '45 Ember Lane, Nevada',       contact: true, status: 'INACTIVE',  last_activity: 'Oct 19, 2023' },
];

const CustomersPage = ({ customers: serverCustomers }: Props) => {
    const list = serverCustomers?.length ? serverCustomers : mockCustomers;
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('All Statuses');

    const filtered = list.filter(c => {
        const matchSearch  = c.name.toLowerCase().includes(search.toLowerCase()) || c.customer_id.toLowerCase().includes(search.toLowerCase());
        const matchStatus  = statusFilter === 'All Statuses' || c.status === statusFilter;
        return matchSearch && matchStatus;
    });

    return (
        <>
            <Head title="Direktori Pelanggan" />

            {/* Page Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-white tracking-tight">Direktori Pelanggan</h1>
                    <p className="text-sm text-slate-400 mt-0.5">Mengelola {list.length.toLocaleString()} koneksi aktif di seluruh jaringan</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-400 hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    </button>
                    <button className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-400 hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all shadow-lg shadow-blue-600/20">
                        <UserPlus className="w-4 h-4" />
                        Tambah Pelanggan Baru
                    </button>
                </div>
            </div>

            {/* Advanced Filters */}
            <div className="bg-[#111827]/70 border border-slate-800 rounded-xl p-4 mb-4">
                <div className="flex items-center gap-2 mb-4 text-blue-400">
                    <SlidersHorizontal className="w-4 h-4" />
                    <span className="text-sm font-semibold">Filter Lanjutan</span>
                    <button className="ml-auto text-xs text-slate-400 hover:text-white transition-colors">Setel Ulang Semua</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    <div>
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1.5">Status</label>
                        <select
                            value={statusFilter}
                            onChange={e => setStatusFilter(e.target.value)}
                            className="w-full bg-[#0D1424] border border-slate-700/60 text-slate-300 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                        >
                            <option>Semua Status</option>
                            <option>ACTIVE</option>
                            <option>SUSPENDED</option>
                            <option>INACTIVE</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1.5">Paket Layanan</label>
                        <select className="w-full bg-[#0D1424] border border-slate-700/60 text-slate-300 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none">
                            <option>Semua Paket</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1.5">Aktivitas Terakhir</label>
                        <input type="text" placeholder="Pilih rentang..." className="w-full bg-[#0D1424] border border-slate-700/60 text-slate-300 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-600" />
                    </div>
                    <div>
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1.5">ID Pelanggan / Email</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="ID Spesifik..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                className="flex-1 bg-[#0D1424] border border-slate-700/60 text-slate-300 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-600"
                            />
                            <button className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-all whitespace-nowrap">
                                Terapkan Filter
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-[#111827]/70 border border-slate-800 rounded-xl overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800/60 bg-[#0D1424]/50">
                            <th className="px-6 py-4">Pelanggan</th>
                            <th className="px-6 py-4">Alamat</th>
                            <th className="px-6 py-4">Kontak</th>
                            <th className="px-6 py-4">Paket Layanan</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Aktivitas Terakhir</th>
                            <th className="px-6 py-4 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/40">
                        {filtered.map((customer) => (
                            <tr key={customer.id} className="hover:bg-slate-800/20 transition-colors group cursor-pointer">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        {customer.avatar_url ? (
                                            <img src={customer.avatar_url} alt={customer.name} className="w-9 h-9 rounded-full ring-2 ring-slate-700 object-cover" />
                                        ) : (
                                            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-xs font-bold text-white ring-2 ring-slate-700">
                                                {customer.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                        )}
                                        <div>
                                            <div className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{customer.name}</div>
                                            <div className="text-xs text-slate-500">{customer.customer_id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2 text-sm text-slate-400">
                                        <span>{customer.address}</span>
                                        <MapPin className="w-3 h-3 text-blue-400 shrink-0" />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    {customer.contact && (
                                        <div className="w-8 h-8 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center">
                                            <MessageSquare className="w-4 h-4 text-emerald-400" />
                                        </div>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                        <span className="text-sm text-slate-300 font-medium">{customer.tier}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 text-[10px] font-bold rounded uppercase tracking-wider ${statusStyles[customer.status] ?? statusStyles['INACTIVE']}`}>
                                        {customer.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm text-slate-400">{customer.last_activity}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-end gap-1">
                                        <button className="p-1.5 text-slate-500 hover:text-blue-400 hover:bg-blue-400/10 rounded-lg transition-all"><Eye className="w-4 h-4" /></button>
                                        <button className="p-1.5 text-slate-500 hover:text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-all"><Pencil className="w-4 h-4" /></button>
                                        <button className="p-1.5 text-slate-500 hover:text-white hover:bg-white/5 rounded-lg transition-all"><MoreHorizontal className="w-4 h-4" /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                        Menampilkan 1-{filtered.length} dari {list.length.toLocaleString()} Pelanggan
                    </span>
                    <div className="flex items-center gap-1">
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white text-sm font-bold">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 text-sm transition-all">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 text-sm transition-all">3</button>
                        <span className="text-slate-600 px-1">...</span>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 text-sm transition-all">128</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

CustomersPage.layout = (page: React.ReactNode) => <AdminLayout children={page} />;
export default CustomersPage;
