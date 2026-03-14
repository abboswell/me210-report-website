import ImageCard from "../media/ImageCard";
import BulletList from "../ui/BulletList";

function renderParagraphs(text) {
  if (!text) return null;
  return text.split(/\n\s*\n/).map((paragraph, index) => (
    <p key={index} className="text-base leading-8 text-slate-600 whitespace-pre-line">
      {paragraph}
    </p>
  ));
}

export default function SplitBlock({ block }) {
  return (
    <div className="grid items-center gap-8 rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_14px_60px_rgba(0,0,0,0.07)] md:grid-cols-2 md:p-8">
      <div className={block.reverse ? "md:order-2" : ""}>
        {block.label ? <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-red-500">{block.label}</div> : null}
        <h3 className="text-3xl font-semibold tracking-tight text-slate-950">{block.title}</h3>
        <div className="mt-5 space-y-5">{renderParagraphs(block.text)}</div>
        <BulletList bullets={block.bullets} />
      </div>
      <div className={block.reverse ? "md:order-1" : ""}>
        <ImageCard
          item={block.image}
          tall={Boolean(block.imageTall)}
          aspect={block.imageAspect || "aspect-[16/10]"}
        />
      </div>
    </div>
  );
}
