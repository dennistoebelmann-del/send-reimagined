import { useEffect, useState } from "react";

let _open = false;
let _query = "";
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

export const searchPalette = {
  open: () => {
    _open = true;
    emit();
  },
  close: () => {
    _open = false;
    _query = "";
    emit();
  },
  toggle: () => {
    _open = !_open;
    if (!_open) _query = "";
    emit();
  },
  setQuery: (q: string) => {
    _query = q;
    emit();
  },
  getQuery: () => _query,
};

export function useSearchPalette() {
  const [, set] = useState(0);
  useEffect(() => {
    const l = () => set((n) => n + 1);
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);
  return { open: _open, query: _query };
}