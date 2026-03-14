import CardsBlock from "./CardsBlock";
import SplitBlock from "./SplitBlock";
import GalleryBlock from "./GalleryBlock";
import CodeBlock from "./CodeBlock";
import TableBlock from "./TableBlock";
import TeamBlock from "./TeamBlock";
import VideoBlock from "./VideoBlock";
import BulletsBlock from "./BulletsBlock";
import PdfBlock from "./PdfBlock";
import CodeFileBlock from "./CodeFileBlock";
import CarouselBlock from "./CarouselBlock";

export default function RenderBlock({ block, dark = false }) {
  switch (block.type) {
    case "split":
      return <SplitBlock block={block} />;
    case "cards":
      return <CardsBlock block={block} dark={dark} />;
    case "gallery":
      return <GalleryBlock block={block} />;
    case "code":
      return <CodeBlock block={block} />;
    case "table":
      return <TableBlock block={block} />;
    case "team":
      return <TeamBlock block={block} />;
    case "video":
      return <VideoBlock block={block} />;
    case "bullets":
      return <BulletsBlock block={block} dark={dark} />;
    case "pdf":
      return <PdfBlock block={block} />;
    case "codeFile":
      return <CodeFileBlock block={block} />;
    case "carousel":
      return <CarouselBlock block={block} />;
    default:
      return null;
  }
}
