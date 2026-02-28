import { buildMetadata } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = buildMetadata({
  title: 'About',
  description:
    'Learn about Le Group Realty — your trusted Boise & Treasure Valley real estate team, associated with 208 Real Estate.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-black to-neutral-900 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">About</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Le Group Realty
          </h1>
          <p className="mt-2 text-sm text-gold-300">Associated with 208 Real Estate</p>
        </div>
      </section>

      {/* Meet the Realtor */}
      <section className="bg-neutral-950 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start">
            {/* Headshot */}
            <div className="shrink-0">
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-gold-400 shadow-lg sm:h-56 sm:w-56">
                <Image
                  src="/images/jacksonLe.jpeg"
                  alt="Le Group Realty — Realtor headshot"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
                Meet Your Realtor
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Jackson Le
              </h2>
              <p className="mt-1 text-sm font-medium text-gray-500">
                Licensed Real Estate Agent &middot; Le Group Realty
              </p>

              <div className="mt-4 space-y-4 text-base leading-relaxed text-gray-400">
                <p>
                  Born and raised in the Treasure Valley, I know this area inside and out. I got
                  into real estate because I believe everyone deserves a trusted advocate when
                  making one of the biggest decisions of their life — buying or selling a home.
                </p>
                <p>
                  My approach is simple: listen first, advise honestly, and work relentlessly
                  until we reach your goal. Whether you&apos;re a first-time buyer nervous about
                  the process, a family looking for the perfect neighborhood, or an investor
                  building a portfolio, I&apos;m here to make it happen.
                </p>
                <p>
                  When I&apos;m not helping clients, you can find me exploring the Boise foothills,
                  spending time with family, or checking out the local restaurant scene.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex rounded-lg bg-gold-500 px-5 py-2.5 text-sm font-semibold text-black shadow-sm transition-all hover:bg-gold-400 hover:shadow-md"
                >
                  Get in Touch
                </Link>
                <a
                  href="tel:+12082848573"
                  className="inline-flex rounded-lg border border-neutral-700 bg-neutral-900 px-5 py-2.5 text-sm font-medium text-gray-300 shadow-sm transition-all hover:border-neutral-600 hover:shadow-md"
                >
                  (208) 284-8573
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the company */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            The Team
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            About the Company
          </h2>

          <div className="mt-6 space-y-6 text-base leading-relaxed text-gray-400">
            <p>
              Le Group Realty was founded with a simple belief: real estate should be personal.
              Whether you&apos;re a first-time buyer navigating the Boise market, a family looking
              to upgrade in Eagle or Meridian, or an investor exploring opportunities across the
              Treasure Valley, we bring the same dedication and attention to every client.
            </p>
            <p>
              As an associated team within 208 Real Estate, we combine the personalized service of
              a boutique team with the backing and resources of an established Idaho brokerage. This
              means you get local expertise, strong negotiation skills, and a full suite of real
              estate services — all in one place.
            </p>
            <p>
              Our team lives and works in the Treasure Valley. We know the neighborhoods, the
              market trends, and the people. That local insight is something you can&apos;t get from
              an algorithm — and it&apos;s what sets us apart.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-neutral-950 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            What We Stand For
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Our Values</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                label: 'Integrity',
                desc: "Honest advice, even when it's not what you want to hear. Your trust is everything.",
              },
              {
                label: 'Communication',
                desc: 'Fast, clear, and consistent updates at every stage. You should never feel left in the dark.',
              },
              {
                label: 'Local Knowledge',
                desc: 'Deep roots in the Boise metro and Treasure Valley. We know the streets, the schools, and the market.',
              },
              {
                label: 'Client-First',
                desc: 'Your goals drive every recommendation we make. We succeed when you succeed.',
              },
            ].map((v) => (
              <div
                key={v.label}
                className="rounded-xl border border-neutral-800 bg-neutral-900 p-5 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-gold-500" />
                  <h3 className="text-lg font-semibold text-white">{v.label}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-16 text-center sm:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Ready to Work Together?</h2>
          <p className="mt-4 text-gray-400">
            Reach out today and let&apos;s start a conversation about your real estate goals.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-black shadow-sm transition-all hover:bg-gold-400 hover:shadow-md"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}
