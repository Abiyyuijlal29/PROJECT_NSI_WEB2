import { ChevronRight } from 'lucide-react';

interface TicketProps {
    data: any[];
}

export default function UrgentTickets({ data }: TicketProps) {
    return (
        <div className="bg-[#111827]/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 flex flex-col h-full shadow-lg">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-[10px] font-bold text-white tracking-[0.15em] uppercase opacity-70 font-sans">Tiket Mendesak</h2>
                <div className="bg-rose-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-[0_0_12px_rgba(244,63,94,0.4)]">{data.length} Baru</div>
            </div>
            <div className="flex-1 space-y-4">
                {data.map((ticket, i) => (
                    <div key={i} className="group cursor-pointer border-b border-white/5 pb-4 last:border-0 hover:bg-white/5 rounded-lg p-3 transition-colors">
                        <div className="flex justify-between items-start mb-1.5">
                            <p className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors tracking-tight">{ticket.category} - {ticket.customer.name}</p>
                            <span className="text-[9px] text-slate-500 font-bold uppercase">{Math.floor(Math.random() * 60)}mnt lalu</span>
                        </div>
                        <p className="text-[10px] text-slate-500 line-clamp-1 mb-2 font-medium">Masalah dengan {ticket.ticket_number} di zona {ticket.customer.tier}...</p>
                        <div className="flex justify-between items-center">
                            <span className={`text-[8px] font-black px-1.5 py-0.5 rounded-sm uppercase tracking-widest ${ticket.priority === 'High' ? 'bg-rose-500/10 text-rose-500' : 'bg-blue-500/10 text-blue-500'}`}>
                                {ticket.priority === 'High' ? 'Tinggi' : 'Normal'} • {ticket.ticket_number}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <button className="mt-4 w-full text-[10px] font-bold text-slate-400 hover:text-white flex items-center justify-center space-x-1 group py-2 border border-transparent hover:border-slate-700/50 rounded-lg transition-all uppercase tracking-widest">
                <span>Lihat Semua Tiket Dukungan</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
        </div>
    );
}
