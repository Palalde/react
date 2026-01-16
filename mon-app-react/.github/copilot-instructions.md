# Copilot Instructions - ChefPlanning

## 🎯 Projet

**ChefPlanning** est une application React de planning hebdomadaire pour employés.
C'est aussi un **projet d'apprentissage React** — l'utilisateur est débutant et apprend par la pratique.

## 📚 Approche Pédagogique

> **MODE SOCRATIQUE ACTIVÉ**

- L'utilisateur **code lui-même**, l'IA **guide** avec questions et indices
- Fournir des **templates à compléter** avec `// TODO:` et commentaires explicatifs
- Donner des **indices progressifs** si blocage (Indice 1 → 2 → 3)
- Expliquer le **"pourquoi"** après chaque concept
- Poser une **question de réflexion** après complétion

### Format d'une Story

```jsx
// 🎯 Objectif : [Ce qu'on apprend]
// 📚 Concept : [Explication simple du concept React]

// ❓ Question : [Question pour guider la réflexion]

function Component(/* TODO: Quels paramètres ? */) {
  return <div>{/* TODO: Que mettre ici ? */}</div>;
}

// 💡 Indice 1 : [Concept général]
// 💡 Indice 2 : [Syntaxe]
// 💡 Indice 3 : [Détail spécifique]
```

## 🛠️ Stack Technique

| Tech        | Version      | Notes                               |
| ----------- | ------------ | ----------------------------------- |
| React       | 19.2         | Functional components uniquement    |
| Vite        | 7            | Build tool + dev server             |
| TailwindCSS | 4            | Utilise `@theme` pour custom colors |
| Persistance | LocalStorage | Pas de backend                      |

## 📁 Structure Projet

```
src/
├── components/
│   ├── ui/          # Button, Card, Badge, Modal, Input, ThemeToggle
│   └── layout/      # Header, Container
├── features/
│   ├── employees/   # EmployeeCard, EmployeeList, EmployeeForm
│   ├── shifts/      # ShiftCard, ShiftSelector
│   ├── assignments/ # AssignmentCard, AssignmentForm
│   └── planning/    # PlanningGrid, DayColumn
├── hooks/           # useLocalStorage, useTheme
├── utils/           # generateId
└── constants/       # days, shifts
```

## 🎨 Design System - Light/Dark Mode

### Couleurs de Base

| Token CSS                | Light     | Dark      | Usage                 |
| ------------------------ | --------- | --------- | --------------------- |
| `--color-bg-primary`     | `#FFFFFF` | `#0F172A` | Background principal  |
| `--color-bg-secondary`   | `#F8FAFC` | `#1E293B` | Background secondaire |
| `--color-bg-tertiary`    | `#F1F5F9` | `#334155` | Cards, surfaces       |
| `--color-text-primary`   | `#0F172A` | `#F8FAFC` | Texte principal       |
| `--color-text-secondary` | `#475569` | `#94A3B8` | Texte secondaire      |
| `--color-border`         | `#E2E8F0` | `#334155` | Bordures              |

### Couleurs d'Accent

| Token CSS              | Light     | Dark      | Usage                       |
| ---------------------- | --------- | --------- | --------------------------- |
| `--color-accent`       | `#6366F1` | `#818CF8` | Couleur principale (Indigo) |
| `--color-accent-hover` | `#4F46E5` | `#6366F1` | Hover                       |
| `--color-success`      | `#10B981` | `#34D399` | Succès (Emerald)            |
| `--color-warning`      | `#F59E0B` | `#FBBF24` | Alertes (Amber)             |
| `--color-danger`       | `#EF4444` | `#F87171` | Erreurs (Red)               |

### Couleurs des Shifts

| Shift      | Light BG  | Dark BG   | Light Border | Dark Border |
| ---------- | --------- | --------- | ------------ | ----------- |
| Matin      | `#FEF3C7` | `#78350F` | `#FCD34D`    | `#F59E0B`   |
| Après-midi | `#DBEAFE` | `#1E3A8A` | `#60A5FA`    | `#3B82F6`   |
| Journée    | `#D1FAE5` | `#064E3B` | `#34D399`    | `#10B981`   |

### Utilisation dans les Composants

```jsx
// ✅ CORRECT - Utiliser les classes Tailwind mappées aux variables CSS
<div className="bg-bg-primary text-text-primary">
  <button className="bg-accent hover:bg-accent-hover text-white">
    Action
  </button>
</div>

// ✅ CORRECT - Couleurs de shift
<div className="bg-shift-matin border-l-4 border-shift-matin-border">
  Matin
</div>

// ❌ INCORRECT - Ne PAS mélanger variables et dark: variants
<div className="bg-bg-primary dark:bg-slate-900">  // Redondant !
```

## 📝 Code Patterns

### Props Destructuring avec Defaults

```jsx
function EmployeeCard({ name, weeklyHours = 35, skills = [], onEdit }) {
  // ...
}
```

### Barrel Exports

```javascript
// features/employees/index.js
export { EmployeeCard } from "./components/EmployeeCard";
export { EmployeeList } from "./components/EmployeeList";
export { useEmployees } from "./hooks/useEmployees";
```

### Absolute Imports

```jsx
// ✅ Utiliser @/ pour les imports
import { Button } from "@/components/ui";
import { EmployeeCard } from "@/features/employees";
import { useLocalStorage } from "@/hooks";
```

### Custom Hooks (Phase 8+)

```javascript
function useEmployees() {
  const [employees, setEmployees] = useLocalStorage("employees", []);

  const addEmployee = (emp) => setEmployees((prev) => [...prev, emp]);
  const deleteEmployee = (id) =>
    setEmployees((prev) => prev.filter((e) => e.id !== id));

  return { employees, addEmployee, deleteEmployee };
}
```

## 📊 Data Models

### Employee (MVP)

```javascript
{
  id: 'emp_1',
  name: 'Jean Dupont',
  color: '#3B82F6',
  weeklyHours: 35,
  skills: ['balance', 'rayonnage']
}
```

### Shift (MVP)

```javascript
{
  id: 'matin',
  name: 'Matin',
  startTime: '06:00',
  endTime: '13:00',
  colorClass: 'bg-shift-matin border-shift-matin-border',
  hours: 7
}
```

### Assignment (MVP)

```javascript
{
  id: 'assign_1',
  employeeId: 'emp_1',
  day: 'monday',
  shiftId: 'matin'
}
```

## 📖 Référence Complète

Pour les détails complets (toutes les phases, stories, acceptance criteria) :

📄 **Tech-Spec** : `_bmad-output/implementation-artifacts/tech-spec-chef-planning.md`

## 🚦 Progression d'Apprentissage

| Phase | Concept                             | Status |
| ----- | ----------------------------------- | ------ |
| 0     | Setup (Vite, Structure, CSS)        | 🔜     |
| 1     | JSX & Composants                    | 🔜     |
| 2     | Props                               | 🔜     |
| 3     | useState                            | 🔜     |
| 4     | Listes & Keys                       | 🔜     |
| 5     | Events                              | 🔜     |
| 6     | useEffect & LocalStorage            | 🔜     |
| 7+    | V2 (Lifting State, Custom Hooks...) | ⏸️     |

---

> **Rappel** : L'utilisateur apprend React. Toujours guider, jamais coder à sa place sauf demande explicite.
