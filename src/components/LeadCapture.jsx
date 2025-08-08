import { useState, useEffect } from 'react'

export default function LeadCapture() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Don't show popup if already dismissed
    if (isDismissed) return

    // Show popup after 30 seconds or when user scrolls 50% of page
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true)
      }
    }, 30000)

    const handleScroll = () => {
      if (isDismissed) return
      
      const scrolled = window.scrollY
      const viewHeight = window.innerHeight
      const fullHeight = document.documentElement.scrollHeight
      
      if (scrolled > (fullHeight - viewHeight) * 0.5) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isDismissed])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here would be the actual email capture logic
    console.log('Email captured:', email)
    setIsSubmitted(true)
    
    // Hide popup after 3 seconds
    setTimeout(() => {
      setIsVisible(false)
    }, 3000)
  }

  const handleClose = () => {
    setIsVisible(false)
    setIsDismissed(true)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative animate-fade-in">
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {!isSubmitted ? (
            <>
              {/* Free Guide Offer */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Kostenloser Sporternährungs-Guide
                </h3>
                <p className="text-gray-600">
                  "Die 7 häufigsten Ernährungsfehler im Sport – und wie Sie sie vermeiden"
                </p>
              </div>

              {/* Value propositions */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="w-5 h-5 text-gray-900 mr-3 mt-0.5 flex-shrink-0">✓</div>
                  <p className="text-sm text-gray-700">Evidenzbasierte Strategien für optimale Leistung</p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 text-gray-900 mr-3 mt-0.5 flex-shrink-0">✓</div>
                  <p className="text-sm text-gray-700">Praktische Tipps für den Trainingsalltag</p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 text-gray-900 mr-3 mt-0.5 flex-shrink-0">✓</div>
                  <p className="text-sm text-gray-700">Bonus: Weekly Newsletter mit neuesten Erkenntnissen</p>
                </div>
              </div>

              {/* Email form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ihre E-Mail-Adresse"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent text-center"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
                >
                  Kostenlosen Guide herunterladen
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                Kein Spam. Abmeldung jederzeit möglich. 
                <br />
                <a href="/datenschutz" className="underline hover:text-gray-700">Datenschutzerklärung</a>
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Vielen Dank!
              </h3>
              <p className="text-gray-600 mb-4">
                Ihr Guide wird in wenigen Minuten in Ihrem Postfach sein.
              </p>
              <p className="text-sm text-gray-500">
                Schauen Sie auch in Ihren Spam-Ordner, falls Sie keine E-Mail erhalten.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}