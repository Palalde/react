---
title: ChefPlanning - Tech Spec
updated: 2026-02-18
currentPhase: 9
completedPhases: [0, 1, 2, 3, 4, 5, 6, 7, 8]
stack: [React 19.2, Vite 7, TailwindCSS 4, localStorage]
future: [TypeScript, Hono, PostgreSQL]
---

# Tech-Spec: ChefPlanning

## Phases 0-8 : COMPLETEES

Phases 0-6 (MVP) : Setup, JSX, Props, useState, Listes, CRUD, useEffect, localStorage, ThemeToggle.
Phase 7 : Lifting State Up assignments centralisees dans App.jsx, click-to-assign, calcul heures.
Phase 8 : Custom Hooks useEmployees, useShifts, useAssignments, useHoursCalculator (deprecated since 9.1).

---

## PHASE 9 : Composition Avancee + Refonte UI (EN COURS)

### Repartition

| Type                | Qui              | Methode                          |
| ------------------- | ---------------- | -------------------------------- |
| Tailwind/responsive | Mentor (complet) | Paul valide visuellement         |
| Logique React       | Paul             | Socratique (questions, hints)    |
| Mix                 | Collaboration    | Mentor = styling, Paul = logique |

### Story 9.1 : Refonte Layout (DONE)

- PlanningTable : tableau HTML Employee x Jour (AM/PM), scroll horizontal, colonne employee sticky
- EmployeeRow : 2 sous-lignes AM/PM avec renderDayCells() factorise
- PlanningCell : cellule vide cliquable ou shift assigne
- App.jsx : pleine largeur, plus de sidebar, CRUD employes via bouton + Modal
- Nettoyage : supprime PlanningGrid, DayColumn, AssignmentCard, AssignmentForm, Card, useHoursCalculator

### Story 9.2 : Click-to-Assign (DONE)

- Task 9.2.1 : Clic cellule AM vide -> assigne shift matin ; PM -> shift aprem (DONE)
- Task 9.2.2 : Clic cellule remplie -> modal editer/supprimer (DONE)
- Gestion conflits : conflictMap dans updateAssignment (matin<->journee, aprem<->journee, doublons)
- Cellules affichent horaires (startTime-endTime) au lieu des noms de shifts
- EmployeeRow : barre laterale couleur employe (w-1) + fond teinte (~3% opacite), pastille supprimee
- Shift model : ajout champ `type` (am/pm/full, futur: split)
- getEmployeeHours refactore : split AM/PM base sur shift.type + midi (timeToMinutes)
- selectedAssignment state dans App.jsx (null = modal ferme, objet = modal ouvert)

### Story 9.3 : Shifts CRUD (EN COURS)

- Refacto pre-9.3 : shift model simplifie (retire hours/colorClass, derives via utils), type split implemente
- Nouveaux utils : getShiftColorClass(type), calcShiftMinutes(shift) dans shiftUtils.js
- DEFAULT_SHIFTS : 4 shifts (matin, aprem, journee, coupe) sans hours/colorClass
- getEmployeeHours : support type split (AM=start→breakStart, PM=breakEnd→end)
- conflictMap : split conflicte avec tous les types (comme journee)
- PlanningCell : affichage split (AM=start-breakStart, PM=breakEnd-end), couleur derivee du type
- EmployeeRow : split matche AM+PM (comme journee)
- Task 9.3.1 : Transformer useShifts en hook avec state + localStorage (DONE)
- Task 9.3.2 : ShiftForm formulaire creation/edition (nom, horaires, type, couleur)
- Task 9.3.3 : ShiftManager UI gestion des shifts (liste + CRUD)

### Story 9.4 : Navigation Semaines (TODO)

- Task 9.4.1 : useWeekNavigation hook (currentWeek, goNext, goPrev, goToday)
- Task 9.4.2 : WeekNavigator composant (boutons + affichage semaine)
- Task 9.4.3 : Filtrer assignments par weekOf (format ISO du lundi)

### Acceptance Criteria Phase 9

- AC 9.1 : Assignations AM/PM sur 2 lignes alignees avec les jours (DONE)
- AC 9.2 : Clic cellule AM vide -> shift matin assigne
- AC 9.3 : Gestionnaire shifts : creer/editer/supprimer
- AC 9.4 : Bouton ">" -> affiche semaine +1
- AC 9.5 : Shift "Journee" -> cellules AM+PM visuellement connectees

