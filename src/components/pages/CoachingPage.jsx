import { Users, Clock, Target, Trophy, ArrowRight, CheckCircle } from 'lucide-react'

export default function CoachingPage() {
  const coachingPackages = [
    {
      name: "Starter Paket",
      duration: "4 Wochen",
      sessions: "2 Termine",
      price: "299€",
      features: [
        "Ausführliche Anamnese",
        "Individueller Ernährungsplan",
        "2 Beratungstermine à 60 Min",
        "E-Mail Support",
        "Rezeptsammlung"
      ],
      popular: false
    },
    {
      name: "Performance Paket",
      duration: "12 Wochen", 
      sessions: "6 Termine",
      price: "749€",
      features: [
        "Alles aus Starter Paket",
        "6 Beratungstermine à 60 Min",
        "Wöchentliche Check-ins",
        "Supplement Beratung",
        "Körperanalyse (BIA)",
        "Trainingsabstimmung",
        "WhatsApp Support"
      ],
      popular: true
    },
    {
      name: "Elite Paket", 
      duration: "6 Monate",
      sessions: "12 Termine",
      price: "1.299€",
      features: [
        "Alles aus Performance Paket", 
        "12 Beratungstermine à 60 Min",
        "Monatliche Körperanalyse",
        "Wettkampfvorbereitung",
        "24/7 WhatsApp Support",
        "Einkaufsbegleitung",
        "Kochkurs (online)"
      ],
      popular: false
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
                Personal Coaching
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Erreichen Sie Ihre</span>
              <span className="block bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                sportlichen Ziele
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Individuelle 1:1 Betreuung für maximale Ergebnisse. Ob Muskelaufbau, Ausdauer oder Wettkampfvorbereitung - 
              gemeinsam entwickeln wir Ihre optimale Ernährungsstrategie.
            </p>
          </div>
        </div>
      </div>

      {/* Coaching Packages */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Wählen Sie Ihr Coaching-Paket
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jedes Paket ist auf verschiedene Bedürfnisse und Ziele zugeschnitten.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {coachingPackages.map((pkg, index) => (
              <div 
                key={pkg.name}
                className={`relative bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                  pkg.popular ? 'border-2 border-primary-500 shadow-glow' : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Beliebtestes Paket
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {pkg.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {pkg.sessions}
                      </span>
                    </div>
                    <div className="text-4xl font-bold text-primary-600 mb-2">{pkg.price}</div>
                    <div className="text-gray-500">einmalig</div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white hover:from-primary-700 hover:to-accent-600 shadow-lg hover:shadow-glow' 
                        : 'bg-gray-100 text-gray-900 hover:bg-primary-50 hover:text-primary-700'
                    }`}
                  >
                    Paket wählen
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
              So läuft Ihr Coaching ab
            </h2>
            <p className="text-lg text-gray-600">
              Ein strukturierter Prozess für maximale Erfolge
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Erstgespräch",
                description: "Ausführliche Anamnese Ihrer Ziele, Gewohnheiten und Herausforderungen",
                icon: <Users className="w-8 h-8" />
              },
              {
                step: "2", 
                title: "Analyse",
                description: "Körperkomposition, Blutwerte und Trainingsplan werden ausgewertet",
                icon: <Target className="w-8 h-8" />
              },
              {
                step: "3",
                title: "Planerstellung", 
                description: "Individueller Ernährungsplan passend zu Ihrem Lebensstil",
                icon: <CheckCircle className="w-8 h-8" />
              },
              {
                step: "4",
                title: "Begleitung",
                description: "Regelmäßige Anpassungen und Support auf dem Weg zu Ihren Zielen",
                icon: <Trophy className="w-8 h-8" />
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                    {process.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Bereit für Ihre Transformation?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Buchen Sie jetzt Ihr kostenloses Erstgespräch und starten Sie in ein neues sportliches Leben.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-glow">
              Kostenloses Erstgespräch
            </button>
            <button className="border-2 border-primary-300 text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 hover:border-primary-400 transition-all duration-300">
              Fragen stellen
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
