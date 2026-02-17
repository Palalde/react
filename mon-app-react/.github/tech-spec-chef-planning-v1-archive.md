---
title: ChefPlanning - Archive Phases 0-6 (MVP)
created: 2026-01-08
status: completed
---

# Archive : MVP Phases 0-6

> Ce fichier archive les details du MVP complete. Consulter uniquement si besoin de contexte historique.

## Wireframe Original (MVP)

```
Sidebar gauche (200px) : liste employees scrollable
Main (flex-1) : grille 7 colonnes (1 par jour), assignations par cellule
Header : titre + ThemeToggle + bouton ajout
```

> Layout remplace en Phase 9 par un tableau Employee x Jour pleine largeur.

## Responsive (toujours valide)

- Mobile-first : classes par defaut = mobile, puis sm:, lg:
- Touch targets : min 44x44px
- Pas de dark: variants (CSS vars gerent tout)

## UI/UX Guidelines (toujours valide)

- Hover cards : hover:shadow-md hover:border-accent/50
- Active press : active:scale-[0.98]
- Transitions : transition-all duration-200
- Empty states obligatoires avec emoji + message + sous-message
- Focus visible : focus-visible:ring-2 focus-visible:ring-accent

## Composants UI crees pendant MVP

Button (primary/secondary/danger/ghost, sm/md/lg/icon), Badge (couleurs DS), 
Input (label/error), Modal (sm/md/lg, portal), ColorInput, HoursInput, ThemeToggle.

## Business Rules

- Heures > contrat : indicateur visuel rouge (text-danger + badge warning)
- Validation avancee repoussee apres MVP (repos 11h, skills matching)