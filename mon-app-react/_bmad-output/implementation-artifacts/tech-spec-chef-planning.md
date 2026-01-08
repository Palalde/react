---
title: "ChefPlanning - App de Planning Hebdomadaire"
slug: "chef-planning"
created: "2026-01-08"
status: "ready-for-dev"
stepsCompleted: [1, 2, 3, 4]
tech_stack:
  - React 19.2
  - Vite 7
  - TailwindCSS 4
  - LocalStorage
files_to_modify:
  - src/App.jsx
  - src/main.jsx
  - src/index.css
  - vite.config.js
code_patterns:
  - Functional components only
  - Hooks (useState, useEffect, custom hooks)
  - Props destructuring with defaults
  - Composition over inheritance
  - Feature-based folder structure
  - Barrel exports (index.js)
  - Absolute imports (@/)
  - Separation of concerns (UI/Logic/Data)
test_patterns: []
modern_standards: true
pedagogical_approach: socratic
user_skill_level: beginner-react
user_codes: true
job_preset: employee-rayon
data_model_version: 2
---

# Tech-Spec: ChefPlanning - App de Planning Hebdomadaire

**Created:** 2026-01-08

## Overview

### Problem Statement

Un chef d'équipe a besoin d'un outil simple pour créer et gérer le planning hebdomadaire de ses employés, sans dépendre d'outils complexes ou payants.

### Solution

Une application React frontend-only permettant de visualiser une grille de planning semaine, d'ajouter/modifier/supprimer des tâches, et d'assigner des employés. Données persistées en LocalStorage avec synchronisation via state React.

**Approche pédagogique** : chaque story est un exercice d'apprentissage React avec templates à compléter et guidage socratique. L'utilisateur code lui-même, l'IA guide par des questions et indices.

### Scope

**In Scope MVP (Phases 0-6) :**

- Grille planning hebdomadaire (Lundi → Dimanche)
- CRUD employés (nom, couleur, heures contrat)
- Liste de compétences simple (array de strings)
- Presets d'horaires de base (Matin, Après-midi, Journée)
- Assignations : employé + jour + horaire
- Persistance LocalStorage
- UI basique avec TailwindCSS
- Stories ordonnées par progression d'apprentissage React
- Mode pédagogique : templates à compléter, indices socratiques

**V2 (Phases 7-9 — après maîtrise des bases) :**

- Presets horaires "Coupé" avec pauses
- Tâches avec priorités et compétences requises
- Override horaires sur assignations
- Skill levels (1-5) et suggestions
- Validation règles métier (11h repos, heures contrat...)
- Navigation entre semaines
- Gestion jours fériés
- Settings page

**Out of Scope :**

- Backend / API
- Authentification utilisateurs
- Export PDF
- Intégration calendriers externes

## Context for Development

### User Profile

- **Niveau React** : Débutant total
- **Niveau JS** : Bon
- **Niveau HTML/CSS** : Très bon
- **Objectif** : Apprendre React par la pratique via roadmap.sh
- **Méthode** : L'utilisateur code, l'IA guide (Socrate)

### Wireframe Layout (MVP)

```
┌─────────────────────────────────────────────────────────────────────┐
│  🗓️ ChefPlanning                                    [+ Employé]     │  <- Header
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌──────────┐  ┌─────────────────────────────────────────────────┐  │
│  │ EMPLOYÉS │  │              PLANNING SEMAINE                   │  │
│  │          │  │                                                 │  │
│  │ ┌──────┐ │  │  Lun    Mar    Mer    Jeu    Ven    Sam    Dim  │  │
│  │ │ Jean │ │  │ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐│  │
│  │ │ 35h  │ │  │ │Jean│ │    │ │Jean│ │    │ │Jean│ │    │ │    ││  │
│  │ └──────┘ │  │ │Mat.│ │    │ │Mat.│ │    │ │Apr.│ │    │ │    ││  │
│  │ ┌──────┐ │  │ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘│  │
│  │ │Marie │ │  │ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐      │  │
│  │ │ 20h  │ │  │ │    │ │Marie│ │    │ │Marie│ │    │ │Marie│     │  │
│  │ └──────┘ │  │ │    │ │Apr.│ │    │ │Mat.│ │    │ │Jour.│     │  │
│  │          │  │ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘      │  │
│  └──────────┘  └─────────────────────────────────────────────────┘  │
│   ~200px                        ~flex-1                             │
└─────────────────────────────────────────────────────────────────────┘

Légende:
- Sidebar gauche : liste des employés (scrollable)
- Main : grille 7 colonnes (1 par jour)
- Chaque cellule : assignations de ce jour
- Click sur cellule vide → créer assignation
- Click sur assignation → éditer/supprimer
```

### Codebase Patterns

- **Components** : Functional components uniquement (pas de classes)
- **State Management** : useState pour état local, lifting state pour partage
- **Side Effects** : useEffect pour sync LocalStorage
- **Styling** : TailwindCSS utility classes
- **Custom Hooks** : Extraire la logique métier dans des hooks réutilisables
- **Props** : Destructuring avec valeurs par défaut
- **Imports** : Absolute imports via alias `@/`
- **Exports** : Barrel exports (index.js) pour clean imports

### Modern Project Structure

