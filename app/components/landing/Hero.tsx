import Link from "next/link";
import Image from "next/image";
import jointRehabOutside from "../../../public/images/hero/joint-rehab-photo.jpg";
import { FaArrowRight } from "react-icons/fa";

function LandingHero() {
  return (
    <div className="relative">
      <Image
        src={jointRehabOutside}
        alt="Joint Rehab Outside"
        fill
        style={{
          objectFit: "cover",
        }}
        quality={100}
      />
      <div className="absolute inset-0 bg-gray-700 bg-opacity-30"></div>
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 relative z-10">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          We&apos;re here for your medical needs
        </h1>
        <p className="mt-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">
          At Joint Rehab, we specialize in physiotherapy, acupuncture, massage
          therapy, hands therapy, custom orthotics, sports therapy, and oncology
          rehab. Our dedicated team of registered therapists provides
          personalized treatment plans to address pain, improve mobility, and
          enhance overall health.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link
            href="request-appointment"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Request Appointment
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingHero;
