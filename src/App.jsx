import { useState } from 'react'
import Navigation from './components/Navigation'
import HeroStack from './components/HeroStack'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ColorDebugPanel from './components/ColorDebugPanel'
// import PhotoJourney from './components/PhotoJourney' // deprecated: replaced by Hero
import AnimationDemo from './components/AnimationDemo'

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
      case 'demo':
        return <AnimationDemo />
      default:
        return (
          <>
            <HeroStack />
            <Services />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
  {renderPage()}
  <ColorDebugPanel />
    </div>
  )
}

export default App
