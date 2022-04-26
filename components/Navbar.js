import ThemeChanger from "./Toggler";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Tooltip } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import MoreMenu from "./MoreMenu";

// import { Menu, Transition } from "@headlessui/react";

/*import Dropdown from "@material-tailwind/react/Dropdown"
import DropdownItem from "@material-tailwind/react/DropdownItem"
import DropdownLink from "@material-tailwind/react/DropdownLink" */

function MyLink(props) {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <nav className="flex items-center transition-colors flex-wrap bg-white drop-shadow-xl p-1 justify-center mb-10 dark:bg-black dark:text-white dark:transition-colors sticky top-0 z-10">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl text-orange font-bold uppercase tracking-wide  ml-8">
              {/* <img
                src="https://user-images.githubusercontent.com/64256342/151362487-b8574a92-6d37-418b-8c97-03ba3470f4fa.png"
                alt=""
                width="36"
                height="36"
              /> */}
              {theme === "light" ? (
                <img
                  style={{ width: "200px" }}
                  id="Learn_more"
                  src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Navbar%20logo/GS_logo_Black1.png?raw=true"
                  alt="GSSoC logo light"
                />
              ) : (
                <img
                  style={{ width: "200px" }}
                  id="Learn_more"
                  src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Navbar%20logo/GS_logo_White.png?raw=true"
                  alt="GSSoC logo dark"
                />
              )}
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-orange-600 rounded lg:hidden text-grey-800 ml-auto hover:text-grey-800 outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto text-center mr-8`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center content-center items-start  flex flex-col lg:h-auto mr-3.5">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-center rounded text-grey-800 text-1xl font-medium mr-3.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black">
                ABOUT
              </a>
            </Link>
            <Link href="/project">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2  text-center rounded text-grey-800 text-1xl font-medium mr-3.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black">
                PROJECT
              </a>
            </Link>
            <Link href="/#Sponsors">
            <a
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 mr-30 text-center rounded text-grey-800 text-1xl font-medium mr-3.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
            >
              SPONSORS
            </a>
            </Link>
            <Link href="/schedule">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-center rounded text-grey-800 text-1xl font-medium mr-3.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black">
                SCHEDULE
              </a>
            </Link>
            <Link href="/leaderboard">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-center rounded text-grey-800 text-1xl font-medium mr-3.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black">
              LEADERBOARD
              </a>
            </Link>
            <Link href="/faq">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-center rounded text-grey-800 text-1xl font-medium mr-3.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black">
                FAQ
              </a>
            </Link>
            <Link href="/team">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-center rounded text-grey-800 text-1xl font-medium mr-3.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black">
                TEAM
              </a>
            </Link>
            <Link href="/blog">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-center rounded text-grey-800 text-1xl font-medium mr-3.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black">
                BLOGS
              </a>
            </Link>
            <a
              href="#Contact"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 mr-30 text-center rounded text-grey-800 text-1xl font-medium mr-3.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
            >
              CONTACT
            </a>
            <div className="lg:inline-flex lg:w-auto w-full px-2 text-center rounded link link-underline link-underline-black mr-3.5">
              <MoreMenu />
            </div>

            {/* <a
              href="/"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 mr-30 text-center rounded text-grey-800 text-1xl font-medium mr-3.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
            >
          <div > 
      <div className="relative inline-block text-center" > 
        <Menu>
          {({ open }) => (
            <>
              <span>
                <Menu.Button    className="lg:inline-flex lg:w-auto w-full px-3 py-2 mr-30 text-center rounded text-grey-800 text-1xl font-medium mr-3.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black">
                  <span>MORE</span>
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Menu.Button>
              </span>

              <Transition
                show={open}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="absolute right-0 w-46 mt-2 origin-top-right dark:bg-darkmode_gray-0 bg-white border divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                >
                 
                  <div className="py-1 ">
                    
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/team"
                          className={`${
                            active
                              ? "text-gray-800"
                              : "text-gray-800"
                          } lg:inline-flex lg:w-auto w-full px-3 py-2 text-center dark:text-white  rounded text-grey-800 text-1xl font-medium mr-3.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black flex justify-between w-full px-4 py-2 text-1xl leading-5`}
                        >
                          Team
                          <br/>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={`${
                            active
                              ? "text-gray-800"
                              : "text-gray-800"
                          } lg:inline-flex lg:w-auto w-full px-3 py-2 text-center dark:text-white  rounded text-grey-800 text-1xl font-medium mr-3.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black flex justify-between w-full px-4 py-2 text-1xl leading-5`}
                        >
                          Blog
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={`${
                            active
                              ? "text-gray-800"
                              : "text-gray-800"
                          } lg:inline-flex lg:w-auto w-full px-3 py-2 text-center dark:text-white  rounded text-grey-800 text-1xl font-medium mr-3.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black  flex justify-between w-full px-4 py-2 text-1xl leading-5`}
                        >
                          CA Program
                        </a>
                      )}
                    </Menu.Item>
                  </div>

                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
       </div>
    </div>
            </a> */}
            <div className="hidden lg:block">
              <Tooltip label="Change Theme" placement="bottom">
                <div>
                  <ThemeChanger />
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
