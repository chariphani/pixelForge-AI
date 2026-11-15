import { Link } from "react-router-dom";
import { Download, Trash2 } from "lucide-react";
import downloadImage from "../utils/downloadImage";
import formatDate from "../utils/formatDate";

export default function ImageCard({ image, onDelete }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-zinc-800/90 via-zinc-950 to-emerald-950/80 text-white shadow-[0_20px_45px_-12px_rgba(16,185,129,0.3),0_6px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-emerald-300/50 hover:shadow-[0_30px_70px_-10px_rgba(45,212,191,0.45),0_6px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.18)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-lime-300/80 to-transparent" />
      <Link
        to={`/images/${image._id}`}
        className="relative block overflow-hidden bg-gradient-to-br from-emerald-900/50 via-zinc-900 to-teal-900/50"
      >
        <img
          src={image.imageUrl}
          alt={image.prompt}
          loading="lazy"
          className="aspect-square w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-y-0 -left-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:left-[150%]" />
      </Link>
      <div className="relative p-4">
        <p className="line-clamp-2 min-h-10 text-sm text-zinc-200 transition-colors duration-300 group-hover:text-emerald-100">
          {image.prompt}
        </p>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="text-xs text-zinc-500 transition-colors duration-300 group-hover:text-teal-300">
            {formatDate(image.createdAt)}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() =>
                downloadImage(image.imageUrl, `pixelforge-${image._id}.png`)
              }
              title="Download"
              className="rounded-lg border border-b-4 border-emerald-400/30 border-b-emerald-950 bg-zinc-800/80 p-2 text-emerald-200 shadow-md shadow-black/40 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-emerald-500/20 hover:text-lime-200 hover:shadow-lg hover:shadow-emerald-500/30 active:translate-y-0.5 active:border-b active:shadow-none"
            >
              <Download size={16} />
            </button>
            <button
              onClick={() => onDelete?.(image)}
              title="Delete"
              className="rounded-lg border border-b-4 border-red-400/30 border-b-red-950 bg-zinc-800/80 p-2 text-zinc-300 shadow-md shadow-black/40 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-400/60 hover:bg-red-500/20 hover:text-red-300 hover:shadow-lg hover:shadow-red-500/30 active:translate-y-0.5 active:border-b active:shadow-none"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}