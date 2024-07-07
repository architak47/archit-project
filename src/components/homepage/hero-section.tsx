import Image from "next/image";
import ButtonPrimary from "@/components/buttons/button-primary";

interface HeroSectionProps {
  imageSrc: string;
  titleOne: string;
  titleTwo: string;
  paragraph: string;
  buttonLabel: string;
}

export default function HeroSection({ imageSrc, titleOne, titleTwo, paragraph, buttonLabel }: HeroSectionProps) {
  return (
    <section className="flex py-24 px-[5%] mt-[5.25rem] items-center h-[calc(100vh-5.25rem)] lg:max-h-[40rem] md:max-h-[40rem] bg-[#F5F7FA]">
      <div className="max-w-[72rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-full">
            <h1 className="text-4xl text-neutral-d-gray font-semibold">
              {titleOne}{" "}
              <span className="inline text-[#4CAF4F] text-nowrap">
                {titleTwo}
              </span>
            </h1>
            <p className="text-base font-normal mt-4 mb-8 text-[#717171]">
              {paragraph}
            </p>
            <ButtonPrimary label={buttonLabel} />
          </div>
          <div className="max-w-full place-self-end max-md:place-self-center hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              src={imageSrc}
              alt="Illustration"
              width={391}
              height={407}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
