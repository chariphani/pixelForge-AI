import { Download, X } from "lucide-react";
import downloadImage from "../utils/downloadImage";

export default function ImagePreview({ image, onClose }) {
  if (!image) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="group relative max-h-[92vh] w-full max-w-4xl overflow-auto rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-zinc-800/90 via-zinc-950/95 to-emerald-950/80 p-4 text-white shadow-[0_25px_70px_-10px_rgba(16,185,129,0.4),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-500 hover:border-emerald-300/40 hover:shadow-[0_35px_90px_-10px_rgba(45,212,191,0.5),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.18)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 animate-pulse rounded-full bg-emerald-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 animate-pulse rounded-full bg-amber-400/15 blur-3xl [animation-delay:1.4s]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/80 to-transparent" />
        <div className="relative mb-3 flex items-center justify-between">
          <p className="bg-gradient-to-r from-emerald-300 via-teal-200 to-lime-300 bg-clip-text font-semibold text-transparent">
            Image preview
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => downloadImage(image.imageUrl)}
              className="rounded-lg border border-b-4 border-emerald-400/30 border-b-emerald-950 bg-zinc-800/80 p-2 text-emerald-200 shadow-md shadow-black/40 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-emerald-500/20 hover:text-lime-200 hover:shadow-lg hover:shadow-emerald-500/30 active:translate-y-0.5 active:border-b active:shadow-none"
            >
              <Download size={18} />
            </button>
            <button
              onClick={onClose}
              className="rounded-lg border border-b-4 border-red-400/30 border-b-red-950 bg-zinc-800/80 p-2 text-zinc-300 shadow-md shadow-black/40 transition-all duration-200 hover:-translate-y-0.5 hover:rotate-90 hover:border-red-400/60 hover:bg-red-500/20 hover:text-red-300 hover:shadow-lg hover:shadow-red-500/30 active:translate-y-0.5 active:border-b active:shadow-none"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        <img
          src={image.imageUrl}
          alt={image.prompt}
          className="relative mx-auto max-h-[70vh] rounded-xl object-contain shadow-2xl shadow-emerald-500/30 ring-1 ring-emerald-400/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-teal-400/40 hover:ring-emerald-300/60"
        />
        <p className="relative mt-4 text-sm text-zinc-300 transition-colors duration-300 group-hover:text-emerald-100">
          {image.prompt}
        </p>
      </div>
    </div>
  );
}