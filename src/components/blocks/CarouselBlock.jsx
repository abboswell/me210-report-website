import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageCard from "../media/ImageCard";

function renderParagraphs(text) {
  if (!text) return null;
  return text.split(/\n\s*\n/).map((paragraph, index) => (
    <p key={index} className="text-base leading-8 text-slate-600 whitespace-pre-line">
      {paragraph}
    </p>
  ));
}

export default function CarouselBlock({ block }) {
  const [index, setIndex] = useState(0);
  const slides = block.slides || [];
  const current = slides[index] || {};

  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);

  if (!slides.length) return null;

  return (
    <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_14px_60px_rgba(0,0,0,0.07)] sm:p-8">
      {block.label ? <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-red-500">{block.label}</div> : null}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-3xl font-semibold tracking-tight text-slate-950">{block.title}</h3>
          {block.description ? <p className="mt-4 max-w-3xl leading-8 text-slate-600">{block.description}</p> : null}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={goPrev} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-50">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={goNext} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-50">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <ImageCard item={current.image} aspect="aspect-[4/3]" />
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Slide {index + 1} of {slides.length}
          </div>
          <h4 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{current.title}</h4>
          <div className="mt-5 space-y-5">{renderParagraphs(current.text)}</div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {slides.map((slide, slideIndex) => (
          <button
            key={`${slide.title}-${slideIndex}`}
            onClick={() => setIndex(slideIndex)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${slideIndex === index ? "bg-slate-950 text-white" : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"}`}
          >
            {slide.title}
          </button>
        ))}
      </div>
    </div>
  );
}
