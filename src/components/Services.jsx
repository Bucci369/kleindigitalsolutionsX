import { motion } from 'framer-motion'
import { useMemo } from 'react'

export default function Services() {
  const services = useMemo(() => ([
    {
      number: '01',
      title: 'Performance Analyse',
      short: 'Umfassende Bewertung Ihrer aktuellen Leistung und Ernährung',
      duration: '90 Min',
      price: '150',
      tier: 'Analyse',
      details: [
        'Anamnese & Zieldefinition',
        'Ist-Analyse Ernährung & Belastung',
        'Priorisierte Handlungsempfehlungen',
        'Strukturierter Maßnahmenfahrplan'
      ]
    },
    {
      number: '02',
      title: 'Individueller Ernährungsplan',
      short: 'Maßgeschneiderte Strategien für Ihre sportlichen Ziele',
      duration: 'Laufend',
      price: '280',
      tier: 'Plan',
      details: [
        'Auswertung Ernährungsprotokoll',
        'Periodisierte Nährstoffstrategie',
        'Planvarianten Training / Regeneration',
        'Review & Anpassung (30 Min)'
      ]
    },
    {
      number: '03',
      title: 'BIA-Körperanalyse',
      short: 'Präzise Messung Ihrer Körperzusammensetzung',
      duration: '30 Min',
      price: '75',
      tier: 'Messung',
      details: [
        'Messung & Auswertung',
        'Phasenwinkel-Interpretation',
        'Vergleich zu Referenzprofilen',
        'Ableitung nächster Schritte'
      ]
    },
    {
      number: '04',
      title: 'Langzeit Betreuung (12 Wochen)',
      short: 'Kontinuierliche Optimierung mit adaptiver Strategie',
      duration: '3 Monate',
      price: '650',
      tier: 'Betreuung',
      details: [
        'Initiale Strategie-Session',
        'Wöchentliche Check-ins (asynchron)',
        'Plan-Updates nach Bedarf',
        'Abschluss-Analyse & Ausblick'
      ]
    }
  ]), [])

  return (
    <section
  className="py-28 section-bg-3 relative"
      id="services"
      aria-labelledby="leistungen-heading"
    >
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <div className="text-xs tracking-[0.25em] font-medium text-neutral-500 uppercase mb-6">Leistungen</div>
          <h2 id="leistungen-heading" className="text-4xl sm:text-5xl font-display font-semibold tracking-tight text-neutral-900 leading-tight mb-6">
            Klar strukturiert. Vergleichbar. Wirksam.
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Vier abgestufte Leistungsbausteine – vom punktuellen Leistungs-Check bis zur eng begleiteten Transformation. Transparent in Aufbau, Umfang und Invest.
          </p>
        </motion.div>
      </div>

      {/* Responsive: Cards (mobile) + Vergleichstabelle (desktop) */}
      <div className="container-narrow">
        {/* Mobile Cards */}
  <div className="grid gap-12 lg:hidden">
          {services.map(s => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-2"
            >
              <div className="text-xs tracking-widest text-neutral-400 mb-2">{s.number}</div>
              <h3 className="font-display text-xl font-semibold mb-3 leading-snug">{s.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-5">{s.short}</p>
              <div className="grid grid-cols-2 gap-4 text-sm mb-5">
                <div>
                  <div className="text-neutral-500 text-xs uppercase tracking-wide mb-1">Dauer</div>
                  <div className="font-medium">{s.duration}</div>
                </div>
                <div>
                  <div className="text-neutral-500 text-xs uppercase tracking-wide mb-1">Preis</div>
                  <div className="font-display text-lg font-semibold">€{s.price}</div>
                </div>
              </div>
              <div className="text-xs font-medium tracking-wide text-neutral-500 uppercase mb-2">Enthält</div>
              <ul className="text-sm text-neutral-700 space-y-1 mb-6 list-none">
                {s.details.map(d => (
                  <li key={d} className="leading-snug">{d}</li>
                ))}
              </ul>
              <div className="flex gap-3 text-sm underline">
                <a href="#contact" className="flex-1 text-center">Anfragen</a>
                <button className="flex-1">Details</button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden lg:block">
          <div>
            <div className="grid grid-cols-5 text-xs font-medium uppercase tracking-wide mb-4">
              <div>Leistung</div>
              <div>Kurzbeschreibung</div>
              <div>Dauer</div>
              <div>Preis</div>
              <div>Kernbestandteile</div>
            </div>
            {services.map((s) => (
              <div key={s.number} className="grid grid-cols-5 py-6 border-t border-neutral-300 first:border-t-0 text-sm">
                <div>
                  <div className="text-xs tracking-widest text-neutral-400 mb-1">{s.number}</div>
                  <div className="font-display font-semibold text-neutral-900 leading-snug">{s.title}</div>
                </div>
                <div className="text-neutral-600 leading-relaxed text-sm">{s.short}</div>
                <div className="text-neutral-900 font-medium text-sm">{s.duration}</div>
                <div>
                  <div className="font-display text-lg font-semibold tracking-tight text-neutral-900">€{s.price}</div>
                  <div className="mt-3 flex gap-2 text-xs underline">
                    <a href="#contact" className="">Anfragen</a>
                    <button className="">Details</button>
                  </div>
                </div>
                <div>
                  <ul className="text-sm text-neutral-700 space-y-1 list-none m-0 p-0">
                    {s.details.map(d => (
                      <li key={d} className="leading-snug">{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Band */}
      <div className="container-narrow mt-28">
        <div className="grid md:grid-cols-3 gap-10 border-t border-neutral-200 pt-16">
          {[
            { label: 'Erfahrung', value: '12+ Jahre' },
            { label: 'Athleten betreut', value: '200+' },
            { label: 'Ansatz', value: 'Individuell & evidenzbasiert' }
          ].map(item => (
            <div key={item.label} className="space-y-2">
              <div className="text-xs tracking-widest text-neutral-500 uppercase">{item.label}</div>
              <div className="text-2xl font-display font-semibold text-neutral-900">{item.value}</div>
              <div className="h-px bg-neutral-200" />
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy Section */}
  {/* Entfernt: Alte Philosophie-Bild-Sektion zugunsten kompakter Vergleichsdarstellung */}
    </section>
  )
}