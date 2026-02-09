import { z } from 'zod';

export const leadSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[\d\s()+-]+$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email').or(z.literal('')).optional(),
  interestedIn: z.enum(['Buyer', 'Seller', 'Investor', 'Other']),
  message: z.string().optional(),
  preferredContactMethod: z.enum(['Call', 'Text', 'Email']),
  // Honeypot — must be empty
  website: z.string().max(0, 'Bot detected').optional(),
});

export type LeadFormData = z.infer<typeof leadSchema>;
