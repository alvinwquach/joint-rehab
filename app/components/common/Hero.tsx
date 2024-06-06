import React from "react";
import Section from "./Section";
import { StaticImageData } from "next/image";
import Image from "next/image";
import cn from "clsx";

type HeroProps = {
  image: {
    mobile?: StaticImageData;
    desktop?: StaticImageData;
  };
  title: React.ReactNode;
  description: React.ReactNode;
  desktopClassName?: string;
  imageClassName?: string;
};

function Hero({
  image,
  title,
  description,
  desktopClassName,
  imageClassName,
}: HeroProps) {
  return (
    <>
      <div
        className={cn(
          "hidden lg:block h-[420px] w-full bg-contain bg-no-repeat bg-right-top bg-primary border-b border-zinc-700",
          desktopClassName
        )}
        style={{
          backgroundImage: image.desktop ? `url(${image.desktop.src})` : "",
        }}
      >
        <Section
          wrapperStyle={{
            height: "100%",
          }}
          style={{
            height: "100%",
          }}
        >
          <div className="flex flex-col aligns-center justify-center h-full max-w-[720px]">
            <h1 className="tracking-tight text-5xl font-title uppercase">
              {title}
            </h1>
            <p className="mt-8 text-xl text-white font-light">{description}</p>
          </div>
        </Section>
      </div>

      <div className="block lg:hidden bg-primary border-b border-b-zinc-700">
        {image.mobile && (
          <div className="h-[420px] w-full relative flex-1">
            <Image
              src={image.mobile}
              className={cn("object-cover object-center", imageClassName)}
              placeholder="blur"
              alt="hero image"
              fill={true}
            />
          </div>
        )}

        <div className="p-8">
          <h2 className="text-3xl tracking-tight font-title uppercase text-center">
            {title}
          </h2>
          <p className="mt-4 text-xl  font-light text-center">{description}</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
