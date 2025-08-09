import Hero from './Hero'
import ValueIntro from './ValueIntro'
import { useEffect } from 'react'

// Verbesserter Stack: Hero sticky, ValueIntro absolut überlagert ab Scroll-Offset.
export default function HeroStack() {
  // Sicherstellen, dass kein globaler scroll-snap stört (optional Entfernen einer Klasse am html)
  useEffect(() => {
    document.documentElement.classList.remove('has-scroll-snap')
  }, [])

  return (
    <div className="relative w-full">
      <div className="relative h-[180vh]">
        {/* Sticky Hero */}
        <div className="sticky top-0 h-screen">
          <Hero />
        </div>
        {/* Overlay Section: absolut positioniert ab 100vh */}
        <div className="absolute top-[100vh] left-0 w-full">
          <ValueIntro />
        </div>
      </div>
    </div>
  )
}
