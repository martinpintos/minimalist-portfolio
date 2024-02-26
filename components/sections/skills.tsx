import Section from "@/components/section";
import cv from "@/lib/cv.json";
import { Chip } from "@nextui-org/react";

export default function Skills() {
  return (
    <Section title="Habilidades">
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
