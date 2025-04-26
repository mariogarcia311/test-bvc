"use client";

import { lightTheme } from "@/lib/theme";
import { type ReactNode, useEffect, useState } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

interface StyledThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: StyledThemeProviderProps) {
  // Siempre inicializar con lightTheme para evitar undefined durante la hidratación
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setCurrentTheme(lightTheme);
    }
  }, [mounted]);

  return (
    <StyledComponentsThemeProvider theme={currentTheme || lightTheme}>
      {children}
    </StyledComponentsThemeProvider>
  );
}
