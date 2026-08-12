import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { news, type NewsItem } from "@/data/news";

const COUNT_OPTIONS = [1, 2, 3] as const;
type CountOption = (typeof COUNT_OPTIONS)[number];

const formatDate = (iso: string) => {
  const d = new Date(iso);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${dd}.${mm}.${d.getFullYear()}`;
};

const NewsCard = ({ item }: { item: NewsItem }) => (
  <article className="group flex flex-col bg-card border border-border hover:border-primary transition-colors">
    {item.image && (
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={item.image}
          alt=""
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    )}
    <div className="flex flex-col flex-1 p-6 md:p-8 gap-4">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <time dateTime={item.date}>{formatDate(item.date)}</time>
        <span className="w-5 h-px bg-primary" aria-hidden="true" />
        <span>{item.category}</span>
      </div>
      <h3 className="text-foreground text-2xl md:text-3xl font-normal">
        <Link
          to={item.href}
          className="outline-none focus-visible:underline focus-visible:decoration-primary focus-visible:underline-offset-4 group-hover:text-primary transition-colors"
        >
          <span className="absolute inset-0" aria-hidden="true" />
          {item.title}
        </Link>
      </h3>
      <p className="text-foreground/80 text-base font-normal line-clamp-3">
        {item.excerpt}
      </p>
      <div className="mt-auto pt-2">
        <span className="inline-flex items-center gap-2 text-base text-primary">
          Beitrag lesen
          <ArrowRight size={16} strokeWidth={1.5} />
          <span className="sr-only">: {item.title}</span>
        </span>
      </div>
    </div>
  </article>
);

const gridFor = (count: CountOption) => {
  if (count === 1) return "grid grid-cols-1 gap-6 lg:gap-8";
  if (count === 2) return "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8";
  return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8";
};

const NewsSection = () => {
  const [count, setCount] = useState<CountOption>(3);
  const items = news.slice(0, count);

  return (
    <section
      id="aktuelles"
      aria-labelledby="news-heading"
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 md:mb-16">
          <div className="flex items-center gap-4">
            <div className="w-10 h-px bg-primary" />
            <h2
              id="news-heading"
              className="text-foreground text-3xl md:text-4xl lg:text-5xl font-normal"
            >
              Aktuelles
            </h2>
          </div>

          {/* Demo toggle */}
          <div
            role="group"
            aria-label="Anzahl der News-Beiträge"
            className="flex items-center gap-2"
          >
            {COUNT_OPTIONS.map((option) => {
              const active = option === count;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setCount(option)}
                  aria-pressed={active}
                  className={[
                    "h-9 px-4 text-sm font-normal border transition-colors",
                    active
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground/40",
                  ].join(" ")}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        <div className={gridFor(count)}>
          {items.map((item) => (
            <div key={item.id} className="relative">
              <NewsCard item={item} />
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 flex justify-center">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground h-[48px] px-8 text-base font-normal"
          >
            <Link to="/aktuelles">Alle News</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;