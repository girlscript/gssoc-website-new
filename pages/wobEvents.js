import { SearchIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Head from "next/head";
import React from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { Spacer } from "@chakra-ui/react";

const WobEvents = () => {
  const events = [
    {
      name: "Open Source Guidance Session📢🚀",
      description: `📣 Join us for a game-changing session on Open Source 🌐 with Winter of Blockchain featuring our esteemed speaker, Nandini Singh! 🤩⚡ 
Nandini is an Android developer, open-source enthusiast, and the Program Manager for Winter of Blockchain. She will share her insights and expertise on the fascinating world of open source.`,
      image: "https://www.youtube.com/embed/V53unQsIISk?si=bfRuT1pmtLkNIC_l",
      logo: "/WoB/gsf_ytlogo.jpg",
      views: "live",
      time: "• Jun 30 2024",
    },
  ];

  return (
    <>
      <Head>
        <title>WOB 2024 Events | GirlScript Winter of Blockchain</title>
        <meta
          name="description"
          content="Browse the latest events at WOB 2024, hosted by GirlScript Foundation."
        />
        <link rel="icon" href="/WoB/Favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center max-w-[1232px] h-[800px] md:h-[600px] lg:h-[700px] xl:h-[800px] mt-8 mx-auto rounded-[28px]"
        style={{ backgroundImage: "url('/WoB/events_bg.png')" }}
      >
        <Spacer m="20" />
        <div className="absolute inset-0 bg-[#739aa7] bg-opacity-5 rounded-[28px] flex flex-col justify-center items-center text-center">
          <h1 className="text-[#56AAC5] text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            WOB 2024
          </h1>
          <h2 className="text-[#85C6DC] text-4xl md:text-5xl lg:text-6xl font-semibold mb-8">
            Latest Event Name
          </h2>
          <p className="text-white max-w-[917px] px-6 md:px-20 lg:px-24 text-lg md:text-xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            gravida nunc non ex facilisis, vel eleifend justo tempor.
          </p>
          <h2 className="text-[#B9EEFF] text-lg md:text-xl lg:text-3xl font-normal mb-8">
            TIME REMAINING
          </h2>
          <div className="flex justify-center">
            <FlipClockCountdown
              to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
              className="flip-clock"
            />
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="flex justify-end px-4 md:px-24 py-6 md:py-10">
        <div className="flex items-center h-[61px] rounded-[16px] bg-[#DBF6FF] text-[#85C6DC] w-[260px] md:w-[360px] p-2">
          <SearchIcon className="text-[#85C6DC] bg-[#DBF6FF] w-6 h-6 mr-2" />
          <input
            type="text"
            placeholder="Search Events"
            className="w-full p-2 text-white bg-[#DBF6FF] placeholder-[#85C6DC] outline-none"
          />
          <ChevronRightIcon className="text-[#85C6DC] bg-[#DBF6FF] w-6 h-6 ml-2" />
        </div>
      </div>

      {/* Past Events Section */}
      <div className="container mx-auto px-4 md:px-0 py-8">
        <h2 className="text-4xl md:text-6xl font-medium text-[#00008B] mb-6 md:mb-10 text-center md:text-left">
          Past Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-[#E6F6FF] rounded-lg max-w-[325px] m-auto overflow-hidden shadow-lg"
            >
              <iframe
                className="w-full h-80"
                src={event.image}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <div className="p-4">
                <div className="flex mb-2">
                  <img
                    src={event.logo}
                    alt="Logo"
                    className="w-10 h-10 mr-4 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold overflow-hidden">
                      {event.name.slice(0, 30)}...
                    </h3>
                    <div className="h-20 w-full overflow-hidden mt-2">
                      <p className="text-[#606060]">{event.description.slice(0,90)}...</p>
                    </div>
                    <div className="flex items-center text-[#606060] mt-2">
                      <p className="ml-2 mr-1">{event.views}</p>
                      <p>{event.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WobEvents;
