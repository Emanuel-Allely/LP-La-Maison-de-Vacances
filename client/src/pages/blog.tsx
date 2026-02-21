import { useState, useRef, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, ChevronUp, Calendar, MapPin } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";
import { useI18n } from "@/lib/i18n";
import type { Article } from "@shared/schema";

export default function Blog() {
  const { lang, t } = useI18n();
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const expandedRef = useRef<HTMLDivElement>(null);
  const [, setLocation] = useLocation();

  useSEO({
    title: t("seo.blog.title"),
    description: t("seo.blog.desc"),
    ogType: "blog",
  });

  const { data: articles, isLoading } = useQuery<Article[]>({
    queryKey: ["/api/articles", { lang }],
    queryFn: async () => {
      const res = await fetch(`/api/articles?lang=${lang}`);
      if (!res.ok) throw new Error("Failed to fetch articles");
      return res.json();
    },
  });

  useEffect(() => {
    if (expandedId !== null && expandedRef.current) {
      expandedRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [expandedId]);

  const handleContentClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest("a");
    if (anchor) {
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("/blog/")) {
        e.preventDefault();
        const slug = href.replace("/blog/", "");
        const targetArticle = articles?.find((a) => a.slug === slug);
        if (targetArticle) {
          setExpandedId(targetArticle.id);
        } else {
          setLocation(href);
        }
      }
    }
  }, [articles, setLocation]);

  const handleCardClick = (article: Article) => {
    if (expandedId === article.id) {
      setExpandedId(null);
    } else {
      setExpandedId(article.id);
    }
  };

  const expandedArticle = articles?.find((a) => a.id === expandedId);

  return (
    <div className="min-h-screen py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4" data-testid="text-blog-title">
            {t("blog.title")}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("blog.subtitle")}
          </p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-5 space-y-3">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <>
            {expandedArticle && (
              <div ref={expandedRef} className="mb-10 scroll-mt-24" data-testid="expanded-article">
                <Card className="overflow-hidden">
                  <img
                    src={expandedArticle.image}
                    alt={expandedArticle.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary">{expandedArticle.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(expandedArticle.createdAt).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 leading-tight" data-testid="text-expanded-title">
                      {expandedArticle.title}
                    </h2>
                    <div
                      className="prose prose-lg max-w-none text-muted-foreground leading-relaxed mb-8
                        [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:opacity-80"
                      dangerouslySetInnerHTML={{ __html: expandedArticle.content }}
                      onClick={handleContentClick}
                      data-testid="text-expanded-content"
                    />
                    <div className="flex flex-wrap items-center gap-4 pt-6 border-t">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm">{t("article.stay")}</span>
                      </div>
                      <a href="https://www.airbnb.fr/rooms/1482578037265572057" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" data-testid="button-expanded-airbnb">{t("article.bookAirbnb")}</Button>
                      </a>
                      <Link href="/contact">
                        <Button variant="outline" size="sm" data-testid="button-expanded-contact">{t("article.contactUs")}</Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setExpandedId(null)}
                        className="ml-auto"
                        data-testid="button-collapse-article"
                      >
                        <ChevronUp className="w-4 h-4 mr-1" />
                        {lang === "fr" ? "Réduire" : "Collapse"}
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles?.map((article) => (
                <Card
                  key={article.id}
                  className={`overflow-hidden hover-elevate cursor-pointer h-full transition-all duration-300 ${
                    expandedId === article.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => handleCardClick(article)}
                  data-testid={`card-article-${article.id}`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(article.createdAt).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h2 className="font-serif font-bold text-lg mb-2 leading-snug">{article.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{article.excerpt}</p>
                    <span className="text-sm text-primary font-medium flex items-center gap-1">
                      {expandedId === article.id ? (
                        <>{lang === "fr" ? "Article ouvert ↑" : "Article open ↑"}</>
                      ) : (
                        <>{t("blog.readMore")} <ArrowRight className="w-3.5 h-3.5" /></>
                      )}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
