import {
  type Article, type InsertArticle,
  type ContactMessage, type InsertContactMessage,
  articles, contactMessages,
} from "@shared/schema";
import { db } from "./db";
import { eq, and } from "drizzle-orm";

export interface IStorage {
  getArticles(lang?: string): Promise<Article[]>;
  getArticleBySlug(slug: string, lang?: string): Promise<Article | undefined>;
  createArticle(article: InsertArticle): Promise<Article>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class DatabaseStorage implements IStorage {
  async getArticles(lang: string = "fr"): Promise<Article[]> {
    return db.select().from(articles).where(and(eq(articles.published, true), eq(articles.lang, lang)));
  }

  async getArticleBySlug(slug: string, lang: string = "fr"): Promise<Article | undefined> {
    const [article] = await db.select().from(articles).where(and(eq(articles.slug, slug), eq(articles.lang, lang)));
    return article || undefined;
  }

  async createArticle(article: InsertArticle): Promise<Article> {
    const [created] = await db.insert(articles).values(article).returning();
    return created;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [created] = await db.insert(contactMessages).values(message).returning();
    return created;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return db.select().from(contactMessages);
  }
}

export const storage = new DatabaseStorage();
