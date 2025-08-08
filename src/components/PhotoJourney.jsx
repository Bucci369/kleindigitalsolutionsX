import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function PhotoJourney() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Photo transforms through 4 sections:
  // Section 1 (Hero): 0-0.25 - Ellipse on right side
  // Section 2 (Services): 0.25-0.5 - Full background
  // Section 3 (About): 0.5-0.75 - Ellipse on left side
  // Section 4 (Final): 0.75-1 - Circle in center
  
  const photoWidth = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.9, 1], ['120%', '100%', '100%', '100%', '100%'])
  const photoX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.9, 1], ['0%', '0%', '0%', '0%', '-5%'])
  const clipPathValue = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.4, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.82, 0.84, 0.86, 0.88, 0.9, 0.92, 0.94, 0.96, 0.98, 1], 
    [
      'ellipse(60% 35% at 100% 50%)', 
      'ellipse(100% 100% at 50% 50%)', 
      'ellipse(100% 100% at 50% 50%)', 
      'ellipse(60% 35% at 0% 50%)',
      'ellipse(55% 35% at 15% 50%)',
      'ellipse(50% 38% at 30% 50%)',
      'ellipse(45% 42% at 48% 50%)',
      'ellipse(40% 45% at 52% 50%)',
      'ellipse(35% 48% at 55% 50%)',
      'circle(30% at 55% 50%)',
      'circle(25% at 55% 50%)',
      'circle(20% at 55% 50%)',
      'circle(15% at 55% 50%)',
      'circle(10% at 55% 50%)',
      'circle(7% at 55% 50%)',
      'circle(5% at 55% 50%)',
      'circle(3% at 55% 50%)',
      'circle(1% at 55% 50%)',
      'circle(0.1% at 55% 50%)'
    ]
  )

  return (
    <>
      {/* Fixed photo that travels through sections */}
      <motion.div
        className="fixed top-0 left-0 h-screen z-0 pointer-events-none"
        style={{
          width: photoWidth,
          x: photoX,
          backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=3000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          clipPath: clipPathValue
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/30"></div>
      </motion.div>
      
      {/* Scroll container */}
      <div ref={containerRef} className="relative z-10">
        {/* Section spacers to control scroll timing */}
        <div className="h-screen"></div> {/* Hero space */}
        <div className="h-screen"></div> {/* Services space */}
        <div className="h-screen"></div> {/* About space */}
        <div className="h-screen"></div> {/* Circle formation */}
        <div className="h-screen"></div> {/* Circle shrinking */}
        <div className="h-screen"></div> {/* Final disappearance */}
      </div>
    </>
  )
}