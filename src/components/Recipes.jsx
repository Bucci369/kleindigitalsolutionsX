import { useState } from 'react'

export default function Recipes() {
  const [selectedCategory, setSelectedCategory] = useState('Alle')
  const [selectedDifficulty, setSelectedDifficulty] = useState('Alle')

  const recipes = [
    {
      id: 1,
      title: "Power-Smoothie für Pre-Workout",
      description: "Optimaler Energy-Boost 30-45 Minuten vor dem Training",
      category: "Pre-Workout",
      difficulty: "Einfach",
      prepTime: "5 Min",
      servings: "1 Portion",
      image: "https://images.unsplash.com/photo-1622207215619-e9cc39c4c704?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      nutrients: {
        calories: "280 kcal",
        protein: "12g",
        carbs: "58g",
        fat: "2g"
      }
    },
    {
      id: 2,
      title: "Quinoa-Bowl mit Lachs",
      description: "Proteinreiche Recovery-Mahlzeit nach intensivem Training",
      category: "Post-Workout",
      difficulty: "Mittel",
      prepTime: "25 Min",
      servings: "1 Portion",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      nutrients: {
        calories: "520 kcal",
        protein: "35g",
        carbs: "45g",
        fat: "22g"
      }
    },
    {
      id: 3,
      title: "Energy Balls mit Datteln",
      description: "Natürliche Energiespender für längere Ausdauereinheiten",
      category: "Snacks",
      difficulty: "Einfach",
      prepTime: "15 Min",
      servings: "12 Stück",
      image: "https://images.unsplash.com/photo-1549909670-7f2e5e4c4e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      nutrients: {
        calories: "85 kcal",
        protein: "3g",
        carbs: "12g",
        fat: "4g"
      }
    },
    {
      id: 4,
      title: "Overnight Oats Protein-Power",
      description: "Perfektes Frühstück für morgendliche Trainingseinheiten",
      category: "Frühstück",
      difficulty: "Einfach",
      prepTime: "10 Min",
      servings: "1 Portion",
      image: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      nutrients: {
        calories: "420 kcal",
        protein: "24g",
        carbs: "52g",
        fat: "12g"
      }
    },
    {
      id: 5,
      title: "Süßkartoffel-Protein-Pancakes",
      description: "Komplexe Kohlenhydrate für Ausdauersportler",
      category: "Hauptmahlzeit",
      difficulty: "Mittel",
      prepTime: "20 Min",
      servings: "2 Portionen",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      nutrients: {
        calories: "365 kcal",
        protein: "18g",
        carbs: "48g",
        fat: "12g"
      }
    },
    {
      id: 6,
      title: "Isotonisches Sportgetränk",
      description: "Selbstgemachte Alternative zu kommerziellen Sportdrinks",
      category: "Getränke",
      difficulty: "Einfach",
      prepTime: "5 Min",
      servings: "500ml",
      image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      nutrients: {
        calories: "120 kcal",
        protein: "0g",
        carbs: "30g",
        fat: "0g"
      }
    }
  ]

  const categories = ['Alle', 'Pre-Workout', 'Post-Workout', 'Frühstück', 'Hauptmahlzeit', 'Snacks', 'Getränke']
  const difficulties = ['Alle', 'Einfach', 'Mittel', 'Schwer']

  const filteredRecipes = recipes.filter(recipe => {
    const categoryMatch = selectedCategory === 'Alle' || recipe.category === selectedCategory
    const difficultyMatch = selectedDifficulty === 'Alle' || recipe.difficulty === selectedDifficulty
    return categoryMatch && difficultyMatch
  })

  return (
    <div id="recipes" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Rezepte für Sportler
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wissenschaftlich fundierte Rezepte zur Optimierung Ihrer sportlichen Leistung. 
            Alle Nährwerte sind berechnet und auf Ihre Trainingsziele abgestimmt.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategorie
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                      selectedCategory === category
                        ? 'bg-gray-900 text-white border-gray-900'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Schwierigkeit
              </label>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                      selectedDifficulty === difficulty
                        ? 'bg-gray-900 text-white border-gray-900'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                className="w-full h-48 object-cover"
                src={recipe.image}
                alt={recipe.title}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                    {recipe.category}
                  </span>
                  <span className="text-xs text-gray-500">{recipe.difficulty}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {recipe.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {recipe.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{recipe.prepTime}</span>
                  <span>{recipe.servings}</span>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="font-medium text-gray-900">{recipe.nutrients.calories}</span>
                      <span className="text-gray-500 ml-1">Kalorien</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">{recipe.nutrients.protein}</span>
                      <span className="text-gray-500 ml-1">Protein</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">{recipe.nutrients.carbs}</span>
                      <span className="text-gray-500 ml-1">Kohlenhydrate</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">{recipe.nutrients.fat}</span>
                      <span className="text-gray-500 ml-1">Fett</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-4 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors">
                  Rezept anzeigen
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Keine Rezepte für diese Filterkriterien gefunden.</p>
          </div>
        )}
      </div>
    </div>
  )
}