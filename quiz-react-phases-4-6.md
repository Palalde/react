# 🎮 Quiz React - Phases 4 à 6

**Temps estimé** : 25-35 min | **Difficulté** : ⭐⭐⭐

Tu as complété les Phases 4-6 de ChefPlanning. C'est le MVP complet ! Vérifions que tout est bien ancré.

---

## 📊 Récap Express (3 min de lecture)

| Phase | Concept     | Ce que tu as appris                                           |
| ----- | ----------- | ------------------------------------------------------------- |
| 4     | Listes/Keys | `.map()` pour générer du JSX, `key` unique pour chaque élément |
| 5     | Events      | `onClick`, `onChange`, `onSubmit`, CRUD avec immutabilité     |
| 6     | useEffect   | Side effects, custom hooks, sync localStorage                 |

---

## 🧠 PARTIE 1 : QCM Rapide (7 min)

### Q1. Pourquoi utiliser `key` dans `.map()` ?

```jsx
{employees.map((emp) => (
  <EmployeeCard key={???} employee={emp} />
))}
```

- A) Pour le styling CSS
- B) Pour que React identifie chaque élément et optimise les re-renders
- C) Pour l'accessibilité (screen readers)
- D) C'est optionnel, juste une bonne pratique

<details>
<summary>📝 Réponse</summary>

**B) Pour que React identifie chaque élément et optimise les re-renders**

Sans `key`, React ne peut pas savoir quel élément a été ajouté/supprimé/modifié. Il doit tout re-render.

```jsx
// ✅ Correct - ID unique et stable
<EmployeeCard key={emp.id} />

// ⚠️ À éviter - index change si liste change
<EmployeeCard key={index} />

// ❌ Interdit - pas de key
<EmployeeCard />
```

</details>

---

### Q2. Controlled Component

Qu'est-ce qu'un "controlled component" ?

- A) Un composant qui contrôle ses enfants
- B) Un input dont la valeur est contrôlée par le state React
- C) Un composant qui ne peut pas être modifié
- D) Un composant avec des props obligatoires

<details>
<summary>📝 Réponse</summary>

**B) Un input dont la valeur est contrôlée par le state React**

Le state React est la "source de vérité". L'input affiche cette valeur et notifie les changements.

```jsx
// ✅ Controlled component
const [name, setName] = useState("");
<input value={name} onChange={(e) => setName(e.target.value)} />

// ❌ Uncontrolled - React ne contrôle pas la valeur
<input defaultValue="Jean" />
```

</details>

---

### Q3. Immutabilité du state

Pourquoi ce code est-il FAUX ?

```jsx
const deleteEmployee = (id) => {
  employees.splice(employees.findIndex(e => e.id === id), 1);
  setEmployees(employees);
};
```

- A) `splice` n'existe pas
- B) On mute le tableau original au lieu de créer un nouveau
- C) `findIndex` retourne -1 si non trouvé
- D) Il manque le `return`

<details>
<summary>📝 Réponse</summary>

**B) On mute le tableau original au lieu de créer un nouveau**

`splice()` **modifie** le tableau original. React ne détecte pas le changement car la référence est la même !

```jsx
// ❌ FAUX - mutation
employees.splice(...);
setEmployees(employees); // Même référence = pas de re-render !

// ✅ CORRECT - nouveau tableau
setEmployees(employees.filter(e => e.id !== id));
```

**Règle d'or** : Toujours créer un **nouveau** tableau/objet avec `filter()`, `map()`, spread `[...]`.

</details>

---

### Q4. useEffect - Quand s'exécute-t-il ?

```jsx
useEffect(() => {
  console.log("Effect!");
}, [theme]);
```

Quand "Effect!" s'affiche-t-il ?

- A) Une seule fois au montage
- B) À chaque render
- C) Au montage ET quand `theme` change
- D) Uniquement quand `theme` change (pas au montage)

<details>
<summary>📝 Réponse</summary>

**C) Au montage ET quand `theme` change**

Le tableau de dépendances `[theme]` signifie :
- Exécuter au **premier render** (montage)
- Exécuter à chaque fois que **`theme` change**

