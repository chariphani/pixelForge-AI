import { useState } from "react";
import { Sparkles } from "lucide-react";

const examples = [
  "A tiny cabin in a magical forest at sunrise",
  "A futuristic Hyderabad city street in 2080",
  "A cute astronaut cat floating in space",
];

export default function PromptInput({ onGenerate, loading }) {
  const [prompt, setPrompt] = useState("");
  const submit = (event) => {
    event.preventDefault();
    if (prompt.trim()) onGenerate(prompt.trim());
  };
  return (
    <form
      onSubmit={submit}
      className="group/form relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-zinc-800/90 via-zinc-950/95 to-emerald-950/80 p-5 text-white shadow-[0_25px_60px_-10px_rgba(16,185,129,0.3),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-500 hover:border-emerald-300/40 hover:shadow-[0_35px_80px_-10px_rgba(45,212,191,0.4),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.18)] sm:p-7"
    >
      <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 animate-pulse rounded-full bg-emerald-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 animate-pulse rounded-full bg-amber-400/15 blur-3xl [animation-delay:1.4s]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/80 to-transparent" />
      <label className="relative mb-3 block text-sm font-medium text-zinc-200 transition-colors duration-300 group-focus-within/form:text-emerald-300">
        Describe the image you want to create
      </label>
      <textarea
        className="relative min-h-32 w-full resize-y rounded-xl border border-emerald-400/20 bg-zinc-950/70 px-4 py-3 text-sm text-white shadow-inner shadow-black/60 outline-none transition-all duration-300 placeholder:text-zinc-500 hover:border-emerald-300/40 focus:border-emerald-300 focus:bg-zinc-950 focus:shadow-[0_0_30px_-5px_rgba(52,211,153,0.5),inset_0_2px_8px_0_rgba(0,0,0,0.6)] focus:ring-4 focus:ring-emerald-400/15"
        maxLength={1000}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="A cinematic photograph of..."
      />
      <div className="relative mt-2 flex justify-between text-xs text-zinc-500">
        <span className="transition-colors duration-300 group-focus-within/form:text-teal-300">
          Be descriptive for better results
        </span>
        <span className="transition-colors duration-300 group-focus-within/form:text-lime-300">
          {prompt.length}/1000
        </span>
      </div>
      <div className="relative mt-4 flex flex-wrap gap-2">
        {examples.map((item) => (
          <button
            type="button"
            key={item}
            onClick={() => setPrompt(item)}
            className="rounded-full border border-b-4 border-emerald-400/30 border-b-emerald-950 bg-zinc-800/80 px-3 py-2 text-xs text-zinc-400 shadow-md shadow-black/40 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-emerald-500/15 hover:text-emerald-200 hover:shadow-lg hover:shadow-emerald-500/30 active:translate-y-0.5 active:border-b active:shadow-none"
          >
            {item}
          </button>
        ))}
      </div>
      <button
        disabled={loading || !prompt.trim()}
        className="group/btn relative isolate mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border-b-4 border-amber-700 bg-gradient-to-b from-amber-300 to-amber-500 px-5 py-3.5 font-semibold text-zinc-950 shadow-lg shadow-amber-500/40 transition-all duration-200 hover:-translate-y-1 hover:from-lime-300 hover:to-amber-400 hover:shadow-xl hover:shadow-amber-400/60 active:translate-y-0.5 active:border-b active:shadow-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:from-amber-300 disabled:hover:to-amber-500 disabled:hover:shadow-lg"
      >
        <span className="pointer-events-none absolute inset-y-0 -left-full -z-10 w-1/2 -skew-x-12 bg-white/40 transition-all duration-700 group-hover/btn:left-[150%]" />
        <Sparkles
          size={18}
          className={
            loading
              ? "animate-pulse"
              : "transition-transform duration-300 group-hover/btn:rotate-12 group-hover/btn:scale-125"
          }
        />
        {loading ? "Creating your image..." : "Generate image"}
      </button>
    </form>
  );
}
