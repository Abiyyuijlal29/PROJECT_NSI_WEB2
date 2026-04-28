import { LiveFeedItem } from '../../types/dashboard';

const mockFeed: LiveFeedItem[] = [
    {
        id: '1',
        timeAgo: 'Baru Saja',
        type: 'status_update',
        actor: 'Marcus Thorne',
        targetId: '#VX-9281',
        status: 'Dalam Proses'
    },
    {
        id: '2',
        timeAgo: '12 menit lalu',
        type: 'note',
        actor: 'Elena Rodriguez',
        targetId: '#VX-9275',
        message: '"Pelanggan melaporkan kehilangan koneksi terputus-putus selama jam sibuk. Menjadwalkan teknisi di tempat."'
    },
    {
        id: '3',
        timeAgo: '45 menit lalu',
        type: 'resolved',
        actor: 'Sam Wilson',
        targetId: '#VX-9270',
    },
    {
        id: '4',
        timeAgo: '1 jam lalu',
        type: 'ticket_created',
        actor: 'Anita Desai',
        targetId: 'Tiket Prioritas Tinggi Baru',
    },
    {
        id: '5',
        timeAgo: '2 jam lalu',
        type: 'system_assigned',
        actor: 'Marcus Thorne',
        targetId: '#VX-9268',
    }
];

export default function LiveFeed() {
    return (
        <div className="w-80 ml-6 flex flex-col shrink-0">
            <div className="bg-[#141B2D] border border-slate-800 rounded-xl flex-1 flex flex-col overflow-hidden">
                <div className="p-5 border-b border-slate-800 flex items-center justify-between">
                    <h2 className="text-white font-semibold text-lg flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Umpan Langsung
                    </h2>
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                </div>
                
                <div className="p-6 flex-1 overflow-y-auto w-full">
                    <div className="relative border-l border-slate-800 ml-3 space-y-8">
                        {mockFeed.map((item, index) => (
                            <FeedItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>

                <div className="p-4 border-t border-slate-800 bg-[#1A2235]">
                    <button className="w-full py-2.5 rounded bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 text-sm font-semibold transition-colors">
                        LIHAT SEMUA AKTIVITAS
                    </button>
                </div>
            </div>
        </div>
    );
}

function FeedItem({ item }: { item: LiveFeedItem }) {
    return (
        <div className="relative pl-6">
            <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-blue-500 ring-4 ring-[#141B2D]"></span>
            
            <div className="text-xs font-semibold text-slate-500 mb-2">{item.timeAgo}</div>
            
            <div className="bg-[#1A2235] border border-slate-800 rounded-lg p-3 text-sm leading-relaxed text-slate-300">
                {item.type === 'status_update' && (
                    <><span className="text-blue-400 font-medium">{item.actor}</span> memperbarui status di <span className="text-white font-medium">{item.targetId}</span> menjadi <span className="text-slate-400">{item.status}</span></>
                )}
                {item.type === 'note' && (
                    <>
                        <span className="text-blue-400 font-medium">{item.actor}</span> menambahkan catatan di <span className="text-white font-medium">{item.targetId}</span>:
                        <div className="mt-2 text-slate-400 italic text-xs">{item.message}</div>
                    </>
                )}
                {item.type === 'resolved' && (
                    <>Tiket <span className="text-white font-medium">{item.targetId}</span> telah <span className="text-emerald-400">Diselesaikan</span> oleh <span className="text-slate-200">{item.actor}</span></>
                )}
                {item.type === 'ticket_created' && (
                    <><span className="text-red-400">{item.targetId}</span> dibuat oleh <span className="text-white font-medium">{item.actor}</span></>
                )}
                {item.type === 'system_assigned' && (
                    <><span className="text-blue-500 font-medium">Sistem</span> menugaskan <span className="text-white font-medium">{item.targetId}</span> kepada <span className="text-slate-200">{item.actor}</span></>
                )}
            </div>
        </div>
    );
}
