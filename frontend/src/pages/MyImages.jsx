import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ImageGallery from "../components/ImageGallery";
import { fetchImages, removeImage } from "../services/imageService";

export default function MyImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchImages()
      .then((d) => setImages(d.images))
      .catch(() => toast.error("Could not load images"))
      .finally(() => setLoading(false));
  }, []);
  const onDelete = async (image) => {
    if (!window.confirm("Delete this image permanently?")) return;
    try {
      await removeImage(image._id);
      setImages((a) => a.filter((x) => x._id !== image._id));
      toast.success("Deleted");
    } catch (e) {
      toast.error(e.response?.data?.message || "Delete failed");
    }
  };
  return (
    <div className="relative isolate">
      <div className="pointer-events-none absolute -left-20 -top-10 -z-10 h-64 w-64 animate-pulse rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-10 -z-10 h-64 w-64 animate-pulse rounded-full bg-amber-400/10 blur-3xl [animation-delay:1.5s]" />
      <h1 className="bg-gradient-to-r from-emerald-300 via-teal-200 to-lime-300 bg-clip-text text-3xl font-bold text-transparent drop-shadow-[0_0_20px_rgba(52,211,153,0.35)]">
        My images
      </h1>
      <p className="mb-7 mt-2 text-sm text-zinc-400">
        All images you have generated.
      </p>
      {loading ? (
        <p className="animate-pulse font-medium text-emerald-300">Loading...</p>
      ) : (
        <ImageGallery images={images} onDelete={onDelete} />
      )}
    </div>
  );
}