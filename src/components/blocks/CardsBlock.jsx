import { CircleDot } from "lucide-react";
import { classNames } from "../../utils/classNames";

export default function CardsBlock({ block, dark = false }) {
  return (
    <div>
      <div className="mb-6">
        {block.label ? (
          <div
            className={classNames(
              "mb-2 text-xs font-semibold uppercase tracking-[0.22em]",
              dark ? "text-blue-200" : "text-red-500"
            )}
          >
            {block.label}
          </div>
        ) : null}
        <h3 className={classNames("text-3xl font-semibold tracking-tight", dark ? "text-white" : "text-slate-950")}>
          {block.title}
        </h3>
        {block.description ? (
          <p className={classNames("mt-4 max-w-3xl leading-8", dark ? "text-slate-300" : "text-slate-600")}>
            {block.description}
          </p>
        ) : null}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {block.items?.map((item) => (
          <div
            key={item.title}
            className={classNames(
              "rounded-[1.75rem] border p-6 shadow-[0_12px_50px_rgba(0,0,0,0.06)]",
              dark ? "border-white/10 bg-white/5 backdrop-blur-sm" : "border-black/5 bg-white"
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div className={classNames("text-xl font-semibold", dark ? "text-white" : "text-slate-950")}>
                {item.title}
              </div>
              <CircleDot className={classNames("mt-1 h-5 w-5 shrink-0", dark ? "text-blue-300" : "text-blue-600")} />
            </div>
            <p className={classNames("mt-4 leading-8", dark ? "text-slate-300" : "text-slate-600")}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}