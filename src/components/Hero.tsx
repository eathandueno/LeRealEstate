import Link from 'next/link';
import { Phone, Home, Shield, MessageCircle, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Dark hero */}
      <div className="bg-gradient-to-br from-black via-neutral-950 to-neutral-900">
        {/* Subtle decorative element */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.08),_transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
              Boise &amp; Treasure Valley Real Estate
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Trusted Partner in{' '}
              <span className="text-gold-400">Idaho Real Estate</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              Whether you&apos;re buying your first home, selling a property, or building an
              investment portfolio in the Treasure Valley, Le Group Realty is here to guide you
              every step of the way.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-black shadow-lg transition-all hover:bg-gold-400 hover:shadow-xl"
              >
                <Phone className="h-4 w-4" />
                Schedule a Call
              </Link>
              <Link
                href="/listings"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white shadow-sm backdrop-blur transition-all hover:border-white/40 hover:bg-white/10"
              >
                <Home className="h-4 w-4" />
                View Listings
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="border-t-2 border-gold-500 bg-neutral-950">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { icon: Shield, title: 'Local Expertise', desc: 'Deep knowledge of Boise & Treasure Valley' },
            { icon: MessageCircle, title: 'Fast Communication', desc: 'Response within 1 business day, often sooner' },
            { icon: Users, title: 'Buyer & Seller Support', desc: 'Full-service guidance from start to close' },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 text-center sm:text-left">
              <div className="hidden shrink-0 rounded-lg bg-gold-500/10 p-2 sm:block">
                <item.icon className="h-4 w-4 text-gold-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
