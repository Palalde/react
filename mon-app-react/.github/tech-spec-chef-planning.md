---
title: ChefPlanning - Tech Spec
updated: 2026-02-17
currentPhase: 9
completedPhases: [0,1,2,3,4,5,6,7,8]
stack: [React 19.2, Vite 7, TailwindCSS 4, localStorage]
future: [TypeScript, Hono, PostgreSQL]
---

# Tech-Spec: ChefPlanning

## Phases 0-8 : COMPLETEES

Phases 0-6 (MVP) : Setup, JSX, Props, useState, Listes, CRUD, useEffect, localStorage, ThemeToggle.
Phase 7 : Lifting State Up  assignments centralisees dans App.jsx, click-to-assign, calcul heures.
Phase 8 : Custom Hooks  useEmployees, useShifts, useAssignments, useHoursCalculator (deprecated since 9.1).

---

## PHASE 9 : Composition Avancee + Refonte UI (EN COURS)

### Repartition

| Type | Qui | Methode |
|------|-----|---------|
| Tailwind/responsive | Mentor (complet) | Paul valide visuellement |
| Logique React | Paul | Socratique (questions, hints) |
| Mix | Collaboration | Mentor = styling, Paul = logique |

### Story 9.1 : Refonte Layout (DONE)

- PlanningTable : tableau HTML Employee x Jour (AM/PM), scroll horizontal, colonne employee sticky
- EmployeeRow : 2 sous-lignes AM/PM avec renderDayCells() factorise
- PlanningCell : cellule vide cliquable ou shift assigne
- App.jsx : pleine largeur, plus de sidebar, CRUD employes via bouton + Modal
- Nettoyage : supprime PlanningGrid, DayColumn, AssignmentCard, AssignmentForm, Card, useHoursCalculator

### Story 9.2 : Click-to-Assign (TODO)

- Task 9.2.1 : Clic cellule AM vide -> assigne shift matin ; PM -> shift aprem
- Task 9.2.2 : Clic cellule remplie -> modal editer/supprimer

### Story 9.3 : Shifts CRUD (TODO)

- Task 9.3.1 : Transformer useShifts en hook avec state + localStorage (meme pattern que useEmployees)
- Task 9.3.2 : ShiftForm  formulaire creation/edition (nom, horaires, type, couleur)
- Task 9.3.3 : ShiftManager  UI gestion des shifts (liste + CRUD)

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

## PHASE 10 : TypeScript (A VENIR)

- Setup TS + Vite
- Typer Data Models (Employee, Shift, Assignment)
- Typer Custom Hooks
- Typer Composants UI + Features

## PHASES 11-12 : Backend (A VENIR)

Architecture : React (TS) <-> Hono API (TS) <-> SQLite/PostgreSQL
- Phase 11 : API REST (Hono + Node.js), migration localStorage -> API
- Phase 12 : Database (SQLite dev, PostgreSQL prod, Drizzle ORM)

## PHASE 13+ : Production

Auth, Deploy (Vercel + Railway), Monetisation (Freemium SaaS)

---

## Reference : Data Models

```javascript
// Employee
{ id, name, color, weeklyMinutes, skills: [] }

// Shift (DEFAULT_SHIFTS)
{ id, name, startTime, endTime, hours, colorClass }

// Assignment
{ id, employeeId, day, shiftId, weekOf? }
```

## Reference : Design System

Couleurs dans index.css via CSS vars. Classes : bg-bg-primary, text-text-primary, border-border, bg-accent, bg-shift-matin/aprem/journee, text-danger. Pas de dark: variants.

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
  utils/             generateId, colorUtils, timeUtils (getEmployeeHours)
  constants/         days.js, shifts.js
```