import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { searchPalette, useSearchPalette } from "@/lib/useSearchPalette";

interface Props {
  dark: boolean;
  className?: string;
}

const SearchBar = ({ dark, className = "" }: Props) => {
  const { open, query } = useSearchPalette();
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) searchPalette.close();
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchPalette.toggle();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const submit = (q?: string) => {
    const v = (q ?? query).trim();
    if (!v) return;
    searchPalette.close();
    navigate(`/suche?q=${encodeURIComponent(v)}`);
  };

  const text = open ? "text-foreground" : dark ? "text-black" : "text-white";
  const placeholder = open
    ? "placeholder:text-foreground/40"
    : dark
      ? "placeholder:text-black/50"
      : "placeholder:text-white/70";
  const border = open
    ? "border-primary"
    : dark
      ? "border-primary"
      : "border-white/70";
  const bg = open || dark ? "bg-white" : "bg-transparent";

  return (
    <div
      className={`relative flex items-center border ${border} ${bg} transition-all duration-300 ${className}`}
    >
      <Search className={`w-4 h-4 ml-3 shrink-0 ${text} opacity-70`} />
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => searchPalette.setQuery(e.target.value)}
        onFocus={() => {
          if (!open) searchPalette.open();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") submit();
        }}
        placeholder={open ? "Konzerte, Künstler, Räume, FAQ …" : "Suche"}
        className={`flex-1 min-w-0 bg-transparent outline-none font-light ${text} ${placeholder} transition-all duration-300 ${
          open ? "py-3 px-3 text-base md:text-lg" : "py-2 px-2 text-sm"
        }`}
      />
      {open && (
        <button
          onClick={() => searchPalette.close()}
          aria-label="Suche schließen"
          className="p-2 mr-1 text-foreground hover:text-primary transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;