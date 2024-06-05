"use client";

import { useState, Fragment } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

type Dropdownoption = {
  name: string;
  href: string;
};

interface NavbarItem {
  name: string;
  href: string;
  dropdownOptions?: Dropdownoption[];
}

interface NavbarProps {
  navigation: NavbarItem[];
}

function Navbar({ navigation }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <Link href="/">
              <Image
                width={150}
                height={150}
                src="/logo-new.png"
                alt="Image of Joint Rehab logo"
              />
            </Link>
          </div>
          <div className="hidden md:block flex-grow">
            <div className="flex items-baseline justify-end space-x-4">
              {navigation.map((item) =>
                !item.dropdownOptions ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium ${
                      pathName === item.href ? "underline" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Menu as="div" key={item.name} className="relative">
                    <MenuButton className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                      {item.name}
                      <HiChevronDown className="ml-2 h-5 w-5" />
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
                      <MenuItems className="absolute left-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        <div className="py-1">
                          {item.dropdownOptions.map((option) => (
                            <MenuItem key={option.name}>
                              <Link href={option.href}>
                                <a className="block px-4 py-2 text-sm text-gray-700">
                                  {option.name}
                                </a>
                              </Link>
                            </MenuItem>
                          ))}
                        </div>
                      </MenuItems>
                    </Transition>
                  </Menu>
                )
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <Menu>
              <MenuButton
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <HiX className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <HiMenu className="block h-6 w-6" aria-hidden="true" />
                )}
              </MenuButton>
            </Menu>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((item) =>
            !item.dropdownOptions ? (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium ${
                  pathName === item.href ? "underline" : ""
                }`}
              >
                {item.name}
              </Link>
            ) : (
              <Menu as="div" key={item.name} className="relative">
                <MenuButton className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium flex items-center">
                  {item.name}
                  <HiChevronDown className="ml-2 h-5 w-5" />
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
                  <MenuItems className="absolute left-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <div className="py-1">
                      {item.dropdownOptions.map((option) => (
                        <MenuItem key={option.name}>
                          <Link
                            href={option.href}
                            className="block px-4 py-2 text-sm text-gray-700"
                          >
                            {option.name}
                          </Link>
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Transition>
              </Menu>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
