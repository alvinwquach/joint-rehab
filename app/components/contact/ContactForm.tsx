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
    <div className="relative bottom-96 bg-white p-4 rounded-lg shadow-lg max-w-xl mx-auto z-20 min-h-[500px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="contact-form"
        className="space-y-6"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:gap-6">
            <div className="flex flex-col w-full">
              {errors.firstName && (
                <span className="text-red-500 text-sm">Required</span>
              )}
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-gray-700"
              >
                First Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <FaUser className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  placeholder="First Name"
                  type="text"
                  className="w-full py-3 pl-10 text-sm text-gray-700 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                  {...register("firstName", {
                    required: true,
                    maxLength: 30,
                  })}
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              {errors.lastName && (
                <span className="text-red-500 text-sm">Required</span>
              )}
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold text-gray-700"
              >
                Last Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <FaUser className="h-5 w-5 text-gray-500" />
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
          <div className="flex flex-col sm:flex-row sm:gap-6">
            <div className="flex flex-col w-full">
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <MdEmail className="h-5 w-5 text-gray-500" />
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
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700"
              >
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-2">
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
          <div className="flex flex-col">
            <p className="text-base font-semibold text-gray-700">
              Preferred Method of Contact
            </p>
            <div className="flex flex-col sm:flex-row sm:gap-4 mt-2">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <input
                  className="mr-2 text-blue-600 bg-gray-100 rounded focus:ring-blue-600 focus:ring-2 border-gray-300"
                  type="checkbox"
                  value="email"
                  {...register("preferredContact")}
                />{" "}
                Email
              </label>
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <input
                  className="mr-2 text-blue-600 bg-gray-100 rounded focus:ring-blue-600 focus:ring-2 border-gray-300"
                  type="checkbox"
                  value="phone"
                  {...register("preferredContact")}
                />{" "}
                Phone
              </label>
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700"
            >
              Message
            </label>
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full p-4 text-base text-gray-900 border border-gray-400 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
              {...register("message", { required: true })}
            />
          </div>
        </div>
      </form>
      <button
        type="submit"
        className="mt-4 px-6 py-3 bg-blue-700 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </div>
  );
}

export default ContactForm;
