import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Übernimmt die Krankenkasse die Kosten für die Ernährungsberatung?",
      answer: "Ja, als zertifizierte Ernährungsberaterin (VDD/DGE) werden meine Leistungen von den meisten gesetzlichen und privaten Krankenkassen bezuschusst. Die Erstattung beträgt meist 80-100% der Kosten bei ärztlicher Verordnung. Gerne unterstütze ich Sie bei der Antragsstellung."
    },
    {
      question: "Wie läuft eine Ernährungsberatung bei Ihnen ab?",
      answer: "Die Erstberatung dauert 60-90 Minuten und umfasst eine ausführliche Anamnese, Analyse Ihrer Essgewohnheiten und Ihrer sportlichen Ziele. Darauf aufbauend entwickeln wir gemeinsam einen individuellen Ernährungsplan. Folgeberatungen dienen der Anpassung und Optimierung."
    },
    {
      question: "Unterscheidet sich Sporternährung wirklich von 'normaler' gesunder Ernährung?",
      answer: "Absolut. Sporternährung berücksichtigt spezifische Faktoren wie Trainingsintensität, -dauer, Wettkampfzeiten und individuelle Stoffwechselbesonderheiten. Das Timing der Nährstoffaufnahme, die Hydratation und die Regenerationsoptimierung sind entscheidende Unterschiede."
    },
    {
      question: "Brauche ich als Hobbysportler wirklich eine professionelle Ernährungsberatung?",
      answer: "Auch als Hobbysportler profitieren Sie erheblich von optimierter Ernährung. Bessere Regeneration, konstantere Leistung, weniger Verletzungsrisiko und effektivere Zielerreichung sind nur einige Vorteile. Bereits kleine Anpassungen können große Wirkung zeigen."
    },
    {
      question: "Wie schnell sehe ich Ergebnisse bei der Ernährungsumstellung?",
      answer: "Erste positive Effekte wie bessere Energie und Regeneration spüren Sie oft binnen 1-2 Wochen. Leistungsverbesserungen zeigen sich typischerweise nach 4-6 Wochen konsequenter Umsetzung. Langfristige Adaptationen benötigen 3-6 Monate."
    },
    {
      question: "Arbeiten Sie nur mit Leistungssportlern oder auch mit Freizeitsportlern?",
      answer: "Ich arbeite mit Sportlern aller Leistungsklassen - vom Einsteiger bis zum Profi-Athleten. Jeder verdient eine optimale Ernährungsstrategie, angepasst an seine individuellen Ziele und Lebensumstände."
    },
    {
      question: "Was unterscheidet Sie von anderen Ernährungsberatern?",
      answer: "Meine Spezialisierung auf Sporternährung, kombiniert mit meiner eigenen Erfahrung als Triathletin, ermöglicht es mir, die praktischen Herausforderungen von Sportlern zu verstehen. Zudem basiert mein Ansatz auf aktueller wissenschaftlicher Evidenz, nicht auf Trends."
    },
    {
      question: "Bieten Sie auch Online-Beratungen an?",
      answer: "Ja, ich biete sowohl Präsenz- als auch Online-Beratungen an. Online-Sessions sind besonders praktisch für Folgeberatungen, Trainings-Camps oder wenn Sie nicht in München ansässig sind. Die Qualität der Beratung bleibt dabei identisch."
    },
    {
      question: "Muss ich auf bestimmte Lebensmittel komplett verzichten?",
      answer: "Nein, mein Ansatz basiert nicht auf Verzicht, sondern auf optimaler Nährstofftiming und -zusammensetzung. Auch 'Guilty Pleasures' haben ihren Platz - es geht um die richtige Balance und das Timing."
    },
    {
      question: "Wie oft sollte ich zu Folgeberatungen kommen?",
      answer: "Das hängt von Ihren Zielen ab. Bei Leistungsoptimierung empfehle ich zunächst alle 2-4 Wochen, bei Gewichtsmanagement wöchentlich. Mit der Zeit können die Abstände vergrößert werden. Flexibilität ist mir wichtig."
    }
  ]

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparente Antworten auf die wichtigsten Fragen rund um 
            Sporternährung und Ernährungsberatung
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left focus:outline-none focus:bg-gray-50 hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <span className="flex-shrink-0 text-gray-400">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Haben Sie weitere Fragen? Kontaktieren Sie mich gerne direkt.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 border border-gray-900 rounded-md text-base font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
          >
            Persönliche Beratung anfragen
          </a>
        </div>
      </div>
    </div>
  )
}