import Section from "@/components/section";
import { Image } from "@nextui-org/react";
import { basics } from "@/lib/cv.json";
import Link from "next/link";
import { GlobeIcon } from "lucide-react";

const { name, label, image, location, profiles } = basics;

export default function Hero() {
  return (
    <Section>
      <div className="flex-col xs:flex-row flex xs: justify-between xs:items-center">
        <div className="flex xs:order-2 xs:pl-2 mb-2 xs:mb-0">
          <Image
            className="h-24 w-24 xs:h-28 xs:w-28"
            loading="eager"
            width={120}
            height={120}
            alt="Picture of me"
            src={image}
          />
        </div>

        <div className="space-y-1.5 xs:w-8/12 xs: order-1">
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
      </div>
    </Section>
  );
}
