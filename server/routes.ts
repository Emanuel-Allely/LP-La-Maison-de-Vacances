import type { Express } from "express";
import { createServer, type Server } from "http";
import { Resend } from "resend";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/articles", async (req, res) => {
    try {
      const lang = (req.query.lang as string) || "fr";
      const articles = await storage.getArticles(lang);
      res.json(articles);
    } catch (error) {
      res.status(500).json({ error: "Error fetching articles" });
    }
  });

  app.get("/api/articles/:slug", async (req, res) => {
    try {
      const lang = (req.query.lang as string) || "fr";
      const article = await storage.getArticleBySlug(req.params.slug, lang);
      if (!article) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ error: "Error fetching article" });
    }
  });

  app.get("/robots.txt", (_req, res) => {
    const robotsTxt = `User-agent: *
Allow: /
Allow: /blog
Allow: /blog/
Allow: /contact
Disallow: /api/

Sitemap: https://la-maison-de-vacances.com/sitemap.xml
`;
    res.set("Content-Type", "text/plain");
    res.send(robotsTxt);
  });

  app.get("/sitemap.xml", async (_req, res) => {
    try {
      const baseUrl = "https://la-maison-de-vacances.com";
      const today = new Date().toISOString().split("T")[0];

      const staticPages = [
        { path: "/", priority: "1.0", changefreq: "weekly" },
        { path: "/blog", priority: "0.8", changefreq: "weekly" },
        { path: "/contact", priority: "0.7", changefreq: "monthly" },
      ];

      const frArticles = await storage.getArticles("fr");
      const enArticles = await storage.getArticles("en");

      let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

      for (const page of staticPages) {
        xml += `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
      }

      for (const article of frArticles) {
        xml += `  <url>
    <loc>${baseUrl}/blog/${article.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
      }

      for (const article of enArticles) {
        xml += `  <url>
    <loc>${baseUrl}/blog/${article.slug}?lang=en</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
      }

      xml += `</urlset>`;

      res.set("Content-Type", "application/xml");
      res.send(xml);
    } catch (error) {
      res.status(500).send("Error generating sitemap");
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactMessageSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Donn\u00e9es invalides", details: parsed.error.errors });
      }
      const message = await storage.createContactMessage(parsed.data);

      try {
        const { name, email, phone, checkIn, checkOut, guests, message: contactMessage } = parsed.data;
        await resend.emails.send({
          from: "La Maison de Vacances <onboarding@resend.dev>",
          to: "wonderux@gmail.com",
          subject: `Nouveau message de ${name} - La Maison de Vacances`,
          html: `
            <h2>Nouveau message depuis le formulaire de contact</h2>
            <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
              <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Nom</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Téléphone</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td></tr>` : ""}
              ${checkIn ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Arrivée</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${checkIn}</td></tr>` : ""}
              ${checkOut ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Départ</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${checkOut}</td></tr>` : ""}
              ${guests ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Voyageurs</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${guests}</td></tr>` : ""}
              <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Message</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${contactMessage}</td></tr>
            </table>
          `,
        });
      } catch (emailError) {
        console.error("Erreur envoi email:", emailError);
      }

      res.status(201).json(message);
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de l'envoi du message" });
    }
  });

  return httpServer;
}
