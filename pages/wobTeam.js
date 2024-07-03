import React from "react";
import { Spacer } from "@chakra-ui/react";
import Head from "next/head";

const WobTeam = () => {

  // have to update it with actual team members
  const team = [
    {
      Designation: "Content Developer",
      GitHub: "https://github.com",
      Image: "/WoB/teamMember.png",
      LinkedIn: "https://www.linkedin.com",
      Name: "Kavya Jain",
      Twitter: "https://twitter.com",
    },
    {
      Designation: "Content Developer",
      GitHub: "https://github.com",
      Image: "/WoB/teamMember.png",
      LinkedIn: "https://www.linkedin.com",
      Name: "Kavya Jain",
      Twitter: "https://twitter.com",
    },
    {
      Designation: "Content Developer",
      GitHub: "https://github.com",
      Image: "/WoB/teamMember.png",
      LinkedIn: "https://www.linkedin.com",
      Name: "Kavya Jain",
      Twitter: "https://twitter.com",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Team | GirlScript Winter of Blockchain 2024 | GirlScript Foundation India
        </title>
        <meta name="description" content="GirlScript Winter of Blockchain Team" />
        <link
          rel="icon"
          href="/WoB/Favicon.ico"
        />
      </Head>
      <div className="self-stretch flex w-screen flex-col items-center justify-start py-0 px-0 box-border max-w-full text-center text-29xl text-skyblue font-text-4xl-225rem-3rem">
        <div className="flex flex-col items-center justify-start gap-[66px] w-full">
          <div className="w-full flex items-center justify-center gap-[2px]">
            <div className="flex-grow pt-2 flex items-center justify-start">
              <div className="h-0 w-full rounded-md bg-gradient-to-r from-[#00008B] to-[#ADD8E6] p-[2px]" />
            </div>
            <h1 className="m-0 text-4xl sm:text-5xl font-semibold text-transparent bg-gradient-to-r from-[#00008B] to-[#ADD8E6] bg-clip-text">
              Meet the Team
            </h1>
            <div className="flex-grow flex pt-2 items-center justify-end">
              <div className="h-0 w-full rounded-md bg-gradient-to-r from-[#00008B] to-[#ADD8E6] p-[2px]" />
            </div>
          </div>
          <div className="self-stretch flex flex-row text-[#85C6DC] items-start justify-center max-w-full text-2xl sm:text-3xl">
            <h2 className="m-0 font-semibold pl-5">
              <span>Individuals can and do make a difference,</span>
              <br />
              <span>but it takes a team to really mess things up</span>
            </h2>
          </div>
        </div>
      </div>
      <Spacer mt={10} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {team.map((member, index) => (
          <div
            key={index}
            className="relative bg-[#DBF6FF] shadow-xl rounded-xl h-[464px] w-[90%] max-w-[336px] text-center text-black mx-auto"
          >
            <div className="absolute top-[-5%] h-[434px] w-[90%] max-w-[290px] left-[5%] right-[5%] z-[1] flex flex-col items-center justify-center gap-4">
              <img
                className="rounded-xl w-full h-[290px] object-cover"
                src={member.Image}
                alt={member.Name}
              />
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-semibold">{member.Name}</h3>
                <p className="text-base sm:text-lg text-gray-500">{member.Designation}</p>
              </div>
              <div className="flex flex-row gap-3">
                <a
                  href={member.Twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[36px] h-[36px]"
                    src="/WoB/TwitterIcon.png"
                    alt="Twitter"
                  />
                </a>
                <a
                  href={member.GitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[36px] h-[36px]"
                    src="/WoB/GithubIcon.png"
                    alt="GitHub"
                  />
                </a>
                <a
                  href={member.LinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[36px] h-[36px]"
                    src="/WoB/LinkedInIcon.png"
                    alt="LinkedIn"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Spacer mt={20} />
    </>
  );
};

export default WobTeam;