```
src/
├── components/              # Composants UI réutilisables
│   ├── ui/                  # Primitives (Button, Input, Card, Modal...)
│   └── layout/              # Layout (Header, Sidebar, Container...)
├── features/                # Features par domaine métier
│   ├── employees/           # Gestion des employés
│   │   ├── components/      # EmployeeCard, EmployeeList, EmployeeForm
│   │   ├── hooks/           # useEmployees
│   │   └── index.js
│   ├── skills/              # Gestion des compétences
│   │   ├── components/      # SkillBadge, SkillSelector
│   │   ├── hooks/           # useSkills
│   │   └── index.js
│   ├── shifts/              # Presets d'horaires
│   │   ├── components/      # ShiftCard, ShiftSelector
│   │   ├── hooks/           # useShifts
│   │   └── index.js
│   ├── tasks/               # Presets de tâches
│   │   ├── components/      # TaskCard, TaskSelector
│   │   ├── hooks/           # useTasks
│   │   └── index.js
│   ├── assignments/         # Assignations planning
│   │   ├── components/      # AssignmentCard, AssignmentForm
│   │   ├── hooks/           # useAssignments
│   │   └── index.js
│   ├── planning/            # Grille de planning
│   │   ├── components/      # PlanningGrid, DayColumn, WeekNavigator
│   │   ├── hooks/           # usePlanning, useWeekNavigation
│   │   └── index.js
│   └── settings/            # Configuration magasin
│       ├── components/      # StoreSettings, HolidayManager
│       ├── hooks/           # useStoreConfig
│       └── index.js
├── hooks/                   # Custom hooks globaux
│   ├── useLocalStorage.js
│   └── index.js
├── utils/                   # Helpers purs
│   ├── generateId.js
│   ├── dateUtils.js
│   ├── hoursCalculator.js
│   └── index.js
├── constants/               # Constantes
│   ├── days.js
│   ├── presets/             # Presets métiers
│   │   └── employee-rayon.js
│   └── index.js
├── data/                    # Données initiales (presets)
│   └── index.js
├── App.jsx
└── main.jsx
```

### Files to Reference

| File                      | Purpose                                          |
| ------------------------- | ------------------------------------------------ |
| src/App.jsx               | Composant racine, orchestration                  |
| src/main.jsx              | Point d'entrée React                             |
| src/index.css             | Styles globaux + Tailwind                        |
| vite.config.js            | Config Vite (absolute imports `@/`)              |
| src/components/ui/        | Primitives UI (Button, Card, Input, Modal)       |
| src/components/layout/    | Layout (Header, Sidebar, Container)              |
| src/features/employees/   | Employés + contrats + compétences                |
| src/features/skills/      | Compétences dynamiques                           |
| src/features/shifts/      | Presets d'horaires (Matin, Coupé...)             |
| src/features/tasks/       | Presets de tâches avec priorités                 |
| src/features/assignments/ | Assignations (employé + jour + horaire + tâche?) |
| src/features/planning/    | Grille planning + navigation semaine             |
| src/features/settings/    | Config magasin + jours fériés                    |
| src/hooks/                | Hooks globaux (useLocalStorage)                  |
| src/utils/                | Helpers (generateId, dateUtils, hoursCalc)       |
| src/constants/presets/    | Presets métiers (employee-rayon.js)              |

### Technical Decisions

1. **LocalStorage** : Persistance simple côté client, pas de backend requis
2. **State + LocalStorage sync** : useState pour réactivité, useEffect pour persistance
3. **Horaires flexibles** : Presets modulables + override par assignation
4. **Tâches optionnelles** : Assignation = horaire obligatoire, tâche facultative
5. **Contrats employés** : Heures hebdo, type, jours de repos, contraintes légales
6. **Compétences dynamiques** : Preset métier + ajouts custom par l'employeur
7. **Feature-based structure** : Organisation par domaine métier
8. **Custom Hooks** : Logique métier extraite dans des hooks réutilisables
9. **Absolute imports** : Alias `@/` configuré dans Vite
10. **Barrel exports** : Chaque feature expose une API propre via index.js
11. **Presets métiers** : Templates extensibles (rayon → resto → etc.)
12. **TypeScript-ready** : Conventions compatibles pour migration future

### Business Rules (Validation)

**MVP (Phase 5) — Validation basique :**

- Afficher le total d'heures assignées par employé dans la sidebar
- Indicateur visuel (rouge) si heures > contrat

**V2 (Phase 9) — Validation avancée :**

| Règle             | Description                                   | Niveau     |
| ----------------- | --------------------------------------------- | ---------- |
| Heures contrat    | Alerte si heures semaine > contrat            | ⚠️ Warning |
| Repos obligatoire | Alerte si < 11h entre 2 shifts                | 🚫 Error   |
| Compétences       | Alerte si assignation sans skill requis       | ⚠️ Warning |
| Jours consécutifs | Alerte si > 6 jours sans repos                | ⚠️ Warning |
| Jour férié        | Warning si assignation sur férié              | ⚠️ Warning |
| Jour de repos     | Bloquer assignation sur jour de repos contrat | 🚫 Error   |

### Modern Code Conventions

```jsx
// ✅ Props destructuring avec defaults
function EmployeeCard({ name, contract = {}, skills = [], onEdit }) {
  return (/* ... */);
}

// ✅ Custom Hook pour la logique métier
function useEmployees() {
  const [employees, setEmployees] = useState([]);
  const addEmployee = (employee) => { /* ... */ };
  const removeEmployee = (id) => { /* ... */ };
  const getEmployeesBySkill = (skillId) => { /* ... */ };
  return { employees, addEmployee, removeEmployee, getEmployeesBySkill };
}

// ✅ Barrel export (features/employees/index.js)
export { EmployeeCard } from './components/EmployeeCard';
export { EmployeeList } from './components/EmployeeList';
export { useEmployees } from './hooks/useEmployees';

// ✅ Clean imports grâce aux barrels
import { EmployeeCard, useEmployees } from '@/features/employees';
```

