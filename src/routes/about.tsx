import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/Shell";
import { Reveal } from "@/components/site/Reveal";
import { pageHead, site } from "@/config/site";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Diagonn — how we think about matching",
      description:
        "Diagonn is a focused opportunity-matching practice: reading a business need, judging fit, and making introductions that deserve to happen.",
      path: "/about",
    }),
  component: About,
});

function About() {
  return (
    <Shell>
      <section className="hero-field border-b border-border">
        <div className="container-narrow pb-20 pt-16 md:pb-28 md:pt-24">
            <p className="eyebrow">About</p>
            <h1 className="mt-8 max-w-3xl font-display text-[2.5rem] leading-[1.05] tracking-[-0.02em] text-foreground md:text-6xl">
              A small practice built around one question:{" "}
              <span className="text-accent italic">does this actually fit?</span>
            </h1>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <div className="space-y-7 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  Diagonn is an opportunity-matching practice. Businesses tell us what they are
                  looking for — a partner, a provider, a capability, a specific kind of buyer — and
                  we consider who that genuinely suits. When there is a plausible match, we make a
                  direct introduction. When there is not, we say nothing rather than manufacture one.
                </p>
                <p>
                  The work is deliberately narrow. We do not run campaigns, sell lists, hold
                  inventory of leads, or promise outcomes. An introduction is an opening, and the two
                  businesses involved take the relationship forward on their own terms.
                </p>
                <p className="text-foreground">
                  Relevance is the point. A poorly considered introduction costs both parties their
                  attention and costs us the only thing worth keeping — the assumption that when we
                  make contact, there is a reason.
                </p>
              </div>
            </Reveal>
          </div>
          <aside className="md:col-span-4 md:col-start-9">
            <Reveal delay={140}>
              <div className="border-t border-border pt-7">
                <p className="eyebrow">Relationship disclosure</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {site.ownershipDisclosure}
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section border-t border-border">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow">Approach</p>
          </Reveal>
          <div className="mt-12 rule-list">
            {[
              {
                t: "We start with the need, not the offer",
                d: "Every conversation begins with what a business is trying to achieve. The match follows from that, or it does not happen.",
              },
              {
                t: "Discretion is standard",
                d: "Needs are often commercially sensitive. Nothing is published, listed or shared beyond what an introduction requires.",
              },
              {
                t: "Judgement over throughput",
                d: "The measure of the work is whether both sides found the conversation worth having, not how many were made.",
              },
              {
                t: "The relationship is yours",
                d: "We open the door and step back. Terms, negotiation and delivery sit with the parties involved.",
              },
            ].map((row, i) => (
              <Reveal key={row.t} delay={i * 90}>
                <div className="grid gap-3 py-8 md:grid-cols-12">
                  <h2 className="font-display text-xl tracking-tight text-foreground md:col-span-5">
                    {row.t}
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground md:col-span-7">
                    {row.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-border">
        <div className="container-narrow flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl font-display text-3xl leading-[1.1] tracking-tight text-foreground md:text-4xl">
            Tell us what you are looking for.
          </h2>
          <Link to="/contact" className="btn-primary shrink-0">
            Start a Conversation
          </Link>
        </div>
      </section>
    </Shell>
  );
}
