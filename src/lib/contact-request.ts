export interface ContactMessage {
  name: string
  email: string
  message: string
  website_hp?: string
}

type ContactResult = { ok: true } | { ok: false; message: string }

export async function sendContactMessage(data: ContactMessage, request: typeof fetch = fetch): Promise<ContactResult> {
  const fallback = 'Something went wrong while sending your message.'
  try {
    const response = await request('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (response.ok) return { ok: true }
    const body: unknown = await response.json().catch(() => null)
    const message = body && typeof body === 'object' && 'message' in body && typeof body.message === 'string'
      ? body.message : fallback
    return { ok: false, message }
  } catch {
    return { ok: false, message: fallback }
  }
}
