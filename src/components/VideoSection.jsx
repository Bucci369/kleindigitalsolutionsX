export default function VideoSection() {
  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4 animate-fade-in-up">
            Sporternährung verstehen
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Entdecken Sie die Wissenschaft hinter optimaler Sporternährung in diesem kurzen Einblick 
            in meine evidenzbasierte Herangehensweise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <div className="animate-scale-in">
            <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-9">
                {/* Video Placeholder - in real implementation, this would be a video player */}
                <div className="w-full h-0 pb-[56.25%] relative bg-gray-800 rounded-lg overflow-hidden group cursor-pointer hover:bg-gray-700 transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all transform group-hover:scale-110">
                      <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 opacity-40"></div>
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Video Thumbnail"
                  />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold">Die Grundlagen der Sporternährung</h3>
                    <p className="text-sm text-gray-300">3:47 Min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Information */}
          <div className="animate-slide-in-right">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Was Sie in diesem Video lernen
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-gray-900 font-bold text-sm">1</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-white">Evidenzbasierte Grundlagen</h4>
                      <p className="text-gray-300">Wie wissenschaftliche Erkenntnisse in praktische Strategien umgesetzt werden</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-gray-900 font-bold text-sm">2</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-white">Individuelle Anpassung</h4>
                      <p className="text-gray-300">Warum eine personalisierte Herangehensweise entscheidend ist</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-gray-900 font-bold text-sm">3</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-white">Praktische Umsetzung</h4>
                      <p className="text-gray-300">Einfache Strategien für den Trainingsalltag</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 duration-300">
                  Kostenlose Erstberatung buchen
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="text-3xl font-bold text-white">15K+</div>
            <div className="text-gray-400">Video-Aufrufe</div>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="text-3xl font-bold text-white">98%</div>
            <div className="text-gray-400">Positive Bewertungen</div>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="text-3xl font-bold text-white">23</div>
            <div className="text-gray-400">Video-Tutorials</div>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '1.0s'}}>
            <div className="text-3xl font-bold text-white">4.9★</div>
            <div className="text-gray-400">Durchschnitt</div>
          </div>
        </div>
      </div>
    </div>
  )
}