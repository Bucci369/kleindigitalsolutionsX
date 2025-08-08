import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function PhotoDebugPanel() {
  const [photos, setPhotos] = useState([
    {
      id: 1,
      name: "Photo 1 (Main)",
      x: 128, // left-32 = 128px
      y: 0,   // top-0
      width: 256, // w-64
      height: 256, // h-64
      rotation: 2,
      zIndex: 20,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Photo 2 (Top Right)",
      x: 304, // right-12 from 384px container = 384-48-192 = 144px, aber right positioning
      y: 32,  // top-8
      width: 192, // w-48
      height: 224, // h-56
      rotation: -12,
      zIndex: 15,
      src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Photo 3 (Base)",
      x: 0,   // left-0
      y: 240, // bottom-20 from 384px = 384-80-320 = -16, aber bottom positioning
      width: 320, // w-80
      height: 320, // h-80
      rotation: 3,
      zIndex: 0,
      src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Photo 4 (Right)",
      x: 340, // right-0 from 384px container
      y: 160, // top-40
      width: 176, // w-44
      height: 208, // h-52
      rotation: 18,
      zIndex: 10,
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ])

  const [draggedPhoto, setDraggedPhoto] = useState(null)
  const containerRef = useRef(null)

  const handleMouseDown = (photoId, e) => {
    e.preventDefault()
    const photo = photos.find(p => p.id === photoId)
    const rect = containerRef.current.getBoundingClientRect()
    
    setDraggedPhoto({
      ...photo,
      startX: e.clientX,
      startY: e.clientY,
      startPhotoX: photo.x,
      startPhotoY: photo.y
    })
  }

  const handleMouseMove = (e) => {
    if (!draggedPhoto) return

    const deltaX = e.clientX - draggedPhoto.startX
    const deltaY = e.clientY - draggedPhoto.startY

    const newX = Math.max(0, Math.min(384 - draggedPhoto.width, draggedPhoto.startPhotoX + deltaX))
    const newY = Math.max(0, Math.min(384 - draggedPhoto.height, draggedPhoto.startPhotoY + deltaY))

    setPhotos(prev => prev.map(photo => 
      photo.id === draggedPhoto.id 
        ? { ...photo, x: newX, y: newY }
        : photo
    ))
  }

  const handleMouseUp = () => {
    setDraggedPhoto(null)
  }

  const generateTailwindClasses = (photo) => {
    // Convert px values to Tailwind classes
    const getPositionClass = (value, type) => {
      const spacing = {
        0: '0', 4: '1', 8: '2', 12: '3', 16: '4', 20: '5', 24: '6', 28: '7', 
        32: '8', 36: '9', 40: '10', 44: '11', 48: '12', 52: '13', 56: '14', 
        60: '15', 64: '16', 68: '17', 72: '18', 76: '19', 80: '20', 96: '24', 
        112: '28', 128: '32', 144: '36', 160: '40', 176: '44', 192: '48', 
        208: '52', 224: '56', 240: '60', 256: '64', 288: '72', 320: '80', 
        384: '96'
      }
      const closest = Object.keys(spacing).reduce((prev, curr) => 
        Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
      )
      return `${type}-${spacing[closest]}`
    }

    const getSizeClass = (value, type) => {
      const sizes = {
        176: 'w-44', 192: 'w-48', 208: 'w-52', 224: 'w-56', 256: 'w-64', 320: 'w-80', 384: 'w-96'
      }
      return sizes[value] || `${type}-64`
    }

    return {
      position: `${getPositionClass(photo.y, 'top')} ${getPositionClass(photo.x, 'left')}`,
      size: `${getSizeClass(photo.width, 'w')} ${getSizeClass(photo.height, 'h')}`,
      rotation: `rotate-${Math.abs(photo.rotation)}${photo.rotation < 0 ? ' -rotate' : ''}`,
      zIndex: `z-${photo.zIndex}`
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 bg-white p-6 rounded-lg shadow-2xl border max-w-md">
      <h3 className="text-lg font-bold mb-4">Photo Debug Panel</h3>
      
      {/* Visual Editor */}
      <div 
        ref={containerRef}
        className="relative w-96 h-96 bg-neutral-100 border-2 border-dashed border-neutral-300 mb-6 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            className="absolute cursor-move"
            style={{
              left: photo.x,
              top: photo.y,
              width: photo.width,
              height: photo.height,
              zIndex: photo.zIndex,
              transform: `rotate(${photo.rotation}deg)`,
            }}
            onMouseDown={(e) => handleMouseDown(photo.id, e)}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={photo.src}
              alt={photo.name}
              className="w-full h-full object-cover photo-polaroid pointer-events-none"
              draggable={false}
            />
            <div className="absolute -top-6 left-0 text-xs font-bold bg-yellow-300 px-1 rounded pointer-events-none">
              {photo.id}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Generated Code */}
      <div className="space-y-4 max-h-64 overflow-y-auto text-xs">
        <h4 className="font-bold">Generated Tailwind Classes:</h4>
        {photos.map((photo) => {
          const classes = generateTailwindClasses(photo)
          return (
            <div key={photo.id} className="p-2 bg-neutral-50 rounded">
              <div className="font-semibold">{photo.name}</div>
              <div className="text-neutral-600">
                Position: <code>{classes.position}</code><br/>
                Size: <code>{classes.size}</code><br/>
                Transform: <code>{classes.rotation} {classes.zIndex}</code><br/>
                Exact: x={photo.x}px, y={photo.y}px
              </div>
            </div>
          )
        })}
      </div>

      {/* Copy Code Button */}
      <button
        onClick={() => {
          const code = photos.map(photo => {
            const classes = generateTailwindClasses(photo)
            return `Photo ${photo.id}: className="absolute ${classes.position} ${classes.size} transform ${classes.rotation} ${classes.zIndex}"`
          }).join('\n')
          navigator.clipboard.writeText(code)
          alert('Code copied to clipboard!')
        }}
        className="w-full mt-4 bg-neutral-900 text-white py-2 px-4 rounded hover:bg-neutral-800 transition-colors"
      >
        Copy Generated Code
      </button>
    </div>
  )
}