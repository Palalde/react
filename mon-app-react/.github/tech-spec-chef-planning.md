---
title: ChefPlanning - Tech Spec
updated: 2026-02-25
currentPhase: 10
completedPhases: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
stack: [React 19.2, Vite 7, TailwindCSS 4, localStorage]
future:
  [
    TypeScript,
    Zod,
    Hono,
    PostgreSQL,
    Drizzle,
    Tanstack Query,
    Zustand,
    Bun,
    Docker,
    Radix UI,
    Playwright,
    Sentry,
    Python,
    FastAPI,
    OR-Tools,
    React Hook Form,
    Ollama,
    pgvector,
    Next.js,
  ]
aiTools:
  [
    Copilot (current),
    Cursor (Phase 11),
    Claude Code (Phase 13),
    Ollama (Phase 16),
  ]
---

# Tech-Spec: ChefPlanning

> **Role** : Memoire etendue de l'IA. Consulter pour details d'implementation, historique, phases futures.
> Les references rapides (Data Models, Structure, Design System, Imports) sont dans `copilot-instructions.md`.

## Phases 0-9 : COMPLETEES

Phases 0-6 (MVP) : Setup, JSX, Props, useState, Listes, CRUD, useEffect, localStorage, ThemeToggle.
Phase 7 : Lifting State Up assignments centralisees dans App.jsx, click-to-assign, calcul heures.
Phase 8 : Custom Hooks useEmployees, useShifts, useAssignments, useHoursCalculator (deprecated since 9.1).
Phase 9 : Refonte UI (PlanningTable Employee×Jour AM/PM), click-to-assign conflictMap, shifts CRUD dynamiques, navigation semaines (useWeekNav), useReducer (useLocalReducer + assignmentsReducer), AppContext (AppProvider + useAppContext), prop drilling elimine, useMemo sur value du Provider, useCallback sur toutes les mutations.

> Details dans `tech-spec-archive.md`.

---

## PHASE 10A : TypeScript + Zod (A VENIR)

**Objectif** : Typer l'app, valider les donnees avec Zod.

### 10.1 : TypeScript

- Setup TS + Vite (renommer .jsx → .tsx, vite config)
- Typer Data Models (Employee, Shift, Assignment) — interfaces/types
- Typer Custom Hooks (params, return types, generics useLocalStorage)
- Typer Composants (Props interfaces, children, event handlers)

### 10.2 : Zod + React Hook Form (validation de donnees)

- Schema Zod pour Employee, Shift, Assignment
- Validation formulaires (EmployeeForm, ShiftForm) avec Zod
- Inference de types depuis schemas (z.infer<typeof schema>)
- **React Hook Form** + `@hookform/resolvers/zod` : remplacer la gestion manuelle des formulaires par RHF
- **Decouverte useRef** : RHF utilise des refs pour acceder aux inputs sans re-render — Paul decouvre useRef dans ce contexte concret
- register(), handleSubmit(), formState.errors, Controller (composants custom)
- Preparation backend : memes schemas reutilisables front et back

