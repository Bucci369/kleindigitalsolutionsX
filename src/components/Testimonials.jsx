export default function Testimonials() {
  const testimonials = [
    {
      content: "Ich bin seit 15 Jahren Marathonläufer und dachte, ich hätte alles versucht. Aber Dr. Müller hat meine Performance revolutioniert. Nach nur 3 Monaten ihrer Betreuung lief ich meine persönliche Bestzeit – 8 Minuten schneller als je zuvor! Es ist nicht nur die Ernährung, es ist ihr Verständnis für die Psychologie des Sports.",
      author: "Michael Schmidt",
      role: "Marathon-Läufer & Firmenchef",
      location: "München",
      improvement: "8 Min. schnellere Marathon-Zeit",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      timeframe: "3 Monate",
      sport: "Sport",
      featured: true
    },
    {
      content: "Als ich nach meiner Schwangerschaft wieder ins Krafttraining eingestiegen bin, war ich total überfordert. Anna hat mir nicht nur geholfen, meine alte Kraft zurückzugewinnen, sondern sie sogar zu übertreffen. Sie versteht, dass Mütter andere Prioritäten haben und hat einen Plan entwickelt, der in meinen chaotischen Alltag passt.",
      author: "Sarah Weber",
      role: "Powerlifting-Athletin & Mutter",
      location: "Berlin", 
      improvement: "+25kg Kreuzheben, -12kg Körpergewicht",
      image: "https://images.unsplash.com/photo-1594736797933-d0c94be37e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      timeframe: "6 Monate",
      sport: "Sport",
      featured: false
    },
    {
      content: "Ich hatte schon fast aufgegeben. Nach 20 Jahren Triathlon fühlte ich mich ausgebrannt und langsam. Anna hat nicht nur meine Ernährung optimiert, sondern mir auch gezeigt, wie ich wieder Freude am Sport finde. Bei meinem letzten Ironman war ich emotional überwältigt – nicht wegen der Zeit, sondern weil ich wieder spürte, warum ich diesen Sport liebe.",
      author: "Thomas Braun", 
      role: "Triathlet & Ingenieur",
      location: "Hamburg",
      improvement: "2. Platz Altersklasse Ironman",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      timeframe: "4 Monate",
      sport: "Sport",
      featured: true
    },
    {
      content: "Als Profi-Radsportlerin dachte ich, ich wüsste alles über Sporternährung. Dr. Müller hat mir gezeigt, wie falsch ich lag. Ihre wissenschaftliche Herangehensweise und die individuellen Anpassungen haben meine Leistung auf ein neues Level gebracht. Das Wichtigste: Ich fühle mich energetischer und ausgeglichener als je zuvor.",
      author: "Lisa Hoffmann",
      role: "Profi-Radsportlerin",
      location: "Stuttgart",
      improvement: "Nationalkader-Nominierung",
      image: "https://images.unsplash.com/photo-1558618047-b90682c0e0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      timeframe: "5 Monate",
      sport: "Sport",
      featured: false
    },
    {
      content: "Nach meiner schweren Knieverletzung sagte jeder, meine Karriere sei vorbei. Anna hat mir geholfen, durch optimierte Ernährung nicht nur zurückzukommen, sondern stärker als je zuvor zu werden. Sie hat verstanden, dass es nicht nur um den Körper geht, sondern auch um den Kopf. Heute spiele ich wieder in der ersten Liga.",
      author: "David Klein",
      role: "Profifußballspieler",
      location: "Köln",
      improvement: "Comeback nach Verletzung",
      image: "https://images.unsplash.com/photo-1544979590-37e9b47eb0e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      timeframe: "8 Monate",
      sport: "Sport",
      featured: true
    },
    {
      content: "Ich war völlig am Ende. Studium, Schwimmtraining, Nebenjob – irgendwann ging einfach nichts mehr. Anna hat mir gezeigt, wie ich durch die richtige Ernährung meine Energie zurückgewinne und meine Träume nicht aufgeben muss. Letzten Monat habe ich mich für die Deutschen Meisterschaften qualifiziert!",
      author: "Nina Richter",
      role: "Studentin & Schwimmerin",
      location: "Dresden",
      improvement: "Qualifikation Deutsche Meisterschaften",
      image: "https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      timeframe: "3 Monate",
      sport: "Sport",
      featured: false
    }
  ]

  const featuredTestimonials = testimonials.filter(t => t.featured)
  const regularTestimonials = testimonials.filter(t => !t.featured)

  return (
  <div className="py-20 section-bg-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-primary-100 text-primary-800 shadow-sm mb-6 animate-fade-in-down">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            Echte Menschen. Echte Ergebnisse. Echte Emotionen.
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Erfolgsgeschichten, die berühren
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <span className="text-neutral-800 font-semibold">Jede Geschichte ist einzigartig.</span> Aber eines haben alle gemeinsam: 
            Der Mut, etwas zu verändern und die Entscheidung, den ersten Schritt zu gehen.
          </p>
        </div>

        {/* Featured Success Stories */}
  <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Transformation, die Leben verändern</h3>
          <div className="grid gap-12 lg:gap-16">
            {featuredTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
    className={`p-2 lg:p-4 transition-all duration-500 animate-fade-in-up ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } lg:flex lg:items-center lg:space-x-12`}
                style={{animationDelay: `${0.2 * index}s`}}
              >
                {/* Image Side */}
                <div className="lg:w-1/3 mb-8 lg:mb-0">
                  <div className="relative">
                    <img
          className="w-32 h-32 lg:w-48 lg:h-48 rounded-full object-cover mx-auto"
                      src={testimonial.image}
                      alt={testimonial.author}
                    />
        {/* Removed decorative badge */}
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-2/3">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900">{testimonial.author}</h4>
                        <p className="text-neutral-700 font-medium">{testimonial.role}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                    {/* Removed featured badge chip */}
                  </div>

                  <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-neutral-700 font-medium">Erfolg</div>
                      <div className="text-lg font-bold text-neutral-900">{testimonial.improvement}</div>
                    </div>
                    <div>
                      <div className="text-neutral-700 font-medium">Zeitraum</div>
                      <div className="text-lg font-bold text-neutral-900">{testimonial.timeframe}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Testimonials Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Weitere Erfolgsgeschichten</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="group p-2"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    className="w-16 h-16 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-neutral-700 font-medium text-sm">{testimonial.role}</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span>{testimonial.sport}</span>
                      <span>•</span>
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>

                <blockquote className="text-gray-600 mb-4 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                <div className="pt-4">
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Erfolg:</span>
                      <div className="text-neutral-800 font-medium">{testimonial.improvement}</div>
                    </div>
                    <div className="text-right">
                      <span className="font-medium text-gray-900">Dauer:</span>
                      <div className="text-accent-600 font-medium">{testimonial.timeframe}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof Stats */}
  <div className="p-0 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Zahlen, die sprechen</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-neutral-900 mb-2">98%</div>
              <div className="text-sm text-gray-600 font-medium">Kundenzufriedenheit</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-neutral-900 mb-2" style={{animationDelay: '0.2s'}}>200+</div>
              <div className="text-sm text-gray-600 font-medium">Erfolgreiche Betreuungen</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-neutral-900 mb-2" style={{animationDelay: '0.4s'}}>25+</div>
              <div className="text-sm text-gray-600 font-medium">Verschiedene Sportarten</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-neutral-900 mb-2" style={{animationDelay: '0.6s'}}>12+</div>
              <div className="text-sm text-gray-600 font-medium">Jahre Expertise</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="p-12">
            <h3 className="text-3xl font-bold mb-4">Ihre Erfolgsgeschichte beginnt jetzt</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Werden Sie Teil unserer Community erfolgreicher Athleten. Lassen Sie uns gemeinsam Ihre sportlichen Träume verwirklichen.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center px-8 py-4 font-bold rounded-xl transition-colors duration-300 text-lg underline"
            >
              <span>Meine Transformation starten</span>
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 text-sm text-gray-500 px-6 py-3">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>Alle Testimonials basieren auf individuellen Erfahrungen</span>
            <span>•</span>
            <span>Ergebnisse können variieren</span>
            <span>•</span>
            <span>Namen teilweise geändert</span>
          </div>
        </div>
      </div>
    </div>
  )
}
