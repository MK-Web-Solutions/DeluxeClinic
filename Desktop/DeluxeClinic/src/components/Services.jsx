
import { useLang } from '../i18n.jsx'
import { services } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'
import {
  Stethoscope,
  Scan,
  HeartPulse,
  Sparkles,
  Smile,
  Baby,
} from 'lucide-react'

const serviceIcons = {
  stethoscope: Stethoscope,
  scan: Scan,
  'heart-pulse': HeartPulse,
  sparkles: Sparkles,
  smile: Smile,
  baby: Baby,
}

export default function Services() {
  const { t, tr } = useLang()

  return (
    <section
      id="services"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
    >
      <SectionHeading {...t.sections.services} />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = serviceIcons[s.icon] || Stethoscope

          return (
            <article
              key={s.title.en}
              className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-100">
                <Icon
                  size={25}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-4 text-lg font-bold text-brand-900">
                {tr(s.title)}
              </h3>

              <p className="mt-2 leading-relaxed text-slate-600">
                {tr(s.text)}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}