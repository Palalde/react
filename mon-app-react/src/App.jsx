// ============================================
// 🎓 COURS REACT - Leçon 1 : Les bases
// ============================================

// 1️⃣ IMPORTS
// En React, on importe les fonctionnalités dont on a besoin
import { useState } from 'react'

// ============================================
// 2️⃣ COMPOSANT REACT
// Un composant est une FONCTION qui retourne du JSX
// Convention : nom en PascalCase (App, MonComposant)
// ============================================

function App() {
  // 3️⃣ ÉTAT (STATE) avec useState
  // useState retourne un tableau : [valeur, fonctionPourModifier]
  // On utilise la déstructuration pour récupérer les deux
  const [compteur, setCompteur] = useState(0)

  // 4️⃣ GESTIONNAIRE D'ÉVÉNEMENTS
  // Fonction appelée quand on clique sur le bouton
  const incrementer = () => {
    setCompteur(compteur + 1)
  }

  const decrementer = () => {
    setCompteur(compteur - 1)
  }

  const reinitialiser = () => {
    setCompteur(0)
  }

  // 5️⃣ RENDU JSX
  // Le JSX ressemble à du HTML mais c'est du JavaScript !
  // Différences clés :
  // - class → className
  // - onclick → onClick (camelCase)
  // - Les expressions JS sont entre { }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
        {/* 📝 Les commentaires en JSX s'écrivent comme ça */}
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          🎓 Mon Premier Composant React
        </h1>
        
        <p className="text-gray-600 text-center mb-8">
          Apprends React étape par étape
        </p>

        {/* Affichage dynamique avec les accolades */}
        <div className="text-center mb-8">
          <span className="text-6xl font-bold text-blue-600">
            {compteur}
          </span>
          <p className="text-gray-500 mt-2">
            {compteur === 0 && "Clique sur + pour commencer !"}
            {compteur > 0 && compteur < 10 && "Continue comme ça ! 👍"}
            {compteur >= 10 && "Tu maîtrises ! 🎉"}
            {compteur < 0 && "Tu peux aller dans le négatif aussi ! 🔢"}
          </p>
        </div>

        {/* Boutons avec gestionnaires d'événements */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={decrementer}
            className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            - Moins
          </button>
          
          <button
            onClick={reinitialiser}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors"
          >
            ↺ Reset
          </button>
          
          <button
            onClick={incrementer}
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            + Plus
          </button>
        </div>

        {/* Section informative */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h2 className="font-semibold text-blue-800 mb-2">
            💡 Ce que tu apprends ici :
          </h2>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>✅ Créer un composant React</li>
            <li>✅ Utiliser useState pour gérer l'état</li>
            <li>✅ Gérer les événements (onClick)</li>
            <li>✅ Afficher des données dynamiques avec {'{}'}</li>
            <li>✅ Styliser avec Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// 6️⃣ EXPORT
// On exporte le composant pour pouvoir l'importer ailleurs
export default App
