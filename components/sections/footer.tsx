import React from "react";
import Section from "../section";

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
  return (
    <Section>
      <p className="text-foreground-600 text-sm font-light">
        Created using <Link href="https://nextjs.org">Next.js</Link>, styled
        with <Link href="https://tailwindcss.com">Tailwind CSS</Link> and
        enhanced by <Link href="https://nextui.org">Next UI</Link>, deployed
        with Vercel. This site utilizes icons from{" "}
        <Link href="https://lucide.dev">Lucide</Link>, and the{" "}
        <Link href="https://fonts.google.com/specimen/Mulish">Mulish</Link> font
        as the primary typeface. All the code is open source and available at{" "}
        <Link href="https://github.com/martinpintos/minimalist-portfolio">
          GitHub
        </Link>
        .
      </p>
    </Section>
  );
}
