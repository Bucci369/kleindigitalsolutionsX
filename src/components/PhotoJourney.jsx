import { motion, useScroll, useTransform, animate } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function PhotoJourney() {
  const containerRef = useRef(null)
  const [currentStep, setCurrentStep] = useState(0) 
  const [isAnimating, setIsAnimating] = useState(false)
  const [manualProgress, setManualProgress] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    if (isAnimating) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [isAnimating])

  const triggerNextStep = async () => {
    if (isAnimating) return
    setIsAnimating(true)
    
    if (currentStep === 0) {
      // SCHNELLER UNLOCK: Scroll wird früh freigegeben
      const animation = animate(manualProgress, manualProgress + 1, {
        duration: 3.5,
        ease: [0.25, 0, 0.75, 1], // Schneller am Ende
        onUpdate: setManualProgress,
        onComplete: () => setCurrentStep(1)
      })
      
      // Unlock nach 60% der Animation (wenn Kreise fast Position erreicht haben)
      setTimeout(() => setIsAnimating(false), 2100) // 60% von 3500ms
      
    } else if (currentStep === 1) {
      const animation = animate(manualProgress, manualProgress + 1, {
        duration: 2.8,
        ease: [0.4, 0, 0.8, 1], // Schneller am Ende
        onUpdate: setManualProgress,
        onComplete: () => setCurrentStep(2)
      })
      
      // Unlock nach 60% der Animation
      setTimeout(() => setIsAnimating(false), 1680) // 60% von 2800ms
      
    } else if (currentStep === 2) {
      const animation = animate(manualProgress, manualProgress + 1, {
        duration: 3.2,
        ease: [0.25, 0.1, 0.8, 1], // Schneller am Ende
        onUpdate: setManualProgress,
        onComplete: () => setCurrentStep(3)
      })
      
      // Unlock nach 60% der Animation
      setTimeout(() => setIsAnimating(false), 1920) // 60% von 3200ms
      
    } else if (currentStep === 3) {
      const animation = animate(manualProgress, manualProgress + 1, {
        duration: 2.0,
        ease: [0.5, 0, 1, 1], // Sehr schnell am Ende
        onUpdate: setManualProgress,
        onComplete: () => setCurrentStep(4)
      })
      
      // Unlock nach 50% der Animation (Zoom ist schnell)
      setTimeout(() => setIsAnimating(false), 1000) // 50% von 2000ms
    }
  }

  useEffect(() => {
    if (isAnimating) return
    
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest > 0.01 && currentStep < 4) {
        triggerNextStep()
      }
    })
    
    return unsubscribe
  }, [scrollYProgress, currentStep, isAnimating])

  // Linker Kreis Animation
  const getLeftClipPath = (progress) => {
    if (progress <= 1) {
      // Start: Kreis links, nur 50% im Bild
      const t = progress
      const x = 0 + (25 * t) // 0% → 25% (Bewegung zur Mitte, nur 50% sichtbar)
      return `circle(min(40vh, 40vw) at ${x}% 50%)`
      
    } else if (progress <= 2) {
      // Kreise kommen zusammen
      const t = progress - 1
      const x = 25 + (25 * t) // 25% → 50% (zur Mitte)
      return `circle(min(40vh, 40vw) at ${x}% 50%)`
      
    } else if (progress <= 3) {
      // In der Mitte vereint - beide Kreise überlagern sich
      return `circle(min(40vh, 40vw) at 50% 50%)`
      
    } else {
      // Wird kleiner und verschwindet komplett
      const t = progress - 3
      const radius = 40 - (40 * t)
      if (radius <= 0) {
        return `circle(0px at 50% 50%)` // Komplett verschwunden
      }
      return `circle(min(${radius}vh, ${radius}vw) at 50% 50%)`
    }
  }

  // Rechter Kreis Animation  
  const getRightClipPath = (progress) => {
    if (progress <= 1) {
      // Start: Kreis rechts, nur 50% im Bild
      const t = progress
      const x = 100 - (25 * t) // 100% → 75% (Bewegung zur Mitte, nur 50% sichtbar)
      return `circle(min(40vh, 40vw) at ${x}% 50%)`
      
    } else if (progress <= 2) {
      // Kreise kommen zusammen
      const t = progress - 1
      const x = 75 - (25 * t) // 75% → 50% (zur Mitte)
      return `circle(min(40vh, 40vw) at ${x}% 50%)`
      
    } else if (progress <= 3) {
      // In der Mitte vereint - beide Kreise überlagern sich
      return `circle(min(40vh, 40vw) at 50% 50%)`
      
    } else {
      // Wird kleiner und verschwindet komplett
      const t = progress - 3
      const radius = 40 - (40 * t)
      if (radius <= 0) {
        return `circle(0px at 50% 50%)` // Komplett verschwunden
      }
      return `circle(min(${radius}vh, ${radius}vw) at 50% 50%)`
    }
  }


  return (
    <>
      {/* Linker Kreis - gleiches Foto */}
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          clipPath: getLeftClipPath(manualProgress)
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/30"></div>
      </motion.div>

      {/* Rechter Kreis - gleiches Foto */}
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          clipPath: getRightClipPath(manualProgress)
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/30"></div>
      </motion.div>
      
      <div ref={containerRef} className="relative z-10">
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
      </div>
    </>
  )
}