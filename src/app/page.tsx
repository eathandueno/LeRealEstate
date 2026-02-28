import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import LeadForm from '@/components/LeadForm';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />

      {/* Meet Your Realtor mini-section */}
      <section className="bg-neutral-900 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 sm:flex-row">
            <div className="shrink-0">
              <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-gold-400 shadow-lg">
                <Image
                  src="/images/jacksonLe.jpeg"
                  alt="Le Group Realty — Realtor headshot"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
                Meet Your Realtor
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">Jackson Le</h2>
              <p className="mt-2 text-base leading-relaxed text-gray-400">
                I&apos;m a local Treasure Valley real estate agent dedicated to helping you find
                your perfect home, sell for top dollar, or build your investment portfolio. Let&apos;s
                work together.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-flex text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
              >
                Learn more about me &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inline lead form */}
      <section className="bg-black py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
              Get Started
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Tell us a little about yourself and we&apos;ll be in touch shortly.
            </p>
          </div>
          <div className="relative mt-8 rounded-xl border border-neutral-800 bg-neutral-900 p-6 shadow-md">
            <LeadForm sourcePath="/" compact />
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
    </>
  );
}
