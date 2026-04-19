import { Form, Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { Wifi, User, Lock, ArrowRight } from 'lucide-react';

type Props = {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
};

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: Props) {
    return (
        <div className="min-h-screen relative flex items-center justify-center bg-[#09101f] overflow-hidden font-sans">
            <Head title="Log in" />

            {/* Background Effects */}
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#1a3a7ac0] rounded-full filter blur-[150px] opacity-20 pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#1a4a98] rounded-full filter blur-[120px] opacity-10 pointer-events-none" />

            {/* Abstract curve lines (SVG) */}
            <svg className="absolute w-full h-full inset-0 pointer-events-none opacity-20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-100 300 Q 400 100 800 600 T 1500 200" fill="transparent" stroke="#3b82f6" strokeWidth="0.5" />
                <path d="M-100 500 Q 300 800 900 300 T 1500 600" fill="transparent" stroke="#3b82f6" strokeWidth="0.3" />
            </svg>

            <div className="relative z-10 w-full max-w-[400px] bg-[#121929] border border-[#232d44] rounded-2xl p-8 shadow-2xl xs:mx-4 mx-4">

                {/* Logo Area */}
                <div className="flex flex-col items-center mb-8">
                    <div className="w-14 h-14 bg-[#2363eb] rounded-xl flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                        <Wifi className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-xl font-bold tracking-wide">
                        <span className="text-white text-[1.3rem]">VORTEX </span>
                        <span className="text-[#3b82f6] text-[1.3rem]">NETWORKS</span>
                    </div>
                    <div className="text-[#64748b] text-[0.75rem] mt-1 font-medium tracking-wide font-sans">
                        ISP Management Portal
                    </div>
                </div>

                <Form
                    {...store.form()}
                    resetOnSuccess={['password']}
                    className="flex flex-col gap-5"
                >
                    {({ processing, errors }) => (
                        <>
                            {/* Administrator ID */}
                            <div className="grid gap-2">
                                <label htmlFor="email" className="text-xs font-semibold text-[#8b9bb4]">
                                    Administrator ID
                                </label>
                                <div className="flex items-center w-full bg-[#151c2e] border border-[#28354f] rounded-lg px-4 py-3 focus-within:border-[#3b82f6] transition-colors">
                                    <User className="w-4 h-4 text-[#5f708a] mr-3" />
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="email"
                                        placeholder="Enter your ID"
                                        className="bg-transparent border-none outline-none text-sm text-gray-200 placeholder-[#475569] w-full"
                                    />
                                </div>
                                <InputError message={errors.email} />
                            </div>

                            {/* Password */}
                            <div className="grid gap-2">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="text-xs font-semibold text-[#8b9bb4]">
                                        Password
                                    </label>
                                    {canResetPassword && (
                                        <TextLink
                                            href={request().url}
                                            className="text-xs text-[#3b82f6] hover:text-[#60a5fa] transition-colors focus:ring-0"
                                            tabIndex={5}
                                        >
                                            Forgot Access?
                                        </TextLink>
                                    )}
                                </div>
                                <div className="flex items-center w-full bg-[#151c2e] border border-[#28354f] rounded-lg px-4 py-3 focus-within:border-[#3b82f6] transition-colors">
                                    <Lock className="w-4 h-4 text-[#5f708a] mr-3" />
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        required
                                        tabIndex={2}
                                        autoComplete="current-password"
                                        placeholder="••••••••"
                                        className="bg-transparent border-none outline-none text-sm text-gray-200 placeholder-[#475569] tracking-widest w-full"
                                    />
                                </div>
                                <InputError message={errors.password} />
                            </div>

                            {status && (
                                <div className="text-center text-sm font-medium text-green-500">
                                    {status}
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="mt-2 w-full bg-[#2d68fb] hover:bg-[#3b75fc] text-white font-medium text-sm rounded-lg py-3 flex justify-center items-center gap-2 transition-all shadow-[0_0_20px_rgba(45,104,251,0.2)] hover:shadow-[0_0_25px_rgba(45,104,251,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                                tabIndex={4}
                                disabled={processing}
                                data-test="login-button"
                            >
                                {processing ? <Spinner className="w-4 h-4" /> : null}
                                <span>Authenticate Session</span>
                                {!processing && <ArrowRight className="w-4 h-4" />}
                            </button>
                        </>
                    )}
                </Form>

                <div className="mt-10 border-t border-[#1e293b] pt-6 text-center">
                    <p className="text-[9px] tracking-[0.2em] font-mono text-[#475569] uppercase">
                        Secure Operator Environment V4.2.0
                    </p>
                </div>
            </div>

            {/* Small glowing dots background */}
            <div className="absolute left-[30%] top-[40%] w-1.5 h-1.5 bg-[#4f46e5] rounded-full filter blur-[1px] opacity-70"></div>
            <div className="absolute right-[20%] top-[25%] w-1.5 h-1.5 bg-[#38bdf8] rounded-full filter blur-[1px] opacity-60"></div>
            <div className="absolute right-[30%] bottom-[30%] w-1 h-1 bg-[#818cf8] rounded-full opacity-50"></div>
        </div>
    );
}
