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
  <div className="relative z-30 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden py-24 lg:py-32" style={{ transform: 'translate3d(0,0,0)', willChange: 'auto' }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-60 -right-40 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        <div className="absolute -bottom-60 -left-40 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-primary-100 to-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 grid lg:grid-cols-5 gap-16 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 lg:col-span-3">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-primary-100 to-accent-100 text-primary-900 border border-primary-200">
                <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/25 hover:scale-105">
                  <span className="relative z-10">Kostenlose Beratung starten</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-accent-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl transition-all duration-300 hover:border-gray-900 hover:text-gray-900">
                  Mehr erfahren
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">200+</div>
                  <div className="text-sm text-gray-600 font-medium">Erfolgreiche Athleten</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">98%</div>
                  <div className="text-sm text-gray-600 font-medium">Zufriedenheitsrate</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">12+</div>
                  <div className="text-sm text-gray-600 font-medium">Jahre Expertise</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-2">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200">
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
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating Success Card - angepasst an kleinere Bildgröße */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xl p-4 rounded-xl border border-white/20 shadow-xl">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-gray-900 mb-1">Erfolgsgeschichte</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">Marathon-PB: <span className="font-semibold text-gray-900">-8 Min</span> durch Sporternährung</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Quality Badge - angepasst */}
                <div className="absolute top-4 right-4 bg-accent-600 text-white p-3 rounded-xl shadow-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent-400 to-primary-500 rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// TypewriterQuote komplett entfernt - verursachte Zucken
