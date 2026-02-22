# La Maison de Vacances - Site Vitrine

Site vitrine bilingue (FR/EN) pour une maison charentaise de charme avec piscine, jacuzzi et salle de sport, située à Hiersac (16290), entre Cognac et Angoulême.

**URL de production** : [la-maison-de-vacances.com](https://la-maison-de-vacances.com)

---

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Frontend | React 18 + TypeScript |
| Build | Vite 7 |
| CSS | Tailwind CSS 3 + Shadcn UI |
| Routing client | wouter |
| Data fetching | TanStack React Query v5 |
| Backend | Express.js 5 |
| Base de données | PostgreSQL (Neon) |
| ORM | Drizzle ORM |
| Validation | Zod + drizzle-zod |
| Emails | Resend API |
| Internationalisation | Contexte React custom |

---

## Structure du projet

```
.
├── client/                          # Application frontend
│   ├── index.html                   # Point d'entrée HTML + Schema.org JSON-LD (LodgingBusiness)
│   ├── public/
│   │   ├── favicon.svg              # Favicon maison personnalisé
│   │   └── images/                  # Photos de la propriété et illustrations blog
│   │       ├── hero-house.png       # Image hero page d'accueil
│   │       ├── pool.png             # Piscine
│   │       ├── salon.png / salon.jpg # Salon
│   │       ├── cuisine.png          # Cuisine
│   │       ├── chambre.png / chambre1.jpg / chambre2.jpg  # Chambres
│   │       ├── fitness.png          # Salle de sport
│   │       ├── cognac.png           # Illustration Cognac (blog)
│   │       ├── angouleme.png        # Illustration Angoulême (blog)
│   │       ├── charente-river.png   # Illustration Charente (blog)
│   │       ├── vignobles.png        # Illustration vignobles (blog)
│   │       └── photo2-5.jpg         # Galerie photos propriété
│   └── src/
│       ├── main.tsx                 # Point d'entrée React
│       ├── App.tsx                  # Routes et providers
│       ├── index.css                # Styles globaux + variables CSS Tailwind
│       ├── pages/
│       │   ├── home.tsx             # Page d'accueil (hero, équipements, galerie, avis, carte, CTA)
│       │   ├── blog.tsx             # Liste articles (grille + expansion inline + maillage interne)
│       │   ├── article.tsx          # Page article individuelle + JSON-LD Article
│       │   ├── contact.tsx          # Formulaire de contact (dates, voyageurs, message)
│       │   └── not-found.tsx        # Page 404
│       ├── components/
│       │   ├── header.tsx           # Navigation sticky transparente + bouton FR/EN
│       │   ├── footer.tsx           # Pied de page avec liens
│       │   ├── booking-icon.tsx     # Icône Booking.com
│       │   └── ui/                  # Composants Shadcn UI (button, card, form, badge, etc.)
│       ├── hooks/
│       │   ├── use-seo.ts           # Hook pour meta tags dynamiques (title, description, OG)
│       │   ├── use-toast.ts         # Hook notifications toast
│       │   └── use-mobile.tsx       # Hook détection mobile
│       └── lib/
│           ├── i18n.tsx             # Système i18n (contexte, traductions FR/EN, détection langue)
│           ├── queryClient.ts       # Configuration TanStack Query
│           └── utils.ts             # Utilitaires (cn pour classes Tailwind)
│
├── server/                          # Application backend
│   ├── index.ts                     # Serveur Express (bootstrap, middleware, démarrage)
│   ├── routes.ts                    # API endpoints :
│   │                                #   GET  /api/articles?lang=fr|en
│   │                                #   GET  /api/articles/:slug?lang=fr|en
│   │                                #   POST /api/contact
│   │                                #   GET  /robots.txt
│   │                                #   GET  /sitemap.xml
│   ├── storage.ts                   # Couche d'accès données (interface IStorage + DatabaseStorage)
│   ├── seed.ts                      # Données initiales (8 articles FR + 8 articles EN)
│   ├── db.ts                        # Connexion PostgreSQL (Drizzle + Neon)
│   ├── vite.ts                      # Intégration Vite en mode développement
│   └── static.ts                    # Serveur de fichiers statiques en production
│
├── shared/                          # Code partagé frontend/backend
│   └── schema.ts                    # Schéma Drizzle (articles, contactMessages) + types Zod
│
├── script/
│   └── build.ts                     # Script de build production (Vite + esbuild)
│
├── package.json                     # Dépendances et scripts
├── tsconfig.json                    # Configuration TypeScript
├── vite.config.ts                   # Configuration Vite (alias, plugins)
├── tailwind.config.ts               # Configuration Tailwind CSS
├── drizzle.config.ts                # Configuration Drizzle Kit (migrations)
├── components.json                  # Configuration Shadcn UI
└── replit.md                        # Documentation interne du projet
```

---

## Base de données

### Tables

**`articles`** — Articles de blog bilingues

| Colonne | Type | Description |
|---------|------|-------------|
| `id` | serial (PK) | Identifiant auto-incrémenté |
| `title` | text | Titre de l'article |
| `slug` | text | URL-friendly (identique FR/EN pour le même sujet) |
| `excerpt` | text | Résumé court pour les cartes blog |
| `content` | text | Contenu HTML complet (inclut les liens internes) |
| `image` | text | Chemin vers l'image (/images/...) |
| `category` | text | Catégorie (Patrimoine, Nature, Gastronomie, etc.) |
| `lang` | text | Langue : "fr" ou "en" |
| `published` | boolean | Statut de publication |
| `created_at` | timestamp | Date de création |

**`contact_messages`** — Messages du formulaire de contact

| Colonne | Type | Description |
|---------|------|-------------|
| `id` | serial (PK) | Identifiant auto-incrémenté |
| `name` | text | Nom du visiteur |
| `email` | text | Email du visiteur |
| `phone` | text (nullable) | Téléphone |
| `check_in` | text (nullable) | Date d'arrivée souhaitée |
| `check_out` | text (nullable) | Date de départ souhaitée |
| `guests` | integer (nullable) | Nombre de voyageurs |
| `message` | text | Contenu du message |
| `created_at` | timestamp | Date d'envoi |

### Contenu initial

Le seed (`server/seed.ts`) insère 16 articles à la première exécution :
- **8 articles FR** : Cognac, Angoulême, randonnées, vignobles, télétravail, famille, restaurants, marchés/terroir
- **8 articles EN** : versions traduites avec les mêmes slugs

Chaque article contient une section "À découvrir aussi" / "Discover more" avec 3 liens internes vers d'autres articles (maillage interne SEO).

---

## Système d'internationalisation (i18n)

**Fichier** : `client/src/lib/i18n.tsx`

### Fonctionnement
1. **Détection automatique** : `localStorage` → `navigator.language` → fallback `"en"`
2. **Basculement manuel** : bouton FR/EN dans le header (sauvegarde dans `localStorage`)
3. **Contenu statique** : traductions en dur via `t("clé")` dans le fichier i18n
4. **Articles** : filtrés côté serveur via le paramètre `?lang=fr|en`

### Utilisation dans les composants
```tsx
const { lang, t, setLang } = useI18n();
// lang: "fr" | "en"
// t("blog.title"): retourne la traduction
// setLang("en"): bascule en anglais
```

---

## SEO

### Données structurées Schema.org

**LodgingBusiness** (dans `client/index.html`) :
- Nom, description, adresse, géolocalisation
- 10 équipements (piscine, jacuzzi, fitness, Wi-Fi fibre, etc.)
- Note agrégée 5.0/5 (5 avis)
- Offre de réservation (lien Airbnb)
- Liens Airbnb et Booking.com (`sameAs`)
- Capacité : 2 chambres, 2 SdB, 5 voyageurs max, 120m²
- Horaires check-in/out

**Article** (injecté dynamiquement dans `client/src/pages/article.tsx`) :
- Titre, description, image, date, catégorie, langue
- Éditeur : La Maison de Vacances

### Fichiers SEO dynamiques

| Endpoint | Description |
|----------|-------------|
| `GET /sitemap.xml` | 19 URLs : 3 pages statiques + 8 articles FR + 8 articles EN |
| `GET /robots.txt` | Autorise l'indexation, bloque `/api/`, référence le sitemap |

### Meta tags
- Titre et description uniques par page (via hook `use-seo.ts`)
- Open Graph tags (og:title, og:description, og:type, og:locale)
- URL canonique : `https://la-maison-de-vacances.com`

---

## Pages et fonctionnalités

### Page d'accueil (`/`)
- Hero section plein écran avec image de la propriété
- Boutons CTA vers Airbnb et Booking.com
- Section équipements (6 pictogrammes)
- Galerie photos (7 images authentiques Airbnb)
- Avis voyageurs traduits (5/5 étoiles)
- Carte Google Maps intégrée
- Section localisation et CTA de réservation

### Blog (`/blog`)
- Grille de cartes (8 articles par langue)
- **Articles expansibles** : clic sur une carte → contenu complet affiché au-dessus de la grille
- **Maillage interne** : les liens "À découvrir aussi" dans un article expansé naviguent vers un autre article sans quitter la page
- Bouton "Réduire" pour replier l'article

### Article individuel (`/blog/:slug`)
- Page complète avec image, date, catégorie
- Contenu HTML riche avec liens internes
- JSON-LD Article injecté dynamiquement
- CTA vers Airbnb et page contact

### Contact (`/contact`)
- Formulaire : nom, email, téléphone, dates (arrivée/départ), nombre de voyageurs, message
- Validation Zod côté serveur
- Envoi d'email via Resend API à `wonderux@gmail.com`
- Sauvegarde en base de données

---

## API Endpoints

| Méthode | Route | Description |
|---------|-------|-------------|
| `GET` | `/api/articles?lang=fr\|en` | Liste des articles filtrés par langue |
| `GET` | `/api/articles/:slug?lang=fr\|en` | Article individuel par slug et langue |
| `POST` | `/api/contact` | Envoi d'un message de contact (+ notification email) |
| `GET` | `/sitemap.xml` | Sitemap XML dynamique |
| `GET` | `/robots.txt` | Directives pour les crawlers |

---

## Variables d'environnement

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | URL de connexion PostgreSQL (fournie par Replit) |
| `RESEND_API_KEY` | Clé API Resend pour l'envoi d'emails |
| `SESSION_SECRET` | Secret de session Express |

---

## Scripts

```bash
npm run dev       # Démarre le serveur de développement (Express + Vite HMR)
npm run build     # Build de production (Vite frontend + esbuild backend)
npm run start     # Lance le serveur de production
npm run check     # Vérification TypeScript
npm run db:push   # Synchronise le schéma Drizzle avec la base de données
```

---

## Liens externes

- **Airbnb** : [airbnb.fr/rooms/1482578037265572057](https://www.airbnb.fr/rooms/1482578037265572057)
- **Booking.com** : [booking.com/hotel/fr/maison-charentaise...](https://www.booking.com/hotel/fr/maison-charentaise-de-charme-avec-piscine-jardin-et-salle-de-sport.fr.html)
- **Adresse** : Rue d'Angoulême, 16290 Hiersac, France
