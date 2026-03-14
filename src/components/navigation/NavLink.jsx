import { classNames } from "../../utils/classNames";

export default function NavLink({ item, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "rounded-full px-3.5 py-1.5 text-[15px] font-medium transition",
        active
          ? "bg-slate-950 text-white shadow-lg"
          : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
      )}
    >
      {item.label}
    </button>
  );
}