import Section from "@/components/section";
import cv from "@/lib/cv.json";

export default function Education() {
  return (
    <Section title="Educación">
      <ul className="space-y-8">
        {cv.education.map(({ institution, studyType, startDate, endDate }) => {
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
            <li key={`${institution}`}>
              <article className="space-y-1.5">
                <header className="justify-between flex-row flex items-center">
                  <h3 className="font-extrabold text-base">
                    {institution}
                  </h3>

                  <time className="text-sm hidden sm:block font-medium text-foreground-600">
                    {period}
                  </time>
                </header>

                <time className="text-sm sm:hidden font-medium text-foreground-600">
                  {period}
                </time>

                <h4 className="text-sm font-mono font-semibold text-foreground-900">
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
