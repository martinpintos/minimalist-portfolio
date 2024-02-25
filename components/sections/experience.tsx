import Section from "@/components/section";
import cv from "@/lib/cv.json";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

export default function Experience() {
  return (
    <Section title="Experiencia laboral">
      <ul className="flex flex-col space-y-8">
        {cv.work.map(
          ({
            name,
            position,
            url,
            startDate,
            endDate,
            summary,
            badges,
            highlights,
          }) => {
            const startMonth = new Date(startDate).toLocaleString("es-ES", {
              month: "long",
            });
            const startYear = new Date(startDate).getFullYear();
            const start = `${
              startMonth.charAt(0).toUpperCase() + startMonth.slice(1)
            } ${startYear}`; // Format as 'Mayo 2022'

            const endMonth = endDate
              ? new Date(endDate).toLocaleString("es-ES", { month: "long" })
              : "";
            const endYear = endDate ? new Date(endDate).getFullYear() : "";
            const end = endDate
              ? `${
                  endMonth.charAt(0).toUpperCase() + endMonth.slice(1)
                } ${endYear}`
              : "Actualidad";
            const period = `${start} - ${end}`;

            return (
              <li key={`${name}`}>
                <article className="space-y-1.5">
                  {/* Company, Period and Badges */}
                  <header className="flex flex-row items-center justify-between">
                    <div className="flex flex-row space-x-1 items-center">
                      <Link title={`Ir a ${name}`} href={url} target="_blank">
                        <h3 className="font-extrabold text-base hover:underline">
                          {name}
                        </h3>
                      </Link>

                      {badges.map((badge) => (
                        <Chip
                          key={badge}
                          color="success"
                          variant="shadow"
                          size="sm"
                        >
                          {badge}
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
                    {position}
                  </h4>

                  {/* Summary */}
                  <p className="font-mono text-xs text-foreground-600">
                    {summary}
                  </p>

                  {/* Highlights */}
                  {highlights && highlights.length > 0 && (
                    <ul className="flex flex-wrap -m-1">
                      {highlights.map((highlight) => (
                        <li key={highlight} className="m-1">
                          <Chip size="sm" variant="shadow" color="success">
                            {highlight}
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
