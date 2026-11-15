import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { updateProfile } from "../services/userService";
import formatDate from "../utils/formatDate";

export default function Profile() {
  const { user, setUser } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [busy, setBusy] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      const d = await updateProfile(name);
      setUser(d.user);
      toast.success("Profile updated");
    } catch (err) {
      toast.error(err.response?.data?.message || "Update failed");
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="relative isolate max-w-xl">
      <div className="pointer-events-none absolute -left-20 -top-10 -z-10 h-64 w-64 animate-pulse rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-40 -z-10 h-64 w-64 animate-pulse rounded-full bg-amber-400/10 blur-3xl [animation-delay:1.5s]" />
      <h1 className="bg-gradient-to-r from-emerald-300 via-teal-200 to-lime-300 bg-clip-text text-3xl font-bold text-transparent drop-shadow-[0_0_20px_rgba(52,211,153,0.35)]">
        Profile
      </h1>
      <p className="mb-7 mt-2 text-sm text-zinc-400">
        Manage your account details.
      </p>
      <form
        onSubmit={submit}
        className="group relative space-y-5 overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-zinc-800/90 via-zinc-950/95 to-emerald-950/80 p-6 text-white shadow-[0_25px_60px_-10px_rgba(16,185,129,0.3),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-500 hover:border-emerald-300/40 hover:shadow-[0_35px_80px_-10px_rgba(45,212,191,0.4),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.18)]"
      >
        <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 animate-pulse rounded-full bg-emerald-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 animate-pulse rounded-full bg-amber-400/15 blur-3xl [animation-delay:1.4s]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/80 to-transparent" />
        <div className="group/field relative">
          <label className="mb-2 block text-sm text-zinc-300 transition-colors duration-300 group-focus-within/field:text-emerald-300">
            Full name
          </label>
          <input
            className="w-full rounded-xl border border-emerald-400/20 bg-zinc-950/70 px-4 py-3 text-sm text-white shadow-inner shadow-black/60 outline-none transition-all duration-300 placeholder:text-zinc-500 hover:border-emerald-300/40 focus:border-emerald-300 focus:bg-zinc-950 focus:shadow-[0_0_30px_-5px_rgba(52,211,153,0.5),inset_0_2px_8px_0_rgba(0,0,0,0.6)] focus:ring-4 focus:ring-emerald-400/15"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            maxLength="60"
          />
        </div>
        <div className="relative">
          <label className="mb-2 block text-sm text-zinc-300">
            Email address
          </label>
          <input
            className="w-full cursor-not-allowed rounded-xl border border-emerald-400/10 bg-zinc-950/50 px-4 py-3 text-sm text-white opacity-60 shadow-inner shadow-black/60 outline-none"
            value={user?.email || ""}
            disabled
          />
        </div>
        <p className="relative text-xs text-zinc-500 transition-colors duration-300 group-hover:text-teal-300">
          Member since {formatDate(user?.createdAt)}
        </p>
        <button
          disabled={busy}
          className="group/btn relative isolate overflow-hidden rounded-xl border-b-4 border-amber-700 bg-gradient-to-b from-amber-300 to-amber-500 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-amber-500/40 transition-all duration-200 hover:-translate-y-1 hover:from-lime-300 hover:to-amber-400 hover:shadow-xl hover:shadow-amber-400/60 active:translate-y-0.5 active:border-b active:shadow-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:from-amber-300 disabled:hover:to-amber-500 disabled:hover:shadow-lg"
        >
          <span className="pointer-events-none absolute inset-y-0 -left-full -z-10 w-1/2 -skew-x-12 bg-white/40 transition-all duration-700 group-hover/btn:left-[150%]" />
          {busy ? "Saving..." : "Save changes"}
        </button>
      </form>
    </div>
  );
}