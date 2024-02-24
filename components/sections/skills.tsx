import Section from "@/components/section";
import cv from "@/lib/cv.json";
import { Chip } from "@nextui-org/react";

export default function Skills() {
  return (
    <Section title="Habilidades">
      <ul className="flex flex-wrap">
        {cv.skills.map(({ name }) => (
          <li key={name} className="mr-2">
            <Chip size="sm" color="success">
              {name}
            </Chip>
          </li>
        ))}
      </ul>
    </Section>
  );
}