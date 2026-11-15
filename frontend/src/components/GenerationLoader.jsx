import { LoaderCircle, Sparkles } from "lucide-react";

export default function GenerationLoader() {
  return (
    <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-zinc-800/90 via-zinc-950/95 to-emerald-950/80 px-6 py-16 text-center text-white shadow-[0_25px_60px_-10px_rgba(16,185,129,0.3),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300/40 hover:shadow-[0_35px_80px_-10px_rgba(45,212,191,0.4),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.18)]">
      <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 animate-pulse rounded-full bg-emerald-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 animate-pulse rounded-full bg-amber-400/15 blur-3xl [animation-delay:1.4s]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-teal-400/10 blur-3xl [animation-delay:2.6s]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 -left-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-emerald-300/10 to-transparent transition-all duration-1000 group-hover:left-[150%]" />
      <div className="relative mb-5">
        <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400/20 [animation-duration:2s]" />
        <Sparkles
          className="relative animate-pulse text-emerald-300 drop-shadow-[0_0_12px_rgba(52,211,153,0.9)] transition-all duration-500 group-hover:rotate-12 group-hover:scale-125 group-hover:text-lime-300"
          size={42}
        />
        <LoaderCircle
          className="absolute -right-4 -top-4 animate-spin text-amber-300 drop-shadow-[0_0_8px_rgba(252,211,77,0.9)] [animation-duration:0.9s]"
          size={22}
        />
      </div>
      <h3 className="relative bg-gradient-to-r from-emerald-300 via-teal-200 to-lime-300 bg-clip-text text-lg font-semibold text-transparent">
        Creating your image
      </h3>
      <p className="relative mt-2 max-w-sm text-sm text-zinc-400">
        The AI is turning your prompt into an image. This can take a little
        while.
      </p>
    </div>
  );
}