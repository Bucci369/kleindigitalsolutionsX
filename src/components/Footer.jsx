export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/20 to-accent-500/20"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent-400 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Dr. Anna Müller
                </h3>
                <p className="text-gray-400 text-sm">Sporternährungsexpertin</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Zertifizierte Ernährungsberaterin mit Spezialisierung auf Sporternährung. 
              <span className="text-primary-400 font-medium"> Wissenschaftlich fundiert. Individuell angepasst. Messbar erfolgreich.</span>
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>anna.mueller@sporternaehrung.de</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+49 (0) 89 123 456 78</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>München, Deutschland</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <svg className="w-5 h-5 mr-2 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="group flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Leistungen</span>
                </a>
              </li>
              <li>
                <a href="#about" className="group flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Über mich</span>
                </a>
              </li>
              <li>
                <a href="#ernaehrungstherapie" className="group flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Ernährungstherapie</span>
                </a>
              </li>
              <li>
                <a href="#recipes" className="group flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Rezepte</span>
                </a>
              </li>
              <li>
                <a href="#blog" className="group flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Blog</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="group flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-300">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Kontakt</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <svg className="w-5 h-5 mr-2 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              Folgen Sie mir
            </h4>
            
            {/* Social Media */}
            <div className="space-y-4 mb-6">
              <a 
                href="https://instagram.com/dr.anna.mueller.nutrition" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 text-gray-300 hover:text-accent-400 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">@dr.anna.mueller.nutrition</span>
              </a>
              
              <a 
                href="https://youtube.com/@sporternaehrungscience" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">Sporternährung Science</span>
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Rechtliches</h5>
              <ul className="space-y-2">
                <li>
                  <a href="/impressum" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    Impressum
                  </a>
                </li>
                <li>
                  <a href="/datenschutz" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    Datenschutz
                  </a>
                </li>
                <li>
                  <a href="/agb" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    AGB
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Credentials & Certifications */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-white mb-4">Qualifikationen & Mitgliedschaften</h4>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Dr.</span>
                </div>
                <span>Dr. rer. nat. Ernährungswissenschaften</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">VDD</span>
                </div>
                <span>VDD-zertifizierte Ernährungsberaterin</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">DGE</span>
                </div>
                <span>Deutsche Gesellschaft für Ernährung</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Dr. Anna Müller. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Made with</span>
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>in München</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
