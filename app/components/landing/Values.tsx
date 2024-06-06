import {
  FaHandsHelping,
  FaBook,
  FaHandshake,
  FaHeart,
  FaUserFriends,
  FaRunning,
} from "react-icons/fa";

interface ValueIconProps {
  icon: JSX.Element;
  text: string;
}

function Values() {
  const ValueIcon = ({ icon, text }: ValueIconProps) => (
    <div className="flex flex-col gap-4 items-center">
      <div className="max-w-xl text-4xl mx-auto">{icon}</div>
      <h3 className="capitalize text-white font-roboto text-xl text-center">
        {text}
      </h3>
    </div>
  );
  return (
    <div>
      <div className="w-full flex py-36">
        <div className="max-w-screen-xl m-auto w-10/12 flex flex-col items-center gap-20">
          <h2 className="capitalize text-white text-4xl sm:text-5xl font-roboto font-bold text-center">
            Our Values
          </h2>
          <div className="flex flex-col w-full justify-between md:flex-row md:max-w-3xl max-w-xs gap-6">
            <ValueIcon icon={<FaUserFriends />} text="Compassion" />
            <ValueIcon icon={<FaHandshake />} text="Respect" />
            <ValueIcon icon={<FaHeart />} text="Integrity" />
            <ValueIcon icon={<FaRunning />} text="Performance Excellence" />
            <ValueIcon icon={<FaBook />} text="Teamwork" />
            <ValueIcon icon={<FaHandsHelping />} text="Making a Difference" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
