---
title: "ChefPlanning - App de Planning Hebdomadaire"
slug: "chef-planning"
created: "2026-01-08"
updated: "2026-02-07"
status: "v2-in-progress"
currentPhase: 7
completedPhases: [0, 1, 2, 3, 4, 5, 6]
tech_stack:
  - React 19.2
  - Vite 7
  - TailwindCSS 4
  - LocalStorage
future_stack:
  - TypeScript (Phase 10)
  - Node.js + Hono (Phase 11)
  - SQLite → PostgreSQL (Phase 12)
code_patterns:
  - Functional components only
  - Hooks (useState, useEffect, custom hooks)
  - Props destructuring with defaults
  - Feature-based folder structure
  - Barrel exports (index.js)
  - Absolute imports (@/)
pedagogical_approach: socratic
user_skill_level: intermediate-react
data_model_version: 2
---

# Tech-Spec: ChefPlanning - App de Planning Hebdomadaire

**Created:** 2026-01-08 | **Updated:** 2026-02-03

---

## 🎯 Vision Projet

### Objectif

Application de planning hebdomadaire pour chefs d'équipe. Projet d'apprentissage fullstack avec ambition de déploiement et monétisation.

### Roadmap Complète

```
┌─────────────────────────────────────────────────────────────────────┐
│                    ROADMAP CHEFPLANNING                             │
├─────────────────────────────────────────────────────────────────────┤
│  ✅ MVP (Phases 0-6) ────────────────────── COMPLÉTÉ               │
│     React basics, CRUD, localStorage, Theme                        │
│                                                                     │
│  🔜 V2 React (Phases 7-9) ─────────────────── EN COURS             │
│     Lifting State, Custom Hooks, Composition avancée               │
│                                                                     │
│  📘 TypeScript (Phase 10) ────────────────── À VENIR               │
│     Migration complète de l'app en TS                              │
│                                                                     │
│  🗄️ Backend (Phases 11-12) ───────────────── À VENIR              │
│     Node.js + Hono, API REST, SQLite → PostgreSQL                  │
│                                                                     │
│  🚀 Production (Phase 13+) ───────────────── À VENIR               │
│     Auth, Deploy, Optimisations, Monétisation                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## ✅ MVP COMPLÉTÉ : Phases 0-6 (Résumé)

> **Status** : Toutes les phases MVP sont complétées. Cette section est un résumé des acquis.
> 📁 Archive détaillée : `tech-spec-chef-planning-v1-archive.md`

### Concepts React Maîtrisés

| Phase | Concept                   | Composants Créés                                                              | Status |
| ----- | ------------------------- | ----------------------------------------------------------------------------- | ------ |
| 0     | Setup Vite, CSS Variables | `index.css`, `vite.config.js`                                                 | ✅     |
| 1     | JSX, Composants           | `Header`, `Container`                                                         | ✅     |
| 2     | Props                     | `Button`, `Card`, `Badge`, `EmployeeCard`                                     | ✅     |
| 3     | useState                  | `EmployeeList`                                                                | ✅     |
| 4     | Listes & Keys             | `DayColumn`, `PlanningGrid`, `days.js`                                        | ✅     |
| 5     | Events, CRUD              | `Input`, `Modal`, `EmployeeForm`, `HoursInput`, `ColorInput`, `ShiftSelector` | ✅     |
| 6     | useEffect, Custom Hooks   | `useLocalStorage`, `useTheme`, `ThemeToggle`                                  | ✅     |

### Structure Actuelle du Projet

```
src/
├── components/
│   ├── ui/           # Button, Card, Badge, Modal, Input, ColorInput,
│   │                 # HoursInput, ThemeToggle
│   └── layout/       # Header, Container
├── features/
│   ├── employees/    # EmployeeCard, EmployeeList, EmployeeForm
│   ├── shifts/       # ShiftSelector
│   └── planning/     # PlanningGrid, DayColumn
├── hooks/            # useLocalStorage, useTheme
├── utils/            # generateId, colorUtils, timeUtils
├── constants/        # days.js, shifts.js
└── data/             # mockData.js
```

### Data Model MVP (Implémenté)

```javascript
// Employee
{ id, name, color, weeklyMinutes, skills: [] }

