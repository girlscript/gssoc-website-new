import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Tooltip } from "@chakra-ui/react";
import MoreMenu from "./MoreMenu";
import ThemeChanger from "./Toggler";

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
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <nav className="flex items-center justify-between transition-colors flex-wrap bg-white drop-shadow-xl p-1 mb-10 dark:bg-black dark:text-white dark:transition-colors sticky top-0 z-10">
        <div className="flex items-center p-1.5 ml-5">
          <Link href="/">
            <a className="inline-flex items-center">
              <span className="text-xl font-bold uppercase tracking-wide">
                {theme === "light" ? (
                  <img
                    style={{ width: "200px" }}
                    id="Learn_more"
                    src="./GS_logo_Black.svg"
                    alt="GSSoC logo light"
                  />
                ) : (
                  <img
                    style={{ width: "200px" }}
                    id="Learn_more"
                    src="./GS_logo_White.svg"
                    alt="GSSoC logo dark"
                  />
                )}
              </span>
            </a>
          </Link>
        </div>
        <button
          className="inline-flex p-2.5 hover:bg-orange-600 rounded lg:hidden text-grey-700 dark:text-white"
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
        <div
          className={`${
            active ? " " : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto text-center`}
        >
          <div className="flex flex-col lg:flex-row lg:ml-auto lg:w-auto items-center mr-6">
            <Link href="/">
              <a
                onClick={handleClick}
                className="lg:inline-flex lg:w-auto w-full px-2 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
              >
                ABOUT
              </a>
            </Link>
            <Link href="/wob">
              <a
                onClick={handleClick}
                className="lg:inline-flex lg:w-auto w-full px-2 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
              >
                WOB
              </a>
            </Link>
            <Link href="/project">
              <a
                onClick={handleClick}
                className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
              >
                PROJECT
              </a>
            </Link>
            <Link href="/#Sponsors">
              <a
                onClick={handleClick}
                className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
              >
                SPONSORS
              </a>
            </Link>
            <Link href="/leaderboard">
              <a
                onClick={handleClick}
                className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
              >
                LEADERBOARD
              </a>
            </Link>
            <Link href="/jobfair">
              <a className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black">
                JOB FAIR
              </a>
            </Link>
            <Link href="/faq">
              <a className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black">
                FAQ
              </a>
            </Link>
            <Link href="/team">
              <a
                onClick={handleClick}
                className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
              >
                TEAM
              </a>
            </Link>
            <Link href="/blog">
              <a
                onClick={handleClick}
                className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
              >
                BLOG
              </a>
            </Link>
            <a
              onClick={handleClick}
              href="/contact"
              className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
            >
              CONTACT
            </a>
            <div className="lg:inline-flex lg:w-auto w-full px-2 text-center rounded">
              <MoreMenu handleClick={handleClick} />
            </div>
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
