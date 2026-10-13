/**
 * Content for the Deluxe Dental Clinic website.
 * All text has an English (en) and Arabic (ar) version.
 */
export const clinic = {
  name: { en: 'Deluxe  Dental Clinic', ar: 'عيادة ديلوكس لطب الأسنان' },
  shortName: { en: 'Deluxe', ar: 'ديلوكس' },
  whatsapp: '20111281288',
  phoneDisplay: '+20 11 12811288',
  email: 'deluxedentalclinic@gmail.com',
  address: {
    en: ' Zahraa El Maadi, Block 5/88 (Above Khair Zaman, 2nd Floor — look for the black "Luxe" sticker on the intercom) ',
    ar: '١٦/٥ شارع النصر - المعادي، القاهرة، مصر ١١٧٢٨٨',
  },
  // Used for the "Open in Google Maps" link
  mapQuery: 'Deluxe Dental Clinic-Dr Mostafa Amgad',
  hours: [
    { days: { en: 'Saturday – Thursday', ar: 'السبت – الخميس' }, time: { en: '3:30 PM – 10:00 PM', ar: '٣:٣٠ م – ١٠:٠٠ م' } },
    { days: { en: 'Friday', ar: 'الجمعة' }, time: { en: 'Closed', ar: 'مغلق' } },
  ],
  social: { instagram: '#', facebook: '#' },
}

export const doctors = [
  {
    name: {
      en: 'Dr Farida Mohsen',
      ar: 'د. فريدة محسن',
    },
    title: {
      en: 'Paediatric Dentist',
      ar: 'أخصائية طب أسنان الأطفال',
    },
    bio: {
      en: 'Dr Farida Mohsen specialises in paediatric dentistry, providing dental care tailored to children’s needs. She holds a BDS and a Master’s degree in Paedodontics from Cairo University.',
      ar: 'د. فريدة محسن أخصائية في طب أسنان الأطفال، وتقدم رعاية أسنان مصممة لتلبية احتياجات الأطفال. حاصلة على بكالوريوس طب وجراحة الفم والأسنان وماجستير في طب أسنان الأطفال من جامعة القاهرة.',
    },
    credentials: {
      en: [
        'BDS',
        'Master’s in Paedodontics, Cairo University',
      ],
      ar: [
        'بكالوريوس طب وجراحة الفم والأسنان',
        'ماجستير طب أسنان الأطفال، جامعة القاهرة',
      ],
    },
photo: '/images/DrFarida.png',  },

  {
    name: {
      en: 'Dr Mohamed Ezzat',
      ar: 'د. محمد عزت',
    },
    title: {
      en: 'Orthodontist',
      ar: 'أخصائي تقويم الأسنان',
    },
    bio: {
      en: 'Dr Mohamed Ezzat specialises in orthodontics. He holds a BDS and an MSc in Orthodontics from Cairo University.',
      ar: 'د. محمد عزت أخصائي في تقويم الأسنان، حاصل على بكالوريوس طب وجراحة الفم والأسنان وماجستير في تقويم الأسنان من جامعة القاهرة.',
    },
    credentials: {
      en: [
        'BDS',
        'Masters in Orthodontics, Cairo University',
      ],
      ar: [
        'بكالوريوس طب وجراحة الفم والأسنان',
        'ماجستير تقويم الأسنان، جامعة القاهرة',
      ],
    },
    photo: '/images/DrMohamed.png',
  },

  {
    name: {
      en: 'Dr Mostafa Amgad',
      ar: 'د. مصطفى أمجد',
    },
    title: {
      en: 'Founder, Periodontist & Implant Specialist',
      ar: 'مؤسس العيادة وأخصائي أمراض اللثة وزراعة الأسنان',
    },
    bio: {
      en: 'Dr Mostafa Amgad is the founder of the clinic and specialises in periodontics and dental implant treatment.',
      ar: 'د. مصطفى أمجد هو مؤسس العيادة، ومتخصص في أمراض اللثة وعلاج زراعة الأسنان.',
    },
    credentials: {
      en: [
        'Founder of the clinic',
        'Periodontics',
        'Dental Implant Specialist',
      ],
      ar: [
        'مؤسس العيادة',
        'أمراض اللثة',
        'أخصائي زراعة الأسنان',
      ],
    },
    photo: '',
  },
];


