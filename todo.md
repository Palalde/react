# 📋 ChefPlanning - Plan d'Apprentissage Fullstack

## 🎯 Vision

**Objectif Triple** :

1. 📚 Devenir développeur fullstack (React → TS → Backend)
2. 🚀 Déployer ChefPlanning en production
3. 💰 Potentiel de monétisation (SaaS)

---

## ✅ MVP COMPLÉTÉ : Phases 0-6

> **Status** : Toutes les bases React sont acquises !

| Phase | Concept                   | Status |
| ----- | ------------------------- | ------ |
| 0     | Setup Vite, CSS Variables | ✅     |
| 1     | JSX, Composants           | ✅     |
| 2     | Props                     | ✅     |
| 3     | useState                  | ✅     |
| 4     | Listes & Keys             | ✅     |
| 5     | Events, CRUD              | ✅     |
| 6     | useEffect, Custom Hooks   | ✅     |

**Quiz validés** : `quiz-react-phases-0-3.md` + `quiz-react-phases-4-6.md`

---

## 🔜 V2 EN COURS : Phases 7-9 (React Avancé)

### 📚 Phase 7 : Lifting State Up (1 semaine)

**📖 Lecture recommandée** :

- https://react.dev/learn/sharing-state-between-components
- https://roadmap.sh/react → State Management

**🎯 Objectif** : Centraliser le state dans App.jsx pour le partager entre EmployeeList et PlanningGrid.

**✅ Tasks** :

- [✅] Task 7.1.1 : Créer `AssignmentCard`
- [✅] Task 7.1.2 : Créer `AssignmentForm`
- [✅] Task 7.1.3 : Remonter state dans App.jsx
- [✅] Task 7.1.4 : Connecter DayColumn aux assignments
- [✅] Task 7.1.5 : Click-to-assign
- [ ] Task 7.2.1 : Calculer heures par employé
- [ ] Task 7.2.2 : Indicateur dépassement

**🧪 Acceptance Criteria** :

- [ ] AC 7.1-7.5 (voir tech-spec)

---

### 📚 Phase 8 : Custom Hooks Avancés (1 semaine)

**📖 Lecture recommandée** :

- https://react.dev/learn/reusing-logic-with-custom-hooks
- https://roadmap.sh/react → Custom Hooks

**🎯 Objectif** : Extraire la logique métier dans des hooks réutilisables.

**✅ Tasks** :

- [ ] Task 8.1.1 : Créer `useEmployees` hook
- [ ] Task 8.1.2 : Créer `useShifts` hook
- [ ] Task 8.1.3 : Créer `useAssignments` hook
- [ ] Task 8.1.4 : Refactorer App.jsx
- [ ] Task 8.2.1 : Créer `useHoursCalculator`

**🧪 Acceptance Criteria** :

- [ ] AC 8.1-8.3 (voir tech-spec)

---

### 📚 Phase 9 : Composition Avancée (1 semaine)

**📖 Lecture recommandée** :

- https://react.dev/learn/thinking-in-react
- Date manipulation avec `date-fns` ou natif

**🎯 Objectif** : Navigation semaines, skills avancés, validation.

**✅ Tasks** :

- [ ] Task 9.1.1-9.1.3 : Navigation semaines
- [ ] Task 9.2.1-9.2.3 : Système de skills
- [ ] Task 9.3.1-9.3.2 : Validation & alertes

**🧪 Acceptance Criteria** :

- [ ] AC 9.1-9.3 (voir tech-spec)

---

## 📘 FUTUR : TypeScript (Phase 10)

**📖 Lecture recommandée** :

- https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
- https://react.dev/learn/typescript

**🎯 Objectif** : Migrer l'app en TypeScript.

**✅ Tasks (à détailler)** :

- [ ] Setup TypeScript + Vite
- [ ] Typer les Data Models
- [ ] Typer les Custom Hooks
- [ ] Typer les Composants

---

## 🗄️ FUTUR : Backend (Phases 11-12)

**📖 Lecture recommandée** :

- https://hono.dev/docs/getting-started/nodejs
- https://orm.drizzle.team/docs/get-started-postgresql

