import { useState } from "react";
import Image from "next/image";
import cn from "clsx";
import { TestimonialFragment } from "@/src/gql/graphql";

interface TestimonialCardProps {
  name: string | null | undefined;
  testimonial: string | null | undefined;
  imageUrl: string | null | undefined;
}

function TestimonialCard({
  name,
  testimonial,
  imageUrl,
}: TestimonialCardProps) {
  return (
    <figure className="group inline-flex gap-4 p-6 mb-4 w-full relative flex-col-reverse bg-white highlight-white/5 rounded-lg">
      <blockquote>
        <p className="text-gray-800">{testimonial}</p>
      </blockquote>

      <figcaption className="flex items-center space-x-4">
        <Image
          src={imageUrl ?? ""}
          alt={`${name}'s profile picture`}
          className="flex-none rounded-full object-cover drop-shadow-md"
          loading="lazy"
          width={56}
          height={56}
        />
        <div className="flex-auto">
          <div className="text-base text-gray-800 font-semibold">
            <div>{name}</div>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

interface TestimonialsProps {
  hasShowMore?: boolean;
  testimonials: TestimonialFragment[];
}

function Testimonials({
  hasShowMore = false,
  testimonials,
}: TestimonialsProps) {
  const [showMore, setShowMore] = useState(!hasShowMore);
  return (
    <>
      <div className="relative">
        <div className="flex pb-16 flex-col items-center justify-center">
          <h2 className="text-3xl sm:text-4xl text-center text-white uppercase">
            Hear from our <strong>clients</strong>
          </h2>
        </div>
        <div
          className={cn({
            ["max-h-[27rem]"]: !showMore,
            ["overflow-hidden"]: !showMore,
          })}
        >
          <div className="columns-1 gap-x-4 md:columns-2 lg:columns-3">
            {testimonials?.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                testimonial={testimonial.testimonial}
                imageUrl={testimonial.image?.asset?.url ?? ""}
              />
            ))}
          </div>
          {hasShowMore && (
            <div
              className={cn("inset-x-0 flex justify-center absolute", {
                ["pt-32"]: !showMore,
                ["bg-gradient-to-t bottom-0 pb-0 pointer-events-none from-black"]:
                  !showMore,
              })}
            >
              {!showMore && (
                <button
                  type="button"
                  onClick={() => {
                    setShowMore(!showMore);
                  }}
                  className="relative focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center bg-zinc-700 hover:bg-zinc-500 pointer-events-auto"
                >
                  Show More...
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Testimonials;
