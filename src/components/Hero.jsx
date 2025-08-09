import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function Hero() {
  const ref = useRef(null)
  // REAL scroll progress (nur nach Intro relevant)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start','end start'] })

  // Virtueller Progress für die erste Cine-Animation (0->1 über Zeit, nicht Scroll)
  const introProgress = useMotionValue(0)
  const [introPlaying, setIntroPlaying] = useState(false)
  const [introDone, setIntroDone] = useState(false)
  
  // Check if user is in hero area on mount
  useEffect(() => {
    const initialScroll = window.scrollY
    const heroHeight = window.innerHeight
    if (initialScroll > heroHeight * 0.3) {
      // User ist nicht im Hero - Animation als fertig markieren
      setIntroDone(true)
    }
  }, [])
  
  // EINFACH: Nach Auto-Animation bleibt Bild links stehen - KEINE Rückwärts-Animation
  const finalProgress = useMotionValue(0.5)
  const effectiveProgress = introDone ? finalProgress : introProgress

  // Bild bewegt sich nach links - bedeckt Hälften (rechteckig)
  const clipPath = useTransform(effectiveProgress,[0,0.3,0.5],[
    'polygon(100% 0%, 100% 100%, 50% 100%, 50% 0%)', // Start - rechte Hälfte
    'polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)', // Mitte - ganze Breite
    'polygon(50% 0%, 50% 100%, 0% 100%, 0% 0%)' // Ende - linke Hälfte
  ])
  // Bild bleibt sichtbar nach Vollbild
  const imageOpacity = useTransform(effectiveProgress,[0,0.5],[1,1])
  const fadeOpacity = useTransform(effectiveProgress,[0,0.3,0.4],[1,1,0]) // Text verschwindet schnell
  const translateY = useTransform(effectiveProgress,[0,1],[0,0]) // Kein Movement
  const blur = useTransform(effectiveProgress,[0,1],[ 'blur(0px)','blur(0px)']) // Kein Blur
  const backdrop = useTransform(effectiveProgress,[0,0.85],[ 'rgba(255,255,255,0.6)','rgba(255,255,255,0)'])
  
  // Neuer Text rechts - früher sichtbar
  const newTextOpacity = useTransform(effectiveProgress,[0,0.2,0.3],[0,0,1])
  const newTextX = useTransform(effectiveProgress,[0,0.2,0.3],[100,100,0])
  
  // CTA Button - erscheint ganz am Ende
  const ctaOpacity = useTransform(effectiveProgress,[0,0.45,0.5],[0,0,1])
  const ctaY = useTransform(effectiveProgress,[0,0.45,0.5],[50,50,0])
  
  // Linker Text verschwindet wenn Bild nach links wandert
  const leftTextOpacity = useTransform(effectiveProgress,[0,0.2,0.3],[1,1,0])
  const [mountIntro, setMountIntro] = useState(true)
  const [isInHero, setIsInHero] = useState(true) // Track if user is in hero section

  // --- Auto Scroll State ---
  const [isAutoScrolling, setIsAutoScrolling] = useState(false) // programmatic handoff scroll
  const [hasInteracted, setHasInteracted] = useState(false) // hat user ersten Impuls gegeben
  const touchStartY = useRef(0)
  const handoffDoneRef = useRef(false)
  const cancelRef = useRef(false)

  const startIntro = () => {
    if (introPlaying || introDone || cancelRef.current) return
    setIntroPlaying(true)
    // Motion preferences respektieren
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const duration = reduce ? 0.01 : 6.5 // Viel längere Duration für eleganten Übergang
    const controls = animate(introProgress, 0.5, { // STOPPT BEI 0.5 = VOLLBILD 
      duration: duration * 0.5, // Viel kürzere Duration
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: v => {
      if (v >= 0.4 && mountIntro) setMountIntro(false) // Text schnell weg bei 40%
    }, onComplete: () => {
      setIntroPlaying(false)
      setIntroDone(true)
      lockBody(false)
    } })
    return () => controls.stop()
  }


  const lockBody = (lock) => {
    // Scrollbar bleibt immer sichtbar - kein overflow hidden mehr
    // Dadurch verschiebt sich die Website nicht
  }

  useEffect(() => {
    // NUR wenn User im Hero-Bereich ist
    const initialScroll = window.scrollY
    const heroHeight = window.innerHeight
    if (initialScroll > heroHeight * 0.3) {
      return // User ist nicht im Hero
    }

    const beginIfNeeded = () => {
      if (!hasInteracted && !introPlaying && !introDone) {
        setHasInteracted(true)
        startIntro()
      }
    }

    const onWheel = (e) => {
      const currentScroll = window.scrollY
      // NUR im Hero blockieren, nicht auf der ganzen Website
      if (currentScroll > heroHeight) return // User ist aus Hero raus - nicht blockieren
      
      if (introDone) return // Animation fertig - nicht blockieren
      if (introPlaying) { 
        e.preventDefault() // NUR während Animation blockieren
        return 
      }
      if (e.deltaY > 0) { 
        e.preventDefault()
        beginIfNeeded()
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      window.removeEventListener('wheel', onWheel)
    }
  }, [isAutoScrolling, introPlaying, introDone])

  // Falls User doch ganz normal oben landet und  nicht interagiert: kein Autostart -> wartet auf Scroll

  // Track if user is in hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      setIsInHero(window.scrollY < heroHeight)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Automatisches Scrollen zur zweiten Section nach Intro - NUR im Hero-Bereich
  useEffect(() => {
    // Wenn User nicht im Hero-Bereich ist, SOFORT abbrechen - egal ob introDone oder nicht
    const initialScroll = window.scrollY
    const heroHeight = window.innerHeight
    if (initialScroll > heroHeight * 0.3) {
      return // User ist zu weit unten, KEINE Hero-Animation
    }
    
    if (!introDone) return
    
    let hasAutoScrolled = false
    let isAnimating = false
    
    const blockScroll = (e) => {
      if (isAnimating) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }
    
    const handleScroll = (e) => {
      if (hasAutoScrolled || isAnimating) return
      
      const scrolled = window.scrollY
      const heroHeight = window.innerHeight
      
      // NUR wenn User im oberen Hero-Bereich ist
      if (scrolled >= 0 && scrolled <= heroHeight && scrolled <= heroHeight * 0.8) {
        e.preventDefault()
        hasAutoScrolled = true
        isAnimating = true
        
        // Scroll blockieren während Animation zur zweiten Section
        const blockScroll = (e) => {
          if (isAnimating) {
            e.preventDefault()
            e.stopPropagation()
          }
        }
        
        window.addEventListener('wheel', blockScroll, { passive: false })
        window.addEventListener('touchmove', blockScroll, { passive: false })
        window.addEventListener('keydown', blockScroll, { passive: false })
        
        const heroEl = ref.current
        if (!heroEl) return
        const next = heroEl.nextElementSibling
        if (!next) return
        
        const targetY = next.getBoundingClientRect().top + window.scrollY
        const startY = window.scrollY
        const distance = targetY - startY
        const duration = 2500
        const startTime = performance.now()
        
        const easeInOut = (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
        
        const animateScroll = (currentTime) => {
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1)
          const easedProgress = easeInOut(progress)
          
          const newY = Math.round(startY + distance * easedProgress)
          const currentY = Math.round(window.scrollY)
          if (newY !== currentY) {
            window.scrollTo({ top: newY, behavior: 'instant' })
          }
          
          if (progress < 1) {
            requestAnimationFrame(animateScroll)
          } else {
            // Animation fertig - Scroll wieder freigeben
            isAnimating = false
            window.removeEventListener('wheel', blockScroll)
            window.removeEventListener('touchmove', blockScroll)
            window.removeEventListener('keydown', blockScroll)
          }
        }
        
        requestAnimationFrame(animateScroll)
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: false })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [introDone])

  // Keine Rückwärts-Animation mehr

  return (
  <section
      ref={ref}
      className="relative w-full h-[105vh]"
      aria-label="Landing Hero"
      data-autoscroll={isAutoScrolling ? 'locking' : 'idle'}
    >
  {/* Spacer für korrekte Positionierung beim Seitenaufruf */}
  <div className="h-[105vh]" />
      <motion.div
        className="absolute inset-0 z-10 overflow-hidden bg-transparent"
        style={{ clipPath, WebkitClipPath: clipPath, opacity: imageOpacity }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=2070&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </motion.div>
  {mountIntro && (
        <motion.div
          className="absolute inset-0 z-0 flex items-center pointer-events-none"
          style={{ opacity: fadeOpacity }}
        >
          <motion.div
            className="w-full max-w-7xl mx-auto px-6 lg:px-12"
            style={{ y: translateY, filter: blur }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 lg:pr-8 pointer-events-auto relative">
                <motion.div
                  className="absolute -inset-4 rounded-3xl -z-10 backdrop-blur-sm"
                  style={{ backgroundColor: backdrop }}
                />
                <div className="mb-6 uppercase tracking-[0.25em] text-xs font-semibold text-neutral-500">
                  Individuelle & Professionelle Beratung
                </div>
                <h1 className="text-4xl sm:text-5xl font-display font-semibold leading-tight text-neutral-800 mb-6">
                  Ernährungsberatung <span className="block text-accent">für nachhaltige Veränderungen</span>
                </h1>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-xl">
                  Wissenschaftlich fundiert, persönlich begleitet. Wir entwickeln gemeinsam eine Ernährung, die zu Ihrem Alltag, Ihren Zielen und Ihrer Gesundheit passt – ohne starre Verbote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="btn-primary !px-10 !py-4 text-sm font-medium tracking-wide">
                    Kostenlose Erstberatung
                  </a>
                  <a href="#about" className="btn-secondary !px-10 !py-4 text-sm font-medium tracking-wide">
                    Mehr erfahren
                  </a>
                </div>
                <div className="mt-10 flex flex-wrap gap-8 text-sm text-neutral-500">
                  <div>
                    <div className="font-semibold text-neutral-800 text-lg">200+</div>Athlet:innen begleitet
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-800 text-lg">12+</div>Jahre Expertise
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-800 text-lg">98%</div>Zufriedenheit
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Hintergrund unter dem Bild - nur im Hero */}
      <div className="absolute inset-0 z-5 bg-gradient-to-r from-white to-gray-100"></div>
      
      {/* Text links - verschwindet wenn Bild nach links wandert */}
      <motion.div 
        className="absolute top-0 left-0 w-1/2 h-full z-5 flex items-center justify-center pl-12"
        style={{ opacity: leftTextOpacity }}
      >
        <div className="max-w-2xl">
          <div className="mb-6 uppercase tracking-[0.25em] text-xs font-semibold text-neutral-500">
            Individuelle & Professionelle Beratung
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-semibold leading-tight text-neutral-800 mb-6">
            Ernährungsberatung <span className="block text-accent">für nachhaltige Veränderungen</span>
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-xl">
            Wissenschaftlich fundiert, persönlich begleitet. Wir entwickeln gemeinsam eine Ernährung, die zu Ihrem Alltag, Ihren Zielen und Ihrer Gesundheit passt – ohne starre Verbote.
          </p>
          <div className="flex flex-wrap gap-8 text-sm text-neutral-500">
            <div>
              <div className="font-semibold text-neutral-800 text-lg">200+</div>Athlet:innen begleitet
            </div>
            <div>
              <div className="font-semibold text-neutral-800 text-lg">12+</div>Jahre Expertise
            </div>
            <div>
              <div className="font-semibold text-neutral-800 text-lg">98%</div>Zufriedenheit
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Neuer Text rechts - wird sichtbar wenn Bild links ist */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full z-5 flex items-center justify-center pr-12"
        style={{ opacity: newTextOpacity }}
      >
        <motion.div
          className="max-w-2xl text-right"
          style={{ x: newTextX }}
        >
          <div className="mb-6 uppercase tracking-[0.25em] text-xs font-semibold text-neutral-500">
            Ihr Weg zu nachhaltiger Gesundheit
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-semibold leading-tight text-neutral-800 mb-6">
            Ihre Ernährung. <span className="block text-accent">Ihre Ziele. Ihr Erfolg.</span>
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-xl ml-auto">
            Entdecken Sie, wie personalisierte Ernährungsberatung Ihr Leben transformiert. Ohne Verbote, mit nachhaltigen Ergebnissen.
          </p>
          <div className="flex items-center justify-end gap-8 text-sm text-neutral-500">
            <div className="text-right">
              <div className="font-semibold text-neutral-800 text-lg">Individuell</div>Maßgeschneiderte Pläne
            </div>
            <div className="text-right">
              <div className="font-semibold text-neutral-800 text-lg">Nachhaltig</div>Langfristige Erfolge
            </div>
            <div className="text-right">
              <div className="font-semibold text-neutral-800 text-lg">Wissenschaftlich</div>Fundierte Methoden
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* CTA Button - erscheint erst am Ende der Animation */}
      <motion.div
        className="absolute bottom-20 left-1/2 z-30"
        style={{ 
          opacity: ctaOpacity, 
          y: ctaY, 
          x: '-50%'
        }}
      >
        <a
          href="#contact"
          className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-md hover:scale-102 text-base"
        >
          Kostenlose Beratung starten
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>

      {/* CTA Button - erscheint erst am Ende der Animation */}
      <motion.div
        className="absolute bottom-20 left-1/2 z-30"
        style={{ 
          opacity: ctaOpacity, 
          y: ctaY, 
          x: '-50%'
        }}
      >
        <a
          href="#contact"
          className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-md hover:scale-102 text-base"
        >
          Kostenlose Beratung starten
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>

      {/* Skip Button / Progress Indicator - nur sichtbar wenn im Hero */}
      {!introPlaying && !introDone && isInHero && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <div className="text-[10px] tracking-widest text-neutral-500 uppercase">Scroll um zu starten</div>
          <div className="w-5 h-8 rounded-full border border-neutral-400 relative overflow-hidden">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-2 rounded-full bg-neutral-400 animate-pulse top-1"></div>
          </div>
        </div>
      )}
    </section>
  )
}