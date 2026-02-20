import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, BookOpen, Mail, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";

export default function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useI18n();

  const navItems = [
    { href: "/", label: t("nav.home"), icon: Home },
    { href: "/blog", label: t("nav.blog"), icon: BookOpen },
    { href: "/contact", label: t("nav.contact"), icon: Mail },
  ];

  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = isHome && !scrolled
    ? "bg-transparent"
    : "bg-background/95 backdrop-blur-md border-b";

  const textColor = isHome && !scrolled ? "text-white" : "text-foreground";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
      data-testid="header-nav"
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/">
          <span className={`font-serif text-xl font-bold cursor-pointer ${textColor} transition-colors`} data-testid="link-logo">
            La Maison de Vacances
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={`${textColor} transition-colors ${location === item.href ? "font-semibold" : ""}`}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Button>
            </Link>
          ))}
          <Button
            variant="ghost"
            size="sm"
            className={`${textColor} transition-colors gap-1`}
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            data-testid="button-lang-toggle"
          >
            <Globe className="w-4 h-4" />
            {lang === "fr" ? "EN" : "FR"}
          </Button>
          <a href="https://www.airbnb.fr/rooms/1482578037265572057" target="_blank" rel="noopener noreferrer">
            <Button size="sm" data-testid="button-nav-reserve">
              {t("nav.reserve")}
            </Button>
          </a>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button size="icon" variant="ghost" className={textColor} data-testid="button-mobile-menu">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <nav className="flex flex-col gap-2 mt-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={location === item.href ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setOpen(false)}
                    data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  >
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.label}
                  </Button>
                </Link>
              ))}
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => { setLang(lang === "fr" ? "en" : "fr"); setOpen(false); }}
                data-testid="button-mobile-lang"
              >
                <Globe className="w-4 h-4 mr-3" />
                {lang === "fr" ? "English" : "Français"}
              </Button>
              <a href="https://www.airbnb.fr/rooms/1482578037265572057" target="_blank" rel="noopener noreferrer" className="mt-4">
                <Button className="w-full" onClick={() => setOpen(false)}>{t("nav.reserve")}</Button>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
