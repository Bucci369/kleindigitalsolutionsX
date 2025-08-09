import { motion, useScroll, useTransform, animate } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// 1. MORPHING TEXT BLOBS - Text wird zu organischen Formen
export function MorphingTextJourney() {
  const containerRef = useRef(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const { scrollYProgress } = useScroll({ target: containerRef })

  const steps = [
    { text: "KLARHEIT", color: "from-emerald-400 to-teal-600" },
  { text: "VERSTEHEN", color: "from-emerald-400 to-teal-600" },
    { text: "HANDELN", color: "from-purple-400 to-pink-600" },
    { text: "ERFOLG", color: "from-orange-400 to-red-600" }
  ]

  return (
    <div ref={containerRef} className="relative min-h-[400vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`absolute text-8xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
            style={{
              opacity: useTransform(scrollYProgress, 
                [index * 0.25, index * 0.25 + 0.1, (index + 1) * 0.25 - 0.1, (index + 1) * 0.25],
                [0, 1, 1, 0]
              ),
              scale: useTransform(scrollYProgress,
                [index * 0.25, index * 0.25 + 0.15, (index + 1) * 0.25],
                [0.8, 1.2, 2.5]
              ),
              rotateX: useTransform(scrollYProgress,
                [index * 0.25, (index + 1) * 0.25],
                [0, 360]
              ),
              filter: useTransform(scrollYProgress,
                [index * 0.25, (index + 1) * 0.25],
                ["blur(0px)", "blur(10px)"]
              )
            }}
          >
            {step.text}
          </motion.div>
        ))}
        
        {/* Hintergrund Partikeln */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-emerald-300 to-teal-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                scale: useTransform(scrollYProgress, [0, 1], [0, 1]),
                y: useTransform(scrollYProgress, [0, 1], [0, -200]),
                opacity: useTransform(scrollYProgress, [0, 0.8, 1], [0, 0.8, 0])
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// 2. SCHWEBENDE SVG ELEMENTE - Organische Formen die sich transformieren
export function FloatingSVGJourney() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  return (
    <div ref={containerRef} className="relative min-h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* SVG Hintergrund mit morphenden Formen */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {/* Morphende Blobs */}
          <motion.path
            d="M20,50 Q30,20 50,30 Q70,40 80,50 Q70,80 50,70 Q30,60 20,50"
            fill="url(#gradient1)"
            style={{
              pathLength: useTransform(scrollYProgress, [0, 0.25], [0, 1]),
              scale: useTransform(scrollYProgress, [0, 0.25, 0.5], [0.5, 1.2, 0.3]),
              x: useTransform(scrollYProgress, [0, 1], [-20, 20]),
              rotate: useTransform(scrollYProgress, [0, 1], [0, 360])
            }}
          />
          
          <motion.path
            d="M60,20 Q80,10 90,30 Q95,50 85,70 Q75,85 60,80 Q45,75 40,60 Q35,45 45,35 Q55,25 60,20"
            fill="url(#gradient2)"
            style={{
              pathLength: useTransform(scrollYProgress, [0.25, 0.5], [0, 1]),
              scale: useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0.3, 1.5, 0.8]),
              y: useTransform(scrollYProgress, [0, 1], [10, -10])
            }}
          />

          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Schwebende Textelemente */}
        <div className="relative h-full flex items-center justify-center">
          {[
            { text: "Verstehen Sie Ihren Körper", progress: [0, 0.25] },
            { text: "Finden Sie Balance", progress: [0.25, 0.5] },
            { text: "Erreichen Sie Ihre Ziele", progress: [0.5, 0.75] },
            { text: "Leben Sie gesund", progress: [0.75, 1] }
          ].map((step, index) => (
            <motion.div
              key={index}
              className="absolute text-2xl font-bold text-gray-800"
              style={{
                opacity: useTransform(scrollYProgress, step.progress, [0, 1]),
                y: useTransform(scrollYProgress, step.progress, [50, 0]),
                x: useTransform(scrollYProgress, step.progress, [Math.sin(index) * 100, 0])
              }}
            >
              {step.text}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// 3. LIQUID MORPHING - Flüssige Übergänge wie Wasser
export function LiquidMorphJourney() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  return (
  <div ref={containerRef} className="relative min-h-[500vh] bg-gradient-to-b from-accent-50 to-primary-50">
      <div className="sticky top-0 h-screen overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
          {/* Flüssige Formen */}
          <motion.path
            d="M 0,400 Q 300,100 600,400 T 1200,400 L 1200,800 L 0,800 Z"
            fill="url(#liquidGradient)"
            style={{
              pathLength: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
              y: useTransform(scrollYProgress, [0, 1], [0, -200]),
              scaleY: useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.2, 0.8])
            }}
          />
          
          {/* Zweite Welle */}
          <motion.path
            d="M 0,500 Q 400,200 800,500 T 1200,500 L 1200,800 L 0,800 Z"
            fill="url(#liquidGradient2)"
            style={{
              pathLength: useTransform(scrollYProgress, [0.3, 0.6], [0, 1]),
              y: useTransform(scrollYProgress, [0, 1], [100, -100]),
              scaleX: useTransform(scrollYProgress, [0.3, 0.6, 1], [0.8, 1.3, 1])
            }}
          />

          <defs>
            <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#58ac81" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3d8d66" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="liquidGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-white">
          <motion.h2
            className="text-6xl font-black mb-8"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
              scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]),
              rotateY: useTransform(scrollYProgress, [0, 1], [0, 180])
            }}
          >
            Ihre Transformation
          </motion.h2>

          {/* Schwebende Elemente */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white/60 rounded-full"
              style={{
                left: `${20 + (i * 4)}%`,
                top: `${30 + Math.sin(i) * 20}%`,
                scale: useTransform(scrollYProgress, [0, 1], [0, 1]),
                y: useTransform(scrollYProgress, [0, 1], [0, -300 - i * 10]),
                opacity: useTransform(scrollYProgress, [0, 0.7, 1], [0, 1, 0]),
                rotate: useTransform(scrollYProgress, [0, 1], [0, 360 * (i % 2 ? 1 : -1)])
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// 4. ULTRA-PREMIUM BOTANICAL MASTERPIECE - Awwwards-level Animation
export function GrowingPlantJourney() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <div ref={containerRef} className="relative min-h-[400vh] bg-gradient-to-b from-neutral-900 via-stone-800 to-neutral-900">
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Premium Atmospheric Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/5 via-transparent to-emerald-900/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-amber-950/5 to-transparent" />
        </div>

        {/* Ultra-detailed SVG Masterpiece */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          
          <defs>
            {/* Premium Gradients with luxury colors */}
            <linearGradient id="luxuryTrunk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B4513" />
              <stop offset="25%" stopColor="#A0522D" />
              <stop offset="50%" stopColor="#CD853F" />
              <stop offset="75%" stopColor="#8B4513" />
              <stop offset="100%" stopColor="#5D4037" />
            </linearGradient>
            
            <linearGradient id="luxuryBranch" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8BC34A" />
              <stop offset="30%" stopColor="#689F38" />
              <stop offset="70%" stopColor="#33691E" />
              <stop offset="100%" stopColor="#1B5E20" />
            </linearGradient>
            
            <radialGradient id="luxuryLeaf" cx="20%" cy="20%">
              <stop offset="0%" stopColor="#C8E6C9" />
              <stop offset="20%" stopColor="#81C784" />
              <stop offset="50%" stopColor="#4CAF50" />
              <stop offset="80%" stopColor="#2E7D32" />
              <stop offset="100%" stopColor="#1B5E20" />
            </radialGradient>

            <radialGradient id="luxuryFlower" cx="30%" cy="20%">
              <stop offset="0%" stopColor="#FFF3E0" />
              <stop offset="30%" stopColor="#FFCC02" />
              <stop offset="60%" stopColor="#FF8F00" />
              <stop offset="100%" stopColor="#E65100" />
            </radialGradient>

            <radialGradient id="berryGradient" cx="30%" cy="30%">
              <stop offset="0%" stopColor="#AD1457" />
              <stop offset="50%" stopColor="#6A1B9A" />
              <stop offset="100%" stopColor="#4A148C" />
            </radialGradient>

            <linearGradient id="budGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#66BB6A" />
              <stop offset="30%" stopColor="#4CAF50" />
              <stop offset="70%" stopColor="#2E7D32" />
              <stop offset="100%" stopColor="#1B5E20" />
            </linearGradient>

            <radialGradient id="appleGradient" cx="40%" cy="30%">
              <stop offset="0%" stopColor="#FF5722" />
              <stop offset="30%" stopColor="#E53935" />
              <stop offset="70%" stopColor="#C62828" />
              <stop offset="100%" stopColor="#B71C1C" />
            </radialGradient>

            <radialGradient id="appleHighlight" cx="30%" cy="20%">
              <stop offset="0%" stopColor="#FFCDD2" />
              <stop offset="50%" stopColor="#EF9A9A" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>

            {/* Advanced Filters für Luxus-Effekte */}
            <filter id="luxuryShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3" floodColor="#000"/>
              <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.4" floodColor="#000"/>
            </filter>

            <filter id="glowEffect" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Noise Pattern für Texture */}
            <filter id="noiseTexture">
              <feTurbulence baseFrequency="0.9" numOctaves="4" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2"/>
            </filter>
          </defs>

          {/* Haupt-Stamm - ultra-detailliert */}
          <motion.path
            d="M600,760 Q598,700 602,640 Q596,580 604,520 Q598,460 602,400 Q596,340 600,280 Q598,220 602,160 Q596,100 600,40 Q598,20 600,0"
            stroke="url(#luxuryTrunk)"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
            filter="url(#luxuryShadow)"
            style={{
              pathLength: useTransform(scrollYProgress, [0, 0.25], [0, 1]),
              strokeDasharray: useTransform(scrollYProgress, [0, 0.25], ["0,1000", "1000,0"])
            }}
          />

          {/* Stamm-Textur Lines */}
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${598 + i * 0.5},${760 - i * 90} Q${600 + (i % 2) * 2},${700 - i * 90} ${598 + i * 0.5},${640 - i * 90}`}
              stroke="#654321"
              strokeWidth="0.8"
              opacity="0.4"
              fill="none"
              style={{
                pathLength: useTransform(scrollYProgress, [0.1 + i * 0.02, 0.3 + i * 0.02], [0, 1])
              }}
            />
          ))}

          {/* Premium Hauptäste */}
          <motion.path
            d="M600,400 Q640,390 680,380 Q720,370 760,365 Q800,362 840,360 Q880,358 920,356"
            stroke="url(#luxuryBranch)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            filter="url(#luxuryShadow)"
            style={{
              pathLength: useTransform(scrollYProgress, [0.2, 0.4], [0, 1]),
              strokeDasharray: useTransform(scrollYProgress, [0.2, 0.4], ["0,800", "800,0"])
            }}
          />
          
          <motion.path
            d="M602,350 Q562,340 522,330 Q482,320 442,315 Q402,312 362,310 Q322,308 282,306"
            stroke="url(#luxuryBranch)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            filter="url(#luxuryShadow)"
            style={{
              pathLength: useTransform(scrollYProgress, [0.25, 0.45], [0, 1]),
              strokeDasharray: useTransform(scrollYProgress, [0.25, 0.45], ["0,800", "800,0"])
            }}
          />

          {/* Sekundäre Äste */}
          <motion.path
            d="M600,250 Q640,240 680,235 Q720,230 760,228"
            stroke="url(#luxuryBranch)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            style={{
              pathLength: useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
            }}
          />

          <motion.path
            d="M602,200 Q562,190 522,185 Q482,180 442,178"
            stroke="url(#luxuryBranch)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            style={{
              pathLength: useTransform(scrollYProgress, [0.35, 0.55], [0, 1])
            }}
          />

          {/* Ultra-realistische Blätter */}
          {[
            { path: "M920,356 Q935,340 925,320 Q910,300 895,310 Q880,320 885,340 Q900,360 920,356", delay: 0.45, scale: 1.2 },
            { path: "M282,306 Q267,290 277,270 Q292,250 307,260 Q322,270 317,290 Q302,310 282,306", delay: 0.5, scale: 1.1 },
            { path: "M760,228 Q775,212 765,192 Q750,172 735,182 Q720,192 725,212 Q740,232 760,228", delay: 0.55, scale: 1.0 },
            { path: "M442,178 Q427,162 437,142 Q452,122 467,132 Q482,142 477,162 Q462,182 442,178", delay: 0.6, scale: 0.9 },
            { path: "M600,0 Q620,−15 610,−35 Q590,−45 575,−30 Q565,−10 580,5 Q595,15 600,0", delay: 0.65, scale: 1.3 }
          ].map((leaf, i) => (
            <g key={i}>
              <motion.path
                d={leaf.path}
                fill="url(#luxuryLeaf)"
                stroke="#2E7D32"
                strokeWidth="1.5"
                filter="url(#softGlow)"
                style={{
                  scale: useTransform(scrollYProgress, [leaf.delay, leaf.delay + 0.15], [0, leaf.scale]),
                  rotate: useTransform(scrollYProgress, [leaf.delay, 1], [0, Math.sin(i * 3) * 25]),
                  opacity: useTransform(scrollYProgress, [leaf.delay, leaf.delay + 0.1, 1], [0, 1, 0.95])
                }}
              />
              {/* Blatt-Adern für extra Realismus */}
              <motion.path
                d={`M${920 - i * 160},${356 - i * 25} Q${925 - i * 160},${346 - i * 25} ${930 - i * 160},${336 - i * 25}`}
                stroke="#1B5E20"
                strokeWidth="0.5"
                opacity="0.6"
                fill="none"
                style={{
                  pathLength: useTransform(scrollYProgress, [leaf.delay + 0.1, leaf.delay + 0.2], [0, 1])
                }}
              />
            </g>
          ))}


          {/* Floating Pollen Particles */}
          {[...Array(30)].map((_, i) => (
            <motion.circle
              key={i}
              cx={400 + (i * 20) % 400}
              cy={200 + Math.sin(i) * 150}
              r="1.5"
              fill="#FFF9C4"
              opacity="0.6"
              filter="url(#softGlow)"
              style={{
                scale: useTransform(scrollYProgress, [0.6, 0.9], [0, 1]),
                y: useTransform(scrollYProgress, [0.6, 1], [0, -400 - i * 10]),
                x: useTransform(scrollYProgress, [0.6, 1], [0, Math.sin(i) * 50]),
                opacity: useTransform(scrollYProgress, [0.6, 0.85, 1], [0, 0.8, 0]),
                rotate: useTransform(scrollYProgress, [0.6, 1], [0, 360 * (i % 2 ? 1 : -1)])
              }}
            />
          ))}

        </svg>

        {/* Ultra-premium Typography */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-8 z-10">
            
            {/* Main Heading */}
            <motion.div
              className="mb-8"
              style={{
                opacity: useTransform(scrollYProgress, [0.5, 0.7], [0, 1]),
                y: useTransform(scrollYProgress, [0.5, 0.7], [60, 0])
              }}
            >
              <h2 className="text-7xl md:text-8xl font-thin text-amber-100 mb-4 tracking-wider leading-none">
                TRANSFORMATION
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto opacity-60"></div>
            </motion.div>

            {/* Subtitle */}
            <motion.h3
              className="text-2xl md:text-3xl font-light text-stone-300 mb-8 tracking-wide"
              style={{
                opacity: useTransform(scrollYProgress, [0.6, 0.8], [0, 1]),
                y: useTransform(scrollYProgress, [0.6, 0.8], [40, 0])
              }}
            >
              Organisches Wachstum. Nachhaltige Veränderung.
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-stone-400 font-light leading-relaxed max-w-2xl mx-auto"
              style={{
                opacity: useTransform(scrollYProgress, [0.7, 0.9], [0, 1]),
                y: useTransform(scrollYProgress, [0.7, 0.9], [30, 0])
              }}
            >
              Wie die Natur folgen auch Sie Ihrem eigenen Rhythmus. 
              <br />
              <span className="text-amber-300">Schritt für Schritt zu Ihrem authentischen Selbst.</span>
            </motion.p>

            {/* Decorative Elements */}
            <motion.div
              className="mt-12 flex justify-center items-center space-x-4"
              style={{
                opacity: useTransform(scrollYProgress, [0.8, 0.95], [0, 1]),
                scale: useTransform(scrollYProgress, [0.8, 0.95], [0.8, 1])
              }}
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400"></div>
            </motion.div>

          </div>
        </div>

        {/* Ambient Lighting Effects */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${20 + i * 15}%`,
              top: `${30 + Math.sin(i) * 20}%`,
              background: `radial-gradient(circle, rgba(255,193,7,${0.03 + i * 0.01}) 0%, transparent 70%)`,
              scale: useTransform(scrollYProgress, [0.3, 0.8], [0, 1.2]),
              opacity: useTransform(scrollYProgress, [0.3, 0.9, 1], [0, 0.4, 0])
            }}
          />
        ))}

      </div>
    </div>
  )
}

