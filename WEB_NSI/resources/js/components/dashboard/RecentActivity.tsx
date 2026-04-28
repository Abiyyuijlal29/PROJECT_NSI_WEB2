import { MoreHorizontal } from 'lucide-react';

interface ActivityProps {
    data: any[];
}

export default function RecentActivity({ data }: ActivityProps) {
    return (
        <div className="bg-[#111827]/50 backdrop-blur-sm border border-slate-800 rounded-xl flex flex-col h-full shadow-lg">
            <div className="p-6 border-b border-slate-800/50 flex justify-between items-center">
                <h2 className="text-sm font-bold text-white tracking-widest uppercase opacity-80">Manajemen Pelanggan (Aktivitas Terbaru)</h2>
                <button className="text-[10px] font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider">Lihat CRM</button>
            </div>
            <div className="flex-1 overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.15em] border-b border-slate-800/30">
                            <th className="px-6 py-4">Klien</th>
                            <th className="px-6 py-4">Paket</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Penggunaan</th>
                            <th className="px-6 py-4 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/30">
                        {data.map((item, i) => (
                            <tr key={i} className="hover:bg-slate-800/20 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[10px] font-bold text-blue-400">
                                            {item.name.split(' ').map((n: string) => n[0]).join('')}
                                        </div>
                                        <span className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">{item.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-xs font-medium text-slate-400">{item.package}</td>
                                <td className="px-6 py-4">
                                    <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-xs font-medium text-slate-400">{item.usage}</td>
                                <td className="px-6 py-4 text-center">
                                    <button className="text-slate-500 hover:text-white transition-colors">
                                        <MoreHorizontal className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
