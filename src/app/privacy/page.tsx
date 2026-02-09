import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'Le Group Realty privacy policy regarding lead capture and data handling.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-navy-400">Last updated: February 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-navy-500">
          <h2 className="text-lg font-semibold text-navy-800">Information We Collect</h2>
          <p>
            When you submit a contact form on our website, we collect the information you
            provide, including your name, phone number, email address, area of interest, preferred
            contact method, and any message you include. We also record the page you submitted
            from and your browser&apos;s user agent string for internal analytics.
          </p>

          <h2 className="text-lg font-semibold text-navy-800">How We Use Your Information</h2>
          <p>
            We use the information you provide solely to respond to your inquiry, deliver real
            estate services, and improve our website experience. We do not sell, rent, or share
            your personal information with third parties for marketing purposes.
          </p>

          <h2 className="text-lg font-semibold text-navy-800">Data Storage</h2>
          <p>
            Form submissions are stored securely using industry-standard cloud infrastructure. We
            retain lead information only as long as necessary to fulfill the purpose for which it
            was collected or as required by law.
          </p>

          <h2 className="text-lg font-semibold text-navy-800">Cookies &amp; Analytics</h2>
          <p>
            We may use cookies and analytics tools to understand how visitors interact with our
            site. These tools collect anonymous usage data and do not personally identify you
            unless you submit a form.
          </p>

          <h2 className="text-lg font-semibold text-navy-800">Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information at
            any time by contacting us at{' '}
            <a href="mailto:hello@legrouprealty.com" className="font-medium text-gold-600 underline hover:text-gold-700">
              hello@legrouprealty.com
            </a>
            .
          </p>

          <h2 className="text-lg font-semibold text-navy-800">Contact</h2>
          <p>
            If you have any questions about this privacy policy, please reach out to us at{' '}
            <a href="mailto:hello@legrouprealty.com" className="font-medium text-gold-600 underline hover:text-gold-700">
              hello@legrouprealty.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
