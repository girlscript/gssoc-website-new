import { Search2Icon } from "@chakra-ui/icons";
import { Spacer } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import Head from "next/head";
import React, {useEffect, useState } from "react";
import SearchTags from "../components/SearchTags";
import axios from "axios";
import { FaGithub } from "react-icons/fa";
import {
  FaCodePullRequest,
  FaCodeCommit,
  FaClockRotateLeft,
} from "react-icons/fa6";
import { GoIssueOpened } from "react-icons/go";
import timesago from "timesago";
import _ from "lodash";

const projectLinks = {
  2024: "https://gssoc-leaderboard.vercel.app/api/projects",
  2023: "https://opensheet.elk.sh/1v7VqK6i_xJK4nJ6GKzoeafwrnlJR8Y5-8v0Qfsh3gqo/Shortlisted",
  2022: "https://opensheet.elk.sh/1OC5gOWCpUrDXI8HAPEM9iOohoznBfAVF9d-rSMO7FXM/JSON_EndPoint",
};

const Project = () => {
  const [tag, setTag] = useState(null);
  const [year, setYear] = useState(2024);
  const [projects, setProjects] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const { theme } = useTheme();

  useEffect(() => {
    axios
      .get(projectLinks[year])
      .then((res) => setProjects(res.data?.projects ?? res.data));
  }, [year]);

  return (
    <>
      <Head>
        <title>
          Projects | GirlScript Summer of Code 2024 | GirlScript Foundation
          India
        </title>
        <meta
          name="description"
          content="Projects of GirlScript Summer of Code"
        />
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
          {Object.keys(projectLinks)
            .reverse()
            .map((year) => (
              <button
                key={year}
                className="bg-gradient-to-b from-primary_orange-0 to-orange-600 text-lg dark:text-black rounded-b-md hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-10 py-3 rounded md:text-2xl md:py-4"
                onClick={() => setYear(year)}
              >
                {year}
              </button>
            ))}
        </div>

        <div className="mt-6">
          <SearchTags setSearchTerm={setSearchTerm} />
        </div>

        <div className="mx-auto text-black dark:text-white mt-12 grid w-full gap-8 lg:gap-12 md:max-w-screen-2xl md:grid-cols-3 lg:grid-cols-4">
          {projects
            ?.filter((project) => {
              if (searchTerm === "") return project;
              if (
                project.project_name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                project.technology_used
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return project;
              }
            })
            .map((project) => (
              <div
                key={project.id}
                className="relative flex flex-col overflow-hidden rounded-lg border bg-neutral-50 border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900/60 p-3 shadow-lg dark:shadow-black/70 md:p-4"
              >
                <h3 className="truncate font-semibold text-orange-500 md:text-lg">
                  {project.project_name}
                </h3>
                <p className="truncate text-sm md:text-base ">
                  by{" "}
                  <a
                    target="_blank"
                    className="text-cyan-500 hover:underline"
                    href={project["GitHub Profile URL"]}
                  >
                    {project.owner_name}
                  </a>{" "}
                </p>

                {project?.stats && (
                  <p className="mt-2 flex gap-x-3 font-bold text-white">
                    <span className="flex items-center gap-1  rounded-md bg-green-600 px-2.5 py-1 text-xs">
                      <GoIssueOpened /> {project?.stats?.openPullRequests}
                    </span>

                    <span className="flex items-center gap-1 rounded-md bg-purple-600 px-2.5 py-1 text-xs">
                      <FaCodePullRequest /> {project?.stats?.openPullRequests}
                    </span>

                    <span className="flex items-center gap-1 rounded-md bg-neutral-500 px-2.5 py-1 text-xs">
                      <FaCodeCommit /> {project?.stats?.totalCommits}
                    </span>
                  </p>
                )}
                <p className="mb-4 mt-3 line-clamp-3 text-xs font-medium text-neutral-800 dark:text-neutral-400 md:text-sm">
                  {project.project_description}
                </p>

                <p className="mb-6 flex flex-wrap gap-x-1 gap-y-1.5">
                  {project.technology_used.split(",").map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full border dark:text-white border-orange-500/50 bg-orange-500/20 px-2 py-0.5 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </p>

                <a
                  target="_blank"
                  href={project.project_link}
                  className="flex items-center text-black bg-gradient-to-b from-orange-500 to-orange-700 justify-center gap-2 rounded-md border-gray-600 bg-gray-700 px-5 py-1.5 text-sm font-semibold  md:text-base mt-auto w-full"
                >
                  <FaGithub />
                  <span>View Project</span>
                </a>

                {project?.stats?.latestCommit?.committedDate && (
                  <p className="absolute right-2 top-3 flex items-center gap-1 rounded-md bg-neutral-300/20 px-1.5 py-0.5 text-[12px]">
                    <FaClockRotateLeft />
                    {timesago(project?.stats?.latestCommit?.committedDate, {})}
                  </p>
                )}
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Project;
