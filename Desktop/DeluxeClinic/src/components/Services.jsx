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

    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading {...t.sections.services} center />
      </div>

        <div className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, index) => {
            const Icon = serviceIcons[s.icon] || Stethoscope

            return (
              <article
                key={s.title.en}
                className="group flex gap-4 border-t border-[#e8e5df] py-7 sm:py-8"
              >
                <div className="mt-1 shrink-0 text-brand-600">
                  <Icon
                    size={23}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <div className="min-w-0">
                  <span className="text-xs font-medium tracking-[0.12em] text-slate-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3 className="mt-2 text-lg font-semibold leading-snug text-brand-900">
                    {tr(s.title)}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                    {tr(s.text)}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-5 border-t border-[#e8e5df]" />
      </div>
    </section>
  )
}