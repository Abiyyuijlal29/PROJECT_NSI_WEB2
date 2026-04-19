interface PackageProps {
    data: { name: string, percentage: number }[];
}

export default function PackagePopularity({ data }: PackageProps) {
    return (
        <div className="bg-[#111827]/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 h-full shadow-lg">
            <h2 className="text-[10px] font-bold text-white tracking-[0.15em] uppercase opacity-70 mb-6 font-sans">Package Popularity</h2>
            <div className="space-y-5">
                {data.map((pkg, i) => (
                    <div key={i} className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-wider">
                            <span className={i === 0 ? 'text-blue-400' : 'text-slate-400'}>{pkg.name}</span>
                            <span className="text-white">{pkg.percentage}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800/50 rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-1000 ${i === 0 ? 'bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]' : 'bg-slate-600 opacity-60'}`}
                                style={{ width: `${pkg.percentage}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