## Implementation Plan

### Learning Progression (React Roadmap)

**🎯 MVP = Phases 0-6 (App fonctionnelle)**

| Phase | Concept React           | Application concrète                 | Difficulté | MVP |
| ----- | ----------------------- | ------------------------------------ | ---------- | --- |
| 0     | Setup                   | Vite config, structure dossiers      | 🔧         | ✅  |
| 1     | JSX & Premier Composant | Layout de base + Header              | ⭐         | ✅  |
| 2     | Props                   | EmployeeCard avec données            | ⭐         | ✅  |
| 3     | State (useState)        | Gérer liste employés                 | ⭐⭐       | ✅  |
| 4     | Listes & Keys           | Afficher grille planning             | ⭐⭐       | ✅  |
| 5     | Events                  | CRUD employés + assignations         | ⭐⭐       | ✅  |
| 6     | useEffect               | Sync LocalStorage (inline, pas hook) | ⭐⭐⭐     | ✅  |

**🚀 V2 = Phases 7-9 (Refactoring + Features avancées)**

| Phase | Concept React       | Application concrète                  | Difficulté | V2  |
| ----- | ------------------- | ------------------------------------- | ---------- | --- |
| 7     | Lifting State       | Refactor: state centralisé dans App   | ⭐⭐⭐     | 🔜  |
| 8     | Custom Hooks        | Extraire useEmployees, useAssignments | ⭐⭐⭐     | 🔜  |
| 9     | Composition avancée | Tasks, skills avancés, validation     | ⭐⭐⭐     | 🔜  |

> **Note pédagogique F4** : En Phase 6, on utilise useEffect directement dans le composant.
> Les custom hooks (Phase 8) viennent APRÈS pour montrer comment extraire et réutiliser la logique.

### Tasks (Stories Pédagogiques)

---

## 🎓 PHASE 0 : Setup Projet (Prérequis)

### Story 0.1 : Configurer les Absolute Imports

**🎯 Objectif** : Configurer Vite pour utiliser `@/` comme alias vers `src/`

**📚 Concept** : Les imports absolus évitent les `../../../` et rendent le code plus lisible.

- [ ] **Task 0.1.1** : Modifier `vite.config.js`

  - File: `vite.config.js`
  - Action: Ajouter la configuration `resolve.alias` pour mapper `@` vers `./src`
  - Notes: Utiliser `path.resolve` de Node.js

- [ ] **Task 0.1.2** : Créer la structure de dossiers

  - Files: `src/components/ui/`, `src/components/layout/`, `src/features/`, `src/hooks/`, `src/utils/`, `src/constants/`
  - Action: Créer les dossiers vides avec fichiers `index.js` placeholder

- [ ] **Task 0.1.3** : Créer le helper `generateId`

  - File: `src/utils/generateId.js`
  - Action: Fonction qui génère un ID unique
  - Code: `export const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);`
  - Notes: Simple et suffisant pour localStorage, pas besoin de UUID

- [ ] **Task 0.1.4** : Créer le barrel utils
  - File: `src/utils/index.js`
  - Action: `export { generateId } from './generateId';`

---

## 🎓 PHASE 1 : JSX & Premier Composant ⭐

### Story 1.1 : Créer le Layout de Base

**🎯 Objectif d'apprentissage** : Comprendre JSX et créer ton premier composant React.

**📚 Concept React** : JSX = JavaScript + HTML. Un composant = une fonction qui retourne du JSX.

- [ ] **Task 1.1.1** : Créer le composant `Header`

  - File: `src/components/layout/Header.jsx`
  - Action: Composant affichant le titre "ChefPlanning" avec TailwindCSS
  - Notes: Structure `<header>` avec flex, bg-color, padding

- [ ] **Task 1.1.2** : Créer le composant `Container`

  - File: `src/components/layout/Container.jsx`
  - Action: Wrapper avec max-width et padding responsive
  - Notes: Utiliser `children` pour wrapper le contenu

- [ ] **Task 1.1.3** : Créer le barrel export layout

  - File: `src/components/layout/index.js`
  - Action: Exporter Header et Container

- [ ] **Task 1.1.4** : Intégrer dans App.jsx
  - File: `src/App.jsx`
  - Action: Importer et utiliser Header + Container
  - Notes: Premier rendu visuel de l'app !

---

## 🎓 PHASE 2 : Props ⭐

### Story 2.1 : Créer les Composants UI de Base

**🎯 Objectif** : Comprendre comment passer des données aux composants via les props.

**📚 Concept React** : Props = paramètres d'un composant. Parent → Enfant. Read-only.

- [ ] **Task 2.1.1** : Créer le composant `Button`

  - File: `src/components/ui/Button.jsx`
  - Action: Bouton avec props `variant`, `size`, `onClick`, `children`
  - Notes: Utiliser destructuring + defaults : `{ variant = 'primary', size = 'md', ... }`

- [ ] **Task 2.1.2** : Créer le composant `Card`

  - File: `src/components/ui/Card.jsx`
  - Action: Card avec props `title`, `children`, `className`
  - Notes: Composition pattern avec `Card.Header`, `Card.Body` (bonus)

- [ ] **Task 2.1.3** : Créer le composant `Badge`

  - File: `src/components/ui/Badge.jsx`
  - Action: Badge pour skills avec props `label`, `color`, `icon`
  - Notes: Sera utilisé pour afficher les compétences

