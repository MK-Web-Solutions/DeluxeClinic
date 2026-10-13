import { useLang } from '../i18n.jsx'
import { clinic } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

export default function Contact() {
  const { t, tr } = useLang()
  const c = t.sections.contact
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.mapQuery)}`

  const rows = [
    ['📍', c.address, tr(clinic.address)],
    ['📞', c.phone, <a key="p" dir="ltr" href={`tel:${clinic.phoneDisplay.replace(/\s/g, '')}`} className="hover:text-brand-600">{clinic.phoneDisplay}</a>],
    ['✉️', c.email, <a key="e" href={`mailto:${clinic.email}`} className="hover:text-brand-600">{clinic.email}</a>],
  ]

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="space-y-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          {rows.map(([icon, label, value]) => (
            <div key={label} className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-xl">{icon}</span>
              <div>
                <div className="text-sm font-semibold text-brand-900">{label}</div>
                <div className="text-slate-600">{value}</div>
              </div>
            </div>
          ))}
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-xl">🕒</span>
            <div className="flex-1">
              <div className="text-sm font-semibold text-brand-900">{c.hours}</div>
              <ul className="mt-1 space-y-1 text-slate-600">
                {clinic.hours.map((h) => (
                  <li key={h.days.en} className="flex justify-between gap-4">
                    <span>{tr(h.days)}</span>
                    <span className="font-medium">{tr(h.time)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative grid min-h-64 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-100 to-mint-100 ring-1 ring-brand-100"
        >
          <div className="text-center">
            <div className="text-6xl transition group-hover:scale-110">📍</div>
            <span className="mt-3 inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-brand-700 shadow">
              {c.map} ↗
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}
