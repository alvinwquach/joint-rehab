import Image from "next/image";
import jointRehabOutside from "../../../public/images/hero/joint-rehab-photo.jpg";

function ContactUs() {
  return (
    <div className="relative h-screen flex">
      <div className="w-full relative">
        <Image
          src={jointRehabOutside}
          alt="Joint Rehab Outside"
          fill
          style={{
            objectFit: "cover",
          }}
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gray-700 bg-opacity-30"></div>
      </div>
    </div>
  );
}

export default ContactUs;
