import { Link, usePage } from '@inertiajs/react';
<<<<<<< HEAD
import { dashboard, customers, billing, packages } from '@/routes';
import support from '@/routes/support';
import { Search, LayoutDashboard, Users, Package, CreditCard, LifeBuoy, LogOut, Menu, X } from 'lucide-react';
import React, { PropsWithChildren, useState } from 'react';
=======
import { Search, LayoutDashboard, Users, Package, CreditCard, LifeBuoy } from 'lucide-react';
import React, { PropsWithChildren } from 'react';
>>>>>>> parent of f8b0998 (Merge branch 'main' of https://github.com/Abiyyuijlal29/PROJECT_NSI_WEB2)

const navItems = [
    { icon: <LayoutDashboard size={18} />, label: 'Dashboard', href: '/dashboard' },
    { icon: <Users size={18} />, label: 'Customers', href: '#' },
    { icon: <Package size={18} />, label: 'Package', href: '#' },
    { icon: <CreditCard size={18} />, label: 'Billing', href: '#' },
    { icon: <LifeBuoy size={18} />, label: 'Support', href: '/support' },
];

export default function AdminLayout({ children }: PropsWithChildren) {
    const { url } = usePage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <div className="min-h-screen bg-[#0E121B] text-slate-200 font-sans flex overflow-hidden">
            {/* Mobile Backdrop */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-[#141A27] flex flex-col justify-between border-r border-slate-800 transition-transform duration-300 ease-in-out
                lg:translate-x-0 lg:static lg:inset-auto
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div>
<<<<<<< HEAD
                    {/* Logo & Close Button (Mobile) */}
                    <div className="p-6 flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-white font-bold leading-none tracking-wide text-sm">NSI</h1>
                                <span className="text-[#3b82f6] font-bold leading-none tracking-wide text-[0.65rem] mt-0.5">Net Satu Internews</span>
                            </div>
=======
                    {/* Logo */}
                    <div className="p-6 flex items-center space-x-3 mb-6">
                        <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-white font-bold leading-tight tracking-wide text-base">Vortex</h1>
                            <span className="text-xs text-slate-400 font-medium tracking-wide">Networks Admin</span>
>>>>>>> parent of f8b0998 (Merge branch 'main' of https://github.com/Abiyyuijlal29/PROJECT_NSI_WEB2)
                        </div>
                        <button 
                            className="lg:hidden p-2 text-slate-400 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="px-3 space-y-1">
                        {navItems.map((item) => (
                            <NavItem
                                key={item.label}
                                icon={item.icon}
                                label={item.label}
                                href={item.href}
                                active={url === item.href || url.startsWith(item.href + '/')}
                                onClick={() => setIsMobileMenuOpen(false)}
                            />
                        ))}
                    </nav>
                </div>

                {/* User Profile */}
                <div className="p-4 mx-3 mb-4 bg-[#1B2332] rounded-xl flex items-center space-x-3 border border-slate-700/50 cursor-pointer hover:border-slate-600 transition-colors">
                    <div className="w-9 h-9 rounded-full shrink-0 overflow-hidden ring-2 ring-blue-500/30">
                        <div className="w-full h-full bg-gradient-to-tr from-cyan-500 to-blue-500" />
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-white">Julian V.</div>
                        <div className="text-xs text-blue-400 font-medium">Head Admin</div>
                    </div>
                </div>
            </aside>

            {/* Main Area */}
            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
                {/* Top Header */}
<<<<<<< HEAD
                <header className="h-[72px] flex-shrink-0 flex items-center justify-between px-4 lg:px-8 border-b border-slate-800/50 bg-[#0E121B]/80 backdrop-blur-md z-30">
                    <div className="flex items-center space-x-4 flex-1">
                        <button 
                            className="lg:hidden p-2 -ml-2 text-slate-400 hover:text-white transition-colors"
                            onClick={toggleMobileMenu}
                        >
                            <Menu size={24} />
                        </button>
                        
                        <div className="flex-1 max-w-xl hidden md:block">
                            <div className="relative group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 group-focus-within:text-blue-500 transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Cari pelanggan atau Tiket"
                                    className="w-full bg-[#182130] text-slate-300 placeholder-slate-500 rounded-lg pl-10 pr-4 py-2 outline-none focus:ring-1 focus:ring-blue-500/70 border border-slate-800 focus:border-blue-500/50 transition-all text-sm font-medium"
                                />
                            </div>
=======
                <header className="h-[72px] flex-shrink-0 flex items-center justify-between px-8 border-b border-slate-800/50">
                    <div className="flex-1 max-w-xl">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 group-focus-within:text-blue-500 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search customers or Tickets"
                                className="w-full bg-[#182130] text-slate-300 placeholder-slate-500 rounded-lg pl-10 pr-4 py-2 outline-none focus:ring-1 focus:ring-blue-500/70 border border-slate-800 focus:border-blue-500/50 transition-all text-sm font-medium"
                            />
>>>>>>> parent of f8b0998 (Merge branch 'main' of https://github.com/Abiyyuijlal29/PROJECT_NSI_WEB2)
                        </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 bg-[#0E1524] px-3 py-1.5 rounded-full border border-slate-800/60 ml-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
<<<<<<< HEAD
                        <span className="text-[10px] lg:text-xs text-blue-400 font-bold tracking-wider uppercase whitespace-nowrap">Online</span>
=======
                        <span className="text-xs text-blue-400 font-bold tracking-wider uppercase">System Online</span>
>>>>>>> parent of f8b0998 (Merge branch 'main' of https://github.com/Abiyyuijlal29/PROJECT_NSI_WEB2)
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 px-4 lg:px-8 py-6 overflow-y-auto custom-scrollbar">
                    {children}
                </main>
            </div>
        </div>
    );
}

function NavItem({ icon, label, href, active = false, onClick }: { icon: React.ReactNode; label: string; href: string; active?: boolean; onClick?: () => void }) {
    return (
        <Link
            href={href}
<<<<<<< HEAD
            prefetch
            onClick={onClick}
=======
>>>>>>> parent of f8b0998 (Merge branch 'main' of https://github.com/Abiyyuijlal29/PROJECT_NSI_WEB2)
            className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all font-medium text-sm
                ${active
                    ? 'bg-blue-600/10 text-blue-400 border border-blue-500/10'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/5 border border-transparent'
                }
            `}
        >
            <span className={`transition-colors ${active ? 'text-blue-400' : 'text-slate-500'}`}>{icon}</span>
            <span>{label}</span>
        </Link>
    );
}
