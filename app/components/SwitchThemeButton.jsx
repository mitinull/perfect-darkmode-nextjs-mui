"use client";

import { DarkMode, LightMode } from "@mui/icons-material";
import { Button, useColorScheme } from "@mui/material";

export function SwitchThemeButton() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const alternativeScheme = colorScheme === "light" ? "dark" : "light";

  if (true) {
    return (
      <Button
        onClick={() => setColorScheme(alternativeScheme)}
        startIcon={
          <>
            <LightMode className="img-dark" />
            <DarkMode className="img-light" />
          </>
        }
      >
        <span className="img-dark">Switch to Light</span>
        <span className="img-light">Switch to Dark</span>
      </Button>
    );
  }
}