// Shift (DEFAULT_SHIFTS)
{ id, name, startTime, endTime, hours, colorClass }

// Assignment (structure prévue pour Phase 7)
{ id, employeeId, day, shiftId }
```

### Acceptance Criteria Validés (Phases 0-6)

- ✅ Setup Vite, alias @/, generateId(), CSS variables
- ✅ Header "ChefPlanning" visible
- ✅ EmployeeCard affiche données, Button variants
- ✅ State réactif avec useState
- ✅ Grille 7 jours avec keys
- ✅ CRUD employés complet
- ✅ Persistance localStorage + ThemeToggle

---

## 🔜 V2 EN COURS : Phases 7-9

### Vue d'Ensemble

| Phase | Concept              | Durée estimée | Status |
| ----- | -------------------- | ------------- | ------ |
| 7     | Lifting State Up     | 1 semaine     | ✅     |
| 8     | Custom Hooks avancés | 1 semaine     | 🔜     |
| 9     | Composition avancée  | 1 semaine     | ⏳     |

---

## 🎓 PHASE 7 : Lifting State Up ⭐⭐⭐

### Story 7.1 : Créer le Système d'Assignations

**🎯 Objectif** : Comprendre comment partager le state entre composants.

**📚 Concept React** : Lifting State = remonter le state au plus petit ancêtre commun. Props down, events up.

```
         ┌─────────────┐
         │   App.jsx   │  ← State centralisé (employees, assignments)
         │             │
         └─────┬───────┘
               │ props ↓
    ┌──────────┴──────────┐
    │                     │
