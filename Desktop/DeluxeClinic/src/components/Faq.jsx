import { useLang } from '../i18n.jsx'
import { faqs } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

export default function Faq() {
  const { t, tr } = useLang()

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <SectionHeading {...t.sections.faq} />
      <div className="mt-10 space-y-3">
        {faqs.map((f) => (
          <details key={f.q.en} className="group rounded-xl border border-slate-200 bg-white p-5 open:border-brand-200 open:shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-brand-900">
              {tr(f.q)}
              <span aria-hidden className="text-xl text-brand-600 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 leading-relaxed text-slate-600">{tr(f.a)}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
