"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeCtx {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeCtx>({ theme: "dark", toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("ss-theme") as Theme | null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      if (stored === "light") {
        document.documentElement.classList.add("light");
      }
    }
  }, []);

  function toggle() {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("ss-theme", next);
      document.documentElement.classList.toggle("light", next === "light");
      return next;
    });
  }

  // Prevent hydration mismatch — render children only after mount
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme: "dark", toggle }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
