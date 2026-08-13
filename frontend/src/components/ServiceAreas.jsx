import { Plane } from "lucide-react";
import { SERVICE_AREAS } from "@/constants/content";

export const ServiceAreas = () => {
  return (
    <section
      id="areas"
      data-testid="service-areas-section"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-3">
            Where We Serve
          </p>
          <h2
            data-testid="service-areas-heading"
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F3E5AB]"
          >
            Service Areas
          </h2>
        </div>
        <div
          data-testid="service-areas-airport-badge"
          className="flex items-center gap-2 bg-[#1C1C20] border border-[#A38330]/40 rounded-full px-4 py-2"
        >
          <Plane className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs sm:text-sm text-zinc-300">
            Near Mumbai International Airport
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#141416] border border-[#A38330]/25 rounded-xl p-6 sm:p-8">
          <h3 className="font-serif text-lg text-[#F3E5AB] font-semibold mb-5 pb-3 border-b border-[#A38330]/25">
            Primary Areas
          </h3>
          <div className="flex flex-wrap gap-2.5" data-testid="service-areas-primary-list">
            {SERVICE_AREAS.primary.map((area) => (
              <span
                key={area}
                data-testid={`service-area-chip-${area.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-[#1C1C20] border border-[#A38330]/30 text-zinc-200 text-xs sm:text-sm px-4 py-2 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-[#141416] border border-[#A38330]/25 rounded-xl p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-5 pb-3 border-b border-[#A38330]/25">
            <h3 className="font-serif text-lg text-[#E6C665] font-semibold">
              South Mumbai
            </h3>
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 bg-[#0B0B0C] border border-[#A38330]/30 px-2 py-1 rounded-full ml-auto">
              On Appointment Basis
            </span>
          </div>
          <div className="flex flex-wrap gap-2.5" data-testid="service-areas-south-mumbai-list">
            {SERVICE_AREAS.southMumbai.map((area) => (
              <span
                key={area}
                data-testid={`service-area-chip-${area.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-[#0B0B0C] border border-[#A38330]/25 text-zinc-400 text-xs sm:text-sm px-4 py-2 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
