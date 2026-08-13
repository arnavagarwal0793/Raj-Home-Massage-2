import { useEffect, useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/constants/content";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled ? "glass-panel soft-3d" : "bg-transparent"
        }`}
      >
        <a
          href="#home"
          data-testid="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-2 shrink-0"
        >
          <img
            src={BRAND.logoUrl}
            alt="Raj Home Massage logo - circular hands emblem"
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="font-headline text-base sm:text-lg font-bold text-vapor-onbackground tracking-tight leading-none">
            Raj Home Massage
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-testid={`navbar-link-${link.label.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-vapor-onsurfacevariant hover:text-vapor-secondary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={BRAND.phoneHref}
            data-testid="navbar-call-link"
            className="flex items-center gap-1.5 text-sm text-vapor-onsurfacevariant hover:text-vapor-secondary transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            {BRAND.phone}
          </a>
          <a
            href={BRAND.whatsappBookingHref}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="navbar-book-now-button"
            className="btn-3d bg-vapor-secondary text-vapor-onsecondary font-semibold text-sm px-6 py-2.5 rounded-full"
          >
            Book Now
          </a>
        </div>

        <button
          className="lg:hidden text-vapor-onbackground p-1"
          data-testid="navbar-mobile-menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <div
        data-testid="navbar-mobile-menu"
        className={`lg:hidden fixed inset-0 top-[72px] mesh-bg transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none invisible"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 pt-12">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-testid={`navbar-mobile-link-${link.label.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-lg font-headline font-semibold text-vapor-onbackground hover:text-vapor-secondary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <a
            href={BRAND.whatsappBookingHref}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="navbar-mobile-book-now-button"
            className="mt-4 btn-3d bg-vapor-secondary text-vapor-onsecondary font-semibold text-sm px-8 py-3 rounded-full"
          >
            Book Now
          </a>
        </ul>
      </div>
    </header>
  );
};