```jsx
useEffect(() => {...}, []);       // Au montage uniquement
useEffect(() => {...}, [a, b]);   // Montage + quand a OU b change
useEffect(() => {...});           // À CHAQUE render (rare, attention !)
```

</details>

---

### Q5. Custom Hook

Qu'est-ce qui fait qu'une fonction est un "custom hook" ?

- A) Elle doit être dans le dossier `/hooks`
- B) Elle doit commencer par `use` et peut utiliser d'autres hooks
- C) Elle doit retourner un tableau `[value, setValue]`
- D) Elle doit utiliser `useEffect`

<details>
<summary>📝 Réponse</summary>

**B) Elle doit commencer par `use` et peut utiliser d'autres hooks**

Les règles des hooks s'appliquent : pas dans des conditions, pas dans des boucles.

```jsx
// ✅ Custom hook valide
function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(...);
  useEffect(() => {...}, [...]);
  return [value, setValue];
}

// ❌ PAS un hook (ne commence pas par "use")
function getFromStorage(key) {
  return localStorage.getItem(key);
}
```

</details>

---

### Q6. Formulaires - e.preventDefault()

Pourquoi utilise-t-on `e.preventDefault()` dans `onSubmit` ?

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  // ...
};
```

- A) Pour empêcher les erreurs JavaScript
- B) Pour empêcher le rechargement de la page (comportement HTML natif)
- C) Pour empêcher la propagation de l'événement
- D) C'est optionnel en React

<details>
<summary>📝 Réponse</summary>

**B) Pour empêcher le rechargement de la page (comportement HTML natif)**

Par défaut, un `<form>` HTML recharge la page à la soumission. En React (SPA), on veut gérer le submit en JavaScript.

```jsx
// ❌ Sans preventDefault - la page recharge !
const handleSubmit = (e) => {
  saveEmployee(formData);
};

// ✅ Avec preventDefault - React gère tout
const handleSubmit = (e) => {
  e.preventDefault();
  saveEmployee(formData);
};
```

</details>

---

## 🔍 PARTIE 2 : Trouve l'erreur ! (10 min)

### Exercice 2.1 - Le useEffect infini

```jsx
function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('employees');
    if (stored) {
      setEmployees(JSON.parse(stored));
    }
  });

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  });

  return (/* ... */);
}
```

**❓ Ce code cause une boucle infinie. Pourquoi ?**

<details>
<summary>💡 Indice</summary>

Regarde les tableaux de dépendances (ou leur absence)...

</details>

<details>
<summary>📝 Réponse</summary>

**Problème : Pas de tableau de dépendances !**

Sans `[]`, les deux `useEffect` s'exécutent à **chaque render** :

1. Render → useEffect 1 lit localStorage → `setEmployees()` → re-render
2. Re-render → useEffect 2 écrit localStorage → (pas de re-render direct)
3. Re-render → useEffect 1 lit localStorage → `setEmployees()` → re-render
4. ... **BOUCLE INFINIE** !

```jsx
// ✅ CORRECT
useEffect(() => {
  const stored = localStorage.getItem('employees');
  if (stored) setEmployees(JSON.parse(stored));
}, []); // ← Seulement au montage !

useEffect(() => {
  localStorage.setItem('employees', JSON.stringify(employees));
}, [employees]); // ← Seulement quand employees change
```

</details>

---

### Exercice 2.2 - Le CRUD cassé

```jsx
const handleEditEmployee = (updatedEmployee) => {
  const index = employees.findIndex(e => e.id === updatedEmployee.id);
  employees[index] = updatedEmployee;
  setEmployees(employees);
};
```

**❓ L'édition ne fonctionne pas. L'UI ne se met pas à jour. Pourquoi ?**

<details>
<summary>💡 Indice</summary>

C'est le même problème que Q3 du QCM...

</details>

<details>
<summary>📝 Réponse</summary>

**On mute le tableau au lieu de créer un nouveau !**

`employees[index] = ...` modifie le tableau existant. `setEmployees(employees)` passe la **même référence** → React ne voit pas de changement.

```jsx
// ❌ FAUX - mutation
employees[index] = updatedEmployee;
setEmployees(employees);

