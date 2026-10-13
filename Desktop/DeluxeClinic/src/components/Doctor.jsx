
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
            className="overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm transition-all duration-200 hover:border-brand-200 hover:shadow-lg"
          >
            {/* Doctor photo or placeholder */}
            <div className="grid aspect-[4/3] place-items-center overflow-hidden bg-gradient-to-br from-brand-50 via-brand-100 to-brand-200">
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

            {/* Doctor details */}
            <div className="p-6">

              {index === 2 && (
                <span className="mb-3 inline-block rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
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

              {/* Credentials */}
              <ul className="mt-5 space-y-3">
                {doctor.credentials[lang].map((credential) => (
                  <li
                    key={credential}
                    className="flex items-start gap-2 text-sm leading-6 text-slate-700"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-xs font-bold text-brand-700"
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
 