- [ ] **Task 2.1.4** : Créer le barrel export UI
  - File: `src/components/ui/index.js`
  - Action: Exporter Button, Card, Badge

### Story 2.2 : Créer EmployeeCard avec Props

**🎯 Objectif** : Utiliser les props pour afficher les données d'un employé.

- [ ] **Task 2.2.1** : Créer le composant `EmployeeCard`

  - File: `src/features/employees/components/EmployeeCard.jsx`
  - Action: Afficher nom, couleur, contrat (heures), skills en badges
  - Props: `{ employee, onEdit, onDelete }`
  - Notes: Utiliser les composants UI créés (Card, Badge)

- [ ] **Task 2.2.2** : Créer les données mock

  - File: `src/data/mockData.js`
  - Action: 3 employés exemple avec skills et contrats différents
  - Notes: Suivre exactement le **Data Model MVP** (id, name, color, weeklyHours, skills)

- [ ] **Task 2.2.3** : Afficher une EmployeeCard dans App
  - File: `src/App.jsx`
  - Action: Importer mockData et afficher une EmployeeCard
  - Notes: Vérifier que les props passent correctement

---

## 🎓 PHASE 3 : State (useState) ⭐⭐

### Story 3.1 : Gérer la Liste d'Employés

**🎯 Objectif** : Comprendre useState et la gestion d'état local.

**📚 Concept React** : `useState` = stocker des données qui peuvent changer. Quand le state change → React re-render.

- [ ] **Task 3.1.1** : Créer le composant `EmployeeList`

  - File: `src/features/employees/components/EmployeeList.jsx`
  - Action: useState pour stocker la liste, map pour afficher EmployeeCard
  - Notes: Initialiser avec mockData

- [ ] **Task 3.1.2** : Créer le barrel export employees

  - File: `src/features/employees/index.js`
  - Action: Exporter EmployeeCard, EmployeeList

- [ ] **Task 3.1.3** : Intégrer EmployeeList dans App
  - File: `src/App.jsx`
  - Action: Remplacer la carte unique par la liste

---

## 🎓 PHASE 4 : Listes & Keys ⭐⭐

### Story 4.1 : Créer la Grille de Planning

**🎯 Objectif** : Comprendre le rendu de listes et l'importance des keys.

**📚 Concept React** : `key` = identifiant unique pour chaque élément. React l'utilise pour optimiser les re-renders.

- [ ] **Task 4.1.1** : Créer les constantes jours

  - File: `src/constants/days.js`
  - Action: `DAYS_OF_WEEK` array avec id, name, shortName
  - Notes: `[{ id: 'monday', name: 'Lundi', shortName: 'Lun' }, ...]`

- [ ] **Task 4.1.2** : Créer le composant `DayColumn`

  - File: `src/features/planning/components/DayColumn.jsx`
  - Action: Colonne pour un jour avec header + zone assignments
  - Props: `{ day, assignments, employees }`

- [ ] **Task 4.1.3** : Créer le composant `PlanningGrid`

  - File: `src/features/planning/components/PlanningGrid.jsx`
  - Action: Grid 7 colonnes, map sur DAYS_OF_WEEK
  - Notes: Utiliser CSS Grid ou Flexbox avec Tailwind

- [ ] **Task 4.1.4** : Créer le barrel export planning

  - File: `src/features/planning/index.js`
  - Action: Exporter DayColumn, PlanningGrid

- [ ] **Task 4.1.5** : Intégrer PlanningGrid dans App
  - File: `src/App.jsx`
  - Action: Layout avec sidebar (employees) + main (planning)

---

## 🎓 PHASE 5 : Events ⭐⭐

### Story 5.1 : CRUD Employés

**🎯 Objectif** : Gérer les événements utilisateur (click, submit, change).

**📚 Concept React** : `onClick`, `onChange`, `onSubmit` = gestionnaires d'événements. Toujours modifier le state, jamais muter directement.

- [ ] **Task 5.1.1** : Créer le composant `Input`

  - File: `src/components/ui/Input.jsx`
  - Action: Input contrôlé avec props `value`, `onChange`, `label`, `type`
  - Notes: Pattern controlled component

- [ ] **Task 5.1.2** : Créer le composant `Modal`

  - File: `src/components/ui/Modal.jsx`
  - Action: Modal overlay avec props `isOpen`, `onClose`, `title`, `children`
  - Notes: Utiliser createPortal (bonus) ou position fixed

- [ ] **Task 5.1.3** : Créer le composant `EmployeeForm`

  - File: `src/features/employees/components/EmployeeForm.jsx`
  - Action: Formulaire création/édition employé
  - Notes: useState pour chaque champ, onSubmit pour sauvegarder

- [ ] **Task 5.1.4** : Implémenter Add Employee

  - File: `src/features/employees/components/EmployeeList.jsx`
  - Action: Bouton "+", ouvrir modal, ajouter au state
  - Notes: Générer ID unique avec `generateId()`

- [ ] **Task 5.1.5** : Implémenter Edit/Delete Employee

  - File: `src/features/employees/components/EmployeeList.jsx`
  - Action: Callbacks onEdit/onDelete dans EmployeeCard
  - Notes: filter() pour delete, map() pour update

- [ ] **Task 5.1.6** : Afficher le total d'heures assignées (F6)
  - File: `src/features/employees/components/EmployeeCard.jsx`
  - Action: Afficher "X h / {weeklyHours} h" sous le nom
  - Notes: Pour l'instant, juste afficher 0h (calcul réel en Phase 7 avec assignments)
  - Bonus: Indicateur rouge si > weeklyHours

