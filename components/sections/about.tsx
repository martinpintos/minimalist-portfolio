import Section from "@/components/section";
import { basics } from "@/lib/cv.json";

const { summary } = basics;

export default function About() {
  return (
    <Section title="Sobre mí">
      <p className="text-sm leading-relaxed font-mono text-foreground-600">
        {summary}
      </p>
    </Section>
  );
}
