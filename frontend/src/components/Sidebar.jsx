import { NavLink } from "react-router-dom";
import {
  Images,
  LayoutDashboard,
  PlusCircle,
  Settings,
  UserRound,
} from "lucide-react";

const links = [
  ["/dashboard", "Overview", LayoutDashboard],
  ["/generate", "Generate", PlusCircle],
  ["/my-images", "My images", Images],
  ["/profile", "Profile", UserRound],
  ["/settings", "Settings", Settings],
];

export default function Sidebar() {
  return (
    <aside className="group relative h-fit overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-zinc-800/90 via-zinc-950/95 to-emerald-950/80 p-3 text-white shadow-[0_25px_60px_-10px_rgba(16,185,129,0.3),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-500 hover:border-emerald-300/40 hover:shadow-[0_35px_80px_-10px_rgba(45,212,191,0.4),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.18)]">
      <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 animate-pulse rounded-full bg-emerald-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 animate-pulse rounded-full bg-amber-400/15 blur-3xl [animation-delay:1.4s]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/80 to-transparent" />
      <p className="relative bg-gradient-to-r from-emerald-300 via-teal-200 to-lime-300 bg-clip-text px-3 pb-3 pt-2 text-xs font-semibold uppercase tracking-widest text-transparent">
        Workspace
      </p>
      <nav className="relative space-y-1">
        {links.map(([to, label, Icon]) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `group/link flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-all duration-300 ${isActive ? "border-b-4 border-emerald-950 bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-lime-400/10 font-semibold text-lime-200 shadow-lg shadow-emerald-500/30 ring-1 ring-emerald-400/40" : "text-zinc-400 hover:translate-x-1 hover:bg-emerald-500/10 hover:text-emerald-200 hover:shadow-md hover:shadow-emerald-500/20 active:scale-95"}`
            }
          >
            <Icon
              size={18}
              className="transition-all duration-300 group-hover/link:scale-125 group-hover/link:rotate-6"
            />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}