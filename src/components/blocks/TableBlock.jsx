import { classNames } from "../../utils/classNames";

function renderCell(cell) {
  if (typeof cell === "string" && cell.startsWith("http")) {
    return (
      <a
        href={cell}
        target="_blank"
        rel="noreferrer"
        className="break-all text-blue-700 underline-offset-2 hover:underline"
      >
        {cell}
      </a>
    );
  }
  return cell;
}

export default function TableBlock({ block }) {
  const footerLabelColSpan = Math.max(1, block.columns.length - 2);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
      <div className="border-b border-slate-200 bg-slate-50 px-6 py-4 text-base font-medium text-slate-700">
        {block.title}{block.label ? ` : ${block.label}` : ""}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr
              className="text-white"
              style={{ background: "linear-gradient(90deg, #2357c9 0%, #1d4ed8 58%, #dc3b3b 100%)" }}
            >
              {block.columns.map((col) => (
                <th key={col} className="px-4 py-3 font-medium whitespace-nowrap">
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {block.rows.map((row, index) => (
              <tr
                key={`${row[0]}-${index}`}
                className={classNames(
                  "border-t border-slate-200 align-top",
                  index % 2 === 0 ? "bg-white" : "bg-slate-50"
                )}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${cell}-${cellIndex}`}
                    className={classNames(
                      "px-4 py-3 text-slate-700",
                      cellIndex === 0 ? "min-w-[260px] text-slate-800" : "whitespace-nowrap"
                    )}
                  >
                    {renderCell(cell)}
                  </td>
                ))}
              </tr>
            ))}

            <tr className="border-t border-slate-200 bg-slate-100 font-semibold text-slate-950">
              <td className="px-4 py-3" colSpan={footerLabelColSpan} />
              <td className="px-4 py-3 text-right">{block.footerLabel}</td>
              <td className="px-4 py-3 whitespace-nowrap">{block.footerValue}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {block.label ? (
        <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500">
          <div className="rounded border border-slate-300 bg-white px-3 py-1.5">{block.label}</div>
          <div>Editable in src/data/siteData.js</div>
        </div>
      ) : null}
    </div>
  );
}
