import React from "react";
import Section from "./section";
import cv from "@/cv.json";

export default function About() {
  return (
    <Section title="Sobre mí">
      <p>{cv.basics.summary}</p>
    </Section>
  );
}
