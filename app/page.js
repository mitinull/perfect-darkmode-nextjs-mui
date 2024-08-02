import { Box, Stack, Typography } from "@mui/material";
import { SwitchThemeButton } from "./components/SwitchThemeButton";

export default function Home() {
  return (
    <Stack
      component="main"
      color="text.primary"
      bgcolor="background.default"
      minHeight="110vh"
      alignItems="center"
    >
      <Stack
        pt="20vh"
        gap="10vh"
        textAlign="center"
        maxWidth={1000}
        mx="10vw"
        alignItems="center"
      >
        <Typography
          variant="h1"
          color="secondary"
          fontSize={{ xs: 50, sm: 96 }}
          fontWeight={600}
        >
          Perfect Dark Theme With Next.js and MUI
        </Typography>
        <SwitchThemeButton />
      </Stack>
    </Stack>
  );
}
