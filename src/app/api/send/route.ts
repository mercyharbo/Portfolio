import { NextResponse } from 'next/server';
import { Resend } from 'resend';

type ContactPayload = {
  name?: unknown
  email?: unknown
  message?: unknown
  website_hp?: unknown
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const DEFAULT_FROM_EMAIL = 'Code With Mercy <contact@codewithmercy.codes>'

function getMissingConfigKeys() {
  return ['RESEND_API_KEY', 'CONTACT_EMAIL'].filter(
    (key) => !process.env[key]
  )
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function normalizePayload(payload: ContactPayload) {
  // Honeypot check: if filled, treat as bot submission
  if (typeof payload.website_hp === 'string' && payload.website_hp.trim().length > 0) {
    return { isBot: true } as const
  }

  const name = typeof payload.name === 'string' ? payload.name.trim() : ''
  const email = typeof payload.email === 'string' ? payload.email.trim() : ''
  const message =
    typeof payload.message === 'string' ? payload.message.trim() : ''

  if (!name || !emailPattern.test(email) || !message) {
    return null
  }

  return { isBot: false, name, email, message } as const
}

export async function POST(request: Request) {
  try {
    const missingConfigKeys = getMissingConfigKeys()

    if (missingConfigKeys.length > 0) {
      console.error('Contact form missing server configuration', {
        missingConfigKeys,
      })

      return NextResponse.json(
        { message: 'Contact form is not configured correctly.' },
        { status: 500 }
      )
    }

    const payload = normalizePayload(await request.json())

    if (!payload) {
      return NextResponse.json(
        { message: 'Please provide a valid name, email, and message.' },
        { status: 400 }
      )
    }

    // Silently succeed for bot submissions without hitting Resend or using quota
    if (payload.isBot) {
      console.warn('Blocked automated bot submission via honeypot field')
      return NextResponse.json({ message: 'Message sent successfully.' })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const fromEmail = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL
    const contactEmail = process.env.CONTACT_EMAIL as string
    const { name, email, message } = payload

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'UTC',
      dateStyle: 'medium',
      timeStyle: 'short',
    })

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      subject: `New Message from ${name} [${timestamp} UTC]`,
      replyTo: email,
      text: `New Message from Portfolio\n\nName: ${name}\nEmail: ${email}\nDate: ${timestamp} UTC\n\nMessage:\n${message}`,
      html: `
        <h2>New Message from Portfolio</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Date:</strong> ${timestamp} UTC</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    if (error) {
      console.error('Resend rejected contact form email', {
        name: error.name,
        message: error.message,
      })

      return NextResponse.json(
        { message: 'Unable to send message right now.' },
        { status: 500 }
      );
    }

    console.log('Contact form email dispatched successfully', {
      id: data?.id,
      to: contactEmail,
    })

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Contact form request failed', {
      message: error instanceof Error ? error.message : 'Unknown error',
    })

    return NextResponse.json(
      { message: 'Unable to send message right now.' },
      { status: 500 }
    );
  }
}
