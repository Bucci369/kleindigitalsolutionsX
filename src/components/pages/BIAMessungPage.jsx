import { useState } from 'react'
import { Activity, Zap, Target, AlertTriangle, CheckCircle, Info, Calculator } from 'lucide-react'

export default function BIAMessungPage() {
  const [activeSection, setActiveSection] = useState('ueberblick')

  const messwerte = [
    {
      parameter: "Resistance (R)",
      einheit: "Ohm",
      beschreibung: "Gesamtwiderstand des Körpers, verhält sich umgekehrt proportional zur Menge an Wasser und Salzen",
      verwendung: "Berechnung von Körperwasser und Magermasse"
    },
    {
      parameter: "Reactance (Xc)", 
      einheit: "Ohm",
      beschreibung: "Widerstand an den Zellmembranen, jede Zellmembran wirkt wie ein kleiner Katalysator",
      verwendung: "Berechnung der Körperzellmasse"
    },
    {
      parameter: "Phasenwinkel Alpha",
      einheit: "Grad",
      beschreibung: "Verhältnis von R zu Xc, gibt Aufschluss über Zellzustand und Gesundheit des Organismus",
      verwendung: "Beurteilung der Zellgesundheit und Vitalität"
    }
  ]

  const erkrankungsdiagnostik = [
    "Beurteilung der Ernährungsweise",
    "Beurteilung der körperlichen Aktivität", 
    "Gesundheit und Funktion der Organe",
    "Schilddrüsenfehlfunktionen",
    "Hormonelle Störungen",
    "Herz- und Leberfunktionsstörungen",
    "Enzymatische Prozessstörungen",
    "Essstörungen (psychisch/organisch)",
    "Verdauungstraktstörungen",
    "Wasser-Elektrolyt-Haushalt Störungen"
  ]

  const voraussetzungen = [
    {
      bedingung: "Nahrungsaufnahme",
      regel: "Bis zu 2 Stunden vor der Messung keine schweren Mahlzeiten",
      grund: "Verändert den Wasserhaushalt"
    },
    {
      bedingung: "Sport", 
      regel: "Letzte sportliche Betätigung sollte 12 Stunden zurückliegen",
      grund: "Beeinflusst die Körperzusammensetzung"
    },
    {
      bedingung: "Alkohol",
      regel: "Mindestens 24 Stunden Verzicht vor der Messung", 
      grund: "Verändert den Flüssigkeitshaushalt erheblich"
    },
    {
      bedingung: "Weiblicher Zyklus",
      regel: "Hormonschwankungen müssen berücksichtigt werden",
      grund: "Beeinflusst die Wassereinlagerung"
    },
    {
      bedingung: "Blutspende",
      regel: "Sollte nicht in den Zeitraum der Messung fallen",
      grund: "Verändert die Körperzusammensetzung"
    }
  ]

  const kontraindikationen = [
    "Herzschrittmacher (Sicherheitsrisiko)",
    "Schwangerschaft (nicht geeignet)",
    "Akute Infekte (Magen-Darm, Grippe)",
    "Große operative Eingriffe (kürzlich)"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Hero Section */}
      <div className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                <Activity className="w-4 h-4 mr-2" />
                BIA-Messung
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Körperanalyse mit</span>
              <span className="block text-neutral-900">
                Bio-Impedanz-Analyse
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Präzise Bestimmung Ihrer Körperzusammensetzung für optimale Gesundheits- und Ernährungsberatung. 
              Wissenschaftlich anerkannt und medizinisch bewährt.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="py-8 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'ueberblick', label: 'Überblick', icon: <Info className="w-4 h-4" /> },
              { id: 'funktionsweise', label: 'Funktionsweise', icon: <Zap className="w-4 h-4" /> },
              { id: 'diagnostik', label: 'Diagnostik', icon: <Target className="w-4 h-4" /> },
              { id: 'voraussetzungen', label: 'Voraussetzungen', icon: <AlertTriangle className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === tab.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-neutral-100 hover:text-neutral-900'
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
          
          {/* Überblick */}
          {activeSection === 'ueberblick' && (
            <div className="space-y-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Was ist eine BIA-Messung?
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Die <strong className="text-neutral-800">Bio-Impedanz-Analyse (BIA)</strong> dient der 
                      präzisen Bestimmung der Körperzusammensetzung. Dank ihrer Genauigkeit und 
                      Aussagekraft ist sie die Methode der Wahl für die Analyse von Körpergewicht, 
                      Körperfett, Muskelmasse und Wasserhaushalt.
                    </p>
                    <p>
                      Im medizinischen Bereich hat sich die BIA durchgesetzt, da sie sehr genaue 
                      Kontrollergebnisse liefert und wissenschaftlich anerkannt ist. Sie stellt 
                      ein wichtiges Diagnoseinstrument dar.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Analyseparameter</h3>
                  <ul className="space-y-3">
                    {[
                      "Körperfettanteil (%)",
                      "Muskelmasse (kg)", 
                      "Körperwasser (Liter)",
                      "Zellmasse (kg)",
                      "Stoffwechselrate (kcal)",
                      "Phasenwinkel (Zellgesundheit)"
                    ].map((parameter, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{parameter}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Preisinfo */}
              <div className="bg-white rounded-2xl p-8 text-center border border-neutral-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  BIA-Messung inkl. Auswertungsgespräch
                </h3>
                <div className="text-4xl font-bold text-neutral-900 mb-2">39€</div>
                <p className="text-gray-600 mb-6">ca. 30 Minuten</p>
                <button className="bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors">
                  Termin vereinbaren
                </button>
              </div>
            </div>
          )}

          {/* Funktionsweise */}
          {activeSection === 'funktionsweise' && (
            <div className="space-y-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Wie funktioniert die BIA-Messung?
                </h2>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Messprinzip</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Bei der Bio-Impedanz-Analyse wird ein schwacher Wechselstrom von 
                      <strong className="text-neutral-900"> 0,8 mA bei 50 kHz</strong> durch den Körper geleitet. 
                      Aus dem Widerstand, den der Körper dem Strom entgegensetzt, werden 
                      Messwerte abgeleitet.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Der Körper wird in drei Kompartimente unterteilt: Fettmasse, Zellmasse 
                      und extrazelluläre Masse. Die Fettmasse leitet den Strom nicht und setzt 
                      ihm Widerstand entgegen, was zu messbaren Spannungsabfällen führt.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">3-Kompartiment-Modell</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Fettmasse:</strong> Isoliert, leitet keinen Strom</li>
                      <li>• <strong>Zellmasse:</strong> Aktives Gewebe mit Widerstand</li>
                      <li>• <strong>Extrazelluläre Masse:</strong> Wasser und Elektrolyte</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Messwerte im Detail</h3>
                <div className="grid lg:grid-cols-3 gap-6">
                  {messwerte.map((wert, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{wert.parameter}</h4>
                      <div className="text-sm text-neutral-700 font-medium mb-3">Einheit: {wert.einheit}</div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">{wert.beschreibung}</p>
                      <div className="bg-primary-50 p-3 rounded-lg">
                        <span className="text-xs font-medium text-primary-700">
                          Verwendung: {wert.verwendung}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Diagnostik */}
          {activeSection === 'diagnostik' && (
            <div className="space-y-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Medizinische Diagnostik mit BIA
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Die BIA-Messung gibt Aufschluss über Gesundheit und Funktion des Körpers 
                  und stellt ein wichtiges medizinisches Diagnoseinstrument dar.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Warum BIA-Diagnostik?</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Die äußerliche Beurteilung von Gesundheit kann zu Fehlannahmen führen, 
                      die gesundheitliche Risiken bergen. Nicht immer stimmt das, was die 
                      Äußerlichkeiten vermuten lassen.
                    </p>
                    <p>
                      Die BIA verhindert solche Fehlannahmen und ermöglicht eine Behandlung, 
                      die der Patient wirklich benötigt. Sie kann Körperfettanteil messen und 
                      in Verbindung zu anderen Parametern bringen.
                    </p>
                    <p>
                      Sie eignet sich auch zur Diagnose, wenn klassische Untersuchungen 
                      ergebnislos waren, und zur Verlaufskontrolle bei Behandlungen.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Anwendungsbereiche</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" />
                      Ärztliche Überwachung bei Sportlern
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" />
                      Dokumentation bei Essstörungen
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" />
                      Kontrolle bei ärztlichen Diäten
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" />
                      Verlaufskontrolle in der Therapie
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                  Erkennbare Störungen und Krankheiten
                </h3>
                <div className="grid lg:grid-cols-2 gap-4">
                  {erkrankungsdiagnostik.map((erkrankung, index) => (
                    <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <Target className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{erkrankung}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Voraussetzungen */}
          {activeSection === 'voraussetzungen' && (
            <div className="space-y-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Voraussetzungen für genaue Messergebnisse
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Der Wasserhaushalt des Körpers unterliegt natürlichen Schwankungen. 
                  Bestimmte Bedingungen müssen beachtet werden, um Messergebnisse nicht zu verfälschen.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                  Wichtige Bedingungen vor der Messung
                </h3>
                <div className="grid lg:grid-cols-2 gap-6">
                  {voraussetzungen.map((bedingung, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-200">
                      <div className="flex items-start mb-4">
                        <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                        <h4 className="text-lg font-semibold text-gray-900">{bedingung.bedingung}</h4>
                      </div>
                      <p className="text-gray-700 mb-3 font-medium">{bedingung.regel}</p>
                      <p className="text-sm text-gray-600">
                        <strong>Grund:</strong> {bedingung.grund}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Kontraindikationen</h3>
                  <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                    <p className="text-red-800 font-medium mb-4">
                      Für folgende Personen ist die BIA-Messung nicht geeignet:
                    </p>
                    <ul className="space-y-3">
                      {kontraindikationen.map((kontra, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-red-700">{kontra}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Zusätzliche Hinweise</h3>
          <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
            <p className="text-accent-700 leading-relaxed mb-4">
                      Mögliche Erkrankungen wie Magen-Darm-Infekte oder Grippe, die 
                      unmittelbar vor einer BIA-Messung auftreten, können Fehler in 
                      der Bestimmung der Körperzusammensetzung hervorrufen.
                    </p>
                    <p className="text-accent-700 leading-relaxed">
                      Bei Unsicherheiten über Ihre Eignung für die Messung sprechen 
                      Sie uns gerne an. Wir beraten Sie individuell.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gray-50 rounded-2xl p-6 inline-block">
                  <p className="text-gray-600 mb-4">
                    Weitere detaillierte Informationen finden Sie unter:
                  </p>
                  <a 
                    href="https://www.medi-cal.de/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-800 hover:text-neutral-900 font-medium"
                  >
                    www.medi-cal.de
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white/70">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Bereit für Ihre Körperanalyse?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Vereinbaren Sie jetzt Ihren BIA-Messtermin für eine präzise Analyse Ihrer Körperzusammensetzung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <Calculator className="w-5 h-5 inline mr-2" />
              BIA-Termin buchen
            </button>
            <button className="border-2 border-primary-300 text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 hover:border-primary-400 transition-all duration-300">
              Fragen zur BIA-Messung
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
