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
      className="py-28 bg-white relative"
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
        <div className="grid gap-8 lg:hidden">
          {services.map(s => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-neutral-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
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
              <div className="flex gap-3">
                <a href="#contact" className="btn-primary flex-1 text-center">Anfragen</a>
                <button className="btn-secondary flex-1">Details</button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden lg:block">
          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white">
            <div className="grid grid-cols-5 text-sm font-medium bg-neutral-50 border-b border-neutral-200">
              <div className="py-4 px-6 text-neutral-500">Leistung</div>
              <div className="py-4 px-6 text-neutral-500">Kurzbeschreibung</div>
              <div className="py-4 px-6 text-neutral-500">Dauer</div>
              <div className="py-4 px-6 text-neutral-500">Preis</div>
              <div className="py-4 px-6 text-neutral-500">Kernbestandteile</div>
            </div>
            {services.map((s, idx) => (
              <div
                key={s.number}
                className={`grid grid-cols-5 border-b border-neutral-100 last:border-b-0 transition-colors ${idx % 2 === 1 ? 'bg-neutral-50/40' : 'bg-white'} hover:bg-accent-50/40`}
              >
                <div className="py-6 px-6 align-top">
                  <div className="text-xs tracking-widest text-neutral-400 mb-1">{s.number}</div>
                  <div className="font-display font-semibold text-neutral-900 leading-snug">{s.title}</div>
                </div>
                <div className="py-6 px-6 text-neutral-600 leading-relaxed text-sm">{s.short}</div>
                <div className="py-6 px-6 text-neutral-900 font-medium text-sm">{s.duration}</div>
                <div className="py-6 px-6">
                  <div className="font-display text-lg font-semibold tracking-tight text-neutral-900">€{s.price}</div>
                  <div className="mt-3 flex gap-2">
                    <a href="#contact" className="btn-primary !py-2 !px-4 text-xs">Anfragen</a>
                    <button className="btn-secondary !py-2 !px-4 text-xs">Details</button>
                  </div>
                </div>
                <div className="py-6 px-6">
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