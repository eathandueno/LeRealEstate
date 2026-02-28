import { testimonials } from '@/data/testimonials';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="bg-neutral-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Real experiences from Treasure Valley homeowners and investors.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 shadow-sm backdrop-blur"
            >
              <Quote className="mb-3 h-8 w-8 text-gold-500/40" />
              <p className="text-sm leading-relaxed text-gray-300">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 border-t border-neutral-800 pt-4">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-gold-400">
                  {t.role} &middot; {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
