import React from "react";
import { FaParking, FaWheelchair, FaCalendarAlt } from "react-icons/fa";
import InfoIcon from "./InfoIcon";

function Accessible() {
  return (
    <div className="w-full flex ">
      <div className="max-w-screen-xl m-auto w-10/12 flex flex-col items-center gap-20">
        <div className="flex flex-col w-full justify-between md:flex-row md:max-w-3xl max-w-xs gap-6">
          <InfoIcon icon={<FaParking />} text="Ample, free parking" />
          <InfoIcon icon={<FaWheelchair />} text="Wheelchair accessible" />
          <InfoIcon
            icon={<FaCalendarAlt />}
            text="Appointments seven days a week"
          />
        </div>
      </div>
    </div>
  );
}

export default Accessible;
