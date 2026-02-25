# 🎮 Quiz React - Phases 7 à 9

**Temps estimé** : 30-40 min | **Difficulté** : ⭐⭐⭐⭐

Tu as complété les Phases 7-9 de ChefPlanning. C'est la V2 complète ! Vérifions que les concepts avancés sont bien ancrés.

---

## 📊 Récap Express (3 min de lecture)

| Phase | Concept               | Ce que tu as appris                                                     |
| ----- | --------------------- | ----------------------------------------------------------------------- |
| 7     | Lifting State Up      | Centraliser le state dans le parent commun, click-to-assign             |
| 8     | Custom Hooks avancés  | Extraire la logique dans useEmployees, useShifts, useAssignments        |
| 9     | Composition + Context | useReducer, Context API, useMemo/useCallback, élimination prop drilling |

---

## 🧠 PARTIE 1 : QCM Rapide (8 min)

### Q1. Lifting State Up

Quand faut-il "remonter le state" dans un parent ?

- A) Toujours, le state doit vivre dans App
- B) Quand deux composants frères ont besoin des mêmes données
- C) Quand le composant a trop de state
- D) Quand on utilise useEffect

<details>
<summary>📝 Réponse</summary>

**B) Quand deux composants frères ont besoin des mêmes données**

Si `EmployeeList` et `PlanningTable` ont tous les deux besoin de `employees`, on remonte le state dans leur parent commun (`App`), puis on le descend via props.

```
     App ← state employees vit ICI
    /   \
EmployeeList  PlanningTable
(affiche)     (utilise pour les assignations)
```

On ne remonte **pas** systématiquement tout dans App — seulement quand c'est **partagé**.

</details>

---

### Q2. Custom Hooks

Quel est l'avantage principal d'extraire la logique dans `useEmployees()` ?

- A) C'est plus rapide à exécuter
- B) Ça sépare la logique métier de l'affichage (séparation des responsabilités)
- C) C'est obligatoire pour utiliser useState
- D) Ça empêche les re-renders

<details>
<summary>📝 Réponse</summary>

**B) Ça sépare la logique métier de l'affichage (séparation des responsabilités)**

Avant : le composant mélange CRUD + affichage.
Après : le hook gère les données, le composant gère l'UI.

```jsx
// ❌ Avant - tout mélangé dans le composant
function EmployeeList() {
  const [employees, setEmployees] = useLocalStorage('employees', []);
  const addEmployee = (emp) => setEmployees([...employees, emp]);
  const deleteEmployee = (id) => setEmployees(employees.filter(...));
  // + 200 lignes de JSX...
}

// ✅ Après - logique extraite
function useEmployees() {
  // Toute la logique CRUD ici
  return { employees, addEmployee, deleteEmployee, ... };
}

function EmployeeList() {
  const { employees, deleteEmployee } = useEmployees();
  // Juste l'affichage !
}
```

Bonus : le hook est **réutilisable** dans n'importe quel composant.

</details>

---

### Q3. useReducer vs useState

Quand préférer `useReducer` à `useState` ?

- A) Toujours, c'est plus performant
- B) Quand le state est un objet ou a plusieurs actions liées
- C) Quand on utilise useEffect
- D) Quand on a moins de 3 variables de state

<details>
<summary>📝 Réponse</summary>

**B) Quand le state est un objet ou a plusieurs actions liées**

`useReducer` centralise les transitions de state dans un **reducer** — toutes les actions au même endroit.

```jsx
// useState : 5 fonctions éparpillées
const addAssignment = () => setAssignments([...]);
const updateAssignment = () => setAssignments(assignments.map(...));
const deleteAssignment = () => setAssignments(assignments.filter(...));

// useReducer : tout centralisé dans le reducer
function assignmentsReducer(state, action) {
  switch (action.type) {
    case 'ADD': return [...state, action.payload];
    case 'UPDATE': return state.map(...);
    case 'DELETE': return state.filter(...);
  }
}
```

**Règle** : useState pour le state simple (toggle, compteur), useReducer pour le state complexe (CRUD, workflow).

</details>

---

### Q4. Context API

