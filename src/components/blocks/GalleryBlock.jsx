import { classNames } from "../../utils/classNames";
import ImageCard from "../media/ImageCard";

export default function GalleryBlock({ block }) {
  const columnClass =
    block.columns === 1
      ? "grid-cols-1"
      : block.columns === 2
      ? "md:grid-cols-2"
      : block.columns === 4
      ? "md:grid-cols-2 xl:grid-cols-4"
      : "md:grid-cols-2 xl:grid-cols-3";

  return (
    <div>
      <div className="mb-6">
        {block.label ? <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-red-500">{block.label}</div> : null}
        <h3 className="text-3xl font-semibold tracking-tight text-slate-950">{block.title}</h3>
        {block.description ? <p className="mt-4 max-w-3xl leading-8 text-slate-600">{block.description}</p> : null}
      </div>
      <div className={classNames("grid gap-6", columnClass)}>
        {block.items?.map((item) => (
          <ImageCard
            key={`${item.label}-${item.src || item.alt}`}
            item={item}
            aspect={item.aspect || (block.columns === 1 ? "aspect-[16/9]" : undefined)}
            tall={Boolean(item.tall)}
          />
        ))}
      </div>
    </div>
  );
}
