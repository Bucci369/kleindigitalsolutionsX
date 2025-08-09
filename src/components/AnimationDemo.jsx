import { useState } from 'react'
import { 
  MorphingTextJourney, 
  FloatingSVGJourney, 
  LiquidMorphJourney, 
  GrowingPlantJourney,
  ParticleExplosionJourney 
} from './AlternativeJourneyAnimations'

export default function AnimationDemo() {
  const [activeAnimation, setActiveAnimation] = useState('morphing')

  const animations = [
    { 
      id: 'morphing', 
      name: 'Morphing Text', 
      component: MorphingTextJourney,
      description: 'Texte transformieren sich mit 3D-Effekten und Partikeln'
    },
    { 
      id: 'floating', 
      name: 'Floating SVG', 
      component: FloatingSVGJourney,
      description: 'Organische SVG-Formen schweben und morphen'
    },
    { 
      id: 'liquid', 
      name: 'Liquid Morph', 
      component: LiquidMorphJourney,
      description: 'Flüssige Wellen-Bewegungen wie Wasser'
    },
    { 
      id: 'plant', 
      name: 'Growing Plant', 
      component: GrowingPlantJourney,
      description: 'Organisches Wachstum einer Pflanze'
    },
    { 
      id: 'explosion', 
      name: 'Particle Explosion', 
      component: ParticleExplosionJourney,
      description: 'Dynamische Partikel-Explosion mit Energie'
    }
  ]

  const ActiveComponent = animations.find(a => a.id === activeAnimation)?.component

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <div className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <h3 className="font-bold mb-3 text-gray-800">Journey Animationen</h3>
        <div className="space-y-2">
          {animations.map(animation => (
            <button
              key={animation.id}
              onClick={() => setActiveAnimation(animation.id)}
              className={`block w-full text-left p-2 rounded text-sm transition-all ${
                activeAnimation === animation.id
                  ? 'bg-accent-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              <div className="font-medium">{animation.name}</div>
              <div className="text-xs opacity-75">{animation.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Info Box */}
      <div className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
        <h4 className="font-bold text-gray-800 mb-2">Scrolle runter!</h4>
        <p className="text-sm text-gray-600">
          Jede Animation reagiert auf Scroll-Bewegungen. Scrolle langsam um die Effekte zu sehen.
        </p>
      </div>

      {/* Animation Container */}
      <div className="relative">
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  )
}