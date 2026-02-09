export interface Listing {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  status: 'Active' | 'Pending' | 'Sold';
  type: 'Single Family' | 'Condo' | 'Townhouse' | 'Multi-Family';
  image: string;
  description: string;
}

export const listings: Listing[] = [
  {
    id: '1',
    address: '1234 Warm Springs Ave',
    city: 'Boise',
    state: 'ID',
    zip: '83712',
    price: 525000,
    beds: 4,
    baths: 3,
    sqft: 2400,
    status: 'Active',
    type: 'Single Family',
    image: '/images/listing-placeholder.jpg',
    description: 'Beautiful home in the heart of the East End with mountain views and a modern open floor plan.',
  },
  {
    id: '2',
    address: '5678 Eagle Rd',
    city: 'Eagle',
    state: 'ID',
    zip: '83616',
    price: 689000,
    beds: 5,
    baths: 3,
    sqft: 3200,
    status: 'Active',
    type: 'Single Family',
    image: '/images/listing-placeholder.jpg',
    description: 'Spacious family home in a quiet Eagle neighborhood with a large backyard and three-car garage.',
  },
  {
    id: '3',
    address: '910 Capitol Blvd',
    city: 'Boise',
    state: 'ID',
    zip: '83702',
    price: 349000,
    beds: 2,
    baths: 2,
    sqft: 1200,
    status: 'Active',
    type: 'Condo',
    image: '/images/listing-placeholder.jpg',
    description: 'Modern downtown condo with walkability to restaurants, shopping, and the Boise River Greenbelt.',
  },
  {
    id: '4',
    address: '2345 Ustick Rd',
    city: 'Meridian',
    state: 'ID',
    zip: '83646',
    price: 475000,
    beds: 4,
    baths: 2,
    sqft: 2100,
    status: 'Pending',
    type: 'Single Family',
    image: '/images/listing-placeholder.jpg',
    description: 'Well-maintained home in a growing Meridian community, close to schools and parks.',
  },
  {
    id: '5',
    address: '678 Linder Ave',
    city: 'Meridian',
    state: 'ID',
    zip: '83642',
    price: 399000,
    beds: 3,
    baths: 2,
    sqft: 1650,
    status: 'Active',
    type: 'Townhouse',
    image: '/images/listing-placeholder.jpg',
    description: 'Low-maintenance townhouse perfect for first-time buyers, featuring an attached two-car garage.',
  },
  {
    id: '6',
    address: '3210 Chinden Blvd',
    city: 'Garden City',
    state: 'ID',
    zip: '83714',
    price: 599000,
    beds: 3,
    baths: 2,
    sqft: 1800,
    status: 'Sold',
    type: 'Single Family',
    image: '/images/listing-placeholder.jpg',
    description: 'Charming bungalow in Garden City with easy access to the river and a renovated kitchen.',
  },
];
