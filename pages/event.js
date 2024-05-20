/* 
IMPORTANT NOTE FOR DEVELOPERS WORKING ON THIS PAGE ⚠
======================================================================================

THIS PAGE USES REACT-CHRONO TO RENDER TIMELINES
https://github.com/prabhuignoto/react-chrono

ALL THE DATA RENDERED IN THIS FILE ARE FETCCHED FROM "./api/event_data" FILE.

NOTE:
======================================================================================
THE DATE MUST HAVE THE KEY VALUE OF "title", TO REDNER IT AS A SEPERATE COMPONENT, AND ITS MANDATORY.

THEMING THE CHRONO-COMPONENT WILL TAKE EFFECT IN BOTH THE DARK AND LIGHT MODES OF NEXT-THEME.

TAILWIND DARK CLASSES WILL ONLY TAKE EFFECT INSIDE THE ACTUAL CHRONO-COMPONENT, SO IT'S NOT POSSIBLE TO CHANGE THE CHRONO-COMPONENT BASE COLORS WITH TAILWINDCSS.

I'VE USED NEUTRAL COLOR THEMES FOR BASE CHRONO COMPONENT, SO THAT IT DOESN'T ODD OUT ON BOTH DARK AND LIGHT THEMES.
*/

import { useTheme } from "next-themes";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Chrono } from "react-chrono";

import Eventdata from "./api/event_data";

