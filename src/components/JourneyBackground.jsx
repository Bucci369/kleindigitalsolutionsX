import { motion, useScroll, useTransform } from 'framer-motion'

export default function JourneyBackground({ showTexts = true, circleSizeVmin = 30 }) {
  const { scrollYProgress } = useScroll()

  // Modified animation timings to delay the image merging
  // Initial images are positioned further apart
  // Images only come together after text has scrolled
  const leftClip = useTransform(
    scrollYProgress,
    [0.0, 0.3, 0.5],
    [
      `circle(${circleSizeVmin}vmin at -30% 55%)`, // Start further apart
      `circle(${circleSizeVmin}vmin at -30% 55%)`, // Hold position during text scroll
      `circle(${circleSizeVmin + 4}vmin at 50% 55%)` // Come together after text scrolls
    ]
  )

  const rightClip = useTransform(
    scrollYProgress,
    [0.0, 0.3, 0.5],
    [
      `circle(${circleSizeVmin}vmin at 130% 55%)`, // Start further apart
      `circle(${circleSizeVmin}vmin at 130% 55%)`, // Hold position during text scroll
      `circle(${circleSizeVmin + 4}vmin at 50% 55%)` // Come together after text scrolls
    ]
  )

  // Initial welcome text animation
  const initialTextOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.05, 0.25, 0.3],
    [1, 1, 0.5, 0]
  )
  const initialTextY = useTransform(
    scrollYProgress,
    [0.0, 0.25, 0.3],
    [0, 0, -10]
  )
  const initialTextScale = useTransform(
    scrollYProgress,
    [0.0, 0.25, 0.3],
    [1, 1, 0.98]
  )

  // Other text animations - first text now appears earlier and stays longer
  const t1Opacity = useTransform(
    scrollYProgress, 
    [0.05, 0.1, 0.25, 0.3], 
    [0, 1, 1, 0]
  )
  const t1Y = useTransform(
    scrollYProgress, 
    [0.05, 0.1, 0.25, 0.3], 
    [10, 0, 0, -10]
  )
  const t1Scale = useTransform(
    scrollYProgress, 
    [0.05, 0.1, 0.25, 0.3], 
    [0.98, 1, 1, 0.98]
  )

  return (
    <>
      <div className="fixed inset-0 -z-30 bg-white" aria-hidden="true" />
      
      <motion.div
        className="fixed inset-0 -z-20"
        style={{
          clipPath: leftClip,
          backgroundImage: 'url(/1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'clip-path'
        }}
        aria-hidden="true"
      />

      <motion.div
        className="fixed inset-0 -z-20"
        style={{
          clipPath: rightClip,
          backgroundImage: 'url(/2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'clip-path'
        }}
        aria-hidden="true"
      />

      {showTexts && (
        <div className="fixed inset-0 -z-10 pointer-events-none flex items-center justify-center">
          <div className="w-full max-w-3xl px-6">
            {/* Initial welcome text that appears in the center between the two images */}
            <motion.div 
              style={{ 
                opacity: initialTextOpacity, 
                y: initialTextY, 
                scale: initialTextScale 
              }} 
              className="text-center mb-6"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Willkommen bei Ihrer Ernährungsberatung</h2>
              <p className="mt-2 text-xl text-gray-700">Entdecken Sie den Weg zu Ihrem Wohlbefinden</p>
            </motion.div>

            <motion.div 
              style={{ 
                opacity: t1Opacity, 
                y: t1Y, 
                scale: t1Scale 
              }} 
              className="text-center mb-6"
            >
              <p className="text-sm sm:text-base font-semibold tracking-wide text-neutral-800">Start Ihrer Reise</p>
              <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-900">Klarheit schaffen</h3>
              <p className="mt-2 text-gray-700">Wir definieren Ziele – messbar, realistisch und individuell.</p>
            </motion.div>
          </div>
        </div>
      )}
    </>
  )
}
