import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoute() {
  const { user, loading } = useAuth();
  if (loading)
    return (
      <div className="group relative isolate mx-auto my-20 max-w-md overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-zinc-800/90 via-zinc-950/95 to-emerald-950/80 p-12 text-center text-zinc-400 shadow-[0_25px_60px_-10px_rgba(16,185,129,0.3),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-emerald-300/40 hover:text-emerald-200 hover:shadow-[0_35px_80px_-10px_rgba(45,212,191,0.4),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.18)]">
        <div className="pointer-events-none absolute -left-16 -top-16 -z-10 h-48 w-48 animate-pulse rounded-full bg-emerald-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 -z-10 h-48 w-48 animate-pulse rounded-full bg-amber-400/15 blur-3xl [animation-delay:1.4s]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-lime-300/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 -left-full -z-10 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-emerald-300/10 to-transparent transition-all duration-1000 group-hover:left-[150%]" />
        Loading your workspace...
      </div>
    );
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}
