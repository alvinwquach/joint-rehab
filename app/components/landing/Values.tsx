import React from "react";
import {
  FaHandsHelping,
  FaBook,
  FaHandshake,
  FaHeart,
  FaUserFriends,
  FaRunning,
} from "react-icons/fa";
import InfoIcon from "./InfoIcon";

function Values() {
  return (
    <div className="w-full flex ">
      <div className="max-w-screen-xl m-auto w-10/12 flex flex-col items-center gap-20">
        <h2 className="capitalize text-fifth text-4xl sm:text-5xl font-roboto font-bold text-center">
          Our Values
        </h2>
        <div className="flex flex-col w-full justify-between md:flex-row md:max-w-3xl max-w-xs gap-6 text-white">
          <InfoIcon icon={<FaUserFriends />} text="Compassion" />
          <InfoIcon icon={<FaHandshake />} text="Respect" />
          <InfoIcon icon={<FaHeart />} text="Integrity" />
          <InfoIcon icon={<FaRunning />} text="Performance Excellence" />
          <InfoIcon icon={<FaBook />} text="Teamwork" />
          <InfoIcon icon={<FaHandsHelping />} text="Making a Difference" />
        </div>
      </div>
    </div>
  );
}

export default Values;