**🎯 Objectif** : API REST + Base de données.

**Architecture cible** :

```
React (TS) ←→ Hono API (TS) ←→ PostgreSQL
```

---

## 🚀 FUTUR : Production (Phase 13+)

- Auth (sessions/JWT)
- Deploy (Vercel + Railway)
- Monétisation (Freemium)

---

## 📁 Fichiers Importants

| Fichier                                                                       | Description                        |
| ----------------------------------------------------------------------------- | ---------------------------------- |
| `_bmad-output/implementation-artifacts/tech-spec-chef-planning.md`            | Tech-spec V2 (détails phases 7-9+) |
| `_bmad-output/implementation-artifacts/tech-spec-chef-planning-v1-archive.md` | Archive phases 0-6 détaillées      |
| `.github/copilot-instructions.md`                                             | Instructions pour Copilot          |
| `quiz-react-phases-0-3.md`                                                    | Quiz validation phases 0-3         |
| `quiz-react-phases-4-6.md`                                                    | Quiz validation phases 4-6         |

---

## 🎓 Stratégie d'Apprentissage

**Just-In-Time Learning** :

1. Lire la doc juste avant chaque phase
2. Coder avec guidage socratique (IA)
3. Quiz de validation après chaque groupe de phases

**Prochaine étape** : Phase 7 - Lifting State Up

---

## ⌨️ Raccourcis VS Code à Apprendre

> **Méthode** : Apprendre 2-3 raccourcis par semaine, pas tous d'un coup !

### 🔥 Priorité 1 — Les Essentiels

| Raccourci           | Action                                                | Appris ? |
| ------------------- | ----------------------------------------------------- | -------- |
| `Ctrl + D`          | Sélectionner le mot suivant identique (multi-curseur) | ⬜       |
| `Ctrl + Shift + K`  | Supprimer la ligne entière                            | ⬜       |
| `Alt + ↑/↓`         | Déplacer la ligne vers le haut/bas                    | ⬜       |
| `Shift + Alt + ↑/↓` | Dupliquer la ligne                                    | ⬜       |
| `Ctrl + /`          | Commenter/décommenter                                 | ⬜       |
| `Ctrl + P`          | Ouvrir un fichier rapidement par nom                  | ⬜       |
| `Ctrl + Shift + P`  | Palette de commandes                                  | ⬜       |
| `Ctrl + Space`      | Autocomplétion / suggestions                          | ⬜       |
| `F2`                | Renommer un symbole partout                           | ⬜       |
| `Ctrl + .`          | Quick Fix (corrections automatiques)                  | ⬜       |

### 🎯 Priorité 2 — Navigation & Édition

| Raccourci                | Action                                        | Appris ? |
| ------------------------ | --------------------------------------------- | -------- |
| `Ctrl + clic`            | Aller à la définition d'un composant/fonction | ⬜       |
| `Alt + clic`             | Multi-curseur (éditer plusieurs endroits)     | ⬜       |
| `Ctrl + Shift + F`       | Rechercher dans tout le projet                | ⬜       |
| `Ctrl + B`               | Toggle sidebar                                | ⬜       |
| `Ctrl + Tab`             | Naviguer entre fichiers ouverts               | ⬜       |
| `Ctrl + G`               | Aller à une ligne précise                     | ⬜       |
| `Ctrl + Z` / `Ctrl + Y`  | Undo / Redo                                   | ⬜       |
| `Ctrl + Shift + [` / `]` | Plier/déplier un bloc de code                 | ⬜       |

### 💡 Priorité 3 — Emmet (intégré, pour JSX)

> Dans un fichier JSX, tape puis **Tab** :

| Tape            | Résultat                            |
| --------------- | ----------------------------------- |
| `div.container` | `<div className="container"></div>` |
| `ul>li*3`       | 3 `<li>` dans un `<ul>`             |
| `button.btn`    | `<button className="btn"></button>` |
| `div>p+span`    | `<div><p></p><span></span></div>`   |

---

_Dernière mise à jour : 2026-02-03_
