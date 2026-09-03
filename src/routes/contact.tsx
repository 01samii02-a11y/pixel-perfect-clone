import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Shell } from "@/components/site/Shell";
import { Reveal } from "@/components/site/Reveal";
import { pageHead, site } from "@/config/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact Diagonn — start a conversation",
      description:
        "Describe a business need, capability or opportunity. Diagonn will tell you honestly whether a relevant introduction exists.",
      path: "/contact",
    }),
  component: Contact,
});

function Contact() {
  const [status, setStatus] = useState<string>("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const body = [
      `Name: ${get("name")}`,
      `Work email: ${get("email")}`,
      `Company: ${get("company")}`,
      `Looking for: ${get("looking")}`,
      "",
      get("message"),
    ].join("\n");

    const href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      `Enquiry from ${get("name") || "the Diagonn website"}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setStatus(
      "Your email client should now be open with this message prepared. Nothing has been sent from this website itself.",
    );
  }

  return (
    <Shell>
      <section className="hero-field border-b border-border">
        <div className="container-narrow pb-16 pt-16 md:pb-24 md:pt-24">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-8 max-w-3xl font-display text-[2.5rem] leading-[1.05] tracking-[-0.02em] text-foreground md:text-6xl">
              Describe the need. <span className="text-accent italic">We will be straight with you.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-base leading-relaxed text-muted-foreground">
                A few sentences is enough. If there is a relevant introduction to make, we will
                explain what we have in mind. If there is not, we will tell you that instead.
              </p>
              <div className="mt-10 border-t border-border pt-7">
                <p className="eyebrow">Email</p>
                <p className="mt-3 text-base">
                  <a href={`mailto:${site.contact.email}`} className="footer-link">
                    {site.contact.email}
                  </a>
                </p>
              </div>
              <div className="mt-8 border-t border-border pt-7">
                <p className="eyebrow">Form status</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {site.contact.formStatus}
                </p>
              </div>
              <p className="mt-8 text-sm text-muted-foreground">
                See our{" "}
                <Link to="/privacy" className="footer-link underline underline-offset-4">
                  privacy information
                </Link>
                .
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={120}>
              <form onSubmit={onSubmit} className="space-y-9" noValidate={false}>
                <div>
                  <label htmlFor="name" className="field-label">
                    Name
                  </label>
                  <input id="name" name="name" required autoComplete="name" className="field-input mt-3" />
                </div>
                <div>
                  <label htmlFor="email" className="field-label">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="field-input mt-3"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="field-label">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    className="field-input mt-3"
                  />
                </div>
                <div>
                  <label htmlFor="looking" className="field-label">
                    What are you looking for?
                  </label>
                  <input
                    id="looking"
                    name="looking"
                    className="field-input mt-3"
                    aria-describedby="looking-hint"
                  />
                  <p id="looking-hint" className="mt-3 text-xs text-muted-foreground">
                    For example: a partner, a provider, a specific capability, or a buyer.
                  </p>
                </div>
                <div>
                  <label htmlFor="message" className="field-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="field-input mt-3 resize-y"
                  />
                </div>

                <button type="submit" className="btn-primary">
                  Prepare Message
                </button>

                <p role="status" aria-live="polite" className="text-sm leading-relaxed text-muted-foreground">
                  {status}
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </Shell>
  );
}
