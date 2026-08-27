"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeMode =
  | "monochrome"
  | "tailadmin-dark"
  | "tailadmin-light"
  | "emerald"
  | "violet";

export interface ThemeColors {
  name: string;
  label: string;
  description: string;
  badge: string;
  preview: string[];
  isDark: boolean;
  chartColors: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    grad0: string;
    grad1: string;
  };
}

export const THEMES_CONFIG: Record<ThemeMode, ThemeColors> = {
  monochrome: {
    name: "monochrome",
    label: "Krypton Obsidian (Mono)",
    description: "Pure black & white, high-contrast dark aesthetic",
    badge: "KRYPTON · MONO",
    preview: ["#000000", "#ffffff", "#71717a", "#27272a"],
    isDark: true,
    chartColors: {
      primary: "#ffffff",
      secondary: "#a1a1aa",
      tertiary: "#71717a",
      quaternary: "#52525b",
      grad0: "#ffffff",
      grad1: "#71717a",
    },
  },
  "tailadmin-dark": {
    name: "tailadmin-dark",
    label: "Krypton Classic (Blue Dark)",
    description: "Iconic #3C50E0 Royal Blue and rich slate dark accents",
    badge: "KRYPTON · BLUE",
    preview: ["#1A222C", "#3C50E0", "#80CAEE", "#10B981"],
    isDark: true,
    chartColors: {
      primary: "#3C50E0",
      secondary: "#80CAEE",
      tertiary: "#10B981",
      quaternary: "#FFA70B",
      grad0: "#3C50E0",
      grad1: "#80CAEE",
    },
  },
  "tailadmin-light": {
    name: "tailadmin-light",
    label: "Krypton Clean (Light)",
    description: "Bright Slate layout with Krypton Brand Blue accents",
    badge: "KRYPTON · LIGHT",
    preview: ["#F1F5F9", "#3C50E0", "#10B981", "#FFFFFF"],
    isDark: false,
    chartColors: {
      primary: "#3C50E0",
      secondary: "#80CAEE",
      tertiary: "#10B981",
      quaternary: "#FFA70B",
      grad0: "#3C50E0",
      grad1: "#80CAEE",
    },
  },
  emerald: {
    name: "emerald",
    label: "Krypton Cyber (Emerald)",
    description: "Deep obsidian with emerald neon highlights",
    badge: "KRYPTON · EMERALD",
    preview: ["#050507", "#10B981", "#34D399", "#064E3B"],
    isDark: true,
    chartColors: {
      primary: "#10B981",
      secondary: "#34D399",
      tertiary: "#6EE7B7",
      quaternary: "#059669",
      grad0: "#10B981",
      grad1: "#34D399",
    },
  },
  violet: {
    name: "violet",
    label: "Krypton Neural (Violet)",
    description: "Deep dark indigo with rich violet gradients",
    badge: "KRYPTON · VIOLET",
    preview: ["#090514", "#8B5CF6", "#C084FC", "#4C1D95"],
    isDark: true,
    chartColors: {
      primary: "#8B5CF6",
      secondary: "#C084FC",
      tertiary: "#E879F9",
      quaternary: "#6D28D9",
      grad0: "#8B5CF6",
      grad1: "#C084FC",
    },
  },
};

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  config: ThemeColors;
  toggleKryptonTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("monochrome");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("krypton-theme") as ThemeMode;
      if (savedTheme && THEMES_CONFIG[savedTheme]) {
        setThemeState(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
      } else {
        document.documentElement.setAttribute("data-theme", "monochrome");
      }
    } catch (e) {
      document.documentElement.setAttribute("data-theme", "monochrome");
    }
    setMounted(true);
  }, []);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("krypton-theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    } catch (e) {}
  };

  const toggleKryptonTheme = () => {
    if (theme === "monochrome") {
      setTheme("tailadmin-dark");
    } else if (theme === "tailadmin-dark") {
      setTheme("tailadmin-light");
    } else {
      setTheme("monochrome");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        config: THEMES_CONFIG[theme] || THEMES_CONFIG.monochrome,
        toggleKryptonTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
