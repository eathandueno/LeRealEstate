export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    location: 'Boise, ID',
    quote:
      'Le Group Realty made our first home purchase feel effortless. They were responsive, knowledgeable, and genuinely cared about finding us the right fit.',
    role: 'First-Time Buyer',
  },
  {
    name: 'James & Linda K.',
    location: 'Eagle, ID',
    quote:
      'We sold our home in under two weeks at above asking price. The marketing strategy and local expertise made all the difference.',
    role: 'Home Sellers',
  },
  {
    name: 'David R.',
    location: 'Meridian, ID',
    quote:
      'As an out-of-state investor, I needed someone I could trust on the ground in Boise. Le Group Realty delivered every time.',
    role: 'Real Estate Investor',
  },
];
