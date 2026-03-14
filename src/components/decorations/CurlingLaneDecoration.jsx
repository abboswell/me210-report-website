import RinkHouseDecoration from "./RinkHouseDecoration";

export default function CurlingLaneDecoration() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-0 right-0 top-[18%] h-px bg-blue-200/60" />
      <div className="absolute left-0 right-0 top-[22%] h-px bg-red-200/60" />
      <div className="absolute left-[8%] top-[8%] h-[84%] w-[84%] rounded-[3rem] border border-blue-100/60" />
      <div className="absolute -right-10 -top-10 opacity-60">
        <RinkHouseDecoration />
      </div>
      <div className="absolute -bottom-14 -left-14 opacity-20">
        <RinkHouseDecoration className="h-56 w-56" />
      </div>
    </div>
  );
}