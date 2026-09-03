export type SiteConfig = {
  siteUrl: string;
  domain: string;
  siteName: string;
  tagline: string;
  positioning: string;
  contact: { email: string; formStatus: string };
  ownershipDisclosure: string;
  seo: { titleTemplate: (t: string) => string; defaultDescription: string };
};

export const site: SiteConfig = {
  siteUrl: "https://diagonn.com",
  domain: "diagonn.com",
  siteName: "Diagonn",
  tagline: "Opportunity, matched with intent.",
  positioning:
    "Diagonn works on opportunity matching: understanding a business need, considering fit, and making introductions that are worth someone's time.",
  contact: {
    // NOTE: destination address requires confirmation by the site owner.
    email: "hello@diagonn.com",
    formStatus:
      "This form has no delivery backend configured yet. Submitting opens a prepared message in your own email client so nothing is silently lost.",
  },
  ownershipDisclosure:
    "Diagonn is professionally related to the wider Orlint ecosystem of business introduction work. It operates as its own focused practice, with its own remit and its own conversations.",
  seo: {
    titleTemplate: (t: string) => `${t} · Diagonn`,
    defaultDescription:
      "Diagonn matches business needs with relevant opportunities and makes deliberate introductions, chosen for fit rather than volume.",
  },
};

export const absoluteUrl = (path: string) =>
  `${site.siteUrl}${path === "/" ? "/" : path.replace(/\/$/, "")}`;

export const pageHead = ({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) => {
  const url = absoluteUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: site.siteName },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
};