---

## PHASE 9.5 : useReducer + Context (MINI-PHASE, A VENIR)

- Refactorer un hook complexe (useAssignments) avec useReducer
- Creer un AppContext pour partager state global (employees, shifts, assignments)
- Comprendre quand useState vs useReducer vs Context
- Preparer la transition vers Zustand (phase 13)

## PHASE 10 : TypeScript + React Router (A VENIR)

- Setup TS + Vite
- Typer Data Models (Employee, Shift, Assignment)
- Typer Custom Hooks + Composants
- React Router : pages Planning, Settings, Login (future)
- Navigation multi-pages, routes protegees (prep auth)

## PHASE 11 : Backend API (A VENIR)

Architecture : React (TS) <-> Hono API (TS) <-> PostgreSQL

- API REST (Hono + Node.js)
- Migration localStorage -> API (fetch/axios)
- Loading states, error handling, optimistic updates

## PHASE 12 : Database + Tanstack Query (A VENIR)

- PostgreSQL + Drizzle ORM
- Tanstack Query (React Query) : cache, refetch, mutations
- Remplace useEffect+useState pour les appels API

## PHASE 13 : Auth + Zustand (A VENIR)

- Auth (JWT ou session-based)
- Zustand pour state global (user, settings, notifications)
- Remplace Context pour le state complexe cross-app

## PHASE 14 : Deploy + Radix UI (A VENIR)

- Deploy : Vercel (front) + Railway (back)
- Radix UI : composants headless accessibles (Dialog, Dropdown, Tooltip)
- Remplace les composants UI maison par des composants accessibles pro
- Monetisation (Freemium SaaS)

## PHASE 15 : Testing (A VENIR)

- Vitest : tests unitaires (hooks, utils)
- React Testing Library : tests composants
- Playwright ou Cypress : tests E2E (optionnel)

---

## Git Workflow

### Branching Strategy

- Branche `main` = version stable, toujours fonctionnelle
- 1 branche par Story : `feature/X.Y-description`
- Merge dans `main` uniquement apres validation de la Story
- Nettoyage des branches mergees

### Conventional Commits

Format : `type(scope): description` (anglais)
Types : `feat`, `fix`, `refactor`, `style`, `chore`, `docs`

### Versioning (SemVer `0.MINOR.PATCH`)

| Version | Phase | Description                      |
| ------- | ----- | -------------------------------- |
| `0.1.0` | 0-8   | MVP + custom hooks               |
| `0.2.0` | 9     | Composition avancee + refonte UI |
| `0.3.0` | 9.5   | useReducer + Context             |
| `0.4.0` | 10    | TypeScript + Router              |
| `1.0.0` | 14    | Premier deploy public            |

Version actuelle : `0.1.0` (Phases 0-8 completees, Phase 9 en cours)

---

## Reference : Data Models

```javascript
// Employee
{ id, name, color, weeklyMinutes, skills: [] }

// Shift (DEFAULT_SHIFTS) — hours et colorClass sont derives
{ id, name, type, startTime, endTime }
// type: 'am' | 'pm' | 'full' | 'split'
// Si split : { ...shift, breakStart: "12:00", breakEnd: "14:00" }
// getShiftColorClass(type) → classes Tailwind
// calcShiftMinutes(shift) → duree en minutes (soustrait pause si split)

// Assignment
{ id, employeeId, day, shiftId, weekOf? }
```

## Reference : Design System

Couleurs dans index.css via CSS vars. Classes : bg-bg-primary, text-text-primary, border-border, bg-accent, bg-shift-matin/aprem/journee/coupe, text-danger. Pas de dark: variants.

## Reference : Structure

```
src/
  components/ui/     Button, Badge, Modal, Input, HoursInput, ColorInput, ThemeToggle
  components/layout/ Header, Container
  features/employees/  EmployeeCard, EmployeeList, EmployeeForm, useEmployees
  features/shifts/     ShiftSelector, useShifts
  features/assignments/ useAssignments
  features/planning/   PlanningTable, EmployeeRow, PlanningCell
  hooks/             useLocalStorage, useTheme
  utils/             generateId, colorUtils, timeUtils, shiftUtils (getShiftColorClass, calcShiftMinutes)
  constants/         days.js, shifts.js
```
