export default function ConfirmDialog({
  open,
  title = "Are you sure?",
  message,
  onCancel,
  onConfirm,
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-zinc-800/90 via-zinc-950/95 to-emerald-950/80 p-6 text-white shadow-[0_25px_60px_-10px_rgba(16,185,129,0.35),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:border-emerald-300/40 hover:shadow-[0_35px_80px_-10px_rgba(45,212,191,0.45),0_8px_0_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.18)]">
        <div className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 animate-pulse rounded-full bg-emerald-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 animate-pulse rounded-full bg-amber-400/20 blur-3xl [animation-delay:1.2s]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/80 to-transparent" />
        <div className="relative">
          <h3 className="bg-gradient-to-r from-emerald-300 via-teal-200 to-lime-300 bg-clip-text text-lg font-semibold text-transparent">
            {title}
          </h3>
          <p className="mt-2 text-sm text-zinc-400">{message}</p>
          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onCancel}
              className="rounded-xl border border-b-4 border-emerald-400/30 border-b-emerald-950 bg-zinc-800/80 px-4 py-2 text-sm font-medium text-emerald-200 shadow-lg shadow-black/40 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-emerald-500/10 hover:text-emerald-100 hover:shadow-emerald-500/20 active:translate-y-0.5 active:border-b active:shadow-none"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="rounded-xl border-b-4 border-red-900 bg-gradient-to-b from-red-400 to-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-500/40 transition-all duration-200 hover:-translate-y-0.5 hover:from-orange-400 hover:to-red-500 hover:shadow-xl hover:shadow-red-500/60 active:translate-y-0.5 active:border-b active:shadow-none"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}