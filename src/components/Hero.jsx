import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [debugMode, setDebugMode] = useState(false)
  const [photoPositions, setPhotoPositions] = useState({
    photo1: { x: 50, y: 20 },
    photo2: { x: 30, y: 60 }
  })

  const convertToTailwind = (x, y) => {
    return `left-[${x}%] top-[${y}%]`
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'd' || e.key === 'D') {
        setDebugMode(!debugMode)
      }
    }
    
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [debugMode])

  // Smooth full-screen transition animations
  const containerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95 
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.3
      }
    }
  }

  const backgroundVariants = {
    hidden: { 
      opacity: 0,
      scale: 1.1 
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const contentVariants = {
    hidden: { 
      opacity: 0,
      y: 50 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <motion.div 
      className="relative z-30 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden min-h-screen flex items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
  {/* Solide Hintergrundebene um das fixe Intro komplett zu überdecken */}
  <div className="absolute inset-0 bg-white pointer-events-none" aria-hidden="true"></div>
      {/* Floating Background Elements with smooth animation */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        variants={backgroundVariants}
      >
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      </motion.div>

      {/* Trust Badge - positioned absolutely */}
      <motion.div 
        className="absolute top-6 left-6 z-20 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
        variants={contentVariants}
      >
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">Dr. Anna Müller • 12+ Jahre Erfahrung</span>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center py-12 lg:py-0">
          
          {/* Left Content Column */}
          <motion.div 
            className="lg:col-span-6 px-4 sm:px-6 lg:px-8"
            variants={contentVariants}
          >
            <div className="max-w-2xl mx-auto lg:mx-0">
              
              {/* Emotional Pre-Headline */}
              <div className="mb-6">
                <motion.span 
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800 shadow-sm"
                  variants={contentVariants}
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  Mehr Energie. Bessere Leistung. Echte Ergebnisse.
                </motion.span>
              </div>

              {/* Main Headline */}
              <motion.h1 
                className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl"
                variants={contentVariants}
              >
                <motion.span 
                  className="block mb-2"
                  variants={contentVariants}
                >
                  Sporternährung, die
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent"
                  variants={contentVariants}
                >
                  Ihr Leben verändert
                </motion.span>
              </motion.h1>
              
              {/* Emotional Subheadline */}
              <motion.p 
                className="mt-6 text-lg text-gray-700 sm:text-xl leading-relaxed font-medium max-w-xl"
                variants={contentVariants}
              >
                Schluss mit Energielöchern und Plateau-Phasen. 
                <span className="text-primary-600 font-semibold"> Entdecken Sie, wie die richtige Ernährung Ihre sportlichen Träume Realität werden lässt.</span>
              </motion.p>

              {/* Personal Story Teaser */}
              <motion.div 
                className="mt-8 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-primary-100 shadow-warm"
                variants={contentVariants}
              >
                <div className="flex items-start space-x-4">
                  <img 
                    src="/Dr.mueller.png" 
                    alt="Dr. Anna Müller" 
                    className="w-16 h-16 rounded-full object-cover border-3 border-primary-200 shadow-lg flex-shrink-0"
                  />
                  <div>
                    <p className="text-gray-700 italic leading-relaxed">
                      "Nach 12 Jahren als Sporternährungsexpertin weiß ich: 
                      <span className="text-primary-700 font-semibold"> Der Unterschied liegt nicht in perfekten Plänen, sondern in der persönlichen Betreuung."</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-2 font-medium">— Dr. Anna Müller, promovierte Oecotrophologin</p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="mt-8 flex flex-col sm:flex-row gap-4"
                variants={contentVariants}
              >
                <a 
                  href="#contact" 
                  className="group flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 hover:scale-105 hover:shadow-glow transition-all duration-300 transform shadow-lg"
                >
                  <span>Kostenlose Erstberatung sichern</span>
                  <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a 
                  href="#about" 
                  className="group flex items-center justify-center px-8 py-4 border-2 border-primary-300 text-base font-semibold rounded-xl text-primary-700 bg-white/80 backdrop-blur-sm hover:bg-primary-50 hover:border-primary-400 hover:scale-105 transition-all duration-300 transform shadow-lg"
                >
                  <span>Meine Geschichte entdecken</span>
                  <svg className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </a>
              </motion.div>

              {/* Social Proof Indicators */}
              <motion.div 
                className="mt-12 grid grid-cols-3 gap-6"
                variants={contentVariants}
              >
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary-600">200+</div>
                  <div className="text-xs lg:text-sm text-gray-600 font-medium">Erfolgreiche Athleten</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-accent-600">98%</div>
                  <div className="text-xs lg:text-sm text-gray-600 font-medium">Zufriedenheitsrate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary-600">12+</div>
                  <div className="text-xs lg:text-sm text-gray-600 font-medium">Jahre Expertise</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div 
            className="lg:col-span-6 mt-12 lg:mt-0"
            variants={contentVariants}
          >
            <div className="relative">
              <motion.img
                className="w-full h-96 lg:h-full lg:min-h-[600px] object-cover rounded-2xl lg:rounded-3xl shadow-2xl"
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Sporternährung und gesunde Lebensmittel"
                variants={contentVariants}
              />
              
              {/* Overlay with Success Metrics */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent rounded-2xl lg:rounded-3xl"></div>
              
              {/* Floating Success Cards */}
              <motion.div 
                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-2xl max-w-xs"
                variants={contentVariants}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Aktuelle Erfolgsgeschichte</p>
                    <p className="text-xs text-gray-600">Marathon-PB: -8 Minuten durch optimierte Ernährung</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute top-6 right-6 bg-accent-500 text-white p-3 rounded-full shadow-lg"
                variants={contentVariants}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
