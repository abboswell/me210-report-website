import { classNames } from "../../utils/classNames";

export default function BulletList({ bullets, dark = false }) {
  if (!bullets?.length) return null;

  return (
    <div className="mt-6 space-y-3">
      {bullets.map((bullet) => (
        <div key={bullet} className={classNames("flex gap-3", dark ? "text-slate-200" : "text-slate-700")}>
          <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-500" />
          <p className="leading-7">{bullet}</p>
        </div>
      ))}
    </div>
  );
}