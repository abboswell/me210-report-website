import { ExternalLink } from "lucide-react";

function InitialBadge({ name }) {
  return (
    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-slate-950 via-slate-800 to-blue-700 text-3xl font-semibold text-white shadow-lg">
      {name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)}
    </div>
  );
}

export default function TeamBlock({ block }) {
  return (
    <div>
      <div className="mb-6">
        {block.label ? (
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-red-500">
            {block.label}
          </div>
        ) : null}
        <h3 className="text-3xl font-semibold tracking-tight text-slate-950">{block.title}</h3>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {block.members?.map((member) => (
          <div
            key={member.name}
            className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_12px_50px_rgba(0,0,0,0.07)]"
          >
            <div className="border-b border-slate-100 bg-slate-50/80 p-5">
              <div className="mx-auto aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-black/5">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-contain bg-white"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-slate-50">
                    <InitialBadge name={member.name} />
                  </div>
                )}
              </div>
            </div>

            <div className="p-6">
              <div className="text-2xl font-semibold tracking-tight text-slate-950">{member.name}</div>
              <div className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-red-500">
                {member.role}
              </div>
              <p className="mt-4 leading-8 text-slate-600">{member.bio}</p>
              {member.link ? (
                <a
                  href={member.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-950"
                >
                  {member.linkLabel || "Link"}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-950">
                  {member.linkLabel || "Add profile"}
                  <ExternalLink className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
