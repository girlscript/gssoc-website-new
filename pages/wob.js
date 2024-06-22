import Aos from "aos";
import { useTheme } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

import SocialFollow from "../components/homepage/SocialFollow";
import ThemeChanger from "../components/Toggler";

export default function Wob() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    Aos.init({ duration: 2000 });
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Head>
        <title>
          GirlScript Summer of Code 2024 | GirlScript Foundation India
        </title>
        <meta name="GSSoC'24" content="GSSoC'24 is back!" />
        <link
          rel="icon"
          href="https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png"
        />
        <meta property="og:url" content="https://gssoc.girlscript.tech/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GirlScript Summer of Code'24" />
        <meta property="og:description" content="GSSoC'24 is back!" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="gssoc.girlscript.tech" />
        <meta property="twitter:url" content="https://gssoc.girlscript.tech/" />
        <meta name="twitter:title" content="GirlScript Summer of Code'24" />
        <meta name="twitter:description" content="GSSoC'24 is here!" />
        <meta
          name="twitter:image"
          content="https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png"
        />
      </Head>
      <SocialFollow />
      <div className="absolute right-1 top-20 px-2 py-2 text-xs text-right animate-pulse rounded-full opacity-80 dark:bg-primary_orange-0 bg-black lg:hidden">
        <ThemeChanger />
      </div>
      <div className="transition-colors mx-auto mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-12 lg:px-40 2xl:px-50 dark:bg-darkmode_gray-0 dark:transition-colors">
        <div className="first-section mb-10 flex flex-col md:flex-row">
          <div className="basis-1/2 w-full md:w-[461px] relative">
            <div className="bg-gradient-to-r from-[#00008B] to-[#ADD8E6] bg-clip-text text-transparent dark:text-white text-6xl font-sans font-semibold mb-10">
              <div className="mt-2">WOB 2024</div>
              <div className="mt-2">is here!</div>
            </div>
            <div className="font-serif w-full md:w-[461px] font-medium text-2xl text-[#50508E] dark:text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </div>
            <div className="flex items-center mt-2 mb-10 md:mb-52 lg:mb-56">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScl2zoD7dOYnftAc9csfY4SD72WJbM1c0XMWAq-4Z7X5k45NA/viewform">
                <button className="bg-gradient-to-r from-[#00008B] to-[#85C6DC] text-md text-white font-semibold px-4 py-4 rounded-[8px] md:text-2xl md:py-2">
                  Register Here
                </button>
              </a>
              <a href="#about-gssoc">
                <button className="text-md text-[#56AAC5] font-semibold px-4 py-4 rounded-2xl md:text-2xl md:py-2 ml-4">
                  Learn More
                </button>
              </a>
            </div>
          </div>
          <div data-aos="fade-down" className="hero__image hidden lg:block">
            <Tilt
              className="Tilt"
              options={{ max: 25 }}
              style={{ height: 600, width: 600 }}
            >
              <div className="img__container">
                <img src={"./WoB/Hero_Image_Dev_Theme.svg"} alt="hero-image" />
              </div>
            </Tilt>
          </div>
        </div>
        <div className="first-section mb-10 flex flex-col md:flex-row">
          <span className="text-[#00008B] text-[64px]">About</span>
        </div>
        <div className="first-section mb-10 relative h-[434px] flex flex-col md:flex-row rounded-l-[50px]">
          <img
            src="/WoB/snow_flower.png"
            className="h-[434px] w-full md:w-[484px] absolute right-0 top-0"
            alt=""
          />
          <div className="bg-[#ADD8E6] w-full md:w-[75%] absolute top-0 left-0 h-full opacity-50 rounded-l-[50px]" />
        </div>
        <div className="first-section mb-10 flex flex-col md:flex-row">
          <span className="text-[#00008B] text-[64px]">
            Be a part of WOB 2024
          </span>
        </div>
        <div className="flex flex-row relative rounded-r-[50px] justify-between items-center bg-[#ADD8E6] h-[672px] dark:bg-black flex-wrap mb-24">
          <img
            className="w-[648px] h-[586px] absolute top-[10%]"
            src="/WoB/people.png"
            alt=""
          />
          <img
            className="w-[99px] h-[75px] absolute bottom-[15%] left-[50%]"
            src="/WoB/Right_Duo.png"
            alt=""
          />
          <img
            className="w-[367px] h-[376px] absolute rounded-tr-[50px] top-0 right-0"
            src="/WoB/Group.png"
            alt=""
          />
          <div className="bg-gradient-to-b absolute top-2 right-[8.4%] from-[#00008B] to-[#85C6DC] w-[81px] h-[85px]" />
          <div className="bg-gradient-to-b absolute top-2 right-[24%] from-[#00008B] to-[#85C6DC] w-[81px] h-[85px]" />
          <div className="bg-gradient-to-b absolute top-[15%] right-2 from-[#00008B] to-[#85C6DC] w-[81px] h-[85px]" />
          <div className="bg-gradient-to-b absolute top-[15%] right-[16.3%] from-[#00008B] to-[#85C6DC] w-[81px] h-[85px]" />
          <div className="bg-gradient-to-b absolute top-[28.5%] right-[8.5%] from-[#00008B] to-[#85C6DC] w-[81px] h-[85px]" />
          <div className="bg-gradient-to-b absolute top-[42.5%] right-2.5 from-[#00008B] to-[#85C6DC] w-[81px] h-[85px]" />
          <button className=" bg-gradient-to-r from-[#00008B] to-[#85C6DC] text-md text-white font-semibold px-4 py-4 rounded-[8px] absolute left-[60%] bottom-[16.8%] md:text-2xl md:py-2">
            Register Here
          </button>
        </div>
        {/* Schedule */}
        <div className="schedule__container flex flex-col items-center  mb-20  mx-5 md:mx-20  ">
          <div className="schedule__overview  relative">
            <p className="font-sans font-semibold text-3xl ml-5 mb-4 text-[#ADD8E6] dark:text-white">
              <span className="text-[#00008B]">Schedule</span> of WoB 2024!
            </p>
            {theme === "light" ? (
              <img
                id="Learn_more"
                alt=""
                src="/WoB/WoB_Schedule_Light_Mode-Dev.png"
              />
            ) : (
              <img
                id="Learn_more"
                alt=""
                src="/GSSoC_Schedule_Dark_Mode-2024.png"
              />
            )}
          </div>
        </div>
        {/* sponsors */}
        <div
          className="relative h-[549px] rounded-r-[50px] w-[1282] bg-cover bg-center"
          style={{ backgroundImage: "url('/WoB/sponser_bg.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/70 p-10">
            <p className="absolute top-[3%] left-[35%] text-[64px] text-[#00008B]">
              Sponsors
            </p>
            <div className="absolute top-[30%] left-[15%] h-[71px] w-[73px] bg-[#00008B] rounded-full" />
            <div className="absolute top-[60%] left-[15%] h-[71px] w-[73px] bg-[#00008B] rounded-full" />
            <div className="absolute top-[30%] right-[45%] h-[71px] w-[73px] bg-[#00008B] rounded-full" />
            <div className="absolute top-[60%] right-[45%] h-[71px] w-[73px] bg-[#00008B] rounded-full" />
            <div className="absolute top-[30%] right-[15%] h-[71px] w-[73px] bg-[#00008B] rounded-full" />
            <div className="absolute top-[60%] right-[15%] h-[71px] w-[73px] bg-[#00008B] rounded-full" />
            <div className="flex flex-col justify-center items-start h-full max-w-lg mx-auto">
              <button className="px-6 py-3 w-[279px] h-[63px] bg-gradient-to-r from-[#00008B] to-[#ADD8E6] absolute bottom-[40px] text-[#00008B] right-[80px] rounded-r-[30px] shadow-md hover:bg-blue-600">
                Sponsor Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
