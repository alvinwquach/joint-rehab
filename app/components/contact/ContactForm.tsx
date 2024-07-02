"use client";

import { useForm, Controller } from "react-hook-form";
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
  } = useForm({
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
    <div className="flex flex-col-reverse gap-3 md:gap-12 xl:flex-row">
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="contact-form"
        className="w-full flex-1 m-auto pt-4 xl:pt-0"
      >
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl text-gray-550 dark:text-white font-roboto font-bold">
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
                className="block mb-2 mt-5 text-sm font-roboto text-gray-900 dark:text-white"
              >
                First Name
              </label>
              <input
                placeholder="First Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("firstName", { required: true, maxLength: 30 })}
              />
            </div>
            <div className="flex flex-col w-full">
              {errors.lastName && (
                <span className="absolute mt-24 ml-2 text-red-500  font-roboto">
                  required
                </span>
              )}
              <label
                htmlFor="lastName"
                className="block mb-2 mt-5 text-sm font-roboto text-gray-900 dark:text-white"
              >
                Last Name
              </label>
              <input
                placeholder="Last Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("lastName", { required: true, maxLength: 30 })}
              />
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
                className="block mb-2 mt-5 text-sm font-roboto text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
            </div>

            <div className="flex flex-col w-full text-left">
              {errors.phone && (
                <span className="absolute mt-24 ml-2 text-red-500  font-roboto">
                  Provide valid number
                </span>
              )}
              <label
                htmlFor="phone"
                className="block mb-2 mt-5 text-sm font-roboto text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <Controller
                name="phone"
                control={control}
                rules={{
                  validate: (value) => isValidPhoneNumber(value),
                }}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          <p className="text-xl dark:text-white">
            What is your preferred method of contact?
          </p>
          <div className="flex flex-col gap-56 gap-y-8 sm:flex-row">
            <label
              htmlFor="email"
              className="ml-2 text-lg font-regular font-roboto text-gray-900 dark:text-gray-300"
            >
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
          <div className="flex flex-col gap-y-4">
            <h3 className="text-2xl text-gray-550 dark:text-white font-roboto font-bold mt-7">
              What can we help you with?
            </h3>
            <label
              htmlFor="subject"
              className="block text-sm font-roboto text-white"
            >
              Subject
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("subject", {
                required: true,
                minLength: 5,
                maxLength: 30,
              })}
            />
            {errors.subject && (
              <span className="absolute mt-subjectRem ml-2 text-red-500  font-roboto">
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              value="Send"
              className="w-full rounded-md bg-blue-500 px-14 py-4 mt-4 text-sm font-button font-bold text-white hover:bg-blue-600 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
