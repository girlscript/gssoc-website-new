import Head from "next/head";
import Image from "next/image";
import React from "react";
import { SkeletonCircle, SkeletonText, Spacer } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Leaderboard() {

  // this can be updated with actual leaderboard data
  const leaders = [
    {
      rank: "99999",
      avatar: "/WoB/top_leads1.png",
      name: "Raadha",
      prs: "99999",
      score: "99999",
    },
    {
      rank: "99999",
      avatar: "/WoB/top_leads.png",
      name: "Raadha",
      prs: "99999",
      score: "99999",
    },
    {
      rank: "99999",
      avatar: "/WoB/top_leads.png",
      name: "Raadha",
      prs: "99999",
      score: "99999",
    },
    {
      rank: "99999",
      avatar: "/WoB/leaderbord_Avatar.png",
      name: "mahoganycrib",
      prs: "99999",
      score: "99999",
    },
    {
      rank: "99999",
      avatar: "/WoB/leaderbord_Avatar.png",
      name: "mahoganycrib",
      prs: "99999",
      score: "99999",
    },
  ];


  return (
    <>
      <Head>
        <title>
          Leaderboard | GirlScript Summer of Code 2024 | GirlScript Foundation
          India
        </title>
        <meta
          name="description"
          content="GirlScript Summer of Code Certificates"
        />
      </Head>
      <Spacer mt={10} />
      <div className="self-stretch flex w-screen flex-col items-center justify-start py-0 px-0 box-border max-w-full text-center text-4xl text-skyblue font-semibold">
        <div className="flex flex-col items-center justify-start gap-[66px] w-full">
          <div className="w-full flex items-center justify-center gap-1">
            <div className="flex-grow pt-2 flex items-center justify-start">
              <div className="h-[2px] w-full rounded-md bg-gradient-to-r from-[#00008B] to-[#ADD8E6] p-[2px]" />
            </div>
            <h1 className="m-0 text-4xl sm:text-5xl font-semibold text-[#00008B]">
              <span className="text-[#23A3CD]">WOB 2024 </span>Top Performers
            </h1>
            <div className="flex-grow flex pt-2 items-center justify-end">
              <div className="h-[2px] w-full rounded-md bg-gradient-to-r from-[#00008B] to-[#ADD8E6] p-[2px]" />
            </div>
          </div>
        </div>
      </div>
      <Spacer mt={16} />
      <div className="py-5 px-0 xl:pb-12 xl:px-48 xl:pt-0 text-center">
        <div className="flex md:flex-row justify-between gap-y-1 gap-x-1 md:gap-x-2 items-center my-10">


          <div className="bg-[#B9EEFF] shadow-2xl rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4 relative inline-block w-28 md:w-auto">
            {leaders[1] === undefined && (
              <>
                <SkeletonCircle className="skeleton-circle-md" />
                <SkeletonText mt="4" noOfLines={1} spacing="4" />
              </>
            )}
            {leaders[1] !== undefined && (
              <>
                <img
                  className="w-12 md:w-16 lg:w-24 rounded-full m-auto inline-block object-cover bg-[#B9EEFF]"
                  src={
                    leaders[1] !== undefined
                      ? leaders[1].avatar
                      : null
                  }
                  alt=""
                />
                <FontAwesomeIcon
                  className="invisible lg:visible w-8 h-8 rounded-full border-5 border-white absolute bottom-[30%] right-[30%] bg-[#CD7F32] inline-block"
                  icon={faGithub}
                  size="2x"
                />
                <h3 className="text-black font-semibold mt-2 text-xs sm:text-sm md:text-md">
                  {leaders[1] !== undefined
                    ? leaders[1].name
                    : null}
                </h3>
              </>
            )}
          </div>


          <div className="bg-[#B9EEFF] shadow-2xl rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4  relative inline-block w-28 md:w-auto">
            {leaders[0] === undefined && (
              <>
                <SkeletonCircle className="skeleton-circle-lg" />
                <SkeletonText mt="4" noOfLines={1} spacing="4" />
              </>
            )}

            {leaders[0] !== undefined && (
              <>
                <img
                  className="w-12 md:w-16 lg:w-40 rounded-full m-auto bg-[#B9EEFF]"
                  src={
                    leaders[0] !== undefined
                      ? leaders[0].avatar
                      : null
                  }
                  alt=""
                />
                <FontAwesomeIcon
                  className="invisible lg:visible w-10 h-10 rounded-full border-5 border-white absolute bottom-1/4 right-1/4 bg-[#FFD700] inline-block"
                  icon={faGithub}
                  size="3x"
                />
                <h3 className="text-black font-semibold mt-4 text-xs sm:text-sm md:text-md">
                  {leaders[0] !== undefined
                    ? leaders[0].name
                    : null}
                </h3>
              </>
            )}
          </div>
          <div className="bg-[#B9EEFF] shadow-2xl rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4 relative inline-block w-28 md:w-auto">
            {leaders[2] === undefined && (
              <>
                <SkeletonCircle className="skeleton-circle-md" />
                <SkeletonText mt="4" noOfLines={1} spacing="4" />
              </>
            )}
            {leaders[2] !== undefined && (
              <>
                <img
                  className="w-12 md:w-16 lg:w-24 rounded-full m-auto bg-[#B9EEFF]"
                  src={
                    leaders[2] !== undefined
                      ? leaders[2].avatar
                      : null
                  }
                  alt=""
                />
                <FontAwesomeIcon
                  className="invisible lg:visible w-8 h-8 rounded-full border-5 border-white absolute bottom-[30%] right-[30%] bg-[#C0C0C0] inline-block"
                  icon={faGithub}
                  size="2x"
                />
                <h3 className="text-black font-semibold mt-2 text-xs sm:text-sm md:text-md">
                  {leaders[2] !== undefined
                    ? leaders[2].name
                    : null}
                </h3>
              </>
            )}
          </div>
        </div>

        <div className="w-full max-w-[1171px] p-5 m-auto rounded-[35px] mt-5 border-2 bg-[#B9EEFF]">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm whitespace-nowrap">
              <thead>
                <tr className="bg-[#00008B] text-[#56AAC5] font-semibold text-lg h-[89px] opacity-70">
                  <th scope="col" className="px-6 py-4 rounded-l-[35px]">
                    Rank
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Avatar
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Github Username
                  </th>
                  <th scope="col" className="px-6 py-4">
                    No. of PR’s
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Score
                  </th>
                  <th scope="col" className="px-6 py-4 rounded-r-[35px]">
                    Badge
                  </th>
                </tr>
                <br/>
              </thead>
              <tbody>
                {leaders.map((user, index) => (
                  <tr
                    key={index}
                    className={`h-[89px] text-lg text-[#56AAC5] ${
                      index % 2 === 0
                        ? "bg-white"
                        : "bg-gradient-to-r from-[#ADD8E6] to-[#00008B] text-white opacity-70"
                    } hover:bg-neutral-100 rounded-[35px]`}
                  >
                    <td scope="row" className="px-6 py-4 rounded-l-[35px]">
                      {user.rank}
                    </td>
                    <td className="px-6 py-4">
                      <Image
                        className="rounded-full"
                        width={"40px"}
                        height={"40px"}
                        src={user.avatar}
                        alt=""
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-row gap-2">
                        <Image
                          className="rounded-full"
                          width={"24px"}
                          height={"24px"}
                          src={"/WoB/leaderboard_github.png"}
                          alt=""
                        />
                        {user.name}
                      </div>
                    </td>
                    <td className="px-6 py-4">{user.prs}</td>
                    <td className="px-6 py-4">{user.score}</td>
                    <td className="px-6 py-4 rounded-r-[35px]">
                      {user.badge && <Image src={user.badge} alt="" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