### Story 5.2 : Créer les Presets Horaires (F18)

- [ ] **Task 5.2.1** : Créer les constantes shifts MVP

  - File: `src/constants/shifts.js`
  - Action: Définir les 3 shifts de base
  - Code:
    ```javascript
    export const DEFAULT_SHIFTS = [
      {
        id: "matin",
        name: "Matin",
        startTime: "06:00",
        endTime: "13:00",
        color: "#FCD34D",
        hours: 7,
      },
      {
        id: "aprem",
        name: "Après-midi",
        startTime: "13:00",
        endTime: "20:00",
        color: "#60A5FA",
        hours: 7,
      },
      {
        id: "journee",
        name: "Journée",
        startTime: "09:00",
        endTime: "17:00",
        color: "#34D399",
        hours: 8,
      },
    ];
    ```

- [ ] **Task 5.2.2** : Créer le composant `ShiftSelector`
  - File: `src/features/shifts/components/ShiftSelector.jsx`
  - Action: Dropdown pour sélectionner un shift
  - Props: `{ shifts, selectedId, onChange }`
  - Notes: Utiliser DEFAULT_SHIFTS importé

### Story 5.3 : CRUD Shifts Avancé (V2)

- [ ] **Task 5.3.1** : Créer le preset employee-rayon complet

  - File: `src/constants/presets/employee-rayon.js`
  - Action: Exporter EMPLOYEE_RAYON_PRESET avec skills, shifts, tasks
  - Notes: Suivre le **Data Model V2** (pour Phase 9)

- [ ] **Task 5.3.2** : Créer le composant `ShiftCard`

  - File: `src/features/shifts/components/ShiftCard.jsx`
  - Action: Afficher nom, horaires, couleur du shift
  - Props: `{ shift, onEdit, onDelete }`

- [ ] **Task 5.3.3** : Créer le composant `ShiftList`

  - File: `src/features/shifts/components/ShiftList.jsx`
  - Action: Liste des presets horaires avec CRUD

- [ ] **Task 5.3.4** : Créer les barrels shifts et constants
  - Files: `src/features/shifts/index.js`, `src/constants/index.js`

---

## 🎓 PHASE 6 : useEffect & LocalStorage ⭐⭐⭐

### Story 6.1 : Persister les Données

**🎯 Objectif** : Comprendre useEffect et les side effects.

**📚 Concept React** : `useEffect` = exécuter du code après le render. Parfait pour sync avec localStorage, API, etc.

- [ ] **Task 6.1.1** : Créer le hook `useLocalStorage`

  - File: `src/hooks/useLocalStorage.js`
  - Action: Hook custom qui sync useState avec localStorage
  - Notes: `const [value, setValue] = useLocalStorage('key', defaultValue)`

- [ ] **Task 6.1.2** : Créer le barrel hooks

  - File: `src/hooks/index.js`
  - Action: Exporter useLocalStorage

- [ ] **Task 6.1.3** : Utiliser useLocalStorage pour employees

  - File: `src/features/employees/components/EmployeeList.jsx`
  - Action: Remplacer useState par useLocalStorage
  - Notes: Les données persistent au refresh !

- [ ] **Task 6.1.4** : Persister shifts et tasks
  - Files: `src/features/shifts/`, `src/features/tasks/`
  - Action: Même pattern useLocalStorage

---

## 🎓 PHASE 7 : Lifting State Up ⭐⭐⭐

### Story 7.1 : Créer des Assignations

**🎯 Objectif** : Comprendre comment partager le state entre composants.

**📚 Concept React** : Lifting State = remonter le state au plus petit ancêtre commun. Props down, events up.

- [ ] **Task 7.1.1** : Créer le composant `AssignmentCard`

  - File: `src/features/assignments/components/AssignmentCard.jsx`
  - Action: Afficher employé + shift + task (optionnel)
  - Props: `{ assignment, employee, shift, task, onEdit, onDelete }`

- [ ] **Task 7.1.2** : Créer le composant `AssignmentForm`

  - File: `src/features/assignments/components/AssignmentForm.jsx`
  - Action: Sélecteurs pour employé, shift, task (optionnel), jour
  - Notes: Override horaires possible

- [ ] **Task 7.1.3** : Remonter le state dans App

  - File: `src/App.jsx`
  - Action: Centraliser employees, shifts, tasks, assignments
  - Notes: Passer en props aux composants enfants

- [ ] **Task 7.1.4** : Connecter PlanningGrid aux assignments

  - File: `src/features/planning/components/PlanningGrid.jsx`
  - Action: Filtrer assignments par jour, afficher dans DayColumn

- [ ] **Task 7.1.5** : Drag & Drop basique (bonus)
  - File: `src/features/planning/components/DayColumn.jsx`
  - Action: onClick sur cellule pour créer assignment
  - Notes: Pas de vraie lib D&D, juste click-to-assign

---

## 🎓 PHASE 8 : Custom Hooks ⭐⭐⭐

### Story 8.1 : Extraire la Logique Métier

**🎯 Objectif** : Créer des hooks custom pour encapsuler la logique réutilisable.

**📚 Concept React** : Custom Hook = fonction commençant par `use` qui utilise d'autres hooks. Sépare logique et UI.

- [ ] **Task 8.1.1** : Créer `useEmployees` hook

  - File: `src/features/employees/hooks/useEmployees.js`
  - Action: Encapsuler CRUD + useLocalStorage + helpers (getBySkill, etc.)
  - Notes: Retourne `{ employees, addEmployee, updateEmployee, deleteEmployee, getEmployeesBySkill }`

