# Anki — Contexte IA pour création de cards

> **MAJ** : 2026-02-25 | **Total** : 100 cards | **Decks** : 6 | **Modèles** : 3
>
> Ce fichier sert de **mémoire** pour l'IA lors de la création/modification de cartes Anki.
> Consulter AVANT de créer de nouvelles cards pour garantir cohérence et éviter les doublons.

---

## 1. Modèles (Note Types)

### Dev - Code Q/R _(principal — 76 cards)_

| Champ          | Rôle                                     |
| -------------- | ---------------------------------------- |
| `Question`     | Question avec HTML (bold, code, pre)     |
| `Reponse`      | Réponse structurée avec exemples de code |
| `Tags_Concept` | Mots-clés du concept (affiché en bas)    |
| `Difficulte`   | ⭐ / ⭐⭐ / ⭐⭐⭐                       |

**Template** : 1 carte (Question → Réponse)

### Dev - Cloze _(texte à trous — 15 cards)_

| Champ   | Rôle                                          |
| ------- | --------------------------------------------- |
| `Texte` | Texte avec `{{c1::réponse}}` (syntaxe cloze)  |
| `Extra` | Info complémentaire affichée après la réponse |

**Template** : Auto-généré par Anki (1 carte par `{{cN::...}}`)
**Usage** : Mémoriser la **syntaxe exacte**, les mots-clés, l'ordre d'exécution.
**Syntaxe** : `{{c1::mot}}`, `{{c2::autre}}` pour plusieurs trous indépendants.

### Dev - Reversible _(bidirectionnelle — 9 cards)_

| Champ   | Rôle               |
| ------- | ------------------ |
| `Recto` | Concept / question |
| `Verso` | Code / explication |

**Templates** : 2 cartes par note :

1. **Normal** : Recto → Verso (concept → code)
2. **Inversée** : Verso → Recto (code → concept)

