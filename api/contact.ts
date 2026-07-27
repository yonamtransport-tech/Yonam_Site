import type { VercelRequest, VercelResponse } from '@vercel/node'

const RESEND_API_URL = 'https://api.resend.com/emails'
const TO_EMAIL = 'support@yonam.sn'
const FROM_EMAIL = 'helper@yonam.sn'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body ?? {}

  if (
    typeof name !== 'string' || !name.trim() ||
    typeof email !== 'string' || !email.trim() ||
    typeof message !== 'string' || !message.trim()
  ) {
    return res.status(400).json({ error: 'Champs requis manquants' })
  }

  if (!EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ error: 'Email invalide' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured')
    return res.status(500).json({ error: 'Configuration serveur manquante' })
  }

  const safeSubject = (typeof subject === 'string' && subject.trim()) || 'Nouveau message depuis le site Andal'

  try {
    const resendResponse = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Andal <${FROM_EMAIL}>`,
        to: [TO_EMAIL],
        reply_to: email,
        subject: safeSubject,
        html: `
          <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
          <p><strong>Email :</strong> ${escapeHtml(email)}</p>
          <p><strong>Sujet :</strong> ${escapeHtml(safeSubject)}</p>
          <p><strong>Message :</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
        `,
      }),
    })

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text()
      console.error('Resend error', resendResponse.status, errorBody)
      return res.status(502).json({ error: "Echec de l'envoi de l'email" })
    }

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact form error', error)
    return res.status(500).json({ error: 'Erreur serveur' })
  }
}
