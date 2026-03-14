import { classNames } from "../../utils/classNames";

export default function RinkHouseDecoration({ className = "" }) {
  return (
    <div className={classNames("relative h-40 w-40", className)}>
      <div className="absolute inset-0 rounded-full border-[14px] border-blue-600/90" />
      <div className="absolute inset-[18%] rounded-full border-[14px] border-red-500/90" />
      <div className="absolute inset-[36%] rounded-full border-[12px] border-white bg-blue-50" />
      <div className="absolute inset-[46%] rounded-full bg-white shadow-inner" />
    </div>
  );
}