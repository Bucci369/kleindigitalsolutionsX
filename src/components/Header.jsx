import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Leistungen', href: '#services' },
    { name: 'Über mich', href: '#about' },
    { name: 'Ernährungstherapie', href: '#ernaehrungstherapie' },
    { name: 'Rezepte', href: '#recipes' },
    { name: 'Blog', href: '#blog' },
    { name: 'Kontakt', href: '#contact' }
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="group flex items-center space-x-3">
              <div className="w-12 h-12 bg-white border border-neutral-300 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 transform group-hover:scale-105">
                <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="site-brand-name text-xl font-bold text-neutral-900">
                  Dr. Anna Müller
                </span>
                <span className="text-[11px] text-neutral-600 font-medium tracking-wide mt-0.5">Sporternährung</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation with enhanced styling */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1 ml-auto">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-neutral-900 transition-all duration-300 rounded-xl hover:bg-neutral-100"
              >
                <span className="whitespace-nowrap">{item.name}</span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-8 transition-all duration-300"></div>
              </a>
            ))}
            
            {/* CTA Button */}
            <div className="ml-6">
              <a
                href="#contact"
                className="group inline-flex items-center px-6 py-3 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 hover:scale-105 hover:shadow-glow transition-all duration-300 transform shadow-lg"
              >
                <span>Beratung</span>
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="lg:hidden ml-auto">
            <button
              type="button"
              className="inline-flex items-center justify-center p-3 rounded-xl text-gray-600 hover:text-neutral-900 hover:bg-neutral-100 transition-all duration-300 transform hover:scale-105"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Menü öffnen</span>
              {!isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="py-4 space-y-2 border-t border-primary-100">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center justify-between px-4 py-3 text-base font-medium text-gray-600 hover:text-neutral-900 hover:bg-neutral-100 transition-all duration-300 rounded-xl transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <span>{item.name}</span>
                <svg className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
            
            {/* Mobile CTA */}
            <div className="px-4 pt-4">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-6 py-4 border border-transparent text-base font-semibold rounded-xl text-white bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 hover:scale-105 hover:shadow-glow transition-all duration-300 transform shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Kostenlose Beratung sichern</span>
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
