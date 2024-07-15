import React from "react";
import Image from "next/image";

// Import images
import compassionate from "../../../public/images/landing/compassionate.png";
import professional from "../../../public/images/landing/professional.png";
import rehabilitation from "../../../public/images/landing/rehabilitation.png";
import recovery from "../../../public/images/landing/recovery.png";
import excellence from "../../../public/images/landing/excellence.png";
import dedicated from "../../../public/images/landing/dedicated.png";
import wellbeing from "../../../public/images/landing/wellbeing.png";

const images = [
  {
    src: compassionate,
    alt: "Compassionate Care",
    text: "Compassionate care is at the heart of our physiotherapy services.",
  },
  {
    src: professional,
    alt: "Professional Service",
    text: "Our team provides professional service with expertise in physiotherapy techniques.",
  },
  {
    src: rehabilitation,
    alt: "Rehabilitation",
    text: "We specialize in rehabilitation programs tailored to each patient's needs.",
  },
  {
    src: recovery,
    alt: "Recovery",
    text: "Our focus is on guiding patients through a successful recovery journey.",
  },
  {
    src: excellence,
    alt: "Excellence",
    text: "We strive for excellence in every aspect of physiotherapy care.",
  },
  {
    src: dedicated,
    alt: "Dedicated Staff",
    text: "Our dedicated staff is committed to providing personalized care and support.",
  },
  {
    src: wellbeing,
    alt: "Wellbeing",
    text: "Promoting wellbeing through holistic approaches is central to our philosophy.",
  },
];

function WhyChooseUs() {
  return (
    <div className="flex flex-col w-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center w-full`}
        >
          <div className="flex-1 max-w-full md:max-w-1/2">
            <Image
              src={image.src}
              alt={image.alt}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="flex-1 max-w-full md:max-w-1/2 text-center text-white">
            {image.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default WhyChooseUs;
