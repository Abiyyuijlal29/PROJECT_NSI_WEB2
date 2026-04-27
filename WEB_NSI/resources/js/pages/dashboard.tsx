import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold tracking-tight">Selamat Datang di NSI Project</h2>
                    <p className="text-muted-foreground">
                        Sistem manajemen internal Net Satu Internews. Silakan gunakan menu di samping untuk mulai mengelola data.
                    </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {/* Placeholder for future stats or widgets */}
                </div>
            </div>
        </AppLayout>
    );
}
