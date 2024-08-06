import "./globals.css";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ThemeProvider } from "./theme-provider";

export const metadata = {
  title: "Perfect Dark Theme",
  description: "Perfect Dark Theme With Next.js and MUI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript defaultMode="system" />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
