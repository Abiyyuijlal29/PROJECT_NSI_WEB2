import AdminLayout from '../../layouts/AdminLayout';
import StatCards from '../../components/dashboard/StatCards';
import TicketTable from '../../components/dashboard/TicketTable';
import LiveFeed from '../../components/dashboard/LiveFeed';
import { Head } from '@inertiajs/react';
import { Ticket } from '../../types/dashboard';

interface DashboardProps {
    tickets: Ticket[];
}

export default function Dashboard({ tickets }: DashboardProps) {
    return (
        <AdminLayout>
            <Head title="Support Dashboard" />
            
            <div className="flex flex-col h-full">
                {/* Top Statistics Row */}
                <StatCards />

                {/* Main Content Area */}
                <div className="flex flex-1 overflow-hidden pb-4">
                    {/* Left/Middle Column: Data Table */}
                    <TicketTable tickets={tickets} />

                    {/* Right Column: Live Feed */}
                    <LiveFeed />
                </div>
            </div>
        </AdminLayout>
    );
}
