import { classNames } from "../../utils/classNames";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
  dark = false,
}) {
  return (
    <div className={classNames("mb-10", center && "text-center")}>
      {eyebrow ? (
        <div
          className={classNames(
            "mb-3 text-xs font-semibold uppercase tracking-[0.25em]",
            dark ? "text-blue-200" : "text-red-500"
          )}
        >
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={classNames(
          "text-4xl font-semibold tracking-tight sm:text-5xl",
          dark ? "text-white" : "text-slate-950"
        )}
      >
        {title}
      </h2>
      <div className={classNames("mt-5 flex", center && "justify-center")}>
        <div className="relative h-1.5 w-40 overflow-hidden rounded-full bg-blue-100">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-red-500" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-blue-600" />
        </div>
      </div>
      {description ? (
        <p
          className={classNames(
            "mt-6 max-w-3xl text-base leading-8 sm:text-lg",
            dark ? "text-slate-300" : "text-slate-600",
            center && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}