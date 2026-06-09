import { useEffect } from "react";
import SearchPalette from "./SearchPalette";
import { useSearchPalette, searchPalette } from "@/lib/useSearchPalette";

const SearchPaletteHost = () => {
  const { open } = useSearchPalette();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchPalette.toggle();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return <SearchPalette open={open} onOpenChange={(v) => (v ? searchPalette.open() : searchPalette.close())} />;
};

export default SearchPaletteHost;