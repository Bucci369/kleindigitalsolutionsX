import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function Hero({ disableIntro = false }) {
  const ref = useRef(null)
  // REAL scroll progress (nur nach Intro relevant)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start','end start'] })

  // Virtueller Progress für die erste Cine-Animation (0->1 über Zeit, nicht Scroll)
  const introProgress = useMotionValue(0)
  const [introPlaying, setIntroPlaying] = useState(false)
  const [introDone, setIntroDone] = useState(disableIntro)
  
  // Check if user is in hero area on mount
  useEffect(() => {
    if (disableIntro) return
    const initialScroll = window.scrollY
    const heroHeight = window.innerHeight
    if (initialScroll > heroHeight * 0.3) {
      setIntroDone(true)
    }
  }, [disableIntro])
  
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
  
  
  // Linker Text verschwindet wenn Bild nach links wandert
  const leftTextOpacity = useTransform(effectiveProgress,[0,0.2,0.3],[1,1,0])
  const [mountIntro, setMountIntro] = useState(true)
  const [isInHero, setIsInHero] = useState(true) // Track if user is in hero section

  // Auto-Scroll Logik entfällt für sanftes Scroll-Snap
  const cancelRef = useRef(false)

  const startIntro = () => {
  if (disableIntro || introPlaying || introDone || cancelRef.current) return
    setIntroPlaying(true)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const duration = reduce ? 0.01 : 6.5
    lockScroll(true)
    const controls = animate(introProgress, 0.5, {
      duration: duration * 0.5,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: v => {
        if (v >= 0.4 && mountIntro) setMountIntro(false)
      },
      onComplete: () => {
        setIntroPlaying(false)
        setIntroDone(true)
        lockScroll(false)
      }
    })
    return () => controls.stop()
  }

  // --- Robuster Scroll-Lock (body fixed) ---
  const scrollLockRef = useRef({ active: false, y: 0, prev: {} })
  const lockScroll = (lock) => {
    if (lock && !scrollLockRef.current.active) {
      const y = window.scrollY
      scrollLockRef.current.y = y
      scrollLockRef.current.prev = {
        position: document.body.style.position,
        top: document.body.style.top,
        width: document.body.style.width,
        overflow: document.body.style.overflow,
        paddingRight: document.body.style.paddingRight,
        overscrollBehavior: document.body.style.overscrollBehavior
      }
      const scrollBarComp = window.innerWidth - document.documentElement.clientWidth
      document.body.style.position = 'fixed'
      document.body.style.top = `-${y}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      document.body.style.overscrollBehavior = 'none'
      if (scrollBarComp > 0) document.body.style.paddingRight = scrollBarComp + 'px'
      scrollLockRef.current.active = true
    } else if (!lock && scrollLockRef.current.active) {
      const { y, prev } = scrollLockRef.current
      document.body.style.position = prev.position
      document.body.style.top = prev.top
      document.body.style.width = prev.width
      document.body.style.overflow = prev.overflow
      document.body.style.paddingRight = prev.paddingRight
      document.body.style.overscrollBehavior = prev.overscrollBehavior
      scrollLockRef.current.active = false
      window.scrollTo(0, y)
    }
  }
  useEffect(() => () => lockScroll(false), [])

  // Erste Interaktion (Wheel/Touch/Key) sofort abfangen & Intro starten OHNE dass Seite scrollt
  useEffect(() => {
    if (disableIntro || introDone) return
    const startAndBlock = (e) => {
      if (introDone) return
      // Scroll keys
      const scrollKeys = ['ArrowDown','ArrowUp','PageDown','PageUp','Home','End','Space',' ']
      if (e.type === 'keydown' && !scrollKeys.includes(e.code) && !scrollKeys.includes(e.key)) return
      if (!introPlaying) startIntro()
      if (e.cancelable !== false) {
        e.preventDefault()
        e.stopPropagation()
      }
    }
    const blockWhilePlaying = (e) => {
      if (introPlaying && e.cancelable !== false) {
        e.preventDefault(); e.stopPropagation()
      }
    }
    window.addEventListener('wheel', startAndBlock, { passive: false })
    window.addEventListener('touchmove', startAndBlock, { passive: false })
    window.addEventListener('keydown', startAndBlock, { passive: false })
    // Falls Benutzer danach weiter versucht
    window.addEventListener('wheel', blockWhilePlaying, { passive: false })
    window.addEventListener('touchmove', blockWhilePlaying, { passive: false })
    window.addEventListener('keydown', blockWhilePlaying, { passive: false })
    return () => {
      window.removeEventListener('wheel', startAndBlock)
      window.removeEventListener('touchmove', startAndBlock)
      window.removeEventListener('keydown', startAndBlock)
      window.removeEventListener('wheel', blockWhilePlaying)
      window.removeEventListener('touchmove', blockWhilePlaying)
      window.removeEventListener('keydown', blockWhilePlaying)
    }
  }, [introPlaying, introDone])

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

  // Kein nachträgliches Auto-Weiter-Scrollen – Scroll-Snap übernimmt sanften Übergang

  // Keine Rückwärts-Animation mehr

  return (
  <section
      ref={ref}
  className="relative w-full min-h-screen section-bg-1"
      aria-label="Landing Hero"
      data-autoscroll="none"
    >
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
  {(!disableIntro && mountIntro) && (
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
                {/* CTA Buttons entfernt für flaches Design */}
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

  {/* Hintergrund unter dem Bild entfernt (nutzt section-bg-1) */}
      
  {/* Doppelte linke Textsektion entfernt (verursachte Overlay). */}
      
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


      {/* Skip Button / Progress Indicator - nur sichtbar wenn im Hero */}
      {!introPlaying && !introDone && isInHero && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 select-none">
          {/* Basis Layer (für helle rechte Seite am Anfang & finale Phase rechts) */}
          <div className="relative flex flex-col items-center">
            <div className="text-[10px] tracking-widest uppercase font-medium text-neutral-600">Scroll um zu starten</div>
            <div className="mt-1 w-6 h-10 rounded-full border border-neutral-500/70 relative overflow-hidden">
              <div className="absolute left-1/2 -translate-x-1/2 w-1 h-2 rounded-full bg-neutral-500/70 animate-pulse top-1"></div>
            </div>
            {/* Overlay Layer (weiß auf Bild) */}
            <motion.div
              aria-hidden
              className="absolute inset-0 flex flex-col items-center"
              style={{ clipPath, WebkitClipPath: clipPath }}
            >
              <div className="text-[10px] tracking-widest uppercase font-medium text-white drop-shadow-md">Scroll um zu starten</div>
              <div className="mt-1 w-6 h-10 rounded-full border border-white/85 relative overflow-hidden backdrop-blur-[1px]">
                <div className="absolute left-1/2 -translate-x-1/2 w-1 h-2 rounded-full bg-white/85 animate-pulse top-1"></div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  )
}