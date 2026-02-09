import { NextRequest, NextResponse } from 'next/server';
import { leadSchema } from '@/lib/schemas';
import { supabaseAdmin } from '@/lib/supabase-server';
import { checkRateLimit } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  // Rate limiting
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0]?.trim() ?? 'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in a minute.' },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  // Validate
  const result = leadSchema.safeParse(body);
  if (!result.success) {
    const firstError = result.error.issues[0]?.message ?? 'Validation failed.';
    return NextResponse.json({ error: firstError }, { status: 422 });
  }

  const data = result.data;

  // Honeypot check
  if (data.website && data.website.length > 0) {
    // Silently accept to not tip off bots, but don't store
    return NextResponse.json({ ok: true });
  }

  const sourcePath =
    (body as Record<string, unknown>).sourcePath?.toString() ?? '/';
  const userAgent = request.headers.get('user-agent') ?? '';

  // Attempt Supabase insert
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
  if (supabaseUrl && supabaseUrl !== 'https://your-project.supabase.co') {
    const { error: dbError } = await supabaseAdmin.from('leads').insert({
      full_name: data.fullName,
      phone: data.phone,
      email: data.email ?? null,
      interested_in: data.interestedIn,
      message: data.message ?? null,
      preferred_contact_method: data.preferredContactMethod,
      source_path: sourcePath,
      user_agent: userAgent,
    });

    if (dbError) {
      console.error('[leads] Supabase insert error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save your information. Please try again.' },
        { status: 500 },
      );
    }
  } else {
    // Supabase not configured — log to console
    console.log('[leads] New lead (Supabase not configured):', {
      ...data,
      sourcePath,
      userAgent,
      timestamp: new Date().toISOString(),
    });
  }

  // Email notification placeholder
  // TODO: Integrate with a transactional email service (Resend, SendGrid, etc.)
  console.log('[leads] Email notification would be sent for:', data.fullName, data.phone);

  return NextResponse.json({ ok: true });
}
