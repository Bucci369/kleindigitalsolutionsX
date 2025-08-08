export default function Publications() {
  const publications = [
    {
      title: "Optimal Protein Intake Timing for Endurance Athletes: A Meta-Analysis",
      journal: "Journal of Sports Nutrition",
      year: "2023",
      authors: "Müller, A., Schmidt, M., Weber, K.",
      type: "Peer-reviewed",
      impact: "IF: 4.2",
      abstract: "This meta-analysis examines the effects of protein timing on performance and recovery in endurance athletes across 23 studies.",
      pdfUrl: "#",
      citedBy: 47
    },
    {
      title: "Carbohydrate Periodization in High-Intensity Training: Performance Outcomes",
      journal: "Sports Medicine International",
      year: "2022",
      authors: "Müller, A., Fischer, L.",
      type: "Peer-reviewed",
      impact: "IF: 3.8",
      abstract: "Investigation of periodized carbohydrate intake strategies and their impact on training adaptations in competitive cyclists.",
      pdfUrl: "#",
      citedBy: 32
    },
    {
      title: "Micronutrient Status in German Elite Athletes: A Cross-Sectional Study",
      journal: "European Journal of Sport Science",
      year: "2022",
      authors: "Weber, T., Müller, A., Hoffmann, R.",
      type: "Peer-reviewed",
      impact: "IF: 3.1",
      abstract: "Comprehensive analysis of micronutrient deficiencies across different sport disciplines in German national team athletes.",
      pdfUrl: "#",
      citedBy: 28
    },
    {
      title: "Hydration Strategies for Ultra-Endurance Events: Field Study Results",
      journal: "International Journal of Sports Physiology",
      year: "2021",
      authors: "Müller, A., Berg, S., Klein, M.",
      type: "Peer-reviewed",
      impact: "IF: 2.9",
      abstract: "Real-world hydration data from 156 ultra-marathon participants, analyzing optimal fluid replacement strategies.",
      pdfUrl: "#",
      citedBy: 19
    },
    {
      title: "Plant-Based Nutrition in Competitive Sports: Performance and Recovery Analysis",
      journal: "Nutrients in Sport",
      year: "2021",
      authors: "Müller, A., Green, P.",
      type: "Peer-reviewed",
      impact: "IF: 2.7",
      abstract: "Longitudinal study comparing performance markers between plant-based and omnivorous competitive athletes.",
      pdfUrl: "#",
      citedBy: 15
    }
  ]

  const presentations = [
    {
      title: "Precision Nutrition in Elite Sports: Individualized Approaches",
      event: "International Sports Nutrition Conference",
      location: "Berlin, Deutschland",
      year: "2023",
      type: "Keynote"
    },
    {
      title: "Recovery Nutrition: Latest Research and Practical Applications",
      event: "European Sports Medicine Congress",
      location: "Amsterdam, Niederlande", 
      year: "2023",
      type: "Invited Speaker"
    },
    {
      title: "Carbohydrate Strategies for Team Sports",
      event: "German Sports Science Association Meeting",
      location: "München, Deutschland",
      year: "2022",
      type: "Oral Presentation"
    }
  ]

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Wissenschaftliche Publikationen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aktuelle Forschungsarbeit und evidenzbasierte Erkenntnisse in der Sporternährung. 
            Meine Arbeit wird international in führenden Fachzeitschriften veröffentlicht.
          </p>
        </div>

        {/* Research Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">23</div>
            <div className="text-gray-600">Publikationen</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">847</div>
            <div className="text-gray-600">Zitierungen</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">18.4</div>
            <div className="text-gray-600">h-Index</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">12</div>
            <div className="text-gray-600">Kooperationen</div>
          </div>
        </div>

        {/* Recent Publications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Aktuelle Publikationen</h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {pub.title}
                    </h4>
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">{pub.journal}</span> • {pub.year} • {pub.authors}
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                      <span className="bg-gray-200 px-2 py-1 rounded">{pub.type}</span>
                      <span>{pub.impact}</span>
                      <span>{pub.citedBy} Zitierungen</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <button className="text-gray-600 hover:text-gray-900 font-medium text-sm">
                      PDF →
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {pub.abstract}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Conference Presentations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Konferenz-Präsentationen</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {presentations.map((pres, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="mb-3">
                  <span className="inline-block bg-gray-900 text-white px-2 py-1 text-xs font-medium rounded">
                    {pres.type}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {pres.title}
                </h4>
                <p className="text-sm text-gray-600 mb-1">
                  {pres.event}
                </p>
                <p className="text-sm text-gray-500">
                  {pres.location} • {pres.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Forschungsschwerpunkte</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Performance Nutrition</h4>
              <p className="text-sm text-gray-600">Optimierung der sportlichen Leistung durch evidenzbasierte Ernährungsstrategien</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Recovery Science</h4>
              <p className="text-sm text-gray-600">Regenerationsoptimierung durch gezielte Nährstoffzufuhr und Timing</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Metabolic Research</h4>
              <p className="text-sm text-gray-600">Stoffwechseladaptationen und individuelle metabolische Profile</p>
            </div>
          </div>
        </div>

        {/* Collaboration */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Wissenschaftliche Kooperation</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ich arbeite eng mit internationalen Forschungsgruppen zusammen und suche stets nach 
            innovativen Ansätzen zur Weiterentwicklung der Sporternährung.
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
            Forschungsanfrage stellen
          </button>
        </div>
      </div>
    </div>
  )
}