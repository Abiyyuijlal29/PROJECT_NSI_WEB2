import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/layouts/AdminLayout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { Search, Bell, Plus, Filter, LogOut } from 'lucide-react';

import DashboardStats from '@/components/dashboard/DashboardStats';
import RecentActivity from '@/components/dashboard/RecentActivity';
import RevenueTrends from '@/components/dashboard/RevenueTrends';
import PackagePopularity from '@/components/dashboard/PackagePopularity';
import InventoryAlert from '@/components/dashboard/InventoryAlert';
import UrgentTickets from '@/components/dashboard/UrgentTickets';
import { logout } from '@/routes';

interface DashboardProps {
    stats: any;
    recent_activity: any[];
    urgent_tickets: any[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dasbor',
        href: dashboard(),
    },
];

const Dashboard = ({ stats, recent_activity, urgent_tickets }: DashboardProps) => {
    const packagePopularityData = [
        { name: 'Fiber Gig (1000 Mbps)', percentage: 45 },
        { name: 'Home Basic (100 Mbps)', percentage: 30 },
        { name: 'Business Pro', percentage: 25 },
    ];

    return (
        <>
            <Head title="Dasbor" />

            <div className="flex flex-col gap-6 min-h-screen bg-[#0E121B] text-slate-300 font-sans selection:bg-blue-500/30">

                {/* Stats Row */}
                <DashboardStats stats={stats} />

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Recent Activity Table */}
                    <div className="lg:col-span-2">
                        <RecentActivity data={recent_activity} />
                    </div>

                    {/* Revenue Trends Chart */}
                    <div className="lg:col-span-1">
                        <RevenueTrends />
                    </div>
                </div>

                {/* Bottom row grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8">
                    {/* Package Popularity */}
                    <div className="lg:col-span-1">
                        <PackagePopularity data={packagePopularityData} />
                    </div>

                    {/* Inventory Alert */}
                    <div className="lg:col-span-1">
                        <InventoryAlert />
                    </div>

                    {/* Urgent Tickets */}
                    <div className="lg:col-span-2">
                        <UrgentTickets data={urgent_tickets} />
                    </div>
                </div>
            </div>
        </>
    );
};

Dashboard.layout = (page: React.ReactNode) => <AdminLayout children={page} />;

export default Dashboard;
