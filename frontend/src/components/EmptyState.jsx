import { ImagePlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmptyState({
  title = "Nothing here yet",
  description = "Start creating to see your work here.",
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-zinc-800/90 via-zinc-950/95 to-emerald-950/80 px-6 py-14 text-center text-white shadow-[0_25px_60px_-10px_rgba(16,185,129,0.3),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300/40 hover:shadow-[0_35px_80px_-10px_rgba(45,212,191,0.4),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.18)]">
      <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 animate-pulse rounded-full bg-emerald-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 animate-pulse rounded-full bg-amber-400/15 blur-3xl [animation-delay:1.4s]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-teal-400/10 blur-3xl [animation-delay:2.6s]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/80 to-transparent" />
      <div className="relative">
        <div className="relative mx-auto grid h-20 w-20 place-items-center">
          <div className="absolute inset-0 animate-ping rounded-2xl bg-emerald-400/20 [animation-duration:2.4s]" />
          <div className="relative grid h-20 w-20 animate-bounce place-items-center rounded-2xl border-b-4 border-emerald-950 bg-gradient-to-br from-emerald-400 via-teal-400 to-lime-300 shadow-lg shadow-emerald-500/40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 [animation-duration:3s]">
            <ImagePlus className="text-zinc-950" size={36} />
          </div>
        </div>
        <h3 className="mt-6 bg-gradient-to-r from-emerald-300 via-teal-200 to-lime-300 bg-clip-text text-lg font-semibold text-transparent">
          {title}
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
          {description}
        </p>
        <Link
          to="/generate"
          className="group/btn relative mt-6 inline-flex overflow-hidden rounded-xl border-b-4 border-amber-700 bg-gradient-to-b from-amber-300 to-amber-500 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-amber-500/40 transition-all duration-200 hover:-translate-y-1 hover:from-lime-300 hover:to-amber-400 hover:shadow-xl hover:shadow-amber-400/60 active:translate-y-0.5 active:border-b active:shadow-none"
        >
          <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/40 transition-all duration-700 group-hover/btn:left-[150%]" />
          <span className="relative">Create an image</span>
        </Link>
      </div>
    </div>
  );
}