- 🤖 Outil IA : Copilot autocomplete (TypeScript = beaucoup d'aide sur les types)

## PHASE 10B : Vitest + React Router + Git avance (A VENIR)

**Objectif** : Tester les utils/hooks, routing multi-pages, bases SQL theoriques.

### 10.3 : Vitest (premiers tests)

- Setup Vitest + config
- Tests unitaires : utils (timeUtils, shiftUtils, colorUtils, generateId)
- Tests unitaires : hooks avec renderHook (useWeekNav, useLocalStorage)
- Objectif : comprendre test, expect, describe, beforeEach, mock

### 10.4 : React Router

- Pages : Planning (/), Settings (/settings), futur Login (/login)
- Navigation, Layout partagé, routes protegees (prep auth)
- Lazy loading pages (React.lazy + Suspense)

### 10.5 : Git avance

- git rebase (vs merge), cherry-pick, stash
- Gestion de conflits de merge
- .gitignore avance, git log/diff

### 10.6 : SQL theorique (preparation Phase 12)

- Concepts : tables, relations, cles primaires/etrangeres, normalisation
- Comprendre le schema relationnel ChefPlanning : employees → assignments ← shifts
- Exercices SQL basics en ligne (SELECT, INSERT, JOIN)

- 🤖 Outil IA : Copilot autocomplete

## PHASE 11 : Backend API + Hono (A VENIR)

**Objectif** : Creer l'API REST, comprendre HTTP, architecture client-serveur.
**Architecture** : React (TS) <-> Hono API (TS) <-> In-memory (puis PostgreSQL)

### 11.1 : Setup Backend

- Monorepo setup (pnpm workspaces : packages/frontend + packages/backend)
- Hono + Node.js setup (TypeScript)
- Bun comme package manager (remplace npm, 10x plus rapide)
- Variables d'environnement (.env, dotenv, .env.example, .gitignore)

### 11.2 : HTTP et REST en profondeur

- Methodes HTTP (GET, POST, PUT, DELETE, PATCH)
- Status codes (200, 201, 400, 404, 409, 500)
- Headers, CORS (cross-origin entre front et back)
- Request/Response bodies (JSON)

### 11.3 : API REST (Hono)

- Routes CRUD : /api/employees, /api/shifts, /api/assignments
- Middlewares Hono (cors, logger, error handler)
- Validation requetes avec Zod (schemas partages front/back)
- Gestion erreurs structuree (try/catch, error responses)

### 11.4 : Migration Frontend

- Remplacer localStorage par fetch vers API
- Loading states, error states dans les composants
- Optimistic updates (UX reactive)
- Custom hooks d'API (useApi ou patterns fetch)

### 11.5 : Securite basics

- Ne jamais exposer de secrets cote client
- Sanitization des inputs
- Rate limiting basics
- HTTPS en production

- 🤖 Outil IA : **Cursor IDE** — navigation multi-fichiers front/back, aide contextuelle, prompt engineering
- 💡 Sensibilisation IA : concevoir les routes API propres — elles seront appelees par le LLM (function calling) en Phase 16

## PHASE 12 : Database + Tanstack Query + Docker (A VENIR)

**Objectif** : Persister les donnees, cache intelligent, containerisation.

### 12.1 : Docker basics

- Docker Desktop, Dockerfile, docker-compose.yml
- Container PostgreSQL local (plus besoin d'installer PG nativement)
- docker-compose up/down pour le dev environment

### 12.2 : PostgreSQL + Drizzle ORM

- SQL basics : CREATE TABLE, SELECT, INSERT, UPDATE, DELETE, JOIN
- Drizzle ORM : schema definition, migrations, queries typees
- Relations : employees <-> assignments, shifts <-> assignments
- Seeds : donnees initiales pour le dev

### 12.3 : Tanstack Query (React Query)

- useQuery, useMutation, queryClient
- Cache, refetch, stale time, invalidation
- Remplace useEffect+useState pour les appels API
- Gestion loading/error/success declarative
- Optimistic updates avec Tanstack Query

### 12.4 : Tests API

- Tests endpoints avec Vitest (integration tests)
- Tester les routes Hono avec app.request()
- Mock de la database pour les tests

- 🤖 Outil IA : Cursor agent mode — scaffolding de code que Paul _comprend deja_
- 💡 Sensibilisation IA : pgvector est une extension PostgreSQL — elle sera utilisee en Phase 16 pour le RAG

## PHASE 13 : Auth + Zustand + Redis (A VENIR)

**Objectif** : Securiser l'app, state global pro, cache serveur.

### 13.1 : Auth (JWT)

- Concepts : authentication vs authorization
- JWT : access token, refresh token, expiration
- Middleware auth Hono (routes protegees)
- Login/Register pages + formulaires
- Stocker tokens (httpOnly cookies vs localStorage — securite)

### 13.2 : Zustand

- Remplacer Context par Zustand pour le state cross-app
- Stores : useAuthStore, useUIStore (modals, notifications)
- Devtools, persist middleware
- Comprendre quand Context vs Zustand vs props

### 13.3 : Redis (basics)

- Cache serveur (sessions, rate limiting)
- Redis avec Docker (ajout au docker-compose)
- Invalidation de cache
- Usage : sessions JWT, cache requetes couteuses

- 🤖 Outil IA : **Claude Code (terminal agent)** — refactoring large, generation de config, scaffolding
- 💡 Sensibilisation IA : les endpoints IA devront etre proteges, rate-limites — les prompts utilisateurs sont un vecteur d'attaque (prompt injection)

## PHASE 14 : Deploy + CI/CD + Radix UI + Bun Runtime (A VENIR)

**Objectif** : Mettre en production, accessibilite pro, migration Bun.

### 14.1 : CI/CD (GitHub Actions)

- Workflow : lint + type-check + tests automatiques a chaque push
- Build verification, preview deployments
- Branch protection rules sur main

### 14.2 : Deploy

- Frontend : Vercel (build + deploy automatique)
- Backend : Railway ou Fly.io (Node/Bun + PostgreSQL + Redis)
- Domaine custom, HTTPS, variables d'environnement en production

### 14.3 : Migration Bun runtime

- Backend : remplacer Node.js par Bun (Hono est compatible, quasi 0 changement)
- Benefices : demarrage plus rapide, performances, APIs natives (Bun.serve, Bun.file)
- Frontend reste sur Vite (meilleur ecosysteme HMR/plugins)
- Benchmark avant/apres pour comprendre les gains

### 14.4 : Radix UI + Accessibilite

- Remplacer composants UI maison (Modal, Dropdown) par Radix primitives
- Accessibilite : ARIA, keyboard navigation, screen readers
- Lighthouse audit (performance, a11y, SEO, best practices)

### 14.5 : Performance web

- Code splitting, lazy loading (React.lazy deja vu en Phase 10)
- Bundle analysis (vite-plugin-visualizer)
- Image optimization, caching headers
- Core Web Vitals

### 14.6 : Monitoring & Observabilite

- Sentry : error tracking frontend + backend (free tier suffit)
- Structured logging backend (pino ou winston, JSON logs)
- Health check endpoint (/api/health) — uptime monitoring
- Alertes basiques (Sentry alerts, UptimeRobot gratuit)
- Comprendre : logs vs metrics vs traces (les 3 piliers de l'observabilite)
- Question entretien classique : "comment tu sais si ton app a un probleme en prod ?"

### 14.7 : Monetisation

- Freemium model (features gratuites vs payantes)
- Stripe integration basics (paiement)
- Landing page

- 🤖 Outil IA : Claude Code agent — generation de CI/CD configs, migration automatisee, **vibe coding maitrise**
- 💡 Sensibilisation IA : Ollama est un service Docker comme les autres — il sera ajoute au docker-compose en Phase 16

### Acceptance Criteria Phase 14

- AC 14.1 : App accessible sur une URL publique
- AC 14.2 : CI/CD fonctionne (tests + build auto a chaque push)
- AC 14.3 : Backend tourne sur Bun
- AC 14.4 : Lighthouse score > 90 (perf + a11y)
- AC 14.5 : Sentry capte les erreurs en prod (dashboard visible)

## PHASE 15 : E2E Testing + Polish (A VENIR)

**Objectif** : Tests end-to-end, qualite production.

> Tests unitaires (utils, hooks) et tests API deja couverts en Phases 10 et 12.

### 15.1 : Playwright (E2E)

- Setup Playwright
- Tests parcours utilisateur : login → creer employe → assigner shift → naviguer semaines
- Tests responsive (mobile, tablet, desktop)
- CI : E2E dans GitHub Actions

### 15.2 : React Testing Library (composants)

- Tests composants avec interactions (click, type, submit)
- Tests integration : formulaires complets
- Mock de context/providers

### 15.3 : Polish final

- Error boundaries
- SEO meta tags
- PWA basics (manifest, service worker — optionnel)
- Documentation README pour le repo public

- 🤖 Outil IA : **Multi-agent vibe coding** — Cursor + Claude Code en parallele, Paul orchestre les agents

## PHASE 16 : AI Integration (A VENIR)

**Objectif** : Rendre le SaaS intelligent — generation de planning par algo, assistance LLM local, historique RAG.
**Duree** : ~5 semaines
**Architecture** :

```
Chef (navigateur)
  +-- Planning UI (tableau — tout faisable a la main)
  +-- Chat Panel (side panel style Copilot)
              |
        Hono API (backend TS — orchestrateur)
        +-- Planning Engine (micro-service Python/FastAPI + OR-Tools)
        +-- Ollama (LLM local — Mistral 7B)
        +-- pgvector (historique — dans PostgreSQL)
        +-- Function Calling (NL -> actions)
```

> **Architecture microservices** : Hono reste l'API principale (auth, CRUD, orchestration).
> Le Planning Engine est un service Python independant que Hono appelle en HTTP interne.
> Paul apprend Python dans un contexte reel, pas un tuto deconnecte.

**Principe cle** : le LLM est une **interface** (comprend le chef), pas le **moteur** (l'algo genere le planning). Le SaaS reste 100% utilisable sans le chat.

### 16.1 : Systeme de contraintes (pur TypeScript, 0 IA)

- Nouveaux Data Models :
  - EmployeeAvailability { employeeId, dayOfWeek, period, available }
  - SkillRequirement { shiftId, day, requiredSkills[] }
  - AffinityRule { employeeA, employeeB, score: -2 a +2 }
  - WeeklyException { employeeId, weekOf, day, reason, type }
  - EmployeePreference { employeeId, preferredShifts[], avoidDays[] }
- API routes CRUD pour chaque model
- UI Settings (React + Radix) pour gerer les contraintes
- 100% faisable sans IA — le chef configure manuellement

### 16.2 : Planning Engine — micro-service Python/FastAPI (algorithme pur, 0 IA)

**1er contact avec Python** — Paul apprend le langage ici, dans un contexte reel.

- Setup FastAPI micro-service (packages/engine/ dans le monorepo)
- Apprendre syntaxe Python : variables, fonctions, classes, list comprehensions, decorateurs
- FastAPI : routes, Pydantic models (equivalent Zod), async, docs auto (Swagger)
- Google OR-Tools (cp_model) : constraint programming pour optimisation planning
- Algo : Inputs employees[] + shifts[] + constraints[] + exceptions[]
- Hard constraints (dispo, skills) → elimine
- Soft constraints (preferences, affinites) → score
- Heures contrat → pondere
- Historique (equite semaines precedentes) → ajuste
- Output : assignments[] (planning optimal de la semaine)
- Communication : Hono appelle FastAPI en HTTP interne (POST /api/engine/generate)
- Docker : container Python separe dans docker-compose
- Le chef clique "Generer" → Hono → FastAPI → OR-Tools → planning propose → validation

### 16.3 : LLM API cloud (apprentissage, petit budget ~5-10€)

- Appel API (OpenAI ou Anthropic) depuis le backend Hono
- Structured output : forcer le LLM a repondre en JSON
- Function calling : le LLM "appelle" des fonctions (setAffinity, addException, generatePlanning)
- Prompt engineering formel : system prompts, few-shot, temperature
- Comprendre : tokens, contexte, couts, latence, limites

### 16.4 : LLM local Ollama (solution production)

- Ollama dans Docker (ajout au docker-compose existant)
- Modele : Mistral 7B ou Llama 3.1 8B (tourne sur CPU, ~4-8 Go RAM)
- API compatible OpenAI (/v1/chat/completions) → quasi 0 changement de code vs 16.3
- AI Safety & guardrails : prompt injection prevention, output validation, limiter les actions possibles du LLM
- Benchmark : comparer latence/qualite vs cloud
- 0 cout recurrent, donnees privees, pas de dependance externe

### 16.5 : RAG + pgvector (historique intelligent)

- pgvector : extension PostgreSQL (pas de nouvelle DB a gerer)
- Embeddings : transformer les plannings passes en vecteurs
- Quand le chef demande un planning → RAG recupere les semaines similaires
- L'engine de scoring integre l'historique comme facteur de ponderation
- Exemple : "La derniere fois que Marie etait absente le lundi, tu avais mis Paul en matin"

### 16.6 : Chat Panel + Function Calling (la piece finale)

- Chat UI : side panel (style Copilot), React + Radix
- SSE (Server-Sent Events) : streaming mot par mot
- Function calling : prompt chef → LLM → appels API → resultat visuel
- Onboarding nouveau user : le LLM guide l'initialisation (ajouter employes, shifts, preferences)
- AI UX patterns : indicateurs de confiance, etats de chargement IA, human-in-the-loop (valider etapes critiques)
- Tout reste faisable sans le chat — boutons, formulaires, clic manuel

### Acceptance Criteria Phase 16

- AC 16.1 : Settings de contraintes configurables via UI
- AC 16.2 : Bouton "Generer" → planning optimal respectant les contraintes
- AC 16.3 : Un appel LLM cloud retourne du JSON structure
- AC 16.4 : Meme fonctionnalite via Ollama local (0 cout)
- AC 16.5 : Le RAG recupere des plannings similaires pour influencer la generation
- AC 16.6 : Le chef tape "Marie est en vacances, genere le planning" → le systeme execute

- 🤖 Outil IA : **Multi-agent + Ollama** — Cursor + Claude Code, Paul integre l'IA dans le produit
- 💡 Python : Paul apprend Python via le Planning Engine (16.2), competence reutilisee en Phase 17

## PHASE 17 : Next.js + Python Fullstack (A VENIR)

**Objectif** : Elargir le profil — SSR/RSC (Next.js) + dual-stack Python (FastAPI CRUD).
**Duree** : ~2-3 semaines
**Prerequis** : Phase 16 terminee (Paul connait deja les bases Python via 16.2)

> Phase 17 n'est PAS obligatoire pour ChefPlanning. C'est un **investissement carriere**.
> Paul a deja un SaaS deploye — Phase 17 elargit son profil pour le marche.

### 17.1 : Next.js (SSR & React Server Components)

- Comprendre SSR vs CSR vs SSG vs RSC (et quand utiliser quoi)
- Recreer 1-2 pages de ChefPlanning en Next.js (App Router)
- Server Components : data fetching cote serveur, moins de JS client
- Comparer : Vite SPA (actuel) vs Next.js SSR (alternative)
- API Routes Next.js (alternative a Hono pour certains cas)
- SEO : meta tags dynamiques, Open Graph, sitemap

### 17.2 : Python Fullstack (FastAPI CRUD)

- Recreer l'API CRUD ChefPlanning en FastAPI (employees, shifts, assignments)
- SQLAlchemy ou Tortoise ORM (equivalent Drizzle en Python)
- Pydantic v2 (validation — equivalent Zod, Paul connait deja via 16.2)
- Auth JWT en Python (meme logique que Phase 13, syntaxe differente)
- Tests avec pytest (equivalent Vitest)
- Comparer : Hono/TS vs FastAPI/Python (DX, performance, ecosysteme)
- Objectif : pouvoir dire en entretien "je peux travailler dans les 2 ecosystemes"

### 17.3 : Portfolio & Positionnement

- README pro pour le repo GitHub (screenshots, architecture, stack)
- Landing page (deja faite en 14.7, affiner le message)
- Profil : "React/TS fullstack + Python AI" — le combo le plus recherche
- Preparer les reponses techniques entretien (architecture, choix tech, trade-offs)

### Acceptance Criteria Phase 17

- AC 17.1 : Une page ChefPlanning rendue en SSR via Next.js
- AC 17.2 : API CRUD complete en FastAPI (memes endpoints que Hono)
- AC 17.3 : README pro + repo public pret pour les recruteurs

- 🤖 Outil IA : Multi-agent — Paul maitrise les outils, focus sur la productivite
