import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";
import type { Article } from "@shared/schema";

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: article, isLoading } = useQuery<Article>({
    queryKey: ["/api/articles", slug],
    enabled: !!slug,
  });

  useSEO({
    title: article
      ? `${article.title} | Maison de Charme Hiersac`
      : "Article | Maison de Charme Hiersac",
    description: article?.excerpt || "D\u00e9couvrez nos articles sur la Charente.",
    ogType: "article",
  });

  if (isLoading) {
    return (
      <div className="min-h-screen py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <Skeleton className="h-8 w-32 mb-6" />
          <Skeleton className="h-72 w-full rounded-md mb-8" />
          <Skeleton className="h-10 w-3/4 mb-4" />
          <Skeleton className="h-5 w-1/3 mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen py-16 md:py-24 px-4 text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-2xl font-bold mb-4">Article non trouv&eacute;</h1>
          <p className="text-muted-foreground mb-6">Cet article n'existe pas ou a &eacute;t&eacute; supprim&eacute;.</p>
          <Link href="/blog">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 md:py-24 px-4" data-testid="page-article">
      <article className="max-w-3xl mx-auto">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6" data-testid="button-back-blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au blog
          </Button>
        </Link>

        <img
          src={article.image}
          alt={article.title}
          className="w-full h-72 md:h-96 object-cover rounded-md mb-8"
        />

        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <Badge variant="secondary">{article.category}</Badge>
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(article.createdAt).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>

        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8 leading-tight" data-testid="text-article-title">
          {article.title}
        </h1>

        <div
          className="prose prose-lg max-w-none text-muted-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: article.content }}
          data-testid="text-article-content"
        />

        <div className="mt-12 pt-8 border-t">
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">S&eacute;journez dans notre maison de charme &agrave; Hiersac</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.airbnb.fr/rooms/1482578037265572057" target="_blank" rel="noopener noreferrer">
              <Button data-testid="button-article-airbnb">R&eacute;server sur Airbnb</Button>
            </a>
            <Link href="/contact">
              <Button variant="outline" data-testid="button-article-contact">Nous contacter</Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
