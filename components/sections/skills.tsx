import Section from "@/components/section";
import cv from "@/lib/cv.json";
import { Chip } from "@nextui-org/react";

export default function Skills() {
  return (
    <Section title="Habilidades">
      <ul className="flex flex-wrap -m-1">
        {cv.skills.map(({ name }) => (
          <li key={name} className="m-1">
            <Chip size="md" variant="shadow" color="success">
              {name}
            </Chip>
          </li>
        ))}
      </ul>
    </Section>
  );
}