┌───▼───┐          ┌──────▼──────┐
│Employee│          │ PlanningGrid │
│ List   │          │              │
└────────┘          └──────────────┘
```

- [x] **Task 7.1.1** : Créer le composant `AssignmentCard`
  - File: `src/features/assignments/components/AssignmentCard.jsx`
  - Props: `{ assignment, employee, shift, onEdit, onDelete }`
  - Action: Afficher nom employé + shift + horaires
  - Notes: Utiliser la couleur de l'employé comme bordure

- [x] **Task 7.1.2** : Créer le composant `AssignmentForm`
  - File: `src/features/assignments/components/AssignmentForm.jsx`
  - Props: `{ employees, shifts, day, onSubmit, onClose, editingAssignment? }`
  - Action: Modal avec sélecteurs employé + shift
  - Notes: Mode création ET édition

- [x] **Task 7.1.3** : Remonter le state dans App.jsx
  - File: `src/App.jsx`
  - Action:
    - Déplacer `employees` state depuis EmployeeList vers App
    - Ajouter `assignments` state avec useLocalStorage
    - Passer les données et callbacks en props

- [x] **Task 7.1.4** : Connecter DayColumn aux assignments
  - File: `src/features/planning/components/DayColumn.jsx`
  - Props ajoutées: `{ assignments, employees, shifts, onAddAssignment, onEditAssignment, onDeleteAssignment }`
  - Action: Filtrer et afficher les AssignmentCards du jour

- [x] **Task 7.1.5** : Ajouter interaction click-to-assign
  - File: `src/features/planning/components/DayColumn.jsx`
  - Action: Zone cliquable pour créer une assignation
  - Notes: Ouvrir AssignmentForm au clic sur zone vide

### Story 7.2 : Calculer les Heures Travaillées

- [x] **Task 7.2.1** : Calculer le total d'heures par employé
  - File: `src/utils/timeUtils.js` + `EmployeeList.jsx` + `EmployeeCard.jsx`
  - Action: Fonction `getEmployeeHours(employeeId, assignments, shifts)` — filter/reduce/find
  - Notes: Calcul dans EmployeeList (parent), résultat passé en prop `workedMinutes` à EmployeeCard
  - Implémentation: App passe `assignments` à EmployeeList, qui importe `DEFAULT_SHIFTS` depuis constants

- [x] **Task 7.2.2** : Indicateur visuel heures > contrat
  - File: `src/features/employees/components/EmployeeCard.jsx`
  - Action: `isOvertime` booléen + ternaire className + badge conditionnel ⚠️
  - Notes: `text-danger`, `font-semibold`, `bg-danger/10` du design system

### Acceptance Criteria Phase 7

- [x] **AC 7.1** : Given un employé et un shift, when je clique sur une cellule vide, then un formulaire s'ouvre
- [x] **AC 7.2** : Given le formulaire rempli, when je submit, then l'assignation apparaît dans la grille
- [x] **AC 7.3** : Given une assignation, when je clique dessus, then je peux la modifier ou supprimer
- [x] **AC 7.4** : Given plusieurs assignations, when je refresh, then elles sont persistées (localStorage)
- [x] **AC 7.5** : Given un employé avec 35h, when ses assignations = 40h, then un indicateur rouge apparaît

---

## 🎓 PHASE 8 : Custom Hooks Avancés ⭐⭐⭐

### Story 8.1 : Extraire la Logique Métier

**🎯 Objectif** : Créer des hooks custom pour encapsuler la logique réutilisable.

**📚 Concept React** : Custom Hook = fonction commençant par `use` qui utilise d'autres hooks. Sépare logique et UI.

- [x] **Task 8.1.1** : Créer `useEmployees` hook
  - File: `src/features/employees/hooks/useEmployees.js`
  - Retourne: `{ employees, addEmployee, updateEmployee, deleteEmployee, getEmployeeById }`
  - Notes: Encapsule useLocalStorage + CRUD

- [x] **Task 8.1.2** : Créer `useShifts` hook
  - File: `src/features/shifts/hooks/useShifts.js`
  - Retourne: `{ shifts, getShiftById }`
  - Notes: Pour l'instant, retourne juste DEFAULT_SHIFTS

- [x] **Task 8.1.3** : Créer `useAssignments` hook
  - File: `src/features/assignments/hooks/useAssignments.js`
  - Retourne: `{ assignments, addAssignment, updateAssignment, deleteAssignment, getAssignmentsByDay, getAssignmentsByEmployee, calculateHours }`
  - Notes: Logique métier centralisée

- [x] **Task 8.1.4** : Refactorer App.jsx avec les hooks
  - File: `src/App.jsx`
  - Action: Remplacer les useState par les custom hooks
  - Résultat: Code ~50% plus court et plus lisible

### Story 8.2 : Hook de Calcul d'Heures

- [ ] **Task 8.2.1** : Créer `useHoursCalculator` hook
  - File: `src/hooks/useHoursCalculator.js`
  - Action: Calcule heures travaillées, reste, dépassement
  - Retourne: `{ totalMinutes, remainingMinutes, isOvertime, formatDisplay }`

### Acceptance Criteria Phase 8

- [ ] **AC 8.1** : Given `useEmployees()`, when j'appelle `addEmployee(emp)`, then l'employé est ajouté et persisté
- [ ] **AC 8.2** : Given `useAssignments()`, when j'ajoute une assignation, then `calculateHours` est mis à jour
- [ ] **AC 8.3** : Given App.jsx refactoré, when je compare avec avant, then le code est plus court et plus lisible

---

## 🎓 PHASE 9 : Composition Avancée ⭐⭐⭐

### Story 9.1 : Navigation entre Semaines

**🎯 Objectif** : Gérer des données temporelles avec React.

- [ ] **Task 9.1.1** : Créer `useWeekNavigation` hook
  - File: `src/features/planning/hooks/useWeekNavigation.js`
  - Retourne: `{ currentWeek, goToNextWeek, goToPrevWeek, goToToday, formatWeekDisplay }`
  - Notes: `currentWeek` = date du lundi de la semaine

- [ ] **Task 9.1.2** : Créer `WeekNavigator` composant
  - File: `src/features/planning/components/WeekNavigator.jsx`
  - Action: Boutons ◀ ▶ + affichage "Semaine du 3 février 2026"

- [ ] **Task 9.1.3** : Filtrer assignments par semaine
  - File: `src/features/assignments/hooks/useAssignments.js`
  - Action: Ajouter `getAssignmentsByWeek(weekOf)`
  - Notes: weekOf = "2026-02-03" (format ISO)

### Story 9.2 : Système de Compétences (Skills)

- [ ] **Task 9.2.1** : Créer `SkillBadge` composant
  - File: `src/features/skills/components/SkillBadge.jsx`
  - Props: `{ skill, level?, removable?, onRemove? }`

- [ ] **Task 9.2.2** : Créer `SkillSelector` composant
  - File: `src/features/skills/components/SkillSelector.jsx`
  - Action: Multi-select avec skills prédéfinis + possibilité d'ajouter

- [ ] **Task 9.2.3** : Intégrer SkillSelector dans EmployeeForm
  - File: `src/features/employees/components/EmployeeForm.jsx`
  - Action: Remplacer input texte skills par SkillSelector

### Story 9.3 : Validation & Alertes

- [ ] **Task 9.3.1** : Créer `useValidation` hook
  - File: `src/hooks/useValidation.js`
  - Retourne: `{ warnings, errors }`
  - Règles: heures > contrat (warning), 6+ jours consécutifs (warning)

- [ ] **Task 9.3.2** : Créer `ValidationBanner` composant
  - File: `src/components/ui/ValidationBanner.jsx`
  - Action: Afficher les warnings/errors en haut du planning

### Acceptance Criteria Phase 9

- [ ] **AC 9.1** : Given la semaine courante, when je clique "▶", then la grille affiche semaine +1
- [ ] **AC 9.2** : Given un employé, when je modifie ses skills via SkillSelector, then ils sont sauvegardés
- [ ] **AC 9.3** : Given un employé avec 35h et 40h assignées, when je vois le planning, then un warning apparaît

---

## 📘 PHASE 10 : TypeScript (À VENIR)

> **Prérequis** : Phases 7-9 complétées

### Objectif

Migrer l'application complète de JavaScript vers TypeScript pour :

- Meilleure DX (autocomplétion, refactoring)
- Détection d'erreurs à la compilation
- Documentation via types
- Préparation pour le backend (types partagés)

### Stories Prévues

- [ ] **Story 10.1** : Setup TypeScript + Vite
- [ ] **Story 10.2** : Typer les Data Models (Employee, Shift, Assignment)
- [ ] **Story 10.3** : Typer les Custom Hooks
- [ ] **Story 10.4** : Typer les Composants UI
- [ ] **Story 10.5** : Typer les Features

---

## 🗄️ PHASES 11-12 : Backend (À VENIR)

> **Prérequis** : Phase 10 (TypeScript) complétée

### Vision Backend

```
┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
│   React Client   │ ←──→ │  Hono API (TS)   │ ←──→ │ SQLite/PostgreSQL│
│   (TypeScript)   │ REST │   Node.js        │      │                  │
└──────────────────┘      └──────────────────┘      └──────────────────┘
```

### Phase 11 : API REST Basique

- Setup Hono + Node.js
- CRUD Employees via API
- Migration localStorage → API

### Phase 12 : Base de Données

- SQLite pour développement
- PostgreSQL pour production
- Migrations avec Drizzle ORM

---

## 🚀 PHASE 13+ : Production (À VENIR)

> **Prérequis** : Phases 11-12 complétées

### Features Production

- Authentification (sessions ou JWT)
- Multi-tenancy (plusieurs magasins)
- Export PDF des plannings
- Notifications (email/push)
- Analytics d'utilisation

### Déploiement

- Frontend : Vercel ou Netlify
- Backend : Railway ou Fly.io
- Database : Neon (PostgreSQL serverless)

### Monétisation (Idées)

- Freemium : 1 magasin gratuit, multi-magasins payant
- Abonnement mensuel pour features avancées
- Export PDF payant

---

## 📚 Références Techniques

### Design System

> Couleurs définies dans `src/index.css`. Utiliser les classes Tailwind mappées.

| Usage      | Light     | Dark      | Classe Tailwind     |
| ---------- | --------- | --------- | ------------------- |
| Background | `#FFFFFF` | `#0F172A` | `bg-bg-primary`     |
| Text       | `#0F172A` | `#F8FAFC` | `text-text-primary` |
| Border     | `#E2E8F0` | `#475569` | `border-border`     |
| Accent     | `#6366F1` | `#818CF8` | `bg-accent`         |