- [ ] **Task 8.1.2** : Créer `useShifts` hook

  - File: `src/features/shifts/hooks/useShifts.js`
  - Action: CRUD shifts + merge avec presets

- [ ] **Task 8.1.3** : Créer `useTasks` hook

  - File: `src/features/tasks/hooks/useTasks.js`
  - Action: CRUD tasks + filtrage par activeWhen

- [ ] **Task 8.1.4** : Créer `useAssignments` hook

  - File: `src/features/assignments/hooks/useAssignments.js`
  - Action: CRUD + calcul heures + validation règles métier

- [ ] **Task 8.1.5** : Créer `useStoreConfig` hook

  - File: `src/features/settings/hooks/useStoreConfig.js`
  - Action: Horaires magasin + jours fériés

- [ ] **Task 8.1.6** : Refactorer App avec les hooks
  - File: `src/App.jsx`
  - Action: Remplacer useState multiples par les custom hooks
  - Notes: Code beaucoup plus clean !

---

## 🎓 PHASE 9 : Composition Avancée ⭐⭐⭐

### Story 9.1 : Système de Compétences Complet

**🎯 Objectif** : Maîtriser la composition de composants et la gestion de données complexes.

- [ ] **Task 9.1.1** : Créer `SkillSelector` composant

  - File: `src/features/skills/components/SkillSelector.jsx`
  - Action: Multi-select skills avec niveaux (1-5)
  - Notes: Presets + custom skills

- [ ] **Task 9.1.2** : Créer `useSkills` hook

  - File: `src/features/skills/hooks/useSkills.js`
  - Action: Merge preset skills + custom skills

- [ ] **Task 9.1.3** : Intégrer skills dans EmployeeForm
  - File: `src/features/employees/components/EmployeeForm.jsx`
  - Action: Ajouter SkillSelector avec niveaux

### Story 9.2 : Validation & Alertes

- [ ] **Task 9.2.1** : Créer `useValidation` hook

  - File: `src/hooks/useValidation.js`
  - Action: Valider règles métier (heures contrat, repos 11h, skills requis...)
  - Notes: Retourne `{ errors, warnings }`

- [ ] **Task 9.2.2** : Créer composant `AlertBanner`

  - File: `src/components/ui/AlertBanner.jsx`
  - Action: Afficher warnings/errors

- [ ] **Task 9.2.3** : Afficher validations dans PlanningGrid
  - File: `src/features/planning/components/PlanningGrid.jsx`
  - Action: Indicateurs visuels sur assignations problématiques

### Story 9.3 : Navigation Semaine

- [ ] **Task 9.3.1** : Créer `useWeekNavigation` hook

  - File: `src/features/planning/hooks/useWeekNavigation.js`
  - Action: Gérer semaine courante, prev/next

- [ ] **Task 9.3.2** : Créer `WeekNavigator` composant

  - File: `src/features/planning/components/WeekNavigator.jsx`
  - Action: Boutons prev/next + affichage semaine

- [ ] **Task 9.3.3** : Filtrer assignments par semaine
  - File: `src/features/assignments/hooks/useAssignments.js`
  - Action: Ajouter `getAssignmentsByWeek(weekOf)`

### Story 9.4 : Settings & Configuration

- [ ] **Task 9.4.1** : Créer page Settings

  - File: `src/features/settings/components/SettingsPage.jsx`
  - Action: Config magasin (horaires, jours fériés)

- [ ] **Task 9.4.2** : Créer `HolidayManager` composant
  - File: `src/features/settings/components/HolidayManager.jsx`
  - Action: CRUD jours fériés custom

---

### Acceptance Criteria

#### Phase 0 : Setup

- [ ] **AC 0.1** : Given `vite.config.js` modifié, when je lance `npm run dev`, then pas d'erreur de build
- [ ] **AC 0.2** : Given le projet, when j'écris `import { generateId } from '@/utils'` dans App.jsx, then l'import résout correctement
- [ ] **AC 0.3** : Given `generateId()`, when je l'appelle, then je reçois un string unique (ex: `lxyz123abc`)

#### Phase 1 : Layout

- [ ] **AC 1.1** : Given l'app démarre, when je visite `/`, then je vois le header "ChefPlanning" et un container vide

#### Phase 2 : Props

- [ ] **AC 2.1** : Given un employé mock, when je render `<EmployeeCard employee={emp} />`, then je vois son nom, couleur, heures contrat et skills
- [ ] **AC 2.2** : Given un Button, when je passe `variant="danger"`, then le bouton est rouge

#### Phase 3 : State

- [ ] **AC 3.1** : Given la liste d'employés, when je la modifie en mémoire, then l'UI se met à jour automatiquement

#### Phase 4 : Lists & Keys

- [ ] **AC 4.1** : Given la grille planning, when je render, then je vois 7 colonnes (Lundi → Dimanche)
- [ ] **AC 4.2** : Given une liste d'employés, when je supprime un élément, then les autres gardent leur état (keys fonctionnent)

#### Phase 5 : Events

- [ ] **AC 5.1** : Given le bouton "+ Employé", when je clique, then un modal s'ouvre avec le formulaire
- [ ] **AC 5.2** : Given le formulaire employé rempli, when je submit, then l'employé apparaît dans la liste
- [ ] **AC 5.3** : Given une EmployeeCard, when je clique "Supprimer", then l'employé disparaît de la liste

#### Phase 6 : Persistence

