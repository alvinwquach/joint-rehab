import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function ValueMisson() {
  return (
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
  );
}

export default ValueMisson;
