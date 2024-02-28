import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { Providers } from "../providers";
import { basics } from "@/lib/cv.json";
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";

const { name, label } = basics;

const mulish = Mulish({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${name} | Portfolio`,
  description: `${name} | ${label}`,
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale} className="dark">
      <body className={mulish.className}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
