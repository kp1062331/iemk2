"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-colors glass focus:outline-none"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 animate-spin-slow" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
