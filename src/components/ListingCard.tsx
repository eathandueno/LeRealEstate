import { Bed, Bath, Maximize, MapPin } from 'lucide-react';
import type { Listing } from '@/data/listings';

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);
}

const statusColors: Record<Listing['status'], string> = {
  Active: 'bg-green-100 text-green-800',
  Pending: 'bg-gold-100 text-gold-800',
  Sold: 'bg-navy-100 text-navy-600',
};

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-warm-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      {/* Image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-navy-100 to-navy-200">
        <div className="flex h-full items-center justify-center text-sm text-navy-400">
          Photo Coming Soon
        </div>
        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-xs font-medium shadow-sm ${statusColors[listing.status]}`}
        >
          {listing.status}
        </span>
      </div>

      <div className="p-4">
        <p className="text-xl font-bold text-navy-800">{formatPrice(listing.price)}</p>
        <p className="mt-1 text-sm font-medium text-navy-700">{listing.address}</p>
        <p className="flex items-center gap-1 text-xs text-navy-400">
          <MapPin className="h-3 w-3" />
          {listing.city}, {listing.state} {listing.zip}
        </p>

        <div className="mt-3 flex items-center gap-4 border-t border-warm-200 pt-3 text-xs text-navy-500">
          <span className="flex items-center gap-1">
            <Bed className="h-3.5 w-3.5 text-gold-600" /> {listing.beds} Beds
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-3.5 w-3.5 text-gold-600" /> {listing.baths} Baths
          </span>
          <span className="flex items-center gap-1">
            <Maximize className="h-3.5 w-3.5 text-gold-600" /> {listing.sqft.toLocaleString()} sqft
          </span>
        </div>

        <p className="mt-2 text-xs text-navy-300">{listing.type}</p>
      </div>
    </div>
  );
}
