import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Cases from './components/Cases.jsx'
import Doctor from './components/Doctor.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import BookingForm from './components/BookingForm.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Cases />
        <Doctor />
        <Testimonials />
        <Faq />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