### Shifts Colors

| Shift      | Classe BG          | Classe Border                 |
| ---------- | ------------------ | ----------------------------- |
| Matin      | `bg-shift-matin`   | `border-shift-matin-border`   |
| Après-midi | `bg-shift-aprem`   | `border-shift-aprem-border`   |
| Journée    | `bg-shift-journee` | `border-shift-journee-border` |

### Data Model V2 (Pour Phases 7-9)

```javascript
// Employee
{
  id: 'emp_1',
  name: 'Jean Dupont',
  color: '#3B82F6',
  weeklyMinutes: 2100,  // 35h
  skills: ['balance', 'rayonnage']
}

// Shift (DEFAULT_SHIFTS)
{
  id: 'matin',
  name: 'Matin',
  startTime: '06:00',
  endTime: '13:00',
  hours: 7,
  colorClass: 'bg-shift-matin border-shift-matin-border'
}

// Assignment
{
  id: 'assign_1',
  employeeId: 'emp_1',
  day: 'monday',        // 'monday' | ... | 'sunday'
  shiftId: 'matin',
  weekOf: '2026-02-03'  // Ajouté en Phase 9
}
```

### Utils Disponibles

| Fonction                   | Module              | Description                  |
| -------------------------- | ------------------- | ---------------------------- |
| `generateId()`             | `@/utils`           | ID unique                    |
| `minutesToHoursMinutes()`  | `@/utils/timeUtils` | Minutes → { hours, minutes } |
| `formatMinutesToDisplay()` | `@/utils/timeUtils` | Minutes → "35h" ou "30h45"   |

