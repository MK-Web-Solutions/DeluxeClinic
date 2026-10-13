import { useLang } from '../i18n.jsx'
import { clinic } from '../data/content.js'

export default function Footer() {
const { tr, lang } = useLang()
const isArabic = lang === 'ar'

return (
<footer
dir={isArabic ? 'rtl' : 'ltr'}
className="border-t border-slate-100 bg-slate-50 py-8 pb-24 text-center text-sm text-slate-500 sm:pb-8"
>  
  <p className="mt-1 text-xs text-slate-400">
    {isArabic
      ? 'رعايتكم بصحة أسنانكم هي أولويتنا.'
      : 'Your dental health is our priority.'}
  </p>

  <p className="mt-3 text-xs text-slate-400">
    {isArabic ? 'تصميم وتطوير ' : 'Designed and developed by '}
    <span className="font-medium text-slate-500">
      MK Web Solutions
    </span>
    {' '}© {new Date().getFullYear()}.{' '}
    {isArabic ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
  </p>
</footer>

)
}
