import { NextResponse } from 'next/server';
import { Resend } from 'resend';

type ContactPayload = {
  name?: unknown
  email?: unknown
  message?: unknown
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getMissingConfigKeys() {
  return ['RESEND_API_KEY', 'CONTACT_EMAIL', 'RESEND_FROM_EMAIL'].filter(
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
  const name = typeof payload.name === 'string' ? payload.name.trim() : ''
  const email = typeof payload.email === 'string' ? payload.email.trim() : ''
  const message =
    typeof payload.message === 'string' ? payload.message.trim() : ''

  if (!name || !emailPattern.test(email) || !message) {
    return null
  }

  return { name, email, message }
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

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { name, email, message } = payload
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL as string,
      to: [process.env.CONTACT_EMAIL as string],
      subject: `New Message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Message from Portfolio</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
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
