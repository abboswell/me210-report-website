import { Menu, X } from "lucide-react";
import { classNames } from "../../utils/classNames";
import { navItems } from "../../data/navItems";
import NavLink from "./NavLink";

export default function Header({
  brand,
  mobileOpen,
  setMobileOpen,
  activeSection,
  scrollToSection,
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        <button onClick={() => scrollToSection("home")} className="flex items-center gap-3 text-left">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white shadow-lg">
            <div className="absolute inset-[16%] rounded-full border-2 border-blue-400/80" />
            <div className="absolute inset-[33%] rounded-full border-2 border-red-400/80" />
            <span className="relative z-10">
              {brand.shortName
                .split(" ")
                .map((s) => s[0])
                .join("")
                .slice(0, 2)}
            </span>
          </div>
          <div>
            <div className="text-[14px] font-semibold text-slate-950">{brand.shortName}</div>
            <div className="text-[11px] text-slate-500">{brand.fullName}</div>
          </div>
        </button>

        <nav className="hidden items-center gap-2 xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              item={item}
              active={activeSection === item.id}
              onClick={() => scrollToSection(item.id)}
            />
          ))}
        </nav>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 xl:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-100 bg-white xl:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 px-4 py-2.5 sm:px-6 lg:px-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={classNames(
                    "flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition",
                    activeSection === item.id
                      ? "bg-slate-950 text-white"
                      : "bg-slate-50 text-slate-800 hover:bg-slate-100"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}