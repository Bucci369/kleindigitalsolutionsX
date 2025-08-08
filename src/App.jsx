import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LeadCapture from './components/LeadCapture'

// Separate pages
import CoachingPage from './components/pages/CoachingPage'
import GruppenberatungPage from './components/pages/GruppenberatungPage'
import EinzelberatungPage from './components/pages/EinzelberatungPage'
import BIAMessungPage from './components/pages/BIAMessungPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'coaching':
        return <CoachingPage />
      case 'gruppenberatung':
        return <GruppenberatungPage />
      case 'einzelberatung':
        return <EinzelberatungPage />
      case 'bia-messung':
        return <BIAMessungPage />
      default:
        return (
          <>
            <Hero />
            <Services />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
            <LeadCapture />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
    </div>
  )
}

export default App
