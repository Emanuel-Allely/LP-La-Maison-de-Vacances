import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Lang = "fr" | "en";

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

function detectLang(): Lang {
  const saved = localStorage.getItem("lang");
  if (saved === "fr" || saved === "en") return saved;
  const browserLang = navigator.language || (navigator as any).userLanguage || "";
  return browserLang.startsWith("fr") ? "fr" : "en";
}

const translations: Record<string, Record<Lang, string>> = {
  "nav.home": { fr: "Accueil", en: "Home" },
  "nav.blog": { fr: "Blog", en: "Blog" },
  "nav.contact": { fr: "Contact", en: "Contact" },
  "nav.reserve": { fr: "Réserver", en: "Book Now" },

  "hero.rating": { fr: "5,0/5 sur Airbnb", en: "5.0/5 on Airbnb" },
  "hero.subtitle": { fr: "Hiersac, Charente — Entre Cognac et Angoulême", en: "Hiersac, Charente — Between Cognac and Angoulême" },
  "hero.guests": { fr: "5 voyageurs", en: "5 guests" },
  "hero.bedrooms": { fr: "2 chambres", en: "2 bedrooms" },
  "hero.bathrooms": { fr: "2 salles de bain", en: "2 bathrooms" },
  "hero.bookAirbnb": { fr: "Réserver sur Airbnb", en: "Book on Airbnb" },
  "hero.bookBooking": { fr: "Réserver sur Booking", en: "Book on Booking" },
  "hero.contactUs": { fr: "Nous Contacter", en: "Contact Us" },

  "about.title": { fr: "Votre séjour en Charente", en: "Your Stay in Charente" },
  "about.subtitle": { fr: "Maison charentaise de 120 m² répartie sur plusieurs niveaux, idéale pour un séjour au calme en famille, entre amis ou en télétravail.", en: "120 m² Charente house spread over multiple levels, perfect for a peaceful family stay, with friends, or for remote work." },
  "about.p1": { fr: "Située au cœur de la Charente, entre Cognac et Angoulême, à 15 minutes de la gare TGV d'Angoulême, notre maison vous offre confort, charme et qualité de vie.", en: "Located in the heart of Charente, between Cognac and Angoulême, 15 minutes from Angoulême TGV station, our house offers comfort, charm, and quality of life." },
  "about.p2": { fr: "Le logement comprend un salon lumineux, une cuisine entièrement équipée, deux chambres, deux salles de douche et un espace de télétravail avec connexion fibre et écrans.", en: "The accommodation includes a bright living room, a fully equipped kitchen, two bedrooms, two shower rooms, and a remote work area with fiber connection and screens." },
  "about.p3": { fr: "Les espaces extérieurs comprennent une cour intérieure, un jardin, une cuisine d'été, une piscine et un jacuzzi ouverts du 1er juin au 30 septembre, avec créneaux de privatisation réservables.", en: "Outdoor spaces include a courtyard, garden, summer kitchen, pool and hot tub open from June 1 to September 30, with bookable private time slots." },

  "amenities.title": { fr: "Équipements & Services", en: "Amenities & Services" },
  "amenity.pool": { fr: "Piscine & Jacuzzi", en: "Pool & Hot Tub" },
  "amenity.pool.desc": { fr: "Ouvert juin-septembre", en: "Open June-September" },
  "amenity.gym": { fr: "Salle de Sport", en: "Fitness Room" },
  "amenity.gym.desc": { fr: "Accès privatisé", en: "Private access" },
  "amenity.wifi": { fr: "Fibre Optique", en: "Fiber Optic WiFi" },
  "amenity.wifi.desc": { fr: "Idéal télétravail", en: "Ideal for remote work" },
  "amenity.parking": { fr: "Parking Gratuit", en: "Free Parking" },
  "amenity.parking.desc": { fr: "Sur place", en: "On-site" },
  "amenity.ac": { fr: "Climatisation", en: "Air Conditioning" },
  "amenity.ac.desc": { fr: "Tout confort", en: "Full comfort" },
  "amenity.tv": { fr: "Télévision", en: "Television" },
  "amenity.tv.desc": { fr: "Replay & VOD", en: "Replay & VOD" },
  "amenity.kitchen": { fr: "Cuisine Équipée", en: "Equipped Kitchen" },
  "amenity.kitchen.desc": { fr: "Tout inclus", en: "All-inclusive" },
  "amenity.garden": { fr: "Jardin & Terrasse", en: "Garden & Terrace" },
  "amenity.garden.desc": { fr: "Espace vert", en: "Green space" },

  "gallery.title": { fr: "Galerie Photos", en: "Photo Gallery" },

  "gallery.alt1": { fr: "Salon ouvert sur cuisine équipée", en: "Open living room with equipped kitchen" },
  "gallery.alt2": { fr: "Chambre principale avec lit king size et penderie", en: "Master bedroom with king bed and wardrobe" },
  "gallery.alt3": { fr: "Salle à manger avec mur en pierre charentaise", en: "Dining room with Charente stone wall" },
  "gallery.alt4": { fr: "Cuisine équipée avec cafétière à grain", en: "Equipped kitchen with bean-to-cup coffee machine" },
  "gallery.alt5": { fr: "Chambre 2 avec lit double et lit bébé", en: "Bedroom 2 with double bed and crib" },
  "gallery.alt6": { fr: "Escalier charentais en bois avec lumière naturelle", en: "Charente wooden staircase with natural light" },

  "reviews.title": { fr: "Avis de nos voyageurs", en: "Guest Reviews" },
  "reviews.subtitle": { fr: "Note de 5,0/5 sur la base de 5 commentaires", en: "Rating of 5.0/5 based on 5 reviews" },

  "review.annie": { fr: "Le logement est agréable : pratique, propre, décoré avec goût et disposant de nombreuses possibilités de loisirs et activités. Nous avons passé une nuit très reposante. Au top !", en: "The accommodation is lovely: practical, clean, tastefully decorated, with many leisure and activity options. We had a very restful night. Excellent!" },
  "review.annie.date": { fr: "Février 2026", en: "February 2026" },
  "review.katia": { fr: "Un aménagement de qualité, un équipement au top, une décoration de goût et un environnement calme. Un hôte particulièrement accueillant et réactif. Une perle rare sans aucun doute.", en: "Quality furnishings, top-notch equipment, tasteful decoration, and a calm environment. A particularly welcoming and responsive host. A rare gem without a doubt." },
  "review.katia.date": { fr: "Janvier 2026", en: "January 2026" },
  "review.ilias": { fr: "Parfait pour un séjour de quelques jours autour d'Angoulême. Nous nous sommes sentis tout de suite comme chez nous. L'accueil était très aux petits soins.", en: "Perfect for a few days' stay near Angoulême. We immediately felt at home. The welcome was very attentive." },
  "review.ilias.date": { fr: "Février 2026", en: "February 2026" },
  "review.haikel": { fr: "Séjour très agréable. Le logement est conforme à l'annonce, propre, bien équipé et facile à vivre au quotidien. Nous reviendrions sans hésiter.", en: "Very pleasant stay. The accommodation matches the listing, clean, well-equipped, and easy to live in daily. We would come back without hesitation." },
  "review.haikel.date": { fr: "Janvier 2026", en: "January 2026" },
  "review.gregory": { fr: "Hôte très réactif. Logement nickel et très qualitatif. Cafétière à grain, produits de douche comme dans un hôtel. Rien à dire !", en: "Very responsive host. Spotless and high-quality accommodation. Bean-to-cup coffee, hotel-quality shower products. Nothing to criticize!" },
  "review.gregory.date": { fr: "Février 2026", en: "February 2026" },

  "location.title": { fr: "Emplacement Idéal", en: "Ideal Location" },
  "location.subtitle": { fr: "Au cœur de la Charente, entre vignobles et rivière, profitez d'un cadre exceptionnel.", en: "In the heart of Charente, between vineyards and river, enjoy an exceptional setting." },
  "location.cognac": { fr: "Cognac", en: "Cognac" },
  "location.cognac.desc": { fr: "22 km — Maisons de négoce, dégustations, patrimoine", en: "22 km — Trading houses, tastings, heritage" },
  "location.angouleme": { fr: "Angoulême", en: "Angoulême" },
  "location.angouleme.desc": { fr: "15 km — Cité de la BD, gare TGV, remparts", en: "15 km — Comic strip city, TGV station, ramparts" },
  "location.vineyards": { fr: "Vignobles & Charente", en: "Vineyards & Charente" },
  "location.vineyards.desc": { fr: "Balades, écluses, forêts et vignes à proximité", en: "Walks, locks, forests and vines nearby" },

  "cta.title": { fr: "Réservez votre séjour", en: "Book Your Stay" },
  "cta.subtitle": { fr: "Découvrez le charme de la Charente dans une maison d'exception. Réservez directement sur Airbnb ou Booking, ou contactez-nous pour toute demande.", en: "Discover the charm of Charente in an exceptional house. Book directly on Airbnb or Booking, or contact us for any enquiry." },

  "blog.title": { fr: "Découvrir la Charente", en: "Discover Charente" },
  "blog.subtitle": { fr: "Guides, idées de sorties et bons plans pour profiter pleinement de votre séjour entre Cognac et Angoulême.", en: "Guides, outing ideas and tips to make the most of your stay between Cognac and Angoulême." },
  "blog.readMore": { fr: "Lire la suite", en: "Read more" },

  "article.back": { fr: "Retour au blog", en: "Back to blog" },
  "article.notFound": { fr: "Article non trouvé", en: "Article not found" },
  "article.notFoundDesc": { fr: "Cet article n'existe pas ou a été supprimé.", en: "This article does not exist or has been removed." },
  "article.stay": { fr: "Séjournez à La Maison de Vacances à Hiersac", en: "Stay at La Maison de Vacances in Hiersac" },
  "article.bookAirbnb": { fr: "Réserver sur Airbnb", en: "Book on Airbnb" },
  "article.contactUs": { fr: "Nous contacter", en: "Contact us" },

  "contact.title": { fr: "Contactez-nous", en: "Contact Us" },
  "contact.subtitle": { fr: "Une question, une demande de réservation ou besoin d'informations complémentaires ? N'hésitez pas à nous écrire.", en: "A question, booking request or need additional information? Don't hesitate to write to us." },
  "contact.thanks": { fr: "Merci !", en: "Thank you!" },
  "contact.sent": { fr: "Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais.", en: "Your message has been sent successfully. We will reply as soon as possible." },
  "contact.newMessage": { fr: "Envoyer un autre message", en: "Send another message" },
  "contact.name": { fr: "Nom complet", en: "Full name" },
  "contact.namePlaceholder": { fr: "Votre nom", en: "Your name" },
  "contact.email": { fr: "Email", en: "Email" },
  "contact.phone": { fr: "Téléphone (optionnel)", en: "Phone (optional)" },
  "contact.checkIn": { fr: "Arrivée", en: "Check-in" },
  "contact.checkOut": { fr: "Départ", en: "Check-out" },
  "contact.guests": { fr: "Voyageurs", en: "Guests" },
  "contact.message": { fr: "Message", en: "Message" },
  "contact.messagePlaceholder": { fr: "Décrivez votre demande...", en: "Describe your request..." },
  "contact.sending": { fr: "Envoi en cours...", en: "Sending..." },
  "contact.send": { fr: "Envoyer le message", en: "Send message" },
  "contact.info": { fr: "Informations pratiques", en: "Practical information" },
  "contact.address": { fr: "Adresse", en: "Address" },
  "contact.hours": { fr: "Horaires", en: "Hours" },
  "contact.checkInTime": { fr: "Arrivée à partir de 15h00", en: "Check-in from 3:00 PM" },
  "contact.checkOutTime": { fr: "Départ avant 11h00", en: "Check-out before 11:00 AM" },
  "contact.directBooking": { fr: "Réservation directe", en: "Direct Booking" },
  "contact.bookVia": { fr: "Réservez directement via nos plateformes partenaires :", en: "Book directly via our partner platforms:" },
  "contact.bookAirbnb": { fr: "Réserver sur Airbnb", en: "Book on Airbnb" },
  "contact.bookBooking": { fr: "Réserver sur Booking", en: "Book on Booking" },
  "contact.nearby": { fr: "À proximité", en: "Nearby" },
  "contact.nearby1": { fr: "Boulangerie, pharmacie, épicerie à 5 min à pied", en: "Bakery, pharmacy, grocery 5 min walk" },
  "contact.nearby2": { fr: "Marché les mercredis et dimanches", en: "Market on Wednesdays and Sundays" },
  "contact.nearby3": { fr: "Gare TGV Angoulême à 15 min", en: "Angoulême TGV station 15 min" },
  "contact.nearby4": { fr: "Cognac à 22 km", en: "Cognac 22 km" },
  "contact.nearby5": { fr: "Aéroport de Limoges à 108 km", en: "Limoges airport 108 km" },
  "contact.successTitle": { fr: "Message envoyé !", en: "Message sent!" },
  "contact.successDesc": { fr: "Nous vous répondrons dans les plus brefs délais.", en: "We will reply as soon as possible." },
  "contact.errorTitle": { fr: "Erreur", en: "Error" },
  "contact.errorDesc": { fr: "Un problème est survenu. Veuillez réessayer.", en: "A problem occurred. Please try again." },
  "contact.nameError": { fr: "Veuillez entrer votre nom", en: "Please enter your name" },
  "contact.emailError": { fr: "Adresse email invalide", en: "Invalid email address" },
  "contact.messageError": { fr: "Votre message doit contenir au moins 10 caractères", en: "Your message must contain at least 10 characters" },

  "footer.desc": { fr: "Maison charentaise avec piscine, jacuzzi et salle de sport à Hiersac. Entre Cognac et Angoulême.", en: "Charente house with pool, hot tub and fitness room in Hiersac. Between Cognac and Angoulême." },
  "footer.navigation": { fr: "Navigation", en: "Navigation" },
  "footer.booking": { fr: "Réservation", en: "Booking" },
  "footer.contact": { fr: "Contact", en: "Contact" },
  "footer.rights": { fr: "Tous droits réservés.", en: "All rights reserved." },

  "seo.home.title": { fr: "La Maison de Vacances avec Piscine | Hiersac, Charente - Location Vacances", en: "La Maison de Vacances with Pool | Hiersac, Charente - Vacation Rental" },
  "seo.home.desc": { fr: "Maison charentaise de charme avec piscine, jacuzzi et salle de sport à Hiersac. Entre Cognac et Angoulême, idéale pour séjour en famille ou télétravail. Note 5/5.", en: "Charming Charente house with pool, hot tub and fitness room in Hiersac. Between Cognac and Angoulême, ideal for family stays or remote work. 5/5 rating." },
  "seo.blog.title": { fr: "Blog - Découvrir la Charente | La Maison de Vacances Hiersac", en: "Blog - Discover Charente | La Maison de Vacances Hiersac" },
  "seo.blog.desc": { fr: "Guides et articles sur la Charente : Cognac, Angoulême, vignobles, randonnées et activités en famille. Préparez votre séjour à Hiersac.", en: "Guides and articles about Charente: Cognac, Angoulême, vineyards, hikes and family activities. Plan your stay in Hiersac." },
  "seo.contact.title": { fr: "Contact | La Maison de Vacances Hiersac - Réservation & Renseignements", en: "Contact | La Maison de Vacances Hiersac - Booking & Information" },
  "seo.contact.desc": { fr: "Contactez-nous pour réserver votre séjour dans notre maison charentaise à Hiersac. Formulaire de contact, informations pratiques et liens de réservation.", en: "Contact us to book your stay in our Charente house in Hiersac. Contact form, practical information and booking links." },
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, []);

  const t = (key: string): string => {
    return translations[key]?.[lang] || translations[key]?.["fr"] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
