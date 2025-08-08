export default function Ernaehrungstherapie() {
  const therapyAreas = [
    {
      title: "Nahrungsmittelintoleranzen",
      description: "Laktose-, Fruktose-, Histamin- und Glutenintoleranzen gezielt identifizieren und behandeln. Entwicklung individueller Ernährungsstrategien für beschwerdefreien Sport.",
      benefits: [
        "Positive und negative Lebensmittellisten",
        "Alternative Nährstoffquellen",
        "Leistungsoptimierung trotz Einschränkungen",
        "Verdauungsprobleme eliminieren"
      ],
      icon: "🔬"
    },
    {
      title: "Diabetes & Sport",
      description: "Blutzuckerstabilisierung und -optimierung für Athleten mit Diabetes Typ 1 und 2. Sicherer Umgang mit der Erkrankung im Trainings- und Wettkampfalltag.",
      benefits: [
        "Blutzuckerkontrolle während Training",
        "Anpassung der Kohlenhydratzufuhr",
        "Hypoglykämie-Prävention",
        "Langzeit-Gesundheitschutz"
      ],
      icon: "🩺"
    },
    {
      title: "Entzündungshemmende Ernährung",
      description: "Rheumatische Erkrankungen, chronische Entzündungen und Gelenkbeschwerden durch gezielte Ernährung positiv beeinflussen und Regeneration fördern.",
      benefits: [
        "Entzündungsprozesse minimieren",
        "Gelenkgesundheit verbessern",
        "Schmerzlinderung unterstützen",
        "Beweglichkeit erhalten"
      ],
      icon: "💪"
    },
    {
      title: "Harnsäure & Gicht",
      description: "Purinreduzierte Sporternährung zur Vorbeugung von Gichtanfällen. Optimale Leistung ohne Risiko für erhöhte Harnsäurewerte.",
      benefits: [
        "Harnsäurespiegel senken",
        "Gichtanfälle verhindern",
        "Purinarme Lebensmittelauswahl",
        "Genuss ohne Verzicht"
      ],
      icon: "⚖️"
    },
    {
      title: "Fettstoffwechseloptimierung",
      description: "Cholesterin- und Triglyceridwerte durch Ernährung verbessern. Kardiovaskuläre Gesundheit für Ausdauersportler optimieren.",
      benefits: [
        "Blutfettwerte stabilisieren",
        "Herz-Kreislauf-System schützen",
        "Ausdauerleistung steigern",
        "Arteriengesundheit fördern"
      ],
      icon: "❤️"
    },
    {
      title: "Knochengesundheit & Osteoporose",
      description: "Calciumoptimierte Ernährung für starke Knochen. Besonders wichtig für Sportarten mit hoher Frakturrisiko oder Gewichtsmanagement.",
      benefits: [
        "Knochendichte stärken",
        "Frakturrisiko reduzieren",
        "Calcium-Magnesium-Balance",
        "Vitamin D-Optimierung"
      ],
      icon: "🦴"
    },
    {
      title: "Verdauungsoptimierung",
      description: "Obstipation und Verdauungsbeschwerden lösen. Optimale Nährstoffaufnahme und Darmgesundheit für beste sportliche Leistung.",
      benefits: [
        "Stuhlregulation normalisieren",
        "Darmgesundheit fördern",
        "Nährstoffaufnahme optimieren",
        "Wohlbefinden steigern"
      ],
      icon: "🌱"
    },
    {
      title: "Essstörungen im Sport",
      description: "Sensible Begleitung bei gestörtem Essverhalten im Leistungssport. Gesunde Beziehung zum Essen und zum Körper entwickeln.",
      benefits: [
        "Essverhalten normalisieren",
        "Körperwahrnehmung verbessern",
        "Leistung ohne Zwang",
        "Psychologische Unterstützung"
      ],
      icon: "🧠"
    }
  ]

  return (
    <div id="ernaehrungstherapie" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Sporternährungstherapie
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Optimierung Ihrer Leistung und Gesundheit durch medizinische Ernährungstherapie. 
            Individuelle Behandlung spezifischer Gesundheitsthemen in Kombination mit Ihren sportlichen Zielen.
          </p>
        </div>

        {/* Intro Text */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Medizinische Ernährungstherapie trifft Sporternährung
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Als spezialisierte Ernährungstherapeutin verbinde ich medizinische Notwendigkeit mit 
              sportlicher Leistungsoptimierung. Viele Athleten leben mit chronischen Erkrankungen oder 
              Nahrungsmittelintoleranzen, die ihre Leistung beeinträchtigen können.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Mein Ansatz: <strong>Gesundheit fördern, Symptome lindern und gleichzeitig die 
              sportliche Leistungsfähigkeit maximieren.</strong> Alltagstaugliche Empfehlungen, 
              die Ihre Vitalität und Ihr Wohlbefinden nachhaltig steigern.
            </p>
          </div>
        </div>

        {/* Therapy Areas Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-16">
          {therapyAreas.map((area, index) => (
            <div 
              key={area.title} 
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{animationDelay: `${0.1 * (index + 3)}s`}}
            >
              <div className="flex items-start mb-4">
                <div className="text-3xl mr-4">{area.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {area.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {area.description}
              </p>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Ihre Vorteile:</h4>
                <ul className="space-y-2">
                  {area.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-md font-medium hover:bg-gray-800 transition-colors">
                  Beratung anfragen
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process & Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              So läuft Ihre Ernährungstherapie ab
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Umfassende Anamnese</h4>
                  <p className="text-gray-600 text-sm">Detaillierte Erfassung Ihrer Krankengeschichte, aktueller Beschwerden und sportlichen Ziele.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Individuelle Analyse</h4>
                  <p className="text-gray-600 text-sm">BIA-Messung, Ernährungsprotokoll-Auswertung und Identifikation kritischer Nährstoffe.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Therapieplan erstellen</h4>
                  <p className="text-gray-600 text-sm">Entwicklung eines medizinisch fundierten, sportartspezifischen Ernährungsplans.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Begleitung & Anpassung</h4>
                  <p className="text-gray-600 text-sm">Regelmäßige Kontrollen, Erfolgsmonitoring und Feinabstimmung des Therapieplans.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Warum Ernährungstherapie?
            </h3>
            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700"><strong>Krankenkassenbezuschussung:</strong> Bei entsprechender Indikation übernimmt Ihre Krankenkasse bis zu 80% der Kosten</p>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700"><strong>Medizinische Expertise:</strong> Qualifizierte Ernährungstherapeutin mit Zusatzausbildung in Sporternährung</p>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700"><strong>Ganzheitlicher Ansatz:</strong> Verbindung von medizinischer Notwendigkeit und sportlicher Leistungsoptimierung</p>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700"><strong>Langfristige Betreuung:</strong> Nachhaltiger Erfolg durch kontinuierliche Anpassung und Optimierung</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white animate-scale-in">
          <h3 className="text-2xl font-bold mb-4">
            Bereit für Ihre persönliche Ernährungstherapie?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam einen Weg finden, wie Sie trotz gesundheitlicher Herausforderungen 
            Ihre sportlichen Ziele erreichen können. Jede Therapie beginnt mit einem persönlichen Gespräch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Kostenlose Erstberatung
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Informationsmaterial anfordern
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Krankenkassenzuschuss möglich • Flexible Terminvereinbarung • Auch online verfügbar
          </p>
        </div>
      </div>
    </div>
  )
}