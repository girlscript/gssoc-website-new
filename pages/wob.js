import Aos from "aos";
import { useTheme } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

import SocialFollow from "../components/homepage/SocialFollow";
import ThemeChanger from "../components/Toggler";
import UnderConstruction from "../components/wob/UnderConstruction";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import SnowfallEffect from "../components/wob/SnowfallEffect";

export default function Wob() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isUnderConstruction = true; //set it false after completion
  useEffect(() => {
    Aos.init({ duration: 2000 });
    setMounted(true);
  }, []);

  if (isUnderConstruction) {
    return <UnderConstruction />;
  }

  if (!mounted) return null;

  return (
    <div>
      <Head>
        <title>
          GirlScript Winter of Blockchain 2024 | GirlScript Foundation India
        </title>
        <meta name="WOB'24" content="WOB'24 is back!" />
        <link
          rel="icon"
          href="/WoB/Favicon.ico"
        />
        <meta property="og:url" content="https://gssoc.girlscript.tech/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GirlScript Winter of Blockchain'24" />
        <meta property="og:description" content="WOB'24 is back!" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="gssoc.girlscript.tech" />
        <meta property="twitter:url" content="https://gssoc.girlscript.tech/" />
        <meta name="twitter:title" content="GirlScript Winter of Blockchain'24" />
        <meta name="twitter:description" content="WOB'24 is here!" />
        <meta
          name="twitter:image"
          content="https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png"
        />
      </Head>
      <SocialFollow />
      <div className="absolute right-1 top-20 px-2 py-2 text-xs text-right animate-pulse rounded-full opacity-80 dark:bg-[#00008B] bg-black lg:hidden">
        <ThemeChanger />
      </div>
      <div className="transition-colors mx-auto mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-12 lg:px-40 2xl:px-50 dark:bg-darkmode_gray-0 dark:transition-colors">
        <div className="first-section mb-10 flex flex-col md:flex-row">
          <div className="basis-1/2 w-full md:w-[461px] relative">
            <div className="bg-gradient-to-r from-[#00008B] to-[#ADD8E6] bg-clip-text text-transparent dark:text-white text-6xl font-sans font-semibold mb-10">
              <div className="mt-2">WOB 2024</div>
              <div className="mt-2">is here!</div>
            </div>
            <div className="font-serif font-medium text-2xl max-w-[461px] 1.5rem 2rem text-[#50508E] dark:text-white">
              GirlScript Winter of Blockchain is a 30 days long
              <br />
              <span className="text-[#00008B]">#OpenSource &nbsp;</span>
              program by GirlScript Foundation.
              <br />
              <b> 10th May - 10th August 2024 </b>
            </div>
            <div className="flex items-center mt-2 mb-10 md:mb-52 lg:mb-56">
              <a href="">
                <button className="bg-gradient-to-r from-[#00008B] to-[#85C6DC] text-md text-white font-semibold px-4 py-4 rounded-[8px] md:text-2xl md:py-2">
                  Register Here
                </button>
              </a>
              <a href="#about-wob">
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

        <div className="flex justify-between items-center flex-wrap mb-24">
          <div
            className="border-8 rounded drop-shadow-xl border-black dark:border-white"
            data-aos="flip-left"
            data-aos-duration="700"
          >
            <img
              src="./GirlScript_Group_Photo.svg"
              height="453"
              width="420"
              alt="GirlScript Group Photo"
            />
          </div>
          <div className="basis-full md:basis-6/12 md:order-first lg:basis-1/2 lg:order-first relative">
            {theme === "light" ? (
              <img
                className=" mt-4 mb-8 md:mb-9 md:mt-0"
                src="./GS_Foundation_logo_Black.svg"
                alt="logo"
              />
            ) : (
              <img
                className=" mt-4 mb-8 md:mb-9 md:mt-0"
                src="./GS_Foundation_logo_White.svg"
                alt="logo"
              />
            )}
            <div className="text-black dark:text-white font-semibold text-4xl 2.25rem 3rem mb-5 font-sans">
              About <span className="text-[#00008B]">GirlScript </span>
              Foundation
            </div>
            <p className="dark:text-white font-serif text-1xl text-black-100">
              The GirlScript Foundation is one of the leading foundations in
              India. It has successfully completed Five Years of educating young
              minds through robust initiatives. It aims to change lives by
              imparting tech education and relevant skills while fostering
              diversity. Apart from this, the Foundation is one of the world’s
              largest tech community for students to polish and nurture their
              technical skills. Our tremendous endeavors curb the gap to offer a
              technophilic environment and revolutionize the tech domain by
              promoting, sharing, and spreading knowledge equally to every
              individual.
            </p>
          </div>
        </div>

        <div
          className="flex flex-row justify-between items-center bg-[#DFF4FF] dark:bg-black flex-wrap rounded-xl mb-24"
          id="about-wob"
        >
          <div className="px-4 pt-3 lg:text-right rounded-xl md:w-1/2 lg:my-4 lg:px-10 lg:py-10 lg:w-1/2">
            {theme === "light" ? (
              <img
                id="Learn_more"
                className="mb-10 w-[380px]"
                src="/WoB/WOB_Black.png"
                alt="Learn More light"
              />
            ) : (
              <img
                id="Learn_more"
                className="mb-10 w-[380px]"
                src="/WoB/WOB_White.png"
                alt="Learn More dark"
              />
            )}
            <div className="text-[#00008B] text-left font-semibold font-sans text-4xl 2.25rem 3rem mb-10 lg:w-[570px]">
              <h1 className="dark:text-white text-black text-4xl 2.25rem 3rem">
                About
                <br />
                GirlScript{" "}
              </h1>
              Winter of Blockchain
            </div>
            <p className="dark:text-white font-serif text-left text-xl">
              GirlScript Winter Of Blockchain is a thirty-days-long Open-Source
              Program started to conduct every early Winter by the Girlscript Foundation. With
              constant efforts, participants contribute to numerous projects
              under the extreme guidance of skilled mentors over this duration.
              With such exposure, students begin to contribute to real-world
              projects from the comfort of their homes. GirlScript Winter Of
              Blockchain has witnessed active participation over the years, and the
              2024 edition aims to carry the legacy with a promising impact towards Blockchain.
            </p>
          </div>

          <div className="pr-4 font-semibold pt-3 rounded-lg lg:my-4 lg:px-2 lg:py-10 ">
            <div className="dark:bg-black  dark:transition-colors bg-[#DFF4FF] shadow-lg rounded-lg my-1 px-1 w-64 sm:w-fit">
              <h1 className="mt-8 pt-6 pl-8 text-3xl xl:text-4xl text-[#00008B] 3rem 3rem ">
                WOB 2024
              </h1>
              <div className="pl-8 text-2xl text-[#00008B] 1.5rem 2rem ">
                {" "}
                by the numbers
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-2 mb-4">
                <div className="statscol">
                  <div className="mt-4 pt-4 pl-8">
                    <h1 className="text-3xl xl:text-4xl text-[#00008B] 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>
                            {isVisible ? <CountUp end={27000} /> : null}+
                          </div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className="text-2xl text-[#23A3CD] 1.5rem 2rem ">
                      {" "}
                      Registrations
                    </p>
                  </div>
                  <div className="mt-4 pt-4 pl-8">
                    <h1 className="text-3xl xl:text-4xl text-[#00008B] 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>{isVisible ? <CountUp end={200} /> : null}+</div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className="text-2xl text-[#23A3CD] 1.5rem 2rem ">
                      {" "}
                      Institutes
                    </p>
                  </div>
                  <div className="mt-4 pt-4 pl-8">
                    <h1 className="text-3xl xl:text-4xl text-[#00008B] 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>
                            {isVisible ? <CountUp end={11000} /> : null}+
                          </div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className=" mb-6 text-2xl text-[#23A3CD] 1.5rem 2rem ">
                      Total PRs
                    </p>
                  </div>
                </div>

                <div className="statscol">
                  <div className="mt-4 pt-4 pl-8 pr-4">
                    <h1 className="text-3xl xl:text-4xl text-[#00008B] 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>
                            {isVisible ? <CountUp end={17000} /> : null}+
                          </div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className="text-2xl text-[#23A3CD] 1.5rem 2rem ">
                      {" "}
                      Participants
                    </p>
                  </div>
                  <div className="mt-4 pt-4 pl-8">
                    <h1 className="text-3xl xl:text-4xl text-[#00008B] 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>{isVisible ? <CountUp end={20} /> : null}+</div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className="text-2xl text-[#23A3CD] 1.5rem 2rem ">
                      {" "}
                      Countries
                    </p>
                  </div>
                  <div className="mt-4 pt-4 pl-8">
                    <h1 className="text-3xl xl:text-4xl text-[#00008B] 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>{isVisible ? <CountUp end={205} /> : null}+</div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className=" mb-6 text-2xl text-[#23A3CD] 1.5rem 2rem ">
                      Total Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      <SnowfallEffect />
    </div>
  );
}
