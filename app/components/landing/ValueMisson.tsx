import { FaMedal, FaBullseye } from "react-icons/fa";

function ValueMission() {
  return (
    <div className="flex flex-col items-center justify-center gap-x-8 md:flex-row md:justify-center">
      {/* Value Card */}
      <div className="w-full max-w-sm sm:p-10 flex flex-col items-center justify-center my-8">
        <FaMedal className="text-yellow-500 mb-4 inline-block" size={48} />
        <h5 className="mb-4 text-xl font-medium text-black text-center">
          Value
        </h5>
        <p className="text-lg text-black text-center">
          To be a center of excellence in the provision of physiotherapy
          services.
        </p>
      </div>

      {/* Mission Card */}
      <div className="w-full max-w-sm sm:p-10 flex flex-col items-center justify-center my-8">
        <FaBullseye className="text-blue-500 mb-4 inline-block" size={48} />
        <h5 className="mb-4 text-xl font-medium text-black text-center">
          Mission
        </h5>
        <p className="text-lg text-black text-center">
          To provide the best possible care to maximize each patient&apos;s
          rehabilitation potential.
        </p>
      </div>
    </div>
  );
}

export default ValueMission;
