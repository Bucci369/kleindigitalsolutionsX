export default function Podcast() {
  const podcastEpisodes = [
    {
      title: "Pre-Workout Nutrition: Timing ist alles",
      description: "Wie Sie Ihre Energieversorgung vor dem Training optimieren und häufige Fehler vermeiden.",
      duration: "18:42",
      date: "15. Jul 2024",
      listens: "2.1K",
      audioUrl: "#"
    },
    {
      title: "Proteinmythen im Sport entlarvt",
      description: "Was Sie wirklich über Protein-Timing, Qualität und Mengen wissen müssen.",
      duration: "22:15",
      date: "8. Jul 2024", 
      listens: "3.4K",
      audioUrl: "#"
    },
    {
      title: "Hydration bei Ausdauersport",
      description: "Flüssigkeitshaushalt optimieren: Von der Planung bis zur Nachbereitung.",
      duration: "16:33",
      date: "1. Jul 2024",
      listens: "1.8K",
      audioUrl: "#"
    },
    {
      title: "Carb-Loading richtig gemacht",
      description: "Kohlenhydratspeicher strategisch füllen für Wettkampf und intensive Trainingseinheiten.",
      duration: "20:07",
      date: "24. Jun 2024",
      listens: "2.7K",
      audioUrl: "#"
    },
    {
      title: "Supplements: Sinnvoll oder Geldverschwendung?",
      description: "Evidenzbasierte Bewertung der wichtigsten Nahrungsergänzungsmittel im Sport.",
      duration: "25:41",
      date: "17. Jun 2024",
      listens: "4.2K",
      audioUrl: "#"
    }
  ]

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Sporternährungs-Podcast
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wissenschaftlich fundierte Insights für Ihre optimale Leistung. 
            Jeden Montag neue Folgen mit praktischen Tipps und aktueller Forschung.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Featured Episode */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gray-900 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-full">
                    NEUESTE FOLGE
                  </span>
                  <span className="text-sm text-gray-500">{podcastEpisodes[0].date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {podcastEpisodes[0].title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {podcastEpisodes[0].description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{podcastEpisodes[0].duration}</span>
                    <span>{podcastEpisodes[0].listens} Hörer</span>
                  </div>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors">
                    Jetzt anhören
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Episode List */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Weitere Folgen</h3>
            {podcastEpisodes.slice(1).map((episode, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-grow">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm text-gray-500">{episode.date}</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-500">{episode.duration}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {episode.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {episode.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{episode.listens} Hörer</span>
                      <button className="text-gray-900 font-medium text-sm hover:text-gray-700 transition-colors">
                        Anhören →
                      </button>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Podcast Platforms & Stats */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Verfügbar auf</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors">
                  <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">A</span>
                  </div>
                  <span>Apple Podcasts</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors">
                  <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">S</span>
                  </div>
                  <span>Spotify</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors">
                  <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <span>Google Podcasts</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors">
                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">R</span>
                  </div>
                  <span>RSS Feed</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Podcast Statistiken</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Gesamte Downloads</span>
                  <span className="font-semibold text-gray-900">47.3K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Folgen veröffentlicht</span>
                  <span className="font-semibold text-gray-900">32</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Durchschnittliche Bewertung</span>
                  <div className="flex items-center">
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 font-semibold text-gray-900">4.8</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Länder erreicht</span>
                  <span className="font-semibold text-gray-900">23</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-3">Newsletter abonnieren</h3>
              <p className="text-gray-300 text-sm mb-4">
                Erhalten Sie jeden Sonntag die wichtigsten Erkenntnisse der Woche plus Bonus-Content.
              </p>
              <button className="w-full bg-white text-gray-900 py-2 px-4 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Jetzt abonnieren
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}