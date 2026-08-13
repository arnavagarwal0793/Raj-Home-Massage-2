import { Instagram, Twitter, PhoneCall, MapPin, Clock } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/constants/content";

export const Footer = () => {
  return (
    <footer
      data-testid="footer-section"
      className="pt-14 pb-8 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto glass-panel rounded-[2.5rem] p-8 sm:p-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a
              href="#home"
              data-testid="footer-logo"
              className="flex items-center gap-2 mb-4"
            >
              <img
                src={BRAND.logoUrl}
                alt="Raj Home Massage logo"
                className="w-9 h-9 rounded-full object-cover"
              />
              <span className="font-headline font-bold text-lg text-vapor-onbackground">Raj Home Massage</span>
            </a>
            <p className="text-xs text-vapor-onsurfacevariant tracking-wide">{BRAND.tagline}</p>
          </div>

          <div>
            <h4 className="font-headline text-sm font-bold text-vapor-secondary uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                    className="text-sm text-vapor-onsurfacevariant hover:text-vapor-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-sm font-bold text-vapor-secondary uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-vapor-onsurfacevariant">
              <li data-testid="footer-address" className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-vapor-secondary mt-0.5 shrink-0" />
                {BRAND.address}
              </li>
              <li>
                <a
                  href={BRAND.phoneHref}
                  data-testid="footer-phone-link"
                  className="flex items-center gap-2 hover:text-vapor-secondary transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-vapor-secondary" />
                  {BRAND.phone}
                </a>
              </li>
              <li data-testid="footer-timing" className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-vapor-secondary" />
                {BRAND.timing}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-sm font-bold text-vapor-secondary uppercase tracking-widest mb-4">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={BRAND.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-instagram-link"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full glass-surface flex items-center justify-center text-vapor-onsurfacevariant hover:text-vapor-secondary transition-all"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href={BRAND.twitterHref}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-twitter-link"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-full glass-surface flex items-center justify-center text-vapor-onsurfacevariant hover:text-vapor-secondary transition-all"
              >
                <Twitter className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-vapor-outlinevariant/40 mt-10 pt-6 text-center">
          <p data-testid="footer-copyright" className="text-xs text-vapor-onsurfacevariant">
            © 2026 Raj Home Massage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
