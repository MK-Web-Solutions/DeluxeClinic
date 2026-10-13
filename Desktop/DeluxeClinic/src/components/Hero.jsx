import { useLang } from '../i18n.jsx'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white"
    >
      {/* Decorative background shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -end-24 h-96 w-96 rounded-full bg-brand-200/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -start-24 h-80 w-80 rounded-full bg-brand-100/80 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        {/* Hero content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm ring-1 ring-brand-100">
            <span className="h-2 w-2 rounded-full bg-brand-600" />
            {h.badge}
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-brand-900 sm:text-5xl lg:text-6xl">
            {h.title}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            {h.text}
          </p>

          {/* Call-to-action buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#book"
              className="rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition duration-200 hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              {h.cta}
            </a>

            <a
              href="#services"
              className="rounded-full border border-brand-200 bg-white px-7 py-3.5 font-semibold text-brand-700 transition duration-200 hover:border-brand-500 hover:bg-brand-50 hover:text-brand-800"
            >
              {h.secondary}
            </a>
          </div>

          {/* Key benefits */}
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
            {h.points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Clinic image */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="grid aspect-[4/5] place-items-center overflow-hidden rounded-[2rem] border border-brand-100 bg-gradient-to-br from-brand-50 to-brand-200 shadow-2xl shadow-brand-600/20">
            <img
              src="images/Mainroom.png"
              alt="Clinic"
              className="h-full w-full rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
 