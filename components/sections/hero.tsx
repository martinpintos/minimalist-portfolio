import Section from "@/components/section";
import { Image } from "@nextui-org/react";
import { basics } from "@/lib/cv.json";
import Link from "next/link";
import { GlobeIcon } from "lucide-react";

const { name, label, image, location, profiles } = basics;

export default function Hero() {
  return (
    <Section>
      <div className="flex-row flex justify-between items-center">
        <div className="space-y-1.5 w-8/12">
          <h1 className="text-3xl font-extrabold">{name}</h1>

          <p className="text-base text-foreground-600">{label}</p>

          <Link
            href={`https://www.google.com/maps/place/${location.city.replace(
              " ",
              "+"
            )}`}
            target="_blank"
            className="flex flex-row items-center space-x-1 hover:underline font-mono text-xs text-foreground-600"
          >
            <GlobeIcon size={12} />

            <span>{`${location.city}, ${location.region}`}</span>
          </Link>
        </div>

        <Image
          className="pl-2"
          loading="eager"
          width={110}
          height={110}
          alt="Picture of me"
          src={image}
        />
      </div>
    </Section>
  );
}
