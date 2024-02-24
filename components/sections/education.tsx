import Section from "@/components/section";
import { education } from "@/lib/cv.json";

export default function Education() {
  return (
    <Section title="Educación">
      <ul className="space-y-8">
        {education.map(({ institution, studyType, startDate, endDate }) => {
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
                  <h3 className="font-bold text-base">{institution}</h3>

                  <time className="text-sm font-semibold text-foreground-900">
                    {period}
                  </time>
                </header>

                <h4 className="text-sm font-mono text-foreground-600">
                  {studyType}
                </h4>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