export const services = [
  {
    icon: 'stethoscope',
    title: {
      en: 'General & Restorative Dentistry',
      ar: 'طب الأسنان العام والترميمي',
    },
    text: {
      en: 'Check-ups, professional cleaning, fillings, crowns and restorative treatments to protect and rebuild your natural teeth.',
      ar: 'فحوصات الأسنان والتنظيف الاحترافي والحشوات والتيجان وعلاجات ترميم الأسنان للحفاظ على أسنانك الطبيعية واستعادتها.',
    },
  },
  {
    icon: 'scan',
    title: {
      en: 'Dental Implants',
      ar: 'زراعة الأسنان',
    },
    text: {
      en: 'Modern implant treatments to replace missing teeth and restore comfort, function and confidence.',
      ar: 'علاجات زراعة الأسنان الحديثة لتعويض الأسنان المفقودة واستعادة الراحة والوظيفة والثقة.',
    },
  },
  {
    icon: 'heart-pulse',
    title: {
      en: 'Periodontics & Gum Treatment',
      ar: 'علاج اللثة وأمراض دواعم الأسنان',
    },
    text: {
      en: 'Specialised care for gum disease and recession, including procedures to improve gum health and contours.',
      ar: 'رعاية متخصصة لعلاج أمراض اللثة وانحسارها، بما في ذلك الإجراءات التي تحسّن صحة اللثة وتناسقها.',
    },
  },
  {
    icon: 'sparkles',
    title: {
      en: 'Cosmetic Dentistry & Veneers',
      ar: 'تجميل الأسنان والفينير',
    },
    text: {
      en: 'Veneers, teeth whitening and aesthetic restorations tailored to your teeth and smile goals.',
      ar: 'الفينير وتبييض الأسنان والترميمات التجميلية المصممة بما يناسب أسنانك والنتيجة التي تطمح إليها.',
    },
  },
  {
    icon: 'smile',
    title: {
      en: 'Orthodontics',
      ar: 'تقويم الأسنان',
    },
    text: {
      en: 'Orthodontic treatments to improve tooth alignment, bite function and smile balance.',
      ar: 'علاجات تقويم الأسنان لتحسين اصطفاف الأسنان ووظيفة الإطباق وتناسق الابتسامة.',
    },
  },
  {
    icon: 'baby',
    title: {
      en: 'Root Canal, Oral Surgery & Family Dentistry',
      ar: 'علاج العصب وجراحة الفم وطب أسنان الأسرة',
    },
    text: {
      en: 'Root canal treatment, oral and jaw surgery, and gentle dental care for children and adults.',
      ar: 'علاج جذور الأسنان والعصب وجراحات الفم والفكين، إلى جانب رعاية أسنان لطيفة للأطفال والبالغين.',
    },
  },
]

