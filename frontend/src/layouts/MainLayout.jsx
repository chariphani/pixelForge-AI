import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-96 w-96 animate-pulse rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-1/2 -z-10 h-96 w-96 animate-pulse rounded-full bg-amber-400/10 blur-3xl [animation-delay:1.5s]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-80 w-80 animate-pulse rounded-full bg-teal-400/10 blur-3xl [animation-delay:3s]" />
        <main className="relative mx-auto min-h-[70vh] max-w-7xl px-5 py-12">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}