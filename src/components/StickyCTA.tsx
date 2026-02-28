'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-800 bg-black p-3 shadow-lg md:hidden">
      <Link
        href="/contact"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold-500 px-4 py-3 text-sm font-semibold text-black shadow-sm transition-all hover:bg-gold-400"
      >
        <Phone className="h-4 w-4" />
        Contact Us Today
      </Link>
    </div>
  );
}
