import { Ticket, Clock, CheckCircle, ShieldCheck } from 'lucide-react';

export default function StatCards() {
    return (
        <div className="grid grid-cols-4 gap-6 mb-8">
            <Card
                title="Total Tiket Aktif"
                value="1,284"
                icon={<Ticket className="w-5 h-5 text-blue-500" />}
                badge={{ text: '+12%', color: 'bg-emerald-500/10 text-emerald-400' }}
            />
            <Card
                title="Rata-rata Waktu Respons"
                value="14m 20s"
                icon={<Clock className="w-5 h-5 text-blue-500" />}
                badge={{ text: '-2.4m', color: 'bg-emerald-500/10 text-emerald-400' }}
            />
            <Card
                title="Diselesaikan Hari Ini"
                value="156"
                icon={<CheckCircle className="w-5 h-5 text-blue-500" />}
                badge={{ text: 'Harian', color: 'bg-slate-700/50 text-slate-300' }}
            />
            <Card
                title="Kepatuhan SLA"
                value="99.2%"
                icon={<ShieldCheck className="w-5 h-5 text-blue-500" />}
                badge={{ text: 'Target 98%', color: 'bg-blue-500/10 text-blue-400' }}
            />
        </div>
    );
}

import React from 'react';

interface CardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
    badge?: { text: string; color: string };
}

function Card({ title, value, icon, badge }: CardProps) {
    return (
        <div className="bg-[#141B2D] border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-blue-500/10 rounded-lg">
                    {icon}
                </div>
                {badge && (
                    <span className={`text-xs px-2 py-1 rounded font-semibold ${badge.color}`}>
                        {badge.text}
                    </span>
                )}
            </div>
            <div>
                <h3 className="text-slate-400 text-sm font-medium mb-1">{title}</h3>
                <p className="text-white text-3xl font-bold">{value}</p>
            </div>
        </div>
    );
}
