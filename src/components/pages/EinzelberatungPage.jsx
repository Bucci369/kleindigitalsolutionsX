import { useState } from 'react'
import { User, Clock, Target, CheckCircle, Download, Phone, Mail, Heart, Activity } from 'lucide-react'

export default function EinzelberatungPage() {
  const [activeTab, setActiveTab] = useState('allgemein')

  const beratungsablauf = [
    {
      sitzung: "Erstberatung",
      dauer: "60 Minuten",
      inhalt: "Ausführliches Anamnesegespräch, Situationserhebung, Problemformulierung, Zielfestlegung, Anleitung zum Ernährungsprotokoll",
      fokus: "Grundlage schaffen"
    },
    {
      sitzung: "Zweittermin", 
      dauer: "60 Minuten",
      inhalt: "Auswertung des 7-Tage-Ernährungsprotokolls, Nährwertanalyse, Versorgungsstatus, individuelle Empfehlungen",
      fokus: "Ist-Zustand analysieren"
    },
    {
      sitzung: "Folgetermine",
      dauer: "je 60 Minuten", 
      inhalt: "Essverhalten, Lebensmittelauswahl, Ernährungsphysiologie, Motivationsstärkung, Bewegungsberatung",
      fokus: "Umsetzung & Optimierung"
    }
  ]

  const zielgruppen = [
    {
      kategorie: "Gesunde Ernährung",
      beschreibung: "Alle, die sich gesund und ausgewogen ernähren möchten",
      details: "Steigerung des Wohlbefindens, körperlicher Leistungsfähigkeit und Vermeidung von Ernährungsfehlern"
    },
    {
      kategorie: "Lebensphasen",
      beschreibung: "Säuglinge, Kinder, Jugendliche, Schwangere, Stillende, Senioren",
      details: "Angepasste Ernährung für verschiedene Lebensphasen und besondere Bedürfnisse"
    },
    {
      kategorie: "Sportler",
      beschreibung: "Freizeit-, Gesundheits- und Leistungssportler",
      details: "Optimierung der sportlichen Leistung durch bedarfsgerechte Ernährung"
    }
  ]

  const krankheitsbilder = [
    "Übergewicht (BMI 25-29,9)", "Adipositas (BMI ≥30)", "Diabetes mellitus",
    "Bluthochdruck", "Fettstoffwechselstörungen", "Herz-Kreislauf-Erkrankungen",
    "Gicht und Hyperurikämie", "Magen-Darm-Erkrankungen", "Nierenerkrankungen",
    "Osteoporose", "Essstörungen", "Nahrungsmittelunverträglichkeiten"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Hero Section */}
      <div className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                <User className="w-4 h-4 mr-2" />
                Einzelberatung & Ernährungstherapie
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Individuelle Betreuung</span>
              <span className="block bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                für Ihre Gesundheit
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professionelle Ernährungsberatung und -therapie für mehr Wohlbefinden, 
              Leistungsfähigkeit und die Prävention ernährungsbedingter Erkrankungen.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="py-8 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'allgemein', label: 'Allgemeine Beratung', icon: <Heart className="w-4 h-4" /> },
              { id: 'sportler', label: 'Sportlerernährung', icon: <Activity className="w-4 h-4" /> },
              { id: 'krankheit', label: 'Ernährungstherapie', icon: <Target className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Allgemeine Beratung */}
          {activeTab === 'allgemein' && (
            <div className="space-y-16">
              
              {/* Warum Ernährungsberatung */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Warum ist gesunde Ernährung wichtig?
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Eine gesunde und ausgewogene Ernährung dient in erster Linie der 
                      <strong className="text-primary-600"> Steigerung des Wohlbefindens und der körperlichen Leistungsfähigkeit</strong>. 
                      Sie hilft dabei, Ernährungsfehler zu vermeiden und ernährungsbedingte Krankheiten vorzubeugen.
                    </p>
                    <p>
                      Eine gesunde Lebensweise trägt zu mehr Ausgeglichenheit, höherer Stressresistenz 
                      und geringerer Krankheitsanfälligkeit bei. Nur mit einer optimalen Energie-, 
                      Mineralstoff- und Nährstoffversorgung kann der Körper Höchstleistungen bringen.
                    </p>
                    <p>
                      Ein Mangel an Vitaminen, Mineralstoffen und Spurenelementen kann zu 
                      Leistungseinschränkungen oder Erkrankungen des Herz-Kreislauf-Systems 
                      bzw. des gesamten Stoffwechsels führen.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Ziele der Ernährungsberatung</h3>
                  <ul className="space-y-3">
                    {[
                      "Neue positive Einstellung zur Ernährung entwickeln",
                      "Gute und schlechte Essgewohnheiten erkennen", 
                      "Langfristige Ernährungsoptimierung",
                      "Dauerhafte positive Verhaltensänderung",
                      "Individuelle Bedürfnisse berücksichtigen"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Beratungsablauf */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                  So läuft Ihre Beratung ab
                </h2>
                <div className="grid lg:grid-cols-3 gap-8">
                  {beratungsablauf.map((termin, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{termin.sitzung}</h3>
                          <p className="text-sm text-primary-600">{termin.dauer}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3 leading-relaxed">{termin.inhalt}</p>
                      <div className="bg-primary-50 px-3 py-2 rounded-lg">
                        <span className="text-sm font-medium text-primary-700">Fokus: {termin.fokus}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <p className="text-gray-600 mb-4">
                    Die Einzelberatung umfasst in der Regel fünf Beratungseinheiten, 
                    ein längerer Zeitraum ist individuell möglich.
                  </p>
                </div>
              </div>

              {/* Zielgruppen */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                  Für wen ist die Beratung geeignet?
                </h2>
                <div className="grid lg:grid-cols-3 gap-8">
                  {zielgruppen.map((gruppe, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{gruppe.kategorie}</h3>
                      <p className="text-primary-600 font-medium mb-3">{gruppe.beschreibung}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{gruppe.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Sportlerernährung */}
          {activeTab === 'sportler' && (
            <div className="space-y-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Ernährungsberatung für Sportler
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Optimale Leistung durch sportartgerechte Ernährung
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Häufige Fragen von Sportlern</h3>
                <div className="grid lg:grid-cols-2 gap-6">
                  {[
                    "Was soll ich vor, während und nach dem Wettkampf essen?",
                    "Wie viele Kohlenhydrate und welche sind gut für mich?", 
                    "Wie viel Eiweiß brauche ich wirklich?",
                    "Wie viel Fett ist nötig und wie viel schädlich?",
                    "Wie bekomme ich überflüssige Pfunde runter?",
                    "Wie viel und was sollte ich trinken?"
                  ].map((frage, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">{frage}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Freizeitsportler</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Freizeit- und Gesundheitssportler benötigen im Grunde keine spezielle Sportlernahrung. 
                    Dennoch ist es wichtig, alle notwendigen Nährstoffe, Vitamine und Mineralstoffe 
                    in einem ausgewogenen Verhältnis aufzunehmen.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Ziel ist es, die Leistungsfähigkeit beizubehalten oder zu steigern und 
                    eine Mangelernährung zu vermeiden. Durch ein Ernährungsprotokoll können 
                    Sie Ihren aktuellen Status prüfen und optimieren.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Leistungssportler</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Leistungssportliches Training erfordert eine angepasste Ernährung. 
                    Mit einer physiologisch sinnvollen Ernährungsgestaltung wird die 
                    Belastbarkeit, Belastungsverarbeitung und beschleunigte Regeneration gewährleistet.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Ausgerichtet an Ihrem Trainingsplan erstellen wir Ihren persönlichen 
                    Ernährungsplan mit besonderem Fokus auf Trainings-, Wettkampf- und Regenerationsphasen.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Ernährungstherapie */}
          {activeTab === 'krankheit' && (
            <div className="space-y-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Ernährungstherapie bei Erkrankungen
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Spezialisierte Beratung bei ernährungsabhängigen Krankheiten
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Behandelte Krankheitsbilder</h3>
                <div className="grid lg:grid-cols-3 gap-4">
                  {krankheitsbilder.map((krankheit, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{krankheit}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 mt-6 leading-relaxed">
                  Diese und viele andere ernährungsabhängige Krankheiten setzen eine 
                  spezielle und individuell abgestimmte Ernährung voraus, um Symptome 
                  zu lindern und Folgeerkrankungen zu vermeiden.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Besondere Hinweise</h3>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Bei bariatrischen Eingriffen bieten wir eine spezialisierte Begleitung 
                    im Rahmen des multimodalen Therapiekonzeptes an.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Für Patienten mit Essstörungen (Bulimia nervosa, Anorexia nervosa, 
                    Binge Eating Disorder) arbeiten wir eng mit behandelnden Ärzten und 
                    Therapeuten zusammen.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Kosteninfo */}
      <div className="py-16 bg-white/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Kostenübernahme durch die Krankenkasse
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Präventive Beratung</h4>
                <p className="text-gray-700 leading-relaxed">
                  Bei allgemeiner Ernährungsberatung besteht in der Regel die Möglichkeit 
                  einer Kostenbeteiligung durch die Krankenkasse als Präventionsleistung.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Medizinische Notwendigkeit</h4>
                <p className="text-gray-700 leading-relaxed">
                  Bei Vorliegen einer ärztlichen Notwendigkeitsbescheinigung ist oft 
                  eine vollständige Kostenübernahme möglich. Fragen Sie bei Ihrer 
                  Krankenkasse nach dem Zuschuss in Ihrem Fall.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors mr-4">
                <Download className="w-4 h-4 inline mr-2" />
                Notwendigkeitsbescheinigung
              </button>
              <button className="border-2 border-primary-300 text-primary-700 px-8 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-colors">
                Kostenlose Beratung
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Bereit für eine bessere Ernährung?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Vereinbaren Sie jetzt Ihr unverbindliches Informationsgespräch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <Phone className="w-5 h-5 inline mr-2" />
              Termin vereinbaren
            </button>
            <button className="border-2 border-primary-300 text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 hover:border-primary-400 transition-all duration-300">
              <Mail className="w-5 h-5 inline mr-2" />
              E-Mail schreiben
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