Pourquoi utiliser Context plutôt que passer les props manuellement ?

- A) Context est plus rapide que les props
- B) Pour éviter le "prop drilling" (passer des props à travers 3+ niveaux)
- C) Les props ne fonctionnent pas avec les hooks
- D) Context remplace complètement les props

<details>
<summary>📝 Réponse</summary>

**B) Pour éviter le "prop drilling" (passer des props à travers 3+ niveaux)**

Sans Context :

```
App → employees → PlanningTable → employees → EmployeeRow → employees → PlanningCell
      (3 niveaux de props pour atteindre PlanningCell !)
```

Avec Context :

```
AppProvider (fournit employees)
  └── PlanningCell → useAppContext() → employees directement
```

**Attention** : Context ne remplace PAS les props. Les props restent le bon choix pour les données locales parent→enfant direct.

</details>

---

### Q5. useMemo

Pourquoi faut-il `useMemo` sur la `value` du Context Provider ?

```jsx
<AppContext.Provider value={value}>
```

- A) Pour que le Context soit plus rapide
- B) Pour éviter que tous les consommateurs re-render à chaque render du Provider
- C) C'est obligatoire pour utiliser useContext
- D) Pour stocker la valeur dans localStorage

<details>
<summary>📝 Réponse</summary>

**B) Pour éviter que tous les consommateurs re-render à chaque render du Provider**

Sans useMemo, `value={{...}}` crée un **nouvel objet** à chaque render. Même si le contenu est identique, la **référence** change.

```jsx
// ❌ FAUX - nouvel objet à chaque render
<AppContext.Provider value={{ employees, shifts, addEmployee }}>

// React compare : {} === {} → FALSE → tout re-render !

// ✅ CORRECT - référence stable si deps inchangées
const value = useMemo(() => ({
  employees, shifts, addEmployee, ...
}), [employees, shifts, addEmployee, ...]);

<AppContext.Provider value={value}>
```

**Concept clé** : React compare les références (`===`), pas le contenu profond.

</details>

---

### Q6. useCallback

Pourquoi envelopper `addEmployee` dans `useCallback` ?

```jsx
const addEmployee = useCallback(
  (employee) => {
    setEmployees((prev) => [...prev, { ...employee, id: generateId() }]);
  },
  [setEmployees],
);
```

- A) Pour que la fonction s'exécute plus vite
- B) Pour stabiliser la référence de la fonction entre les renders
- C) Pour empêcher les appels multiples
- D) C'est juste du style de code

<details>
<summary>📝 Réponse</summary>

**B) Pour stabiliser la référence de la fonction entre les renders**

Sans useCallback : `() => {}` crée une **nouvelle fonction** à chaque render.
Avec useCallback : la même référence est réutilisée si les deps n'ont pas changé.

```jsx
// Sans useCallback :
const add = () => {...}  // Nouvelle référence à chaque render
// → useMemo du Context voit une dep qui change → value recalculée → re-render partout

// Avec useCallback :
const add = useCallback(() => {...}, [setEmployees]);
// → Même référence entre les renders → useMemo stable → pas de re-render inutile
```

**La chaîne** : useCallback (fonctions stables) → useMemo (value stable) → pas de re-render inutile des consommateurs.

</details>

---

### Q7. Forme fonctionnelle du setter

Quelle est la différence entre ces deux lignes ?

```jsx
// Ligne A
setEmployees([...employees, newEmployee]);

// Ligne B
setEmployees((prev) => [...prev, newEmployee]);
```

- A) Aucune différence, c'est la même chose
- B) Ligne B est plus lente
- C) Ligne B lit toujours la valeur la plus récente, Ligne A peut être obsolète
- D) Ligne A est interdite en React

<details>
<summary>📝 Réponse</summary>

**C) Ligne B lit toujours la valeur la plus récente, Ligne A peut être obsolète**

Ligne A capture `employees` du render actuel — si React a batché des updates, cette valeur peut être dépassée.

Ligne B reçoit `prev` directement de React — c'est **toujours** la valeur la plus fraîche.

