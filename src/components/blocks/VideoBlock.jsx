function getYouTubeEmbedUrl(url) {
  if (!url) return "";

  const shortsMatch = url.match(/youtube\.com\/shorts\/([^?&/]+)/);
  if (shortsMatch) {
    return `https://www.youtube.com/embed/${shortsMatch[1]}`;
  }

  const watchMatch = url.match(/[?&]v=([^?&/]+)/);
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }

  const youtuBeMatch = url.match(/youtu\.be\/([^?&/]+)/);
  if (youtuBeMatch) {
    return `https://www.youtube.com/embed/${youtuBeMatch[1]}`;
  }

  return url;
}

export default function VideoBlock({ block }) {
  const embedUrl = getYouTubeEmbedUrl(block.url);

  return (
    <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_14px_60px_rgba(0,0,0,0.07)] sm:p-8">
      {block.label ? <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-red-500">{block.label}</div> : null}
      <h3 className="text-3xl font-semibold tracking-tight text-slate-950">{block.title}</h3>
      <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-black/5 bg-slate-100 shadow-inner">
        <div className="aspect-[9/16] w-full sm:aspect-video">
          <iframe
            className="h-full w-full"
            src={embedUrl}
            title={block.title || "Embedded video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
