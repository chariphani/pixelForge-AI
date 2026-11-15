export default function Footer() {
  return (
    <footer className="group relative isolate mt-20 overflow-hidden border-t border-emerald-400/20 bg-gradient-to-b from-zinc-900 via-zinc-950 to-emerald-950/70 px-5 py-8 text-center text-sm text-zinc-400 shadow-[0_-20px_60px_-15px_rgba(16,185,129,0.25),inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-all duration-500 hover:border-emerald-300/40 hover:text-emerald-200 hover:shadow-[0_-25px_70px_-15px_rgba(45,212,191,0.4),inset_0_1px_0_0_rgba(255,255,255,0.18)]">
      <div className="pointer-events-none absolute -left-20 -top-20 -z-10 h-56 w-56 animate-pulse rounded-full bg-emerald-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 -z-10 h-56 w-56 animate-pulse rounded-full bg-amber-400/15 blur-3xl [animation-delay:1.4s]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-teal-400/10 blur-3xl [animation-delay:2.6s]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-lime-300/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 -left-full -z-10 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-emerald-300/10 to-transparent transition-all duration-1000 group-hover:left-[150%]" />
      © {new Date().getFullYear()}   Made with ❤️ by Phanindhra Chari. All rights reserved.
      extraordinary.
    </footer>
  );
}
