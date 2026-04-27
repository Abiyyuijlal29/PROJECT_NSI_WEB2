import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#FDFDFC] p-6 text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC]">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">NSI Project</h1>
                    <p className="text-lg mb-8 opacity-70">Sistem manajemen internal Net Satu Internews.</p>
                    <div className="flex gap-4 justify-center">
                        <Link
                            href="/login"
                            className="rounded-md bg-[#1b1b18] px-6 py-2 text-sm font-medium text-white hover:bg-black dark:bg-[#EDEDEC] dark:text-[#0a0a0a]"
                        >
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
