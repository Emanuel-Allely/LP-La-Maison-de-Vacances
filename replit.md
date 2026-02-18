# La Maison de Vacances - Site Vitrine

## Overview
Site vitrine pour une maison charentaise de charme avec piscine, jacuzzi et salle de sport située à Hiersac (16290), entre Cognac et Angoulême. Le site est optimisé pour le SEO local et le GEO, avec un blog intégré d'articles sur la région.

## Current State
- Site vitrine fonctionnel avec page d'accueil, blog (6 articles SEO), et formulaire de contact
- Base de données PostgreSQL pour les articles et messages de contact
- Images générées pour toutes les sections (hero, galerie, articles)
- SEO : balises meta par page, données structurées Schema.org, balises OG

## Architecture
- **Frontend**: React + Vite + Tailwind CSS + Shadcn UI
- **Backend**: Express.js + PostgreSQL (Drizzle ORM)
- **Routing**: wouter (client-side)
- **Data fetching**: TanStack React Query

## Project Structure
```
client/src/
  pages/
    home.tsx         - Page d'accueil (hero, équipements, galerie, avis, localisation, CTA)
    blog.tsx         - Liste des articles
    article.tsx      - Page article individuelle
    contact.tsx      - Formulaire de contact
  components/
    header.tsx       - Navigation avec scroll transparent
    footer.tsx       - Pied de page
  hooks/
    use-seo.ts       - Hook SEO pour titres/meta par page
server/
  routes.ts          - API endpoints (/api/articles, /api/contact)
  storage.ts         - Interface et implémentation DatabaseStorage
  seed.ts            - Données initiales (6 articles blog)
  db.ts              - Connexion PostgreSQL
shared/
  schema.ts          - Modèles Drizzle (articles, contactMessages)
```

## Key Features
- Hero section immersive avec CTA vers Airbnb et Booking
- Galerie photos de la propriété
- Section avis voyageurs (5/5 étoiles)
- Carte Google Maps intégrée
- Blog avec articles SEO sur Cognac, Angoulême, randonnées, vignobles, télétravail, famille
- Formulaire de contact avec dates et nombre de voyageurs
- SEO complet : meta tags, OG tags, données structurées Schema.org LodgingBusiness

## Liens externes
- Airbnb: https://www.airbnb.fr/rooms/1482578037265572057
- Booking: https://www.booking.com/hotel/fr/maison-charentaise-de-charme-avec-piscine-jardin-et-salle-de-sport.fr.html
- Adresse: 4 Rue d'Angoulême, 16290 Hiersac, France

## User Preferences
- Langue: Français
- Thème: Couleurs chaudes charentaises (ambre/terre cuite)
- Police: Playfair Display (titres) + Open Sans (corps)