### Imports Standards

```jsx
// Composants UI
import { Button, Card, Modal } from "@/components/ui";

// Features
import { EmployeeCard, EmployeeList } from "@/features/employees";

// Hooks
import { useLocalStorage, useTheme } from "@/hooks";

// Constants
import { DAYS_OF_WEEK } from "@/constants/days";
import { DEFAULT_SHIFTS } from "@/constants/shifts";
```

---

## 📝 Approche Pédagogique (Rappel)

> **Mode Socratique** : L'utilisateur code, l'IA guide.

### Format des Stories

```jsx
// 🎯 Objectif : [Ce qu'on apprend]
// 📚 Concept : [1-2 phrases]

// ❓ Question de départ

function /* ??? */(/* ??? */) {
  // TODO: ...
}

// 🔒 Indices (UN PAR UN si blocage)
```

### Règles

1. ❌ Pas de solution complète non demandée
2. ❌ Pas plus de 3-4 lignes de code exemple
3. ✅ Questions ouvertes d'abord
4. ✅ Valider les tentatives même incorrectes
5. ✅ Expliquer le "pourquoi" après

---

## 📊 Métriques de Progression

| Métrique      | Phase 6 (MVP) | Phase 9 (V2) | Phase 12 (Fullstack) |
| ------------- | ------------- | ------------ | -------------------- |
| Composants    | ~15           | ~25          | ~30                  |
| Custom Hooks  | 2             | 8+           | 12+                  |
| Lines of Code | ~1500         | ~3000        | ~5000+               |
| Persistance   | localStorage  | localStorage | PostgreSQL           |
| TypeScript    | ❌            | ❌           | ✅                   |

---

_Dernière mise à jour : 2026-02-07_
