"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";
const themeKey = "bakehaus-theme";

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeToggle({ mobile = false }: { mobile?: boolean }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const sync = () => setTheme(currentTheme());
    const syncStorage = (event: StorageEvent) => {
      if (event.key !== themeKey) return;
      document.documentElement.dataset.theme = event.newValue === "dark" || event.newValue === "light"
        ? event.newValue
        : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      sync();
    };
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const syncSystem = () => {
      try { if (localStorage.getItem(themeKey)) return; } catch { /* Keep following the system setting. */ }
      document.documentElement.dataset.theme = media.matches ? "dark" : "light";
      sync();
    };

    sync();
    window.addEventListener("bakehaus-theme-change", sync);
    window.addEventListener("storage", syncStorage);
    media.addEventListener("change", syncSystem);
    return () => {
      window.removeEventListener("bakehaus-theme-change", sync);
      window.removeEventListener("storage", syncStorage);
      media.removeEventListener("change", syncSystem);
    };
  }, []);

  function toggleTheme() {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(themeKey, next); } catch { /* The current page can still change theme. */ }
    window.dispatchEvent(new Event("bakehaus-theme-change"));
  }

  const isDark = theme === "dark";
  const label = isDark ? "Switch to day mode" : "Switch to night mode";
  return <button className={`theme-toggle${mobile ? " theme-toggle-mobile" : ""}`} type="button" onClick={toggleTheme} aria-label={label} aria-pressed={isDark} title={label}>
    <span className="theme-toggle-icon" aria-hidden="true">{isDark ? <Sun size={20} /> : <Moon size={20} />}</span>
    {mobile && <span className="theme-toggle-label" aria-hidden="true">{isDark ? "Day" : "Night"}</span>}
  </button>;
}
