# 📋 ChefPlanning - Plan d'Apprentissage Fullstack

## 🎯 Vision

**Objectif Triple** :

1. 📚 Devenir développeur fullstack dual-stack (React/TS + Python/FastAPI)
2. 🚀 Déployer ChefPlanning en production
3. 💰 Monétisation SaaS intelligent (algo + LLM local)

---

## ➡️ Prochaine étape : Phase 10A — TypeScript + Zod

---

## ✅ COMPLÉTÉ : Phases 0-8

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
| 7     | Lifting State Up          | ✅     |
| 8     | Custom Hooks Avancés      | ✅     |

**Quiz validés** : `quiz-react-phases-0-3.md` + `quiz-react-phases-4-6.md`
**Audit post-Phase 8** : bugs corrigés, BMAD supprimé.

---

## ✅ COMPLÉTÉ : Phase 9 (Composition Avancée + Refonte UI)

> Tableau Employee×Jour AM/PM, click-to-assign conflictMap, shifts CRUD, navigation semaines, useReducer + AppContext + useMemo/useCallback. Details dans `tech-spec-archive.md`.

---

## 📘 Phase 10A : TypeScript + Zod (2 semaines)

**📖 Lecture recommandée** :

- https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
- https://react.dev/learn/typescript
- https://zod.dev — Zod documentation
- https://roadmap.sh/typescript

**🎯 Objectif** : Typer l'app, valider les données avec Zod.

**🤖 Outil IA** : Copilot autocomplete (aide beaucoup sur les types TS)

**✅ Tasks** :

- [ ] **Story 10.1 : TypeScript**
  - [ ] Task 10.1.1 : Setup TS + Vite (tsconfig, renommer .jsx → .tsx)
  - [ ] Task 10.1.2 : Typer les Data Models (Employee, Shift, Assignment — interfaces)
  - [ ] Task 10.1.3 : Typer les Custom Hooks (params, return types)
  - [ ] Task 10.1.4 : Typer les Composants (Props interfaces, event handlers)
  - [ ] Task 10.1.5 : Typer les utilitaires et constantes
- [ ] **Story 10.2 : Zod + React Hook Form (validation)**
  - [ ] Task 10.2.1 : Installer Zod, créer schemas (Employee, Shift, Assignment)
  - [ ] Task 10.2.2 : Valider les formulaires avec Zod (EmployeeForm, ShiftForm)
  - [ ] Task 10.2.3 : Inférence de types depuis schemas (z.infer)
  - [ ] Task 10.2.4 : Installer React Hook Form + `@hookform/resolvers`
  - [ ] Task 10.2.5 : Refactorer les formulaires avec RHF (register, handleSubmit, errors)
  - [ ] Task 10.2.6 : Découvrir `useRef` via RHF (accès aux inputs sans re-render)

**🧪 Acceptance Criteria Phase 10A** :

