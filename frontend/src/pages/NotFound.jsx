import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="relative isolate overflow-hidden py-24 text-center">
      <div className="pointer-events-none absolute -left-20 top-0 -z-10 h-72 w-72 animate-pulse rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-72 w-72 animate-pulse rounded-full bg-amber-400/15 blur-3xl [animation-delay:1.5s]" />
      <div className="pointer-events-none absolute left-1/3 top-1/2 -z-10 h-64 w-64 animate-pulse rounded-full bg-teal-400/15 blur-3xl [animation-delay:3s]" />
      <p className="animate-bounce bg-gradient-to-r from-emerald-300 via-teal-200 to-lime-300 bg-clip-text text-7xl font-black text-transparent drop-shadow-[0_0_30px_rgba(52,211,153,0.55)] [animation-duration:3s]">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold text-white drop-shadow-[0_3px_0_rgba(0,0,0,0.5)]">
        Page not found
      </h1>
      <p className="mt-2 text-zinc-400">That page doesn't exist.</p>
      <Link
        to="/"
        className="group/btn relative isolate mt-6 inline-block overflow-hidden rounded-xl border-b-4 border-amber-700 bg-gradient-to-b from-amber-300 to-amber-500 px-5 py-3 font-semibold text-zinc-950 shadow-lg shadow-amber-500/40 transition-all duration-200 hover:-translate-y-1 hover:from-lime-300 hover:to-amber-400 hover:shadow-xl hover:shadow-amber-400/60 active:translate-y-0.5 active:border-b active:shadow-none"
      >
        <span className="pointer-events-none absolute inset-y-0 -left-full -z-10 w-1/2 -skew-x-12 bg-white/40 transition-all duration-700 group-hover/btn:left-[150%]" />
        Go home
      </Link>
    </div>
  );
}