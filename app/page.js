import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Typography
        variant="h1"
        color="secondary"
        fontSize={{ xs: 50, sm: 96 }}
        fontWeight={600}
      >
        Perfect Dark Theme With Next.js and MUI
      </Typography>
    </main>
  );
}
