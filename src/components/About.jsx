export default function About() {
  return (
    <div id="about" className="py-20 bg-gradient-to-br from-white via-primary-25 to-accent-25">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Story Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-primary-100 text-primary-800 shadow-sm mb-6 animate-fade-in-down">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            Meine Mission: Ihre sportlichen Träume verwirklichen
          </div>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6 animate-fade-in-up">
            Dr. Anna Müller
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <span className="text-primary-600 font-semibold">Von der erschöpften Hobbysportlerin zur Expertin für Sporternährung</span> – 
            eine Reise, die mein Leben verändert hat und nun Ihres verändern kann.
          </p>
        </div>

        {/* Personal Story Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center animate-fade-in-up">Meine Reise zur Sporternährungsexpertin</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-400 to-accent-400"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Story 1 */}
              <div className="relative flex items-center animate-slide-in-left">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                  <div className="bg-white p-6 rounded-2xl shadow-warm border border-primary-100">
                    <div className="text-sm text-primary-600 font-semibold mb-2">2012 - Der Wendepunkt</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Vom Energietief zum Durchbruch</h4>
                    <p className="text-gray-600 leading-relaxed">
                      "Mein erster Marathon endete nach 32 km mit einem Kollaps. Ich war erschöpft, frustriert und kurz davor aufzugeben. 
                      Das war der Moment, in dem ich beschloss: <span className="text-primary-700 font-semibold">Es muss einen besseren Weg geben.</span>"
                    </p>
                  </div>
                </div>
              </div>

              {/* Story 2 */}
              <div className="relative flex items-center justify-end animate-slide-in-right">
                <div className="flex-shrink-0 w-8 h-8 bg-accent-500 rounded-full border-4 border-white shadow-lg z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2"></div>
                <div className="mr-12 md:mr-0 md:w-1/2 md:pl-8">
                  <div className="bg-white p-6 rounded-2xl shadow-warm border border-accent-100">
                    <div className="text-sm text-accent-600 font-semibold mb-2">2015 - Die Transformation</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Wissenschaft trifft Praxis</h4>
                    <p className="text-gray-600 leading-relaxed">
                      "Nach meiner Promotion entwickelte ich meine erste individuelle Ernährungsstrategie. 
                      Resultat: <span className="text-accent-700 font-semibold">Persönliche Bestzeit im Marathon um 45 Minuten verbessert.</span> 
                      Da wusste ich: Das muss ich teilen!"
                    </p>
                  </div>
                </div>
              </div>

              {/* Story 3 */}
              <div className="relative flex items-center animate-slide-in-left">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                  <div className="bg-white p-6 rounded-2xl shadow-warm border border-primary-100">
                    <div className="text-sm text-primary-600 font-semibold mb-2">2018 - Die Mission beginnt</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Erste Erfolge mit Athleten</h4>
                    <p className="text-gray-600 leading-relaxed">
                      "Sarah, eine Triathletin, kam zu mir mit ständigen Energielöchern. Nach 3 Monaten individueller Betreuung 
                      qualifizierte sie sich für die Ironman-WM. <span className="text-primary-700 font-semibold">Das war der Beweis: Individuelle Ernährung verändert Leben.</span>"
                    </p>
                  </div>
                </div>
              </div>

              {/* Story 4 */}
              <div className="relative flex items-center justify-end animate-slide-in-right">
                <div className="flex-shrink-0 w-8 h-8 bg-accent-500 rounded-full border-4 border-white shadow-lg z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2"></div>
                <div className="mr-12 md:mr-0 md:w-1/2 md:pl-8">
                  <div className="bg-white p-6 rounded-2xl shadow-warm border border-accent-100">
                    <div className="text-sm text-accent-600 font-semibold mb-2">2025 - Heute</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">200+ verwandelte Leben</h4>
                    <p className="text-gray-600 leading-relaxed">
                      "Heute helfe ich Athleten aller Levels dabei, ihre Träume zu verwirklichen. 
                      <span className="text-accent-700 font-semibold">Jede Erfolgsgeschichte erinnert mich daran, warum ich diesen Weg gewählt habe.</span>"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main About Content with Enhanced Design */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start mb-20">
          <div className="relative">
            <div className="sticky top-8">
              <img
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                src="/Dr.mueller.png"
                alt="Dr. Anna Müller, Ernährungsberaterin"
              />
              
              {/* Floating Achievement Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-4 rounded-2xl shadow-xl animate-bounce-subtle">
                <div className="text-center">
                  <div className="text-2xl font-bold">12+</div>
                  <div className="text-xs font-medium">Jahre</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <div className="prose prose-lg text-gray-600 max-w-none">
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-warm border border-primary-100 mb-8 animate-fade-in-up">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Warum Sporternährung mein Leben ist
                </h3>
                <p className="mb-6 text-lg leading-relaxed">
                  Als promovierte Oecotrophologin und zertifizierte Ernährungsberaterin bringe ich über 
                  12 Jahre Erfahrung in der evidenzbasierten Sporternährung mit. Aber das Wichtigste: 
                  <span className="text-primary-700 font-semibold"> Ich war selbst dort, wo Sie heute stehen.</span>
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                  Mein Ansatz basiert nicht nur auf aktueller Forschung, sondern auf der tiefen Überzeugung, 
                  dass jeder Athlet einzigartig ist. <span className="text-primary-700 font-semibold">
                  Ich glaube an nachhaltige Ernährungsveränderungen durch Verständnis, nicht durch Verbote.</span>
                </p>
                <p className="text-lg leading-relaxed">
                  In meiner Praxis begleite ich Athleten aller Leistungsklassen auf ihrer persönlichen Reise 
                  zu optimaler Performance – wissenschaftlich fundiert, alltagstauglich und mit der Leidenschaft 
                  von jemandem, der weiß, wie es sich anfühlt, seine eigenen Grenzen zu überwinden.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Qualifications */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center animate-fade-in-up">Expertise, die vertraut</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-2xl shadow-warm border border-primary-100 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 animate-scale-in">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Promotion</h4>
              <p className="text-gray-600">Dr. rer. nat. Ernährungswissenschaften, Universität München</p>
            </div>
            <div className="text-center bg-white p-6 rounded-2xl shadow-warm border border-accent-100 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Zertifizierung</h4>
              <p className="text-gray-600">VDD-zertifizierte Ernährungsberaterin/DGE</p>
            </div>
            <div className="text-center bg-white p-6 rounded-2xl shadow-warm border border-primary-100 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Mitgliedschaften</h4>
              <p className="text-gray-600">VDD, DGE, DGSP (Deutsche Gesellschaft für Sportmedizin)</p>
            </div>
            <div className="text-center bg-white p-6 rounded-2xl shadow-warm border border-accent-100 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 animate-scale-in" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Fortbildungen</h4>
              <p className="text-gray-600">Regelmäßige Weiterbildungen in Sporternährung und Metabolismus</p>
            </div>
          </div>
        </div>

        {/* Enhanced Philosophy with Gradient Background */}
        <div className="mb-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-12 text-white relative overflow-hidden animate-fade-in-up">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20 animate-gradient"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6 text-center">Meine Philosophie</h3>
            <blockquote className="text-xl text-center font-medium leading-relaxed">
              "Optimale Sporternährung bedeutet nicht Perfektion, sondern die richtige Balance zwischen 
              wissenschaftlicher Evidenz und praktischer Umsetzbarkeit. 
              <span className="font-bold"> Jeder Athlet ist individuell – und so sollte auch seine Ernährungsstrategie sein."</span>
            </blockquote>
            <div className="text-center mt-8">
              <div className="inline-flex items-center space-x-2">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-semibold">— Dr. Anna Müller</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats with Animations */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-warm border border-primary-100 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 animate-scale-in">
            <div className="text-5xl font-bold text-primary-600 mb-2 animate-bounce-subtle">200+</div>
            <div className="text-gray-600 font-medium">Betreute Athleten</div>
            <div className="text-sm text-gray-500 mt-2">Vom Hobby- bis zum Profisportler</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-warm border border-accent-100 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 animate-scale-in" style={{animationDelay: '0.1s'}}>
            <div className="text-5xl font-bold text-accent-600 mb-2 animate-bounce-subtle" style={{animationDelay: '0.2s'}}>12</div>
            <div className="text-gray-600 font-medium">Jahre Erfahrung</div>
            <div className="text-sm text-gray-500 mt-2">In evidenzbasierter Sporternährung</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-warm border border-primary-100 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 animate-scale-in" style={{animationDelay: '0.2s'}}>
            <div className="text-5xl font-bold text-primary-600 mb-2 animate-bounce-subtle" style={{animationDelay: '0.4s'}}>25+</div>
            <div className="text-gray-600 font-medium">Sportarten</div>
            <div className="text-sm text-gray-500 mt-2">Von Ausdauer bis Kraftsport</div>
          </div>
        </div>

        {/* Enhanced Personal Details with Better Design */}
        <div className="bg-white rounded-3xl border border-primary-100 p-12 shadow-warm animate-fade-in-up">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <svg className="w-8 h-8 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Die Mensch hinter der Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Lieblings-Pre-Workout</h4>
              <p className="text-gray-700">Banane mit Mandelbutter und einer Prise Zimt</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent-50 to-accent-100 border border-accent-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Sportliche Leidenschaft</h4>
              <p className="text-gray-700">Triathlon - selbst aktive Athletin seit 8 Jahren</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Überraschendes Talent</h4>
              <p className="text-gray-700">Kann 37 verschiedene Getreidesorten nur durch Riechen erkennen</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent-50 to-accent-100 border border-accent-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Inspiration destination</h4>
              <p className="text-gray-700">Japan - für die Balance von Tradition und Präzision</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Morgenritual</h4>
              <p className="text-gray-700">5:30 Uhr Lauf, grüner Tee und 10 Min. Meditation</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent-50 to-accent-100 border border-accent-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Guilty Pleasure</h4>
              <p className="text-gray-700">Dunkle Schokolade (85%) - täglich 2 Stücke um 15:30</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Bereit für Ihre Transformation?</h3>
            <p className="text-lg mb-6 opacity-90">Lassen Sie uns gemeinsam Ihre sportlichen Ziele erreichen</p>
            <a 
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300 transform shadow-lg"
            >
              <span>Kostenloses Erstgespräch vereinbaren</span>
              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
