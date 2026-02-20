import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

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

  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactMessageSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Donn\u00e9es invalides", details: parsed.error.errors });
      }
      const message = await storage.createContactMessage(parsed.data);
      res.status(201).json(message);
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de l'envoi du message" });
    }
  });

  return httpServer;
}
