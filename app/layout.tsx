import type { Metadata, Viewport } from "next";
import "@fontsource/dm-sans/latin-400.css";
import "@fontsource/dm-sans/latin-500.css";
import "@fontsource/dm-sans/latin-600.css";
import "@fontsource/space-grotesk/latin-400.css";
import "@fontsource/space-grotesk/latin-500.css";
import "@fontsource/space-grotesk/latin-600.css";
import { profile } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suraj Kapare | Data Scientist",
  description: profile.description,
  authors: [{ name: profile.fullName }],
  keywords: ["Suraj Kapare", "Data Scientist", "Python", "SQL", "Machine Learning", "Washington DC", "GWU"],
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "Suraj Kapare | Data Scientist", description: profile.description, type: "website", locale: "en_US" },
  twitter: { card: "summary", title: "Suraj Kapare | Data Scientist", description: profile.description },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, colorScheme: "dark light" };

const themeScript = `(function(){try{var t=localStorage.getItem('suraj-theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }}/></head><body>{children}</body></html>;
}
