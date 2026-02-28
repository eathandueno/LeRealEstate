'use client';

import { useState } from 'react';
import { listings, type Listing } from '@/data/listings';
import ListingCard from '@/components/ListingCard';

const statuses: Array<Listing['status'] | 'All'> = ['All', 'Active', 'Pending', 'Sold'];
const cities = ['All', ...Array.from(new Set(listings.map((l) => l.city)))];

export default function ListingsPage() {
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [cityFilter, setCityFilter] = useState<string>('All');

  const filtered = listings.filter((l) => {
    if (statusFilter !== 'All' && l.status !== statusFilter) return false;
    if (cityFilter !== 'All' && l.city !== cityFilter) return false;
    return true;
  });

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Listings</h1>
        <p className="mt-2 text-lg text-gray-400">
          Browse available properties across the Treasure Valley. Data shown is placeholder — live
          MLS integration coming soon.
        </p>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-4">
          <div>
            <label htmlFor="status-filter" className="block text-xs font-medium text-gray-400">
              Status
            </label>
            <select
              id="status-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="mt-1 rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white shadow-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
            >
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="city-filter" className="block text-xs font-medium text-gray-400">
              City
            </label>
            <select
              id="city-filter"
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="mt-1 rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white shadow-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
            >
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="mt-12 text-center text-gray-400">
            No listings match your filters. Try adjusting your criteria.
          </p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
