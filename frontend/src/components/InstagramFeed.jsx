import { Instagram } from "lucide-react";
import { BRAND } from "@/constants/content";

export const InstagramFeed = () => {
  return (
    <section
      data-testid="instagram-feed-section"
      className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-3 flex items-center justify-center gap-2">
          <Instagram className="w-4 h-4" /> Follow Along
        </p>
        <h2
          data-testid="instagram-feed-heading"
          className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F3E5AB] mb-3"
        >
          Our Instagram
        </h2>
        <a
          href={BRAND.instagramHref}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="instagram-feed-handle-link"
          className="text-sm text-[#E6C665] hover:text-[#F3E5AB] transition-colors"
        >
          {BRAND.instagramHandle}
        </a>
      </div>

      <div
        data-testid="elfsight-instagram-widget"
        className="bg-[#141416] border border-dashed border-[#A38330]/40 rounded-xl p-10 text-center"
      >
        {/* Elfsight Instagram Feed Widget - replace this placeholder div with your Elfsight embed code */}
        <div className="elfsight-app-instagram-feed" data-elfsight-app-lazy></div>
        <p className="text-xs text-zinc-500">
          Instagram feed widget placeholder - Elfsight embed code to be added here.
        </p>
      </div>
    </section>
  );
};
