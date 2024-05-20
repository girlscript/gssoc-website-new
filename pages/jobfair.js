import Head from "next/head";
import React, { useState } from "react";
import DiabloAccordion from "../components/diabloAccordion";
import { accordionData } from "./api/FAQdata";
import Bighex from "../components/BgAssets/Bighex";
import Hex1 from "../components/BgAssets/Hex1";
import Hex2 from "../components/BgAssets/Hex2";
import EllipseBox2 from "../components/BgAssets/EllipseBox2";
import EllipseBox from "../components/BgAssets/EllipseBox";
import SmallHex from "../components/BgAssets/SmallHex";
import SocialFollow from "../components/homepage/SocialFollow";
import Image from "next/image";

function Faq() {
    const [data] = useState(accordionData);
    return (
        <>
            <Head>
                <title>
                    Job Fair | GirlScript Summer of Code 2024 | GirlScript Foundation India
                </title>
                <meta name="description" content="Job Fair of GirlScript Summer of Code" />
            </Head>

            <div className="hidden -z-10 lg:block 3xl:hidden pt-12">
                <div className="absolute bottom-[60rem] right-0">
                    <img
                        src="https://user-images.githubusercontent.com/64256342/152650376-d285b39d-3b06-4c46-afad-c15b90074358.svg"
                        alt="bg"
                    />
                </div>
                {/* <div className="absolute w-full left-0 -top-10 right-0">
                    <Bighex />
                </div>
                <div className="absolute top-0 left-0">
                    <Hex1 />
                </div>
                <div className="absolute top-0 left-0">
                    <Hex2 />
                </div> */}
                <div className="absolute blur-sm top-0 left-48">
                    <EllipseBox2 />
                </div>
                <div className="absolute top-10 -left-20">
                    <EllipseBox />
                </div>
                <div className="blur-md absolute top-0">
                    <SmallHex />
                </div>
            </div>
            <SocialFollow />


            <section className="flex flex-col mb-24 items-center">
                <div className="w-3/4 flex justify-between items-center rounded-2xl flex-wrap mb-24 bg-[#FFECDE] dark:bg-[#1A1A1B]">
                    <div className="dark:bg-black rounded-2xl basis-full p-6 md:basis-6/12 md:order-last lg:basis-1/2 lg:order-last relative">
                        <div className="text-black dark:text-white font-semibold text-4xl 2.25rem 3rem mb-5 font-sans">
                            About <span className="text-primary_orange-0">GirlScript Summer of Code 2024 </span>
                            Job Fair
                        </div>
                        <p className="dark:text-white font-serif text-1xl p-2 text-black-100">
                            At GSSoC 2024 Job Fair, we believe in inclusivity and diversity. That&apos;s why the event is open to all students from different academic backgrounds.
                            Whether you&apos;re a tech nerd, a creative genius, a marketing maven, or a business aficionado, there are opportunities waiting for you.
                            Don&apos;t miss this extraordinary opportunity to kickstart your career in the technology world.

                        </p>
                        <p className="dark:text-white font-serif font-bold text-1xl p-2 text-black-100">
                            Register for the GSSoC 2024 Job Fair and open doors to limitless possibilities.
                        </p>

                        <button className="mt-10">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLScl2zoD7dOYnftAc9csfY4SD72WJbM1c0XMWAq-4Z7X5k45NA/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary_orange-0 text-white font-bold py-2 px-4 rounded-full mt-10"
                            >
                                Register Now
                            </a>
                        </button>
                    </div>

                    <div
                        className="border-8 rounded drop-shadow-xl border-black dark:border-white"
                        data-aos="flip-left"
                        data-aos-duration="700"
                    >
                        <img
                            src="https://github.com/nawed2611/nawed2611/assets/83456083/be3532cf-368b-425e-8c23-1e81243b8ead"
                            width={500}
                            height={500}
                            alt="GirlScript Job Fair Photo"
                        />
                    </div>
                </div>
            </section>

            {/* <section className="flex flex-col items-center mt-24">
                <p className="text-primary_orange-0 dark:text-white font-sans text-3xl md:text-5xl text center font-extrabold flex wrap justify-center flex-col md:flex-row mb-10 underline decoration-orange-500  underline-offset-8">
                    <h1 className="text-primary_orange-0">
                        Welcome to GSSoC&apos;23 Job Fair
                    </h1>
                </p>
            </section> */}
        </>
    );
}

export default Faq;