// ✅ CORRECT - nouveau tableau avec map()
setEmployees(employees.map(emp => 
  emp.id === updatedEmployee.id ? updatedEmployee : emp
));

// ✅ Alternative avec spread
setEmployees([
  ...employees.slice(0, index),
  updatedEmployee,
  ...employees.slice(index + 1)
]);
```

**Pattern à retenir** :
- **Delete** → `filter()`
- **Update** → `map()`
- **Add** → `[...array, newItem]`

</details>

---

### Exercice 2.3 - Le formulaire qui reset pas

```jsx
function EmployeeForm({ employee, onSubmit }) {
  const [name, setName] = useState(employee?.name || '');
  const [color, setColor] = useState(employee?.color || '#3B82F6');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, color });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {/* ... */}
    </form>
  );
}
```

**❓ En mode édition, quand on passe d'un employé à un autre, le formulaire garde les anciennes valeurs. Pourquoi ?**

<details>
<summary>💡 Indice</summary>

Quand est-ce que `useState(initialValue)` utilise `initialValue` ?

</details>

<details>
<summary>📝 Réponse</summary>

**`useState` n'utilise la valeur initiale qu'au PREMIER render !**

Quand `employee` change (autre employé à éditer), le composant re-render mais `useState` ignore la nouvelle valeur initiale.

**Solutions :**

```jsx
// Solution 1 : Utiliser une key pour forcer le remount
<EmployeeForm key={employee?.id} employee={employee} />

// Solution 2 : useEffect pour synchroniser
useEffect(() => {
  setName(employee?.name || '');
  setColor(employee?.color || '#3B82F6');
}, [employee]);

// Solution 3 (recommandé) : State objet unique
const [formData, setFormData] = useState(
  employee || { name: '', color: '#3B82F6' }
);
// + useEffect pour sync si employee change
```

</details>

---

### Exercice 2.4 - Le toggle theme cassé

```jsx
function useTheme() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return { theme, setTheme };
}
```

**❓ Le thème se charge bien au démarrage, mais le bouton toggle ne change pas les couleurs. Pourquoi ?**

<details>
<summary>💡 Indice</summary>

Quand est-ce que le `useEffect` s'exécute ?

</details>

<details>
<summary>📝 Réponse</summary>

**Le tableau de dépendances est `[]` au lieu de `[theme]` !**

Avec `[]`, le useEffect ne s'exécute qu'au montage. Quand `theme` change ensuite, rien ne se passe.

```jsx
// ❌ FAUX - s'exécute seulement au montage
useEffect(() => {...}, []);

// ✅ CORRECT - s'exécute quand theme change
useEffect(() => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [theme]); // ← Dépendance ajoutée !
```

</details>

---

## 🏗️ PARTIE 3 : Mini-défis mentaux (10 min)

### Défi 3.1 - Complète le hook

Sans regarder ton code, complète mentalement :

```jsx
function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const stored = ???
    return stored ? ??? : ???
  });

  useEffect(() => {
    ???
  }, [???]);

  return ???
}
```

<details>
<summary>📝 Réponse</summary>

```jsx
function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
```

**Points clés :**
- **Lazy initialization** : `useState(() => ...)` pour ne lire localStorage qu'une fois
- **JSON.parse/stringify** : localStorage stocke uniquement des strings
- **Dépendances** : `[key, value]` pour synchroniser à chaque changement

</details>

---

### Défi 3.2 - Trace mentale

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("A");
  }, []);

  useEffect(() => {
    console.log("B", count);
  }, [count]);

  console.log("C", count);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

**❓ Que s'affiche-t-il dans la console quand :**

1. Le composant s'affiche pour la première fois ?
2. Je clique sur le bouton ?

<details>
<summary>📝 Réponse</summary>

**Premier render :**
```
C 0      // render synchrone
A        // useEffect [] après render
B 0      // useEffect [count] après render
```

**Après un clic :**
```
C 1      // re-render synchrone
B 1      // useEffect [count] car count a changé
         // (A ne s'exécute PAS car [] = montage uniquement)
