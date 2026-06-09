import { useEffect, useState } from "react";

let isOpen = false;
const listeners = new Set<(open: boolean) => void>();

function setOpen(next: boolean) {
  isOpen = next;
  listeners.forEach((l) => l(isOpen));
}

export const searchPalette = {
  open: () => setOpen(true),
  close: () => setOpen(false),
  toggle: () => setOpen(!isOpen),
};

export function useSearchPalette() {
  const [open, setLocal] = useState(isOpen);
  useEffect(() => {
    listeners.add(setLocal);
    return () => {
      listeners.delete(setLocal);
    };
  }, []);
  return { open, setOpen };
}