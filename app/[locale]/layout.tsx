import { Mulish } from "next/font/google";
import { Providers } from "../providers";
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

const mulish = Mulish({
  subsets: ["latin"],
});

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: "cv" });

  return {
    title: `${t("basics.name")} | ${t("basics.label")}`,
    description: `${t("basics.name")}} | ${t("basics.label")}`,
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

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
