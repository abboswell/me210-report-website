import { useState } from "react";
import { classNames } from "../../utils/classNames";
import { resolveAssetPath } from "../../utils/assetPath";

export default function ImageCard({ item, aspect = "aspect-[16/10]", tall = false }) {
  const [failed, setFailed] = useState(false);
  const hasImage = item?.src && !failed;
  const fit = item?.fit === "cover" ? "object-cover" : "object-contain bg-slate-50";
  const imagePadding = item?.fit === "cover" ? "" : item?.compact ? "p-2" : "p-3";
  const resolvedSrc = resolveAssetPath(item?.src);

  return (
    <div className="group overflow-hidden rounded-[1.75rem] border border-black/8 bg-white shadow-[0_14px_60px_rgba(0,0,0,0.08)]">
      <div className={classNames("relative overflow-hidden bg-slate-100", tall ? item?.heightClass || "min-h-[520px]" : aspect)}>
        {hasImage ? (
          <img
            src={resolvedSrc}
            alt={item.alt || item.label || "Report image"}
            className={`h-full w-full transition duration-500 group-hover:scale-[1.01] ${fit} ${imagePadding}`}
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />
            <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/75 backdrop-blur">
              Add Image
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-[0.24em] text-white/55">Media Slot</div>
              <div className="mt-2 text-xl font-semibold text-white">{item?.label || "Visual content"}</div>
              <div className="mt-2 text-sm leading-6 text-white/70">
                Drop a file into public/images/report and update the src string in siteData.
              </div>
            </div>
          </div>
        )}

        {item?.label && !item?.hideLabel ? (
          <div className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            {item.label}
          </div>
        ) : null}
      </div>

      {item?.caption ? (
        <div className="p-4 sm:p-5">
          <p className="text-sm leading-7 text-slate-600">{item.caption}</p>
        </div>
      ) : null}
    </div>
  );
}
