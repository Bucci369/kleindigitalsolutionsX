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
  <div className="relative z-30 section-bg-2 overflow-hidden py-24 lg:py-32 border-t border-b border-neutral-100" style={{ transform: 'translate3d(0,0,0)', willChange: 'auto' }}>
      <div className="absolute inset-0 overflow-hidden">
  {/* dekorative Hintergründe entfernt */}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 grid lg:grid-cols-5 gap-16 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 lg:col-span-3">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-neutral-100 text-neutral-800 border border-neutral-200">
                <svg className="w-5 h-5 mr-3 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Wissenschaftlich fundiert · Nachhaltig · Individuell
              </div>
              
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold text-neutral-800 leading-tight tracking-tight">
                  <span className="block mb-3">Ernährung, die</span>
                  <span className="block text-accent">Ihr Leben</span>
                  <span className="block text-neutral-800">verändert</span>
                </h1>
              </div>
              
              <div className="max-w-2xl">
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
                  Schluss mit <span className="font-semibold text-gray-900">Energielöchern</span> und <span className="font-semibold text-gray-900">Plateau-Phasen</span>. 
                  Entdecken Sie, wie personalisierte Sporternährung Ihre Träume Realität werden lässt.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-8 py-4 bg-neutral-900 text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-neutral-700">
                  <span className="relative z-10">Kostenlose Beratung starten</span>
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl transition-all duration-300 hover:border-gray-900 hover:text-gray-900">
                  Mehr erfahren
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold text-neutral-900">200+</div>
                  <div className="text-sm text-gray-600 font-medium">Erfolgreiche Athleten</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold text-neutral-900">98%</div>
                  <div className="text-sm text-gray-600 font-medium">Zufriedenheitsrate</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold text-neutral-900">12+</div>
                  <div className="text-sm text-gray-600 font-medium">Jahre Expertise</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-2">
            <div className="relative">
              <div className="relative overflow-hidden">
                <div className="aspect-[4/5] lg:aspect-[2/3]">
                  <picture>
                    <source srcSet="/Frau.webp" type="image/webp" />
                    <img 
                      className="w-full h-full object-cover" 
                      src="/Frau.webp" 
                      alt="Portrait von Dr. Anna Müller – Sporternährung und gesunde Ernährung" 
                      loading="eager" 
                      fetchpriority="high" 
                      width="600" 
                      height="750" 
                    />
                  </picture>
                </div>
                
                <div className="absolute inset-0 bg-black/30" />
                
                {/* Floating success card removed for flat design */}
                
                {/* Floating Quality Badge - angepasst */}
                {/* Qualitäts-Badge entfernt */}
                
                {/* Decorative Elements */}
                {/* dekorative Gradient-Kreise entfernt */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// TypewriterQuote komplett entfernt - verursachte Zucken
