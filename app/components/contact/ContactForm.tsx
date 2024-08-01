"use client";

import { useForm, Controller } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdPhone, MdFax } from "react-icons/md";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input/input";
import "react-phone-number-input/style.css";

type FormValues = {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
  phone: string;
  preferredContact: string[];
  message: string;
};

// import { MdPhone, MdEmail, MdFax } from "react-icons/md";
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
      <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
      <div className="flex flex-col md:flex-row gap-12 justify-center">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <MdPhone className="h-12 w-12" />
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
            <MdEmail className="h-12 w-12" />
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
            <MdFax className="h-12 w-12" />
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

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      subject: "",
      email: "",
      phone: "",
      preferredContact: ["", ""],
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="relative bottom-72 bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto z-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="contact-form"
        className="space-y-6"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-between md:gap-6 sm:flex-row">
            <div className="flex flex-col w-full">
              {errors.firstName && (
                <span className="text-red-500 font-roboto">required</span>
              )}
              <label
                htmlFor="firstName"
                className="block mb-2 mt-4 text-lg font-roboto text-text"
              >
                First Name
              </label>
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  placeholder="First Name"
                  type="text"
                  className="w-full p-5 pl-12 text-base text-gray-900 border border-gray-400 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                  {...register("firstName", {
                    required: true,
                    maxLength: 30,
                  })}
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              {errors.lastName && (
                <span className="text-red-500 font-roboto">required</span>
              )}
              <label
                htmlFor="lastName"
                className="block mb-2 mt-4 text-lg font-roboto text-text"
              >
                Last Name
              </label>
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  placeholder="Last Name"
                  type="text"
                  className="w-full p-5 pl-12 text-base text-gray-900 border border-gray-400 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                  {...register("lastName", { required: true, maxLength: 30 })}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between md:gap-6 sm:flex-row">
            <div className="flex flex-col w-full">
              {errors.email && (
                <span className="text-red-500 font-roboto">required</span>
              )}
              <label
                htmlFor="email"
                className="block mb-2 mt-4 text-lg font-roboto text-text"
              >
                Email
              </label>
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MdEmail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  placeholder="Email"
                  type="text"
                  className="w-full p-5 pl-12 text-base text-gray-900 border border-gray-400 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              {errors.phone && (
                <span className="text-red-500 font-roboto">
                  Provide valid number
                </span>
              )}
              <label
                htmlFor="phone"
                className="block mb-2 mt-4 text-lg font-roboto text-text"
              >
                Phone Number
              </label>
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MdPhone className="h-5 w-5 text-gray-500" />
                </div>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    validate: (value) => isValidPhoneNumber(value),
                  }}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      className="w-full p-5 pl-12 text-base text-gray-900 border border-gray-400 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Phone Number"
                      value={value}
                      onChange={onChange}
                      defaultCountry="CA"
                      id="phone-input"
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <p className="text-xl text-text">
            What is your preferred method of contact?
          </p>
          <div className="flex flex-col gap-6 sm:flex-row">
            <label
              htmlFor="email"
              className="ml-2 text-lg font-roboto text-text flex items-center"
            >
              <input
                className="mr-3 w-5 h-5 text-blue-600 bg-gray-100 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 border-gray-400"
                type="checkbox"
                value="email"
                {...register("preferredContact")}
              />{" "}
              Email
            </label>
            <label
              htmlFor="phone"
              className="ml-2 text-lg font-roboto text-text flex items-center"
            >
              <input
                className="mr-3 w-5 h-5 text-blue-600 bg-gray-100 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 border-gray-400"
                type="checkbox"
                value="phone"
                {...register("preferredContact")}
              />{" "}
              Phone
            </label>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="block mb-2 mt-4 text-lg font-roboto text-text"
            >
              Message
            </label>
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full p-5 text-base text-gray-900 border border-gray-400 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
              {...register("message", { required: true })}
            />
            <div className="flex">
              <button
                type="submit"
                value="Send"
                className="rounded-md bg-blue-700 px-16 py-4 mt-4 text-base font-button font-bold text-white hover:bg-gray-700 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
