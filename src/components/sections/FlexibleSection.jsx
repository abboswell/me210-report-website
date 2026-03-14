import { classNames } from "../../utils/classNames";
import SectionHeader from "../ui/SectionHeader";
import RenderBlock from "../blocks/RenderBlock";

export default function FlexibleSection({ sectionId, sectionData }) {
  const dark = Boolean(sectionData.dark);

  return (
    <section
      id={sectionId}
      className={classNames(
        "scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8",
        dark ? "border-t border-white/10 bg-slate-950 text-white" : ""
      )}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={sectionData.eyebrow}
          title={sectionData.title}
          description={sectionData.description}
          center
          dark={dark}
        />

        <div className="space-y-10">
          {sectionData.blocks?.map((block, index) => (
            <RenderBlock key={`${sectionId}-${block.type}-${index}`} block={block} dark={dark} />
          ))}
        </div>
      </div>
    </section>
  );
}