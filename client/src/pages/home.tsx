import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Waves, Dumbbell, Wifi, Car, ThermometerSun, Tv, UtensilsCrossed,
  TreePine, Star, MapPin, ChevronRight, ArrowRight, Users, BedDouble,
  Bath, Maximize, Calendar
} from "lucide-react";
import { SiAirbnb } from "react-icons/si";
import { useSEO } from "@/hooks/use-seo";

const amenities = [
  { icon: Waves, label: "Piscine & Jacuzzi", desc: "Ouvert juin-septembre" },
  { icon: Dumbbell, label: "Salle de Sport", desc: "Acc\u00e8s privatis\u00e9" },
  { icon: Wifi, label: "Fibre Optique", desc: "Id\u00e9al t\u00e9l\u00e9travail" },
  { icon: Car, label: "Parking Gratuit", desc: "Sur place" },
  { icon: ThermometerSun, label: "Climatisation", desc: "Tout confort" },
  { icon: Tv, label: "T\u00e9l\u00e9vision", desc: "Replay & VOD" },
  { icon: UtensilsCrossed, label: "Cuisine \u00c9quip\u00e9e", desc: "Tout inclus" },
  { icon: TreePine, label: "Jardin & Terrasse", desc: "Espace vert" },
];

const reviews = [
  {
    name: "Annie",
    rating: 5,
    text: "Le logement est agr\u00e9able : pratique, propre, d\u00e9cor\u00e9 avec go\u00fbt et disposant de nombreuses possibilit\u00e9s de loisirs et activit\u00e9s. Nous avons pass\u00e9 une nuit tr\u00e8s reposante. Au top !",
    date: "F\u00e9vrier 2026",
  },
  {
    name: "Katia",
    rating: 5,
    text: "Un am\u00e9nagement de qualit\u00e9, un \u00e9quipement au top, une d\u00e9coration de go\u00fbt et un environnement calme. Un h\u00f4te particuli\u00e8rement accueillant et r\u00e9actif. Une perle rare sans aucun doute.",
    date: "Janvier 2026",
  },
  {
    name: "Ilias",
    rating: 5,
    text: "Parfait pour un s\u00e9jour de quelques jours autour d'Angoul\u00eame. Nous nous sommes sentis tout de suite comme chez nous. L'accueil \u00e9tait tr\u00e8s aux petits soins.",
    date: "F\u00e9vrier 2026",
  },
  {
    name: "Ha\u00efkel",
    rating: 5,
    text: "S\u00e9jour tr\u00e8s agr\u00e9able. Le logement est conforme \u00e0 l'annonce, propre, bien \u00e9quip\u00e9 et facile \u00e0 vivre au quotidien. Nous reviendrions sans h\u00e9siter.",
    date: "Janvier 2026",
  },
  {
    name: "Gregory",
    rating: 5,
    text: "H\u00f4te tr\u00e8s r\u00e9actif. Logement nickel et tr\u00e8s qualitatif. Caf\u00e9ti\u00e8re \u00e0 grain, produits de douche comme dans un h\u00f4tel. Rien \u00e0 dire !",
    date: "F\u00e9vrier 2026",
  },
];

const gallery = [
  { src: "/images/salon.png", alt: "Salon lumineux avec d\u00e9coration de charme" },
  { src: "/images/chambre.png", alt: "Chambre principale avec lit king size" },
  { src: "/images/cuisine.png", alt: "Cuisine enti\u00e8rement \u00e9quip\u00e9e" },
  { src: "/images/pool.png", alt: "Piscine ext\u00e9rieure avec jardin" },
  { src: "/images/fitness.png", alt: "Salle de sport \u00e9quip\u00e9e" },
  { src: "/images/charente-river.png", alt: "Bords de Charente" },
];

