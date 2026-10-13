# Bright Smile Dental Clinic: Website

Single-page, bilingual (English / Arabic with RTL) dental clinic site built with **React + Vite + Tailwind CSS v4**.
Patients fill a short booking form and the request opens in **WhatsApp**, pre-filled with their name, phone, preferred date/time, service and a brief about their case.

## Run it

```bash
npm install
npm run dev       # development at http://localhost:5173
npm run build     # production build in /dist
npm run preview   # preview the production build
```

## Make it yours (all in one file)

Open `src/data/content.js` and replace the placeholders:

- `clinic.whatsapp`: WhatsApp number, international format, digits only (e.g. `201012345678`). **Booking requests go here.**
- Clinic name, phone, email, address, opening hours, map search text
- Doctor name, bio, credentials, stats, and `doctor.photo` (put an image in `/public`)
- Services, "why us" points, testimonials, FAQs (use real reviews only, with permission)

Interface text (buttons, form labels, errors) lives in `src/i18n.jsx`.
Colours are defined in `src/index.css` under `@theme` (`brand-*`, `mint-*`).

## Structure

```
src/
  data/content.js     ← clinic content, EN + AR
  i18n.jsx            ← language context, UI strings, RTL switching
  components/         ← Navbar, Hero, Services, Doctor, Testimonials, Faq, BookingForm, Contact, Footer, WhatsAppButton
```

## Growing traction (next steps)

1. Replace emoji placeholders with real photos of the clinic and doctor.
2. Add real Google Maps embed/link and Google Business Profile link.
3. Deploy (Netlify / Vercel / Cloudflare Pages: all free) and connect a custom domain.
4. Update the `<title>` and meta description in `index.html`; add an Open Graph image for nicer link previews.
5. Add before/after photos (with patient consent) and link Instagram/Facebook in `clinic.social`.
6. Optional: switch the form to email (EmailJS/Formspree) or a backend for a booking log.
