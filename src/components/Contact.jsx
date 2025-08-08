export default function Contact() {
  return (
    <div id="contact" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Kontakt & Erstberatung
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre individuellen Ernährungsziele besprechen. 
            Kontaktieren Sie mich für ein unverbindliches Erstgespräch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Praxisinformationen
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Adresse</h4>
                <p className="text-gray-600">
                  Maximilianstraße 35<br />
                  80539 München<br />
                  Deutschland
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Kontakt</h4>
                <p className="text-gray-600">
                  Telefon: +49 (0) 89 123 456 78<br />
                  E-Mail: praxis@anna-mueller-ernaehrung.de
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Sprechzeiten</h4>
                <div className="text-gray-600">
                  <p>Montag - Donnerstag: 8:00 - 18:00 Uhr</p>
                  <p>Freitag: 8:00 - 14:00 Uhr</p>
                  <p>Termine nach Vereinbarung</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Kostenerstattung</h4>
                <p className="text-gray-600">
                  Als zertifizierte Ernährungsberaterin (VDD/DGE) werden meine Leistungen 
                  von vielen Krankenkassen bezuschusst. Gerne informiere ich Sie über 
                  die Möglichkeiten der Kostenerstattung.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Anfrage senden
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Interesse an
                  </label>
                  <select
                    name="service"
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  >
                    <option value="">Bitte auswählen</option>
                    <option value="individual">Individuelle Ernährungsberatung</option>
                    <option value="sports">Sporternährung</option>
                    <option value="weight">Gewichtsmanagement</option>
                    <option value="allergies">Allergien & Intoleranzen</option>
                    <option value="corporate">Betriebliche Gesundheitsförderung</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Ihre Nachricht
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    placeholder="Beschreiben Sie kurz Ihre Ziele und Fragen..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 h-4 w-4 text-gray-600 focus:ring-gray-400 border-gray-300 rounded"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                    Ich habe die <a href="/datenschutz" className="text-gray-900 underline">Datenschutzerklärung</a> gelesen 
                    und stimme der Verarbeitung meiner Daten zu. *
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
                >
                  Anfrage senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}