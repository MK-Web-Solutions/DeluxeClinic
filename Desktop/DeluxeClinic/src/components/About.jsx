
import { useLang } from '../i18n.jsx'
import { whyUs } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

export default function About() {
  const { t, tr } = useLang()

  return (
    <section id="about" className="bg-[#f7f6f2] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">

        {/* Centred introduction */}
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading {...t.sections.about} center />

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
            {tr(t.sections.about.text)}
          </p>
        </div>

        {/* Reasons to choose us */}
        <div className="mx-auto mt-14 max-w-3xl border-t border-[#dedbd3]">
          {whyUs.map((item, index) => (
            <article
              key={item.title.en}
              className="grid grid-cols-[2rem_1fr] gap-4 border-b border-[#dedbd3] py-6 sm:grid-cols-[2.5rem_1fr] sm:gap-6"
            >
              <span className="pt-0.5 text-sm tabular-nums text-brand-600">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div>
                <h3 className="text-base font-semibold text-brand-900 sm:text-lg">
                  {tr(item.title)}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                  {tr(item.text)}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
