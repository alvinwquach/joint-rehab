"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import Menulink from "./Menulink";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

type DropdownOption = {
  name: string;
  slug: string;
};

export interface NavbarItem {
  id: number;
  name: string;
  href?: string;
  pathPrefix: string;
  dropdownOptions?: DropdownOption[];
}

interface NavbarProps {
  navigation: NavbarItem[];
}

function Navbar({ navigation }: NavbarProps) {
  const pathName = usePathname();

  const requestAppointmentButton = navigation.find(
    (item) => item.name === "Request Appointment"
  );
  const otherNavItems = navigation.filter(
    (item) => item.name !== "Request Appointment"
  );

  return (
    <Disclosure as="nav" className="bg-white shadow-lg fixed w-full top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto">
            <div className="relative flex items-center justify-center h-24 w-full">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              {/* Main */}
              <div className="flex items-center justify-evenly flex-grow w-full">
                {/* Logo */}
                <Link href="/">
                  <div className="flex items-center cursor-pointer md:ml-5 ml-0">
                    <Image
                      src="/images/logo-new.png"
                      alt="Image of company logo with the words physiotherapy and massage therapy"
                      height={200}
                      width={200}
                      quality={100}
                    />
                  </div>
                </Link>
                {/* Menu Items */}
                <div className="hidden lg:flex flex-grow justify-end mr-5">
                  <div className="flex space-x-4 text-black">
                    {navigation.map((item) => (
                      <div key={item.id} className="flex">
                        {!item.dropdownOptions ? (
                          item.name === "Request Appointment" ? (
                            <Link
                              href={item.href ?? ""}
                              className="uppercase px-3 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
                            >
                              {item.name}
                            </Link>
                          ) : (
                            <Menulink
                              href={item.href ?? ""}
                              className={`px-3 py-2 rounded-md text-sm font-medium hover:text-primary ${
                                pathName === item.href ? "underline" : ""
                              }`}
                            >
                              {item.name}
                            </Menulink>
                          )
                        ) : (
                          <Menu as="div" className="relative">
                            <MenuButton className="relative flex px-3 py-2 rounded-md text-sm font-medium hover:text-primary cursor-default">
                              {item.name}
                              <HiChevronDown
                                className="block h-6 w-6 ml-2 text-primary"
                                aria-hidden="true"
                              />
                            </MenuButton>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <MenuItems className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {item.dropdownOptions.map((option, index) => (
                                  <MenuItem key={index}>
                                    {({ active }) => (
                                      <Menulink
                                        href={`/${item.pathPrefix}/${option.slug}`}
                                        className={`${
                                          active ? "bg-slate-100" : ""
                                        } block px-4 py-2 text-base text-gray-700`}
                                      >
                                        {option.name}
                                      </Menulink>
                                    )}
                                  </MenuItem>
                                ))}
                              </MenuItems>
                            </Transition>
                          </Menu>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <DisclosurePanel className="lg:hidden relative">
              <div className=" absolute bg-white w-full">
                {requestAppointmentButton && (
                  <DisclosureButton
                    as={Link}
                    href={requestAppointmentButton.href ?? ""}
                    className="uppercase block w-11/12 text-center mx-auto px-3 py-2 rounded-lg text-base font-medium hover:text-white bg-blue-700 hover:bg-blue-800 my-2"
                  >
                    {requestAppointmentButton.name}
                  </DisclosureButton>
                )}
                {otherNavItems.map((item) => (
                  <div key={item.id}>
                    {!item.dropdownOptions ? (
                      <DisclosureButton
                        as="a"
                        href={item.href}
                        className=" text-black hover:bg-blue-700 hover:text-white block px-3 rounded-md text-base font-medium"
                      >
                        {item.name}
                      </DisclosureButton>
                    ) : (
                      <>
                        <div className="text-black block px-3 rounded-md text-base font-medium">
                          {item.name}
                        </div>
                        {item.dropdownOptions.map((option, index) => (
                          <DisclosureButton
                            key={index}
                            as="a"
                            href={`/${item.pathPrefix}/${option.slug}`}
                            className="block ml-4 px-2 rounded-md text-base font-medium text-black hover:bg-blue-700 hover:text-white"
                          >
                            {option.name}
                          </DisclosureButton>
                        ))}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
