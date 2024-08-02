import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      component="main"
      bgcolor="background.default"
      color="text.primary"
      minHeight="110vh"
    >
      <Typography
        variant="h1"
        color="secondary"
        fontSize={{ xs: 50, sm: 96 }}
        fontWeight={600}
      >
        Perfect Dark Theme With Next.js and MUI
      </Typography>
    </Box>
  );
}
