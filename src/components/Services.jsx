import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Services() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const [activeIndex, setActiveIndex] = useState(0)
  
  const services = [
    {
      number: '01',
      title: 'Performance\nAnalyse',
      description: 'Umfassende Bewertung Ihrer aktuellen Leistung und Ernährung',
      duration: '90 Min',
      price: '150'
    },
    {
      number: '02',
      title: 'Individueller\nErnährungsplan',
      description: 'Maßgeschneiderte Strategien für Ihre sportlichen Ziele',
      duration: 'Laufend',
      price: '280'
    },
    {
      number: '03',
      title: 'BIA-Körper\nanalyse',
      description: 'Präzise Messung Ihrer Körperzusammensetzung',
      duration: '30 Min',
      price: '75'
    },
    {
      number: '04',
      title: 'Langzeit\nBetreuung',
      description: 'Kontinuierliche Optimierung über 12 Wochen',
      duration: '3 Monate',
      price: '650'
    }
  ]

  return (
    <section 
      ref={ref}
      className="section-spacing bg-white relative overflow-hidden"
      id="services"
    >
      {/* Section Label */}
      <motion.div 
        className="container-narrow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-sm font-medium text-neutral-500 tracking-[0.2em] uppercase mb-16">
          Leistungen
        </div>
      </motion.div>

      {/* Services Carousel */}
      <div className="relative">
        {/* Background Numbers */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            x: useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
          }}
        >
          <span className="text-[40rem] font-display font-light text-neutral-100 leading-none select-none">
            0{activeIndex + 1}
          </span>
        </motion.div>

        {/* Service Cards Container */}
        <div className="container-narrow relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`service-card cursor-pointer relative ${
                  index === activeIndex ? 'active' : ''
                }`}
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Service Number */}
                <div className="text-4xl font-display font-light text-neutral-300 mb-6">
                  {service.number}
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-display font-medium text-neutral-900 mb-4 leading-tight">
                  {service.title.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </h3>

                {/* Service Description */}
                <p className="text-neutral-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Details */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Dauer</span>
                    <span className="font-medium text-neutral-900">{service.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 text-sm">Preis</span>
                    <span className="text-2xl font-display font-medium text-neutral-900">
                      €{service.price}
                    </span>
                  </div>
                </div>

                {/* Action */}
                <motion.button
                  className="btn-secondary w-full"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Details ansehen
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="container-narrow relative z-10 mt-16">
          <div className="flex justify-center space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-neutral-900 w-8' 
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <motion.div 
        className="container-narrow mt-32"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-hero font-display text-neutral-900 mb-6">
              Wissenschaft
              <br />
              <span className="text-accent">trifft Praxis.</span>
            </h2>
            <p className="text-subtitle mb-8">
              Evidenzbasierte Ernährungsstrategien, die in der Realität funktionieren.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-1 h-8 bg-accent mr-4"></div>
                <span className="font-medium text-neutral-900">12+ Jahre Expertise</span>
              </div>
              <div className="flex items-center">
                <div className="w-1 h-8 bg-accent mr-4"></div>
                <span className="font-medium text-neutral-900">200+ Erfolgreiche Athleten</span>
              </div>
              <div className="flex items-center">
                <div className="w-1 h-8 bg-accent mr-4"></div>
                <span className="font-medium text-neutral-900">Individuelle Betreuung</span>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Ernährungsberatung"
              className="w-full h-96 object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-px bg-accent"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}