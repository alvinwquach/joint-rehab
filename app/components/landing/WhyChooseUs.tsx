import Image from "next/image";
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
    text: "Compassionate care is at the heart of our physiotherapy services. We understand the challenges our patients face and strive to create a supportive environment where they can feel understood and cared for. Our team is trained to offer empathetic and personalized treatment plans that cater to each individual's needs.",
  },
  {
    src: professional,
    alt: "Professional Service",
    text: "Our team provides professional service with expertise in physiotherapy techniques. With years of experience and continuous education, our physiotherapists are equipped with the latest knowledge and skills to deliver top-notch care. We ensure our services are conducted with the highest level of professionalism and integrity.",
  },
  {
    src: rehabilitation,
    alt: "Rehabilitation",
    text: "We specialize in rehabilitation programs tailored to each patient's needs. Whether recovering from surgery, injury, or dealing with chronic pain, our customized rehabilitation plans are designed to promote healing and restore function. We work closely with patients to track progress and adjust treatments as needed.",
  },
  {
    src: recovery,
    alt: "Recovery",
    text: "Our focus is on guiding patients through a successful recovery journey. We offer comprehensive recovery plans that address both physical and emotional aspects of healing. Our goal is to help patients regain their independence and quality of life as quickly and safely as possible.",
  },
  {
    src: excellence,
    alt: "Excellence",
    text: "We strive for excellence in every aspect of physiotherapy care. Our commitment to quality is reflected in our state-of-the-art facilities, advanced treatment methods, and a team dedicated to continuous improvement. We aim to set the standard for exceptional physiotherapy services.",
  },
  {
    src: dedicated,
    alt: "Dedicated Staff",
    text: "Our dedicated staff is committed to providing personalized care and support. Each member of our team is passionate about physiotherapy and dedicated to helping patients achieve their health goals. We believe in building strong patient-therapist relationships based on trust and mutual respect.",
  },
  {
    src: wellbeing,
    alt: "Wellbeing",
    text: "Promoting wellbeing through holistic approaches is central to our philosophy. We take a comprehensive view of health, considering physical, emotional, and lifestyle factors in our treatment plans. Our holistic approach ensures that we address the root causes of issues and promote overall wellbeing.",
  },
];

function WhyChooseUs() {
  return (
    <div className="flex flex-col w-full bg-fifth">
      {images.map((image, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center w-full `}
        >
          <div className="relative h-96 w-full md:w-1/2 ">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              // height={100}
              // width={100}
              sizes="(min-width: 808px) 50vw, 100vw"
              // style={{
              //   width: "100%",
              //   height: "auto",
              // }}
            />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <p className="text-lg md:text-xl text-white">{image.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WhyChooseUs;
