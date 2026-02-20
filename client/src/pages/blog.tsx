import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Calendar } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";
import { useI18n } from "@/lib/i18n";
import type { Article } from "@shared/schema";

export default function Blog() {
  const { lang, t } = useI18n();

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles?.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <Card className="overflow-hidden hover-elevate cursor-pointer h-full" data-testid={`card-article-${article.id}`}>
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
                      {t("blog.readMore")} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
