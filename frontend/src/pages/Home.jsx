import { Link } from "react-router-dom";
import { ArrowRight, Image, ShieldCheck, WandSparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative isolate py-10 sm:py-20">
      <div className="pointer-events-none absolute left-4 top-0 -z-10 h-80 w-80 animate-pulse rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-4 top-40 -z-10 h-80 w-80 animate-pulse rounded-full bg-amber-400/15 blur-3xl [animation-delay:1.5s]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-72 w-72 animate-pulse rounded-full bg-teal-400/15 blur-3xl [animation-delay:3s]" />
      <div className="mx-auto max-w-4xl text-center">
        <div className="group mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs text-emerald-200 shadow-lg shadow-emerald-500/20 backdrop-blur transition-all duration-300 hover:scale-105 hover:border-emerald-300/60 hover:bg-emerald-400/20 hover:text-lime-200">
          <WandSparkles
            size={14}
            className="animate-pulse transition-transform duration-300 group-hover:rotate-12"
          />{" "}
          AI-powered creative studio
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black leading-tight tracking-tight text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.5)] sm:text-7xl"
        >
          Your imagination.
          <br />
          <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(52,211,153,0.5)]">
            Made visible.
          </span>
        </motion.h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
          Turn simple words into original images with AI. Describe your idea,
          create it, and keep every masterpiece in your personal gallery.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="/generate"
            className="group/btn relative isolate inline-flex items-center gap-2 overflow-hidden rounded-xl border-b-4 border-amber-700 bg-gradient-to-b from-amber-300 to-amber-500 px-6 py-3.5 font-semibold text-zinc-950 shadow-lg shadow-amber-500/40 transition-all duration-200 hover:-translate-y-1 hover:from-lime-300 hover:to-amber-400 hover:shadow-xl hover:shadow-amber-400/60 active:translate-y-0.5 active:border-b active:shadow-none"
          >
            <span className="pointer-events-none absolute inset-y-0 -left-full -z-10 w-1/2 -skew-x-12 bg-white/40 transition-all duration-700 group-hover/btn:left-[150%]" />
            Start creating{" "}
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover/btn:translate-x-1.5"
            />
          </Link>
          <Link
            to="/register"
            className="rounded-xl border border-b-4 border-emerald-400/30 border-b-emerald-950 bg-zinc-800/80 px-6 py-3.5 font-semibold text-emerald-200 shadow-md shadow-black/40 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-300/60 hover:bg-emerald-500/15 hover:text-lime-200 hover:shadow-lg hover:shadow-emerald-500/30 active:translate-y-0.5 active:border-b active:shadow-none"
          >
            Create free account
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-20 grid max-w-4xl gap-4 sm:grid-cols-3">
        {[
          [
            WandSparkles,
            "Real AI creation",
            "Generate images from the prompts you write.",
          ],
          [
            Image,
            "Your own gallery",
            "Find and download your previous creations.",
          ],
          [
            ShieldCheck,
            "Private workspace",
            "Your saved images are linked to your account.",
          ],
        ].map(([Icon, title, desc]) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-zinc-800/90 via-zinc-950/95 to-emerald-950/80 p-6 text-white shadow-[0_20px_45px_-12px_rgba(16,185,129,0.3),0_6px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:border-emerald-300/50 hover:shadow-[0_30px_70px_-10px_rgba(45,212,191,0.45),0_6px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.18)]"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-emerald-500/25 blur-3xl transition-all duration-500 group-hover:scale-150" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 -left-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[150%]" />
            <div className="relative grid h-12 w-12 place-items-center rounded-xl border-b-4 border-emerald-950 bg-gradient-to-br from-emerald-400 via-teal-400 to-lime-300 text-zinc-950 shadow-lg shadow-emerald-500/40 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Icon size={25} />
            </div>
            <h3 className="relative mt-4 bg-gradient-to-r from-emerald-300 via-teal-200 to-lime-300 bg-clip-text font-semibold text-transparent">
              {title}
            </h3>
            <p className="relative mt-2 text-sm leading-6 text-zinc-400 transition-colors duration-300 group-hover:text-emerald-100">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}