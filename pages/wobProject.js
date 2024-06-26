import { Search2Icon } from "@chakra-ui/icons";
import { Spacer } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const Project = () => {

  // Here we get projects data.
  const dummyData = [
    {
      title: "Project Title",
      lastPR: "Last PR merged at : Date, Time",
      openIssues: "Open issues : Number",
      openPRs: "Open PR’s : Number",
      tags: ["tech stack", "tech stack", "tech stack", "tech stack"],
    },
    {
      title: "Project Title",
      lastPR: "Last PR merged at : Date, Time",
      openIssues: "Open issues : Number",
      openPRs: "Open PR’s : Number",
      tags: ["tech stack", "tech stack", "tech stack", "tech stack"],
    },
    {
      title: "Project Title",
      lastPR: "Last PR merged at : Date, Time",
      openIssues: "Open issues : Number",
      openPRs: "Open PR’s : Number",
      tags: ["tech stack", "tech stack", "tech stack", "tech stack"],
    },
    {
      title: "Project Title",
      lastPR: "Last PR merged at : Date, Time",
      openIssues: "Open issues : Number",
      openPRs: "Open PR’s : Number",
      tags: ["tech stack", "tech stack", "tech stack", "tech stack"],
    },
  ];

  return (
    <>
      <Head>
        <title>
          Projects | Winter of Code 2024 | GirlScript Foundation India
        </title>
        <meta name="description" content="Projects of Winter of Code" />
      </Head>
      <section className="min-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-24 w-full">
          <div className="flex flex-col md:flex-row wrap items-center justify-between w-full gap-2">
            <p className="text-primary_orange-0 dark:text-white font-sans text-3xl md:text-5xl text-center font-extrabold flex wrap justify-start flex-col md:flex-row">
              <h1 className="text-[#00008B]">Projects&nbsp;</h1>
            </p>
            <div className="flex border-b-2 items-center">
              <Search2Icon color={"black"} />
              <input
                className="px-3 py-1 bg-transparent outline-none dark:text-white text-black"
                type="search"
                placeholder="Search"
                name="search"
                id="search"
              />
            </div>
          </div>
        </div>
        <Spacer mt={16} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-24">
          {dummyData.map((project, index) => (
            <div
              key={index}
              className="relative w-full max-w-[537px] h-[550px] bg-cover rounded-[50px] bg-center text-white"
              style={{ backgroundImage: "url('/WoB/projects_card.png')" }}
            >
              <div className="absolute inset-0 rounded-[50px] bg-black bg-opacity-5 flex items-center justify-center">
                <div className="p-4 text-left text-[#00008B]">
                  <div className="p-4 mt-10 m-auto h-1/2">
                    <h2 className="text-2xl md:text-4xl my-6 font-bold">{project.title}</h2>
                    <p className="my-5 text-lg md:text-2xl">{project.lastPR}</p>
                    <p className="my-5 text-lg md:text-2xl">{project.openIssues}</p>
                    <p className="my-5 text-lg md:text-2xl">{project.openPRs}</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
                    {project.tags.map((tag, idx) => (
                      <p
                        key={idx}
                        className="w-[100px] h-[40px] text-center pt-[8px] text-white text-sm bg-[#00008B] rounded-tl-full rounded-br-full"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Spacer mt={16} />
      </section>
    </>
  );
};

export default Project;
