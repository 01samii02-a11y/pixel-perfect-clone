import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/Shell";
import { Reveal } from "@/components/site/Reveal";
import { pageHead } from "@/config/site";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead({
      title: "Services — opportunity matching and introductions",
      description:
        "Four Diagonn capabilities: opportunity matching, business introductions, capability discovery and partnership connections.",
      path: "/services",
    }),
  component: Services;
});

const services = [
  {
    n: "01",
    name: "Opportunity matching",
    body: "You describe a requirement, challenge or opportunity. We consider which businesses it genuinely aligns with, and whether the timing makes an introduction worthwhile.",
    who: "Organisations with a defined need and no efficient way to reach the businesses that fit it.",
    value: "A considered match instead of a search.",
  },
  {
    n: "02",
    name: "Business introductions",
    body: "A direct introduction between two parties, each given the context they need to decide whether to continue. No intermediary sits in the relationship afterwards.",
    who: "Decision makers who would rather have one relevant conversation than ten speculative ones.",
    value: "The right conversation, opened properly.",
  },
  {
    n: "03",
    name: "Capability discovery",
    body: "When a business needs a capability it does not have, we help identify providers whose work is actually aligned with the requirement.",
    who: "Buyers, operators and growing companies sourcing capacity or specialist capability.",
    value: "Fewer, better-qualified options to assess.",
  },
  {
    n: "04",
    name: "Partnership connections",
    body: "Connecting businesses whose capabilities are complementary, where a working relationship could create value neither would reach alone.",
    who: "Partnership, business development and channel teams.",
    value: "Alliance conversations with a real premise.",
  },
];

function Services() {
  return (
    <Shell>
      <section className="hero-field border-b border-border">
        <div className="container-narrow pb-20 pt-16 md:pb-28 md:pt-24">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h1 className="mt-8 max-w-3xl font-display text-[2.5rem] leading-[1.05] tracking-[-0.02em] text-foreground md:text-6xl">
              Four capabilities, applied to{" "}
              <span className="text-accent italic">one need at a time.</span>
            </h1>
            <p className="mt-9 max-w-xl text-lg leading-relaxed text-muted-foreground">
              How they are used depends entirely on what you are trying to achieve. Nothing here is
              sold as a package or measured by volume.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow rule-list">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 90}>
              <article className="grid gap-8 py-12 md:grid-cols-12 md:py-16">
                <div className="md:col-span-5">
                  <span className="font-display text-sm text-accent">{s.n}</span>
                  <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight text-foreground">
                    {s.name}
                  </h2>
                </div>
                <div className="md:col-span-7">
                  <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    {s.body}
                  </p>
                  <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <dt className="eyebrow">Suited to</dt>
                      <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.who}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow">The value</dt>
                      <dd className="mt-3 text-sm leading-relaxed text-foreground">{s.value}</dd>
                    </div>
                  </dl>
                  <Link to="/contact" className="btn-quiet mt-8">
                    Discuss this
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section border-t border-border bg-inverse text-inverse-foreground">
        <div className="container-narrow flex flex-col items-start gap-9 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl font-display text-3xl leading-[1.1] tracking-tight md:text-4xl">
            Not sure which of these applies? Describe the situation and we will tell you honestly.
          </h2>
          <Link
            to="/contact"
            className="shrink-0 border-b border-accent-soft pb-2 text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent-soft transition-colors hover:text-inverse-foreground"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </Shell>
  );
}
