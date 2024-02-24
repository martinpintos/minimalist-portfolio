import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { Providers } from "./providers";
import { basics } from "@/cv.json";
import "./globals.css";

const { name, label } = basics;

const raleway = Mulish({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${name} | Portfolio`,
  description: `${name} - ${label}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={raleway.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