const Event = () => {
  const [Event] = useState(Eventdata);
  // theme check
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
    <div className="wrapper">
      <Head>
        <title>
          Events | GirlScript Summer of Code 2024 | GirlScript Foundation India
        </title>
        <meta
          name="description"
          content="GirlScript Summer of Code Certificates"
        />
      </Head>
      <p className="text-primary_orange-0 dark:text-white font-sans text-3xl md:text-5xl text center font-extrabold flex wrap justify-center flex-col md:flex-row mb-10 underline decoration-orange-500  underline-offset-8">
        <h1 className="text-primary_orange-0">Events in&nbsp;</h1>
        <h1>GSSoC&apos;24 </h1>
      </p>
      <div className=" hidden md:block w-full">
        {theme === "dark" ? (
          <Chrono
            items={Eventdata}
            theme={{
              primary: "#f67621",
              secondary: "#f67621",
              cardBgColor: "#474747",
              cardForeColor: "white",
              titleColor: "white",
            }}
            hideControls="true"
            // cardHeight={250}
            mode="VERTICAL_ALTERNATING"
            cardHeight={350}
            // scrollable={{ scrollbar: false }}
          >
            <div className="chrono-icons">
              <img
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              <img
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              <img
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              <img
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              <img
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              <img
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              <img
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              {/* <img
              src="https://img.icons8.com/ios-filled/50/000000/mailbox-closed-flag-down.png"
              alt="mail-box"
            />
            <img
              src="https://img.icons8.com/ios-filled/50/000000/pinterest.png"
              alt="pinterest"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/reddit.png"
              alt="reddit"
            /> */}
            </div>
            {Event.map((curEvent, i) => {
              return (
                <div className="wrapper font-sans" key={i}>
                  {curEvent.fmt === "video" ? (
                    <iframe
                      width="600"
                      height="350"
                      src={curEvent.poster}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img
                      width="600"
                      height="350"
                      src={curEvent.poster}
                      alt="poster"
                    />
                  )}
                  <br />
                  <figcaption className="text-white text-2xl font-bold font-sans">
                    {curEvent.maintitle}
                  </figcaption>
                  <div>
                    <p className="text-white text-md">{curEvent.info}</p>
                  </div>
                  <div>
                    <a
                      className="text-orange-400 text-lg font-semibold hover:text-white"
                      href={curEvent.rec_link}
                    >
                      Link here »
                    </a>
                  </div>
                </div>
              );
            })}
          </Chrono>
        ) : (
          <Chrono
            items={Eventdata}
            theme={{
              primary: "#f67621",
              secondary: "#f67621",
              cardBgColor: "#f67621",
              cardForeColor: "white",
              titleColor: "white",
            }}
            hideControls="true"
            // cardHeight={250}
            mode="VERTICAL_ALTERNATING"
            cardHeight={350}
            // scrollable={{ scrollbar: false }}
          >
            <div className="chrono-icons">
              <img
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              <img
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              <img
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              <img
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              <img
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              {/* <img
              src="https://img.icons8.com/ios-filled/50/000000/mailbox-closed-flag-down.png"
              alt="mail-box"
            />
            <img
              src="https://img.icons8.com/ios-filled/50/000000/pinterest.png"
              alt="pinterest"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/reddit.png"
              alt="reddit"
            /> */}
            </div>
            {Event.map((curEvent, i) => {
              return (
                <div className="wrapper font-sans" key={i}>
                  {curEvent.fmt === "video" ? (
                    <iframe
                      width="600"
                      height="350"
                      src={curEvent.poster}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img
                      width="600"
                      height="350"
                      src={curEvent.poster}
                      alt="poster"
                    />
                  )}
                  <br />
                  <figcaption className="text-2xl font-semibold">
                    {curEvent.maintitle}
                  </figcaption>
                  <div>
                    <p className="text-white text-md font-semibold">
                      {curEvent.info}
                    </p>
                  </div>
                  <div>
                    <a
                      className="text-black text-lg font-semibold hover:text-white"
                      href={curEvent.rec_link}
                    >
                      Link here »
                    </a>
                  </div>
                </div>
              );
            })}
          </Chrono>
        )}
      </div>
      {/* ................................................................................... */}
      {/* For Mobile Devices */}
      {/* ................................................................................... */}
      <div className="md:hidden w-full">
        {theme === "dark" ? (
          <Chrono
            items={Eventdata}
            theme={{
              primary: "#f67621",
              secondary: "#f67621",
              cardBgColor: "#474747",
              cardForeColor: "white",
              titleColor: "white",
            }}
            hideControls="true"
            // cardHeight={250}
            mode="VERTICAL"
            cardHeight={350}
            // cardWidth={350}
            // scrollable={{ scrollbar: false }}
          >
            <div className="chrono-icons">
              <img
                className="p-[2px]"
                src="https://img.icons8.com/android/344/twitter.png"
                alt="twitter"
              />
              <img
                className="p-[2px]"
                src="https://img.icons8.com/android/344/twitter.png"
                alt="twitter"
              />
              <img
                className="p-[1px]"
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              <img
                className="p-[1px]"
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              <img
                className="p-[1px]"
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              {/* <img
              src="https://img.icons8.com/ios-filled/50/000000/mailbox-closed-flag-down.png"
              alt="mail-box"
            />
            <img
              src="https://img.icons8.com/ios-filled/50/000000/pinterest.png"
              alt="pinterest"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/reddit.png"
              alt="reddit"
            /> */}
            </div>
            {Event.map((curEvent, i) => {
              return (
                <div className="wrapper font-sans w-full" key={i}>
                  {curEvent.fmt === "video" ? (
                    <iframe
                      className="h-auto w-52 px-0"
                      // width="320"
                      // height="180"
                      src={curEvent.poster}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img
                      width="600"
                      height="350"
                      src={curEvent.poster}
                      alt="poster"
                    />
                  )}
                  <br />
                  <figcaption className="text-white text-2xl font-bold font-sans">
                    {curEvent.maintitle}
                  </figcaption>
                  <div>
                    <p className="text-white text-md">{curEvent.info}</p>
                  </div>
                  <div>
                    <a
                      className="text-orange-400 text-lg font-semibold hover:text-white"
                      href={curEvent.rec_link}
                    >
                      Link here »
                    </a>
                  </div>
                </div>
              );
            })}
          </Chrono>
        ) : (
          <Chrono
            items={Eventdata}
            theme={{
              primary: "#f67621",
              secondary: "#f67621",
              cardBgColor: "#f67621",
              cardForeColor: "white",
              titleColor: "white",
            }}
            hideControls="true"
            // cardHeight={250}
            mode="VERTICAL"
            cardHeight={350}
            // scrollable={{ scrollbar: false }}
          >
            <div className="chrono-icons">
              <img
                className="p-[2px]"
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              <img
                className="p-[2px]"
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              <img
                className="p-[2px]"
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              <img
                className="p-[2px]"
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              <img
                className="p-[2px]"
                src="https://img.icons8.com/material/344/start.png"
                alt="YouTube"
              />
              {/* <img
              src="https://img.icons8.com/ios-filled/50/000000/mailbox-closed-flag-down.png"
              alt="mail-box"
            />
            <img
              src="https://img.icons8.com/ios-filled/50/000000/pinterest.png"
              alt="pinterest"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/reddit.png"
              alt="reddit"
            /> */}
            </div>
            {Event.map((curEvent, i) => {
              return (
                <div className="wrapper font-sans w-full" key={i}>
                  {curEvent.fmt === "video" ? (
                    <iframe
                      className="h-auto w-52 px-0"
                      // width="600"
                      // height="350"
                      src={curEvent.poster}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img
                      width="600"
                      height="350"
                      src={curEvent.poster}
                      alt="poster"
                    />
                  )}
                  <br />
                  <figcaption className="text-2xl font-semibold">
                    {curEvent.maintitle}
                  </figcaption>
                  <div>
                    <p className="text-white text-md font-semibold">
                      {curEvent.info}
                    </p>
                  </div>
                  <div>
                    <a
                      className="text-black text-lg font-semibold hover:text-white"
                      href={curEvent.rec_link}
                    >
                      Link here »
                    </a>
                  </div>
                </div>
              );
            })}
          </Chrono>
        )}
      </div>
    </div>
  );
};

export default Event;
