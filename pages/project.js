import { Search2Icon } from "@chakra-ui/icons";
import { SimpleGrid, Spacer } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import ProjectModal from "../components/ProjectModal";
import { projectData } from "./api/projectsData";
import SearchTags from "../components/SearchTags";

const Project = () => {
  // const [data, setData] = useState(projectData);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mounted, setMounted] = useState(false);
  const [year, setYear] = useState("24");
  const { theme } = useTheme();

  const getProjects2024 = async () => {
    const response = await fetch(
      "https://opensheet.elk.sh/1JiqHjGyf43NNkou4PBe7WT4KEyueuFJct2p322nNMNw/JSON"
    );
    setData(await response.json());
  };

  const getProjects2022 = async () => {
    const response = await fetch(
      "https://opensheet.elk.sh/1OC5gOWCpUrDXI8HAPEM9iOohoznBfAVF9d-rSMO7FXM/JSON_EndPoint"
    );
    setData(await response.json());
  };

  const getProjects2023 = async () => {
    const response = await fetch(
      "https://opensheet.elk.sh/1v7VqK6i_xJK4nJ6GKzoeafwrnlJR8Y5-8v0Qfsh3gqo/Shortlisted"
    );
    setData(await response.json());
  };

  const getProjects2021 = async () => {
    setData(projectData);
  };

  useEffect(() => {
    setMounted(true);
    getProjects2024();
    setYear("24");
  }, []);

  if (!mounted) return null;
  // const [isOpen, setIsOpen] = React.useState(false)
  // const onClose = () => setIsOpen(false)
  // const cancelRef = React.useRef()

  return (
    <>
      <Head>
        <title>
          Projects | GirlScript Summer of Code 2023 | GirlScript Foundation
          India
        </title>
        <meta
          name="description"
          content="Projects of GirlScript Summer of Code"
        />
        {/* <link
          rel="icon"
          href="https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png"
        /> */}
      </Head>
      <section>
        <div className="flex flex-col md:flex-row justify-between items-center px-24 w-full">
          <div className="flex flex-col md:flex-row wrap items-center justify-between w-full gap-2">
            <p className="text-primary_orange-0 dark:text-white font-sans text-3xl md:text-5xl text center font-extrabold flex wrap justify-start flex-col md:flex-row">
              <h1 className="text-primary_orange-0">Projects&nbsp;</h1>
              <h1>-&nbsp;GSSOC&apos;{year} </h1>
            </p>
            <div className="flex object-right border-b-2 items-center">
              <Search2Icon color={theme === "light" ? "black" : "white"} />
              <input
                className="px-3 py-1 bg-transparent outline-none dark:text-white text-black"
                type="search"
                placeholder="Search projects..."
                name="search"
                id="search"
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
          </div>
        </div>
        <Spacer mt={16} />
        <div className="flex flex-row justify-center flex-wrap items-center gap-5">
          <button
            className="bg-gradient-to-b from-primary_orange-0 to-orange-600 text-lg dark:text-black rounded-b-md hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-10 py-3 rounded md:text-2xl md:py-4"
            onClick={() => {
              getProjects2024();
              setYear("24");
            }}
          >
            2024
          </button>
          <button
            className="bg-gradient-to-b from-primary_orange-0 to-orange-600 text-lg dark:text-black rounded-b-md hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-10 py-3 rounded md:text-2xl md:py-4"
            onClick={() => {
              getProjects2023();
              setYear("23");
            }}
          >
            2023
          </button>
          <button
            className="bg-gradient-to-b from-primary_orange-0 to-orange-600 text-lg dark:text-black rounded-b-md hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-10 py-3 rounded md:text-2xl md:py-4"
            onClick={() => {
              getProjects2022();
              setYear("22");
            }}
          >
            2022
          </button>
          <button
            className="bg-gradient-to-b from-primary_orange-0 to-orange-600 text-lg  dark:text-black rounded-b-md hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-10 py-3 rounded md:text-2xl md:py-4"
            onClick={() => {
              getProjects2021();
              setYear("21");
            }}
          >
            2021
          </button>
        </div>
        {data.length > 1 && (
          <div>
            <Spacer mt={10} mb={10} />
            <SearchTags setSearchTerm={setSearchTerm} />
            <Spacer mt={10} mb={10} />
            <div
              className="flex flex-row justify-center flex-wrap items-center 
        gap-x-10 gap-y-10 mt-9"
            >
              {data
                .sort(() => 0.5 - Math.random())
                .filter((curElem, i) => {
                  if (searchTerm == "") return curElem;
                  if (
                    curElem.technology_used
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    curElem.project_name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  )
                    return curElem;
                })
                .map((curElem, i) => {
                  return (
                    <div
                      className="flex items-center justify-between w-80"
                      key={i}
                      data-aos="flip-up"
                      data-aos-duration="800"
                    >
                      <div className="shadow dark:bg-black rounded-lg">
                        <div
                          className="overflow-y-clip rounded-lg h-fit md:h-80 
                    w-80 flex flex-col justify-start 
                    shadow-lg shadow-black-200 relative"
                        >
                          <>
                            <div className="flex flex-col justify-start gap-2 px-5 py-3">
                              <div className="font-bold text-primary_orange-0 md:text-xl">
                                <a
                                  target="_blank"
                                  rel="noreferrer"
                                  href={
                                    curElem.project_link ||
                                    curElem.github ||
                                    "https://github.com/" +
                                      curElem.repo_fullname
                                  }
                                >
                                  {i + 1}. {curElem.project_name}
                                </a>
                              </div>
                              <div className="mb-3 text-sm dark:text-white md:text-md md:mb-4">
                                By {curElem.owner_name}
                              </div>
                            </div>
                            <SimpleGrid
                              columns={{ sm: 2, md: 3 }}
                              spacing={2}
                              margin={1}
                              className="px-2"
                            >
                              {curElem.technology_used
                                .split(",")
                                .sort((a, b) => a.length - b.length)
                                .map((techStk, k) => {
                                  return (
                                    <button
                                      className="bg-orange-50 dark:hover:bg-slate-700 dark:bg-stone-800 rounded-2xl w-full py-1
                                      text-orange-600 drop-shadow-md font-semibold"
                                      key={k}
                                      onClick={() => {
                                        setSearchTerm(techStk.trim());
                                      }}
                                    >
                                      {techStk.trim()}
                                    </button>
                                  );
                                })}
                            </SimpleGrid>
                          </>
                          <br />
                          <br />
                          <ProjectModal currProject={curElem} />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
        <br />
        <br />
      </section>
    </>
  );
};

export default Project;
