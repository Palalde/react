# 🎮 Quiz React - Phases 0 à 3

**Temps estimé** : 20-30 min | **Difficulté** : ⭐⭐

Tu as complété les Phases 0-3 de ChefPlanning. Vérifions que tout est bien compris !

---

## 📊 Récap Express (2 min de lecture)

| Phase | Concept  | Ce que tu as appris                                 |
| ----- | -------- | --------------------------------------------------- |
| 0     | Setup    | Alias `@/` dans Vite, `generateId()`, CSS variables |
| 1     | JSX      | Composants = fonctions qui retournent du HTML-like  |
| 2     | Props    | Passer des données Parent → Enfant, destructuring   |
| 3     | useState | Stocker des données qui changent, re-render auto    |

---

## 🧠 PARTIE 1 : QCM Rapide (5 min)

### Q1. Imports absolus

Pourquoi utilise-t-on `@/` au lieu de `../../../` ?

- A) C'est plus rapide à exécuter
- B) C'est plus lisible et évite les erreurs de chemin
- C) C'est obligatoire en React
- D) Ça réduit la taille du bundle

<details>
<summary>📝 Réponse</summary>

**B) C'est plus lisible et évite les erreurs de chemin**

`import { Button } from '@/components/ui'` est plus clair que `import { Button } from '../../../components/ui'`

</details>

---

### Q2. Composants React

Un composant React, c'est :

- A) Une classe qui hérite de React.Component
- B) Une fonction qui retourne du JSX
- C) Un fichier .jsx obligatoirement
- D) Un objet avec une méthode render()

<details>
<summary>📝 Réponse</summary>

**B) Une fonction qui retourne du JSX**

En React moderne (et dans ChefPlanning), on utilise uniquement des **functional components**.

```jsx
function MonComposant() {
  return <div>Hello</div>; // JSX retourné
}
```

</details>

---

### Q3. Props

Les props sont :

- A) Des variables globales accessibles partout
- B) Des données passées du parent vers l'enfant (read-only)
- C) Des données que l'enfant peut modifier
- D) Stockées dans localStorage

<details>
<summary>📝 Réponse</summary>

**B) Des données passées du parent vers l'enfant (read-only)**

Le flux est **unidirectionnel** : Parent → Enfant.  
L'enfant ne peut PAS modifier les props qu'il reçoit.

</details>

---

### Q4. useState

Que retourne `useState([])` ?

- A) Un tableau vide
- B) Une fonction pour modifier le state
- C) Un tableau avec [valeur, fonctionPourModifier]
- D) undefined

<details>
<summary>📝 Réponse</summary>

**C) Un tableau avec [valeur, fonctionPourModifier]**

```jsx
const [employees, setEmployees] = useState([]);
//     ↑ valeur    ↑ fonction pour la modifier
```

C'est la **destructuration de tableau** !

</details>

---

### Q5. Keys dans les listes

Pourquoi la prop `key` est obligatoire dans `.map()` ?

- A) Pour le style CSS
- B) Pour que React identifie chaque élément et optimise les re-renders
- C) Pour l'accessibilité
- D) C'est juste une convention, pas obligatoire

<details>
<summary>📝 Réponse</summary>

**B) Pour que React identifie chaque élément et optimise les re-renders**

Sans `key`, React ne sait pas quel élément a changé/été ajouté/supprimé.

```jsx
// ✅ Correct
{
  employees.map((emp) => <Card key={emp.id} />);
}

// ❌ Erreur console + mauvaise performance
{
  employees.map((emp) => <Card />);
}
```

</details>

---

## 🔍 PARTIE 2 : Trouve l'erreur ! (10 min)

### Exercice 2.1 - Le composant cassé

```jsx
function EmployeeCard(employee, onEdit, onDelete) {
  return (
    <div>
      <h3>{employee.name}</h3>
      <p>{employee.weeklyHours}h</p>
    </div>
  );
}

// Utilisation :
<EmployeeCard employee={jean} onEdit={handleEdit} onDelete={handleDelete} />;
```

**❓ Qu'est-ce qui ne va pas ?**

<details>
<summary>💡 Indice</summary>

Regarde comment les props sont reçues dans la fonction...

</details>

<details>
<summary>📝 Réponse</summary>

**Erreur : Les props ne sont pas destructurées correctement !**

```jsx
// ❌ FAUX - 3 paramètres séparés
function EmployeeCard(employee, onEdit, onDelete)

// ✅ CORRECT - Un seul objet props, destructuré
function EmployeeCard({ employee, onEdit, onDelete })
```

Les props arrivent toujours dans **un seul objet**. Les `{ }` permettent de destructurer.

</details>

---

### Exercice 2.2 - Le state muté

```jsx
function EmployeeList() {
  const [employees, setEmployees] = useState(MOCK_EMPLOYEES);

  const deleteEmployee = (id) => {
    employees.filter(emp => emp.id !== id);
  };

  return (/* ... */);
}
```

**❓ Pourquoi `deleteEmployee` ne fonctionne pas ?**

<details>
<summary>💡 Indice</summary>

