import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { news } from "@/data/news";

const formatDate = (iso: string) => {
  const d = new Date(iso);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${dd}.${mm}.${d.getFullYear()}`;
};

const AktuellesDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = news.find((n) => n.id === slug);

  if (!item) {
    return (
      <div className="min-h-screen bg-background theme-light">
        <Navigation />
        <main className="container mx-auto px-6 md:px-16 py-32 text-center">
          <h1 className="text-foreground text-3xl md:text-4xl font-normal mb-6">
            Beitrag nicht gefunden
          </h1>
          <Link to="/#aktuelles" className="text-primary hover:underline">
            Zurück zu Aktuelles
          </Link>
        </main>
        <Footer sectionAbove="white" />
      </div>
    );
  }

  const related = news.filter((n) => n.id !== item.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background theme-light">
      <Navigation />

      <main className="pt-28 md:pt-32 pb-16 md:pb-24">
        <article className="container mx-auto px-6 md:px-16">
          {/* Back link */}
          <div className="mb-10 md:mb-12">
            <Link
              to="/#aktuelles"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} strokeWidth={1.5} />
              Alle News
            </Link>
          </div>

          {/* Header */}
          <header className="max-w-3xl mb-12 md:mb-16 flex flex-col gap-6">
            <span className="text-primary text-sm tracking-[0.2em] uppercase">
              Aktuelles
            </span>
            <h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
              {item.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <time dateTime={item.date}>{formatDate(item.date)}</time>
              <span className="w-5 h-px bg-primary" aria-hidden="true" />
              <span>{item.category}</span>
            </div>
          </header>

          {/* Image */}
          {item.image && (
            <div className="mb-12 md:mb-16 aspect-video overflow-hidden bg-muted">
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Body */}
          <div className="max-w-3xl flex flex-col gap-6 text-foreground text-lg md:text-xl font-normal leading-relaxed">
            <p className="text-2xl md:text-3xl font-normal leading-snug">
              {item.lead ?? item.excerpt}
            </p>
            {(item.body ?? []).map((p, i) => (
              <p key={i} className="text-base md:text-lg">
                {p}
              </p>
            ))}
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section
            aria-labelledby="related-news"
            className="container mx-auto px-6 md:px-16 mt-20 md:mt-28 pt-12 md:pt-16 border-t border-border"
          >
            <div className="flex items-end justify-between mb-10 md:mb-12 gap-4 flex-wrap">
              <h2
                id="related-news"
                className="text-foreground text-2xl md:text-3xl lg:text-4xl font-normal"
              >
                Weitere News
              </h2>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground h-[48px] px-8 text-base font-normal"
              >
                <Link to="/#aktuelles">Alle News</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {related.map((n) => (
                <article
                  key={n.id}
                  className="group relative flex flex-col bg-card border border-border hover:border-primary transition-colors"
                >
                  {n.image && (
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img
                        src={n.image}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-col flex-1 p-6 md:p-8 gap-4">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <time dateTime={n.date}>{formatDate(n.date)}</time>
                      <span className="w-5 h-px bg-primary" aria-hidden="true" />
                      <span>{n.category}</span>
                    </div>
                    <h3 className="text-foreground text-2xl md:text-3xl font-normal">
                      <Link
                        to={n.href}
                        className="outline-none focus-visible:underline focus-visible:decoration-primary focus-visible:underline-offset-4 group-hover:text-primary transition-colors"
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                        {n.title}
                      </Link>
                    </h3>
                    <p className="text-foreground/80 text-base font-normal line-clamp-3">
                      {n.excerpt}
                    </p>
                    <div className="mt-auto pt-2">
                      <span className="inline-flex items-center gap-2 text-base text-primary">
                        Beitrag lesen
                        <ArrowRight size={16} strokeWidth={1.5} />
                        <span className="sr-only">: {n.title}</span>
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer sectionAbove="white" />
    </div>
  );
};

export default AktuellesDetail;