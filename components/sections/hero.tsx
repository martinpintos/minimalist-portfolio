import Section from "@/components/section";
import { Button, Image } from "@nextui-org/react";
import { basics } from "@/lib/cv.json";
import Link from "next/link";
import {
  Github,
  GlobeIcon,
  Linkedin,
  LinkedinIcon,
  Mail,
  Phone,
} from "lucide-react";
import { useTranslations } from "next-intl";

const { image, location, profiles, email } = basics;

export default function Hero() {
  const t = useTranslations("cv.basics");
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

        <div className="space-y-1.5 xs:w-8/12 order-1">
          <h1 className="text-3xl font-extrabold">{t("name")}</h1>

          <p className="text-base text-foreground-600">{t("label")}</p>

          <Link
            href={`https://www.google.com/maps/place/${location.city.replace(
              " ",
              "+"
            )}`}
            target="_blank"
            className="flex flex-row items-center space-x-1 hover:underline font-mono text-xs text-foreground-600"
          >
            <GlobeIcon size={12} />

            <span>{`${t("location.city")}, ${t("location.region")}`}</span>
          </Link>

          <ul className="space-x-1.5 flex flex-row pt-1">
            <li>
              <Link href={`mailto:${email}`}>
                <Button
                  size="sm"
                  variant="bordered"
                  isIconOnly
                  className="border border-white"
                >
                  <Mail size={16} />
                </Button>
              </Link>
            </li>
            {/* <li>
              <Button
                size="sm"
                variant="bordered"
                isIconOnly
                className="border border-white"
              >
                <Phone size={16} />
              </Button>
            </li> */}
            <li>
              <Link href={profiles[0].url} target="_blank">
                <Button
                  size="sm"
                  variant="bordered"
                  isIconOnly
                  className="border border-white"
                >
                  <Github size={16} />
                </Button>
              </Link>
            </li>
            <li>
              <Link href={profiles[1].url} target="_blank">
                <Button
                  size="sm"
                  variant="bordered"
                  isIconOnly
                  className="border border-white"
                >
                  <Linkedin size={16} />
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
