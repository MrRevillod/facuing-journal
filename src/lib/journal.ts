import {
  articles,
  issues,
  volumes,
  type Article,
  type Author,
  type Issue,
} from "../data/journal";

export const issueById = (id: string) => issues.find((issue) => issue.id === id);
export const articleById = (id: string) => articles.find((article) => article.id === id);
export const volumeById = (id: string) => volumes.find((volume) => volume.id === id);

export const sortedIssues = () =>
  [...issues].sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));

export const currentIssue = (): Issue => sortedIssues()[0];

export const issueLabel = (issue: Issue) => `Vol. ${issue.volume} · Núm. ${issue.number}`;
export const issueFullLabel = (issue: Issue) => `${issueLabel(issue)} · ${issue.year}`;

export const issueUrl = (issue: Issue | string) =>
  `/numeros/${typeof issue === "string" ? issue : issue.id}/`;

export const articleUrl = (article: Article | string) =>
  `/articulos/${typeof article === "string" ? article : article.id}/`;

export const articlesByIssue = (issueId: string) =>
  articles.filter((article) => article.issueId === issueId);

export const articleCount = (issueId: string) => articlesByIssue(issueId).length;

export const formatDate = (iso: string) => {
  if (!iso) return "";
  const [year, month, day] = iso.split("-");
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  return `${Number(day)} de ${months[Number(month) - 1]} de ${year}`;
};

export const authorLine = (authors: Author[] = [], max = 5) => {
  const names = authors.map((author) => author.name).filter(Boolean);
  if (names.length <= max) return names.join(", ");
  return `${names.slice(0, max).join(", ")} y ${names.length - max} más`;
};

export const doiLabel = (doi: string) =>
  doi ? doi.replace(/^https?:\/\/(dx\.)?doi\.org\//, "doi: ") : "";

export const pageRange = (pages: string) => pages.replace(/(\d)-(\d)/, "$1–$2");

export const summary = (text: string, max = 155) => {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max).replace(/\s+\S*$/, "");
  return `${cut.replace(/[,;:.]+$/, "")}…`;
};

export const citation = (article: Article) => {
  const names = article.authors.map((author) => author.name);
  const issue = issueById(article.issueId);
  const parts: string[] = [];
  if (names.length) parts.push(`${names.join("; ")}.`);
  parts.push(`(${issue ? issue.year : "s. f."}).`);
  parts.push(`${article.title}.`);
  parts.push("Revista de Ingeniería UCT.");
  if (issue) parts.push(`${issueLabel(issue)}, ${pageRange(article.pages)}.`);
  if (article.doi) parts.push(article.doi);
  return parts.join(" ");
};

export const excerpt = (text: string, max = 520) =>
  text.length > max ? text.slice(0, max).replace(/\s+\S*$/, "") + "…" : text;
