import Section from "@/components/section";
import cv from "@/lib/cv.json";
import { Chip } from "@nextui-org/react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations();

  return (
    <Section title={t("sections.workExperience")}>
      <ul className="flex flex-col space-y-8">
        {cv.work.map(
          (
            {
              name,
              position,
              url,
              startDate,
              endDate,
              summary,
              badges,
              highlights,
            },
            index
          ) => {
            const startMonth = new Date(startDate).toLocaleString(t("locale"), {
              month: "long",
            });
            const startYear = new Date(startDate).getFullYear();
            const start = `${
              startMonth.charAt(0).toUpperCase() + startMonth.slice(1)
            } ${startYear}`; // Format as 'Mayo 2022'

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

            const summaryParagraphs = t(`cv.work.${index}.summary`).split(
              "\n\n"
            );

            return (
              <li key={name}>
                <article className="space-y-1.5">
                  {/* Company, Period and Badges */}
                  <header className="flex flex-row items-center justify-between">
                    <div className="flex flex-row space-x-1 items-center">
                      <Link title={`Ir a ${name}`} href={url} target="_blank">
                        <h3 className="font-extrabold text-base hover:underline">
                          {name}
                        </h3>
                      </Link>

                      {badges.map((badge, indexBadge) => (
                        <Chip
                          key={badge}
                          color="success"
                          variant="shadow"
                          size="sm"
                        >
                          {t(`cv.work.${index}.badges.${indexBadge}`)}
                        </Chip>
                      ))}
                    </div>

                    <time className="text-sm hidden xs:block font-medium text-foreground-600">
                      {period}
                    </time>
                  </header>

                  <time className="text-sm xs:hidden font-medium text-foreground-600">
                    {period}
                  </time>

                  {/* Title*/}
                  <h4 className="text-sm font-mono font-semibold text-foreground-900">
                    {t(`cv.work.${index}.position`)}
                  </h4>

                  {/* Summary */}
                  <div className="font-mono text-xs text-foreground-600 space-y-1.5">
                    {summaryParagraphs.map((paragraph, indexParagraph) => (
                      <p key={indexParagraph}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Highlights */}
                  {highlights && highlights.length > 0 && (
                    <ul className="flex flex-wrap -m-1">
                      {highlights.map((highlight, indexHighlight) => (
                        <li key={highlight} className="m-1">
                          <Chip size="sm" variant="shadow" color="success">
                            {t(`cv.work.${index}.highlights.${indexHighlight}`)}
                          </Chip>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </li>
            );
          }
        )}
      </ul>
    </Section>
  );
}
