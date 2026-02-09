import type { Metadata } from 'next';

const SITE_NAME = 'Le Group Realty';
const SITE_DESCRIPTION =
  'Trusted Boise & Treasure Valley real estate. Associated with 208 Real Estate. Expert guidance for buyers, sellers, and investors.';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://legrouprealty.com';

export function buildMetadata(overrides: Partial<Metadata> & { title?: string; description?: string; path?: string } = {}): Metadata {
  const title = overrides.title ? `${overrides.title} | ${SITE_NAME}` : SITE_NAME;
  const description = overrides.description ?? SITE_DESCRIPTION;
  const url = `${SITE_URL}${overrides.path ?? ''}`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
    ...overrides,
  };
}
