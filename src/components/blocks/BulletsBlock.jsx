export default function BulletsBlock({ block, dark = false }) {
  return (
    <div className={`rounded-[2rem] border p-6 shadow-[0_14px_60px_rgba(0,0,0,0.07)] sm:p-8 ${dark ? "border-white/10 bg-white/5" : "border-black/5 bg-white"}`}>
      {block.label ? (
        <div className={`mb-2 text-xs font-semibold uppercase tracking-[0.22em] ${dark ? "text-blue-200" : "text-red-500"}`}>
          {block.label}
        </div>
      ) : null}
      <h3 className={`text-3xl font-semibold tracking-tight ${dark ? "text-white" : "text-slate-950"}`}>{block.title}</h3>
      <div className="mt-6 space-y-4">
        {block.bullets?.map((bullet) => (
          <div key={bullet} className={`flex gap-3 ${dark ? "text-slate-300" : "text-slate-700"}`}>
            <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-500" />
            <p className="leading-8">{bullet}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