```jsx
// Ligne A : dépend de `employees` du render → doit être dans les deps du useCallback
const add = useCallback(
  (emp) => {
    setEmployees([...employees, emp]); // employees doit être dans les deps !
  },
  [employees, setEmployees],
);

// Ligne B : indépendant de `employees` → deps minimales
const add = useCallback(
  (emp) => {
    setEmployees((prev) => [...prev, emp]); // Pas besoin de employees dans les deps !
  },
  [setEmployees],
);
```

**Bonus** : `prev =>` élimine `employees` des dépendances du useCallback → la fonction change moins souvent → useMemo du Context est plus stable.

</details>

---

## 🔍 PARTIE 2 : Trouve l'erreur ! (12 min)

### Exercice 2.1 - Le Context mal utilisé

```jsx
function WeekNav() {
  const { currentWeek, goNext, goPrev } = AppContext;

  return (
    <div>
      <button onClick={goPrev}>◀</button>
      <span>{currentWeek}</span>
      <button onClick={goNext}>▶</button>
    </div>
  );
}
```

**❓ Pourquoi ce composant plante ?**

<details>
<summary>💡 Indice</summary>

Comment accède-t-on aux valeurs d'un Context dans un composant ?

</details>

<details>
<summary>📝 Réponse</summary>

**On destructure le Context lui-même au lieu d'appeler `useContext()` (ou le custom hook) !**

```jsx
// ❌ FAUX - AppContext est l'objet Context, pas sa valeur
const { currentWeek } = AppContext;

// ✅ CORRECT - useContext lit la valeur fournie par le Provider
const { currentWeek, goNext, goPrev } = useContext(AppContext);

// ✅ ENCORE MIEUX - le custom hook avec error guard
const { currentWeek, goNext, goPrev } = useAppContext();
```

`useAppContext()` est préférable car il inclut une vérification :

```jsx
function useAppContext() {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppProvider");
  return context;
}
```

</details>

---

### Exercice 2.2 - Le reducer cassé

```jsx
function assignmentsReducer(state, action) {
  switch (action.type) {
    case "ADD":
      state.push(action.payload);
      return state;
    case "DELETE":
      return state.filter((a) => a.id !== action.payload);
  }
}
```

