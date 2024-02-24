import Section from "@/components/section";
import { work } from "@/lib/cv.json";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

export default function Experience() {
  return (
    <Section title="Experiencia laboral">
      <ul className="flex flex-col space-y-8">
        {work.map(
          ({ name, position, url, startDate, endDate, summary, badges }) => {
            const start = new Date(startDate)
              .toLocaleDateString("es-ES", {
                month: "long",
                year: "numeric",
              })
              .replace(/^\w/, (c) => c.toUpperCase());

            const end = endDate
              ? new Date(endDate)
                  .toLocaleDateString("es-ES", {
                    month: "long",
                    year: "numeric",
                  })
                  .replace(/^\w/, (c) => c.toUpperCase())
              : "Actual";

            const period = `${start} - ${end}`;

            return (
              <li>
                <article className="space-y-1.5">
                  <header className="justify-between flex-row flex items-center">
                    <div className="flex flex-row items-center space-x-1.5">
                      <Link title={`Ir a ${name}`} href={url} target="_blank">
                        <h3 className="font-bold text-base hover:underline">
                          {name}
                        </h3>
                      </Link>
                      {badges.map((badge) => (
                        <Chip color="success" variant="shadow" size="sm">
                          {badge}
                        </Chip>
                      ))}
                    </div>
                    <time className="text-sm font-semibold text-foreground-900">
                      {period}
                    </time>
                  </header>

                  <h4 className="text-sm font-mono text-foreground-900">
                    {position}
                  </h4>

                  <footer className="font-mono text-xs text-foreground-600">
                    {summary}
                  </footer>
                </article>
              </li>
            );
          }
        )}
      </ul>
    </Section>
  );
}
