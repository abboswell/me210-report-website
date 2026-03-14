import { resolveAssetPath } from "../../utils/assetPath";

export default function PdfBlock({ block }) {
  const pdfSrc = `${resolveAssetPath(block.src)}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`;

  return (
    <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_14px_60px_rgba(0,0,0,0.07)] sm:p-8">
      {block.label ? (
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-red-500">{block.label}</div>
      ) : null}
      <h3 className="text-3xl font-semibold tracking-tight text-slate-950">{block.title}</h3>
      <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-black/5 bg-slate-50">
        <embed
          src={pdfSrc}
          type="application/pdf"
          className="h-[900px] w-full"
        />
      </div>
    </div>
  );
}
