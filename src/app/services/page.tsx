import { buildMetadata } from '@/lib/seo';
import ServicesGrid from '@/components/ServicesGrid';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Services',
  description:
    'Le Group Realty offers buying, selling, investing, and relocation services across the Boise & Treasure Valley real estate market.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            Services
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-navy-200">
            Whether you&apos;re buying, selling, investing, or relocating, Le Group Realty
            provides full-service support throughout your real estate journey in the Treasure
            Valley.
          </p>
        </div>
      </section>

      <ServicesGrid />

      {/* Additional detail */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
          {[
            {
              title: 'Buyer Representation',
              text: 'We guide you from initial search to closing day. This includes neighborhood analysis, scheduling and attending showings, preparing competitive offers, and coordinating inspections, appraisals, and closing logistics.',
            },
            {
              title: 'Seller Representation',
              text: "Our listing strategy is designed to maximize your home's value. We provide comparative market analysis, staging guidance, professional photography coordination, MLS listing, and skilled negotiation to get you the best possible outcome.",
            },
            {
              title: 'Investment Consulting',
              text: 'The Treasure Valley is one of the fastest-growing markets in the country. We help investors identify rental properties, evaluate cap rates, and build portfolios aligned with their financial goals.',
            },
            {
              title: 'Relocation Assistance',
              text: 'Moving to Idaho? We make the transition seamless with area tours, school and commute information, and a personalized home search so you can feel confident in your new community from day one.',
            },
          ].map((item) => (
            <div key={item.title} className="border-l-4 border-gold-500 pl-6">
              <h2 className="text-2xl font-bold text-navy-800">{item.title}</h2>
              <p className="mt-3 leading-relaxed text-navy-500">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-800 py-16 text-center sm:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Let&apos;s Talk About Your Goals</h2>
          <p className="mt-4 text-navy-200">
            No pressure, no obligation. Reach out and let us know how we can help.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 shadow-sm transition-all hover:bg-gold-400 hover:shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
