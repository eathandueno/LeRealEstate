import { Bed, Bath, Maximize, MapPin } from 'lucide-react';
import type { Listing } from '@/data/listings';

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);
}

const statusColors: Record<Listing['status'], string> = {
  Active: 'bg-green-950 text-green-400',
  Pending: 'bg-gold-100 text-gold-400',
  Sold: 'bg-neutral-800 text-gray-400',
};

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-gold-500/5">
      {/* Image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-neutral-800 to-neutral-900">
        <div className="flex h-full items-center justify-center text-sm text-gray-500">
          Photo Coming Soon
        </div>
        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-xs font-medium shadow-sm ${statusColors[listing.status]}`}
        >
          {listing.status}
        </span>
      </div>

      <div className="p-4">
        <p className="text-xl font-bold text-white">{formatPrice(listing.price)}</p>
        <p className="mt-1 text-sm font-medium text-gray-300">{listing.address}</p>
        <p className="flex items-center gap-1 text-xs text-gray-500">
          <MapPin className="h-3 w-3" />
          {listing.city}, {listing.state} {listing.zip}
        </p>

        <div className="mt-3 flex items-center gap-4 border-t border-neutral-800 pt-3 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Bed className="h-3.5 w-3.5 text-gold-400" /> {listing.beds} Beds
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-3.5 w-3.5 text-gold-400" /> {listing.baths} Baths
          </span>
          <span className="flex items-center gap-1">
            <Maximize className="h-3.5 w-3.5 text-gold-400" /> {listing.sqft.toLocaleString()} sqft
          </span>
        </div>

        <p className="mt-2 text-xs text-gray-500">{listing.type}</p>
      </div>
    </div>
  );
}
