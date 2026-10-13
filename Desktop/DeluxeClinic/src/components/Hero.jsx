import { useLang } from '../i18n.jsx'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section id="home" className="bg-[#faf9f6]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-[0.9fr_1.1fr] md:gap-14 md:px-10 md:py-20 lg:gap-20 lg:py-24">

        {/* Editorial text column */}
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-brand-600" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 sm:text-sm">
              {h.badge}
            </p>
          </div>

          <h1 className="mt-7 max-w-lg font-display text-[2.65rem] font-medium leading-[1.15] tracking-[-0.035em] text-brand-900 sm:text-5xl lg:text-[3.75rem]">
            {h.title}
          </h1>

          <p className="mt-6 max-w-md text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
            {h.text}
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="#book"
              className="inline-flex min-h-13 rounded-full items-center justify-center bg-brand-600 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
            >
              {h.cta}
            </a>

            <a
              href="#services"
              className="group inline-flex items-center gap-2 py-3 text-sm font-semibold text-brand-800 transition-colors hover:text-brand-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
            >
              {h.secondary}
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
              >
                <path
                  d="M4 10h12m-5-5 5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Clinic benefits */}
          <div className="mt-10 border-t border-[#e4e1da] pt-5">
            <ul className="grid gap-3 sm:grid-cols-2">
              {h.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Prominent clinic photograph */}
        <div className="relative min-w-0">
          <div className="overflow-hidden bg-[#eeece6]">
            <img
              src="images/Mainroom.png"
              alt="Interior of Deluxe Dental Clinic"
              fetchPriority="high"
              className="aspect-[4/4.5] w-full object-cover sm:aspect-[5/4.5] rounded md:aspect-[4/5]"
            />
          </div>

          <div className="mt-4 flex items-center justify-between gap-4 border-b border-[#e4e1da] pb-3">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
              Deluxe Dental Clinic Main Room
            </p>
            <span className="h-px w-10 bg-brand-600" />
          </div>
        </div>

      </div>
    </section>
  )
}