'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/faqs';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-neutral-950 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Common questions about working with Le Group Realty.
          </p>
        </div>

        <dl className="mt-12 space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-xl border bg-neutral-900 shadow-sm transition-all hover:shadow-md ${
                  isOpen ? 'border-gold-600' : 'border-neutral-800'
                }`}
              >
                <dt>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-medium text-white">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gold-500 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </dt>
                {isOpen && (
                  <dd className="border-t border-neutral-800 px-5 pb-4 pt-3 text-sm leading-relaxed text-gray-400">
                    {faq.answer}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
