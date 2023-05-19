import { Tooltip } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
			<nav className="flex items-center flex-wrap transition-colors  bg-white drop-shadow-xl p-1 justify-center mb-10 dark:bg-black dark:text-white dark:transition-colors sticky top-0 z-10">
				<Link href="/">
					<a className="inline-flex items-center p-2 mr-4 ">
						<span className="text-xl text-orange font-bold uppercase tracking-wide ml-2  sm:ml-8">
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
									alt="GSSoC 
                  logo dark"
								/>
							)}
						</span>
					</a>
				</Link>

				<div className="lg:hidden cursor-pointer ml-auto mr-1 ">
					<Tooltip label="Change Theme" placement="bottom">
						<div>
							<ThemeChanger />
						</div>
					</Tooltip>
				</div>

				<button
					className=" inline-flex p-3 hover:bg-orange-600 rounded lg:hidden text-grey-800  hover:text-grey-800 outline-none"
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
					<div className="lg:inline-flex gap-4 xl:gap-6 lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center content-center items-start  flex flex-col lg:h-auto mr-3.5">
						<Link href="/">
							<a
								className="
                text-grey-800 w-full lg:w-fit  text-1xl font-medium hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black
              "
							>
								ABOUT
							</a>
						</Link>
						<Link href="/project">
							<a
								className="
                text-grey-800 w-full lg:w-fit  text-1xl font-medium hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black
              "
							>
								PROJECT
							</a>
						</Link>
						<Link href="/#Sponsors">
							<a
								className="
                text-grey-800 w-full lg:w-fit  text-1xl font-medium hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black
              "
							>
								SPONSORS
							</a>
						</Link>
						{/* <Link href="/schedule">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-center rounded text-grey-800 text-1xl font-medium mr-3.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black">
                SCHEDULE
              </a>
            </Link> */}
						{/* <Link href="/leaderboard">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-center rounded text-grey-800 text-1xl font-medium mr-3.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black">
                LEADERBOARD
              </a>
            </Link> */}
						<Link href="/faq">
							<a
								className="
               text-grey-800 w-full lg:w-fit  text-1xl font-medium hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black
              "
							>
								FAQ
							</a>
						</Link>
						<Link href="/team">
							<a
								className="
               text-grey-800 w-full lg:w-fit  text-1xl font-medium hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black
              "
							>
								TEAM
							</a>
						</Link>
						<Link href="/blog">
							<a
								className="
               text-grey-800 w-full lg:w-fit  text-1xl font-medium hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black
              "
							>
								BLOG
							</a>
						</Link>
						<a
							href="#Contact"
							className="
              text-grey-800 w-full lg:w-fit  text-1xl font-medium hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black
              "
						>
							CONTACT
						</a>
						<div className="lg:inline-flex lg:w-auto w-full px-2 text-center rounded link link-underline link-underline-black mr-3.5">
							<MoreMenu />
						</div>
						<div className="hidden cursor-pointer lg:block">
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
