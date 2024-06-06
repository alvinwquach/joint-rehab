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
import MenuLink from "./MenuLink";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

type DropdownOption = {
  name: string;
  href: string;
};

interface NavbarItem {
  id: number;
  name: string;
  href: string;
  pathPrefix: string;
  dropdownOptions?: DropdownOption[];
}

interface NavbarProps {
  navigation: NavbarItem[];
}

function Navbar({ navigation }: NavbarProps) {
  const pathName = usePathname();

  return (
    <Disclosure as="nav" className="bg-white shadow-lg fixed w-full top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto ">
            <div className="relative flex items-center justify-center h-16 w-full ">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden  justify-self-start">
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              {/* Main */}
              <div className=" flex items-center justify-evenly flex-grow w-full">
                {/* Logo */}
                <Link href="/">
                  <div className="flex items-center cursor-pointer ml-2">
                    <Image
                      src="/logo-new.png"
                      alt="An image of Joint Rehab logo"
                      width={150}
                      height={150}
                      quality={100}
                    />
                  </div>
                </Link>
                {/* Menu Items */}
                <div className="hidden lg:flex flex-grow justify-center">
                  <div className="flex space-x-4 text-black">
                    {navigation.map((item) => (
                      <div key={item.id} className="flex">
                        {!item.dropdownOptions ? (
                          <MenuLink
                            href={item.href}
                            className={`px-3 py-2 rounded-md text-sm font-medium hover:text-primary ${
                              pathName === item.href ? "underline" : ""
                            }`}
                          >
                            {item.name}
                          </MenuLink>
                        ) : (
                          <Menu as="div" className="relative">
                            <MenuButton className="relative flex px-3 py-2 rounded-md text-sm font-medium hover:text-primary">
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
                                      <MenuLink
                                        href={`/${item.pathPrefix}/${option.href}`}
                                        className={`${
                                          active ? "bg-slate-100" : ""
                                        } block px-4 py-2 text-base text-gray-700`}
                                      >
                                        {option.name}
                                      </MenuLink>
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
              <div className="px-2 pt-2 pb-3 absolute bg-slate-800 w-full">
                {navigation.map((item) => (
                  <div key={item.id}>
                    {!item.dropdownOptions ? (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="text-white hover:bg-slate-700 hover:text-white block px-3 rounded-md text-base font-medium"
                      >
                        {item.name}
                      </DisclosureButton>
                    ) : (
                      <>
                        <DisclosureButton
                          key={item.name}
                          className="text-white hover:bg-slate-700 hover:text-white block px-3 rounded-md text-base font-medium"
                        >
                          {item.name}
                        </DisclosureButton>
                        {item.dropdownOptions.map((option, index) => (
                          <DisclosureButton
                            key={index}
                            as="a"
                            href={`/${item.pathPrefix}/${option.href}`}
                            className="block ml-4 px-2 rounded-md text-base font-medium text-white hover:bg-slate-700 hover:text-white"
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
