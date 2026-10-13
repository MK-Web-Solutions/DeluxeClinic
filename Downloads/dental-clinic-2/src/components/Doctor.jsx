
import { useLang } from '../i18n.jsx'
import { doctors } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

export default function Doctor() {
  const { t, tr, lang } = useLang()

  const isArabic = lang === 'ar'

  return (
    <section
      id="doctor"
      dir={isArabic ? 'rtl' : 'ltr'}
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
    >
      <SectionHeading {...t.sections.doctor} />

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor, index) => (
          <article
            key={doctor.name.en}
            className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="grid aspect-[4/3] place-items-center overflow-hidden bg-gradient-to-br from-mint-100 to-brand-100">
              {doctor.photo ? (
                <img
                  src={doctor.photo}
                  alt={tr(doctor.name)}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <span aria-hidden="true" className="text-8xl">
                  {index === 0 ? '👩‍⚕️' : '👨‍⚕️'}
                </span>
              )}
            </div>

            <div className="p-6">
              {index === 2 && (
                <span className="mb-3 inline-block rounded-full bg-mint-100 px-3 py-1 text-xs font-semibold text-brand-700">
                  {isArabic ? 'مؤسس العيادة' : 'Clinic Founder'}
                </span>
              )}

              <h3 className="text-xl font-bold text-brand-900">
                {tr(doctor.name)}
              </h3>

              <p className="mt-2 font-medium text-brand-600">
                {tr(doctor.title)}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {tr(doctor.bio)}
              </p>

              <ul className="mt-5 space-y-3">
                {doctor.credentials[lang].map((credential) => (
                  <li
                    key={credential}
                    className="flex items-start gap-2 text-sm leading-6 text-slate-700"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint-100 text-xs text-mint-600"
                    >
                      ✓
                    </span>
                    <span>{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}