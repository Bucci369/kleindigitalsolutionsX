export default function GoogleReviews() {
  // Fake Google Reviews für Demo - in Realität über Google Places API
  const googleData = {
    rating: 4.9,
    totalReviews: 127,
    reviews: [
      {
        author: "Maria K.",
        rating: 5,
        text: "Dr. Müller hat mir geholfen, meine Marathon-Zeit um 12 Minuten zu verbessern. Ihre Ernährungsstrategien sind wissenschaftlich fundiert und praktisch umsetzbar.",
        date: "vor 2 Wochen",
        verified: true
      },
      {
        author: "Thomas B.",
        rating: 5,
        text: "Endlich jemand der Sporternährung wirklich versteht! Die Beratung war detailliert, die Pläne individuell und die Ergebnisse sprechen für sich.",
        date: "vor 1 Monat",
        verified: true
      },
      {
        author: "Anna S.",
        rating: 5,
        text: "Professionell, kompetent und sympathisch. Dr. Müller erklärt komplexe Zusammenhänge verständlich. Meine Regeneration hat sich deutlich verbessert.",
        date: "vor 3 Wochen",
        verified: true
      },
      {
        author: "Michael R.",
        rating: 4,
        text: "Sehr gute Beratung für Kraftsport. Hätte mir noch mehr Meal-Prep-Tipps gewünscht, aber insgesamt sehr zufrieden mit den Ergebnissen.",
        date: "vor 1 Monat",
        verified: true
      },
      {
        author: "Lisa M.",
        rating: 5,
        text: "Als Triathletin war ich skeptisch, aber Dr. Müller kennt die Herausforderungen aus eigener Erfahrung. Top Beratung!",
        date: "vor 2 Monaten",
        verified: true
      }
    ]
  }

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google Reviews Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-lg font-semibold text-gray-900">Google</span>
          </div>
          
          <div className="flex items-center justify-center mb-2">
            <StarRating rating={5} />
            <span className="text-3xl font-bold text-gray-900 ml-3">{googleData.rating}</span>
          </div>
          
          <p className="text-gray-600">
            Basierend auf {googleData.totalReviews} Bewertungen
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {googleData.reviews.map((review, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-accent-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {review.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">{review.author}</h4>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                {review.verified && (
                  <div className="flex items-center text-xs text-green-600">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verifiziert
                  </div>
                )}
              </div>
              
              <StarRating rating={review.rating} />
              
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Google Business Link */}
        <div className="text-center">
          <a 
            href="https://www.google.com/maps/place/Dr.+Anna+M%C3%BCller+Ern%C3%A4hrungsberatung/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Alle Bewertungen auf Google ansehen
          </a>
          
          <div className="mt-4 text-xs text-gray-500">
            Bewertungen werden regelmäßig von Google verifiziert und aktualisiert
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">Durchschnitt</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">5-Sterne</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">127</div>
              <div className="text-sm text-gray-600">Bewertungen</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Empfehlen weiter</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}