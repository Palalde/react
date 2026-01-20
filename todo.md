# 📋 ChefPlanning - Plan d'Apprentissage React

## 🎯 Stratégie : Just-In-Time Learning

**Principe** : Lire roadmap.sh juste avant chaque phase → Appliquer immédiatement

---

## 📚 Phase 0 : Setup (30 min)

### 📖 Lecture

- **Aucune lecture requise** — C'est de la config technique

### ✅ Actions

1. `npm run dev` → Vérifier que le projet démarre
2. Faire **Task 0.1** : Config Vite + absolute imports `@/`
3. Faire **Task 0.2** : Variables CSS Light/Dark Mode
4. Tester en ajoutant `class="dark"` sur `<html>`

---

## 📚 Phase 1 : JSX & Composants (1h)

### 📖 Lecture (15 min)

- https://roadmap.sh/react → **Components**
- https://roadmap.sh/react → **JSX**

### ✅ Actions

1. Lire la section roadmap.sh
2. Faire **Story 1.1** : Header + Container (avec l'IA en mode socratique)
3. Coder ton implémentation
4. Relire rapidement la section (consolidation)

---

## 📚 Phase 2 : Props (1h)

### 📖 Lecture (10 min)

- https://roadmap.sh/react → **Props**

### ✅ Actions

1. Lire la section roadmap.sh
2. Faire **Story 2.1** : Button, Card, Badge
3. Faire **Story 2.2** : EmployeeCard avec props
4. Tester l'affichage avec données mock

---

## 📚 Phase 3 : State (1h30)

### 📖 Lecture (15 min)

- https://roadmap.sh/react → **State Management** → **useState**

### ✅ Actions

1. Lire la section roadmap.sh
2. Faire **Story 3.1** : EmployeeList avec useState
3. Tester ajout/suppression en mémoire

---

## 📚 Phase 4 : Listes & Keys (1h)

### 📖 Lecture (10 min)

- https://roadmap.sh/react → **Rendering** → **Lists**
- https://roadmap.sh/react → **Keys**

### ✅ Actions

1. Lire la section roadmap.sh
2. Faire **Story 4.1** : PlanningGrid avec 7 colonnes
3. Tester que les keys fonctionnent correctement

---

## 📚 Phase 5 : Events (2h)

### 📖 Lecture (15 min)

- https://roadmap.sh/react → **Events**
- https://roadmap.sh/react → **Controlled Components**

### ✅ Actions

1. Lire la section roadmap.sh
2. Faire **Story 5.1** : CRUD Employés complet (Input, Modal, Form)
3. Faire **Story 5.2** : Presets horaires (shifts)
4. Tester add/edit/delete employé

---

## 📚 Phase 6 : useEffect & Persistence (2h)

### 📖 Lecture (20 min)

- https://roadmap.sh/react → **useEffect**
- https://roadmap.sh/react → **Side Effects**

### ✅ Actions

1. Lire la section roadmap.sh
2. Faire **Story 6.1** : Hook useLocalStorage
3. Faire **Story 6.2** : useTheme + ThemeToggle
4. Tester que les données persistent au refresh
5. Tester le switch Light/Dark mode

---

## 🎉 FIN MVP (Phases 0-6)

✅ À ce stade, tu as une app fonctionnelle avec :

- Layout + Header + ThemeToggle
- CRUD Employés avec persistance
- Grille Planning 7 jours
- Light/Dark Mode

---

## 🚀 Phase 7+ : V2 (Optionnel - Plus tard)

### 📖 Lecture (30 min)

- https://roadmap.sh/react → **Lifting State**
- https://roadmap.sh/react → **Custom Hooks**
- https://roadmap.sh/react → **Composition**

### ✅ Actions

- **Phase 7** : Assignations + Lifting State
- **Phase 8** : Refactor avec custom hooks (useEmployees, useAssignments...)
- **Phase 9** : Skills avancés + Validation

---

## 📌 Checklist Quotidienne

Avant chaque session :

- [ ] Identifier la phase en cours
- [ ] Lire la section roadmap.sh correspondante (10-20 min)
- [ ] Faire la story avec l'IA (mode socratique)
- [ ] Coder ton implémentation
- [ ] Tester dans le browser
- [ ] Commit Git

---

## 🔗 Liens Utiles

| Ressource            | URL                                                                |
| -------------------- | ------------------------------------------------------------------ |
| Roadmap React        | https://roadmap.sh/react                                           |
| Tech-Spec            | `_bmad-output/implementation-artifacts/tech-spec-chef-planning.md` |
| Copilot Instructions | `.github/copilot-instructions.md`                                  |

---

**🎯 Objectif** : Finir le MVP (Phases 0-6) en 1 semaine à raison de 1-2h/jour
