import { useLang } from '../i18n.jsx'
import { testimonials } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

export default function Testimonials() {
  const { t, tr } = useLang()

  return (
    <section id="reviews" className="bg-brand-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading {...t.sections.reviews} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((r) => (
            <figure key={r.name.en} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-100">
              <div aria-label="5 stars" className="text-amber-400">★★★★★</div>
              <blockquote className="mt-3 flex-1 leading-relaxed text-slate-700">“{tr(r.text)}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-100 font-bold text-brand-700">
                  {tr(r.name).charAt(0)}
                </span>
                <span className="text-sm font-semibold text-brand-900">{tr(r.name)}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
