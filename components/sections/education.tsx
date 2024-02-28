import Section from "@/components/section";
import cv from "@/lib/cv.json";
import { useTranslations } from "next-intl";

export default function Education() {
  const t = useTranslations();

  return (
    <Section title={t("sections.education")}>
      <ul className="space-y-8">
        {cv.education.map(({ institution, startDate, endDate }, index) => {
          const startMonth = new Date(startDate).toLocaleString(t("locale"), {
            month: "long",
          });
          const startYear = new Date(startDate).getFullYear();
          const start = `${
            startMonth.charAt(0).toUpperCase() + startMonth.slice(1)
          } ${startYear}`;

          const endMonth = endDate
            ? new Date(endDate).toLocaleString(t("locale"), { month: "long" })
            : "";
          const endYear = endDate ? new Date(endDate).getFullYear() : "";
          const end = endDate
            ? `${
                endMonth.charAt(0).toUpperCase() + endMonth.slice(1)
              } ${endYear}`
            : t("present");
          const period = `${start} - ${end}`;

          return (
            <li key={institution}>
              <article className="space-y-1.5">
                <header className="justify-between flex-row flex items-center">
                  <h3 className="font-extrabold text-base">
                    {t(`cv.education.${index}.institution`)}
                  </h3>

                  <time className="text-sm hidden xs:block font-medium text-foreground-600">
                    {period}
                  </time>
                </header>

                <time className="text-sm xs:hidden font-medium text-foreground-600">
                  {period}
                </time>

                <h4 className="text-sm font-mono font-semibold text-foreground-900">
                  {t(`cv.education.${index}.studyType`)}
                </h4>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
