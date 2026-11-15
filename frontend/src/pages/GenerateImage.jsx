import { useState } from "react";
import toast from "react-hot-toast";
import PromptInput from "../components/PromptInput";
import GenerationLoader from "../components/GenerationLoader";
import { generateImage } from "../services/imageService";
import downloadImage from "../utils/downloadImage";

export default function GenerateImage() {
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(null);
  const create = async (prompt) => {
    setLoading(true);
    setCreated(null);
    try {
      const data = await generateImage(prompt);
      setCreated(data.image);
      toast.success("Your image is ready!");
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Could not generate image. Check your API configuration.",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
          Image studio
        </p>
        <h1 className="mt-2 text-4xl font-bold text-white">
          Create with{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-lime-300 bg-clip-text text-transparent">
            your words
          </span>
        </h1>
        <p className="mt-3 text-zinc-400">
          Write a prompt and let AI bring it to life.
        </p>
      </div>
      <PromptInput onGenerate={create} loading={loading} />
      {loading && (
        <div className="mt-6">
          <GenerationLoader />
        </div>
      )}
      {created && (
        <div className="group relative mt-7 overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-zinc-800/90 via-zinc-950/95 to-emerald-950/80 p-4 text-white shadow-[0_25px_60px_-10px_rgba(16,185,129,0.35),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-emerald-300/40 hover:shadow-[0_35px_80px_-10px_rgba(45,212,191,0.45),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.18)] sm:p-6">
          <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 animate-pulse rounded-full bg-emerald-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 animate-pulse rounded-full bg-amber-400/15 blur-3xl [animation-delay:1.4s]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/80 to-transparent" />
          <div className="relative mb-4 flex items-center justify-between">
            <h2 className="bg-gradient-to-r from-emerald-300 via-teal-200 to-lime-300 bg-clip-text font-semibold text-transparent">
              Your creation
            </h2>
            <button
              onClick={() =>
                downloadImage(created.imageUrl, `pixelforge-${created._id}.png`)
              }
              className="rounded-xl border border-b-4 border-emerald-400/30 border-b-emerald-950 bg-zinc-800/80 px-4 py-2 text-sm font-medium text-emerald-200 shadow-md shadow-black/40 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-emerald-500/20 hover:text-lime-200 hover:shadow-lg hover:shadow-emerald-500/30 active:translate-y-0.5 active:border-b active:shadow-none"
            >
              Download image
            </button>
          </div>
          <img
            src={created.imageUrl}
            alt={created.prompt}
            className="relative max-h-[620px] w-full rounded-2xl object-contain shadow-2xl shadow-emerald-500/30 ring-1 ring-emerald-400/30 transition-all duration-500 hover:scale-[1.01] hover:shadow-teal-400/40 hover:ring-emerald-300/60"
          />
          <p className="relative mt-4 text-sm text-zinc-300 transition-colors duration-300 group-hover:text-emerald-100">
            {created.prompt}
          </p>
        </div>
      )}
    </div>
  );
}