Que fait `filter()` ? Et que faut-il faire pour que React re-render ?

</details>

<details>
<summary>📝 Réponse</summary>

**Deux erreurs :**

1. `filter()` retourne un **nouveau tableau**, il ne modifie pas l'original
2. On n'appelle jamais `setEmployees()` pour mettre à jour le state !

```jsx
// ❌ FAUX
employees.filter((emp) => emp.id !== id); // Résultat ignoré !

// ✅ CORRECT
setEmployees(employees.filter((emp) => emp.id !== id));
```

**Règle d'or** : Pour que React re-render, il faut **appeler la fonction set** !

</details>

---

### Exercice 2.3 - La liste sans key

```jsx
function SkillList({ skills }) {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
}
```

**❓ Ce code fonctionne, mais il y a un problème potentiel. Lequel ?**

<details>
<summary>💡 Indice</summary>

Que se passe-t-il si on supprime un skill au milieu de la liste ?

</details>

<details>
<summary>📝 Réponse</summary>

**Utiliser `index` comme key est une mauvaise pratique !**

Si la liste change (ajout/suppression), les index changent aussi, et React peut confondre les éléments.

```jsx
// ⚠️ Problématique si la liste change
<li key={index}>

// ✅ Préférer un ID unique ou la valeur elle-même (si unique)
<li key={skill}>  // Si skills sont uniques
<li key={skill.id}>  // Si objets avec ID
```

**Règle** : `key={index}` est OK seulement si la liste ne change JAMAIS.

</details>

---

## 🏗️ PARTIE 3 : Mini-défis mentaux (10 min)

### Défi 3.1 - Complète le composant

Sans regarder ton code, complète mentalement :

```jsx
function Badge({ label, color = '???', icon }) {
  return (
    <span className={`px-2 py-1 rounded ${???}`}>
      {icon && <span>{???}</span>}
      {???}
    </span>
  );
}
```

**Questions :**

1. Quelle est la valeur par défaut de `color` dans ton code ?
2. Que signifie `icon && <span>` ?
3. Qu'affiche-t-on à la fin ?

<details>
<summary>📝 Réponses</summary>

1. `color = 'gray'` (ou similaire) - valeur par défaut si non fournie
2. **Short-circuit** : affiche le `<span>` SEULEMENT si `icon` est truthy
3. On affiche `{label}` - le texte du badge

```jsx
// Ta version probable :
function Badge({ label, color = "gray", icon }) {
  return (
    <span className={`px-2 py-1 rounded bg-${color}-100 text-${color}-800`}>
      {icon && <span className="mr-1">{icon}</span>}
      {label}
    </span>
  );
}
```

</details>

---

### Défi 3.2 - Trace mentale

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return <button onClick={handleClick}>{count}</button>;
}
```

**❓ Si je clique une fois, quelle valeur affiche le bouton ?**

- A) 0
- B) 1
- C) 3

<details>
<summary>📝 Réponse</summary>

**B) 1**

Les 3 `setCount(count + 1)` utilisent la MÊME valeur de `count` (celle du render actuel = 0).

Donc c'est comme faire 3 fois `setCount(0 + 1)` = `setCount(1)`.

**Pour incrémenter 3 fois**, il faut utiliser la forme fonctionnelle :

```jsx
setCount((prev) => prev + 1); // 0 → 1
setCount((prev) => prev + 1); // 1 → 2
setCount((prev) => prev + 1); // 2 → 3
```

</details>

---

### Défi 3.3 - Architecture

Dessine mentalement (ou sur papier) l'arbre de composants actuel de ChefPlanning :

```
App
 └── ???
      └── ???
           └── ???
```

<details>
<summary>📝 Réponse</summary>

```
App
 ├── Header
 └── Container
      └── EmployeeList
           └── EmployeeCard (×3, un par employé)
                ├── Card
                └── Badge (×n, un par skill)
```

Le state `employees` vit dans **EmployeeList** et descend vers **EmployeeCard** via props.

</details>

---

## ✅ Auto-évaluation

Coche ce que tu maîtrises :

- [ ] Je sais configurer un alias d'import dans Vite
- [ ] Je comprends qu'un composant = fonction → JSX
- [ ] Je sais destructurer les props avec valeurs par défaut
- [ ] Je sais utiliser useState pour créer du state
- [ ] Je comprends que `setState` déclenche un re-render
- [ ] Je sais utiliser `.map()` avec une `key` unique
- [ ] Je comprends le flux de données unidirectionnel (props down)

---

## 🎯 Score

- **7/7** : Tu es prêt pour la Phase 4 ! 🚀
- **5-6/7** : Relis les parties floues avant de continuer
- **< 5/7** : Reprends les exercices des phases précédentes

---

## 🔮 Teaser Phase 4

Tu vas créer la **grille de planning** avec 7 colonnes (Lun → Dim).

Tu utiliseras :

- Un tableau de constantes `DAYS_OF_WEEK`
- `.map()` pour générer les colonnes
- Le concept de `key` sur des données statiques

**Prêt ?** Tape `c` dans le chat pour continuer ! 🗓️