**Usage** : Concepts où le lien **bidirectionnel** est important (voir du code et nommer le concept, ou l'inverse).

### CSS commun (thème Dracula)

```css
/* Partagé par les 3 modèles */
.card {
  font-family: "Segoe UI", system-ui, sans-serif;
  font-size: 16px;
  text-align: left;
  color: #e0e0e0;
  background-color: #1e1e2e;
  padding: 20px;
  line-height: 1.6;
}
pre {
  background: #282a36;
  border-radius: 8px;
  padding: 14px;
  overflow-x: auto;
  font-size: 14px;
  border: 1px solid #44475a;
}
code {
  font-family: "Fira Code", "Cascadia Code", "Consolas", monospace;
  font-size: 14px;
  color: #f8f8f2;
}
b,
strong {
  color: #bd93f9;
} /* violet */
em {
  color: #8be9fd;
} /* cyan */

/* Spécifique Dev - Code Q/R */
.kw {
  color: #ff79c6;
} /* rose — mots-clés */
.str {
  color: #f1fa8c;
} /* jaune — strings */
.fn {
  color: #50fa7b;
} /* vert — fonctions */
.cm {
  color: #6272a4;
} /* gris — commentaires */

/* Spécifique Dev - Cloze */
.cloze {
  font-weight: bold;
  color: #bd93f9;
}
.extra {
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid #44475a;
  font-size: 14px;
  color: #888;
}
```

---

## 2. Structure des Decks

| Deck                      | Cards   | Modèles utilisés                     |
| ------------------------- | ------- | ------------------------------------ |
| `Dev::01-JavaScript-Core` | 51      | Q/R (31) + Cloze (15) + Rev (5)      |
| `Dev::02-React`           | 28      | Q/R (17) + Corrections (7) + Rev (4) |
| `Dev::03-CSS-HTML`        | 8       | Q/R (8)                              |
| `Dev::04-Tooling-Git`     | 6       | Q/R (6)                              |
| `Dev::05-Backend-API`     | 0       | _(réservé Phase 11+)_                |
| `Dev::06-Entretien`       | 7       | Q/R (7)                              |
| **Total**                 | **100** |                                      |

---

## 3. Inventaire des concepts couverts

### Dev::01-JavaScript-Core (51 cards)

#### Q/R (31)

- **Types** : 7 primitifs, typeof gotchas (null, NaN, []), primitif vs objet (valeur vs référence)
- **Scope/Hoisting** : var vs let vs const, TDZ, scope bloc vs fonction
- **Closures** : Définition + exemple counter, piège for/var/setTimeout, scopes indépendants
- **this** : 4 règles de binding (new > explicit > implicit > default), arrow fn + this lexical
- **Coercion** : == vs ===, cas piégeux (""==false, 0==[], NaN==NaN), opérateur + concaténation
- **Prototype** : Prototype chain, Object.getPrototypeOf
- **Spread/Rest** : Différence contextuelle, shallow copy
- **Event Loop** : Call stack → microtask → macrotask, exercice d'ordre d'exécution
- **Promises** : 3 états, async/await sugar syntax, Promise.all/allSettled/race/any
- **Async/Await** : Relation avec Promises, piège await dans async, exercice ordre exécution
- **Array methods** : map vs filter, chaînage filter→map→join
- **ES Modules** : Named vs default export, re-export, ESM vs CommonJS
- **Fetch** : Pattern avec error handling (res.ok), piège fetch ne rejette pas sur 404
- **Map/Set** : Quand utiliser vs objet/array, O(1) .has()
- **Destructuring** : Array/Object, renommage, valeurs par défaut, nested, paramètres
- **localStorage** : getItem, setItem, JSON.stringify/parse, 5MB, synchrone

#### Cloze (15)

- useEffect deps `[]` au montage
- Référence vs valeur (objets vs primitifs)
- Spread operator pour nouveau tableau
- setState objet immutable `{...prev, key: val}`
- async/await retourne Promise
- 3 états d'une Promise
- Event Loop ordre (sync → micro → macro)
- Scope let/const (bloc) vs var (fonction)
- Keys React pour diffing
- useMemo (résultat) vs useCallback (fonction)
- Rules of Hooks (top level + composant/custom hook)
- Array.isArray vs typeof []
- box-sizing border-box
- localStorage stocke strings → JSON
- React.memo empêche re-render enfants

#### Reversible (5)

- Closure (concept ↔ code counter)
- Spread vs Rest (syntaxe ↔ usage)
- Destructuring (concept ↔ exemples)
- map/filter/find (nom ↔ comportement)
- ES Modules import/export (syntaxe ↔ patterns)

---

### Dev::02-React (28 cards)

#### Q/R (24)

- **Fondamentaux** : Virtual DOM, diffing, reconciliation
- **Props/State** : Différence, data flow descendant, callbacks remontants
- **useEffect** : Cycle de vie (setup/cleanup/deps), tableau de dépendances
- **Immutabilité** : Pourquoi (Object.is), spread pour nouvel objet/tableau
- **useReducer** : Quand vs useState, state complexe, fonction pure
- **useCallback** : Mémoisation fonction, utile avec React.memo
- **Context API** : createContext/Provider/useContext, problème re-render global
- **useMemo** : Mémoisation résultat, vs useCallback, équivalence
- **Keys** : Pourquoi pas l'index, generateId, reconciliation
- **React.memo** : HOC, shallow comparison, fonctions en props
- **Custom Hooks** : useLocalStorage pattern, règles des hooks, préfixe "use"
- **Forms** : Controlled vs uncontrolled, React Hook Form
- **Lifting State Up** : Pattern parent commun, quand préférer Context
- **Composition** : children, slots, vs héritage
- **Re-renders** : Déclencheurs (setState, parent, Context), optimisations
- **Data fetching** : Pattern useEffect + cleanup, race conditions, TanStack Query
- **setState batching** : Piège count+1 ×3, updater function `prev =>`
- **Rendu conditionnel** : &&, ternaire, early return, piège `0 &&`
- **Fragments** : `<>...</>`, React.Fragment avec key
- **Events** : camelCase, preventDefault, e.target.value, Synthetic Events
- **Update objet state** : Spread `{...prev, name: 'Bob'}`, pas de mutation
- **Reducer pattern** : action.type, switch, dispatch, payload
- **Fonctions pures** : Même entrée→même sortie, pas de side effects, render pur
- **StrictMode** : Double-render dev, détecte impuretés, pas en prod

#### Reversible (4)

- useReducer pattern complet (code ↔ concept)
- Context API (syntaxe ↔ concept)
- Custom Hook (quand/comment ↔ code useToggle)
- Lifting State Up (pattern ↔ code parent/enfants)

---

### Dev::03-CSS-HTML (8 cards)

- Flexbox vs Grid (1D vs 2D, quand utiliser quoi)
- Box model (content-box vs border-box)
- Spécificité CSS (calcul A,B,C, !important)
- CSS Custom Properties (variables, vs Sass, dynamiques)
- Responsive design (media queries, clamp, container queries, mobile-first)
- Position (relative, absolute, fixed, sticky)
- HTML sémantique (header, nav, main, article, section, aside)
- Tailwind CSS (utility-first, avantages/inconvénients)

---

### Dev::04-Tooling-Git (6 cards)

- Vite (ESM natifs, HMR, Rollup en prod, vs Webpack)
- npm (commandes, dependencies vs devDependencies, package-lock)
- ESLint (analyse statique, flat config, vs Prettier)
- Git workflow quotidien (status, add, commit, push, pull, log)
- Git branches (branch, checkout -b, switch, merge, conventions)
- Git annulation (stash/pop, reset --soft, revert, diff reset vs revert)

---

### Dev::05-Backend-API (0 cards)

> Deck réservé pour Phase 11+ (Hono, HTTP, REST, CORS, etc.)

---

### Dev::06-Entretien (7 cards)

- SPA vs MPA (+ SSR/SSG hybride)
- Cookie vs localStorage vs sessionStorage (tableau comparatif)
- Piège référence/copie objet (spread shallow copy, structuredClone)
- Piège setTimeout + closure + let (ordre d'exécution)
- Promise.allSettled (exercice output)
- Process de debugging (méthode systématique, DevTools)
- Méthode STAR (structurer réponse entretien)

---

## 4. Tags utilisés (84)

### Par catégorie

**JS Core** : `js-core`, `types`, `typeof`, `scope`, `hoisting`, `closure`, `this`, `coercition`, `prototype`, `spread`, `rest`, `destructuring`, `ES6`, `ES-modules`, `variables`, `array-methods`, `Map`, `Set`, `fondamentaux`

**Async** : `async`, `await`, `promise`, `event-loop`, `fetch`

**React** : `react`, `state`, `useState`, `useEffect`, `useReducer`, `useCallback`, `useMemo`, `memo`, `context`, `keys`, `rendering`, `custom-hooks`, `forms`, `lifting-state`, `composition`, `patterns`

**CSS/HTML** : `css`, `css-html`, `html`, `layout`, `box-model`, `specificity`, `responsive`, `position`, `semantique`, `tailwind`, `variables`

**Tooling** : `tooling`, `vite`, `npm`, `eslint`, `git`, `workflow`

**Entretien** : `entretien`, `soft-skills`, `output-question`, `stockage`, `architecture`

**Meta** : `fondamentaux`, `gotcha`, `cloze`, `reversible`, `performance`

**Non utilisés (futures phases)** : `a11y`, `auth`, `backend`, `cicd`, `database`, `docker`, `env`, `error-boundary`, `lazy`, `middleware`, `nodejs`, `router`, `securite`, `SQL`, `testing`, `typescript`, `zustand`, `useId`, `useRef`

---

## 5. Règles de création

### Principe de base

- **1 concept = 1 card** (principe d'information minimale)
- **Pas de card multi-concept** (splitter en plusieurs)
- Réponse **max ~15 lignes** visibles sans scroll

### Diversité obligatoire (objectif par concept important)

Quand un concept est important, créer **2-3 formes** :

| Forme      | Modèle           | Quand l'utiliser                                 |
| ---------- | ---------------- | ------------------------------------------------ |
| Q/R        | Dev - Code Q/R   | Explication complète, "qu'est-ce que", "comment" |
| Cloze      | Dev - Cloze      | **Syntaxe exacte**, mots-clés, ordre, patterns   |
| Reversible | Dev - Reversible | **Code ↔ concept** bidirectionnel                |
| Output     | Dev - Code Q/R   | "Que log ce code ?" (tag: `output-question`)     |

**Ratio cible** : ~60% Q/R, ~20% Cloze, ~10% Reversible, ~10% Output

### Format HTML des cards

```html
<!-- Titres/concepts en bold violet -->
<b>Concept important</b>

<!-- Code inline -->
<code>useState</code>

<!-- Blocs de code -->
<pre><code>function example() {
  return 'hello';
}</code></pre>

<!-- Listes -->
• Item 1<br />• Item 2

<!-- Séparateur -->
<br />

<!-- Tableaux (entretien) -->
<table>
  <tr>
    <th>Header</th>
  </tr>
  <tr>
    <td>Cell</td>
  </tr>
</table>
```

### Conventions

- **Tags** : `lowercase`, tirets pour multi-mots (`array-methods`, `custom-hooks`)
- **Difficulté** : ⭐ (définition/basique) | ⭐⭐ (comprendre/appliquer) | ⭐⭐⭐ (pièges/avancé)
- **Références au projet** : Mentionner ChefPlanning quand pertinent ("Comme dans ton `useEmployees`")
- **Pièges** : Toujours inclure les gotchas courants (⚠️)
- **Deck placement** : Le concept détermine le deck, pas le contexte d'utilisation
  - `localStorage` → JS-Core (API navigateur), pas React
  - `useReducer` → React (hook React), pas JS-Core

### Avant de créer de nouvelles cards

1. **Vérifier les doublons** : chercher par contenu (`deck:Dev "mot-clé"`)
2. **Vérifier le niveau** : la card correspond-elle à la phase actuelle ? (voir copilot-instructions.md)
3. **Diversifier** : ne pas créer que des Q/R, ajouter des Cloze/Reversible
4. **Vérifier le deck** : placer dans le bon deck selon le concept principal

---

## 6. MCP Anki — Aide-mémoire API

### Créer des cards

```
// Une seule card
mcp_anki-mcp_addNote(deckName, modelName, fields: {}, tags: [])

// Batch (même deck + même modèle)
mcp_anki-mcp_addNotes(deckName, modelName, notes: [{fields, tags}])
```

### Chercher / Vérifier

```
// Chercher par deck
mcp_anki-mcp_findNotes(query: "deck:Dev::01-JavaScript-Core")

// Chercher par contenu
mcp_anki-mcp_findNotes(query: 'deck:Dev "mot-clé"')

// Chercher par tag
mcp_anki-mcp_findNotes(query: "deck:Dev tag:closure")

// Chercher par modèle
mcp_anki-mcp_findNotes(query: 'deck:Dev note:"Dev - Cloze"')

// Détails des notes
mcp_anki-mcp_notesInfo(notes: [id1, id2])
```

### Modifier / Supprimer

```
// Modifier le contenu
mcp_anki-mcp_updateNoteFields(noteId, fields: {})

// Supprimer (ATTENTION: irréversible)
mcp_anki-mcp_deleteNotes(noteIds: [], confirmDeletion: true)
```

### Modèles

```
// Voir les champs
mcp_anki-mcp_modelFieldNames(modelName)

// Voir le CSS
mcp_anki-mcp_modelStyling(modelName)

// Créer un nouveau modèle
mcp_anki-mcp_createModel(modelName, inOrderFields, css, isCloze, cardTemplates)
```

---

## 7. Progression projet

> Synchronisé avec `copilot-instructions.md`

| Phase | Status  | Cards attendues                                          |
| ----- | ------- | -------------------------------------------------------- |
| 0-9   | ✅ Done | JS, React, CSS, Tooling, Entretien — **100 cards**       |
| 10A   | 🔜 Next | TypeScript, Zod, React Hook Form                         |
| 10B   | À venir | Vitest, React Router, Git avancé, SQL théorique          |
| 11    | À venir | Backend (Hono, HTTP, REST, CORS) → deck `05-Backend-API` |
| 12    | À venir | Database (PostgreSQL, Drizzle, Docker)                   |
| 13+   | À venir | Auth, Deploy, Testing, IA...                             |

### Quand ajouter des cards ?

- **À chaque fin de phase** : créer les cards pour les nouveaux concepts appris
- **Nouveaux decks** : créer si une catégorie devient assez grande (ex: `Dev::07-TypeScript`)
- **Pas de cards avancées** : ne pas créer de cards pour des phases non commencées

---

_Dernière vérification complète : 2026-02-25 (audit + corrections P1-P4)_
