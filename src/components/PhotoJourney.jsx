import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

// Fixiertes Hero: bleibt stehen; nachfolgende Sections mit höherem z-index & vollem Hintergrund überdecken es.
export default function PhotoJourney() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start','end start'] })

  const clipPath = useTransform(scrollYProgress,[0,0.6,1],[
    'ellipse(60vmin 90vmin at 85% 50%)',
    'ellipse(140vmin 140vmin at 55% 50%)',
    'ellipse(160vmin 160vmin at 50% 50%)'
  ])

  const [hideText, setHideText] = useState(false)
  const [removeText, setRemoveText] = useState(false)
  const initialProgress = useRef(null)

  useEffect(() => {
    const target = document.getElementById('story-2012')
    if (!target) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setHideText(true)
      })
    }, { root: null, threshold: 0.15 })
    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  // Ausblenden erst nach tatsächlichem Scroll: warte auf Differenz gegenüber initialem Wert
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', v => {
      if (initialProgress.current === null) {
        initialProgress.current = v
        return
      }
      // Sobald 20% mehr gescrollt als initial (oder absolut > 0.25) -> ausblenden
      if (!hideText && (v > initialProgress.current + 0.2 || v > 0.25)) {
        setHideText(true)
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress, hideText])

  // Nach dem Ausblenden komplett entfernen (Performance & Accessibility)
  useEffect(() => {
    if (hideText) {
      const t = setTimeout(() => setRemoveText(true), 600) // etwas länger als die 500ms Transition
      return () => clearTimeout(t)
    }
  }, [hideText])

  return (
    <section ref={ref} className="relative w-full" aria-label="Intro Hero">
      {/* Spacer sorgt für Scroll (Hero selbst fixed) */}
      <div className="h-[140vh]" />

      {/* Fixiertes Hero unterhalb (niedriger z-index) */}
      <motion.div
        className="fixed inset-0 z-0 overflow-hidden"
        style={{ clipPath, WebkitClipPath: clipPath }}
        aria-hidden="true"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-white/70" />
      </motion.div>

      {/* Fixierter Textlayer (wird nach Fade dauerhaft entfernt) */}
      {!removeText && (
        <div className={`fixed inset-0 z-0 flex items-center pointer-events-none transition-opacity duration-500 ${hideText ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 lg:pr-8 pointer-events-auto">
                <div className="mb-6 uppercase tracking-[0.25em] text-xs font-semibold text-neutral-500">Individuelle & Professionelle Beratung</div>
                <h1 className="text-4xl sm:text-5xl font-display font-semibold leading-tight text-neutral-800 mb-6">
                  Ernährungsberatung
                  <span className="block text-accent">für nachhaltige Veränderungen</span>
                </h1>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-xl">
                  Wissenschaftlich fundiert, persönlich begleitet. Wir entwickeln gemeinsam eine Ernährung, die zu Ihrem Alltag, Ihren Zielen und Ihrer Gesundheit passt – ohne starre Verbote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="btn-primary !px-10 !py-4 text-sm font-medium tracking-wide">Kostenlose Erstberatung</a>
                  <a href="#about" className="btn-secondary !px-10 !py-4 text-sm font-medium tracking-wide">Mehr erfahren</a>
                </div>
                <div className="mt-10 flex flex-wrap gap-8 text-sm text-neutral-500">
                  <div>
                    <div className="font-semibold text-neutral-800 text-lg">200+</div>
                    Athlet:innen begleitet
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-800 text-lg">12+</div>
                    Jahre Expertise
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-800 text-lg">98%</div>
                    Zufriedenheit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
