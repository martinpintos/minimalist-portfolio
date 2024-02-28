import Section from "@/components/section";
import cv from "@/lib/cv.json";
import { Chip } from "@nextui-org/react";
import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations();

  return (
    <Section title={t("sections.skills")}>
      <ul className="flex flex-wrap -m-1">
        {cv.skills.map(({ name }) => (
          <li key={name} className="m-1">
            <Chip
              className="hover:scale-[103%] transition-all duration-300 ease-in-out"
              size="md"
              variant="shadow"
              color="success"
              classNames={{
                content: "font-semibold",
              }}
            >
              {name}
            </Chip>
          </li>
        ))}
      </ul>
    </Section>
  );
}
