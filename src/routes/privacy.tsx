import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/Shell";
import { pageHead, site } from "@/config/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      title: "Privacy — how Diagonn handles your information",
      description:
        "Placeholder privacy structure for Diagonn covering what is collected, why, retention and contact. Requires review before launch.",
      path: "/privacy",
    }),
  component: Privacy,
});

const sections = [
  {
    t: "Scope",
    d: "This page describes how information shared with Diagonn through this website is intended to be handled. The final wording must be reviewed and approved by the site owner before launch.",
  },
  {
    t: "What is collected",
    d: "Only what you choose to send: your name, work email, company and the description of what you are looking for. This site does not run advertising trackers or ask you to create an account.",
  },
  {
    t: "Why it is used",
    d: "To understand your enquiry, consider whether a relevant introduction exists, and reply to you. Details of a need are shared with another party only where that is the point of the introduction you asked for.",
  },
  {
    t: "Legal basis and jurisdiction",
    d: "Placeholder. The controlling legal entity, applicable jurisdiction and legal basis for processing have not been supplied and must not be assumed. This section requires approved legal text.",
  },
  {
    t: "Retention",
    d: "Placeholder. A specific retention period has not been confirmed. State the actual period before publishing.",
  },
  {
    t: "Your rights",
    d: "Placeholder. Rights available to you depend on the applicable jurisdiction and controlling entity, neither of which is confirmed here. Replace with reviewed text.",
  },
  {
    t: "Contact",
    d: `Questions about this page or about information you have shared can be sent to ${site.contact.email}. This address requires confirmation by the site owner.`,
  },
];

function Privacy() {
  return (
    <Shell>
      <section className="border-b border-border">
        <div className="container-narrow pb-16 pt-16 md:pb-20 md:pt-24">
          <p className="eyebrow">Privacy</p>
          <h1 className="mt-8 max-w-2xl font-display text-[2.25rem] leading-[1.08] tracking-[-0.02em] text-foreground md:text-5xl">
            Privacy information
          </h1>
          <p className="mt-8 max-w-2xl border-l-2 border-accent pl-5 text-sm leading-relaxed text-muted-foreground">
            <strong className="font-medium text-foreground">Placeholder copy.</strong> This structure
            is complete but the legal content has not been reviewed. Replace the marked sections with
            approved text before the site goes live.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow max-w-3xl rule-list">
          {sections.map((s) => (
            <section key={s.t} className="grid gap-3 py-8 md:grid-cols-12">
              <h2 className="font-display text-xl tracking-tight text-foreground md:col-span-4">
                {s.t}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground md:col-span-8">{s.d}</p>
            </section>
          ))}
        </div>
        <div className="container-narrow mt-12">
          <Link to="/contact" className="btn-quiet">
            Contact Diagonn
          </Link>
        </div>
      </section>
    </Shell>
  );
}
