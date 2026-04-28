import { Ticket } from '../../types/dashboard';
import { Download, MoreHorizontal, Filter, ChevronRight, ChevronDown } from 'lucide-react';

interface TicketTableProps {
    tickets: any[]; // Using any to be safe with snake_case backend fields temporarily
}

const priorityStyles: Record<string, string> = {
    High: 'bg-red-500/10 text-red-500 border border-red-500/20',
    Medium: 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20',
    Low: 'bg-blue-500/10 text-blue-500 border border-blue-500/20'
};

const statusDots: Record<string, string> = {
    Open: 'bg-slate-500',
    'In Progress': 'bg-blue-500',
    Resolved: 'bg-emerald-500'
};

export default function TicketTable({ tickets }: TicketTableProps) {
    return (
        <div className="flex-1 flex flex-col space-y-4">
            {/* Filters Bar */}
            <div className="bg-[#141B2D] border border-slate-800 rounded-xl px-5 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2 text-slate-300">
                        <Filter className="w-4 h-4" />
                        <span className="text-sm font-semibold">Filter:</span>
                    </div>
                    <FilterDropdown label="Prioritas: Semua" />
                    <FilterDropdown label="Status: Semua" />
                    <FilterDropdown label="24 Jam Terakhir" />
                </div>
                <button className="text-blue-500 text-sm font-medium hover:text-blue-400 focus:outline-none">
                    Hapus semua filter
                </button>
            </div>

            {/* Main Table Card */}
            <div className="bg-[#141B2D] border border-slate-800 rounded-xl flex-1 flex flex-col">
                <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white tracking-wide">Tiket Dukungan Aktif</h2>
                    <div className="flex space-x-2">
                        <button className="p-2 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 rounded-lg border border-slate-700/50 transition-colors">
                            <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 rounded-lg border border-slate-700/50 transition-colors">
                            <MoreHorizontal className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="flex-1 overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-slate-800 text-xs text-slate-400 font-bold tracking-wider uppercase">
                                <th className="px-6 py-4">ID TIKET</th>
                                <th className="px-6 py-4">PELANGGAN</th>
                                <th className="px-6 py-4">KATEGORI</th>
                                <th className="px-6 py-4">PRIORITAS</th>
                                <th className="px-6 py-4">STATUS</th>
                                <th className="px-6 py-4">TEKNISI</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {tickets.map((ticket: any, index: number) => (
                                <tr key={ticket.id} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors group cursor-pointer">
                                    <td className="px-6 py-5 text-blue-500 font-semibold text-sm">{ticket.ticket_number}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-3">
                                            <img src={ticket.customer.avatar_url} alt="avatar" className="w-9 h-9 rounded-full ring-2 ring-slate-800" />
                                            <div>
                                                <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{ticket.customer.name}</div>
                                                <div className="text-xs text-slate-500 font-medium">{ticket.customer.tier}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-300 font-medium">{ticket.category}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 text-xs font-bold rounded-full uppercase tracking-wide ${priorityStyles[ticket.priority]}`}>
                                            {ticket.priority === 'High' ? 'Tinggi' : ticket.priority === 'Medium' ? 'Sedang' : ticket.priority === 'Low' ? 'Rendah' : ticket.priority}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-2">
                                            <span className={`w-1.5 h-1.5 rounded-full ${statusDots[ticket.status]}`}></span>
                                            <span className="text-sm text-slate-300 font-medium">
                                                {ticket.status === 'Open' ? 'Terbuka' : ticket.status === 'In Progress' ? 'Dalam Proses' : ticket.status === 'Resolved' ? 'Selesai' : ticket.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-300 font-medium">{ticket.technician}</td>
                                    <td className="px-6 py-4 text-right">
                                        <ChevronRight className="w-5 h-5 text-slate-500 inline-block group-hover:text-white transition-colors" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 border-t border-slate-800 flex items-center justify-between text-sm">
                    <span className="text-slate-500 font-medium">Menampilkan 1-10 dari 1,284 tiket</span>
                    <div className="flex space-x-1">
                        <button className="px-3 py-1.5 text-slate-400 hover:text-white font-medium">Sebelumnya</button>
                        <button className="w-8 h-8 rounded bg-blue-600 text-white font-bold flex items-center justify-center">1</button>
                        <button className="w-8 h-8 rounded bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 font-medium flex items-center justify-center transition-colors">2</button>
                        <button className="w-8 h-8 rounded bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 font-medium flex items-center justify-center transition-colors">3</button>
                        <button className="px-3 py-1.5 text-slate-300 hover:text-white font-medium">Berikutnya</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FilterDropdown({ label }: { label: string }) {
    return (
        <button className="flex items-center space-x-2 text-sm text-slate-400 bg-slate-800/30 hover:bg-slate-800/60 transition-colors px-3 py-1.5 rounded-md border border-slate-700/30">
            <span>{label}</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-70" />
        </button>
    );
}
