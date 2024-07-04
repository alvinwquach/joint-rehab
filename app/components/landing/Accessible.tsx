import { IconType } from "react-icons";
import { FaParking, FaWheelchair, FaCalendarAlt } from "react-icons/fa";

interface AccessibleCardProps {
  icon: IconType;
  title: string;
  description: string;
  iconColor: string;
}

function AccessibleCard({
  icon: IconComponent,
  title,
  description,
  iconColor,
}: AccessibleCardProps) {
  return (
    <div className="w-full max-w-sm h-96 bg-white rounded-lg shadow-md sm:p-6 md:p-10 border border-gray-300 border-opacity-50 flex flex-col items-center justify-center my-8">
      <IconComponent
        className={`text-${iconColor}-500 mb-4 inline-block`}
        size={52}
      />
      <h5 className="mb-4 text-xl font-medium text-gray-700 text-center">
        {title}
      </h5>
      <p className="text-gray-600 text-center text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}

function Accessible() {
  return (
    <div className="flex flex-col items-center justify-center  md:gap-8 md:flex-row md:justify-center">
      <AccessibleCard
        icon={FaParking}
        title="Free parking"
        description="Our facility offers ample free parking space for your convenience. Whether you're visiting for treatment or consultation, parking won't be an issue."
        iconColor="red"
      />
      <AccessibleCard
        icon={FaWheelchair}
        title="Wheelchair accessible"
        description="Our facility is fully accessible for wheelchair users. We ensure that all our patients have easy access to our services without any barriers."
        iconColor="blue"
      />
      <AccessibleCard
        icon={FaCalendarAlt}
        title="Appointments"
        description="We offer flexible scheduling with appointments available every day of the week. This allows us to accommodate your busy schedule."
        iconColor="yellow"
      />
    </div>
  );
}

export default Accessible;
