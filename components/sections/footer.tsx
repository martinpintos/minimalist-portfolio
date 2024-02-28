import React from "react";
import Section from "../section";
import { useTranslations } from "next-intl";

const Link = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    className="text-foreground-900 font-bold text-sm hover:underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <Section>
      <p className="text-foreground-600 text-sm font-light">
        {t("createdBy")} <Link href="https://nextjs.org">Next.js</Link>,{" "}
        <Link href="https://tailwindcss.com">Tailwind CSS</Link>, {t("and")}{" "}
        <Link href="https://nextui.org">Next UI</Link>, {t("withDeploymentBy")}{" "}
        <Link href="https://vercel.com">Vercel</Link>. {t("itFeatures")}{" "}
        <Link href="https://lucide.dev">Lucide</Link> {t("icons")}{" "}
        {t("iconsAndFont")}{" "}
        <Link href="https://fonts.google.com/specimen/Mulish">Mulish</Link>
        {t("font")}. {t("codeIsOpenSourceOn")}{" "}
        <Link href="https://github.com/martinpintos/minimalist-portfolio">
          GitHub
        </Link>
        .
      </p>
    </Section>
  );
}
