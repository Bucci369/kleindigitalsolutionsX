import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const [debugMode, setDebugMode] = useState(false)
  const [photoPositions, setPhotoPositions] = useState({
    photo1: { x: 250, y: 0 },    // left-64 top-0
    photo2: { x: 262, y: 172 },  // left-64 top-44
    photo3: { x: 368, y: 0 },    // left-96 top-0
    photo4: { x: 426, y: 179 }   // left-96 top-44
  })
  const [draggedPhoto, setDraggedPhoto] = useState(null)
  
  // Smooth curve controls
  const [curveControls, setCurveControls] = useState({
    topRadius: 150, // Obere Rundung
    bottomRadius: 200, // Untere Rundung
    leftIndent: 30, // Einbuchtung links
    centerPoint: 50, // Mitte-Position
    stretch: 100, // Streckung
    skew: 0 // Neigung
  })
  
  // Generate unique mask ID
  const maskId = `organic-mask-${Math.random().toString(36).substr(2, 9)}`
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  
  // Global scroll progress for multi-section photo journey
  const { scrollYProgress: globalScroll } = useScroll()
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const handleMouseDown = (photoId, e) => {
    if (!debugMode) return
    e.preventDefault()
    e.stopPropagation()
    
    setDraggedPhoto({
      id: photoId,
      startX: e.clientX,
      startY: e.clientY,
      startPhotoX: photoPositions[photoId].x,
      startPhotoY: photoPositions[photoId].y
    })
  }

  const handleMouseMove = (e) => {
    if (!draggedPhoto || !debugMode) return

    const deltaX = e.clientX - draggedPhoto.startX
    const deltaY = e.clientY - draggedPhoto.startY

    const newX = Math.max(0, Math.min(500, draggedPhoto.startPhotoX + deltaX))
    const newY = Math.max(0, Math.min(500, draggedPhoto.startPhotoY + deltaY))

    setPhotoPositions(prev => ({
      ...prev,
      [draggedPhoto.id]: { x: newX, y: newY }
    }))
  }

  const handleMouseUp = () => {
    setDraggedPhoto(null)
  }

  const convertToTailwind = (x, y) => {
    const spacing = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240, 256, 288, 320, 384]
    const getClosest = (value) => spacing.reduce((prev, curr) => Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev)
    
    const closestX = getClosest(x)
    const closestY = getClosest(y)
    const spacingMap = { 0:'0', 4:'1', 8:'2', 12:'3', 16:'4', 20:'5', 24:'6', 28:'7', 32:'8', 36:'9', 40:'10', 44:'11', 48:'12', 52:'13', 56:'14', 60:'15', 64:'16', 72:'18', 80:'20', 96:'24', 112:'28', 128:'32', 144:'36', 160:'40', 176:'44', 192:'48', 208:'52', 224:'56', 240:'60', 256:'64', 288:'72', 320:'80', 384:'96' }
    
    return `left-${spacingMap[closestX] || '0'} top-${spacingMap[closestY] || '0'}`
  }

  return (
    <div 
      ref={ref} 
      className="hero-minimal relative" 
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Modern Background with Organic Cutout */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ y }}
      >
        {/* Main background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-neutral-100"></div>
        
      </motion.div>

      {/* Minimal credentials */}
      <motion.div 
        className="absolute top-8 left-8 z-20 text-sm font-medium text-neutral-600 tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Dr. Anna Müller
      </motion.div>

      <div className="container-narrow relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full lg:ml-[-8rem]">
          
          {/* Content Column */}
          <motion.div 
            className="space-y-8"
          >
            {/* Minimal pre-text */}
            <motion.div 
              className="text-sm font-medium text-neutral-500 tracking-[0.2em] uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Sporternährung
            </motion.div>

            {/* Powerful headline */}
            <h1 className="text-hero text-neutral-900 font-display leading-none">
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Leistung
              </motion.span>
              <motion.span 
                className="block text-accent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                neu definiert.
              </motion.span>
            </h1>
              
            {/* Minimal subtitle */}
            <motion.p 
              className="text-subtitle max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Evidenzbasierte Ernährungsstrategien für Athleten, die Grenzen überwinden wollen.
            </motion.p>


            {/* Minimal CTAs */}
            <motion.div 
              className="flex items-center space-x-8 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Beratung anfragen
              </a>
              <a 
                href="#about" 
                className="text-sm font-medium text-neutral-700 hover:text-neutral-900 tracking-wide transition-colors duration-300 relative group"
              >
                Mehr erfahren
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.div>
          </motion.div>


          {/* Visual Column - Scattered Photos */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Large number display */}
            <div className="relative">
              
              {/* Scattered Photos Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 relative">
                  
                  {/* Photo 1 - Main center photo */}
                  <motion.div 
                    className={`absolute w-64 h-64 transform rotate-2 hover:rotate-0 transition-transform duration-300 z-20 ${debugMode ? 'cursor-move border-2 border-red-400' : 'cursor-pointer'}`}
                    style={{ 
                      left: photoPositions.photo1.x, 
                      top: photoPositions.photo1.y 
                    }}
                    initial={{ scale: 0.8, opacity: 0, rotate: 15 }}
                    animate={{ scale: 1, opacity: 1, rotate: 2 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    whileHover={{ scale: debugMode ? 1 : 1.05, zIndex: 30 }}
                    onMouseDown={(e) => handleMouseDown('photo1', e)}
                  >
                    <img
                      className="w-full h-full object-cover photo-polaroid pointer-events-none"
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Ernährungsberatung"
                      draggable={false}
                    />
                    {debugMode && (
                      <div className="absolute -top-6 left-0 bg-red-400 text-white px-2 py-1 text-xs font-bold rounded">
                        Photo 1: {convertToTailwind(photoPositions.photo1.x, photoPositions.photo1.y)}
                      </div>
                    )}
                    <div className="absolute -bottom-1 -right-1 w-8 h-px bg-accent"></div>
                  </motion.div>

                  {/* Photo 2 - Top right, slightly overlapping */}
                  <motion.div 
                    className={`absolute w-48 h-56 transform -rotate-12 hover:rotate-0 transition-transform duration-300 z-15 ${debugMode ? 'cursor-move border-2 border-blue-400' : 'cursor-pointer'}`}
                    style={{ 
                      left: photoPositions.photo2.x, 
                      top: photoPositions.photo2.y 
                    }}
                    initial={{ scale: 0.8, opacity: 0, rotate: -25 }}
                    animate={{ scale: 1, opacity: 1, rotate: -12 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                    whileHover={{ scale: debugMode ? 1 : 1.05, zIndex: 30 }}
                    onMouseDown={(e) => handleMouseDown('photo2', e)}
                  >
                    <img
                      className="w-full h-full object-cover photo-polaroid pointer-events-none"
                      src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Gesunde Ernährung"
                      draggable={false}
                    />
                    {debugMode && (
                      <div className="absolute -top-6 left-0 bg-blue-400 text-white px-2 py-1 text-xs font-bold rounded">
                        Photo 2: {convertToTailwind(photoPositions.photo2.x, photoPositions.photo2.y)}
                      </div>
                    )}
                  </motion.div>

                  {/* Photo 3 - Large bottom center, base layer */}
                  <motion.div 
                    className={`absolute w-80 h-80 rotate-3 hover:rotate-0 transition-transform duration-300 z-0 ${debugMode ? 'cursor-move border-2 border-green-400' : 'cursor-pointer'}`}
                    style={{ 
                      left: photoPositions.photo3.x, 
                      top: photoPositions.photo3.y 
                    }}
                    initial={{ scale: 0.8, opacity: 0, rotate: 15 }}
                    animate={{ scale: 1, opacity: 1, rotate: 3 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    whileHover={{ scale: debugMode ? 1 : 1.05, zIndex: 30 }}
                    onMouseDown={(e) => handleMouseDown('photo3', e)}
                  >
                    <img
                      className="w-full h-full object-cover photo-polaroid pointer-events-none"
                      src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Frische Zutaten"
                      draggable={false}
                    />
                    {debugMode && (
                      <div className="absolute -top-6 left-0 bg-green-400 text-white px-2 py-1 text-xs font-bold rounded">
                        Photo 3: {convertToTailwind(photoPositions.photo3.x, photoPositions.photo3.y)}
                      </div>
                    )}
                  </motion.div>

                  {/* Photo 4 - Right side, partially hidden behind main photo */}
                  <motion.div 
                    className={`absolute w-44 h-52 transform rotate-18 hover:rotate-0 transition-transform duration-300 z-10 ${debugMode ? 'cursor-move border-2 border-yellow-400' : 'cursor-pointer'}`}
                    style={{ 
                      left: photoPositions.photo4.x, 
                      top: photoPositions.photo4.y 
                    }}
                    initial={{ scale: 0.8, opacity: 0, rotate: 30 }}
                    animate={{ scale: 1, opacity: 1, rotate: 18 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    whileHover={{ scale: debugMode ? 1 : 1.05, zIndex: 30 }}
                    onMouseDown={(e) => handleMouseDown('photo4', e)}
                  >
                    <img
                      className="w-full h-full object-cover photo-polaroid pointer-events-none"
                      src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Sporternährung"
                      draggable={false}
                    />
                    {debugMode && (
                      <div className="absolute -top-6 left-0 bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
                        Photo 4: {convertToTailwind(photoPositions.photo4.x, photoPositions.photo4.y)}
                      </div>
                    )}
                  </motion.div>
                  
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-neutral-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
            <div className="w-px h-8 bg-neutral-300"></div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Debug Panel */}
      {debugMode && (
        <div className="fixed top-4 right-4 z-50 bg-black text-white p-4 rounded-lg shadow-2xl max-w-sm max-h-[80vh] overflow-y-auto">
          <h3 className="font-bold mb-4 text-lg">Shape Editor</h3>
          
          {/* Smooth Curve Editor */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2 text-sm">Smooth Organic Curves:</h4>
            <div className="space-y-3 text-xs">
              
              <div className="bg-gray-800 p-3 rounded">
                <label className="block text-blue-300 font-semibold mb-2">Top Radius ({curveControls.topRadius})</label>
                <input
                  type="range"
                  min="50"
                  max="300"
                  value={curveControls.topRadius}
                  onChange={(e) => setCurveControls({...curveControls, topRadius: parseInt(e.target.value)})}
                  className="w-full"
                />
              </div>

              <div className="bg-gray-800 p-3 rounded">
                <label className="block text-green-300 font-semibold mb-2">Bottom Radius ({curveControls.bottomRadius})</label>
                <input
                  type="range"
                  min="50"
                  max="300"
                  value={curveControls.bottomRadius}
                  onChange={(e) => setCurveControls({...curveControls, bottomRadius: parseInt(e.target.value)})}
                  className="w-full"
                />
              </div>

              <div className="bg-gray-800 p-3 rounded">
                <label className="block text-yellow-300 font-semibold mb-2">Left Indent ({curveControls.leftIndent}%)</label>
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={curveControls.leftIndent}
                  onChange={(e) => setCurveControls({...curveControls, leftIndent: parseInt(e.target.value)})}
                  className="w-full"
                />
              </div>

              <div className="bg-gray-800 p-3 rounded">
                <label className="block text-purple-300 font-semibold mb-2">Center Point ({curveControls.centerPoint}%)</label>
                <input
                  type="range"
                  min="30"
                  max="70"
                  value={curveControls.centerPoint}
                  onChange={(e) => setCurveControls({...curveControls, centerPoint: parseInt(e.target.value)})}
                  className="w-full"
                />
              </div>

              <div className="bg-gray-800 p-3 rounded">
                <label className="block text-red-300 font-semibold mb-2">Stretch ({curveControls.stretch}%)</label>
                <input
                  type="range"
                  min="80"
                  max="120"
                  value={curveControls.stretch}
                  onChange={(e) => setCurveControls({...curveControls, stretch: parseInt(e.target.value)})}
                  className="w-full"
                />
              </div>

              <div className="bg-gray-800 p-3 rounded">
                <label className="block text-orange-300 font-semibold mb-2">Skew ({curveControls.skew}°)</label>
                <input
                  type="range"
                  min="-5"
                  max="5"
                  value={curveControls.skew}
                  onChange={(e) => setCurveControls({...curveControls, skew: parseInt(e.target.value)})}
                  className="w-full"
                />
              </div>

            </div>
          </div>

          {/* Photo Positions */}
          <div className="mb-4 border-t border-gray-600 pt-4">
            <h4 className="font-semibold mb-2 text-sm">Photo Positions:</h4>
            <div className="text-xs space-y-1">
              <div>🔴 Photo 1: {convertToTailwind(photoPositions.photo1.x, photoPositions.photo1.y)}</div>
              <div>🔵 Photo 2: {convertToTailwind(photoPositions.photo2.x, photoPositions.photo2.y)}</div>
              <div>🟢 Photo 3: {convertToTailwind(photoPositions.photo3.x, photoPositions.photo3.y)}</div>
              <div>🟡 Photo 4: {convertToTailwind(photoPositions.photo4.x, photoPositions.photo4.y)}</div>
            </div>
          </div>

          {/* Export Buttons */}
          <div className="space-y-2">
            <button
              onClick={() => {
                const svgPath = `M ${100 - curveControls.leftIndent} 0 Q 100 ${curveControls.topRadius/4} 100 ${curveControls.centerPoint} Q 100 ${100 - curveControls.bottomRadius/4} ${100 - curveControls.leftIndent} 100 L 0 100 L 0 0 Z`
                navigator.clipboard.writeText(`SVG Path: ${svgPath}`)
                alert('SVG Path copied!')
              }}
              className="w-full bg-blue-600 text-white py-2 px-3 rounded text-xs hover:bg-blue-700"
            >
              Copy SVG Path
            </button>
            <button
              onClick={() => {
                const code = Object.entries(photoPositions).map(([key, pos], index) => 
                  `Photo ${index + 1}: ${convertToTailwind(pos.x, pos.y)} (x:${pos.x}, y:${pos.y})`
                ).join('\\n')
                navigator.clipboard.writeText(code)
                alert('Photo positions copied!')
              }}
              className="w-full bg-green-600 text-white py-2 px-3 rounded text-xs hover:bg-green-700"
            >
              Copy Photo Positions
            </button>
          </div>
        </div>
      )}

      {/* Debug Toggle Button */}
      <button
        onClick={() => setDebugMode(!debugMode)}
        className="fixed bottom-4 right-4 z-50 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-lg hover:bg-yellow-300 transition-colors"
      >
        {debugMode ? 'Exit' : 'Edit'} Debug
      </button>
    </div>
  )
}
