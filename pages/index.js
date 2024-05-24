import Aos from "aos";
import { useTheme } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import Tilt from "react-parallax-tilt";
import VisibilitySensor from "react-visibility-sensor";

import Bighex from "../components/BgAssets/Bighex";
import EllipseBox from "../components/BgAssets/EllipseBox";
import EllipseBox2 from "../components/BgAssets/EllipseBox2";
import Hex1 from "../components/BgAssets/Hex1";
import Hex2 from "../components/BgAssets/Hex2";
import Map from "../components/BgAssets/Map";
import SmallHex from "../components/BgAssets/SmallHex";
import Card from "../components/homepage/Card";
import Slider from "../components/homepage/Slider";
import SocialFollow from "../components/homepage/SocialFollow";
import ThemeChanger from "../components/Toggler";
import Image from '../public/GSSoC_Schedule_Light_Mode.png'

export default function Home() {
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
        <meta property="og:image" content="https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="gssoc.girlscript.tech" />
        <meta property="twitter:url" content="https://gssoc.girlscript.tech/" />
        <meta name="twitter:title" content="GirlScript Summer of Code'24" />
        <meta name="twitter:description" content="GSSoC'24 is here!" />
        <meta name="twitter:image" content="https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png" />


      </Head>
      {/* Bg assets */}
      <div className="hidden lg:block 3xl:hidden">
        <div className="absolute bottom-[60rem] right-0">
          <img
            src="https://user-images.githubusercontent.com/64256342/152650376-d285b39d-3b06-4c46-afad-c15b90074358.svg"
            alt="bg"
          />
        </div>
        <div className="absolute w-full left-0 -top-10 right-0">
          <Bighex />
        </div>
        <div className="absolute top-0 left-0">
          <Hex1 />
        </div>
        <div className="absolute top-0 left-0">
          <Hex2 />
        </div>
        <div className="absolute top-0 left-48">
          <EllipseBox2 />
        </div>
        <div className="absolute top-10 -left-20">
          <EllipseBox />
        </div>
        <div className="absolute top-0">
          <SmallHex />
        </div>
      </div>
      <SocialFollow />
      <div className="absolute object-right text-xs text-right right-1 dark:bg-primary_orange-0 px-2 animate-pulse py-2 rounded-full opacity-80 bg-black top-20 lg:hidden">
        <ThemeChanger />
      </div>
      <div className="container transition-colors mx-auto mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-12 lg:px-40 2xl:px-50 dark:bg-darkmode_gray-0 dark:transition-colors ">
        <div className="first-section mb-10 flex flex-col md:flex-row">
          <div className="basis-1/2 relative">
            <div className="text-black dark:text-white text-6xl font-sans font-semibold 2.25rem 3rem mb-10">
              <span className="text-primary_orange-0">GSSoC </span>
              2024
              <div className="mt-2">is here!</div>
            </div>

            <div className="font-serif font-medium text-2xl 1.5rem 2rem text-gray-800 dark:text-white">
              GirlScript Summer of Code is a 3-month long
              <br />
              <span className="text-primary_orange-0">#OpenSource &nbsp;</span>
              program by GirlScript Foundation.
              <br />
              <b> 10th May - 10th August 2024 </b>
            </div>
{/* 
            <div className="ring mb-4 ring-primary_orange-0 text-white ring-offset-4 ring-offset-white dark:ring-offset-darkmode_gray-0 rounded-2xl w-full h-20 flex items-center justify-center drop-shadow-2xl">
              <h2 className="font-serif text-center font-medium text-2xl 1.5rem 2rem text-black dark:text-white"><b>GSSoC&apos;24 Job Fair</b> is coming soon!</h2>
            </div> */}
            <div className="flex items-center mt-2 mb-10 md:mb-52 lg:mb-56">
              <a className="" href="https://docs.google.com/forms/d/e/1FAIpQLScl2zoD7dOYnftAc9csfY4SD72WJbM1c0XMWAq-4Z7X5k45NA/viewform">
                <button
                  id="CTA-button"
                  data-aos="fade-down"
                  className=" bg-gradient-to-b from-primary_orange-0 to-orange-600 text-md text-white font-semibold px-4 py-4 rounded-2xl md:text-2xl md:py-2 hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600"
                >
                  Register Here
                </button>
              </a>
              <a data-aos="fade-down" href="#about-gssoc">
                <div className="font-serif font-medium text-md text-primary_orange-0 ml-9 md:text-2xl">
                  Learn More
                </div>
              </a>
            </div>
          </div>

          <div data-aos="fade-down" className="hero__image hidden lg:block">
            <Tilt
              className="Tilt"
              options={{ max: 25 }}
              style={{ height: 600, width: 600 }}
            >
              <div className="img__container">{
                theme === 'light' ?
                  <img
                    src={"./Hero_Image_Lite_Theme.svg"}
                    alt="hero-image"
                  /> :
                  <img
                    src={"./Hero_Image_Dark_Theme.svg"}
                    alt="hero-image"
                  />}
              </div>
            </Tilt>
          </div>
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
              About <span className="text-primary_orange-0">GirlScript </span>
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
          className="flex flex-row justify-between items-center bg-[#FFECDE] dark:bg-black flex-wrap rounded-xl mb-24"
          id="about-gssoc"
        >
          <div className="px-4 pt-3 lg:text-right rounded-xl md:w-1/2 lg:my-4 lg:px-10 lg:py-10 lg:w-1/2">
            {theme === "light" ? (
              <img
                id="Learn_more"
                className="mb-10"
                src="https://github.com/girlscript/gssoc-assets/blob/main/Logos/GS_logo_Black.png?raw=true"
                alt="Learn More light"
              />
            ) : (
              <img
                id="Learn_more"
                className="mb-10"
                src="https://github.com/girlscript/gssoc-assets/blob/main/Logos/GS_logo_White.png?raw=true"
                alt="Learn More dark"
              />
            )}
            <div className="text-primary_orange-0 text-left font-semibold font-sans text-4xl 2.25rem 3rem mb-10 lg:w-[570px]">
              <h1 className="dark:text-white text-black text-4xl 2.25rem 3rem">
                About
                <br />
                GirlScript{" "}
              </h1>
              Summer of Code
            </div>
            <p className="dark:text-white font-serif text-left text-xl">
              GirlScript Summer Of Code is a three-month-long Open-Source
              Program conducted every summer by the Girlscript Foundation. With
              constant efforts, participants contribute to numerous projects
              under the extreme guidance of skilled mentors over these months.
              With such exposure, students begin to contribute to real-world
              projects from the comfort of their homes. GirlScript Summer Of
              Code has witnessed active participation over the years, and the
              2024 edition aims to carry the legacy with a promising impact.
            </p>
          </div>

          <div className="pr-4 font-semibold pt-3 rounded-lg lg:my-4 lg:px-2 lg:py-10 ">
            <div className="dark:bg-black  dark:transition-colors bg-stone-50 shadow-lg rounded-lg my-1 px-1 w-64 sm:w-fit">
              <h1 className="mt-8 pt-6 pl-8 text-3xl xl:text-4xl text-primary_orange-0 3rem 3rem ">
                GSSoC 2024
              </h1>
              <div className="pl-8 text-2xl text-primary_orange-0 1.5rem 2rem ">
                {" "}
                by the numbers
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-2 mb-4">
                <div className="statscol">
                  <div className="mt-4 pt-4 pl-8">
                    <h1 className="text-3xl xl:text-4xl text-primary_orange-0 3rem 3rem ">
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
                    <p className="text-2xl text-primary_orange-0 1.5rem 2rem ">
                      {" "}
                      Registrations
                    </p>
                  </div>
                  <div className="mt-4 pt-4 pl-8">
                    <h1 className="text-3xl xl:text-4xl text-primary_orange-0 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>{isVisible ? <CountUp end={200} /> : null}+</div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className="text-2xl text-primary_orange-0 1.5rem 2rem ">
                      {" "}
                      Institutes
                    </p>
                  </div>
                  <div className="mt-4 pt-4 pl-8">
                    <h1 className="text-3xl xl:text-4xl text-primary_orange-0 3rem 3rem ">
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
                    <p className=" mb-6 text-2xl text-primary_orange-0 1.5rem 2rem ">
                      Total PRs
                    </p>
                  </div>
                </div>

                <div className="statscol">
                  <div className="mt-4 pt-4 pl-8 pr-4">
                    <h1 className="text-3xl xl:text-4xl text-primary_orange-0 3rem 3rem ">
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
                    <p className="text-2xl text-primary_orange-0 1.5rem 2rem ">
                      {" "}
                      Participants
                    </p>
                  </div>
                  <div className="mt-4 pt-4 pl-8">
                    <h1 className="text-3xl xl:text-4xl text-primary_orange-0 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>{isVisible ? <CountUp end={20} /> : null}+</div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className="text-2xl text-primary_orange-0 1.5rem 2rem ">
                      {" "}
                      Countries
                    </p>
                  </div>
                  <div className="mt-4 pt-4 pl-8">
                    <h1 className="text-3xl xl:text-4xl text-primary_orange-0 3rem 3rem ">
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 0 }}
                      >
                        {({ isVisible }) => (
                          <div>{isVisible ? <CountUp end={205} /> : null}+</div>
                        )}
                      </VisibilitySensor>
                    </h1>
                    <p className=" mb-6 text-2xl text-primary_orange-0 1.5rem 2rem ">
                      Total Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="organisation">
          <div className="hidden lg:block 3xl:hidden">
            <div className="absolute left-0 top-[130rem]">
              <Map />
            </div>
          </div>

          {/* <p className="font-sans font-semibold dark:text-white text-center text-gray-800 text-4xl 2.25rem 3rem mb-8">
          Some of the previous <br />
          <span className="text-primary_orange-0 text-4xl 2.25rem 3rem">
            participating organisations
          </span>
        </p> */}
          <div className="org__box flex flex-row items-center justify-center flex-wrap">
            {/* <img
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-20 h-auto mr-12 mb-10 md:mb-0"
              src="https://github.com/girlscript/gssoc-assets/blob/main/Participating_projects/logo1.png?raw=true"
              alt="logo"
            />
             <img
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-20 h-auto mr-12 mb-10 md:mb-0"
              src="https://github.com/girlscript/gssoc-assets/blob/main/Participating_projects/logo2.png?raw=true"
              alt="logo"
            />
            <img
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-20 h-auto mr-12"
              src="https://github.com/girlscript/gssoc-assets/blob/main/Participating_projects/logo3.png?raw=true"
              alt="logo"
            />
            <img
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-20 h-auto mr-12"
              src="https://github.com/girlscript/gssoc-assets/blob/main/Participating_projects/logo4.png?raw=true"
              alt="logo"
            /> */}
          </div>
        </div>

        {/* sponsors */}
        <div className="flex flex-row justify-center px-3 mb-20" id="Sponsors">
          <div className="sponsors__wrapper flex flex-col">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="400"
              className="dark:bg-orange-100 bg-white other__sponsors px-9 py-9 shadow-xl rounded flex flex-col justify-center items-center"
            >
              {/* <h3 className=" dark:text-gray-800 text-[#ff7a19] font-sans font-semibold text-4xl  mb-5 place-content-center">
                Platinum Sponsors
              </h3> */}

              {/* <h3 className=" dark:text-gray-800 text-[#ff7a19] font-sans font-semibold text-3xl  mb-10 place-content-center mt-5">
                In Kind Sponsors
              </h3> */}
              {/* <div className="flex flex-col sm:flex-row flex-wrap gap-x-20 gap-y-4 md:gap-y-8 justify-evenly items-center mb-5">
                <a href="https://www.taskade.com/#gssoc22">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="h-16"
                    src="./Sponsors/Taskade.png"
                    alt="Taskade"
                  />
                </a>

                <a href="https://vercel.com">
                  <svg aria-label="Vercel logotype" height="64" role="img" viewBox="0 0 283 64" width="283"><path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="black"></path></svg>
                </a>

                <a href="https://gen.xyz/#gssoc23">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="h-16"
                    src="./Sponsors/dotXYZ.png"
                    alt=".XYZ"
                  />
                </a>
              </div> */}

              {/* <h3 className=" dark:text-gray-800 text-[#ff7a19] font-sans font-semibold text-3xl  mb-5 place-content-center mt-5">
                Hiring Partner
              </h3> */}
              {/* <div className="flex flex-col sm:flex-row flex-wrap gap-x-28 justify-between items-center mb-5">
                <a href="https://www.bluelearn.in/#gssoc22">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="h-12"
                    src="./Sponsors/BlueLearn.png"
                    alt="Bluelearn"
                  />
                </a>
              </div> */}

              <h3 className=" dark:text-gray-800 text-[#ff7a19] font-sans font-bold text-4xl  mb-12 place-content-center">
                Previous Year Sponsors
              </h3>
              {/* <div className="flex flex-col sm:flex-row flex-wrap gap-x-28 justify-between items-center mb-5">
                <a href="https://moralis.io/#gssoc22">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="h-20"
                    src="./Sponsors/Moralis.png"
                    alt="Moralis"
                  />
                </a>
                <a href="https://filecoin.io/#gssoc22">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="h-20"
                    src="./Sponsors/FileCoin.png"
                    alt="Filecoin"
                  />
                </a>
              </div> */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-x-28 justify-between items-center mb-5">
                <a href="https://quine.sh/?utm_source=gssocc">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="h-20"
                    src="https://quine.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F156089b0-a252-474d-9a70-3ca3d1700807%2FProperty_1Variant4.svg?table=block&id=976f5669-d89e-449f-9d80-7aa14df8229c&spaceId=a8bb25df-0bb7-49ae-b3bb-6496fd5b7326&userId=&cache=v2"
                    alt="Quine"
                  />
                </a>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-x-20 gap-y-4 md:gap-y-8 justify-evenly items-center mb-5">
                <a href="https://www.taskade.com/#gssoc22">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="h-16"
                    src="./Sponsors/Taskade.png"
                    alt="Taskade"
                  />
                </a>

                <a href="https://vercel.com">
                  <svg aria-label="Vercel logotype" height="64" role="img" viewBox="0 0 283 64" width="283"><path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="black"></path></svg>
                </a>

                <a href="https://gen.xyz/#gssoc23">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="h-16"
                    src="./Sponsors/dotXYZ.png"
                    alt=".XYZ"
                  />
                </a>
              </div>

              
              <h3 className=" dark:text-gray-800 text-[#ff7a19] font-sans font-semibold text-3xl  mb-5 place-content-center">
                Hiring Partners
              </h3>
              {/* <div className="flex flex-col sm:flex-row flex-wrap gap-x-28 justify-between items-center mb-5">
                <a href="https://mentro.tech/#gssoc22">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="h-24"
                    src="./Sponsors/Mentro.png"
                    alt="Mentro"
                  />
                </a>
                <a href="https://www.priceline.com/#gssoc22">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="h-16"
                    src="./Sponsors/Priceline.png"
                    alt="Priceline"
                  />
                </a>
              </div> */}

              <div className="flex flex-col sm:flex-row flex-wrap gap-x-28 justify-between items-center mb-5">
                <a href="https://www.bluelearn.in/#gssoc22">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="h-12"
                    src="./Sponsors/BlueLearn.png"
                    alt="Bluelearn"
                  />
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="mb-20">
          <Slider />
        </div>

        <div className="be-part-of">
          <p className="font-sans font-semibold text-center dark:text-white text-gray-800 text-4xl 2.25rem 3rem ">
            <span className="text-primary_orange-0 text-4xl 2.25rem 3rem">
              Be a part of{" "}
            </span>
            GSSoC 2024
          </p>
          <div
            data-aos="flip-left"
            data-aos-duration="1500"
            className="container my-12 mx-auto"
          >
            <div
              className="flex flex-wrap justify-between md:justify-around -mx-1 lg:-mx-4 md:justify-items-stretch"
              id="card-1"
            >
              {/* Card-1 */}
              <Card
                disabled
                title="Start your Journey"
                content="Participating in GSSoC’24 is an opportunity to upgrade your Github profile. Enrich yourselves to learn, explore, improve, enhance, build connections and become a team player to nourish your skills and personality. Don’t miss a chance to get well-versed with Open-Source and essential tools like Git and Github under the supervision of excellent mentors."
                btntext="Apply as a Contributor"
                link="https://swiy.co/contributors"

              />
              {/* Card-2 */}
              <Card
                disabled
                title="Lead the Pack"
                content="Mentors are the experts and take the lead of the open-source project team. They guide the fellow participants at each stage in a road map of the project. They are the backbone of team and are available throughout the summer to review the pull requests and suggest betterment. Apply to be a mentor at Girlscript summer of code and be the foundation of your team."
                btntext="Apply as a mentor"
                link="https://bit.ly/gssoc-mentor"
              />
            </div>
          </div>
          <div
            data-aos="flip-right"
            data-aos-duration="1500"
            className="container my-12 mx-auto "
          >
            <div className="flex flex-wrap justify-between md:justify-around -mx-1 lg:-mx-4">
              {/* Card-3 */}
              <Card
                disabled
                title="Inviting Projects &amp; NGOs"
                content="If you are an organization with a project idea in mind, a website or an app then this is the golden opportunity to become a part of an awesome community. The budding developers under the guidance of expert mentors will work on your projects and strive to achieve the best version. Apply and let’s collaborate together because Together Everyone Achieves More."
                btntext="Apply as an Organization/Project Admin"
                link="https://bit.ly/GSSoC24-Projects" 
              />
              {/* Card-4 */}
              <Card
                title="Add a Shade to GSSOC"
                content="Sponsors with their precious resources make it possible for GirlScript to conduct the entire event smoothly, to encourage talent by enabling us to give perks to our top participants. Hence as a token of gratitude, we provide great publicity on our social platforms and exposure on media about our sponsors. Sponsor us to add a bright shade to our program."
                btntext="Sponsor Us"
                link="https://forms.gle/n16MGBJTvbMcCjCc9"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="schedule__container flex flex-col items-center  mb-20  mx-5 md:mx-20  "> 
        <div className="schedule__overview  relative">
          <p className="font-sans font-semibold text-3xl ml-5 mb-4 dark:text-white">
            <span className="text-primary_orange-0">Schedule</span> of GSSoC
            2024!
          </p>
          {theme === "light" ? (
            <img
              id="Learn_more"
              src="/GSSoC_Schedule_Light_Mode-2024.png"
            />
          ) : (
            <img
              id="Learn_more"       
              src="/GSSoC_Schedule_Dark_Mode-2024.png"
            />
          )}
        </div>
      </div>
    </div>
  );
}
