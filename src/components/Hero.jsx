import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

// Scroll-basiertes Landing Hero (ehemals PhotoJourney)
export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start','end start'] })

  const clipPath = useTransform(scrollYProgress,[0,0.6,1],[
    'ellipse(60vmin 90vmin at 85% 50%)',
    'ellipse(140vmin 140vmin at 55% 50%)',
    'ellipse(160vmin 160vmin at 50% 50%)'
  ])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.75, 0.82], [1, 1, 0])
  const [mountIntro, setMountIntro] = useState(true)
  const fadeOpacity = useTransform(scrollYProgress, [0, 0.04, 0.12, 0.14], [1, 1, 0.15, 0])
  const translateY = useTransform(scrollYProgress, [0, 0.14], [0, -46])
  const blur = useTransform(scrollYProgress, [0, 0.14], ['blur(0px)', 'blur(7px)'])
  const backdrop = useTransform(scrollYProgress, [0, 0.14], ['rgba(255,255,255,0.55)', 'rgba(255,255,255,0.0)'])

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', v => {
      if (v > 0.78 && mountIntro) setMountIntro(false)
      if (v < 0.72 && !mountIntro) setMountIntro(true)
    })
    return () => unsubscribe()
  }, [scrollYProgress, mountIntro])

  return (
    <section ref={ref} className="relative w-full" aria-label="Landing Hero">
      <div className="h-[140vh]" />
      <motion.div className="fixed inset-0 z-0 overflow-hidden bg-white" style={{ clipPath, WebkitClipPath: clipPath, opacity: imageOpacity }} aria-hidden="true">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </motion.div>
      {mountIntro && (
        <motion.div className="fixed inset-0 z-0 flex items-center pointer-events-none" style={{ opacity: fadeOpacity }}>
          <motion.div className="w-full max-w-7xl mx-auto px-6 lg:px-12" style={{ y: translateY, filter: blur }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 lg:pr-8 pointer-events-auto relative">
                <motion.div className="absolute -inset-4 rounded-3xl -z-10 backdrop-blur-sm" style={{ backgroundColor: backdrop }} />
                <div className="mb-6 uppercase tracking-[0.25em] text-xs font-semibold text-neutral-500">Individuelle & Professionelle Beratung</div>
                <h1 className="text-4xl sm:text-5xl font-display font-semibold leading-tight text-neutral-800 mb-6">Ernährungsberatung <span className="block text-accent">für nachhaltige Veränderungen</span></h1>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-xl">Wissenschaftlich fundiert, persönlich begleitet. Wir entwickeln gemeinsam eine Ernährung, die zu Ihrem Alltag, Ihren Zielen und Ihrer Gesundheit passt – ohne starre Verbote.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="btn-primary !px-10 !py-4 text-sm font-medium tracking-wide">Kostenlose Erstberatung</a>
                  <a href="#about" className="btn-secondary !px-10 !py-4 text-sm font-medium tracking-wide">Mehr erfahren</a>
                </div>
                <div className="mt-10 flex flex-wrap gap-8 text-sm text-neutral-500">
                  <div><div className="font-semibold text-neutral-800 text-lg">200+</div>Athlet:innen begleitet</div>
                  <div><div className="font-semibold text-neutral-800 text-lg">12+</div>Jahre Expertise</div>
                  <div><div className="font-semibold text-neutral-800 text-lg">98%</div>Zufriedenheit</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
