import { Package } from 'lucide-react';

export default function InventoryAlert() {
    return (
        <div className="bg-[#111827]/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 flex flex-col h-full shadow-lg">
            <h2 className="text-[10px] font-bold text-white tracking-[0.15em] uppercase opacity-70 mb-6 font-sans">Peringatan Inventaris</h2>
            <div className="flex-1 flex flex-col justify-center">
                <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4 flex items-start space-x-4 mb-6">
                    <div className="p-2 bg-rose-500/20 rounded-lg">
                        <Package className="w-5 h-5 text-rose-500" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-rose-400 mb-1">Stok Rendah: Router AC-1200</p>
                        <p className="text-[10px] text-rose-300/60 leading-relaxed font-medium">Hanya tersisa 12 unit di Hub Utama. Pertimbangkan untuk segera menambah stok.</p>
                    </div>
                </div>
                <button className="w-full py-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 text-white text-[10px] font-bold uppercase tracking-widest transition-all">Pesan Lebih Banyak</button>
            </div>
        </div>
    );
}