- [ ] **AC 6.1** : Given des employés ajoutés, when je refresh la page, then les employés sont toujours là (localStorage)
- [ ] **AC 6.2** : Given le localStorage, when j'ouvre DevTools > Application > Local Storage, then je vois les données JSON

#### Phase 7 : Lifting State

- [ ] **AC 7.1** : Given un employé et un shift, when je crée une assignation, then elle apparaît dans la grille au bon jour
- [ ] **AC 7.2** : Given une assignation, when je clique dessus, then je peux la modifier ou supprimer

#### Phase 8 : Custom Hooks

- [ ] **AC 8.1** : Given `useEmployees()`, when j'appelle `addEmployee(emp)`, then l'employé est ajouté et persisté
- [ ] **AC 8.2** : Given `useAssignments()`, when j'ajoute une assignation, then `hoursWorked` est calculé automatiquement

#### Phase 9 : Composition Avancée

- [ ] **AC 9.1** : Given un employé sans skill "balance", when je tente de l'assigner à la tâche "Balance", then je vois un warning
- [ ] **AC 9.2** : Given un employé avec 35h/semaine, when ses assignations dépassent 35h, then je vois une alerte
- [ ] **AC 9.3** : Given la semaine courante, when je clique "Semaine suivante", then la grille affiche la semaine +1
- [ ] **AC 9.4** : Given un skill custom créé, when je modifie un employé, then je peux lui assigner ce skill

## Data Model

### MVP Data Model (Simplifié — Phases 0-6)

> **F2 Fix** : Data model simplifié pour se concentrer sur l'apprentissage React, pas sur la logique métier complexe.

#### Employee (Employé) — MVP

```javascript
{
  id: 'emp_1',              // Généré par generateId()
  name: 'Jean Dupont',
  color: '#3B82F6',         // Pour identification visuelle
  weeklyHours: 35,          // Heures contrat
  skills: ['balance', 'rayonnage']  // Simple array de strings
}
```

#### Shift (Preset horaire) — MVP

```javascript
{
  id: 'shift_matin',
  name: 'Matin',
  startTime: '06:00',
  endTime: '13:00',
  color: '#FCD34D',
  hours: 7                  // Pré-calculé pour simplifier
}
```

#### Assignment (Assignation) — MVP

```javascript
{
  id: 'assign_1',
  employeeId: 'emp_1',
  day: 'monday',            // 'monday' | 'tuesday' | ... | 'sunday'
  shiftId: 'shift_matin'
}
```

### V2 Data Model (Complet — Phases 7-9)

> Features avancées : skill levels, contrats détaillés, tâches, validation.

#### Employee (Employé) — V2

```javascript
{
  id: 'emp_1',
  name: 'Jean Dupont',
  color: '#3B82F6',

  // Compétences et niveaux (1-5)
  skills: ['balance', 'rayonnage', 'facing'],
  skillLevels: {
    'balance': 5,      // Expert
    'rayonnage': 3,    // Intermédiaire
    'facing': 4
  },

  // Contrat
  contract: {
    weeklyHours: 35,           // 35h, 20h, etc.
    contractType: 'CDI',       // CDI, CDD, interim, alternance
    restDays: ['sunday'],      // Jours de repos fixes
    maxConsecutiveDays: 6,     // Max jours consécutifs
    minRestHours: 11           // Heures min entre 2 shifts
  },

  // Préférences (optionnel)
  preferences: {
    preferredShifts: ['matin'],
    avoidDays: [],
    notes: ''
  }
}
```

### Skill (Compétence)

```javascript
{
  id: 'skill_balance',
  name: 'Balance / Pesée',
  icon: '⚖️',
  description: 'Capable de tenir le stand pesée',
  isCustom: false,            // true si créé par l'utilisateur
  category: 'rayon'           // Pour regrouper
}
```

### Shift (Preset horaire)

```javascript
{
  id: 'shift_matin',
  name: 'Matin',
  startTime: '06:00',
  endTime: '13:00',
  color: '#FCD34D',
  isCustom: false,

  // Pour les coupés
  breaks: [
    { start: '10:00', end: '10:15', type: 'paid' }    // Pause payée
  ]
}

// Exemple Coupé
{
  id: 'shift_coupe',
  name: 'Coupé',
  startTime: '06:00',
  endTime: '10:00',
  color: '#F87171',
  isCustom: false,
  breaks: [
    { start: '10:00', end: '16:00', type: 'unpaid' }  // Coupure
  ],
  resumeEnd: '20:00'          // Reprise jusqu'à
}
```

### Task (Preset tâche)

```javascript
{
  id: 'task_balance',
  name: 'Tenue balance',
  requiredSkills: ['balance'],        // Compétences obligatoires
  optionalSkills: [],                  // Nice to have
  priority: 1,                         // 1 = critique
  isCustom: false,

  // Conditions d'activation
  activeWhen: {
    type: 'store_open',               // 'always' | 'store_open' | 'store_closed' | 'time_range' | 'custom'
    // Pour time_range:
    // start: '06:00', end: '10:00'
    // Pour custom:
    // conditions: [{ field: 'dayOfWeek', operator: 'in', value: ['monday', 'friday'] }]
  }
}
```

### Assignment (Assignation planning)

```javascript
{
  id: 'assign_1',
  day: 'monday',
  weekOf: '2026-01-06',               // Semaine du planning
  employeeId: 'emp_1',

  // Horaire (OBLIGATOIRE)
  shiftId: 'shift_matin',
  customStart: null,                  // Override (null = utilise preset)
  customEnd: null,
  customBreaks: null,

  // Tâche (OPTIONNEL)
  taskId: null,                       // Peut être null !

  // Métadonnées
  status: 'scheduled',                // 'scheduled' | 'confirmed' | 'absent'
  notes: '',

  // Calculé automatiquement
  hoursWorked: 7
}
```

