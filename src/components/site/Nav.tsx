import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { site } from "@/config/site";

const links = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between px-6 py-5 lg:px-16">
        <Link to="/" className="group inline-flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl tracking-tight text-foreground">Diagonn</span>
          <span aria-hidden="true" className="h-[7px] w-[7px] translate-y-[-2px] bg-accent" />
          <span className="sr-only">{site.tagline}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="nav-link">
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary">
            Start a Conversation
          </Link>
        </nav>

        <button
          type="button"
          className="nav-link md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-border bg-background px-6 pb-8 pt-4 md:hidden"
        >
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.to} className="border-b border-border">
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-2xl text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-6 w-full">
            Start a Conversation
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
