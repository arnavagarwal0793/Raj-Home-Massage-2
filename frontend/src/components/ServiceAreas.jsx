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
          <p className="text-xs uppercase tracking-[0.2em] text-vapor-secondary font-bold mb-3">
            Where We Serve
          </p>
          <h2
            data-testid="service-areas-heading"
            className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-vapor-onbackground tracking-tight"
          >
            Service Areas
          </h2>
        </div>
        <div
          data-testid="service-areas-airport-badge"
          className="flex items-center gap-2 glass-surface rounded-full px-4 py-2"
        >
          <Plane className="w-4 h-4 text-vapor-secondary" />
          <span className="text-xs sm:text-sm text-vapor-onsurfacevariant font-medium">
            Near Mumbai International Airport
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <h3 className="font-headline text-lg font-bold text-vapor-onbackground mb-5 pb-3 border-b border-vapor-outlinevariant/40">
            Primary Areas
          </h3>
          <div className="flex flex-wrap gap-2.5" data-testid="service-areas-primary-list">
            {SERVICE_AREAS.primary.map((area) => (
              <span
                key={area}
                data-testid={`service-area-chip-${area.toLowerCase().replace(/\s+/g, "-")}`}
                className="glass-surface text-vapor-onsurface text-xs sm:text-sm font-medium px-4 py-2 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-6 sm:p-8 bg-gradient-to-br from-white/40 to-vapor-secondarycontainer/20">
          <div className="flex items-center gap-2 mb-5 pb-3 border-b border-vapor-outlinevariant/40">
            <h3 className="font-headline text-lg font-bold text-vapor-secondary">
              South Mumbai
            </h3>
            <span className="text-[10px] uppercase tracking-widest text-vapor-onsurfacevariant bg-white/60 px-2 py-1 rounded-full ml-auto">
              On Appointment Basis
            </span>
          </div>
          <div className="flex flex-wrap gap-2.5" data-testid="service-areas-south-mumbai-list">
            {SERVICE_AREAS.southMumbai.map((area) => (
              <span
                key={area}
                data-testid={`service-area-chip-${area.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-white/50 border border-vapor-secondarycontainer text-vapor-onsurfacevariant text-xs sm:text-sm font-medium px-4 py-2 rounded-full"
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
