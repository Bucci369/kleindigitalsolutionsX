import { useState } from 'react'
import { Users, Clock, Target, Calculator, Check, Info } from 'lucide-react'

export default function GruppenberatungPage() {
  const [bmiData, setBmiData] = useState({ weight: '', height: '', result: null })

  const calculateBMI = () => {
    const weight = parseFloat(bmiData.weight)
    const height = parseFloat(bmiData.height) / 100 // Convert cm to m
    
    if (weight > 0 && height > 0) {
      const bmi = weight / (height * height)
      let category = ''
      
      if (bmi < 18.5) category = 'Untergewicht'
      else if (bmi < 25) category = 'Normalgewicht'
      else if (bmi < 30) category = 'Übergewicht'
      else category = 'Adipositas'
      
      setBmiData(prev => ({ 
        ...prev, 
        result: { value: bmi.toFixed(1), category } 
      }))
    }
  }

  const resetBMI = () => {
    setBmiData({ weight: '', height: '', result: null })
  }

  const programs = [
    {
      title: "Gesund Abnehmen - Erwachsenengruppe",
      subtitle: "Nachhaltiges Gewichtsmanagement für Erwachsene",
      duration: "8 Einheiten über 12 Wochen",
      sessions: "Wöchentlich, später 14-täglich à 90 Min",
      price: "235€",
      description: "Unser strukturiertes Gruppenprogramm kombiniert fundiertes Ernährungswissen mit praktischen Alltagsstrategien. Gemeinsam entwickeln wir nachhaltige Ess- und Bewegungsgewohnheiten ohne Verbote.",
      features: [
        "Fundierte Ernährungsgrundlagen",
        "Praktische Kochworkshops",
        "Verhaltensstrategien für den Alltag",
        "Peer-to-Peer Unterstützung",
        "Umfangreiches Arbeitsmaterial",
        "Nachbetreuung über 3 Monate"
      ],
      targetGroup: "Erwachsene mit Übergewicht oder Adipositas"
    },
    {
      title: "Kinderleicht Gesund - Kindergruppe",
      subtitle: "Spielerische Ernährungsbildung für Kinder",
      duration: "16 Termine über 12 Monate",
      sessions: "Alle 2-3 Wochen à 75 Min + 2 Elternabende",
      price: "525€",
      description: "Kinder zwischen 8-12 Jahren lernen spielerisch gesunde Ernährung kennen. Das Programm stärkt das Selbstbewusstsein und fördert ein positives Körpergefühl in der Kleingruppe.",
      features: [
        "Altersgerechte Wissensvermittlung",
        "Spielerische Lernmethoden",
        "2 Individualberatungen pro Kind",
        "Elterneinbindung durch Abende",
        "Umfangreiches Kindermaterial",
        "Sportaktivierung und Bewegung",
        "Langzeitbegleitung über 1 Jahr"
      ],
      targetGroup: "Kinder 8-12 Jahre mit Gewichtsproblemen"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Hero Section */}
      <div className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                <Users className="w-4 h-4 mr-2" />
                Gruppenberatung & Kurse
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Gemeinsam zum</span>
              <span className="block bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Wunschgewicht
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              In unseren strukturierten Gruppenkursen lernen Sie gemeinsam mit anderen Teilnehmern, 
              wie Sie Ihre Ernährungsziele nachhaltig erreichen. Ohne Verbote, mit viel Verständnis und praktischen Strategien.
            </p>
          </div>
        </div>
      </div>

      {/* BMI Calculator Section */}
      <div className="py-16 bg-white/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">BMI-Rechner</h2>
            <p className="text-lg text-gray-600">
              Ermitteln Sie Ihren Body-Mass-Index als ersten Orientierungswert
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Berechnung</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gewicht (kg)
                    </label>
                    <input
                      type="number"
                      value={bmiData.weight}
                      onChange={(e) => setBmiData(prev => ({ ...prev, weight: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="z.B. 70"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Größe (cm)
                    </label>
                    <input
                      type="number"
                      value={bmiData.height}
                      onChange={(e) => setBmiData(prev => ({ ...prev, height: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="z.B. 170"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={calculateBMI}
                      className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                    >
                      <Calculator className="w-4 h-4 inline mr-2" />
                      Berechnen
                    </button>
                    <button
                      onClick={resetBMI}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Zurücksetzen
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Ergebnis</h3>
                {bmiData.result ? (
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-2">
                        {bmiData.result.value}
                      </div>
                      <div className="text-lg font-medium text-gray-700 mb-4">
                        {bmiData.result.category}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 space-y-2">
                      <div className="flex justify-between">
                        <span>Untergewicht:</span>
                        <span>&lt; 18,5</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Normalgewicht:</span>
                        <span>18,5 - 24,9</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Übergewicht:</span>
                        <span>25 - 29,9</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Adipositas:</span>
                        <span>≥ 30</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-lg p-6 text-center text-gray-500">
                    <Calculator className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p>Geben Sie Ihre Werte ein, um Ihren BMI zu berechnen</p>
                  </div>
                )}
                
                <div className="mt-6 p-4 bg-accent-50 rounded-lg border border-accent-200">
                  <div className="flex items-start">
                    <Info className="w-5 h-5 text-accent-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div className="text-sm text-accent-700">
                      <strong>Hinweis:</strong> Der BMI ist nur ein Orientierungswert. 
                      Für eine umfassende Beurteilung Ihres Gesundheitszustandes empfehlen wir eine persönliche Beratung.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Unsere Gruppenprogramme
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strukturierte Kurse für nachhaltige Ernährungsumstellung in der Gemeinschaft
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-lg text-primary-600 font-medium">{program.subtitle}</p>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {program.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {program.sessions}
                    </span>
                  </div>

                  <div className="text-3xl font-bold text-primary-600 mb-6">{program.price}</div>

                  <p className="text-gray-700 leading-relaxed mb-6">{program.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Programminhalt:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg mb-6">
                    <div className="flex items-center mb-2">
                      <Target className="w-4 h-4 text-accent-600 mr-2" />
                      <span className="font-medium text-gray-900">Zielgruppe:</span>
                    </div>
                    <p className="text-gray-700">{program.targetGroup}</p>
                  </div>

                  <button className="w-full bg-gradient-to-r from-primary-600 to-accent-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-primary-700 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-glow">
                    Jetzt anmelden
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ihr Weg zum Erfolg
            </h2>
            <p className="text-lg text-gray-600">
              So funktioniert unser bewährtes Gruppenprogramm
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Anmeldung",
                description: "Unverbindliches Infogespräch und Anmeldung zum passenden Kurs"
              },
              {
                step: "2", 
                title: "Startphase",
                description: "Kennlernen der Gruppe und Grundlagen der gesunden Ernährung"
              },
              {
                step: "3",
                title: "Umsetzung", 
                description: "Praktische Übungen, Kochworkshops und Alltagsstrategien"
              },
              {
                step: "4",
                title: "Nachhaltigkeit",
                description: "Langfristige Begleitung und Stabilisierung der neuen Gewohnheiten"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 shadow-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Insurance Info */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kostenbeteiligung der Krankenkasse</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Die meisten Krankenkassen übernehmen 75-100% der Kurskosten als Präventionsleistung. 
                Bei ärztlicher Notwendigkeitsbescheinigung ist oft eine vollständige Kostenübernahme möglich.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-primary-700 hover:to-accent-600 transition-all duration-300">
                  Kostenlose Beratung
                </button>
                <button className="border-2 border-primary-300 text-primary-700 px-8 py-3 rounded-xl font-semibold hover:bg-primary-50 hover:border-primary-400 transition-all duration-300">
                  Infomaterial anfordern
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