**❓ Le ADD ne fonctionne pas (l'UI ne se met pas à jour). Le DELETE fonctionne. Pourquoi ?**

<details>
<summary>💡 Indice</summary>

C'est le même concept que les mutations interdites avec setState...

</details>

<details>
<summary>📝 Réponse</summary>

**Le ADD mute le tableau (`push`) puis retourne la MÊME référence !**

`push()` modifie le tableau existant. `return state` retourne la même référence → React ne voit pas de changement.

`filter()` dans DELETE crée un **nouveau tableau** → React détecte le changement.

```jsx
// ❌ FAUX - mutation
case 'ADD':
  state.push(action.payload);  // Mute le tableau
  return state;                // Même référence !

// ✅ CORRECT - nouveau tableau
case 'ADD':
  return [...state, action.payload];  // Spread = nouveau tableau
```

**Règle** : un reducer ne doit **JAMAIS** muter le `state`. Toujours retourner un **nouvel objet/tableau**.

</details>

---

### Exercice 2.3 - Le useCallback inutile

```jsx
function useWeekNav() {
  const [currentWeek, setCurrentWeek] = useLocalStorage(
    "currentWeek",
    getMondayISO(new Date()),
  );

  const goNext = useCallback(() => {
    setCurrentWeek((prev) => addWeeks(prev, 1));
  }, [setCurrentWeek]);

  const getWeekLabel = useCallback(() => {
    const date = new Date(currentWeek + "T12:00:00");
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }, [currentWeek]);

  return { currentWeek, goNext, getWeekLabel };
}
```

**❓ `goNext` et `getWeekLabel` sont tous les deux wrappés dans `useCallback`. L'un des deux n'en a PAS besoin dans ce contexte. Lequel et pourquoi ?**

<details>
<summary>💡 Indice</summary>

useCallback est utile pour stabiliser les fonctions qui sont dans la **value du Context**. Est-ce que `getWeekLabel` y est ?

</details>

<details>
<summary>📝 Réponse</summary>

**`getWeekLabel` n'a pas besoin de `useCallback` ici.**

`useCallback` sert à stabiliser les fonctions qui sont dans la **value du Context Provider**. Si une fonction n'est pas dans le value, sa référence n'affecte pas les re-renders des consommateurs.

```jsx
// goNext → dans la value du Context → useCallback UTILE
// getWeekLabel → PAS dans la value du Context → useCallback INUTILE

// De plus, getWeekLabel dépend de [currentWeek] qui change souvent
// → la "stabilisation" est illusoire, la fonction est recréée à chaque changement de semaine
```

**Règle** : `useCallback` n'est pas gratuit. Ne l'utiliser que quand la stabilité de la référence **compte** (passage dans un Context value, dans un `useMemo`, ou en prop d'un composant mémoïsé).

</details>

---

### Exercice 2.4 - Le Provider mal placé

```jsx
// main.jsx
import { AppProvider } from "@/context/AppContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <AppProvider />
  </StrictMode>,
);
```

**❓ Tous les composants qui appellent `useAppContext()` plantent avec l'erreur "must be used within AppProvider". Pourquoi ?**

<details>
<summary>💡 Indice</summary>

Où doit être le Provider par rapport aux composants qui consomment le Context ?

</details>

<details>
<summary>📝 Réponse</summary>

**Le Provider doit ENVELOPPER les composants qui utilisent le Context, pas être à côté !**

```jsx
// ❌ FAUX - Provider est un frère de App, pas un parent
<StrictMode>
  <App />           // ← Pas dans le Provider !
  <AppProvider />   // ← Provider vide, sans enfant
</StrictMode>

// ✅ CORRECT - Provider enveloppe App
<StrictMode>
  <AppProvider>
    <App />         // ← App (et tous ses enfants) peut accéder au Context
  </AppProvider>
</StrictMode>
```

Le Provider crée un **périmètre**. Seuls les composants **à l'intérieur** (enfants/descendants) peuvent accéder au Context via `useContext`.

</details>

---

### Exercice 2.5 - Les deps du useCallback

```jsx
function useAssignments(shifts, currentWeek) {
  const [assignments, dispatch] = useLocalReducer(
    "assignments",
    assignmentsReducer,
    [],
  );

  const addAssignment = useCallback(
    (employeeId, day, shiftId) => {
      dispatch({
        type: "ADD",
        payload: {
          id: generateId(),
          employeeId,
          day,
          shiftId,
          weekOf: currentWeek,
        },
      });
    },
    [dispatch],
  );

  return { assignments, addAssignment };
}
```

**❓ Le `addAssignment` utilise `currentWeek` dans son corps, mais `currentWeek` n'est PAS dans les dépendances du `useCallback`. Quel est le problème ?**

<details>
<summary>💡 Indice</summary>

Que se passe-t-il si l'utilisateur change de semaine puis assigne un shift ?

</details>

<details>
<summary>📝 Réponse</summary>

**L'assignment sera créé avec la MAUVAISE semaine !**

`useCallback` "fige" les variables capturées tant que les deps ne changent pas. Si `currentWeek` n'est pas dans les deps, la fonction utilise toujours la valeur de `currentWeek` au moment où le callback a été créé.

```jsx
// ❌ FAUX - currentWeek figé à sa valeur initiale
const addAssignment = useCallback((...) => {
  dispatch({ ..., weekOf: currentWeek }); // Toujours l'ancienne semaine !
}, [dispatch]);

// ✅ CORRECT - currentWeek mis à jour
const addAssignment = useCallback((...) => {
  dispatch({ ..., weekOf: currentWeek });
}, [dispatch, currentWeek]); // ← Ajouté !
```

**Règle** : `dispatch` ne supporte PAS `prev =>`. Toute variable lue dans le corps du callback DOIT être dans les dépendances.

Contrairement à `setEmployees(prev => ...)` où `prev` te donne la valeur fraîche, `dispatch` ne reçoit qu'une action — si cette action contient `currentWeek`, il FAUT que ce soit la valeur à jour.

</details>

---

## 🏗️ PARTIE 3 : Mini-défis mentaux (12 min)

### Défi 3.1 - Complète le reducer

Sans regarder ton code :

```jsx
function assignmentsReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return ???;
    case 'DELETE':
      return ???;
    case 'DELETE_BY_EMPLOYEE':
      return ???;
    default:
      return ???;
  }
}
```

<details>
<summary>📝 Réponse</summary>

```jsx
function assignmentsReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((a) => a.id !== action.payload);
    case "DELETE_BY_EMPLOYEE":
      return state.filter((a) => a.employeeId !== action.payload);
    default:
      return state; // Toujours retourner state par défaut !
  }
}
```

**Points clés :**

- Chaque case retourne un **nouveau tableau** (jamais de mutation)
- Le `default` retourne `state` inchangé (sinon le state deviendrait `undefined`)
- `action.payload` contient le "quoi" — ID à supprimer, objet à ajouter, etc.

</details>

---

### Défi 3.2 - Trace mentale

```jsx
function AppProvider({ children }) {
  const { employees, addEmployee } = useEmployees();
  const [count, setCount] = useState(0);

  console.log("A: Provider render");

  const value = useMemo(() => {
    console.log("B: useMemo recalcule");
    return { employees, addEmployee, count };
  }, [employees, addEmployee, count]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function ChildComponent() {
  const { employees } = useAppContext();
  console.log("C: Child render");
  return <div>{employees.length}</div>;
}
```

**❓ Si on appelle `setCount(1)` dans le Provider, que s'affiche-t-il dans la console ?**

<details>
<summary>📝 Réponse</summary>

```
A: Provider render     // Le Provider re-render (son state a changé)
B: useMemo recalcule   // count a changé → useMemo recalcule la value
C: Child render        // Nouvelle value → le consommateur re-render
```

**Mais si `addEmployee` et `employees` n'avaient PAS changé et que `count` n'était PAS dans le value ?**

```
A: Provider render     // Le Provider re-render quand même
                       // Mais useMemo ne recalcule PAS (deps inchangées)
                       // Et ChildComponent ne re-render PAS (value stable)
```

C'est toute la puissance de `useMemo` : il **coupe** la chaîne de re-renders pour les consommateurs du Context.

</details>

---

### Défi 3.3 - Architecture mentale

Dessine l'arbre de composants V2 et le flux de données :

```
main.jsx
 └── ???
      └── ???
```

Questions :

1. Où vivent `employees`, `shifts`, `assignments` ?
2. Comment `PlanningCell` accède à `shifts` ?
3. Qu'est-ce qui empêche tous les `EmployeeRow` de re-render quand on change de semaine ?

<details>
<summary>📝 Réponse</summary>

```
main.jsx
 └── AppProvider (instancie les 4 hooks)
      └── App
           ├── Header
           │    └── ThemeToggle
           ├── WeekNav ← useAppContext() (currentWeek, goNext, goPrev, goToday)
           ├── PlanningTable ← useAppContext() (employees, shifts, weeklyAssignments)
           │    └── EmployeeRow (×n) ← props (employee, onCellClick)
           │         └── PlanningCell (×14, 7 jours × 2 périodes)
           ├── Button "Employés" → Modal → EmployeeList/EmployeeForm
           └── Button "Shifts" → Modal → ShiftManager/ShiftForm
```

**Réponses :**

1. **Tous dans AppProvider** — via useEmployees, useShifts, useAssignments (instanciés dans AppProvider). Accessibles partout via `useAppContext()`.

2. **PlanningCell** reçoit ses données via **props de EmployeeRow**, qui les reçoit de **PlanningTable**, qui les lit via **useAppContext()**. PlanningCell ne consomme pas le Context directement.

3. **useMemo + useCallback** : quand on change de semaine, `currentWeek` change → `weeklyAssignments` change. Mais `employees` et `addEmployee` (useCallback) ne changent PAS, donc seuls les composants qui lisent `weeklyAssignments` re-render. Les EmployeeRow dont les assignments n'ont pas changé ne re-render pas grâce à la stabilité des références.

</details>

---

### Défi 3.4 - Refactoring mental

Ce code fonctionne mais souffre de prop drilling :

```jsx
function App() {
  const { employees, addEmployee, deleteEmployee } = useEmployees();
  const { shifts } = useShifts();
  const { assignments, addAssignment } = useAssignments(shifts, currentWeek);

  return (
    <>
      <PlanningTable
        employees={employees}
        shifts={shifts}
        assignments={assignments}
        addAssignment={addAssignment}
      />
      <EmployeeList
        employees={employees}
        shifts={shifts}
        deleteEmployee={deleteEmployee}
      />
    </>
  );
}

function PlanningTable({ employees, shifts, assignments, addAssignment }) {
  return employees.map((emp) => (
    <EmployeeRow
      key={emp.id}
      employee={emp}
      shifts={shifts}
      assignments={assignments}
      addAssignment={addAssignment}
    />
  ));
}
```

**❓ Comment simplifier avec Context ? Combien de props `PlanningTable` reçoit-il après ?**

<details>
<summary>📝 Réponse</summary>

```jsx
// Avec Context :
function App() {
  // Plus besoin d'appeler les hooks ici !
  // AppProvider les instancie déjà
  return (
    <>
      <PlanningTable onCellClick={handleCellClick} />
      <EmployeeList onDeleteEmployee={handleDeleteEmployee} />
    </>
  );
}

function PlanningTable({ onCellClick }) {
  // 1 seule prop !
  const { employees, shifts, weeklyAssignments } = useAppContext();

  return employees.map((emp) => (
    <EmployeeRow key={emp.id} employee={emp} onCellClick={onCellClick} />
  ));
}
```

**Avant** : PlanningTable = 4 props, EmployeeRow = 4 props
**Après** : PlanningTable = 1 prop (`onCellClick`), EmployeeRow = 2 props (`employee`, `onCellClick`)

Les données globales (employees, shifts, assignments) sont lues directement via `useAppContext()`. Seuls les callbacks spécifiques à l'UI (modals) restent en props.

</details>

---

## ✅ Auto-évaluation

Coche ce que tu maîtrises :

- [ ] Je sais quand remonter le state dans un parent (lifting state up)
- [ ] Je sais extraire la logique d'un composant dans un custom hook
- [ ] Je comprends useReducer (reducer, dispatch, action) et quand le préférer à useState
- [ ] Je sais créer un Context (createContext, Provider, useContext)
- [ ] Je comprends le prop drilling et comment Context le résout
- [ ] Je sais pourquoi useMemo est nécessaire sur la value du Provider
- [ ] Je comprends useCallback et la forme fonctionnelle `prev =>`
- [ ] Je sais quand utiliser `[dispatch]` vs `[dispatch, currentWeek]` dans les deps

---

## 🎯 Score

- **8/8** : Tu maîtrises React intermédiaire/avancé ! Prêt pour TypeScript 🚀
- **6-7/8** : Très bon, relis les concepts flous avant Phase 10
- **4-5/8** : Relis les exercices des phases 7-9 avant de continuer
- **< 4/8** : Reprends les phases 8-9, ce sont des concepts fondamentaux

---

## 🏆 Bravo !

Tu as complété la **V2 de ChefPlanning** !

Tu maîtrises maintenant :

- ✅ Lifting State Up & flux de données avancé
- ✅ Custom Hooks (séparation logique/UI)
- ✅ useReducer (state complexe centralisé)
- ✅ Context API (Provider/Consumer, élimination prop drilling)
- ✅ useMemo & useCallback (optimisation des re-renders)
- ✅ Référence equality (`===` sur objets/fonctions)

---

## 🔮 Teaser Phase 10

Tu vas migrer ChefPlanning vers **TypeScript** !

Tu apprendras :

- **Interfaces/Types** — Typer Employee, Shift, Assignment
- **Generics** — `useLocalStorage<T>(key, defaultValue: T)`
- **Zod** — Validation runtime des données
- **React Hook Form** — Formulaires typés avec validation

**Concept clé** : TypeScript attrape les erreurs **avant** l'exécution. Plus de `undefined is not a function` en production !

**Prêt ?** Tape `phase` dans le chat pour commencer ! 🔷
