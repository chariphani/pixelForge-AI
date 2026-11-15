import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Images, Sparkles } from "lucide-react";
import useAuth from "../hooks/useAuth";
import ImageGallery from "../components/ImageGallery";
import { fetchImages, removeImage } from "../services/imageService";

export default function Dashboard() {
  const { user } = useAuth();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const load = async () => {
    try {
      const data = await fetchImages();
      setImages(data.images);
    } catch {
      toast.error("Could not load your images");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    load();
  }, []);
  const onDelete = async (image) => {
    if (!window.confirm("Delete this image permanently?")) return;
    try {
      await removeImage(image._id);
      setImages((items) => items.filter((x) => x._id !== image._id));
      toast.success("Image deleted");
    } catch (err) {
      toast.error(err.response?.data?.message || "Delete failed");
    }
  };
  return (
    <div>
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-emerald-300">Your workspace</p>
          <h1 className="mt-1 bg-gradient-to-r from-emerald-300 via-teal-200 to-lime-300 bg-clip-text text-3xl font-bold text-transparent">
            Hello, {user?.name?.split(" ")[0] || "creator"} 👋
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Ready to create something new?
          </p>
        </div>
        <Link
          to="/generate"
          className="group/btn relative isolate inline-flex items-center gap-2 overflow-hidden rounded-xl border-b-4 border-amber-700 bg-gradient-to-b from-amber-300 to-amber-500 px-4 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-amber-500/40 transition-all duration-200 hover:-translate-y-1 hover:from-lime-300 hover:to-amber-400 hover:shadow-xl hover:shadow-amber-400/60 active:translate-y-0.5 active:border-b active:shadow-none"
        >
          <span className="pointer-events-none absolute inset-y-0 -left-full -z-10 w-1/2 -skew-x-12 bg-white/40 transition-all duration-700 group-hover/btn:left-[150%]" />
          <Sparkles
            size={17}
            className="transition-transform duration-300 group-hover/btn:rotate-12 group-hover/btn:scale-125"
          />{" "}
          Generate image
        </Link>
      </div>
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <div className="group relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-zinc-800/90 via-zinc-950/95 to-emerald-950/80 p-5 text-white shadow-[0_20px_45px_-12px_rgba(16,185,129,0.3),0_6px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-emerald-300/50 hover:shadow-[0_30px_70px_-10px_rgba(45,212,191,0.45),0_6px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.18)]">
          <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-emerald-500/25 blur-3xl transition-all duration-500 group-hover:scale-150" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/80 to-transparent" />
          <div className="relative grid h-11 w-11 place-items-center rounded-xl border-b-4 border-emerald-950 bg-gradient-to-br from-emerald-400 via-teal-400 to-lime-300 text-zinc-950 shadow-lg shadow-emerald-500/40 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
            <Images />
          </div>
          <p className="relative mt-3 bg-gradient-to-r from-emerald-300 via-teal-200 to-lime-300 bg-clip-text text-2xl font-bold text-transparent">
            {images.length}
          </p>
          <p className="relative text-sm text-zinc-400 transition-colors duration-300 group-hover:text-emerald-100">
            Recent images loaded
          </p>
        </div>
        <div className="group relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-zinc-800/90 via-zinc-950/95 to-emerald-950/80 p-5 text-white shadow-[0_20px_45px_-12px_rgba(16,185,129,0.3),0_6px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-amber-300/50 hover:shadow-[0_30px_70px_-10px_rgba(251,191,36,0.4),0_6px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.18)]">
          <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-amber-400/20 blur-3xl transition-all duration-500 group-hover:scale-150" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/80 to-transparent" />
          <div className="relative grid h-11 w-11 place-items-center rounded-xl border-b-4 border-amber-700 bg-gradient-to-br from-amber-300 to-amber-500 text-zinc-950 shadow-lg shadow-amber-500/40 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
            <Sparkles className="animate-pulse" />
          </div>
          <p className="relative mt-3 bg-gradient-to-r from-amber-300 via-lime-200 to-emerald-300 bg-clip-text text-lg font-bold text-transparent">
            Your AI studio
          </p>
          <p className="relative text-sm text-zinc-400 transition-colors duration-300 group-hover:text-amber-100">
            Create and save new ideas.
          </p>
        </div>
      </div>
      <h2 className="mb-4 text-xl font-semibold text-white">
        Recent{" "}
        <span className="bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
          creations
        </span>
      </h2>
      {loading ? (
        <p className="animate-pulse py-10 text-center text-emerald-300">
          Loading images...
        </p>
      ) : (
        <ImageGallery images={images.slice(0, 6)} onDelete={onDelete} />
      )}
    </div>
  );
}