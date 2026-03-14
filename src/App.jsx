import { useEffect, useMemo, useState } from "react";
import { FileText } from "lucide-react";
import Header from "./components/navigation/Header";
import HeroSection from "./components/sections/HeroSection";
import FlexibleSection from "./components/sections/FlexibleSection";
import { navItems } from "./data/navItems";
import { siteData } from "./data/siteData";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#f4f7fb_100%)] text-slate-900">
      <Header
        brand={siteData.brand}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main>
        <HeroSection
          hero={siteData.hero}
          homeSection={siteData.sections.home}
          scrollToSection={scrollToSection}
        />

        {navItems
          .filter((item) => item.id !== "home")
          .map((item) => (
            <FlexibleSection
              key={item.id}
              sectionId={item.id}
              sectionData={siteData.sections[item.id]}
            />
          ))}
      </main>

      <footer className="border-t border-white/10 bg-slate-950 px-4 py-8 text-slate-400 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm">
            <FileText className="h-4 w-4 text-blue-300" />
            {siteData.footer.text}
          </div>

          <button
            onClick={() => scrollToSection("home")}
            className="w-fit rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/5"
          >
            Back to top
          </button>
        </div>
      </footer>
    </div>
  );
}