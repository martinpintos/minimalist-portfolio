import Section from "@/components/section";
import cv from "@/lib/cv.json";
import { CardFooter, CardHeader, Chip, Card } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Projects() {
  const t = useTranslations();
  return (
    <Section title={t("sections.projects")}>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 -mx-1.5">
        {cv.projects.map(({ name, highlights, url }, index) => {
          return (
            <li key={t(`cv.projects.${index}.name`)}>
              <Card
                isBlurred
                shadow="sm"
                className="dark:bg-default-100/35 border border-default-50 h-full flex-col justify-between hover:scale-[101%] transition-transform duration-300 ease-in-out min-h-36 md:min-h-40"
              >
                <CardHeader className="flex-col items-start">
                  {url ? (
                    <div className="flex flex-row space-x-1 items-center">
                      <Link
                        title={`Ir a ${t(`cv.projects.${index}.name`)}`}
                        href={url}
                        target="_blank"
                      >
                        <h3 className="font-bold text-lg md:text-base hover:underline">
                          {t(`cv.projects.${index}.name`)}
                        </h3>
                      </Link>
                      <span className="text-green-400 animate-pulse text-sm">
                        •
                      </span>
                    </div>
                  ) : (
                    <h3 className="font-bold text-lg md:text-base">
                      {t(`cv.projects.${index}.name`)}
                    </h3>
                  )}

                  <p className="font-mono text-xs text-foreground-600">
                    {t(`cv.projects.${index}.description`)}
                  </p>
                </CardHeader>

                {highlights && highlights.length > 0 && (
                  <CardFooter>
                    <ul className="flex flex-wrap -m-1">
                      {highlights.map((highlight) => (
                        <li key={highlight} className="m-1">
                          <Chip size="sm" variant="shadow" color="success">
                            {highlight}
                          </Chip>
                        </li>
                      ))}
                    </ul>
                  </CardFooter>
                )}
              </Card>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
