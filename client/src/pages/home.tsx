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
import { BookingIcon } from "@/components/booking-icon";
import { useSEO } from "@/hooks/use-seo";
import { useI18n } from "@/lib/i18n";

export default function Home() {
  const { t } = useI18n();

  useSEO({
    title: t("seo.home.title"),
    description: t("seo.home.desc"),
    ogType: "website",
  });

  const amenities = [
    { icon: Waves, label: t("amenity.pool"), desc: t("amenity.pool.desc") },
    { icon: Dumbbell, label: t("amenity.gym"), desc: t("amenity.gym.desc") },
    { icon: Wifi, label: t("amenity.wifi"), desc: t("amenity.wifi.desc") },
    { icon: Car, label: t("amenity.parking"), desc: t("amenity.parking.desc") },
    { icon: ThermometerSun, label: t("amenity.ac"), desc: t("amenity.ac.desc") },
    { icon: Tv, label: t("amenity.tv"), desc: t("amenity.tv.desc") },
    { icon: UtensilsCrossed, label: t("amenity.kitchen"), desc: t("amenity.kitchen.desc") },
    { icon: TreePine, label: t("amenity.garden"), desc: t("amenity.garden.desc") },
  ];

  const reviews = [
    { name: "Annie", rating: 5, text: t("review.annie"), date: t("review.annie.date") },
    { name: "Katia", rating: 5, text: t("review.katia"), date: t("review.katia.date") },
    { name: "Ilias", rating: 5, text: t("review.ilias"), date: t("review.ilias.date") },
    { name: "Haïkel", rating: 5, text: t("review.haikel"), date: t("review.haikel.date") },
    { name: "Gregory", rating: 5, text: t("review.gregory"), date: t("review.gregory.date") },
  ];

  const gallery = [
    { src: "/images/photo2.jpg", alt: t("gallery.alt1") },
    { src: "/images/chambre1.jpg", alt: t("gallery.alt2") },
    { src: "/images/photo3.jpg", alt: t("gallery.alt3") },
    { src: "/images/photo4.jpg", alt: t("gallery.alt4") },
    { src: "/images/chambre2.jpg", alt: t("gallery.alt5") },
    { src: "/images/photo5.jpg", alt: t("gallery.alt6") },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden" data-testid="section-hero">
        <img
          src="/images/photo2.jpg"
          alt="La Maison de Vacances - Hiersac"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-16 px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white backdrop-blur-sm border-white/20">
            <Star className="w-3 h-3 mr-1 fill-amber-400 text-amber-400" />
            {t("hero.rating")}
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-tight">La Maison de Vacances</h1>
          <p className="text-lg md:text-xl text-white/90 mb-2 max-w-2xl">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-white/80 text-sm">
            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {t("hero.guests")}</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> {t("hero.bedrooms")}</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span className="flex items-center gap-1"><Bath className="w-4 h-4" /> {t("hero.bathrooms")}</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span className="flex items-center gap-1"><Maximize className="w-4 h-4" /> 120 m&sup2;</span>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://www.airbnb.fr/rooms/1482578037265572057" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#FF5A5F] border-[#FF5A5F] text-white" data-testid="button-airbnb">
                <SiAirbnb className="w-5 h-5 mr-2" />
                {t("hero.bookAirbnb")}
              </Button>
            </a>
            <a href="https://www.booking.com/hotel/fr/maison-charentaise-de-charme-avec-piscine-jardin-et-salle-de-sport.fr.html" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#003580] border-[#003580] text-white" data-testid="button-booking">
                <BookingIcon className="w-5 h-5 mr-2" />
                {t("hero.bookBooking")}
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white/40 backdrop-blur-sm bg-white/10" data-testid="button-contact-hero">
                <Calendar className="w-4 h-4 mr-2" />
                {t("hero.contactUs")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 px-4" data-testid="section-about">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{t("about.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t("about.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">{t("about.p1")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("about.p2")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("about.p3")}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Rue d'Angoul&ecirc;me, 16290 Hiersac, France</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img src="/images/salon.jpg" alt="Salon" className="rounded-md w-full h-40 object-cover" />
              <img src="/images/chambre1.jpg" alt="Chambre" className="rounded-md w-full h-40 object-cover" />
              <img src="/images/photo4.jpg" alt="Cuisine" className="rounded-md w-full h-40 object-cover" />
              <img src="/images/photo3.jpg" alt="Salle à manger" className="rounded-md w-full h-40 object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 px-4 bg-card" data-testid="section-amenities">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">{t("amenities.title")}</h2>
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">{t("gallery.title")}</h2>
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">{t("reviews.title")}</h2>
            <p className="text-muted-foreground">{t("reviews.subtitle")}</p>
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">{t("location.title")}</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            {t("location.subtitle")}
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Card className="p-6 text-center hover-elevate" data-testid="card-location-cognac">
              <img src="/images/cognac.png" alt="Cognac" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="font-semibold mb-1">{t("location.cognac")}</h3>
              <p className="text-sm text-muted-foreground">{t("location.cognac.desc")}</p>
            </Card>
            <Card className="p-6 text-center hover-elevate" data-testid="card-location-angouleme">
              <img src="/images/angouleme.png" alt="Angoulême" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="font-semibold mb-1">{t("location.angouleme")}</h3>
              <p className="text-sm text-muted-foreground">{t("location.angouleme.desc")}</p>
            </Card>
            <Card className="p-6 text-center hover-elevate" data-testid="card-location-vignobles">
              <img src="/images/vignobles.png" alt="Vineyards" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="font-semibold mb-1">{t("location.vineyards")}</h3>
              <p className="text-sm text-muted-foreground">{t("location.vineyards.desc")}</p>
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{t("cta.title")}</h2>
          <p className="text-primary-foreground/80 mb-8 text-lg max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://www.airbnb.fr/rooms/1482578037265572057" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10 backdrop-blur-sm" data-testid="button-airbnb-cta">
                <SiAirbnb className="w-5 h-5 mr-2" />
                Airbnb
              </Button>
            </a>
            <a href="https://www.booking.com/hotel/fr/maison-charentaise-de-charme-avec-piscine-jardin-et-salle-de-sport.fr.html" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#003580] border-[#003580] text-white" data-testid="button-booking-cta">
                <BookingIcon className="w-5 h-5 mr-2" />
                Booking
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary" data-testid="button-contact-cta">
                {t("hero.contactUs")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
