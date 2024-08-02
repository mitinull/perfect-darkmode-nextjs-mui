"use client";

import { Button, useColorScheme } from "@mui/material";
import { useEffect, useState } from "react";

export function SwitchThemeButton() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const alternativeScheme = colorScheme === "light" ? "dark" : "light";

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true));

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="contained"
      size="large"
      onClick={() => setColorScheme(alternativeScheme)}
      color="secondary"
      sx={{ width: "50%" }}
    >
      {alternativeScheme}
    </Button>
  );
}