// 5. PARTICLE EXPLOSION - Dynamische Partikel-Effekte
export function ParticleExplosionJourney() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  return (
    <div ref={containerRef} className="relative min-h-[400vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Zentrale Explosion */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(50)].map((_, i) => {
            const angle = (i / 50) * Math.PI * 2
            const distance = 100 + (i * 5)
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"
                style={{
                  x: useTransform(scrollYProgress, [0, 1], [0, Math.cos(angle) * distance]),
                  y: useTransform(scrollYProgress, [0, 1], [0, Math.sin(angle) * distance]),
                  scale: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.3]),
                  opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
                }}
              />
            )
          })}
        </div>

        {/* Zentrale Texte */}
        <div className="relative h-full flex items-center justify-center text-white">
          {[
            { text: "ENERGIE", delay: 0.2, color: "text-yellow-400" },
            { text: "KRAFT", delay: 0.4, color: "text-red-400" },
            { text: "LEBEN", delay: 0.6, color: "text-accent-400" }
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`absolute text-6xl font-black ${item.color}`}
              style={{
                opacity: useTransform(scrollYProgress, [item.delay, item.delay + 0.3], [0, 1]),
                scale: useTransform(scrollYProgress, [item.delay, item.delay + 0.3, 1], [0.5, 1.5, 0.8]),
                rotate: useTransform(scrollYProgress, [item.delay, 1], [0, 360])
              }}
            >
              {item.text}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default {
  MorphingTextJourney,
  FloatingSVGJourney,
  LiquidMorphJourney,
  GrowingPlantJourney,
  ParticleExplosionJourney
}