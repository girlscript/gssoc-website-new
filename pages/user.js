import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";

const Page = () => {
  const router = useRouter();
  const { username } = router.query;
  
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!username) return;
    setLoading(true);

    axios
      .get(`https://gssoc.devxprite.tech/api/user/${username}`)
      .then((res) => setUserData(res.data))
      .catch((err) => alert("Something went wrong! Please try again later."))
      .finally(() => setLoading(false));
  }, [username]);

  if (loading) {
    return (
      <div className="min-h-[60vh]">
        <div className="loader-div">
          <div className="overlay dark:bg-darkmode_gray-0"></div>
          <div className="loader-group-container">
            <div className="loader-group dark:bg-black">
              <Spinner
                className="loader"
                thickness="6px"
                speed="0.65s"
                emptyColor="gray.200"
                color="orange.500"
                size="xl"
              />
              <span className="loading-msg dark:text-white">
                Waiting for response from server...
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (userData) {
    const { pullRequests, userStats, repositories, updatedAt } = userData;

    return (
      <div className="dark:text-zinc-200 px-2 my-14">
        <img
          src={`https://github.com/${username}.png`}
          className="mx-auto mb-2 block size-32 md:size-40 rounded-full border-2 border-orange-500 p-1"
        />
        <h3 className="text-center text-2xl font-semibold md:text-4xl">
          <span className="text-center text-orange-500">@{username}</span>&apos;s
          Stats
        </h3>

        <p className="mt-1 text-center text-xs italic text-zinc-400 md:text-base">
          Last updated at{" "}
          {new Date(updatedAt || new Date()).toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            dateStyle: "medium",
            timeStyle: "short",
          })}
        </p>

        <div className="rounded-lg  border dark:border-neutral-700 dark:bg-neutral-900 p-3 shadow-lg shadow-black/50 mx-auto mt-8 max-w-screen-xl md:p-8">
          <h4 className="text-lg font-semibold text-orange-500 md:text-xl">
            List of PullRequests
          </h4>

          <div className="relative mx-auto mt-3  w-full max-w-screen-xl overflow-x-auto">
            <table className="w-full border border-zinc-700">
              <thead className="bg-orange-500 text-black">
                <tr>
                  <th className="border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg">
                    No
                  </th>
                  <th className="border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg">
                    Repository
                  </th>
                  <th className="border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg">
                    Title
                  </th>
                  <th className="border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg">
                    Level
                  </th>
                  <th className="border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg">
                    Commits
                  </th>
                  <th className="border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg">
                    Comments
                  </th>
                  <th className="border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg">
                    Merged At
                  </th>
                  <th className="border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg">
                    Related Issues
                  </th>
                </tr>
              </thead>

              <tbody>
                {pullRequests.map((pr, index) => (
                  <tr key={index}>
                    <td className="border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base">
                      {index + 1}
                    </td>
                    <td className="border border-zinc-700/75 p-1.5  text-xs md:px-3 md:text-base max-w-32 truncate text-left text-orange-400 md:max-w-40">
                      {pr.repository.name}
                    </td>
                    <td className="border border-zinc-700/75 p-1.5  text-xs md:px-3 md:text-base max-w-72 truncate text-left md:max-w-96">
                      <a href={pr.url} target="_blank" rel="noreferrer">
                        {pr.titleHTML}
                      </a>
                    </td>
                    <td className="border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base">
                      {pr?.level || pr.leval}
                    </td>
                    <td className="border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base">
                      {pr?.commits?.totalCount}
                    </td>
                    <td className="border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base">
                      {pr.totalCommentsCount}
                    </td>
                    <td className="border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base whitespace-nowrap">
                      {new Date(pr.mergedAt).toLocaleDateString("en-IN", {
                        // dateStyle: 'medium',
                        day: "2-digit",
                        month: "short",
                        year: "2-digit",
                      })}
                    </td>
                    <td className="border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base">
                      {pr.closingIssuesReferences.nodes.map((issue, index) => (
                        <a
                          key={index}
                          target="_blank" rel="noreferrer"
                          href={issue.url}
                          className="text-green-500"
                        >
                          #{issue.number}
                        </a>
                      ))}
                    </td>
                  </tr>
                ))}

                {pullRequests.length === 0 && (
                  <tr>
                    <td
                      className="border border-zinc-700/75 p-1.5 text-xs md:px-3  py-8 text-center text-zinc-500 md:text-lg"
                      colSpan="8"
                    >
                      Nothing to show
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg  border dark:border-neutral-700 dark:bg-neutral-900 p-3 shadow-lg shadow-black/50 mx-auto mt-8 max-w-screen-xl md:p-8">
          <h4 className="text-lg font-semibold text-orange-500 md:text-xl">
            Repositories Wise Stats
          </h4>
          <div className="relative mx-auto mt-3  w-full max-w-screen-xl overflow-x-auto">
            <table className="w-full border border-zinc-700">
              <thead className="bg-orange-500 text-black">
                <tr>
                  <th
                    className="border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg"
                    rowSpan={2}
                  >
                    No
                  </th>
                  <th
                    className="border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg"
                    rowSpan={2}
                  >
                    Repository
                  </th>
                  <th
                    className="border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg"
                    rowSpan={2}
                  >
                    Total Score
                  </th>
                  <th
                    className="border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 md:text-lg"
                    colSpan={5}
                  >
                    PullRequests
                  </th>
                </tr>

                <tr className="">
                  <th className="border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 text-[10px] md:text-sm">
                    Level 1
                  </th>
                  <th className="border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 text-[10px] md:text-sm">
                    Level 2
                  </th>
                  <th className="border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 text-[10px] md:text-sm">
                    Level 3
                  </th>
                  <th className="border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 text-[10px] md:text-sm">
                    Others
                  </th>
                  <th className="border border-zinc-900/25 p-1.5 py-1 text-xs font-semibold md:px-3 text-[10px] md:text-sm">
                    Total
                  </th>
                </tr>
              </thead>

              <tbody className="">
                {repositories.map((repo, index) => (
                  <tr key={index}>
                    <td className="border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base whitespace-nowrap">
                      {index + 1}
                    </td>

                    <td className="border border-zinc-700/75 p-1.5  text-xs md:px-3 md:text-base max-w-32 truncate text-left text-orange-400 md:max-w-96">
                      <a href={repo.url} target="_blank" rel="noreferrer">
                        {repo.name}
                      </a>
                    </td>
                    <td className="border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base whitespace-nowrap">
                      {repo.totalScore}
                    </td>
                    <td className="border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base whitespace-nowrap">
                      {repo.prBreakdown?.level1}
                    </td>
                    <td className="border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base whitespace-nowrap">
                      {repo.prBreakdown?.level2}
                    </td>
                    <td className="border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base whitespace-nowrap">
                      {repo.prBreakdown?.level3}
                    </td>
                    <td className="border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base whitespace-nowrap">
                      {repo.prBreakdown?.others}
                    </td>
                    <td className="border border-zinc-700/75 p-1.5 text-center text-xs md:px-3 md:text-base whitespace-nowrap">
                      {repo.prCount}
                    </td>
                  </tr>
                ))}

                {repositories.length === 0 && (
                  <tr>
                    <td
                      colSpan="8"
                      className="py-8 text-center text-gray-500 md:text-lg"
                    >
                      Nothing to show
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return <div></div>;
};

export default Page;
