import React from "react";

interface InfoIconProps {
  icon: JSX.Element;
  text: string;
}

function InfoIcon({ icon, text }: InfoIconProps) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="max-w-xl text-4xl mx-auto">{icon}</div>
      <h3 className="capitalize text-text font-roboto text-xl text-center">
        {text}
      </h3>
    </div>
  );
}

export default InfoIcon;