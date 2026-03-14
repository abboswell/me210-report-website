
import { useEffect, useState } from "react";
import { ChevronDown, Download, FileCode2 } from "lucide-react";

export default function CodeFileBlock({ block }) {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetch(block.src)
      .then((res) => res.text())
      .then((text) => {
        if (!mounted) return;
        setCode(text);
        setLoading(false);
      })
      .catch(() => {
        if (!mounted) return;
        setError(true);
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [block.src]);

  return (
    <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_14px_60px_rgba(0,0,0,0.07)] sm:p-8">
      {block.label ? (
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-red-500">{block.label}</div>
      ) : null}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-3xl font-semibold tracking-tight text-slate-950">{block.title}</h3>
          {block.description ? (
            <p className="mt-4 max-w-3xl leading-8 text-slate-600">{block.description}</p>
          ) : null}
        </div>
        <a
          href={block.src}
          download
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
        >
          <Download className="h-4 w-4" />
          Download .ino
        </a>
      </div>

      <details className="mt-6 overflow-hidden rounded-[1.5rem] border border-black/5 bg-slate-950 text-slate-100 shadow-inner group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200 marker:content-none">
          <span className="inline-flex items-center gap-2">
            <FileCode2 className="h-4 w-4 text-blue-300" />
            Click to expand full Arduino code
          </span>
          <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
        </summary>

        <div className="border-t border-white/10">
          {loading ? (
            <div className="px-5 py-4 text-sm text-slate-300">Loading code...</div>
          ) : error ? (
            <div className="px-5 py-4 text-sm text-red-300">Unable to load code file.</div>
          ) : (
            <pre className="max-h-[900px] overflow-auto p-5 text-sm leading-7 text-slate-100"><code>{code}</code></pre>
          )}
        </div>
      </details>
    </div>
  );
}
