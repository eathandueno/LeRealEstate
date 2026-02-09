import { buildMetadata } from '@/lib/seo';
import LeadForm from '@/components/LeadForm';
import { Phone, Mail, MapPin } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Contact',
  description:
    'Get in touch with Le Group Realty. Call, text, or fill out our form — we respond within one business day.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">Contact</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get in Touch
          </h1>
          <p className="mt-2 text-navy-200">
            We&apos;d love to hear from you. Reach out and let&apos;s start a conversation.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left column — info */}
            <div>
              <h2 className="text-2xl font-bold text-navy-800">Contact Information</h2>
              <p className="mt-4 text-lg leading-relaxed text-navy-500">
                Ready to take the next step? Whether you have a quick question or want to start
                your home search, we&apos;re here to help.
              </p>

              <dl className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-navy-700 p-2">
                    <Phone className="h-5 w-5 text-gold-400" />
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-navy-800">Phone / Text</dt>
                    <dd className="mt-0.5 text-sm text-navy-500">
                      <a href="tel:+12082848573" className="hover:text-gold-600">
                        (208) 284-8573
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-navy-700 p-2">
                    <Mail className="h-5 w-5 text-gold-400" />
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-navy-800">Email</dt>
                    <dd className="mt-0.5 text-sm text-navy-500">
                      <a href="mailto:hello@legrouprealty.com" className="hover:text-gold-600">
                        hello@legrouprealty.com
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-navy-700 p-2">
                    <MapPin className="h-5 w-5 text-gold-400" />
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-navy-800">Service Area</dt>
                    <dd className="mt-0.5 text-sm text-navy-500">
                      Boise, Eagle, Meridian, Nampa, Caldwell, Star, Kuna &amp; the greater Treasure
                      Valley
                    </dd>
                  </div>
                </div>
              </dl>

              <p className="mt-8 text-xs text-navy-300">
                Le Group Realty is associated with 208 Real Estate.
              </p>
            </div>

            {/* Right column — form */}
            <div className="relative rounded-xl border border-warm-200 bg-white p-6 shadow-md lg:p-8">
              <h2 className="text-xl font-bold text-navy-800">Send Us a Message</h2>
              <p className="mt-1 text-sm text-navy-400">
                We&apos;ll respond within 1 business day.
              </p>
              <div className="mt-6">
                <LeadForm sourcePath="/contact" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
