import { login } from '../auth/actions'

export default function LoginPage({
    searchParams,
}: {
    searchParams: { message: string; error: string }
}) {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-[#0a0a0a] px-4">
            <form className="flex w-full max-w-sm flex-col gap-6" action={login}>
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="font-manrope text-3xl font-extrabold text-white">Admin Login</h1>
                    <p className="font-jetbrains-mono text-sm font-light text-white/50">
                        Sign in to manage your portfolio
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="font-manrope text-sm font-medium text-white" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="rounded-lg bg-[#ffffff]/5 px-4 py-3 font-jetbrains-mono text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                            name="email"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-manrope text-sm font-medium text-white" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="rounded-lg bg-[#ffffff]/5 px-4 py-3 font-jetbrains-mono text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                </div>

                {searchParams?.error && (
                    <p className="text-center font-jetbrains-mono text-xs text-red-500 bg-red-500/10 p-2 rounded">
                        {searchParams.error}
                    </p>
                )}

                <button className="rounded-full bg-white px-4 py-3 font-manrope text-sm font-bold text-black hover:bg-gray-200 transition-colors">
                    Sign In
                </button>
            </form>
        </div>
    )
}
