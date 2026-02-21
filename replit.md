# La Maison de Vacances - Site Vitrine

## Overview
Site vitrine bilingue (FR/EN) pour une maison charentaise de charme avec piscine, jacuzzi et salle de sport située à Hiersac (16290), entre Cognac et Angoulême. Le site est optimisé pour le SEO local et le GEO, avec un blog intégré d'articles sur la région.

## Current State
- Site vitrine bilingue (FR/EN) avec détection automatique de la langue du navigateur
- Page d'accueil, blog (8 articles x 2 langues = 16 articles), et formulaire de contact
- Base de données PostgreSQL pour les articles (avec champ `lang`) et messages de contact
- Photos authentiques Airbnb pour les sections propriété, images AI pour le blog
- SEO : balises meta par page (bilingues), données structurées Schema.org enrichies (LodgingBusiness + Article), balises OG
- robots.txt et sitemap.xml dynamiques pour les moteurs de recherche
- Maillage interne entre tous les articles (liens croisés "À découvrir aussi")
- Articles expansibles sur la page blog (clic = contenu complet affiché sur place)
- Bouton FR/EN dans le header pour changement manuel de langue
- Domaine personnalisé : la-maison-de-vacances.com

## Architecture
- **Frontend**: React + Vite + Tailwind CSS + Shadcn UI
- **Backend**: Express.js + PostgreSQL (Drizzle ORM)
- **Routing**: wouter (client-side)
- **Data fetching**: TanStack React Query
- **i18n**: Custom React Context (`client/src/lib/i18n.tsx`) avec détection navigateur + localStorage

## Project Structure
```
client/src/
  lib/
    i18n.tsx           - Système i18n (contexte, traductions, détection langue)
  pages/
    home.tsx           - Page d'accueil (hero, équipements, galerie, avis, localisation, CTA)
    blog.tsx           - Liste des articles (filtrés par langue)
    article.tsx        - Page article individuelle
    contact.tsx        - Formulaire de contact
  components/
    header.tsx         - Navigation avec scroll transparent + bouton FR/EN
    footer.tsx         - Pied de page
    booking-icon.tsx   - Icône Booking.com
  hooks/
    use-seo.ts         - Hook SEO pour titres/meta par page
server/
  routes.ts            - API endpoints (/api/articles?lang=fr|en, /api/contact, /sitemap.xml, /robots.txt)
  storage.ts           - Interface et implémentation DatabaseStorage (filtrage par lang)
  seed.ts              - Données initiales (8 articles FR + 8 articles EN)
  db.ts                - Connexion PostgreSQL
shared/
  schema.ts            - Modèles Drizzle (articles avec champ lang, contactMessages)
```

## Key Features
- Hero section immersive avec CTA vers Airbnb et Booking
- Galerie photos de la propriété (7 photos authentiques Airbnb)
- Section avis voyageurs traduits (5/5 étoiles)
- Carte Google Maps intégrée
- Blog bilingue avec articles SEO sur Cognac, Angoulême, randonnées, vignobles, télétravail, famille, restaurants, marchés/terroir
- Articles expansibles sur la page blog + maillage interne (liens croisés entre articles)
- Formulaire de contact bilingue avec dates et nombre de voyageurs
- SEO complet : meta tags bilingues, OG tags, données structurées Schema.org LodgingBusiness + Article
- robots.txt dynamique (bloque /api/) + sitemap.xml dynamique (19 URLs)
- Détection automatique de la langue du navigateur (FR par défaut, EN sinon)
- Bouton de bascule FR/EN dans le header (desktop et mobile)

## i18n System
- Fichier unique de traductions: `client/src/lib/i18n.tsx`
- Détection: localStorage > navigator.language > fallback "en"
- Articles blog: stockés en DB avec champ `lang` ("fr" ou "en"), même `slug` pour les deux versions
- API: `/api/articles?lang=fr` ou `/api/articles?lang=en`
- UI statique: traductions dans le fichier i18n.tsx via la fonction `t(key)`

## Liens externes
- Airbnb: https://www.airbnb.fr/rooms/1482578037265572057
- Booking: https://www.booking.com/hotel/fr/maison-charentaise-de-charme-avec-piscine-jardin-et-salle-de-sport.fr.html
- Adresse: Rue d'Angoulême, 16290 Hiersac, France

## User Preferences
- Langue: Français (interface utilisateur), site bilingue FR/EN
- Thème: Couleurs chaudes charentaises (ambre/terre cuite)
- Police: Playfair Display (titres) + Open Sans (corps)
