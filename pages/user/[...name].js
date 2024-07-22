import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Skeleton, Stack } from "@chakra-ui/react";

const columns = [
  { id: "No", label: "No", minWidth: 50 },
  { id: "Repository", label: "Repository", minWidth: 50 },
  { id: "Title", label: "Title", minWidth: 170 },
  { id: "Level", label: "Level", minWidth: 100, align: "center" },
  { id: "Commits", label: "Commits", minWidth: 100, align: "right" },
  { id: "Comments", label: "Comments", minWidth: 100, align: "right" },
  { id: "Merged", label: "Merged At", minWidth: 100, align: "right" },
  { id: "Related", label: "Related Issues", minWidth: 100, align: "right" },
];

function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  const getWindowDimensions = useCallback(() => {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return { width, height };
  }, [hasWindow]);

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [getWindowDimensions, hasWindow]);

  return windowDimensions;
}

export default function Stats() {
  const { theme } = useTheme();
  const [time, setTime] = useState("");
  const [rows, setRows] = useState([]);
  const [totalData, setTotalData] = useState([]);
  const [login, setLogin] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isLboardLoading, setIsLboardLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(50);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
    if (data) {
      data.forEach(fetchPRDetails);
    }
    setLogin(localStorage.getItem("login"));
    setAvatar(localStorage.getItem("avatar"));
    setTime(localStorage.getItem("time"));
  }, []);

  async function fetchPRDetails(prUrl) {
    console.log(process.env.GH_ACCESS_TOKEN);
    try {
      const apiUrl = prUrl
        .replace("github.com", "api.github.com/repos")
        .replace("/pull/", "/pulls/");
      let response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `token ${process.env.GH_ACCESS_TOKEN}`,
        },
      });
      response = await response.json();

      const labels = response.labels?.map((label) => label.name);
      const levelLabel = labels?.find((label) =>
        label.toLowerCase().includes("level")
      );
      const issueNumber = "#" + response?.issue_url?.match(/\/(\d+)$/)[1];
      const commitCount = response?.commits;
      const commentCount = response?.comments;
      const title = extractTitle(response?.title);
      const date = formatDate(response?.merged_at);
      const repositoryName = response?.base?.repo?.name;
      const row = [
        title,
        levelLabel,
        commitCount,
        commentCount,
        date,
        response.issue_url,
        issueNumber,
        repositoryName,
      ];

      setTotalData((prev) => [...prev, row]);
      setRows((prev) => [...prev, row]);
    } catch (error) {
      console.error(`Error fetching PR details: ${error.message}`);
    }
  }

  function formatDate(dateString) {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", options);
  }

  function extractTitle(title) {
    if (!title) return "";
    const parts = title.split("#");
    return parts[0]?.replace(/-/g, " ")?.trim();
  }

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <div className="container m-auto transition-colors mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-10 lg:px-20 2xl:px-32 dark:bg-darkmode_gray-0 dark:transition-colors">
      <div className="items-center justify-center">
        <div className="font-sans text-center text-2xl font-extrabold">
          <div className="text-black dark:text-white flex flex-col text-4xl text-center font-extrabold mb-10 underline underline-offset-4 decoration-primary_orange-0">
            <img
              width={"100px"}
              height={"100px"}
              className="m-auto rounded-full"
              src={avatar}
              alt=""
            />
            <span className="text-gray-500 text-lg font-semibold">
              <i>{time}</i>
            </span>
            <p>
              <span className="text-primary_orange-0"> {login} </span>
              Stat&apos;s
            </p>
          </div>
        </div>
      </div>
      <div className="py-5 px-0 xl:pb-12 xl:px-24 xl:pt-0 text-center">
        <div className="max-h-[100vh] w-full overflow-x-auto">
          <div className="table w-full">
            <div className="table-header-group">
              <div className="table-row">
                {columns.map((column, index) => (
                  <div
                    className="table-cell font-serif px-4 py-4 bg-black text-white dark:bg-primary_orange-0 dark:text-black"
                    key={index}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </div>
                ))}
              </div>
            </div>
            {!isLboardLoading ? (
              <div className="table-row-group">
                {rows.map((row, i) => (
                  <React.Fragment key={i}>
                    <div
                      className={`table-row ${
                        i % 2 ? "bg-orange-50 dark:bg-neutral-900" : "bg-orange-50 dark:bg-[#262323]"
                      }`}
                      role="checkbox"
                      aria-checked="false"
                      tabIndex={-1}
                    >
                      {columns.map((column, index) => (
                        <div
                          className={`table-cell px-4 py-2 text-black dark:text-white font-medium ${
                            column.align ? `text-${column.align}` : ""
                          }`}
                          key={index}
                          style={{ verticalAlign: "middle" }}
                        >
                          {index === 0
                            ? i + 1
                            : column.id === "Repository"
                            ? row[7]
                            : column.id === "Title"
                            ? row[0]
                            : column.id === "Level"
                            ? row[1]
                            : column.id === "Commits"
                            ? row[2]
                            : column.id === "Comments"
                            ? row[3]
                            : column.id === "Merged"
                            ? row[4]
                            : column.id === "Related"
                            ? (
                                <a
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-green-500 text-center"
                                  href={row[5]}
                                >
                                  {row[6]}
                                </a>
                              )
                            : null}
                        </div>
                      ))}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            ) : (
              <Stack style={{ marginTop: "10px" }}>
                <Skeleton height="40px" />
                <Skeleton height="40px" />
                <Skeleton height="40px" />
                <Skeleton height="40px" />
              </Stack>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
