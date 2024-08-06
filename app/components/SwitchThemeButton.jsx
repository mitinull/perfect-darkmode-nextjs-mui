"use client";

import { Button, useColorScheme } from "@mui/material";
import { useEffect, useState } from "react";

export function SwitchThemeButton() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const alternativeScheme = colorScheme === "light" ? "dark" : "light";

  return (
    <Button
      variant="contained"
      size="large"
      onClick={() => setColorScheme(alternativeScheme)}
      color="secondary"
    >
      <span className="img-dark">Switch to Light</span>
      <span className="img-light">Switch to Dark</span>
    </Button>
  );
}
