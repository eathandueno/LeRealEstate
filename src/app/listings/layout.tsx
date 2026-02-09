import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Listings',
  description:
    'Browse homes for sale in Boise, Eagle, Meridian, and the greater Treasure Valley — brought to you by Le Group Realty.',
  path: '/listings',
});

export default function ListingsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
