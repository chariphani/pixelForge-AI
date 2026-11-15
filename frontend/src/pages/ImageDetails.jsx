import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft, Download, Trash2 } from "lucide-react";
import { fetchImage, removeImage } from "../services/imageService";
import downloadImage from "../utils/downloadImage";
import formatDate from "../utils/formatDate";

export default function ImageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  useEffect(() => {
    fetchImage(id)
      .then((d) => setImage(d.image))
      .catch((e) =>
        toast.error(e.response?.data?.message || "Image not found"),
      );
  }, [id]);
  const del = async () => {
    if (!window.confirm("Delete this image permanently?")) return;
    try {
      await removeImage(id);
      toast.success("Image deleted");
      navigate("/my-images");
    } catch (e) {
      toast.error(e.response?.data?.message || "Delete failed");
    }
  };
  if (!image)
    return (
      <p className="animate-pulse py-16 text-center font-medium text-emerald-300">
        Loading image...
      </p>
    );
  return (
    <div className="mx-auto max-w-4xl">
      <Link
        to="/my-images"
        className="group/back mb-5 inline-flex items-center gap-2 text-sm text-zinc-400 transition-all duration-300 hover:text-emerald-200"
      >
        <ArrowLeft
          size={16}
          className="transition-transform duration-300 group-hover/back:-translate-x-1"
        />{" "}
        Back to images
      </Link>
      <div className="group relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-zinc-800/90 via-zinc-950/95 to-emerald-950/80 p-4 text-white shadow-[0_25px_60px_-10px_rgba(16,185,129,0.35),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-emerald-300/40 hover:shadow-[0_35px_80px_-10px_rgba(45,212,191,0.45),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.18)] sm:p-6">
        <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 animate-pulse rounded-full bg-emerald-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 animate-pulse rounded-full bg-amber-400/15 blur-3xl [animation-delay:1.4s]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/80 to-transparent" />
        <img
          src={image.imageUrl}
          alt={image.prompt}
          className="relative max-h-[70vh] w-full rounded-2xl object-contain shadow-2xl shadow-emerald-500/30 ring-1 ring-emerald-400/30 transition-all duration-500 hover:scale-[1.01] hover:shadow-teal-400/40 hover:ring-emerald-300/60"
        />
        <p className="relative mt-5 text-zinc-200 transition-colors duration-300 group-hover:text-emerald-100">
          {image.prompt}
        </p>
        <p className="relative mt-2 text-xs text-zinc-500 transition-colors duration-300 group-hover:text-teal-300">
          Created {formatDate(image.createdAt)}
        </p>
        <div className="relative mt-5 flex flex-wrap gap-3">
          <button
            onClick={() =>
              downloadImage(image.imageUrl, `pixelforge-${image._id}.png`)
            }
            className="group/btn relative isolate flex items-center gap-2 overflow-hidden rounded-xl border-b-4 border-amber-700 bg-gradient-to-b from-amber-300 to-amber-500 px-4 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-amber-500/40 transition-all duration-200 hover:-translate-y-1 hover:from-lime-300 hover:to-amber-400 hover:shadow-xl hover:shadow-amber-400/60 active:translate-y-0.5 active:border-b active:shadow-none"
          >
            <span className="pointer-events-none absolute inset-y-0 -left-full -z-10 w-1/2 -skew-x-12 bg-white/40 transition-all duration-700 group-hover/btn:left-[150%]" />
            <Download
              size={16}
              className="transition-transform duration-300 group-hover/btn:translate-y-0.5 group-hover/btn:scale-125"
            />{" "}
            Download
          </button>
          <button
            onClick={del}
            className="group/del flex items-center gap-2 rounded-xl border border-b-4 border-red-400/30 border-b-red-950 bg-zinc-800/80 px-4 py-3 text-sm text-red-300 shadow-md shadow-black/40 transition-all duration-200 hover:-translate-y-1 hover:border-red-400/60 hover:bg-red-500/20 hover:text-red-200 hover:shadow-lg hover:shadow-red-500/30 active:translate-y-0.5 active:border-b active:shadow-none"
          >
            <Trash2
              size={16}
              className="transition-transform duration-300 group-hover/del:rotate-12 group-hover/del:scale-125"
            />{" "}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}