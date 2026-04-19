import { Users, DollarSign, Activity, AlertCircle } from 'lucide-react';

interface StatsProps {
    stats: {
        total_customers: number;
        monthly_revenue: number;
        network_status: string;
        open_tickets: number;
    };
}

export default function DashboardStats({ stats }: StatsProps) {
    const cards = [
        {
            title: 'Total Active Customers',
            value: stats.total_customers.toLocaleString(),
            icon: <Users className="w-5 h-5 text-blue-500" />,
            badge: '+12%',
            badgeColor: 'text-emerald-400 bg-emerald-500/10',
        },
        {
            title: 'Monthly Revenue',
            value: `$${stats.monthly_revenue.toLocaleString()}`,
            icon: <DollarSign className="w-5 h-5 text-emerald-500" />,
            badge: '+5.4%',
            badgeColor: 'text-emerald-400 bg-emerald-500/10',
        },
        {
            title: 'Network Status',
            value: stats.network_status,
            icon: <Activity className="w-5 h-5 text-blue-500" />,
            badge: 'Optimal',
            badgeColor: 'text-blue-400 bg-blue-500/10',
        },
        {
            title: 'Open Support Tickets',
            value: stats.open_tickets,
            icon: <AlertCircle className="w-5 h-5 text-rose-500" />,
            badge: '-8%',
            badgeColor: 'text-rose-400 bg-rose-500/10',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map((card, i) => (
                <div key={i} className="bg-[#111827]/50 backdrop-blur-sm border border-slate-800 rounded-xl p-5 shadow-lg group hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                            {card.icon}
                        </div>
                        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${card.badgeColor}`}>
                            {card.badge}
                        </span>
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs font-medium mb-1 uppercase tracking-wider">{card.title}</p>
                        <p className="text-white text-2xl font-bold tracking-tight">{card.value}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
