import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
//import { ThemeToggle } from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Общински сайтове - Ямбол",
  description: "Добре дошли в Общински сайтове - Ямбол! Намерете всички общински уебсайтове на едно място.",
  keywords: "Общински сайтове, Ямбол, общини, услуги, събития, транспорт, вода, чист въздух",
  authors: [
    { name: "Иван Стойков", url: "mailto:ivanstoikov007@gmail.com" },
    { name: "Даниел Давалашев", url: "mailto:davalashev@gmail.com" }
  ],
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://yambolsite.online",
    title: "Общински сайтове - Ямбол",
    description: "Добре дошли в Общински сайтове - Ямбол! Намерете всички общински уебсайтове на едно място.",
    siteName: "Общински сайтове - Ямбол",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
