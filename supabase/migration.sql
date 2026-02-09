-- Create leads table for Le Group Realty
-- Run this in Supabase SQL Editor (or via migration)

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  full_name text not null,
  phone text not null,
  email text,
  interested_in text,
  message text,
  preferred_contact_method text,
  source_path text,
  user_agent text
);

-- Enable Row Level Security
alter table public.leads enable row level security;

-- Allow inserts from the anonymous key (public website submissions)
create policy "Allow anonymous lead inserts"
  on public.leads
  for insert
  to anon
  with check (true);

-- Only allow service role to read leads (for admin/backend use)
create policy "Service role can read leads"
  on public.leads
  for select
  to service_role
  using (true);
