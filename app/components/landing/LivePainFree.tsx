import Link from "next/link";
import Image from "next/image";
import React from "react";
import Section from "../common/Section";
import jointRehabOutside from "../../../public/images/hero/joint-rehab-photo.jpg";
import { rubik_scribble } from "@/util/fonts";

function LivePainFree() {
  return (
    <Section className="!px-0" bg={Section.Colors.Dark}>
      <div className="grid grid-cols-1 items-center gap-y-2 sm:gap-y-6 lg:grid-cols-12 lg:pt-0">
        <div className="px-5 flex flex-col pb-4 lg:-mt-[1rem] lg:col-span-5 items-center lg:items-start animate-fade-in-up overflow-visible">
          <div className="flex gap-x-4">
            <h1
              className={`${rubik_scribble.className} text-5xl sm:text-7xl text-white uppercase leading-normal sm:leading-none`}
            >
              {"It's"}
            </h1>
            <strong className="text-5xl sm:text-7xl text-white uppercase leading-normal sm:leading-none font-semibold">
              time
            </strong>
          </div>
          <h2
            className={`${rubik_scribble.className} font-title text-4xl sm:text-6xl text-white uppercase py-4 sm:py-8`}
          >
            to
          </h2>
          <h1 className={`uppercase text-5xl sm:text-7xl text-white `}>
            <strong className="font-semibold">live</strong>
          </h1>
          <h1
            className={`${rubik_scribble.className} text-4xl sm:text-6xl text-white uppercase py-4 sm:py-8`}
          >
            pain
          </h1>
          <h1 className={`uppercase text-5xl sm:text-7xl text-white `}>
            <strong className="font-semibold">free</strong>
          </h1>
          <h3 className="font-light pt-8 text-xl sm:text-2xl relative">
            <span className="font-bold text-primary relative">
              <em>
                Leave your health in expert hands. Let us help. We know about
                your body.
              </em>
            </span>
          </h3>
        </div>

        <div className="lg:col-span-7 mt-8 lg:-mt-20 flex items-end flex-1 relative h-[670px]">
          <Image
            src={jointRehabOutside}
            alt="A photo of the front of"
            priority={true}
            fill={true}
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}

export default LivePainFree;
