import ImageCard from "../media/ImageCard";
import RenderBlock from "../blocks/RenderBlock";

export default function HeroSection({ hero, homeSection }) {
  return (
    <section id="home" className="scroll-mt-24 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 shadow-sm">
              {hero.eyebrow}
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {hero.subtitle}
            </p>
          </div>

          <ImageCard
            item={{ ...hero.mainImage, heightClass: 'min-h-[420px] lg:min-h-[520px]' }}
            tall
          />
        </div>

        {hero.supportingImages?.length ? (
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {hero.supportingImages.map((item, index) => (
              <ImageCard
                key={`${item.src}-${index}`}
                item={item}
                aspect={index === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mt-2 space-y-10">
          {homeSection.blocks?.map((block, index) => (
            <RenderBlock key={`home-${block.type}-${index}`} block={block} />
          ))}
        </div>
      </div>
    </section>
  );
}
