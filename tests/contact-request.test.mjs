import assert from 'node:assert/strict'
import test from 'node:test'
import { sendContactMessage } from '../src/lib/contact-request.ts'

const data = { name: 'Preview Tester', email: 'preview@example.com', message: 'A mocked enquiry.', website_hp: '' }

test('successful submission preserves the existing endpoint, method, fields, and honeypot', async () => {
  let received
  const result = await sendContactMessage(data, async (url, options) => {
    received = { url, options }
    return new Response('{}', { status: 200 })
  })
  assert.deepEqual(result, { ok: true })
  assert.equal(received.url, '/api/send')
  assert.equal(received.options.method, 'POST')
  assert.equal(received.options.headers['Content-Type'], 'application/json')
  assert.deepEqual(JSON.parse(received.options.body), data)
})

test('a server rejection exposes its message to the existing error UI', async () => {
  const result = await sendContactMessage(data, async () => new Response(JSON.stringify({ message: 'Please try again shortly.' }), { status: 429 }))
  assert.deepEqual(result, { ok: false, message: 'Please try again shortly.' })
})

test('non-JSON errors produce a useful error rather than an exception', async () => {
  const result = await sendContactMessage(data, async () => new Response('Unavailable', { status: 503 }))
  assert.equal(result.ok, false)
  assert.ok(result.message.length > 0)
})

test('network failure can be retried with the unchanged form data', async () => {
  const before = { ...data }
  const result = await sendContactMessage(data, async () => { throw new Error('Offline') })
  assert.equal(result.ok, false)
  assert.deepEqual(data, before)
  const retry = await sendContactMessage(data, async () => new Response('{}', { status: 200 }))
  assert.deepEqual(retry, { ok: true })
})
