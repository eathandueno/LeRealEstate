'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/listings', label: 'Listings' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-black/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-black/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex flex-col" onClick={() => setOpen(false)}>
          <span className="text-xl font-bold tracking-tight text-white">Le Group Realty</span>
          <span className="text-[11px] leading-tight text-gold-400">
            Associated with 208 Real Estate
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-400 transition-colors hover:text-gold-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="rounded-lg bg-gold-500 px-4 py-2 text-sm font-semibold text-black shadow-sm transition-all hover:bg-gold-400 hover:shadow-md"
            >
              Get in Touch
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-neutral-800 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-neutral-800 bg-black md:hidden">
          <ul className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-neutral-800"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="mt-2 block rounded-lg bg-gold-500 px-4 py-2.5 text-center text-sm font-semibold text-black"
                onClick={() => setOpen(false)}
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
