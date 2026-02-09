'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { leadSchema, type LeadFormData } from '@/lib/schemas';
import { CheckCircle, Loader2 } from 'lucide-react';

interface LeadFormProps {
  sourcePath: string;
  compact?: boolean;
}

export default function LeadForm({ sourcePath, compact = false }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      interestedIn: 'Buyer',
      message: '',
      preferredContactMethod: 'Call',
      website: '',
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    setServerError('');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, sourcePath }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Submission failed. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <CheckCircle className="mx-auto h-10 w-10 text-green-600" />
        <h3 className="mt-3 text-lg font-semibold text-navy-800">Thank you!</h3>
        <p className="mt-1 text-sm text-navy-500">
          We&apos;ll reach out within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-navy-700">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          placeholder="John Doe"
          className={`mt-1 block w-full rounded-lg border px-3 py-2.5 text-sm shadow-sm outline-none transition-all focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 ${
            errors.fullName ? 'border-red-400' : 'border-warm-200'
          }`}
          {...register('fullName')}
        />
        {errors.fullName && (
          <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-navy-700">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="(208) 555-1234"
          className={`mt-1 block w-full rounded-lg border px-3 py-2.5 text-sm shadow-sm outline-none transition-all focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 ${
            errors.phone ? 'border-red-400' : 'border-warm-200'
          }`}
          {...register('phone')}
        />
        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy-700">
          Email <span className="text-navy-300">(recommended)</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@email.com"
          className={`mt-1 block w-full rounded-lg border px-3 py-2.5 text-sm shadow-sm outline-none transition-all focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 ${
            errors.email ? 'border-red-400' : 'border-warm-200'
          }`}
          {...register('email')}
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>

      {/* Interested In */}
      <div>
        <label htmlFor="interestedIn" className="block text-sm font-medium text-navy-700">
          I&apos;m Interested In
        </label>
        <select
          id="interestedIn"
          className="mt-1 block w-full rounded-lg border border-warm-200 bg-white px-3 py-2.5 text-sm shadow-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
          {...register('interestedIn')}
        >
          <option value="Buyer">Buying a Home</option>
          <option value="Seller">Selling a Home</option>
          <option value="Investor">Real Estate Investing</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Preferred Contact Method */}
      <div>
        <label htmlFor="preferredContactMethod" className="block text-sm font-medium text-navy-700">
          Preferred Contact Method
        </label>
        <select
          id="preferredContactMethod"
          className="mt-1 block w-full rounded-lg border border-warm-200 bg-white px-3 py-2.5 text-sm shadow-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
          {...register('preferredContactMethod')}
        >
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Email">Email</option>
        </select>
      </div>

      {/* Message */}
      {!compact && (
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-navy-700">
            Message <span className="text-navy-300">(optional)</span>
          </label>
          <textarea
            id="message"
            rows={3}
            placeholder="Tell us a little about what you're looking for..."
            className="mt-1 block w-full rounded-lg border border-warm-200 px-3 py-2.5 text-sm shadow-sm outline-none transition-all focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
            {...register('message')}
          />
        </div>
      )}

      {serverError && (
        <p className="rounded-md bg-red-50 p-3 text-sm text-red-700">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-900 shadow-sm transition-all hover:bg-gold-400 hover:shadow-md disabled:opacity-60"
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
