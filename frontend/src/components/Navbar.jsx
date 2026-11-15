import { Link, NavLink, useNavigate } from "react-router-dom";
import { LogOut, Sparkles, UserRound } from "lucide-react";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const signOut = () => {
    logout();
    navigate("/");
  };
  return (
    <header className="sticky top-0 z-40 border-b border-emerald-400/20 bg-zinc-950/85 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.3),inset_0_-1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-lime-300/70 to-transparent" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link
          to="/"
          className="group flex items-center gap-2 text-lg font-bold text-white"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl border-b-4 border-emerald-950 bg-gradient-to-br from-emerald-400 via-teal-400 to-lime-300 text-zinc-950 shadow-lg shadow-emerald-500/40 transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110 group-hover:shadow-emerald-400/70">
            <Sparkles size={20} />
          </span>
          PixelForge{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-lime-300 bg-clip-text text-transparent">
            AI
          </span>
        </Link>
        <nav className="flex items-center gap-3 text-sm text-zinc-300">
          {user ? (
            <>
              <NavLink
                to="/dashboard"
                className="relative hidden transition-all duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-gradient-to-r after:from-emerald-400 after:to-lime-300 after:transition-all after:duration-300 hover:-translate-y-0.5 hover:text-emerald-200 hover:after:w-full sm:block"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/generate"
                className="group/btn relative overflow-hidden rounded-full border-b-4 border-amber-700 bg-gradient-to-b from-amber-300 to-amber-500 px-4 py-2 font-semibold text-zinc-950 shadow-lg shadow-amber-500/40 transition-all duration-200 hover:-translate-y-1 hover:from-lime-300 hover:to-amber-400 hover:shadow-xl hover:shadow-amber-400/60 active:translate-y-0.5 active:border-b active:shadow-none"
              >
                <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/40 transition-all duration-700 group-hover/btn:left-[150%]" />
                <span className="relative">Create image</span>
              </NavLink>
              <Link
                to="/profile"
                aria-label="Profile"
                className="rounded-full border border-b-4 border-emerald-400/30 border-b-emerald-950 bg-zinc-800/80 p-2 text-emerald-200 shadow-md shadow-black/40 transition-all duration-200 hover:-translate-y-0.5 hover:rotate-6 hover:border-emerald-300/60 hover:bg-emerald-500/20 hover:text-lime-200 hover:shadow-lg hover:shadow-emerald-500/30 active:translate-y-0.5 active:border-b active:shadow-none"
              >
                <UserRound size={18} />
              </Link>
              <button
                onClick={signOut}
                title="Log out"
                className="rounded-full border border-b-4 border-red-400/30 border-b-red-950 bg-zinc-800/80 p-2 text-zinc-300 shadow-md shadow-black/40 transition-all duration-200 hover:-translate-y-0.5 hover:rotate-6 hover:border-red-400/60 hover:bg-red-500/20 hover:text-red-300 hover:shadow-lg hover:shadow-red-500/30 active:translate-y-0.5 active:border-b active:shadow-none"
              >
                <LogOut size={18} />
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="transition-all duration-300 hover:-translate-y-0.5 hover:text-emerald-200"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="group/btn relative overflow-hidden rounded-full border-b-4 border-amber-700 bg-gradient-to-b from-amber-300 to-amber-500 px-4 py-2 font-semibold text-zinc-950 shadow-lg shadow-amber-500/40 transition-all duration-200 hover:-translate-y-1 hover:from-lime-300 hover:to-amber-400 hover:shadow-xl hover:shadow-amber-400/60 active:translate-y-0.5 active:border-b active:shadow-none"
              >
                <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/40 transition-all duration-700 group-hover/btn:left-[150%]" />
                <span className="relative">Get started</span>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}