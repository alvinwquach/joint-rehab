import React from "react";
import Section from "./Section";
import Image, { StaticImageData } from "next/image";
import cn from "clsx";

type HeroProps = {
  image: {
    mobile?: string | StaticImageData;
    desktop?: string | StaticImageData;
  };
  title: React.ReactNode;
  description: React.ReactNode;
  desktopClassName?: string;
  imageClassName?: string;
};

const getImageSrc = (image?: string | StaticImageData) => {
  return typeof image === "string" ? image : image?.src;
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
          "hidden lg:block h-[420px] w-full bg-fifth bg-contain bg-no-repeat bg-right-top text-white border-b border-zinc-700",
          desktopClassName
        )}
        style={{
          backgroundImage: image.desktop
            ? `url(${getImageSrc(image.desktop)})`
            : "",
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
            <p className="mt-8 text-xl text-white">{description}</p>
          </div>
        </Section>
      </div>

      <div className="block lg:hidden bg-primary border-b border-b-zinc-700">
        {image.mobile && (
          <div className="h-[420px] w-full relative flex-1">
            <Image
              src={getImageSrc(image.mobile) as string}
              className={cn("object-cover object-center", imageClassName)}
              placeholder="blur"
              alt={"hero image"}
              fill={true}
              loading="lazy"
              blurDataURL={getImageSrc(image.mobile)}
            />
          </div>
        )}

        <div className="p-8">
          <h2 className="text-3xl tracking-tight font-title uppercase text-center">
            {title}
          </h2>
          <p className="mt-4 text-xl font-light text-center">{description}</p>
        </div>
      </div>
    </>
  );
}

export default Hero;