import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/constants/content";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-vapor-secondary font-bold mb-3">
          Questions Answered
        </p>
        <h2
          data-testid="faq-heading"
          className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-vapor-onbackground tracking-tight"
        >
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {FAQ_ITEMS.map((item, i) => (
          <div
            key={i}
            data-testid={`faq-item-${i + 1}`}
            className="glass-panel rounded-[1.5rem] overflow-hidden soft-3d"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vapor-secondary"
              aria-expanded={openIndex === i}
            >
              <span className="font-headline text-sm sm:text-base font-semibold text-vapor-onbackground">
                {item.q}
              </span>
              <ChevronDown
                className={`w-4.5 h-4.5 text-vapor-secondary shrink-0 transition-transform duration-200 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === i && (
              <div className="px-6 pb-5">
                <p className="text-sm text-vapor-onsurfacevariant leading-relaxed border-t border-vapor-outlinevariant/40 pt-4">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