- [ ] AC 10.1 : 0 erreurs TypeScript (strict mode)
- [ ] AC 10.2 : Formulaires validés avec Zod (messages d'erreur)

---

## 📘 Phase 10B : Vitest + React Router + Git avancé (2 semaines)

**📖 Lecture recommandée** :

- https://vitest.dev/guide/ — Vitest getting started
- https://reactrouter.com/en/main/start/tutorial — React Router

**🎯 Objectif** : Tester les utils/hooks, routing multi-pages, SQL théorique.

**🤖 Outil IA** : Copilot autocomplete

**✅ Tasks** :

- [ ] **Story 10.3 : Vitest (premiers tests)**
  - [ ] Task 10.3.1 : Setup Vitest + config
  - [ ] Task 10.3.2 : Tests unitaires utils (timeUtils, shiftUtils, colorUtils)
  - [ ] Task 10.3.3 : Tests hooks avec renderHook (useWeekNav, useLocalStorage)
- [ ] **Story 10.4 : React Router**
  - [ ] Task 10.4.1 : Setup React Router, créer pages (Planning, Settings)
  - [ ] Task 10.4.2 : Layout partagé + navigation
  - [ ] Task 10.4.3 : Lazy loading (React.lazy + Suspense)
- [ ] **Story 10.5 : Git avancé**
  - [ ] Task 10.5.1 : Apprendre rebase vs merge, cherry-pick, stash
  - [ ] Task 10.5.2 : Pratiquer résolution de conflits
- [ ] **Story 10.6 : SQL théorique (préparation Phase 12)**
  - [ ] Task 10.6.1 : Concepts : tables, relations, clés primaires/étrangères, normalisation
  - [ ] Task 10.6.2 : Exercices SQL basics (SELECT, INSERT, JOIN) avec un outil en ligne

**🧪 Acceptance Criteria Phase 10B** :

- [ ] AC 10.3 : Tests verts pour utils + hooks
- [ ] AC 10.4 : Navigation entre pages Planning et Settings
- [ ] AC 10.6 : Comprendre un schéma relationnel (employees → assignments ← shifts)

---

## 🖥️ Phase 11 : Backend API + Hono (2-3 semaines)

**📖 Lecture recommandée** :

- https://hono.dev/docs/getting-started/nodejs
- https://roadmap.sh/backend — Backend Developer Roadmap
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
- https://pnpm.io/workspaces — Monorepo avec pnpm

**🎯 Objectif** : Créer l'API REST, comprendre HTTP, architecture client-serveur.

**🤖 Outil IA** : **Cursor IDE** — navigation multi-fichiers front/back

**Architecture** :

```
packages/
  frontend/  → React (TS) + Vite
  backend/   → Hono API (TS) + Node.js
```

**✅ Tasks** :

- [ ] **Story 11.1 : Setup Backend**
  - [ ] Task 11.1.1 : Monorepo pnpm workspaces
  - [ ] Task 11.1.2 : Hono + Node.js + TypeScript setup
  - [ ] Task 11.1.3 : Passer à `bun` comme package manager
  - [ ] Task 11.1.4 : `.env` + `.env.example` + `.gitignore`
- [ ] **Story 11.2 : HTTP & REST en profondeur**
  - [ ] Task 11.2.1 : Comprendre méthodes HTTP, status codes, headers
  - [ ] Task 11.2.2 : Configurer CORS (front ↔ back)
- [ ] **Story 11.3 : Routes API CRUD**
  - [ ] Task 11.3.1 : Routes /api/employees (GET, POST, PUT, DELETE)
  - [ ] Task 11.3.2 : Routes /api/shifts
  - [ ] Task 11.3.3 : Routes /api/assignments
  - [ ] Task 11.3.4 : Middlewares (cors, logger, error handler)
  - [ ] Task 11.3.5 : Validation requêtes avec Zod (schemas partagés)
- [ ] **Story 11.4 : Migration Frontend**
  - [ ] Task 11.4.1 : Remplacer localStorage par fetch vers API
  - [ ] Task 11.4.2 : Loading states + error states dans composants
  - [ ] Task 11.4.3 : Optimistic updates
- [ ] **Story 11.5 : Sécurité basics**
  - [ ] Task 11.5.1 : Ne jamais exposer de secrets côté client
  - [ ] Task 11.5.2 : Sanitization des inputs + rate limiting basics

**🧪 Acceptance Criteria Phase 11** :

- [ ] AC 11.1 : API répond sur localhost:3001
- [ ] AC 11.2 : Frontend communique avec l'API (plus de localStorage)
- [ ] AC 11.3 : CRUD complet fonctionne via API

---

## 🗄️ Phase 12 : Database + Tanstack Query + Docker (2-3 semaines)

**📖 Lecture recommandée** :

- https://orm.drizzle.team/docs/get-started-postgresql
- https://tanstack.com/query/latest/docs/react/overview
- https://docs.docker.com/get-started/
- https://roadmap.sh/postgresql-dba (basics seulement)

**🎯 Objectif** : Persister les données, cache intelligent, containerisation.

**🤖 Outil IA** : Cursor agent mode — scaffolding de patterns connus

**✅ Tasks** :

- [ ] **Story 12.1 : Docker**
  - [ ] Task 12.1.1 : Installer Docker Desktop
  - [ ] Task 12.1.2 : docker-compose.yml (PostgreSQL container)
  - [ ] Task 12.1.3 : docker-compose up/down workflow
- [ ] **Story 12.2 : PostgreSQL + Drizzle**
  - [ ] Task 12.2.1 : SQL basics (CREATE TABLE, SELECT, INSERT, JOIN)
  - [ ] Task 12.2.2 : Drizzle schema + migrations
  - [ ] Task 12.2.3 : Remplacer in-memory par PostgreSQL dans l'API
  - [ ] Task 12.2.4 : Seeds (données initiales dev)
- [ ] **Story 12.3 : Tanstack Query**
  - [ ] Task 12.3.1 : Setup + useQuery pour GET
  - [ ] Task 12.3.2 : useMutation pour POST/PUT/DELETE
  - [ ] Task 12.3.3 : Cache, invalidation, optimistic updates
- [ ] **Story 12.4 : Tests API**
  - [ ] Task 12.4.1 : Tests endpoints Hono avec Vitest
  - [ ] Task 12.4.2 : Mock database pour tests

**🧪 Acceptance Criteria Phase 12** :

- [ ] AC 12.1 : `docker-compose up` lance PostgreSQL
- [ ] AC 12.2 : Données persistent après restart serveur
- [ ] AC 12.3 : Frontend utilise Tanstack Query (plus de useEffect pour fetch)

---

## 🔐 Phase 13 : Auth + Zustand + Redis (2-3 semaines)

**📖 Lecture recommandée** :

- https://jwt.io/introduction
- https://zustand-demo.pmnd.rs/ — Zustand docs
- https://redis.io/docs/getting-started/
- https://roadmap.sh/backend → Authentication

**🎯 Objectif** : Sécuriser l'app, state global pro, cache serveur.

**🤖 Outil IA** : **Claude Code** (terminal agent) — refactoring large, config generation

**✅ Tasks** :

- [ ] **Story 13.1 : Auth JWT**
  - [ ] Task 13.1.1 : Concepts auth (authentication vs authorization)
  - [ ] Task 13.1.2 : Login/Register pages + API routes
  - [ ] Task 13.1.3 : JWT tokens (access + refresh)
  - [ ] Task 13.1.4 : Middleware auth Hono (routes protégées)
  - [ ] Task 13.1.5 : Stockage tokens (httpOnly cookies)
- [ ] **Story 13.2 : Zustand**
  - [ ] Task 13.2.1 : Remplacer Context par Zustand (useAuthStore)
  - [ ] Task 13.2.2 : useUIStore (modals, notifications)
  - [ ] Task 13.2.3 : Persist middleware + devtools
- [ ] **Story 13.3 : Redis**
  - [ ] Task 13.3.1 : Redis dans docker-compose
  - [ ] Task 13.3.2 : Sessions + rate limiting
  - [ ] Task 13.3.3 : Invalidation de cache

**🧪 Acceptance Criteria Phase 13** :

- [ ] AC 13.1 : Login/Register fonctionnel
- [ ] AC 13.2 : Routes API protégées (401 sans token)
- [ ] AC 13.3 : State global via Zustand (plus de Context)

---

## 🚀 Phase 14 : Deploy + CI/CD + Radix UI + Bun (2-3 semaines)

**📖 Lecture recommandée** :

- https://docs.github.com/en/actions
- https://vercel.com/docs
- https://bun.sh/docs
- https://www.radix-ui.com/primitives/docs/overview/introduction
- https://web.dev/performance/

**🎯 Objectif** : Mettre en production, accessibilité, migration Bun.

**🤖 Outil IA** : Claude Code agent — CI/CD configs, migration automatisée, **vibe coding maîtrisé**

**✅ Tasks** :

- [ ] **Story 14.1 : CI/CD**
  - [ ] Task 14.1.1 : GitHub Actions (lint + type-check + tests)
  - [ ] Task 14.1.2 : Build verification automatique
  - [ ] Task 14.1.3 : Branch protection rules
- [ ] **Story 14.2 : Deploy**
  - [ ] Task 14.2.1 : Frontend sur Vercel
  - [ ] Task 14.2.2 : Backend sur Railway/Fly.io
  - [ ] Task 14.2.3 : Variables d'environnement production
  - [ ] Task 14.2.4 : Domaine custom + HTTPS
- [ ] **Story 14.3 : Migration Bun runtime**
  - [ ] Task 14.3.1 : Remplacer Node.js par Bun pour le backend
  - [ ] Task 14.3.2 : Benchmark avant/après
  - [ ] Task 14.3.3 : Frontend reste sur Vite (confirmer)
- [ ] **Story 14.4 : Radix UI + Accessibilité**
  - [ ] Task 14.4.1 : Remplacer Modal, Dropdown par Radix primitives
  - [ ] Task 14.4.2 : ARIA, keyboard navigation
  - [ ] Task 14.4.3 : Lighthouse audit
- [ ] **Story 14.5 : Performance**
  - [ ] Task 14.5.1 : Bundle analysis
  - [ ] Task 14.5.2 : Core Web Vitals optimization
- [ ] **Story 14.6 : Monitoring & Observabilité**
  - [ ] Task 14.6.1 : Sentry (error tracking frontend + backend)
  - [ ] Task 14.6.2 : Structured logging backend (pino/winston, JSON logs)
  - [ ] Task 14.6.3 : Health check endpoint + uptime monitoring
- [ ] **Story 14.7 : Monétisation (optionnel)**
  - [ ] Task 14.7.1 : Freemium model (features gratuites vs payantes)
  - [ ] Task 14.7.2 : Stripe integration basics
  - [ ] Task 14.7.3 : Landing page

**🧪 Acceptance Criteria Phase 14** :

- [ ] AC 14.1 : App accessible sur une URL publique
- [ ] AC 14.2 : CI/CD : tests + build automatiques à chaque push
- [ ] AC 14.3 : Backend tourne sur Bun
- [ ] AC 14.4 : Lighthouse score > 90 (perf + a11y)
- [ ] AC 14.5 : Sentry capte les erreurs en prod (dashboard visible)

---

## 🧪 Phase 15 : E2E Testing + Polish (1-2 semaines)

> Tests unitaires (utils, hooks) et tests API déjà couverts en Phases 10 et 12.

**📖 Lecture recommandée** :

- https://playwright.dev/docs/intro
- https://testing-library.com/docs/react-testing-library/intro/

**🎯 Objectif** : Tests end-to-end, qualité production.

**🤖 Outil IA** : **Multi-agent vibe coding** — Cursor + Claude Code, Paul orchestre

**✅ Tasks** :

- [ ] **Story 15.1 : Playwright (E2E)**
  - [ ] Task 15.1.1 : Setup Playwright
  - [ ] Task 15.1.2 : Tests parcours utilisateur complet
  - [ ] Task 15.1.3 : Tests responsive (mobile, tablet, desktop)
  - [ ] Task 15.1.4 : E2E dans GitHub Actions
- [ ] **Story 15.2 : React Testing Library**
  - [ ] Task 15.2.1 : Tests composants avec interactions
  - [ ] Task 15.2.2 : Tests formulaires complets
- [ ] **Story 15.3 : Polish**
  - [ ] Task 15.3.1 : Error boundaries
  - [ ] Task 15.3.2 : SEO meta tags
  - [ ] Task 15.3.3 : README documentation

**🧪 Acceptance Criteria Phase 15** :

- [ ] AC 15.1 : E2E tests passent en CI
- [ ] AC 15.2 : App production-ready 🎉

---

## 🤖 Phase 16 : AI Integration (5 semaines)

**📖 Lecture recommandée** :

- https://platform.openai.com/docs/guides/function-calling — Function Calling
- https://ollama.com/ — Ollama (LLM local)
- https://github.com/pgvector/pgvector — pgvector
- https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events — SSE
- https://simonwillison.net/2025/prompt-injection/ — Prompt injection

**🎯 Objectif** : Rendre le SaaS intelligent — génération de planning par algo, assistance LLM local, historique RAG.

**Principe clé** : Le LLM est une **interface** (comprend le chef), pas le **moteur** (l'algo génère le planning). Le SaaS reste 100% utilisable sans le chat.

**🤖 Outil IA** : **Multi-agent + Ollama** — Cursor + Claude Code, Paul intègre l'IA dans le produit

**Architecture** :

```
Chef (navigateur)
  ├── Planning UI (tableau — tout faisable à la main)
  └── Chat Panel (side panel style Copilot)
              │
        Hono API (backend TS — orchestrateur)
        ├── Planning Engine (micro-service Python/FastAPI + OR-Tools)
        ├── Ollama (LLM local — Mistral 7B)
        ├── pgvector (historique — dans PostgreSQL)
        └── Function Calling (NL → actions)
```

> 🐍 **1er contact Python** : Paul apprend Python via le Planning Engine (Story 16.2)

**✅ Tasks** :

- [ ] **Story 16.1 : Système de contraintes (pur TypeScript, 0 IA)**
  - [ ] Task 16.1.1 : Data Models (EmployeeAvailability, SkillRequirement, AffinityRule, WeeklyException, EmployeePreference)
  - [ ] Task 16.1.2 : API routes CRUD pour chaque model
  - [ ] Task 16.1.3 : UI Settings (React + Radix) pour gérer les contraintes
- [ ] **Story 16.2 : Planning Engine — micro-service Python/FastAPI (1er contact Python, 0 IA)**
  - [ ] Task 16.2.1 : Apprendre les bases Python (syntaxe, fonctions, classes, list comprehensions)
  - [ ] Task 16.2.2 : Setup FastAPI micro-service (packages/engine/) + Pydantic models
  - [ ] Task 16.2.3 : Google OR-Tools (constraint programming, algo de scoring)
  - [ ] Task 16.2.4 : Communication Hono → FastAPI (HTTP interne, POST /api/engine/generate)
  - [ ] Task 16.2.5 : Container Docker Python dans docker-compose
  - [ ] Task 16.2.6 : Bouton "Générer" → Hono → FastAPI → OR-Tools → planning proposé
- [ ] **Story 16.3 : LLM API cloud (apprentissage, ~5-10€)**
  - [ ] Task 16.3.1 : Appel API (OpenAI/Anthropic) depuis Hono
  - [ ] Task 16.3.2 : Structured output (JSON) + function calling
  - [ ] Task 16.3.3 : Prompt engineering formel (system prompts, few-shot, temperature)
- [ ] **Story 16.4 : LLM local Ollama (production)**
  - [ ] Task 16.4.1 : Ollama dans Docker (docker-compose)
  - [ ] Task 16.4.2 : Mistral 7B, API compatible OpenAI
  - [ ] Task 16.4.3 : AI safety & guardrails (prompt injection, output validation)
  - [ ] Task 16.4.4 : Benchmark latence/qualité cloud vs local
- [ ] **Story 16.5 : RAG + pgvector (historique intelligent)**
  - [ ] Task 16.5.1 : Extension pgvector dans PostgreSQL
  - [ ] Task 16.5.2 : Embeddings des plannings passés
  - [ ] Task 16.5.3 : Recherche vectorielle (semaines similaires)
  - [ ] Task 16.5.4 : Intégration dans le scoring engine
- [ ] **Story 16.6 : Chat Panel + Function Calling**
  - [ ] Task 16.6.1 : Chat UI side panel (React + Radix)
  - [ ] Task 16.6.2 : SSE streaming (réponse mot par mot)
  - [ ] Task 16.6.3 : Function calling (prompt → LLM → API → résultat visuel)
  - [ ] Task 16.6.4 : Onboarding nouveau user via LLM
  - [ ] Task 16.6.5 : AI UX patterns (confiance, loading IA, human-in-the-loop)

**🧪 Acceptance Criteria Phase 16** :

- [ ] AC 16.1 : Settings de contraintes configurables via UI
- [ ] AC 16.2 : Bouton "Générer" → planning optimal respectant les contraintes
- [ ] AC 16.4 : Fonctionnalité LLM via Ollama local (0 coût)
- [ ] AC 16.5 : Le RAG récupère des plannings similaires
- [ ] AC 16.6 : Le chef tape "Marie est en vacances, génère le planning" → le système exécute

---

## 🐍 Phase 17 : Next.js + Python Fullstack (2-3 semaines)

> Phase 17 n'est PAS obligatoire pour ChefPlanning. C'est un **investissement carrière**.
> Paul a déjà un SaaS déployé — Phase 17 élargit son profil pour le marché.

**📖 Lecture recommandée** :

- https://nextjs.org/docs — Next.js App Router
- https://fastapi.tiangolo.com/ — FastAPI
- https://docs.python.org/3/tutorial/ — Python tutorial officiel
- https://docs.pydantic.dev/latest/ — Pydantic v2
- https://docs.pytest.org/ — pytest

**🎯 Objectif** : Élargir le profil — SSR/RSC (Next.js) + dual-stack Python (FastAPI CRUD).

**🤖 Outil IA** : Multi-agent — Paul maîtrise les outils, focus productivité

**✅ Tasks** :

- [ ] **Story 17.1 : Next.js (SSR & React Server Components)**
  - [ ] Task 17.1.1 : Comprendre SSR vs CSR vs SSG vs RSC
  - [ ] Task 17.1.2 : Recréer 1-2 pages ChefPlanning en Next.js (App Router)
  - [ ] Task 17.1.3 : Server Components + data fetching côté serveur
  - [ ] Task 17.1.4 : SEO dynamique (meta tags, Open Graph, sitemap)
- [ ] **Story 17.2 : Python Fullstack (FastAPI CRUD)**
  - [ ] Task 17.2.1 : Recréer l'API CRUD ChefPlanning en FastAPI
  - [ ] Task 17.2.2 : SQLAlchemy/Tortoise ORM (équivalent Drizzle)
  - [ ] Task 17.2.3 : Auth JWT en Python (même logique Phase 13)
  - [ ] Task 17.2.4 : Tests avec pytest (équivalent Vitest)
  - [ ] Task 17.2.5 : Comparer Hono/TS vs FastAPI/Python (DX, perf, écosystème)
- [ ] **Story 17.3 : Portfolio & Positionnement**
  - [ ] Task 17.3.1 : README pro (screenshots, architecture, stack)
  - [ ] Task 17.3.2 : Profil "React/TS fullstack + Python AI"
  - [ ] Task 17.3.3 : Préparer les réponses techniques entretien

**🧪 Acceptance Criteria Phase 17** :

- [ ] AC 17.1 : Une page ChefPlanning rendue en SSR via Next.js
- [ ] AC 17.2 : API CRUD complète en FastAPI (mêmes endpoints que Hono)
- [ ] AC 17.3 : README pro + repo public prêt pour les recruteurs

---

## 📁 Fichiers Importants

| Fichier                              | Description                         |
| ------------------------------------ | ----------------------------------- |
| `.github/tech-spec-chef-planning.md` | Tech-spec détaillée (mémoire IA)    |
| `.github/copilot-instructions.md`    | Instructions Copilot (mémoire vive) |
| `quiz-react-phases-0-3.md`           | Quiz validation phases 0-3          |
| `quiz-react-phases-4-6.md`           | Quiz validation phases 4-6          |

---

## 🎓 Stratégie d'Apprentissage

**Just-In-Time Learning** :

1. Lire la doc/roadmap.sh juste avant chaque phase
2. Coder avec guidage socratique (IA)
3. Quiz de validation après chaque groupe de phases

**Progression IA** :

| Phase | Outil                | Comment j'apprends                                            |
| ----- | -------------------- | ------------------------------------------------------------- |
| 9-10  | Copilot autocomplete | Je code tout à la main, l'IA aide sur la syntaxe              |
| 11-12 | Cursor IDE           | L'IA m'aide sur le boilerplate backend, j'écris la logique    |
| 13-14 | Claude Code          | J'utilise les agents pour du code que je _comprends_          |
| 15    | Multi-agent          | J'orchestre les outils, vibe coding productif                 |
| 16    | Multi-agent + Ollama | J'intègre l'IA dans le produit, algo + LLM + RAG + **Python** |
| 17    | Multi-agent          | Dual-stack : Next.js SSR + Python FastAPI CRUD                |

**Règle d'or** : je peux laisser l'IA générer du code quand je suis capable de review chaque ligne.

---

## 📝 Référence : Conventional Commits

> Format : `type(scope): description courte en anglais`

| Type       | Quand                                           | Exemple                                        |
| ---------- | ----------------------------------------------- | ---------------------------------------------- |
| `feat`     | Nouvelle fonctionnalité                         | `feat(shifts): add ShiftForm component`        |
| `fix`      | Correction de bug                               | `fix(assignments): resolve AM/PM conflict`     |
| `refactor` | Restructuration sans changement de comportement | `refactor(useShifts): migrate to localStorage` |
| `style`    | Changements visuels/CSS uniquement              | `style(planning): adjust cell padding`         |
| `chore`    | Maintenance, config, dépendances                | `chore: update vite config`                    |
| `docs`     | Documentation                                   | `docs: update tech-spec for story 9.3`         |

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

_Dernière mise à jour : 2026-02-24_
