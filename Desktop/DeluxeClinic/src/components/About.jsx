 import { useLang } from '../i18n.jsx'
import { whyUs } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

export default function About() {
  const { t, tr } = useLang()

  return (
    <section id="about" className="bg-brand-50 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">

        {/* About illustration */}
        <div className="relative">
          <div className="about-art grid min-h-[320px] place-items-center rounded-[2rem] p-8">
            <div className="about-art-card max-w-xs rounded-2xl bg-white p-6 shadow-xl">
              <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-brand-100 text-brand-600">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M12 3c-2-1.5-6-1-7 2-2 5 2 8 3 13 .5 2 2 3 3 1l1-5 1 5c1 2 2.5 1 3-1 1-5 5-8 3-13-1-3-5-3.5-7-2Z" />
                </svg>
              </div>

              <p className="font-display text-xl font-bold text-brand-900">
                {tr(t.sections.about.title)}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {tr(t.sections.about.text)}
              </p>
            </div>
          </div>
        </div>

        {/* About content */}
        <div>
          <SectionHeading {...t.sections.about} center={false} />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {whyUs.map((item) => (
              <article
                key={item.title.en}
                className="rounded-2xl border border-brand-100 bg-white p-5 shadow-sm transition-colors duration-200 hover:border-brand-200"
              >
                <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand-600">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </span>

                <h3 className="font-bold text-brand-900">
                  {tr(item.title)}
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {tr(item.text)}
                </p>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
 