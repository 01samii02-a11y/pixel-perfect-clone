import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/Shell";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { pageHead } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Diagonn",
      description:
        "Diagonn listens to a business need, considers fit, and makes a small number of deliberate introductions. Start a conversation.",
      path: "/",
    }),
  component: Home,
});

const capabilities = [
  {
    n: "01",
    name: "Opportunity matching",
    body: "A stated need or opportunity is matched against businesses where the fit is genuinely plausible — not against a list.",
  },
  {
    n: "02",
    name: "Business introductions",
    body: "Direct introductions between two parties who each have a reason to be in the conversation.",
  },
  {
    n: "03",
    name: "Capability discovery",
    body: "For organisations trying to find a capability they need, without working through vendor lists and cold outreach.",
  },
  {
    n: "04",
    name: "Partnership connections",
    body: "Connecting businesses whose combined capability could create something worth building.",
  },
];

const steps = [
  { n: "1", t: "Share the need", d: "You describe the requirement, challenge or opportunity in your own words." },
  { n: "2", t: "Consider the fit", d: "We think about who it actually suits, and whether an introduction is warranted at all." },
  { n: "3", t: "Make the introduction", d: "Both parties are introduced directly, with the context each of them needs." },
  { n: "4", t: "You take it forward", d: "The relationship — and any outcome — belongs to the two businesses involved." },
];

const audiences = [
  { t: "Business owners", d: "Partners and providers that support the next stage of growth." },
  { t: "Service providers", d: "Aligned clients and channel relationships rather than volume pipelines." },
  { t: "Solution providers", d: "Buyers with a relevant, current need." },
  { t: "Partnership teams", d: "Alliance conversations with a real reason to happen." },
  { t: "Enterprise buyers", d: "Relevant providers instead of an undifferentiated vendor list." },
  { t: "Growing companies", d: "Capability they do not yet have in house." },
];

const principles = [
  { t: "Relevance before volume", d: "Fewer introductions, chosen deliberately. A weak match costs both parties their attention." },
  { t: "Deliberate, not automated", d: "Each need is read and considered. Nothing is broadcast, scraped or blasted." },
  { t: "Relationship-led", d: "An introduction is a beginning. The businesses involved own what happens next." },
  { t: "Long-term thinking", d: "Reputation is built one appropriate conversation at a time, not one campaign at a time." },
];

function Home() {
  return (
    <Shell>
      {/* Hero — asymmetric two-column with deliberate vertical offset */}
      <section className="hero-field">
        <div className="container-narrow pb-24 pt-20 md:pb-36 md:pt-28">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="eyebrow">Opportunity matching</p>
              <h1 className="mt-8 max-w-4xl font-display text-[2.75rem] leading-[1.03] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-[5.5rem]">
                Some businesses are
                <span className="text-accent"> already looking</span> for what you do.
              </h1>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:pb-4">
              <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:text-lg">
                Diagonn works in the space between a business need and the business that can meet it.
                We read the need, consider the fit, and make a small number of introductions worth
                someone&apos;s time.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link to="/contact" className="btn-primary">
                  Start a Conversation
                </Link>
                <Link to="/services" className="btn-quiet">
                  See what we do
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The business need — asymmetric offset */}
      <section className="section border-t border-border">
        <div className="container-narrow grid gap-14 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5 md:col-start-1">
            <Reveal>
              <SectionHeading eyebrow="The friction" title="Finding the right counterpart is slow, and mostly guesswork." />
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={120}>
              <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  Most organisations know what they need. What they lack is a reliable way to reach
                  the specific businesses that can provide it — without directories, cold outreach,
                  or a long series of conversations that were never going to fit.
                </p>
                <p>
                  The opposite problem is just as common. Capable businesses spend their effort
                  looking for demand that already exists somewhere, held by someone who cannot
                  easily find them.
                </p>
                <p className="text-foreground">
                  Diagonn treats that gap as a matching problem, and approaches it with judgement
                  rather than reach.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section border-t border-border">
        <div className="container-narrow">
          <div className="md:max-w-2xl">
            <Reveal>
              <SectionHeading
                eyebrow="What we do"
                title="Four ways a connection gets made."
                intro="These are capabilities, not packaged products. The emphasis shifts with the need in front of us."
              />
            </Reveal>
          </div>
          <div className="mt-16 rule-list">
            {capabilities.map((c, i) => (
              <Reveal key={c.name} delay={i * 90}>
                <article className="grid gap-4 py-9 md:grid-cols-12 md:items-baseline">
                  <span className="font-display text-sm text-accent md:col-span-1">{c.n}</span>
                  <h3 className="font-display text-2xl tracking-tight text-foreground md:col-span-4">
                    {c.name}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground md:col-span-7">
                    {c.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-inverse text-inverse-foreground">
        <div className="container-narrow">
          <div className="md:max-w-2xl">
            <Reveal>
              <p className="eyebrow text-accent-soft">How it works</p>
              <h2 className="mt-5 font-display text-3xl leading-[1.08] tracking-tight md:text-5xl">
                Four steps. No machinery in between.
              </h2>
            </Reveal>
          </div>
          <ol className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 110}>
                <li className="h-full border-t border-inverse-foreground/20 pr-6 pt-7">
                  <span className="font-display text-3xl text-accent-soft">{s.n}</span>
                  <h3 className="mt-5 text-base font-medium tracking-tight">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-inverse-foreground/70">{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Who it helps */}
      <section className="section border-t border-border">
        <div className="container-narrow">
          <div className="md:max-w-2xl">
            <Reveal>
              <SectionHeading eyebrow="Who it helps" title="Written for people who decide." />
            </Reveal>
          </div>
          <div className="mt-14 grid gap-x-14 gap-y-0 md:grid-cols-2">
            {audiences.map((a, i) => (
              <Reveal key={a.t} delay={i * 70}>
                <div className="border-b border-border py-7">
                  <h3 className="text-base font-medium tracking-tight text-foreground">{a.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why this approach — asymmetric offset */}
      <section className="section border-t border-border">
        <div className="container-narrow grid gap-14 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <Reveal>
              <SectionHeading eyebrow="Why this way" title="A quieter method, held on purpose." />
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="rule-list">
              {principles.map((p, i) => (
                <Reveal key={p.t} delay={i * 90}>
                  <div className="py-8">
                    <h3 className="font-display text-xl tracking-tight text-foreground">{p.t}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Editorial statement */}
      <section className="border-t border-border py-24 md:py-36">
        <div className="container-narrow">
          <Reveal>
            <p className="max-w-4xl font-display text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[3.5rem]">
              Fit is the whole discipline. <span className="text-accent">Everything else</span>{" "}
              is just volume wearing a better suit.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section border-t border-border">
        <div className="container-narrow flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl leading-[1.1] tracking-tight text-foreground md:text-4xl">
              If there is a need, a capability, or a connection worth considering — describe it.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A short message is enough to start. If there is no sensible match, we will say so.
            </p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Start a Conversation
          </Link>
        </div>
      </section>
    </Shell>
  );
}