export const whyUs = [
  { icon: '💙', title: { en: 'Gentle care', ar: 'رعاية لطيفة' }, text: { en: 'Anxious? We go at your pace.', ar: 'تشعر بالقلق؟ نسير بالسرعة التي تناسبك.' } },
  { icon: '🧼', title: { en: 'Hospital-grade sterilisation', ar: 'تعقيم بمستوى المستشفيات' }, text: { en: 'Every instrument is sterilised and sealed.', ar: 'كل الأدوات معقمة ومغلفة.' } },
  { icon: '💬', title: { en: 'Clear pricing', ar: 'أسعار واضحة' }, text: { en: 'You approve the plan and cost first.', ar: 'توافق على الخطة والتكلفة قبل البدء.' } },
  { icon: '⏱️', title: { en: 'On-time visits', ar: 'مواعيد دقيقة' }, text: { en: 'Your time matters. No long waits.', ar: 'وقتك مهم، بدون انتظار طويل.' } },
]
//connect google maps reviews 
export const testimonials = [
  {
    name: {
      en: 'Omaima Dorgham',
      ar: 'أميمة درغام',
    },
    text: {
      en: 'I had a wonderful experience at this dental clinic. The staff were friendly, professional, and welcoming, and the dentist took the time to explain everything clearly. The clinic was clean, comfortable, and well-organised. I’m very happy with the care I received and would definitely recommend this clinic to anyone looking for excellent dental care.',
      ar: 'كانت تجربتي في عيادة الأسنان رائعة. كان فريق العمل ودودًا ومحترفًا ومرحبًا، وحرص الطبيب على شرح كل شيء بوضوح. كانت العيادة نظيفة ومريحة ومنظمة جيدًا. أنا سعيدة جدًا بالرعاية التي تلقيتها، وأوصي بهذه العيادة لكل من يبحث عن رعاية ممتازة للأسنان.',
    },
  },
{
    name: {
      en: 'Kamal Fahmi',
      ar: 'كمال فهمي',
    },
    text: {
      en: 'Thank you from the bottom of my heart. This is a clinic that puts humanity before medicine. The dentist carefully diagnoses the condition and explains all suitable treatment options. You leave satisfied with the result. I had been struggling with gum recession.',
      ar: 'شكراً من كل القلب. حقيقةً عيادة إنسانية قبل أن تكون طبية. الطبيب يشخّص الحالة ويطرح كل خطط العلاج المناسبة، وبالفعل تخرج وأنت راضٍ عن النتيجة. وكانت معاناتي مع انحسار اللثة.',
    },
  },
  {
    name: {
      en: 'Aya Mohamed',
      ar: 'آية محمد',
    },
    text: {
      en: 'The place is very clean, and the team is cooperative and respectful.',
      ar: 'مكان نظيف جداً، والتيم متعاون ومحترم.',
    },
  },
]
export const faqs = [
  { q: { en: 'Is the first visit painful?', ar: 'هل الزيارة الأولى مؤلمة؟' }, a: { en: 'No. The first visit is a gentle exam and a conversation. Any treatment is explained and agreed with you first.', ar: 'لا. الزيارة الأولى فحص لطيف وحديث معك، ويتم شرح أي علاج والاتفاق عليه أولًا.' } },
  { q: { en: 'How soon will you confirm my booking?', ar: 'متى سيتم تأكيد الحجز؟' }, a: { en: 'We reply on WhatsApp during opening hours, usually within a few minutes, to confirm your time.', ar: 'نرد عبر واتساب خلال ساعات العمل، غالبًا خلال دقائق، لتأكيد الموعد.' } },
  { q: { en: 'Do you treat children?', ar: 'هل تعالجون الأطفال؟' }, a: { en: 'Yes, we welcome children of all ages with a dedicated, friendly approach.', ar: 'نعم، نستقبل الأطفال من جميع الأعمار بأسلوب ودود ومخصص.' } },
  { q: { en: 'Is it an emergency?', ar: 'هل هي حالة طارئة؟' }, a: { en: 'If you have severe pain or swelling, tick "urgent" in the form or call us directly and we will fit you in as soon as possible.', ar: 'إذا كان لديك ألم شديد أو تورم، اختر «عاجل» في النموذج أو اتصل بنا مباشرة وسنحجز لك أقرب وقت.' } },
]

export const cases = [
  {
    number: '01',
    title: {
      en: 'Composite Fillings',
      ar: 'حشوات الكمبوزيت',
    },
    treatment: {
      en: 'Teeth #36 and #37',
      ar: 'الضرسين ٣٦ و٣٧',
    },
    description: {
      en: 'Composite fillings to treat decay in the lower back molars.',
      ar: 'حشوات كمبوزيت لعلاج التسوس في الضروس الخلفية.',
    },
    imageBefore: '',
    imageAfter: '',
  },
  {
    number: '02',
    title: {
      en: 'Veneer Replacement',
      ar: 'استبدال قشور الأسنان',
    },
    treatment: {
      en: 'Two veneers',
      ar: 'قشرتان للأسنان',
    },
    description: {
      en: 'Replacing two old composite veneers with new veneers.',
      ar: 'استبدال قشرتين قديمتين من الكمبوزيت بقشرتين جديدتين.',
    },
    imageBefore: '',
    imageAfter: '',
  },
  {
    number: '03',
    title: {
      en: 'Gingivectomy',
      ar: 'استئصال اللثة',
    },
    treatment: {
      en: 'Upper central incisors',
      ar: 'القواطع الأمامية العلوية',
    },
    description: {
      en: 'Adjusting the gingival zenith levels of the upper central incisors.',
      ar: 'تعديل مستوى ذروة اللثة حول القواطع الأمامية العلوية.',
    },
    imageBefore: '',
    imageAfter: '',
  },
]
export const doctor = doctors[2]