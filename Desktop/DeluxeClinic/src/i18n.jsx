import { createContext, useContext, useEffect, useMemo, useState } from 'react'

// UI strings (content such as services/doctor lives in src/data/content.js)
const ui = {
  en: {
    nav: { home: 'Home', services: 'Services', about: 'About', cases: 'Cases', doctor: 'Our Doctors', reviews: 'Reviews', faq: 'FAQ', contact: 'Contact', book: 'Book now' },
    hero: {
      badge: 'Personalised Dental Care',
      title: 'Your Smile, Our Expertise',
      text: 'Personalised dental care to keep you smiling with confidence. From routine check-ups to advanced treatments, our team is here to make every visit comfortable and every decision clear.',
      cta: 'Book Your Appointment',
      secondary: 'Explore Our Services',
      points: [
        'Experienced Specialists',
        'Gentle, Personalised Care',
        'Clear Treatment Plans',
      ],
    },
    sections: {
      services: { eyebrow: 'What we do', title: 'Complete dental care under one roof' },
      about: { eyebrow: 'A little about us', title: 'Comfortable care, made around you', text: 'We want every visit to feel calm, clear and personal. We take time to understand your needs, explain your options and help you choose the right next step for your smile.' },
      cases: { eyebrow: 'Smile transformations', title: 'Small changes can make a big difference', text: 'Explore examples of the kinds of smile improvements our team can help patients discuss. Individual results vary and every treatment starts with a consultation.' },
      why: { eyebrow: 'Why choose us', title: 'Care that feels different' },
      doctor: { eyebrow: 'Meet your dentist', title: 'Care you can trust' },
      reviews: { eyebrow: 'Patient stories', title: 'Loved by our patients' },
      faq: { eyebrow: 'Good to know', title: 'Frequently asked questions' },
      booking: { eyebrow: 'Book online', title: 'Request your appointment', text: 'Fill in the short form and we will confirm your time on WhatsApp.' },
      contact: { eyebrow: 'Visit us', title: 'Find the clinic', address: 'Address', phone: 'Phone', email: 'Email', hours: 'Opening hours', map: 'Open in Google Maps' },
    },
    form: {
      name: 'Full name', namePh: 'e.g. Ahmed Hassan',
      phone: 'Phone number', phonePh: 'e.g. 01012345678',
      date: 'Preferred date', time: 'Preferred time',
      times: { morning: 'Morning (10–1)', afternoon: 'Afternoon (1–5)', evening: 'Evening (5–9)' },
      service: 'Service', servicePh: 'Choose a service', other: 'Not sure / other',
      brief: 'Briefly describe your case', briefPh: 'e.g. pain in lower right tooth for 3 days, sensitive to cold…',
      urgent: 'This is urgent (pain or swelling)',
      submit: 'Send request via WhatsApp',
      privacy: 'Your details are only used to arrange your appointment.',
      errors: { name: 'Please enter your name', phone: 'Enter a valid phone number', date: 'Choose a date', time: 'Choose a time', brief: 'Please add a short description' },
      successTitle: 'Almost done!',
      successText: 'WhatsApp should have opened with your request. Press send there to finish. If it did not open, use the button below.',
      openAgain: 'Open WhatsApp again',
      newRequest: 'Make another request',
      message: {
        intro: 'Hello, I would like to book an appointment.',
        name: 'Name', phone: 'Phone', date: 'Date', time: 'Time', service: 'Service', case: 'Case', urgent: 'URGENT',
      },
    },
    footer: { rights: 'All rights reserved.', note: 'Placeholder content. Replace with your clinic details.' },
    whatsappFloat: 'Chat on WhatsApp',
    lang: 'العربية',
  },
  ar: {
    nav: { home: 'الرئيسية', services: 'الخدمات', about: 'عن العيادة', cases: 'حالات الابتسامة', doctor: 'الطبيبة', reviews: 'التقييمات', faq: 'الأسئلة', contact: 'تواصل معنا', book: 'احجز الآن' },
    hero: {
      badge: 'رعاية متكاملة لأسنانك',
      title: 'ابتسامتك، خبرتنا واهتمامنا',
      text: 'رعاية متكاملة لأسنانك تمنحك الثقة في كل ابتسامة. من الفحوصات الدورية إلى العلاجات المتقدمة، نحرص على راحتك ونوضح لك كل خطوة لتختار العلاج المناسب لك.',
      cta: 'احجز موعدك',
      secondary: 'اكتشف خدماتنا',
      points: [
        'أطباء متخصصون',
        'رعاية لطيفة ومخصصة',
        'خطط علاج واضحة',
      ],
    },
    sections: {
      services: { eyebrow: 'ماذا نقدم', title: 'رعاية أسنان متكاملة في مكان واحد' },
      about: { eyebrow: 'نبذة عنا', title: 'رعاية مريحة تناسب احتياجاتك', text: 'نريد أن تكون كل زيارة هادئة وواضحة وشخصية. نستمع إلى احتياجاتك، ونشرح الخيارات المتاحة، ونساعدك على اختيار الخطوة المناسبة لابتسامتك.' },
      cases: { eyebrow: 'تحولات الابتسامة', title: 'تغييرات بسيطة قد تصنع فرقًا كبيرًا', text: 'تعرّف على أمثلة لأنواع تحسينات الابتسامة التي يمكن لفريقنا مناقشتها مع المرضى. تختلف النتائج من شخص لآخر ويبدأ كل علاج باستشارة.' },
      why: { eyebrow: 'لماذا نحن', title: 'رعاية بشكل مختلف' },
      doctor: { eyebrow: 'تعرف على طبيبتك', title: 'رعاية تستحق ثقتك' },
      reviews: { eyebrow: 'قصص المرضى', title: 'محبوبون من مرضانا' },
      faq: { eyebrow: 'من المفيد أن تعرف', title: 'الأسئلة الشائعة' },
      booking: { eyebrow: 'احجز أونلاين', title: 'اطلب موعدك', text: 'املأ النموذج القصير وسنؤكد لك الموعد عبر واتساب.' },
      contact: { eyebrow: 'زورونا', title: 'موقع العيادة', address: 'العنوان', phone: 'الهاتف', email: 'البريد الإلكتروني', hours: 'ساعات العمل', map: 'افتح في خرائط جوجل' },
    },
    form: {
      name: 'الاسم الكامل', namePh: 'مثال: أحمد حسن',
      phone: 'رقم الهاتف', phonePh: 'مثال: 01012345678',
      date: 'التاريخ المفضل', time: 'الوقت المفضل',
      times: { morning: 'صباحًا (١٠–١)', afternoon: 'بعد الظهر (١–٥)', evening: 'مساءً (٥–٩)' },
      service: 'الخدمة', servicePh: 'اختر الخدمة', other: 'لست متأكدًا / أخرى',
      brief: 'اشرح حالتك باختصار', briefPh: 'مثال: ألم في الضرس السفلي الأيمن منذ ٣ أيام وحساسية من البرودة…',
      urgent: 'حالة عاجلة (ألم أو تورم)',
      submit: 'أرسل الطلب عبر واتساب',
      privacy: 'تُستخدم بياناتك فقط لترتيب موعدك.',
      errors: { name: 'من فضلك أدخل اسمك', phone: 'أدخل رقم هاتف صحيح', date: 'اختر التاريخ', time: 'اختر الوقت', brief: 'من فضلك أضف وصفًا مختصرًا' },
      successTitle: 'اقتربنا من الانتهاء!',
      successText: 'يجب أن يكون واتساب قد فُتح مع طلبك. اضغط إرسال هناك لإتمام الحجز. وإن لم يفتح استخدم الزر أدناه.',
      openAgain: 'افتح واتساب مرة أخرى',
      newRequest: 'طلب حجز جديد',
      message: {
        intro: 'مرحبًا، أرغب في حجز موعد.',
        name: 'الاسم', phone: 'الهاتف', date: 'التاريخ', time: 'الوقت', service: 'الخدمة', case: 'الحالة', urgent: 'عاجل',
      },
    },
    footer: { rights: 'جميع الحقوق محفوظة.', note: 'محتوى تجريبي، استبدله ببيانات عيادتك.' },
    whatsappFloat: 'تواصل عبر واتساب',
    lang: 'English',
  },
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('lang')
      if (saved === 'en' || saved === 'ar') return saved
    } catch {}
    return 'en'
  })

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    try {
      localStorage.setItem('lang', lang)
    } catch {}
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      dir: lang === 'ar' ? 'rtl' : 'ltr',
      t: ui[lang],
      // pick the current-language version of a { en, ar } object
      tr: (obj) => (obj && typeof obj === 'object' && !Array.isArray(obj) ? obj[lang] : obj),
      toggle: () => setLang((l) => (l === 'en' ? 'ar' : 'en')),
    }),
    [lang],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