```

**Ordre d'exécution :**
1. Render (synchrone) - `console.log("C")`
2. DOM mis à jour
3. useEffect exécutés (dans l'ordre de déclaration)

</details>

---

### Défi 3.3 - Architecture mentale

Dessine l'arbre de composants ET le flux de données :

```
App
 └── ???
```

Questions :
1. Où vit le state `employees` ?
2. Où vit le state `theme` ?
3. Comment `EmployeeCard` accède aux données ?
4. Comment `ThemeToggle` change le thème ?

<details>
<summary>📝 Réponse</summary>

```
App
 ├── Header
 │    └── ThemeToggle  ← useTheme() hook
 └── Container
      ├── EmployeeList ← state employees vit ICI
      │    ├── EmployeeCard (×n)
      │    │    └── Badge (×n)
      │    ├── Modal
      │    │    └── EmployeeForm
      │    └── Button "+ Employé"
      └── PlanningGrid
           └── DayColumn (×7)
```

**Réponses :**

1. **employees** → Dans `EmployeeList` (via `useLocalStorage`)
2. **theme** → Dans le hook `useTheme` (accessible partout via le hook)
3. **EmployeeCard** → Reçoit `employee` via **props** de son parent
4. **ThemeToggle** → Appelle `toggleTheme()` du hook `useTheme` qui :
   - Modifie le state `theme`
   - useEffect ajoute/retire la classe `dark` sur `<html>`

</details>

---

### Défi 3.4 - Refactoring mental

Ce code fonctionne mais n'est pas optimal :

```jsx
function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('employees');
    if (stored) {
      setEmployees(JSON.parse(stored));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('employees', JSON.stringify(employees));
    }
  }, [employees, isLoaded]);

  // ...
}
```

**❓ Comment simplifier avec `useLocalStorage` ?**

<details>
<summary>📝 Réponse</summary>

```jsx
// Avant : 15 lignes, 2 useEffect, 1 flag
function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  // ... useEffect × 2
}

// Après : 1 ligne !
function EmployeeList() {
  const [employees, setEmployees] = useLocalStorage('employees', []);
  // C'est tout ! Le hook gère lecture + écriture
}
```

**Avantages du custom hook :**
- Code plus lisible
- Logique réutilisable (shifts, assignments, theme...)
- Testable isolément
- Séparation des responsabilités

</details>

---

## ✅ Auto-évaluation

Coche ce que tu maîtrises :

- [ ] Je sais utiliser `.map()` avec une `key` unique et stable
- [ ] Je comprends le pattern "controlled component" (value + onChange)
- [ ] Je sais gérer un formulaire avec `onSubmit` et `e.preventDefault()`
- [ ] Je connais les patterns CRUD immutables : `filter()`, `map()`, `[...spread]`
- [ ] Je comprends quand useEffect s'exécute selon ses dépendances
- [ ] Je sais créer un custom hook qui encapsule useState + useEffect
- [ ] Je comprends le flux de données : props down, events up

---

## 🎯 Score

- **7/7** : Tu as maîtrisé le MVP ! Prêt pour la V2 (Phases 7-9) 🚀
- **5-6/7** : Quelques concepts à revoir, mais tu peux continuer
- **< 5/7** : Reprends les exercices des phases concernées

---

## 🏆 Bravo !

Tu as complété le **MVP de ChefPlanning** !

Tu maîtrises maintenant :
- ✅ JSX & Composants
- ✅ Props & State
- ✅ Listes & Keys
- ✅ Events & Formulaires
- ✅ useEffect & Custom Hooks
- ✅ Persistance localStorage

---

## 🔮 Teaser Phase 7-9 (V2)

La V2 va te permettre de créer des **assignations** dans le planning !

Tu apprendras :
- **Lifting State Up** — Centraliser le state dans App
- **Custom Hooks avancés** — `useEmployees`, `useAssignments`
- **Composition** — Formulaires complexes, validation

**Concept clé Phase 7** : Comment faire communiquer `EmployeeList` et `PlanningGrid` qui ont besoin des mêmes données ?

→ **Lifting State** : Remonter le state au parent commun (`App`)

**Prêt pour la V2 ?** 💪
