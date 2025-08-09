import { useState, useEffect, useRef } from 'react'

export default function ValueIntro() {
  const [debugMode, setDebugMode] = useState(false)
  const [photoPositions, setPhotoPositions] = useState({
    photo1: { x: 50, y: 20 },
    photo2: { x: 30, y: 60 }
  })
  const convertToTailwind = (x, y) => `left-[${x}%] top-[${y}%]`
  useEffect(() => { const handleKeyPress = (e) => { if (e.key.toLowerCase() === 'd') setDebugMode(d => !d) }; window.addEventListener('keydown', handleKeyPress); return () => window.removeEventListener('keydown', handleKeyPress) }, [])
  return (
    <div className="relative z-30 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-white pointer-events-none" aria-hidden="true"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center py-12 lg:py-0">
          <div className="lg:col-span-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <div className="mb-6"><span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800 shadow-sm"><svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>Mehr Energie. Bessere Leistung. Echte Ergebnisse.</span></div>
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl"><span className="block mb-2">Sporternährung, die</span><span className="block text-gray-900">Ihr Leben verändert</span></h1>
              <p className="mt-6 text-lg text-gray-700 sm:text-xl leading-relaxed font-medium max-w-xl">Schluss mit Energielöchern und Plateau-Phasen.<span className="text-primary-600 font-semibold"> Entdecken Sie, wie die richtige Ernährung Ihre sportlichen Träume Realität werden lässt.</span></p>
              <TypewriterQuote />
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="text-center"><div className="text-2xl lg:text-3xl font-bold text-primary-600">200+</div><div className="text-xs lg:text-sm text-gray-600 font-medium">Erfolgreiche Athleten</div></div>
                <div className="text-center"><div className="text-2xl lg:text-3xl font-bold text-accent-600">98%</div><div className="text-xs lg:text-sm text-gray-600 font-medium">Zufriedenheitsrate</div></div>
                <div className="text-center"><div className="text-2xl lg:text-3xl font-bold text-primary-600">12+</div><div className="text-xs lg:text-sm text-gray-600 font-medium">Jahre Expertise</div></div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 mt-12 lg:mt-0">
            <div className="relative">
              <picture><source srcSet="/Frau.webp" type="image/webp" /><img className="w-full h-96 lg:h-full lg:min-h-[600px] object-cover rounded-2xl lg:rounded-3xl shadow-2xl" src="/Frau.webp" alt="Portrait von Dr. Anna Müller – Sporternährung und gesunde Ernährung" loading="eager" fetchpriority="high" /></picture>
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent rounded-2xl lg:rounded-3xl" />
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-2xl max-w-xs"><div className="flex items-center space-x-3"><div className="flex-shrink-0"><div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center"><svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div></div><div><p className="text-sm font-semibold text-gray-900">Aktuelle Erfolgsgeschichte</p><p className="text-xs text-gray-600">Marathon-PB: -8 Minuten durch optimierte Ernährung</p></div></div></div>
              <div className="absolute top-6 right-6 bg-accent-500 text-white p-3 rounded-full shadow-lg"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TypewriterQuote() {
  const fullText = '"Nach 12 Jahren als Sporternährungsexpertin weiß ich: Der Unterschied liegt nicht in perfekten Plänen, sondern in der persönlichen Betreuung."'
  const author = '— Dr. Anna Müller, promovierte Oecotrophologin'
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)
  const idx = useRef(0)
  const timer = useRef(null)
  useEffect(() => { const el = ref.current; if (!el) return; const io = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) setStarted(true) }) }, { threshold: 0.3 }); io.observe(el); return () => io.disconnect() }, [])
  useEffect(() => { if (!started || done) return; const step = () => { if (idx.current < fullText.length) { setDisplayed(p => p + fullText.charAt(idx.current)); idx.current += 1; timer.current = setTimeout(step, 22) } else { setDone(true) } }; timer.current = setTimeout(step, 200); return () => timer.current && clearTimeout(timer.current) }, [started, done, fullText])
  return (
    <div ref={ref} className="mt-8 relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary-100 shadow-warm">
      <div aria-hidden="true" className="invisible select-none pointer-events-none"><div className="flex items-start space-x-4"><div className="w-16 h-16 rounded-full border" /><div><p className="text-gray-700 italic leading-relaxed">{fullText}</p><p className="text-sm text-gray-500 mt-2 font-medium">{author}</p></div></div></div>
      <div className="absolute inset-0 p-6"><div className="flex items-start space-x-4"><img src="/frau2.webp" alt="Portrait von Dr. Anna Müller" className="w-16 h-16 rounded-full object-cover border-3 border-primary-200 shadow-lg flex-shrink-0" loading="lazy" /><div className="flex-1"><p className="text-gray-700 italic leading-relaxed">{displayed}{!done && <span className="inline-block w-[6px] h-5 align-middle bg-primary-600 ml-0.5 animate-pulse" />}</p><p className={`text-sm text-gray-500 mt-2 font-medium transition-opacity duration-500 ${done ? 'opacity-100' : 'opacity-0'}`}>{author}</p></div></div></div>
    </div>
  )
}
