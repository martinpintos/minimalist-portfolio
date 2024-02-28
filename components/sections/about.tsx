import Section from "@/components/section";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();
  return (
    <Section title={t("sections.about")}>
      <p className="text-sm leading-relaxed font-mono text-foreground-600">
        {t("cv.basics.summary")}
      </p>
    </Section>
  );
}
