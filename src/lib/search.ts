import Fuse from "fuse.js";
import { searchIndex, type SearchItem, type SearchType } from "./searchIndex";

const fuse = new Fuse<SearchItem>(searchIndex, {
  keys: [
    { name: "title", weight: 0.5 },
    { name: "subtitle", weight: 0.25 },
    { name: "keywords", weight: 0.15 },
    { name: "description", weight: 0.1 },
  ],
  threshold: 0.35,
  ignoreLocation: true,
  minMatchCharLength: 2,
  includeMatches: true,
  includeScore: true,
});

export interface SearchResult {
  item: SearchItem;
  score: number;
}

export function search(query: string, opts?: { type?: SearchType; limit?: number }): SearchResult[] {
  const q = query.trim();
  if (!q) return [];
  let results = fuse.search(q).map((r) => ({ item: r.item, score: r.score ?? 1 }));
  if (opts?.type) results = results.filter((r) => r.item.type === opts.type);
  if (opts?.limit) results = results.slice(0, opts.limit);
  return results;
}

export function searchGrouped(query: string, perGroup = 5): Record<SearchType, SearchResult[]> {
  const groups: Record<SearchType, SearchResult[]> = {
    event: [],
    seite: [],
    ausstattung: [],
    faq: [],
  };
  for (const r of search(query)) {
    if (groups[r.item.type].length < perGroup) {
      groups[r.item.type].push(r);
    }
  }
  return groups;
}

/** Highlight matches by wrapping with <mark> spans. */
export function highlight(text: string, query: string): string {
  const q = query.trim();
  if (!q) return text;
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(new RegExp(`(${escaped})`, "gi"), "‹‹$1››");
}

/** Render highlighted text as React-safe parts. */
export function highlightParts(text: string, query: string): Array<{ text: string; match: boolean }> {
  const q = query.trim();
  if (!q) return [{ text, match: false }];
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  return parts
    .filter((p) => p.length > 0)
    .map((p) => ({ text: p, match: p.toLowerCase() === q.toLowerCase() }));
}