### SpecialDay (Jour spécial)

```javascript
{
  id: 'special_1',
  date: '2026-01-01',
  type: 'holiday',                    // 'holiday' | 'closure' | 'reduced_hours'
  name: 'Jour de l\'an',
  storeOpen: false,
  customOpenTime: null,
  customCloseTime: null
}
```

### StoreConfig (Configuration magasin)

```javascript
{
  id: 'store_config',
  name: 'Mon Magasin',
  preset: 'employee-rayon',           // Preset métier actif

  openingHours: {
    monday: { open: '08:30', close: '20:00' },
    tuesday: { open: '08:30', close: '20:00' },
    wednesday: { open: '08:30', close: '20:00' },
    thursday: { open: '08:30', close: '20:00' },
    friday: { open: '08:30', close: '20:00' },
    saturday: { open: '08:30', close: '20:00' },
    sunday: { open: '09:00', close: '12:30' }
  },

  useDefaultHolidays: true,           // Jours fériés français
  customHolidays: []
}
```

### JobPreset (Preset métier - extensible)

```javascript
// constants/presets/employee-rayon.js
export const EMPLOYEE_RAYON_PRESET = {
  id: "employee-rayon",
  name: "Employé de rayon",
  description: "Grande distribution - Rayon fruits & légumes, etc.",

  defaultSkills: [
    { id: "balance", name: "Balance / Pesée", icon: "⚖️" },
    { id: "rayonnage", name: "Rayonnage", icon: "📦" },
    { id: "facing", name: "Facing", icon: "🧹" },
    { id: "reception", name: "Réception marchandise", icon: "🚚" },
    { id: "inventaire", name: "Inventaire", icon: "📋" },
  ],

  defaultShifts: [
    {
      id: "matin",
      name: "Matin",
      start: "06:00",
      end: "13:00",
      color: "#FCD34D",
    },
    {
      id: "aprem",
      name: "Après-midi",
      start: "13:00",
      end: "20:00",
      color: "#60A5FA",
    },
    {
      id: "journee",
      name: "Journée",
      start: "09:00",
      end: "17:00",
      color: "#34D399",
    },
    {
      id: "coupe",
      name: "Coupé",
      start: "06:00",
      end: "10:00",
      breakStart: "10:00",
      breakEnd: "16:00",
      resumeEnd: "20:00",
      color: "#F87171",
    },
  ],

  defaultTasks: [
    {
      id: "task_balance",
      name: "Tenue balance",
      requiredSkills: ["balance"],
      priority: 1,
      activeWhen: { type: "store_open" },
    },
    {
      id: "task_rayonnage",
      name: "Remplissage rayon",
      requiredSkills: ["rayonnage"],
      priority: 2,
      activeWhen: { type: "always" },
    },
    {
      id: "task_facing",
      name: "Facing",
      requiredSkills: ["facing"],
      priority: 3,
      activeWhen: { type: "before_close", hours: 2 },
    },
    {
      id: "task_reception",
      name: "Réception",
      requiredSkills: ["reception"],
      priority: 1,
      activeWhen: { type: "time_range", start: "06:00", end: "10:00" },
    },
  ],
};
```

## Additional Context

### Dependencies

Déjà installées :

- react: ^19.2.0
- react-dom: ^19.2.0
- tailwindcss: ^4.1.18
- vite: ^7.2.4

Aucune dépendance supplémentaire requise pour le MVP.

### Testing Strategy

- Tests manuels pendant l'apprentissage
- Critères d'acceptation vérifiables visuellement
- Console DevTools pour debug

### Pedagogical Notes

**Approche Socratique :**

- Poser des questions avant de donner des réponses
- Templates avec TODO à compléter
- Indices progressifs si blocage
- Explications du "pourquoi" après chaque concept

**Structure d'une Story Pédagogique :**

1. 🎯 Objectif d'apprentissage
2. 📚 Concept React expliqué simplement
3. 🏗️ Template à compléter
4. 💡 Indices (si demandé)
5. ✅ Solution + explication
6. 🧠 Question de réflexion

### Exemple de Template Socratique (F5)

```jsx
// 🎯 Story 2.2 : Créer EmployeeCard
// 📚 Concept : Les PROPS permettent de passer des données du parent vers l'enfant

// ❓ Question : Comment récupérer les données de l'employé dans ce composant ?

function EmployeeCard(/* TODO: Quels paramètres ici ? */) {
  return (
    <div className="p-4 border rounded-lg">
      {/* TODO: Affiche le nom de l'employé */}
      <h3>{/* ??? */}</h3>

      {/* TODO: Affiche les heures du contrat */}
      <p>{/* ??? */}h / semaine</p>
    </div>
  );
}

// 💡 Indice 1 : Les props sont passés comme premier argument de la fonction
// 💡 Indice 2 : Tu peux destructurer : function Component({ prop1, prop2 })
// 💡 Indice 3 : L'employé a une propriété `name` et `weeklyHours` (voir Data Model MVP)

export default EmployeeCard;
```

**Format des indices :**

- Indice 1 : Concept général
- Indice 2 : Syntaxe
- Indice 3 : Détail spécifique au projet

**Après complétion, l'IA pose :**

> 🧠 "Qu'est-ce qui se passe si tu oublies de passer la prop `employee` au composant ?"
