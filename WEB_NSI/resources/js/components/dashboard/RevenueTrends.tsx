import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
    { name: 'JAN', value: 400 },
    { name: 'FEB', value: 300 },
    { name: 'MAR', value: 600 },
    { name: 'APR', value: 500 },
    { name: 'MEI', value: 450 },
    { name: 'JUN', value: 800 },
];

export default function RevenueTrends() {
    return (
        <div className="bg-[#111827]/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 flex flex-col h-full shadow-lg">
            <h2 className="text-sm font-bold text-white tracking-widest uppercase opacity-80 mb-6">Tren Pendapatan</h2>
            <div className="flex-1 min-h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1f2937" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#4b5563', fontSize: 10, fontWeight: 700 }}
                            dy={10}
                        />
                        <YAxis hide />
                        <Tooltip
                            cursor={{ fill: '#1f2937', radius: 4 }}
                            contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '8px', fontSize: '10px' }}
                            itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                        />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#3b82f6' : '#f3f4f6'} fillOpacity={index === data.length - 1 ? 1 : 0.8} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
