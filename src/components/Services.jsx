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
        'Segmentale Zusammensetzung',
        'Phasenwinkel-Interpretation',
        'Hydrationsstatus',
        'Vergleich mit Referenzwerten'
      ]
    },
    {
      number: '04',
      title: 'Kontinuierliche Betreuung',
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
      id="services"
      aria-labelledby="leistungen-heading"
      className="pt-64 pb-32 relative overflow-hidden section-bg-3"
    >
      {/* Subtile strukturierte Fläche */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,#fafafa_0px,#fafafa_3px,#ffffff_3px,#ffffff_9px)] opacity-80" />
        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_50%_25%,black,transparent_70%)]" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
      </div>

      {/* Intro */}
      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl mb-24"
        >
          <div className="flex flex-col gap-6">
            <div>
              <div className="text-[11px] tracking-[0.35em] font-medium text-neutral-500 uppercase mb-4">Leistungen</div>
              <div className="flex items-baseline gap-6 flex-wrap">
                <h2 id="leistungen-heading" className="text-4xl sm:text-5xl font-display font-semibold tracking-tight text-neutral-900 leading-none">
                  Wirksam.
                </h2>
                <span className="hidden sm:inline text-sm font-medium text-neutral-500 tracking-wide">Vier klar definierte Bausteine</span>
              </div>
            </div>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
              Vier abgestufte Leistungsbausteine – vom punktuellen Leistungs-Check bis zur eng begleiteten Transformation. Transparent in Aufbau, Umfang und Invest.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Mobile Cards */}
      <div className="container-narrow relative z-10 lg:hidden">
        <div className="grid gap-10">
          {services.map(s => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="group relative p-5 rounded-2xl border border-neutral-200/80 bg-white/60 backdrop-blur-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-500 overflow-hidden flex will-change-transform before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:rounded-[inherit] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.06),transparent_65%)] hover:-translate-y-[2px] hover:shadow-[0_8px_28px_-10px_rgba(0,0,0,0.18),0_4px_12px_-6px_rgba(0,0,0,0.08)]"
            >
              {/* Hintergrund Nummer (links vertikal mittig) */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none select-none">
                <span className="font-display font-semibold text-neutral-900/5 text-7xl leading-none tracking-tight group-hover:text-neutral-900/10 transition-colors">
                  {s.number}
                </span>
              </div>
              <div className="relative flex-1 flex flex-col justify-center">
                <div>
                  <h3 className="font-display text-xl font-semibold leading-snug text-neutral-900 mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">{s.short}</p>
                </div>
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
                <div className="flex gap-3 text-sm">
                  <a href="#contact" className="flex-1 text-center underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800 transition">Anfragen</a>
                  <button className="flex-1 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-800 transition">Details</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop Tabelle */}
      <div className="container-narrow relative z-10 hidden lg:block">
        <div className="rounded-3xl border border-neutral-200/80 overflow-hidden backdrop-blur-sm bg-white/55 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-5 text-[11px] font-semibold uppercase tracking-[0.15em] px-6 py-4 bg-neutral-50/70 border-b border-neutral-200">
            <div>Leistung</div>
            <div>Kurzbeschreibung</div>
            <div>Dauer</div>
            <div>Preis</div>
            <div>Kernbestandteile</div>
          </div>
          {services.map(s => (
            <div key={s.number} className="grid grid-cols-5 px-6 py-9 border-t border-neutral-200 first:border-t-0 text-sm relative group overflow-hidden z-0 items-center transition-all duration-400 will-change-transform hover:-translate-y-[2px] hover:shadow-[0_10px_34px_-14px_rgba(0,0,0,0.22),0_4px_14px_-8px_rgba(0,0,0,0.12)] hover:bg-white/70">
              {/* Hintergrund Nummer (links vertikal mittig) */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none select-none">
                <span className="font-display font-semibold text-neutral-900/5 text-8xl leading-none tracking-tight group-hover:text-neutral-900/10 transition-colors">
                  {s.number}
                </span>
              </div>
              {/* Top Gradient für 3D-Kante */}
              <div className="pointer-events-none absolute left-0 right-0 top-0 -translate-y-1 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-b from-neutral-300/30 via-neutral-300/15 to-transparent" />
              <div className="pr-4 relative z-10 flex flex-col justify-center">
                <div className="font-display font-semibold text-neutral-900 leading-snug text-base pt-1">{s.title}</div>
              </div>
              <div className="text-neutral-600 leading-relaxed text-sm pr-4 relative z-10 flex flex-col justify-center">{s.short}</div>
              <div className="text-neutral-900 font-medium text-sm flex flex-col justify-center relative z-10">{s.duration}</div>
              <div className="flex flex-col gap-3 relative z-10 justify-center">
                <div className="font-display text-lg font-semibold tracking-tight text-neutral-900">€{s.price}</div>
                <div className="flex gap-3 text-[11px] font-medium">
                  <a href="#contact" className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-900 transition">Anfragen</a>
                  <button className="underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition">Details</button>
                </div>
              </div>
              <div className="relative z-10 flex flex-col justify-center">
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

      {/* Trust / Metrics Band */}
      <div className="container-narrow mt-32 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 border-t border-neutral-200 pt-16">
          {[
            { label: 'ERFAHRUNG', value: '12+ Jahre' },
            { label: 'ATHLETEN BETREUT', value: '200+' },
            { label: 'ANSATZ', value: 'Individuell & evidenzbasiert' }
          ].map(item => (
            <div key={item.label} className="space-y-2">
              <div className="text-xs tracking-widest text-neutral-500 uppercase">{item.label}</div>
              <div className="text-2xl font-display font-semibold text-neutral-900">{item.value}</div>
              <div className="h-px bg-neutral-200" />
            </div>
          ))}
          <div className="md:col-span-3 col-span-full text-xs text-neutral-500 tracking-wide pt-4">
            <span className="italic">besser machen best practice</span>
          </div>
        </div>
      </div>
    </section>
  )
}