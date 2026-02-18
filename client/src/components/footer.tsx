import { Link } from "wouter";
import { MapPin, Mail } from "lucide-react";
import { SiAirbnb } from "react-icons/si";
import { BookingIcon } from "@/components/booking-icon";

export default function Footer() {
  return (
    <footer className="bg-card border-t" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-lg font-bold mb-3">La Maison de Vacances</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Maison charentaise avec piscine, jacuzzi et salle de sport &agrave; Hiersac.
              Entre Cognac et Angoul&ecirc;me.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-sm text-muted-foreground cursor-pointer" data-testid="link-footer-accueil">Accueil</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="text-sm text-muted-foreground cursor-pointer" data-testid="link-footer-blog">Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-muted-foreground cursor-pointer" data-testid="link-footer-contact">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">R&eacute;servation</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.airbnb.fr/rooms/1482578037265572057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground flex items-center gap-2"
                  data-testid="link-footer-airbnb"
                >
                  <SiAirbnb className="w-4 h-4 text-[#FF5A5F]" />
                  Airbnb
                </a>
              </li>
              <li>
                <a
                  href="https://www.booking.com/hotel/fr/maison-charentaise-de-charme-avec-piscine-jardin-et-salle-de-sport.fr.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground flex items-center gap-2"
                  data-testid="link-footer-booking"
                >
                  <BookingIcon className="w-4 h-4 text-[#003580]" />
                  Booking.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>4 Rue d'Angoul&ecirc;me, 16290 Hiersac, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} La Maison de Vacances &mdash; Hiersac, Charente. Tous droits r&eacute;serv&eacute;s.</p>
        </div>
      </div>
    </footer>
  );
}
