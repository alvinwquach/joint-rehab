import logo from "../../../public/images/logo-new.png";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
      <h2 className="text-xl tracking-widest mb-3 uppercase font-semibold">
        Welcome to
      </h2>
      <Image
        src={logo}
        alt="Image of company logo with the words physiotherapy and massage therapy"
        height={48}
        width={240}
      />

      <div className="mt-6 w-16 bg-primary">
        <hr className="border-2 border-primary" />
      </div>
      <div className="mt-6 text-xl text-black font-light">
        Joint Rehab is a rehabilitation clinic located in the heart of Markham.
        We pride ourselves in making it our goal to help you move and feel
        better. We are dedicated to providing the best treatment possible in the
        shortest time possible, using our knowledge and expertise to ease your
        pain, accelerate recovery, improve mobility and overall health.
      </div>
      <div className="mt-6 text-xl text-black font-light">
        At Joint Rehab, we have a dedicated team of registered physiotherapists,
        massage therapists and acupuncturists who will address your pain,
        strength, mobility, and function so you can return to the activities
        that are important to you. Our therapists have a number of years of
        experience and will develop a personalized treatment plan for each and
        every client, ensuring they receive the highest standard of care. Our
        multidisciplinary team is deeply committed to helping our patients
        achieve their rehabilitation goals, while enhancing their quality of
        life.
      </div>
      <div className="mt-6 text-xl text-black font-light">
        Joint Rehab has two locations, both located in theheart of Markham. Both
        sites have ample, free parking and are wheelchair accessible. We offer
        appointments seven days a week.
      </div>
      <div className="mt-8 flex flex-col justify-between items-start md:flex-row gap-y-4">
        <div className="flex items-center">
          <div>
            <FaCheckCircle
              className="text-green-500 mr-2 mb-2 inline-block"
              size={24}
            />
            <h3 className="text-xl font-bold sm:text-2xl inline text-black">
              Value
            </h3>
            <p className="text-xl text-black">
              To be a center of excellence in the provision of physiotherapy
              services.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <FaCheckCircle
              className="text-green-500 mr-2 mb-2 inline-block"
              size={24}
            />
            <h3 className="text-xl font-bold sm:text-2xl inline text-black">
              Mission
            </h3>
            <p className="text-xl text-black">
              To provide the best possible care to maximize each patient’s
              rehabilitation potential.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
