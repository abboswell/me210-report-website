import ImageCard from "../media/ImageCard";

export default function CodeBlock({ block }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_14px_60px_rgba(0,0,0,0.07)] sm:p-8">
        {block.label ? (
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-red-500">
            {block.label}
          </div>
        ) : null}
        <h3 className="text-3xl font-semibold tracking-tight text-slate-950">{block.title}</h3>
        {block.description ? (
          <p className="mt-4 max-w-2xl leading-8 text-slate-600">{block.description}</p>
        ) : null}
        <pre className="mt-6 overflow-x-auto rounded-[1.5rem] bg-slate-950 p-6 text-sm leading-7 text-slate-100 shadow-inner">
          <code>{block.code}</code>
        </pre>
      </div>

      <ImageCard item={block.image} tall />
    </div>
  );
}