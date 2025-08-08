export default function Blog() {
  const blogPosts = [
    {
      title: "Pre-Workout Nutrition: Timing ist alles",
      excerpt: "Wann und was Sie vor dem Training essen sollten, um maximale Leistung zu erzielen. Evidenzbasierte Strategien für verschiedene Trainingstypen.",
      date: "15. März 2024",
      readTime: "6 Min.",
      category: "Trainingsernährung",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Kohlenhydrate im Ausdauersport: Qualität vor Quantität",
      excerpt: "Wie die richtige Auswahl und Dosierung von Kohlenhydraten Ihre Ausdauerleistung beeinflusst. Praktische Tipps für den Trainingsalltag.",
      date: "8. März 2024",
      readTime: "8 Min.",
      category: "Ausdauersport",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Regeneration durch Ernährung: Die ersten 30 Minuten",
      excerpt: "Warum das Post-Workout-Window entscheidend ist und welche Nährstoffe Ihre Regeneration optimal unterstützen.",
      date: "1. März 2024",
      readTime: "5 Min.",
      category: "Regeneration",
      image: "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Sporternährung für Kraftsportler: Mythen und Fakten",
      excerpt: "Was die Wissenschaft wirklich über Protein-Timing, Kreatin und andere Supplements im Kraftsport sagt.",
      date: "22. Februar 2024",
      readTime: "10 Min.",
      category: "Kraftsport",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Hydration im Sport: Mehr als nur Wasser",
      excerpt: "Elektrolyte, Timing und individuelle Bedürfnisse – eine wissenschaftliche Betrachtung der optimalen Flüssigkeitszufuhr im Sport.",
      date: "15. Februar 2024",
      readTime: "7 Min.",
      category: "Hydration",
      image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Meal Prep für Sportler: Effizienz trifft Ernährung",
      excerpt: "Praktische Strategien für die Wochenplanung Ihrer Sporternährung. Rezepte und Tipps für den Alltag.",
      date: "8. Februar 2024",
      readTime: "9 Min.",
      category: "Praktische Tipps",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  const categories = ["Alle", "Trainingsernährung", "Ausdauersport", "Regeneration", "Kraftsport", "Hydration", "Praktische Tipps"]

  return (
    <div id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Blog & Ressourcen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Evidenzbasiertes Wissen zu Sporternährung, Leistungsoptimierung und 
            praktische Tipps für den Trainingsalltag
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-medium rounded-full border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
              <img
                className="w-full h-48 object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button className="text-sm font-medium text-gray-900 hover:text-gray-600">
                    Artikel lesen →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-6 py-3 border border-gray-300 rounded-md text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
            Alle Artikel anzeigen
          </button>
        </div>

        <div className="mt-20 bg-gray-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Newsletter für Sporternährung
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Erhalten Sie wöchentlich wissenschaftlich fundierte Tipps, neue Rezepte 
              und Insights zur Sporternährung direkt in Ihr Postfach.
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium">
                Anmelden
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Kein Spam. Abmeldung jederzeit möglich.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}