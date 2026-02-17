"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";
import Container from "@/components/Container";
import { Loader2 } from "lucide-react";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { googleLogin } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Identity verified.");
      router.push("/");
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof Error) {
        toast.error(error.message || "Access denied.");
      } else {
        toast.error("Authentication failed.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-black min-h-screen">
        <Container className="py-20 flex items-center justify-center">
        <div className="w-full max-w-md bg-brandCharcoal p-12 md:p-16 border border-white/5">
            <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-3">Welcome Back</h1>
            <p className="text-zinc-500 text-xs font-black uppercase tracking-widest">
                Return to the Frontier
            </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">
                Identity (Email)
                </label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-black text-white px-4 py-3 border border-white/10 focus:border-brandAmber outline-none transition-all font-medium"
                placeholder="rebel@wildmen.com"
                />
            </div>

            <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">
                Access Key (Password)
                </label>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-black text-white px-4 py-3 border border-white/10 focus:border-brandAmber outline-none transition-all font-medium"
                placeholder="••••••••"
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="brand-button brand-button-primary w-full flex items-center justify-center py-4"
            >
                {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                "Authorize"
                )}
            </button>
            </form>

            <div className="mt-10">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5"></div>
                </div>
                <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
                <span className="px-4 bg-brandCharcoal text-zinc-600">
                    Alternative Access
                </span>
                </div>
            </div>

            <button
                onClick={handleGoogleLogin}
                type="button"
                className="mt-6 w-full border-2 border-white/10 hover:border-brandAmber text-white font-black uppercase tracking-widest text-xs py-4 transition-colors flex items-center justify-center gap-2"
            >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="currentColor"
                />
                <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="currentColor"
                />
                <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="currentColor"
                />
                <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="currentColor"
                />
                </svg>
                Google Identity
            </button>
            </div>

            <p className="mt-10 text-center text-[10px] font-black uppercase tracking-widest text-zinc-600">
            First time out?{" "}
            <Link
                href="/signup"
                className="text-brandAmber hover:underline"
            >
                Sign up
            </Link>
            </p>
        </div>
        </Container>
    </div>
  );
};

export default SignInPage;
