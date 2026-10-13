import { useLang } from '../i18n.jsx'
import { doctor, doctors } from '../data/content.js'

export default function Hero() {
  const { t, tr } = useLang()
  const h = t.hero

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div aria-hidden className="pointer-events-none absolute -top-24 -end-24 h-96 w-96 rounded-full bg-brand-100/70 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -start-24 h-80 w-80 rounded-full bg-mint-100/80 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm ring-1 ring-brand-100">
            <span className="h-2 w-2 rounded-full bg-mint-500" /> {h.badge}
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-brand-900 sm:text-5xl lg:text-6xl">
            {h.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">{h.text}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#book" className="rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:-translate-y-0.5 hover:bg-brand-700">
              {h.cta}
            </a>
            <a href="#services" className="rounded-full border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-600">
              {h.secondary}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
            {h.points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-mint-100 text-xs text-mint-500">✓</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Decorative card: swap for a real clinic photo whenever you have one */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="grid aspect-[4/5] place-items-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-200 to-brand-100 shadow-2xl shadow-brand-600/20">
            <span aria-hidden className="text-[9rem] drop-shadow-lg">😁</span>
          </div>
          <div className="absolute -bottom-5 start-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-100">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-mint-100 text-xl">⭐</span>

            <div className="text-sm font-bold text-brand-900">
              {tr(doctor.name)}
            </div>
            <div className="text-xs text-slate-500">
              {tr(doctor.title)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
