import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Analitcs WEB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={[
            "light",
            "dark",
            "red",
            "red-dark",
            "green",
            "green-dark",
            "netflix",
            "netflix-dark",
            "nord",
            "nord-dark",
            "nature",
            "nature-dark",
            "dracula",
            "dracula-dark",
            "laracon-dark",
            "gold",
            "gold-dark",
            "azarath",
            "azarath-dark",
            "poimandres",
            "poimandres-dark",
            "discord",
            "discord-dark",
          ]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
