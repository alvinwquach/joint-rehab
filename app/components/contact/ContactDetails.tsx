import { MdPhone, MdEmail, MdFax } from "react-icons/md";
import { Location } from "@/types/Location";

interface ContactDetailsProps {
  markhamPlaza: Location[];
  ashgroveMedicalCentre: Location[];
}

function ContactDetails({
  markhamPlaza,
  ashgroveMedicalCentre,
}: ContactDetailsProps) {
  const markhamPlazaLocation = markhamPlaza[0] || {};
  const ashgroveMedicalCentreLocation = ashgroveMedicalCentre[0] || {};

  return (
    <div className="w-full flex flex-col items-center text-text">
      <h2 className="text-4xl font-bold mb-8 text-fifth">Contact Us</h2>
      <div className="flex flex-col md:flex-row gap-12 justify-center">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <MdPhone className="h-12 w-12 text-fifth" />
          </div>
          <div className="font-bold">Call us:</div>
          <div className="text-center">
            <p className="text-lg font-semibold">
              Markham Plaza: {markhamPlazaLocation.phone}
            </p>

            <p className="text-lg font-semibold">
              Ashgrove: {ashgroveMedicalCentreLocation.phone}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <MdEmail className="h-12 w-12 text-fifth" />
          </div>
          <div className="font-bold">Email us:</div>
          <div className="text-center">
            <p className="text-lg font-semibold">
              Markham Plaza: {markhamPlazaLocation.email}
            </p>
            <p className="text-lg font-semibold">
              Ashgrove: {ashgroveMedicalCentreLocation.email}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <MdFax className="h-12 w-12 text-fifth" />
          </div>
          <div className="font-bold">Send us a fax:</div>
          <div className="text-center">
            <p className="text-lg font-semibold">
              Markham Plaza: {markhamPlazaLocation.fax}
            </p>
            <p className="text-lg font-semibold">
              Ashgrove: {ashgroveMedicalCentreLocation.fax}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
