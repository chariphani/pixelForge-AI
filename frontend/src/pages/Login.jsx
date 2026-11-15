import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [busy, setBusy] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await login(form);
      toast.success("Welcome back!");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="relative isolate mx-auto max-w-md">
      <div className="pointer-events-none absolute -left-24 top-0 -z-10 h-72 w-72 animate-pulse rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 animate-pulse rounded-full bg-amber-400/15 blur-3xl [animation-delay:1.5s]" />
      <div className="group relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-zinc-800/90 via-zinc-950/95 to-emerald-950/80 p-7 text-white shadow-[0_25px_60px_-10px_rgba(16,185,129,0.35),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-emerald-300/40 hover:shadow-[0_35px_80px_-10px_rgba(45,212,191,0.45),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.18)] sm:p-9">
        <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 animate-pulse rounded-full bg-emerald-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 animate-pulse rounded-full bg-amber-400/15 blur-3xl [animation-delay:1.4s]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/80 to-transparent" />
        <h1 className="relative bg-gradient-to-r from-emerald-300 via-teal-200 to-lime-300 bg-clip-text text-3xl font-bold text-transparent">
          Welcome back
        </h1>
        <p className="relative mt-2 text-sm text-zinc-400">
          Log in to your creative workspace.
        </p>
        <form onSubmit={submit} className="relative mt-7 space-y-4">
          <div className="group/field">
            <label className="mb-2 block text-sm text-zinc-300 transition-colors duration-300 group-focus-within/field:text-emerald-300">
              Email
            </label>
            <input
              className="w-full rounded-xl border border-emerald-400/20 bg-zinc-950/70 px-4 py-3 text-sm text-white shadow-inner shadow-black/60 outline-none transition-all duration-300 placeholder:text-zinc-500 hover:border-emerald-300/40 focus:border-emerald-300 focus:bg-zinc-950 focus:shadow-[0_0_30px_-5px_rgba(52,211,153,0.5),inset_0_2px_8px_0_rgba(0,0,0,0.6)] focus:ring-4 focus:ring-emerald-400/15"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="group/field">
            <label className="mb-2 block text-sm text-zinc-300 transition-colors duration-300 group-focus-within/field:text-emerald-300">
              Password
            </label>
            <input
              className="w-full rounded-xl border border-emerald-400/20 bg-zinc-950/70 px-4 py-3 text-sm text-white shadow-inner shadow-black/60 outline-none transition-all duration-300 placeholder:text-zinc-500 hover:border-emerald-300/40 focus:border-emerald-300 focus:bg-zinc-950 focus:shadow-[0_0_30px_-5px_rgba(52,211,153,0.5),inset_0_2px_8px_0_rgba(0,0,0,0.6)] focus:ring-4 focus:ring-emerald-400/15"
              type="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <button
            disabled={busy}
            className="group/btn relative isolate w-full overflow-hidden rounded-xl border-b-4 border-amber-700 bg-gradient-to-b from-amber-300 to-amber-500 py-3 font-semibold text-zinc-950 shadow-lg shadow-amber-500/40 transition-all duration-200 hover:-translate-y-1 hover:from-lime-300 hover:to-amber-400 hover:shadow-xl hover:shadow-amber-400/60 active:translate-y-0.5 active:border-b active:shadow-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:from-amber-300 disabled:hover:to-amber-500 disabled:hover:shadow-lg"
          >
            <span className="pointer-events-none absolute inset-y-0 -left-full -z-10 w-1/2 -skew-x-12 bg-white/40 transition-all duration-700 group-hover/btn:left-[150%]" />
            {busy ? "Logging in..." : "Log in"}
          </button>
        </form>
        <p className="relative mt-6 text-center text-sm text-zinc-400">
          New here?{" "}
          <Link
            className="font-semibold text-emerald-300 transition-colors duration-300 hover:text-lime-300 hover:underline"
            to="/register"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}