export default function Home() {
  useSEO({
    title: "Maison de Charme avec Piscine | Hiersac, Charente - Location Vacances",
    description: "Maison charentaise de charme avec piscine, jacuzzi et salle de sport \u00e0 Hiersac. Entre Cognac et Angoul\u00eame, id\u00e9ale pour s\u00e9jour en famille ou t\u00e9l\u00e9travail. Note 5/5.",
    ogType: "website",
  });

  return (
    <div className="min-h-screen">
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden" data-testid="section-hero">
        <img
          src="/images/hero-house.png"
          alt="Maison charentaise de charme avec piscine \u00e0 Hiersac"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-16 px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white backdrop-blur-sm border-white/20">
            <Star className="w-3 h-3 mr-1 fill-amber-400 text-amber-400" />
            5,0/5 sur Airbnb
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-tight">
            Maison de Charme avec Piscine
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-2 max-w-2xl">
            Hiersac, Charente &mdash; Entre Cognac et Angoul&ecirc;me
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-white/80 text-sm">
            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 5 voyageurs</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> 2 chambres</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span className="flex items-center gap-1"><Bath className="w-4 h-4" /> 2 salles de bain</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span className="flex items-center gap-1"><Maximize className="w-4 h-4" /> 120 m&sup2;</span>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://www.airbnb.fr/rooms/1482578037265572057" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#FF5A5F] border-[#FF5A5F] text-white" data-testid="button-airbnb">
                <SiAirbnb className="w-5 h-5 mr-2" />
                R&eacute;server sur Airbnb
              </Button>
            </a>
            <a href="https://www.booking.com/hotel/fr/maison-charentaise-de-charme-avec-piscine-jardin-et-salle-de-sport.fr.html" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#003580] border-[#003580] text-white" data-testid="button-booking">
                R&eacute;server sur Booking
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white/40 backdrop-blur-sm bg-white/10" data-testid="button-contact-hero">
                <Calendar className="w-4 h-4 mr-2" />
                Nous Contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4" data-testid="section-about">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Votre s&eacute;jour en Charente</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Maison charentaise de 120 m&sup2; r&eacute;partie sur plusieurs niveaux, id&eacute;ale pour un s&eacute;jour au calme
              en famille, entre amis ou en t&eacute;l&eacute;travail.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Situ&eacute;e au c&oelig;ur de la Charente, entre Cognac et Angoul&ecirc;me, &agrave; 15 minutes de la gare TGV
                d'Angoul&ecirc;me, notre maison vous offre confort, charme et qualit&eacute; de vie.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Le logement comprend un salon lumineux, une cuisine enti&egrave;rement &eacute;quip&eacute;e, deux chambres,
                deux salles de douche et un espace de t&eacute;l&eacute;travail avec connexion fibre et &eacute;crans.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Les espaces ext&eacute;rieurs comprennent une cour int&eacute;rieure, un jardin, une cuisine d'&eacute;t&eacute;,
                une piscine et un jacuzzi ouverts du 1er juin au 30 septembre, avec cr&eacute;neaux de privatisation r&eacute;servables.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>4 Rue d'Angoul&ecirc;me, 16290 Hiersac, France</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img src="/images/salon.png" alt="Salon" className="rounded-md w-full h-40 object-cover" />
              <img src="/images/chambre.png" alt="Chambre" className="rounded-md w-full h-40 object-cover" />
              <img src="/images/cuisine.png" alt="Cuisine" className="rounded-md w-full h-40 object-cover" />
              <img src="/images/pool.png" alt="Piscine" className="rounded-md w-full h-40 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-card" data-testid="section-amenities">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">&Eacute;quipements & Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {amenities.map((item) => (
              <Card key={item.label} className="p-5 text-center hover-elevate">
                <item.icon className="w-7 h-7 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4" data-testid="section-gallery">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">Galerie Photos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-md">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-card" data-testid="section-reviews">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">Avis de nos voyageurs</h2>
            <p className="text-muted-foreground">Note de 5,0/5 sur la base de 5 commentaires</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review, i) => (
              <Card key={i} className="p-6" data-testid={`card-review-${i}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4" data-testid="section-location">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">Emplacement Id&eacute;al</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Au c&oelig;ur de la Charente, entre vignobles et rivi&egrave;re, profitez d'un cadre exceptionnel.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Card className="p-6 text-center hover-elevate" data-testid="card-location-cognac">
              <img src="/images/cognac.png" alt="Cognac" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="font-semibold mb-1">Cognac</h3>
              <p className="text-sm text-muted-foreground">22 km &mdash; Maisons de n&eacute;goce, d&eacute;gustations, patrimoine</p>
            </Card>
            <Card className="p-6 text-center hover-elevate" data-testid="card-location-angouleme">
              <img src="/images/angouleme.png" alt="Angoul&ecirc;me" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="font-semibold mb-1">Angoul&ecirc;me</h3>
              <p className="text-sm text-muted-foreground">15 km &mdash; Cit&eacute; de la BD, gare TGV, remparts</p>
            </Card>
            <Card className="p-6 text-center hover-elevate" data-testid="card-location-vignobles">
              <img src="/images/vignobles.png" alt="Vignobles charentais" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="font-semibold mb-1">Vignobles & Charente</h3>
              <p className="text-sm text-muted-foreground">Balades, &eacute;cluses, for&ecirc;ts et vignes &agrave; proximit&eacute;</p>
            </Card>
          </div>
          <div className="rounded-md overflow-hidden border h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11199.684!2d0.0522!3d45.6567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48013c0c6a0cb7e7%3A0x40d37521e0d5b00!2s16290%20Hiersac!5e0!3m2!1sfr!2sfr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Hiersac"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-primary text-primary-foreground" data-testid="section-cta">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">R&eacute;servez votre s&eacute;jour</h2>
          <p className="text-primary-foreground/80 mb-8 text-lg max-w-2xl mx-auto">
            D&eacute;couvrez le charme de la Charente dans une maison d'exception.
            R&eacute;servez directement sur Airbnb ou Booking, ou contactez-nous pour toute demande.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://www.airbnb.fr/rooms/1482578037265572057" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10 backdrop-blur-sm" data-testid="button-airbnb-cta">
                <SiAirbnb className="w-5 h-5 mr-2" />
                Airbnb
              </Button>
            </a>
            <a href="https://www.booking.com/hotel/fr/maison-charentaise-de-charme-avec-piscine-jardin-et-salle-de-sport.fr.html" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10 backdrop-blur-sm" data-testid="button-booking-cta">
                  Booking
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary" data-testid="button-contact-cta">
                Nous Contacter
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
