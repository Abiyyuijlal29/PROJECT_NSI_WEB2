import AdminLayout from '@/layouts/AdminLayout';
import DashboardStats from '@/components/dashboard/DashboardStats';
import RecentActivity from '@/components/dashboard/RecentActivity';
import UrgentTickets from '@/components/dashboard/UrgentTickets';
import RevenueTrends from '@/components/dashboard/RevenueTrends';
import PackagePopularity from '@/components/dashboard/PackagePopularity';
import InventoryAlert from '@/components/dashboard/InventoryAlert';
import { Head } from '@inertiajs/react';

interface DashboardProps {
    stats: any;
    recent_activity: any[];
    urgent_tickets: any[];
}

const Dashboard = ({ stats, recent_activity, urgent_tickets }: DashboardProps) => {
    const packageData = [
        { name: 'Ultra Fiber 100', percentage: 45 },
        { name: 'Home Basic 30', percentage: 30 },
        { name: 'Business Pro 50', percentage: 25 }
    ];

    return (
        <>
            <Head title="Dashboard" />
            
            <div className="space-y-6">
                {/* Statistics Row */}
                <DashboardStats stats={stats} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Main Charts & Activity */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="h-[300px]">
                                <RevenueTrends />
                            </div>
                            <div className="h-[300px]">
                                <PackagePopularity data={packageData} />
                            </div>
                        </div>
                        <div className="min-h-[400px]">
                            <RecentActivity data={recent_activity} />
                        </div>
                    </div>

                    {/* Right Column - Alerts & Urgent Items */}
                    <div className="space-y-6">
                        <InventoryAlert />
                        <UrgentTickets data={urgent_tickets} />
                    </div>
                </div>
            </div>
        </>
    );
};

Dashboard.layout = (page: React.ReactNode) => <AdminLayout children={page} />;

export default Dashboard;
