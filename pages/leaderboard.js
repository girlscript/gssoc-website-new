import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spinner,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import Head from "next/head";
import React, { useCallback, useEffect, useState } from "react";
import Confetti from "react-confetti";
import Pagination from "react-js-pagination";
const columns = [
  { id: "position", label: "Rank", minWidth: 50 },
  { id: "avatar", label: "Avatar", minWidth: 50 },
  { id: "username", label: "GitHub Username", minWidth: 170 },

  {
    id: "prnums",
    label: "No. Of PRs",
    minWidth: 100,
    align: "center",
  },
  {
    id: "score",
    label: "Score",
    minWidth: 100,
    align: "right",
  },
  {
    id: "viewBtn",
    label: "",
    minWidth: 100,
    align: "right",
  },
];

function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  var getWindowDimensions = useCallback(() => {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }, [hasWindow]);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

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

function Leaderboard() {
  const { theme } = useTheme();
  let [totalData, setTotalData] = useState([]);
  let [leaderss, setLeaderss] = useState([]);
  let [searchData, setSearchData] = useState([]);
  let [links, setLinks] = useState([]);
  let [login, setLogin] = useState("");
  let [score, setScore] = useState("");
  let [avatar, setAvatar] = useState("");
  let [lastupdated, setLastupdated] = useState("");
  let [filter, setFilter] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  let [isLboardLoading, setIsLboardLoading] = useState(false);
  let [loadingMsg, setLoadingMsg] = useState("Sent request to the server");
  let [showConfetti, setShowConfetti] = useState(false);
  const [openn, setOpenn] = React.useState(true);
  const [activePage, setActivePage] = useState(1);
  const { height, width } = useWindowDimensions();
  let rows = [];
  function createData(
    username,
    avatar,
    prnums,
    score,
    profile_url,
    prlinks,
    level0,
    level1,
    level2,
    level3,
    level4,
    rank
  ) {
    return {
      username,
      avatar,
      prnums,
      score,
      profile_url,
      prlinks,
      level0,
      level1,
      level2,
      level3,
      level4,
      rank,
    };
  }
  useEffect(() => {
    setIsLoading(true);
    setIsLboardLoading(true);
    setTimeout(function () {
      setLoadingMsg("Waiting for response from server");
    }, 600);
    // clearTimeout(timeout)
    // "https://gssoc23-leaderboard.onrender.com/OSLeaderboard" Original Source of fetching PRs
    fetch(
      "https://raw.githubusercontent.com/girlscript/gssoc-website-new/main/pages/api/leaderboard23.json"
    )
      .then((res) => {
        setLoadingMsg("Data received. Starting to populate.");
        setTimeout(function () {
          setIsLoading(false), 8000;
        });
        return res.json();
      })
      .then((data) => {
        // console.log(data.leaderboard);
        if (data.leaderboard.length === 0 && data.success === true) {
          setIsLoading(false);
          setIsLboardLoading(false);
          setLastupdated(null);
        } else {
          data.leaderboard.sort(function (a, b) {
            return (
              b.score - a.score ||
              b.level4 - a.level4 ||
              b.level3 - a.level3 ||
              b.level2 - a.level2 ||
              b.level1 - a.level1 ||
              b.level0 - a.level0 ||
              a.login < b.login
            );
          });
          let blacklist = ["raj03kumar", "chinmoy12c", "nidhi-rathore"];
          const rankedData = data.leaderboard
            .filter((usr) => {
              return blacklist.includes(usr.login) === false;
            })
            .map((contributorData, idx) => ({
              ...contributorData,
              rank: idx + 1,
            }));
          setLeaderss(rankedData.slice(0, 50));
          setIsLboardLoading(false);
          setIsLoading(false);
          setTotalData(rankedData);
          setSearchData(rankedData);
          setOpenn(false);
          setLastupdated(data.updatedTimestring);
          setShowConfetti(true);
          setTimeout(function () {
            setShowConfetti(false);
          }, 5000);
        }
      });
  }, []);

  for (let leader in leaderss) {
    rows.push(
      createData(
        [leaderss[leader].login, leaderss[leader].url],
        leaderss[leader].avatar_url,
        leaderss[leader].pr_urls.filter((item, i, ar) => ar.indexOf(item) === i)
          .length,
        leaderss[leader].score,
        leaderss[leader].profile_url,
        leaderss[leader].pr_urls,
        leaderss[leader].level0,
        leaderss[leader].level1,
        leaderss[leader].level2,
        leaderss[leader].level3,
        leaderss[leader].level4,
        leaderss[leader].rank
      )
    );
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  let prlinks = [];
  let handleClickOpen = (num) => {
    onOpen(true);
    for (let link in leaderss[num].pr_urls) {
      prlinks.push(leaderss[num].pr_urls[link] + "\n\n\n\n");
    }
    let unique = prlinks.filter((item, i, ar) => ar.indexOf(item) === i);
    setLinks(unique);
    // setLeveldata({
    //     level0: leaderss[num].level0,
    //     level1: leaderss[num].level1,
    //     level2: leaderss[num].level2,
    //     level3: leaderss[num].level3,
    //     level4: leaderss[num].level4,
    // });
    setLogin(leaderss[num].login);
    setAvatar(leaderss[num].avatar_url);
    setScore(leaderss[num].score);
  };

  const filterData = () => {
    setIsLboardLoading(true);
    if (filter === "" && leaderss.length !== totalData.length) {
      setSearchData(totalData);
      setActivePage(1);
      setIsLboardLoading(false);
    } else {
      const filtered = totalData.filter((leader) =>
        leader.login.toLowerCase().includes(filter.toLowerCase())
      );
      setSearchData(filtered);
      setActivePage(1);
      setIsLboardLoading(false);
    }
  };

  const handleClose = () => {
    prlinks = [];
    onOpen(false);
    onClose();
  };

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  useEffect(() => {
    if ((activePage - 1) * 50 + 50 < searchData.length) {
      setLeaderss(
        searchData.slice((activePage - 1) * 50, (activePage - 1) * 50 + 50)
      );
    } else {
      setLeaderss(searchData.slice((activePage - 1) * 50));
    }
  }, [activePage, searchData]);

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
      {isLoading && (
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
              <span className="loading-msg dark:text-white">{loadingMsg}</span>
            </div>
          </div>
        </div>
      )}
      {showConfetti && <Confetti className="fullscreen" />}
      <div
        className="container transition-colors mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-10 lg:px-20 2xl:px-32 dark:bg-darkmode_gray-0 dark:transition-colors "
        style={{ margin: "auto" }}
      >
        <div className="items-center justify-center">
          <div className="font-sans text-center text-2xl font-extrabold">
            <div className="text-black dark:text-white text-4xl text center font-extrabold mb-10 underline underline-offset-4 decoration-primary_orange-0">
              <span className="text-primary_orange-0"> GSSoC 2023 </span>
              Top Performers
            </div>
          </div>
        </div>
        <div>
          {/* <Backdrop className={classes.backdrop} open={openn}>
            <CircularProgress color="inherit" />
          </Backdrop> */}
          <div className="py-5 px-0 xl:pb-12 xl:px-24 xl:pt-0 text-center">
            <div className="flex md:flex-row justify-between gap-y-1 gap-x-1 md:gap-x-2 items-center my-10">
              <div className="bg-white shadow-2xl dark:bg-black rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4 relative inline-block w-28 md:w-auto">
                {totalData[1] === undefined && (
                  <>
                    <SkeletonCircle className="skeleton-circle-md" />
                    <SkeletonText mt="4" noOfLines={1} spacing="4" />
                  </>
                )}
                {totalData[1] !== undefined && (
                  <>
                    <img
                      className="w-12 md:w-16 lg:w-24 rounded-full m-auto inline-block object-cover bg-white"
                      src={
                        totalData[1] !== undefined
                          ? totalData[1].avatar_url
                          : null
                      }
                    />
                    <FontAwesomeIcon
                      className="invisible lg:visible w-8 h-8 rounded-full border-5 border-white absolute bottom-1/4 right-1/4 bg-amber-300 inline-block"
                      icon={faGithub}
                      size="2x"
                    />
                    <h3 className="text-black dark:text-primary_orange-0 font-semibold mt-2 text-xs sm:text-sm md:text-md">
                      2.{" "}
                      {totalData[1] !== undefined ? totalData[1].login : null}
                    </h3>
                  </>
                )}
              </div>
              <div className="bg-white shadow-2xl dark:bg-black rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4  relative inline-block w-28 md:w-auto">
                {totalData[0] === undefined && (
                  <>
                    <SkeletonCircle className="skeleton-circle-lg" />
                    <SkeletonText mt="4" noOfLines={1} spacing="4" />
                  </>
                )}

                {totalData[0] !== undefined && (
                  <>
                    <img
                      className="w-12 md:w-16 lg:w-40 rounded-full m-auto bg-white"
                      src={
                        totalData[0] !== undefined
                          ? totalData[0].avatar_url
                          : null
                      }
                    />
                    <FontAwesomeIcon
                      className="invisible lg:visible w-10 h-10 rounded-full border-5 border-white absolute bottom-1/4 right-1/4 bg-cyan-200 inline-block"
                      icon={faGithub}
                      size="3x"
                    />
                    <h3 className="text-black dark:text-primary_orange-0 font-semibold mt-4 text-xs sm:text-sm md:text-md">
                      1.{" "}
                      {totalData[0] !== undefined ? totalData[0].login : null}
                    </h3>
                  </>
                )}
              </div>
              <div className="bg-white shadow-2xl dark:bg-black rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4 relative inline-block w-28 md:w-auto">
                {totalData[2] === undefined && (
                  <>
                    <SkeletonCircle className="skeleton-circle-md" />
                    <SkeletonText mt="4" noOfLines={1} spacing="4" />
                  </>
                )}
                {totalData[2] !== undefined && (
                  <>
                    <img
                      className="w-12 md:w-16 lg:w-24 rounded-full m-auto bg-white"
                      src={
                        totalData[2] !== undefined
                          ? totalData[2].avatar_url
                          : null
                      }
                    />
                    <FontAwesomeIcon
                      className="invisible lg:visible w-8 h-8 rounded-full border-5 border-white absolute bottom-1/4 right-1/4 bg-zinc-100 inline-block"
                      icon={faGithub}
                      size="2x"
                    />
                    <h3 className="text-black dark:text-primary_orange-0 font-semibold mt-2 text-xs sm:text-sm md:text-md">
                      3.{" "}
                      {totalData[2] !== undefined ? totalData[2].login : null}
                    </h3>
                  </>
                )}
              </div>
            </div>

            <div className="mt-20">
              <div className="flex justify-end">
                <div className="mb-3 xl:w-96">
                  <div className="input-group relative flex flex-wrap items-stretch w-full mb-4 justify-end">
                    <div className="relative flex search-container">
                      <input
                        onChange={(e) => {
                          setFilter(e.target.value);
                        }}
                        type="search"
                        className="form-control relative flex-auto min-w-0 block px-0.5 py-1.5 text-base dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-600 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-400 focus:outline-none dark:placeholder-neutral-300"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                        onKeyUp={(e) => {
                          e.key === "Enter" ? filterData() : "";
                        }}
                      />
                      <span className="search-count dark:text-neutral-300">
                        {searchData.length}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        filterData();
                      }}
                      className="btn inline-block px-6 py-2.5 bg-gray-300 dark:bg-neutral-600 text-gray-600 font-medium text-xs leading-tight uppercase hover:text-gray-800 focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center"
                      type="button"
                      id="button-addon2"
                      style={{
                        padding: "10px 18px",
                        maxWidth: "50px",
                        width: "20%",
                      }}
                    >
                      <svg
                        className="w-4 fill-neutral-600 hover:fill-neutral-800 dark:fill-neutral-300 dark:hover:fill-neutral-100"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="search"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-sky-100 dark:bg-orange-200 px-1.5 py-1.5 rounded-md mb-3">
              <p className="text-sky-700 dark:text-orange-900 text-sm">
                {isLoading === false && lastupdated !== "" && (
                  <>
                    The leaderboard was last updated on: <b>{lastupdated}</b>
                  </>
                )}
                {isLoading === false && lastupdated === null && (
                  <>The server is updating. Please comeback after 5-10 mins</>
                )}
              </p>
            </div>

            {/* <Paper> */}
            <div className="w-full overflow-x-auto" /*component={Paper}*/>
              <div className="table w-full">
                <div className="table-header-group ">
                  <div className="table-row">
                    {columns.map((column) => (
                      <div
                        className="table-cell font-serif px-4 py-4 bg-black text-white dark:bg-primary_orange-0 dark:text-black"
                        key={column.id}
                        // align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </div>
                    ))}
                  </div>
                </div>
                {!isLboardLoading && (
                  <>
                    <div className="table-row-group">
                      {rows.map((row, i) => {
                        return (
                          // style = {{ display: rows.indexOf(row) === 0 || rows.indexOf(row) === 1 || rows.indexOf(row) === 2 ? "none" : null }
                          <>
                            {i % 2 ? (
                              <div
                                className="table-row"
                                role="checkbox"
                                tabIndex={-1}
                                key={row.username}
                              >
                                {columns.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <div
                                      className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-neutral-900 dark:text-white font-medium"
                                      key={column.id}
                                      // align={column.align}
                                      style={{ verticalAlign: "middle" }}
                                    >
                                      {column.id === "avatar" ? (
                                        <img
                                          className="w-9 rounded-full m-auto bg-white"
                                          src={value}
                                        />
                                      ) : column.id === "position" ? (
                                        row.rank
                                      ) : column.id === "username" ? (
                                        <div className="flex relative left-6 md:left-12 lg:left-24">
                                          <FontAwesomeIcon
                                            className="mr-5"
                                            icon={faGithub}
                                            size="2x"
                                          />
                                          <a
                                            href={value[1]}
                                            target="_blank"
                                            className="no-underline username"
                                            style={{
                                              alignSelf: "center",
                                              cursor: "pointer",
                                            }}
                                            rel="noreferrer"
                                          >
                                            {value[0]}
                                          </a>
                                        </div>
                                      ) : column.id === "viewBtn" ? (
                                        <button
                                          onClick={() => {
                                            handleClickOpen(rows.indexOf(row));
                                          }}
                                          color="primary"
                                          className="view-btn"
                                          style={{
                                            background: "#FA6329",
                                            border: "none",
                                            padding: "5px 12px",
                                            color: "white",
                                            borderRadius: 5,
                                            cursor: "pointer",
                                            fontSize: "17px",
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faList} />
                                        </button>
                                      ) : (
                                        value
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            ) : (
                              <div
                                className="table-row"
                                role="checkbox"
                                tabIndex={-1}
                                key={row.username}
                              >
                                {columns.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <div
                                      className="table-cell px-4 py-2 bg-leaderboardbg-0 text-black dark:bg-black dark:text-white font-medium"
                                      key={column.id}
                                      // align={column.align}
                                    >
                                      {column.id === "avatar" ? (
                                        <img
                                          className="w-9 rounded-full m-auto bg-white"
                                          src={value}
                                        />
                                      ) : column.id === "position" ? (
                                        row.rank
                                      ) : column.id === "username" ? (
                                        <div className="flex relative left-6 md:left-12 lg:left-24">
                                          <FontAwesomeIcon
                                            className="mr-5"
                                            icon={faGithub}
                                            size="2x"
                                          />
                                          <a
                                            href={value[1]}
                                            className="no-underline username"
                                            style={{ alignSelf: "center" }}
                                          >
                                            {value[0]}
                                          </a>
                                        </div>
                                      ) : column.id === "viewBtn" ? (
                                        <button
                                          onClick={() => {
                                            handleClickOpen(rows.indexOf(row));
                                          }}
                                          color="primary"
                                          className="view-btn"
                                          style={{
                                            background: "#FA6329",
                                            border: "none",
                                            padding: "5px 12px",
                                            color: "white",
                                            borderRadius: 5,
                                            cursor: "pointer",
                                            fontSize: "17px",
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faList} />
                                        </button>
                                      ) : (
                                        value
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
              {isLboardLoading && (
                <Stack style={{ marginTop: "10px" }}>
                  <Skeleton height="40px" />
                  <Skeleton height="40px" />
                  <Skeleton height="40px" />
                  <Skeleton height="40px" />
                </Stack>
              )}
            </div>
            <div className="pagination-holder">
              <Pagination
                innerClass={
                  theme === "dark" ? "dark-theme pagination" : "pagination"
                }
                itemClass="page-item"
                linkClass="page-link"
                activePage={activePage}
                activeClass="active-page"
                itemsCountPerPage={50}
                totalItemsCount={searchData.length}
                pageRangeDisplayed={width < 600 ? 3 : 5}
                onChange={(e) => {
                  console.log(e);
                  handlePageChange(e);
                }}
              />
            </div>
            {theme === "dark" ? (
              <Modal
                isOpen={isOpen}
                onClose={handleClose}
                size="xl"
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                backgroundColor="#000"
              >
                <ModalOverlay />
                <ModalContent backgroundColor="#000000">
                  <ModalHeader
                    className="dark:text-white flex m-0 py-4 px-6 font-medium text-lg leading-relaxed"
                    id="alert-dialog-slide-title"
                  >
                    {login + "'s Stats"}
                  </ModalHeader>
                  <ModalBody>
                    <div className="flex-auto py-2 px-6 overflow-y-auto">
                      <div id="alert-dialog-slide-description">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img
                            alt="Suvraneel Bhuin"
                            src={avatar}
                            className="w-12 rounded-full xl:w-24"
                          />
                          <p className="dark:bg-neutral-900 dark:text-white w-24 rounded-full xl:w-36 p-3 text-center modal-score">
                            🏆 {score}
                          </p>
                        </div>
                        <div
                          style={{
                            marginTop: 30,
                            fontWeight: "bolder",
                            color: "white",
                          }}
                        >
                          List Of PRs:{" "}
                        </div>
                        {links.length !== 0 &&
                          links.map((link) => (
                            <a
                              className="pr-links text-white"
                              href={link}
                              key={link}
                            >
                              {link}
                            </a>
                          ))}
                      </div>
                    </div>
                    <div className="flex px-2 py-2 items-center justify-end">
                      <button
                        onClick={handleClose}
                        color="primary"
                        className="close-btn"
                        style={{
                          background: "#FA6329",
                          border: "none",
                          padding: "10px 20px",
                          color: "white",
                          borderRadius: 5,
                          cursor: "pointer",
                          fontSize: "18px",
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </ModalBody>
                </ModalContent>
              </Modal>
            ) : (
              <Modal
                isOpen={isOpen}
                onClose={handleClose}
                size="xl"
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader
                    className="dark:text-white flex m-0 py-4 px-6 font-medium text-lg leading-relaxed"
                    id="alert-dialog-slide-title"
                  >
                    {login + "'s Stats"}
                  </ModalHeader>
                  <ModalBody>
                    <div className="flex-auto py-2 px-6 overflow-y-auto">
                      <div id="alert-dialog-slide-description">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img
                            alt="Suvraneel Bhuin"
                            src={avatar}
                            className="w-12 rounded-full xl:w-24"
                          />
                          <p className="bg-orange-100 dark:bg-neutral-900 dark:text-white w-24 rounded-full xl:w-36 p-3 text-center modal-score">
                            🏆 {score}
                          </p>
                        </div>
                        <div style={{ marginTop: 30, fontWeight: "bolder" }}>
                          List Of PRs:{" "}
                        </div>
                        {links.length !== 0 &&
                          links.map((link) => (
                            <a
                              className="pr-links text-black"
                              href={link}
                              key={link}
                            >
                              {link}
                            </a>
                          ))}
                      </div>
                    </div>
                    <div className="flex px-2 py-2 items-center justify-end">
                      <button
                        onClick={handleClose}
                        color="primary"
                        className="close-btn"
                        style={{
                          background: "#FA6329",
                          border: "none",
                          padding: "10px 20px",
                          color: "white",
                          borderRadius: 5,
                          cursor: "pointer",
                          fontSize: "18px",
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </ModalBody>
                </ModalContent>
              </Modal>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
