import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import { Navigation } from "@/ui/components";
import "./globals.css";

const cinzel = PT_Sans({ weight: ["400", "700"], subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Lumos",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={cinzel.className}>
        <Navigation />
        <main>
          <>{children}</>
          <>{modal}</>
        </main>
      </body>
    </html>
  );
}
