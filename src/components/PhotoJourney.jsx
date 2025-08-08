import { motion, useScroll, useTransform, animate } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function PhotoJourney() {
  const containerRef = useRef(null)
  const [currentStep, setCurrentStep] = useState(0) 
  const [isAnimating, setIsAnimating] = useState(false)
  const [manualProgress, setManualProgress] = useState(0)
  // Track the latest progress to avoid stale closures during chained animations
  const progressRef = useRef(0)
  // Separate scroll lock from animation state
  const [isScrollLocked, setIsScrollLocked] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // REMOVE old overflow handler based on isAnimating and replace with scroll lock handler
  // useEffect(() => {
  //   if (isAnimating) {
  //     document.body.style.overflow = 'hidden'
  //   } else {
  //     document.body.style.overflow = 'auto'
  //   }
  //   return () => { document.body.style.overflow = 'auto' }
  // }, [isAnimating])

  useEffect(() => {
    document.body.style.overflow = isScrollLocked ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [isScrollLocked])

  // Helper to keep state and ref in sync during animations
  const updateProgress = (v) => {
    setManualProgress(v)
    progressRef.current = v
  }

  const triggerNextStep = async () => {
    if (isAnimating) return
    setIsAnimating(true)
    setIsScrollLocked(true)
    
    if (currentStep === 0) {
      // Step 0
      animate(progressRef.current, progressRef.current + 1, {
        duration: 3.5,
        ease: [0.25, 0, 0.75, 1],
        onUpdate: updateProgress,
        onComplete: () => {
          setCurrentStep(1)
          setIsAnimating(false)
        }
      })
      setTimeout(() => setIsScrollLocked(false), 1750)
      
    } else if (currentStep === 1) {
      // Step 1
      animate(progressRef.current, progressRef.current + 1, {
        duration: 2.8,
        ease: [0.4, 0, 0.8, 1],
        onUpdate: updateProgress,
        onComplete: () => {
          setCurrentStep(2)
          setIsAnimating(false)
        }
      })
      setTimeout(() => setIsScrollLocked(false), 1400)
      
    } else if (currentStep === 2) {
      // Step 2: Merge, then seamlessly start Step 3 (shrink)
      animate(progressRef.current, progressRef.current + 1, {
        duration: 3.2,
        ease: [0.25, 0.1, 0.8, 1],
        onUpdate: updateProgress,
        onComplete: () => {
          setCurrentStep(3)
          // Immediately start Step 3 without requiring extra scroll
          animate(progressRef.current, progressRef.current + 1, {
            duration: 2.0,
            ease: [0.5, 0, 1, 1],
            onUpdate: updateProgress,
            onComplete: () => {
              setCurrentStep(4)
              setIsAnimating(false)
            }
          })
          // Allow scroll mid shrink, but animation won't retrigger due to isAnimating
          setTimeout(() => setIsScrollLocked(false), 1000)
        }
      })
      // Allow scroll mid merge
      setTimeout(() => setIsScrollLocked(false), 1280)
      
    } else if (currentStep === 3) {
      // Fallback: If Step 3 is triggered by scroll, still use current progressRef
      animate(progressRef.current, progressRef.current + 1, {
        duration: 2.0,
        ease: [0.5, 0, 1, 1],
        onUpdate: updateProgress,
        onComplete: () => {
          setCurrentStep(4)
          setIsAnimating(false)
        }
      })
      setTimeout(() => setIsScrollLocked(false), 1000)
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

  // Linker Kreis Animation - VERGRÖSSERT & OPTIMIERT
  const getLeftClipPath = (progress) => {
    if (progress <= 1) {
      // Start: Kreis links, nur 50% im Bild
      const t = progress
      const x = 0 + (25 * t) // 0% → 25% (Bewegung zur Mitte, nur 50% sichtbar)
      return `circle(min(75vh, 75vw) at ${x}% 55%)`
      
    } else if (progress <= 2) {
      // Kreise kommen zusammen
      const t = progress - 1
      const x = 25 + (25 * t) // 25% → 50% (zur Mitte)
      return `circle(min(75vh, 75vw) at ${x}% 55%)`
      
    } else if (progress <= 3) {
      // In der Mitte vereint - beide Kreise überlagern sich
      return `circle(min(75vh, 75vw) at 50% 55%)`
      
    } else {
      // Wird kleiner und verschwindet komplett
      const t = progress - 3
      const radius = 75 - (75 * t)
      if (radius <= 0) {
        return `circle(0px at 50% 55%)` // Komplett verschwunden
      }
      return `circle(min(${radius}vh, ${radius}vw) at 50% 55%)`
    }
  }

  // Rechter Kreis Animation - VERGRÖSSERT & OPTIMIERT
  const getRightClipPath = (progress) => {
    if (progress <= 1) {
      // Start: Kreis rechts, nur 50% im Bild
      const t = progress
      const x = 100 - (25 * t) // 100% → 75% (Bewegung zur Mitte, nur 50% sichtbar)
      return `circle(min(75vh, 75vw) at ${x}% 55%)`
      
    } else if (progress <= 2) {
      // Kreise kommen zusammen
      const t = progress - 1
      const x = 75 - (25 * t) // 75% → 50% (zur Mitte)
      return `circle(min(75vh, 75vw) at ${x}% 55%)`
      
    } else if (progress <= 3) {
      // In der Mitte vereint - beide Kreise überlagern sich
      return `circle(min(75vh, 75vw) at 50% 55%)`
      
    } else {
      // Wird kleiner und verschwindet komplett
      const t = progress - 3
      const radius = 75 - (75 * t)
      if (radius <= 0) {
        return `circle(0px at 50% 55%)` // Komplett verschwunden
      }
      return `circle(min(${radius}vh, ${radius}vw) at 50% 55%)`
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