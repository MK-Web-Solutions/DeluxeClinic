import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import { clinic, services } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

const empty = { name: '', phone: '', date: '', time: '', service: '', brief: '', urgent: false }

// Accepts local or international numbers: 7–15 digits, optional leading +
const phoneOk = (v) => /^\+?[0-9\s\-()]{7,20}$/.test(v.trim()) && v.replace(/\D/g, '').length >= 7

// Defined at module level so React keeps the same component between renders
// (defining it inside BookingForm would remount inputs and drop focus while typing)
function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={`f-${id}`} className="text-sm font-semibold text-brand-900">{label}</label>
      {children}
      {error && (
        <p id={`e-${id}`} role="alert" className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

function todayISO() {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

export default function BookingForm() {
  const { t, tr, lang } = useLang()
  const f = t.form
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [waLink, setWaLink] = useState('')

  const set = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setValues((v) => ({ ...v, [key]: value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const validate = () => {
    const er = {}
    if (values.name.trim().length < 2) er.name = f.errors.name
    if (!phoneOk(values.phone)) er.phone = f.errors.phone
    if (!values.date) er.date = f.errors.date
    if (!values.time) er.time = f.errors.time
    if (values.brief.trim().length < 5) er.brief = f.errors.brief
    return er
  }

  const buildLink = () => {
    const m = f.message
    const picked = services.find((s) => s.title.en === values.service)
    const serviceLabel = picked ? tr(picked.title) : f.other
    const lines = [
      m.intro,
      values.urgent ? `⚠️ ${m.urgent}` : null,
      '',
      `${m.name}: ${values.name.trim()}`,
      `${m.phone}: ${values.phone.trim()}`,
      `${m.date}: ${values.date}`,
      `${m.time}: ${f.times[values.time]}`,
      `${m.service}: ${serviceLabel}`,
      `${m.case}: ${values.brief.trim()}`,
    ].filter((l) => l !== null)
    return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const er = validate()
    setErrors(er)
    if (Object.keys(er).length) {
      // focus first invalid field for keyboard and screen-reader users
      const first = Object.keys(er)[0]
      document.getElementById(`f-${first}`)?.focus()
      return
    }
    const link = buildLink()
    setWaLink(link)
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  const reset = () => {
    setValues(empty)
    setErrors({})
    setWaLink('')
  }

  const inputCls = (key) =>
    `mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
      errors[key]
        ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
        : 'border-slate-200 focus:border-brand-500 focus:ring-brand-100'
    }`

  return (
    <section id="book" className="bg-gradient-to-b from-white to-brand-50 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading {...t.sections.booking} />

        <div className="mt-10 rounded-3xl bg-white p-6 shadow-xl shadow-brand-600/10 ring-1 ring-brand-100 sm:p-10">
          {waLink ? (
            <div className="py-6 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-mint-100 text-3xl">✅</div>
              <h3 className="mt-4 text-2xl font-bold text-brand-900">{f.successTitle}</h3>
              <p className="mx-auto mt-2 max-w-md text-slate-600">{f.successText}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:brightness-95">
                  {f.openAgain}
                </a>
                <button onClick={reset} className="rounded-full border border-slate-200 px-6 py-3 font-semibold text-slate-700 hover:border-brand-500">
                  {f.newRequest}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label={f.name} error={errors.name}>
                <input id="f-name" value={values.name} onChange={set('name')} placeholder={f.namePh} autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'e-name' : undefined} className={inputCls('name')} />
              </Field>

              <Field id="phone" label={f.phone} error={errors.phone}>
                <input id="f-phone" type="tel" inputMode="tel" dir="ltr" value={values.phone} onChange={set('phone')} placeholder={f.phonePh} autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'e-phone' : undefined} className={`${inputCls('phone')} ${lang === 'ar' ? 'text-end' : ''}`} />
              </Field>

              <Field id="date" label={f.date} error={errors.date}>
                <input id="f-date" type="date" min={todayISO()} value={values.date} onChange={set('date')} aria-invalid={!!errors.date} aria-describedby={errors.date ? 'e-date' : undefined} className={inputCls('date')} />
              </Field>

              <Field id="time" label={f.time} error={errors.time}>
                <select id="f-time" value={values.time} onChange={set('time')} aria-invalid={!!errors.time} aria-describedby={errors.time ? 'e-time' : undefined} className={inputCls('time')}>
                  <option value="">—</option>
                  {Object.entries(f.times).map(([k, label]) => (
                    <option key={k} value={k}>{label}</option>
                  ))}
                </select>
              </Field>

              <div className="sm:col-span-2">
                <Field id="service" label={f.service} error={errors.service}>
                  <select id="f-service" value={values.service} onChange={set('service')} className={inputCls('service')}>
                    <option value="">{f.servicePh}</option>
                    {services.map((s) => (
                      <option key={s.title.en} value={s.title.en}>{tr(s.title)}</option>
                    ))}
                    <option value="other">{f.other}</option>
                  </select>
                </Field>
              </div>

              <div className="sm:col-span-2">
                <Field id="brief" label={f.brief} error={errors.brief}>
                  <textarea id="f-brief" rows={4} maxLength={600} value={values.brief} onChange={set('brief')} placeholder={f.briefPh} aria-invalid={!!errors.brief} aria-describedby={errors.brief ? 'e-brief' : undefined} className={inputCls('brief')} />
                </Field>
              </div>

              <label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-slate-700 sm:col-span-2">
                <input type="checkbox" checked={values.urgent} onChange={set('urgent')} className="h-5 w-5 rounded border-slate-300 accent-brand-600" />
                {f.urgent}
              </label>

              <div className="sm:col-span-2">
                <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-lg font-bold text-white shadow-lg shadow-green-500/25 transition hover:-translate-y-0.5 hover:brightness-95">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2 1.3 2.3 1.4.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.8-.1 1.4z" /></svg>
                  {f.submit}
                </button>
                <p className="mt-3 text-center text-xs text-slate-500">{f.privacy}</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
