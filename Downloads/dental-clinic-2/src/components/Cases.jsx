
import { useLang } from '../i18n.jsx'
import { cases } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

export default function Cases() {
  const { t, lang } = useLang()
  const isArabic = lang === 'ar'

  return (
    <section
      id="cases"
      dir={isArabic ? 'rtl' : 'ltr'}
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
    >
      <SectionHeading {...t.sections.cases} />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((item) => (
          <article
            key={item.number}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="grid aspect-[5/3] grid-cols-2 gap-1 bg-slate-100">
              {[
                {
                  src: item.imageBefore,
                  label: isArabic ? 'قبل العلاج' : 'Before',
                },
                {
                  src: item.imageAfter,
                  label: isArabic ? 'بعد العلاج' : 'After',
                },
              ].map((image) => (
                <div
                  key={image.label}
                  className="relative grid place-items-center overflow-hidden bg-slate-100"
                >
                  {image.src ? (
                    <img
                      src={image.src}
                      alt={`${isArabic ? item.title.ar : item.title.en} - ${image.label}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-sm text-slate-400">
                      {image.label}
                    </span>
                  )}

                  <span className="absolute bottom-2 start-2 rounded bg-white/90 px-2 py-1 text-xs font-medium text-slate-700">
                    {image.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-brand-900">
                {isArabic ? item.title.ar : item.title.en}
              </h3>

              <p className="mt-2 text-sm font-medium text-brand-600">
                {isArabic ? item.treatment.ar : item.treatment.en}
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {isArabic ? item.description.ar : item.description.en}
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 text-center text-xs leading-6 text-slate-500">
        {isArabic
          ? 'تختلف خطط العلاج والنتائج حسب حالة كل مريض.'
          : 'Treatment plans and outcomes vary for each patient.'}
      </p>
    </section>
  )
}