import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import { clinic } from '../data/content.js'

export default function Navbar() {
  const { t, tr, toggle } = useLang()
  const [open, setOpen] = useState(false)

  const links = [
    ['#home', t.nav.home],
    ['#services', t.nav.services],
    ['#about', t.nav.about],
    ['#cases', t.nav.cases],
    ['#doctor', t.nav.doctor],
    ['#reviews', t.nav.reviews],
    ['#faq', t.nav.faq],
    ['#contact', t.nav.contact],
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold text-brand-900">
          <img src="/images/ClinicLogo.png" alt="Clinic Logo" className="h-12 w-12 rounded-xl bg-brand-550 text-xl" />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex" aria-label="Main">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="text-slate-600 transition hover:text-brand-600">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="rounded-full border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-600"
            aria-label="Switch language"
          >
            {t.lang}
          </button>
          <a
            href="#book"
            className="hidden rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 sm:inline-block"
          >
            {t.nav.book}
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white px-4 pb-4 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col py-2">
            {links.map(([href, label]) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-brand-50">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#book" onClick={() => setOpen(false)} className="block rounded-full bg-brand-600 px-5 py-3 text-center font-semibold text-white">
            {t.nav.book}
          </a>
        </nav>
      )}
    </header>
  )
}
