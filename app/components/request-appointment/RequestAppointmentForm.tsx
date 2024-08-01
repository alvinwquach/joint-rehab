"use client";

import { useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input/input";
import ReactDatePicker from "react-datepicker";
import "react-phone-number-input/style.css";
import { Service } from "@/types/Service";
import { FaUser } from "react-icons/fa";
import {
  MdEmail,
  MdHealthAndSafety,
  MdLocationOn,
  MdPhone,
} from "react-icons/md";

interface ServicesQueryResult {
  allService: Service[];
}

interface RequestAppointmentFormProps {
  services: Service[];
}

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: Date;
  subject: string | string[];
  preferredContact: string[];
  preferredLocation: string;
  message: string;
};

function RequestAppointmentForm({ services }: RequestAppointmentFormProps) {
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: new Date(),
      subject: "",
      preferredContact: [],
      message: "",
    },
  });

  const searchParams = useSearchParams();
  // Get serviceName from searchParams
  const serviceName = searchParams.get("service");
  // Set the value of subject based on serviceName
  setValue("subject", serviceName || "");

  const locationOptions = [
    { value: "MarkhamPlaza", label: "Markham Plaza" },
    { value: "AshgroveMedicalCenter", label: "Ashgrove Medical Center" },
  ];

  return (
    <div className="flex flex-col-reverse gap-3 md:gap-12 xl:flex-row">
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="request-appointment-form"
        className="w-full flex-1 m-auto pt-4 xl:pt-0"
      >
        <div className="flex flex-col mt-12">
          <h2 className="text-2xl text-black font-roboto font-bold">
            Let&rsquo;s get to know you
          </h2>
          <div className="flex flex-col justify-evenly md:gap-4 sm:flex-row">
            <div className="flex flex-col w-full">
              {errors.firstName && (
                <span className="absolute mt-24 ml-2 text-red-500  font-roboto">
                  required
                </span>
              )}
              <label
                htmlFor="firstName"
                className="block mb-2 mt-5 text-sm font-roboto text-black"
              >
                First Name
              </label>
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaUser className="h-4 w-4 text-gray-500" />
                </div>
                <input
                  placeholder="First Name"
                  type="text"
                  className="w-full py-3 pl-10 text-sm text-gray-700 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                  {...register("firstName", { required: true, maxLength: 30 })}
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              {errors.lastName && (
                <span className="absolute mt-24 ml-2 text-red-500  font-roboto">
                  required
                </span>
              )}
              <label
                htmlFor="lastName"
                className="block mb-2 mt-5 text-sm font-roboto text-black"
              >
                Last Name
              </label>
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaUser className="h-4 w-4 text-gray-500" />
                </div>

                <input
                  placeholder="Last Name"
                  type="text"
                  className="w-full py-3 pl-10 text-sm text-gray-700 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                  {...register("lastName", { required: true, maxLength: 30 })}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-evenly md:gap-4 sm:flex-row">
            <div className="flex flex-col w-full">
              {errors.email && (
                <span className="absolute mt-24 ml-2 text-red-500  font-roboto">
                  required
                </span>
              )}
              <label
                htmlFor="email"
                className="block mb-2 mt-5 text-sm font-roboto text-black"
              >
                Email
              </label>
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MdEmail className="h-4 w-4 text-gray-500" />
                </div>
                <input
                  placeholder="Email"
                  type="text"
                  className="w-full py-3 pl-10 text-sm text-gray-700 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
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
                <span className="absolute mt-24 ml-2 text-red-500  font-roboto">
                  Provide valid number
                </span>
              )}
              <label
                htmlFor="phone"
                className="block mb-2 mt-5 text-sm font-roboto text-black"
              >
                Phone Number
              </label>
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MdPhone className="h-4 w-4 text-gray-500" />
                </div>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    validate: (value) => isValidPhoneNumber(value),
                  }}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      className="w-full py-3 pl-10 text-sm text-gray-700 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
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
          <p className="text-xl text-black mt-5">
            What is your preferred method of contact?
          </p>
          <div className="flex flex-col gap-56 gap-y-8 sm:flex-row">
            <label
              htmlFor="email"
              className="ml-2 text-lg font-regular font-roboto text-black"
            >
              <input
                className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 rounded  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 :bg-gray-700 border-gray-600"
                type="checkbox"
                value="email"
                {...register("preferredContact")}
              />{" "}
              Email
            </label>
            <label
              htmlFor="phone"
              className="ml-2 text-lg font-regular font-roboto text-gray-900 dark:text-gray-300"
            >
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="checkbox"
                value="phone"
                {...register("preferredContact")}
              />{" "}
              Phone
            </label>
          </div>
          <div className="flex flex-col gap-y-4 mt-5">
            <p className="text-xl text-black">
              What is your preferred location?
            </p>
            <label
              htmlFor="location"
              className="block mt-4 text-sm text-gray-900 dark:text-white sr-only"
            >
              Preferred Location
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MdLocationOn className="h-4 w-4 text-gray-500" />
              </div>
              <select
                id="location"
                className="w-full py-3 pl-10 text-sm text-gray-700 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                {...register("preferredLocation", { required: true })}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a location
                </option>
                {locationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 mt-5">
            <h3 className="text-2xl text-black font-roboto font-bold">
              When would you like to come in?
            </h3>
            <p className="text-black font-roboto">
              We will contact you as soon as possible with a time based on
              availability.
            </p>
            <label
              htmlFor="date"
              className="block mt-4 text-sm text-black sr-only"
            >
              Date
            </label>
            <Controller
              control={control}
              name="date"
              render={({ field: { onChange, onBlur, value } }) => (
                <ReactDatePicker
                  className="w-full py-3 pl-10 text-sm text-gray-700 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                  placeholderText="Select date"
                  onChange={(e) => onChange(e)}
                  onBlur={onBlur}
                  selected={value}
                />
              )}
            />
          </div>
          <div className="flex flex-col gap-y-4 mt-5">
            <h3 className="text-2xl text-black font-roboto font-bold ">
              What service would you like?
            </h3>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MdHealthAndSafety className="h-4 w-4 text-gray-500" />
              </div>
              <select
                className="w-full py-3 pl-10 text-sm text-gray-700 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                {...register("subject", {
                  required: true,
                })}
                defaultValue=""
              >
                <option disabled selected value="">
                  Select a service
                </option>
                {services.map((service) => (
                  <option
                    key={service?.name ?? "Service Name"}
                    value={service?.name ?? ""}
                  >
                    {service?.name ?? "Service Name"}
                  </option>
                ))}
              </select>
            </div>
            {errors.subject && (
              <span className="absolute mt-subjectRemAppointment ml-2 text-red-500 font-roboto">
                required
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="mt-6 mb-4 block text-sm font-roboto text-gray-900 dark:text-white"
            >
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Message"
              className="w-full p-4 text-base text-gray-900 border border-gray-400 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
              {...register("message", {
                required: true,
                minLength: 5,
                maxLength: 1200,
              })}
            />
            {errors.message && (
              <span className="absolute mt-messageRem ml-2 text-red-500  font-roboto">
                required (max 1200 Chars)
              </span>
            )}
          </div>
          <div className="flex">
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-blue-700 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RequestAppointmentForm;
