export default function Credentials() {
  return (
    <div className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Qualifikationen & Mitgliedschaften
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Zertifizierte Expertise und kontinuierliche Weiterbildung für höchste Standards in der Sporternährung
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-3 mx-auto p-3">
              {/* VDD SVG Icon - Placeholder for real logo */}
              <svg className="w-12 h-12 text-gray-700" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="25" r="15" />
                <path d="M25 45 Q50 35 75 45 L75 75 Q50 85 25 75 Z" />
                <text x="50" y="90" textAnchor="middle" fontSize="12" fontWeight="bold">VDD</text>
              </svg>
            </div>
            <p className="text-xs text-gray-600">Verband der<br />Diätassistenten</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-3 mx-auto p-3">
              {/* DGE SVG Icon - Placeholder for real logo */}
              <svg className="w-12 h-12 text-gray-700" viewBox="0 0 100 100" fill="currentColor">
                <rect x="20" y="20" width="60" height="60" rx="10" />
                <circle cx="50" cy="35" r="8" />
                <rect x="40" y="45" width="20" height="4" />
                <rect x="35" y="52" width="30" height="4" />
                <text x="50" y="90" textAnchor="middle" fontSize="12" fontWeight="bold">DGE</text>
              </svg>
            </div>
            <p className="text-xs text-gray-600">Deutsche Gesellschaft<br />für Ernährung</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-3 mx-auto p-3">
              {/* DGSP SVG Icon - Placeholder for real logo */}
              <svg className="w-12 h-12 text-gray-700" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="3" fill="none" />
                <circle cx="50" cy="40" r="8" />
                <path d="M42 50 L50 60 L58 50" strokeWidth="3" stroke="currentColor" fill="none" />
                <text x="50" y="90" textAnchor="middle" fontSize="10" fontWeight="bold">DGSP</text>
              </svg>
            </div>
            <p className="text-xs text-gray-600">Deutsche Gesellschaft<br />für Sportmedizin</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-3 mx-auto p-3">
              {/* VDOE SVG Icon - Placeholder for real logo */}
              <svg className="w-12 h-12 text-gray-700" viewBox="0 0 100 100" fill="currentColor">
                <path d="M30 20 Q50 10 70 20 L70 60 Q50 70 30 60 Z" />
                <circle cx="50" cy="35" r="6" fill="white" />
                <circle cx="40" cy="50" r="4" fill="white" />
                <circle cx="60" cy="50" r="4" fill="white" />
                <text x="50" y="90" textAnchor="middle" fontSize="10" fontWeight="bold">VDOE</text>
              </svg>
            </div>
            <p className="text-xs text-gray-600">Verband der<br />Oecotrophologen</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-3 mx-auto p-3">
              {/* IOC SVG Icon - Placeholder for real logo */}
              <svg className="w-12 h-12 text-gray-700" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="30" r="15" stroke="currentColor" strokeWidth="3" fill="none" />
                <circle cx="35" cy="55" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
                <circle cx="65" cy="55" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
                <text x="50" y="85" textAnchor="middle" fontSize="12" fontWeight="bold">IOC</text>
              </svg>
            </div>
            <p className="text-xs text-gray-600">Diploma Sports<br />Nutrition</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-3 mx-auto p-3">
              {/* TUM SVG Icon - Placeholder for real logo */}
              <svg className="w-12 h-12 text-gray-700" viewBox="0 0 100 100" fill="currentColor">
                <rect x="25" y="35" width="50" height="35" />
                <polygon points="25,35 50,20 75,35" />
                <rect x="40" y="45" width="6" height="15" fill="white" />
                <rect x="54" y="45" width="6" height="15" fill="white" />
                <text x="50" y="90" textAnchor="middle" fontSize="12" fontWeight="bold">TUM</text>
              </svg>
            </div>
            <p className="text-xs text-gray-600">Promotion<br />TU München</p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
            Aktuelle Fortbildungen & Spezialisierungen
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-medium text-gray-900 mb-2">2024</h4>
              <p className="text-sm text-gray-600">Advanced Sports Nutrition Strategies (ISSN)</p>
            </div>
            <div className="text-center">
              <h4 className="font-medium text-gray-900 mb-2">2023</h4>
              <p className="text-sm text-gray-600">Ketogenic Diet in Sports Performance</p>
            </div>
            <div className="text-center">
              <h4 className="font-medium text-gray-900 mb-2">2023</h4>
              <p className="text-sm text-gray-600">Plant-Based Sports Nutrition Certificate</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Alle Zertifizierungen sind aktuell und werden regelmäßig durch Fortbildungen erneuert
          </p>
          <div className="flex justify-center space-x-4 text-xs text-gray-400">
            <span>• Registrierung bei der Deutschen Rentenversicherung</span>
            <span>• Präventionszertifizierung § 20 SGB V</span>
            <span>• Fortbildungspunkte: 45/Jahr</span>
          </div>
        </div>
      </div>
    </div>
  )
}