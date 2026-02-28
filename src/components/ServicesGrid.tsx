import { Home, DollarSign, TrendingUp, MapPin } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Buying',
    description:
      'From first-time buyers to seasoned homeowners, we help you find the perfect property in the Treasure Valley and navigate every step of the purchase process.',
  },
  {
    icon: DollarSign,
    title: 'Selling',
    description:
      'Get top dollar for your home with our strategic pricing, professional marketing, and skilled negotiation. We make selling straightforward.',
  },
  {
    icon: TrendingUp,
    title: 'Investing',
    description:
      'Looking to build wealth through real estate? We identify strong investment opportunities and help you analyze returns in the Boise market.',
  },
  {
    icon: MapPin,
    title: 'Relocation',
    description:
      'Moving to Idaho? We provide relocation guidance including neighborhood tours, school information, and everything you need to feel at home.',
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            What We Do
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How We Can Help
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Full-service real estate support tailored to your goals.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-neutral-800 bg-neutral-900 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-gold-500/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400 shadow-md transition-transform group-hover:scale-110">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
