import { Link } from "@tanstack/react-router";
import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-narrow py-20 md:py-24">
        <p className="font-display text-4xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
          The right conversation,
          <br />
          <span className="text-accent italic">found on purpose.</span>
        </p>

        <div className="mt-16 grid gap-12 border-t border-border pt-12 md:grid-cols-3">
          <div>
            <p className="eyebrow">Diagonn</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Opportunity matching and deliberate business introductions.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow">Pages</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <p className="eyebrow">Contact</p>
            <p className="mt-4 text-sm text-muted-foreground">
              <a href={`mailto:${site.contact.email}`} className="footer-link">
                {site.contact.email}
              </a>
            </p>
          </div>
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Diagonn. {site.domain}
        </p>
      </div>
    </footer>
  );
}
