import { buildMetadata } from '@/lib/seo';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Thank You',
  description: 'Your message has been received. We will be in touch shortly.',
  path: '/success',
});

export default function SuccessPage() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-16 sm:py-20">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-950">
          <CheckCircle className="h-10 w-10 text-green-400" />
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white">Thank You!</h1>
        <p className="mt-3 text-lg text-gray-400">
          Your message has been received. We&apos;ll reach out within 1 business day.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-black shadow-sm transition-all hover:bg-gold-400 hover:shadow-md"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
