import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MoreMenu = ({ handleClick }) => {
  const router = useRouter();
  const [isWobRoute, setIsWobRoute] = useState(false);

  useEffect(() => {
    if (router.asPath.startsWith("/wob")) {
      setIsWobRoute(true); // set it as true if you want to launch the website
    } else {
      setIsWobRoute(false);
    }
  }, [router.asPath]);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className={`lg:inline-flex lg:w-auto w-full py-2 text-center rounded text-grey-800 text-1xl font-medium ${isWobRoute?"hover:text-[#00008B]":"hover:text-primary_orange-0"} ${isWobRoute?"dark:hover:text-[#00008B]":"dark:hover:text-primary_orange-0"} hover:text-lg transition-all link link-underline ${isWobRoute?"link-underline-black-wob":"link-underline-black"}`}>
          MORE
          <ChevronDownIcon
            className="-mr-1 mt-1 ml-2 h-10 w-10 hover:motion-safe:animate-ping"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute -right-5 mt-2 w-56 rounded-md shadow-lg dark:bg-black ring-1 bg-white ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Link href={isWobRoute?"/wobCodeofConduct":"/codeofconduct"}>
              <Menu.Item>
                {({ active }) => (
                  <a
                  onClick={handleClick}
                    className={classNames(
                      active
                        ? `${isWobRoute?"hover:text-[#00008B]":"hover:text-primary_orange-0"} ${isWobRoute?"dark:hover:text-[#00008B]":"dark:hover:text-primary_orange-0"} dark:text-white`
                        : `${isWobRoute?"hover:text-[#00008B]":"hover:text-primary_orange-0"} dark:text-white`,
                      "block px-4 py-2 text-sm cursor-pointer"
                    )}
                  >
                    CODE OF CONDUCT
                  </a>
                )}
              </Menu.Item>
            </Link>
            <Link href={isWobRoute?"":"/info"}>
              <Menu.Item>
                {({ active }) => (
                  <a
                  onClick={handleClick}
                    className={classNames(
                      active
                        ? `${isWobRoute?"hover:text-[#00008B]":"hover:text-primary_orange-0"} ${isWobRoute?"dark:hover:text-[#00008B]":"dark:hover:text-primary_orange-0"} dark:text-white`
                        : `${isWobRoute?"hover:text-[#00008B]":"hover:text-primary_orange-0"} dark:text-white`,
                      "block px-4 py-2 text-sm cursor-pointer"
                    )}
                  >
                    {isWobRoute?"HOW WOB WORKS ?":"HOW GSSOC WORKS ?"}
                  </a>
                )}
              </Menu.Item>
            </Link>
            <Link href={isWobRoute?"/wobEvents":"/event"}>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={classNames(
                      active
                        ? `${isWobRoute?"hover:text-[#00008B]":"hover:text-primary_orange-0"} ${isWobRoute?"dark:hover:text-[#00008B]":"dark:hover:text-primary_orange-0"} dark:text-white`
                        : `${isWobRoute?"hover:text-[#00008B]":"hover:text-primary_orange-0"} dark:text-white`,
                      "block px-4 py-2 text-sm cursor-pointer"
                    )}
                    onClick={handleClick}
                  >
                    EVENTS
                  </a>
                )}
              </Menu.Item>
            </Link>
            {/* <Link href="/campus_ambassador">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={classNames(
                      active
                        ? "hover:text-primary_orange-0 dark:hover:text-primary_orange-0 dark:text-white"
                        : "hover:text-primary_orange-0 dark:text-white",
                      "block px-4 py-2 text-sm cursor-pointer"
                    )}
                  >
                    CAMPUS AMBASSADORS
                  </a>
                )}
              </Menu.Item>
            </Link> */}
            {/* <Link href="verify_cert"> */}
            <Link href={isWobRoute?"":"/verify_cert"}>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={classNames(
                      active
                        ? `${isWobRoute?"hover:text-[#00008B]":"hover:text-primary_orange-0"} ${isWobRoute?"dark:hover:text-[#00008B]":"dark:hover:text-primary_orange-0"} dark:text-white`
                        : `hover:text-primary_orange-0 dark:text-white`,
                      "block px-4 py-2 text-sm cursor-pointer"
                    )}
                    onClick={handleClick}
                  >
                    VERIFY CERTIFICATIONS
                  </a>
                )}
              </Menu.Item>
            </Link>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MoreMenu;
