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
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import React, { useCallback, useEffect, useState } from "react";
import Confetti from "react-confetti";
import Pagination from "react-js-pagination";
import { data } from "autoprefixer";
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
    id: "badge",
    label: "Badge",
    minWidth: 100,
    align: "right",
    badges: {
      60: {
        score: 60,
        name: "Explorer Badge",
        badge: "./badges/1.png",
        content:
          "Congratulations! You've unlocked the Explorer Badge for reaching 60 points. Keep exploring and discovering new horizons!",
      },
      140: {
        score: 140,
        name: "Adventurer Badge",
        badge: "./badges/2.png",
        content:
          "You're now an Adventurer! With 140 points, you've proven your knack for navigating through challenges. Keep journeying forward!",
      },
      200: {
        score: 200,
        name: "Trailblazer Badge",
        badge: "./badges/3.png",
        content:
          "Blaze your trail! You've earned the Trailblazer Badge by amassing 200 points. Your determination and courage inspire us all!",
      },
      300: {
        score: 300,
        name: "Summit Seeker Badge",
        badge: "./badges/4.png",
        content:
          "You've conquered mountains! With 300 points, you've earned the Summit Seeker Badge. Keep climbing to new heights!",
      },
      500: {
        score: 500,
        name: "Champion Badge",
        badge: "./badges/5.png",
        content:
          "A true champion! With 500 points, you've reached the pinnacle of success and earned the Champion Badge. Keep aiming high and inspiring others!",
      },
      1200: {
        score: 1200,
        name: "Innovator Badge",
        badge: "./badges/6.png",
      },
      2500: {
        score: 2500,
        name: "Conqurer Badge",
        badge: "./badges/7.png",
      },
      5500: {
        score: 5500,
        name: "Legend Badge",
        badge: "./badges/8.png",
      }
    },
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
  let [modalTimeUpdated,setModalLastUpdated]=useState('')
  let [leaderss, setLeaderss] = useState([]);
  let [searchData, setSearchData] = useState([]);
  let [links, setLinks] = useState([]);
  let [isStatsModal, setIsStatsModal] = useState(false);
  let [row,setRow]=useState(-1)
  let [badges, setBadges] = useState([]);
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
  const [itemsPerPage, setItemsPerPage] = useState(50); // default items per page
  const [imageClicked, setImageClicked] = useState(false); // used in badge sharing
  const [userPrData,setUserPrData]=useState([])
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
  function createBadgesList(score) {
    const badgeColumn = columns.find(column => column.id === 'badge');
    let badges = [];

    for (const key in badgeColumn.badges) {
      if (badgeColumn.badges.hasOwnProperty(key)) {
        const badge = badgeColumn.badges[key];
        if (score >= badge.score) {
          badges.push(badge);
        }
      }
    }

    return badges
  }
  function formatDateTime(dateString) {
    const date = new Date(dateString);

    // Extract date components
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    // Extract time components
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    return `${day} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
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
      "https://gssoc24-leaderboard-backend-production-dfe3.up.railway.app/OSLeaderboard"
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
          
          let blacklist = ["Ajay-Dhangar"];

          const rankedData = data.leaderboard
            .filter((usr) => {
              return (blacklist.includes(usr.login) === false);
            })
            .map((contributorData, idx) => ({
              ...contributorData,
              rank: idx + 1,
            }));
          setLeaderss(rankedData.slice(0, itemsPerPage));
          setIsLboardLoading(false);
          setIsLoading(false);
          setTotalData(rankedData);
          setSearchData(rankedData);
          setOpenn(false);
          setLastupdated(data.updatedTimestring);
          setModalLastUpdated(formatDateTime(data.updatedTimestring))
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

async   function statsmodal(num){
    for (let link in leaderss[num].pr_urls) {
      
      prlinks.push(leaderss[num].pr_urls[link]);
    }
    let unique = prlinks.filter((item, i, ar) => ar.indexOf(item) === i);
    console.log(unique)
    let arr1=[]
    unique.map(async (data)=>{
      arr1.push(data)
    })
    setBadges(createBadgesList(leaderss[num].score));
    arr1=await JSON.stringify(arr1)
    localStorage.setItem('data',arr1)
  
    setLogin(leaderss[num].login);
    setAvatar(leaderss[num].avatar_url);
    setScore(leaderss[num].score);
    localStorage.setItem('avatar',leaderss[num].avatar_url)
    localStorage.setItem('login',leaderss[num].login)
    localStorage.setItem('time',modalTimeUpdated)
    window.location.href=`/user/${leaderss[num].login}`
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  let prlinks = [];
  function formatDate(dateString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options);
}
function extractTitle(title) {
  // Split the title by '#'
  const parts = title.split('#');

  // Get the first part, remove dashes, and trim any extra whitespace
  const extractedTitle = parts[0].replace(/-/g, ' ').trim();

  return extractedTitle;
}
  async function fetchPRDetails(prUrl) {
    try {
      const apiUrl = prUrl.replace('github.com', 'api.github.com/repos').replace('/pull/', '/pulls/');
      let response = await fetch(apiUrl,{method:"GET",headers: {
        'Accept': 'application/vnd.github.v3+json'
      }});
      response=await response.json()

      const labels = response.labels.map(label => label.name);
      const levelLabel = labels.find(label => label.toLowerCase().includes('level'));
      const issueNumber ="#"+ response.issue_url.match(/\/(\d+)$/)[1];
      const commitCount = response.commits;
      const commentCount = response.comments;
      let title=extractTitle(response.title)
const date=formatDate(response.merged_at)
      const repositoryName = response.base.repo.name;
      let arr=[title,levelLabel,commitCount,commentCount,date,response.issue_url,issueNumber,repositoryName]
     
      setLinks((prev)=>[...prev,arr]);
      return arr
    } catch (error) {
      console.error(`Error fetching PR details: ${error.message}`);
      return null;
    }
  }
  let handleClickOpen = (num) => {
    onOpen(true);
    setRow(num)
    for (let link in leaderss[num].pr_urls) {
      prlinks.push(leaderss[num].pr_urls[link] + "\n\n\n\n");
    }

    let unique = prlinks.filter((item, i, ar) => ar.indexOf(item) === i);
    setLinks(unique);
    setBadges(createBadgesList(leaderss[num].score));
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
    setLinks([])
    setIsStatsModal(false)
    console.log("Setting Links")
    onOpen(false);
    onClose();
  };
 
  const handlePageChange = (pageNumber) => {
    // console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    handlePageChange(0);
  };

  const shareBadge = (badgeImageUrl) => {
    // Fetch the image from your server
    fetch(badgeImageUrl)
      .then(response => response.blob())
      .then(imageBlob => {
        const imageFile = new File([imageBlob], 'Share Badge.png', { type: 'image/png' });
        const shareData = {
          files: [imageFile],
          title: 'Happy to contribute',
          text: 'Check out my badge!',
        };
        navigator.share(shareData)
          .then(() => {
            console.log('Shared your badge!');
          })
          .catch((error) => {
            console.log('Error sharing your badge:', error);
          });
      });
  };

  const downloadImage = (badgeImageUrl) => {
    fetch(badgeImageUrl)
      .then(response => response.blob())
      .then(imageBlob => {
        const imageFile = new File([imageBlob], 'Share Badge.png', { type: 'image/png' });
        const imageURL = URL.createObjectURL(imageFile);
        const link = document.createElement('a');
        link.href = imageURL;
        link.download = 'Share Badge.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  function createTemplate(badgePath, action, name, points, avatarPath, badgeName) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
  
    const templateImage = new window.Image();
    const badgeImage = new window.Image();
    const avatarImage = new window.Image();
  
    Promise.all([
      new Promise((resolve, reject) => {
        templateImage.onload = () => resolve();
        templateImage.onerror = reject;
        templateImage.src = "./badges/badge-share-template.png";
      }),
      new Promise((resolve, reject) => {
        badgeImage.onload = () => resolve();
        badgeImage.onerror = reject;
        badgeImage.src = badgePath;
      }),
      new Promise((resolve, reject) => {
        avatarImage.onload = () => resolve();
        avatarImage.onerror = reject;
        avatarImage.crossOrigin = "anonymous";
        avatarImage.src = avatarPath;
      })
    ]).then(() => {
      canvas.width = templateImage.width;
      canvas.height = templateImage.height;
      ctx.drawImage(templateImage, 0, 0);

      ctx.drawImage(badgeImage, 85, 715, 655, 655);

      //adjust the username to fit inside the canvas max allowed spacee is 800 pixels - Bold font used Georgia - white color
      let fontsize= 110;
      ctx.font= "bold 110px Courier New";
      while (ctx.measureText(name).width > 800){
          fontsize-=5;
          ctx.font= `bold ${fontsize}px Courier New`;
      }
      ctx. textAlign = "right";
      ctx.fillStyle= "#ffffff";
      ctx.fillText(name, 870, 580);

      // bold font monospace carrier new - black color
      ctx.font= "bold 100px Courier New";
      ctx. textAlign = "center";
      ctx.fillStyle= "#000000";
      ctx.fillText(points, 1050, 1150);
      ctx. textAlign = "right";
      ctx.fillText(badgeName, 1300, 1600);

      // clip the drawing area to a circle to draw avatar picture as a circle // this change cant be reset and hence it placed at the end of the code
      const radius = 165;
      const imageWidth = 330;
      const imageHeight = 330;
      const avatarX = 1150  - imageWidth / 2;
      const avatarY = 530 - imageHeight / 2;
      //clip canvas
      ctx.beginPath();
      ctx.arc(avatarX + imageWidth / 2, avatarY + imageHeight / 2, radius, 0, 2 * Math.PI, true);
      ctx.closePath();
      ctx.clip();
      // Draw the image with proper centering and potential scaling
      ctx.drawImage(avatarImage, avatarX, avatarY, imageWidth, imageHeight);
      
      const dataURL = canvas.toDataURL("image/png");

      if (action=="download"){
        downloadImage(dataURL);
      }else {
        shareBadge(dataURL);
      }
    }).catch(err => {
      console.error("Error loading images:", err);
    });
  }

  useEffect(() => {
    if ((activePage - 1) * itemsPerPage + itemsPerPage < searchData.length) {
      setLeaderss(
        searchData.slice((activePage - 1) * itemsPerPage, (activePage - 1) * itemsPerPage + itemsPerPage)
      );
    } else {
      setLeaderss(searchData.slice((activePage - 1) * itemsPerPage));
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
              <span className="text-primary_orange-0"> GSSoC 2024 </span>
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
                      alt=""
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
                      alt=""
                    />
                    <FontAwesomeIcon
                      className="invisible lg:visible w-10 h-10 rounded-full border-5 border-white absolute bottom-1/4 right-1/4 bg-cyan-200 inline-block"
                      icon={faGithub}
                      size="3x"
                    />
                    <h3 className="text-black dark:text-primary_orange-0 font-semibold mt-4 text-xs sm:text-sm md:text-md">
                      1.
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
                      alt=""
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

            <div className="mt-10">

            {/* // remove this comment to add this pagination
            <div className="pagination-holder">
                  <Pagination
                    innerClass={
                      theme === "dark" ? "dark-theme pagination" : "pagination"
                    }
                    itemClass="page-item"
                    linkClass="page-link"
                    activePage={activePage}
                    activeClass="active-page"
                    itemsCountPerPage={itemsPerPage}
                    totalItemsCount={searchData.length}
                    pageRangeDisplayed={width < 600 ? 3 : 5}
                    onChange={(e) => {
                      // console.log(e);
                      handlePageChange(e);
                    }}
                  />
                </div> */}

              <div className="flex mb-5">
                  <div className="input-group relative flex flex-wrap items-stretch w-full">
                    <span className="relative flex items-center w-1/2 justify-start">
                      <label className=" mr-2 whites-nowrap text-gray-900 dark:text-gray-200 font-large text-xxl hover:text-gray-400">
                      Showing
                      </label>
                      <select className="relative bg-gray-300 dark:bg-neutral-600 text-gray-900 dark:text-gray-200 font-large text-xxl hover:text-gray-400 items-center"
                      onInput={(e) => {
                        // console.log(e);
                        handleItemsPerPageChange(e);
                      }}
                      onChange={(e) => {
                        handlePageChange(1);
                      }}
                      value={itemsPerPage}>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50" >50</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="500">500</option>
                        <option value="1000">1000</option>
                      </select>
                      <label className=" ml-2 whites-nowrap text-gray-900 dark:text-gray-200 font-large text-xxl hover:text-gray-400">
                      rows per page
                      </label>
                      </span>
                      <span className="relative flex w-1/2 justify-end">
                    <span className="relative search-container flex w-full justify-end">
                    <div className="relative flex search-container">
                      <input
                        onChange={(e) => {
                          setFilter(e.target.value);
                          filterData();
                        }}
                        value={filter}
                        id="searchInputField"
                        type="text"
                        className="form-control relative flex-auto min-w-0 block px-0.5 py-1.5 text-base dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-600 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-400 focus:outline-none dark:placeholder-neutral-300"
                        placeholder="Search"
                        onKeyUp={() => {
                          filterData();
                        }}
                      />
                      <span className="search-count dark:text-neutral-300">
                        {searchData.length}
                      </span>
                    </div>
                    <button
                      onMouseDown={() => {
                        setFilter("");
                      }}
                      onMouseUp={() => {
                        filterData();
                      }}
                      className="btn relative px-6 py-2.5 bg-gray-300 dark:bg-neutral-600 text-gray-600 font-medium text-xs leading-tight uppercase hover:text-gray-800 focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center"
                      type="button"
                      id="clearSearch"
                      style={{
                        padding: "10px 10px",
                        maxWidth: "35px",
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
                    <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"></path>
                  </svg>
                    </button>
                    </span>
                    </span>
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
                <a className="ml-2 underline hover:no-underline" href="https://github.com/GSSoC24/Contributor/discussions/288" target="_blank" rel="noreferrer" >
                  More details about badges
                </a>
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
                          <React.Fragment key={i}>
                            {i % 2 ? (
                              <div
                                className="table-row"
                                role="checkbox"
                                aria-checked="false"
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
                                          className="w-9 cursor-pointer rounded-full m-auto bg-white"
                                          src={value}
                                          onClick={()=>{
                                            statsmodal(rows.indexOf(row))
                                          }}
                                          alt=""
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
                                      ) : column.id === "badge" ? (
                                        <div>
                                          {row["score"] >= 60 && (
                                            <>
                                          <Image
                                            src={
                                              row["score"] >= 5500 ? 
                                              column.badges[5500].badge
                                              : row["score"] >= 2500
                                              ? column.badges[2500].badge
                                              : row["score"] >= 1200
                                              ? column.badges[1200].badge
                                              : row["score"] >= 500
                                                ? column.badges[500].badge
                                                : row["score"] >= 300
                                                ? column.badges[300].badge
                                                : row["score"] >= 200
                                                ? column.badges[200].badge
                                                : row["score"] >= 140
                                                ? column.badges[140].badge
                                                : row["score"] >= 60 ?
                                                  column.badges[60].badge : "data:"
                                            }
                                            width={75}
                                            height={75}
                                            id={`badge-${i}`}
                                            alt=""
                                          />
                                          <Tooltip
                                            anchorSelect={`#badge-${i}`}
                                            place="right"
                                          >
                                            {
                                              row["score"] >= 5500 ? 
                                              column.badges[5500].name
                                              : row["score"] >= 2500
                                              ? column.badges[2500].name
                                              : row["score"] >= 1200
                                              ? column.badges[1200].name
                                              : row["score"] >= 500
                                                ? column.badges[500].name
                                                : row["score"] >= 300
                                                ? column.badges[300].name
                                                : row["score"] >= 200
                                                ? column.badges[200].name
                                                : row["score"] >= 140
                                                ? column.badges[140].name
                                                : row["score"] >= 60 ?
                                                  column.badges[60].name : "data:"
                                            }
                                          </Tooltip>
                                          </>
                                )}
                                        </div>
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
                                aria-checked="false"
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
                                          className="w-9 cursor-pointer rounded-full m-auto bg-white"
                                          src={value}
                                          onClick={()=>{
                                            statsmodal(rows.indexOf(row))
                                          }}
                                          alt=""
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
                                           
                                            className="no-underline username cursor-pointer"
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
                                      ) : column.id === "badge" ? (
                                        <div>
                                          {row["score"] >= 60 &&
                                          (
                                            <>
                                          <Image
                                            src={
                                              row["score"] >= 5500 ? 
                                              column.badges[5500].badge
                                              : row["score"] >= 2500
                                              ? column.badges[2500].badge
                                              : row["score"] >= 1200
                                              ? column.badges[1200].badge
                                              : row["score"] >= 500
                                                ? column.badges[500].badge
                                                : row["score"] >= 300
                                                ? column.badges[300].badge
                                                : row["score"] >= 200
                                                ? column.badges[200].badge
                                                : row["score"] >= 140
                                                ? column.badges[140].badge
                                                : row["score"] >= 60 ?
                                                  column.badges[60].badge : "data:"
                                            }
                                            width={75}
                                            height={75}
                                            id={`badge-${i}`}
                                            alt=""
                                          />
                                          <Tooltip
                                            anchorSelect={`#badge-${i}`}
                                            place="right"
                                          >
                                            {
                                              row["score"] >= 5500 ? 
                                              column.badges[5500].name
                                              : row["score"] >= 2500
                                              ? column.badges[2500].name
                                              : row["score"] >= 1200
                                              ? column.badges[1200].name
                                              : row["score"] >= 500
                                                ? column.badges[500].name
                                                : row["score"] >= 300
                                                ? column.badges[300].name
                                                : row["score"] >= 200
                                                ? column.badges[200].name
                                                : row["score"] >= 140
                                                ? column.badges[140].name
                                                : row["score"] >= 60 ?
                                                  column.badges[60].name : "data:"
                                            }
                                          </Tooltip>
                                          </>
                                )}
                                        </div>
                                      ) : (
                                        value
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </React.Fragment>
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
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={searchData.length}
                pageRangeDisplayed={width < 600 ? 3 : 5}
                onChange={(e) => {
                  // console.log(e);
                  handlePageChange(e);
                }}
              />
            </div>
            {theme === "dark" ? (
              <Modal
                isOpen={isOpen}
                onClose={handleClose}
                size="2xl"
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
                              id="avatarImage"
                              alt="Avatar Image"
                              src={avatar}
                              className="w-24 rounded-full xl:w-28"
                              onClick={()=>statsmodal(row)}
                            />
                            <p className="bg-orange-100 dark:bg-neutral-900 dark:text-white rounded-full p-3 text-center modal-score">
                              🏆 {score}
                            </p>
                          </div>
                          <div className="flex flex-wrap pt-4 gap-2">
                              {
                                badges.map((badge, i) => {
                                  return (
                                    <div key={i} className="relative w-auto group">
                                      <Image
                                        className="w-full h-auto opacity-100 transition-opacity duration-500 ease-in-out group-hover:opacity-50"
                                        src={badge.badge}
                                        width={70}
                                        height={70}
                                        id={`badge-${i}-${i}`}
                                        alt={`Badge ${i}`}
                                        onMouseOver={() => setImageClicked(true)}

                                      />
                                      {imageClicked && (
                                      <div className="opacity-0 transition-opacity duration-500 ease-in-out absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center group-hover:opacity-100">
                                        <div className="flex w-full space-x-2">
                                          <button
                                            onClick={() => createTemplate(badge.badge, "share", login , score , avatar , badge.name)}
                                            className="bg-gray-700 w-1/2 p-2.5 rounded-full"
                                            disabled={!imageClicked}
                                          >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" fill="#ffffff" viewBox="0 0 512 512"><path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/></svg>
                                          </button>
                                          <button
                                            onClick={() => createTemplate(badge.badge, "download", login , score , avatar , badge.name)}
                                            className="bg-blue-700 w-1/2 p-1 rounded-full"
                                            disabled={!imageClicked}
                                          >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px"  fill="#ffffff" viewBox="0 0 512 512"><path d="M376.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3c0-12.3-10-22.3-22.3-22.3H304V160c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32v96H150.3C138 256 128 266 128 278.3c0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z"/></svg>
                                          </button>
                                        </div>
                                      </div>
                                      )}
                                    </div>
                                  );
                                })
                              }
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
                    <div className="flex-auto py-2 px-4 overflow-y-auto">
                      <div id="alert-dialog-slide-description">
                          <div style={{ display: "flex", alignItems: "center" }}>
                            <img
                              alt="Suvraneel Bhuin"
                              src={avatar}
                              className="w-24 rounded-full xl:w-28"
                              onClick={()=>statsmodal(row)}

                            />
                            <p className="bg-orange-100 dark:bg-neutral-900 dark:text-white rounded-full p-3 text-center modal-score">
                              🏆 {score}
                            </p>
                          </div>
                          <div className="flex flex-wrap pt-4 gap-2">
                              {
                                badges.map((badge, i) => {
                                  return (
                                    <div key={i} className="relative w-auto group">
                                      <Image
                                        className="w-full h-auto opacity-100 transition-opacity duration-500 ease-in-out group-hover:opacity-50"
                                        src={badge.badge}
                                        width={70}
                                        height={70}
                                        id={`badge-${i}-${i}`}
                                        alt={`Badge ${i}`}
                                        onMouseOver={() => setImageClicked(true)}

                                      />
                                      {imageClicked && (
                                      <div className="opacity-0 transition-opacity duration-500 ease-in-out absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center group-hover:opacity-100">
                                        <div className="flex w-full space-x-2">
                                          <button
                                            onClick={() => createTemplate(badge.badge, "share", login , score , avatar , badge.name)}
                                            className="bg-gray-700 w-1/2 p-2.5 rounded-full"
                                            disabled={!imageClicked}
                                          >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" fill="#ffffff" viewBox="0 0 512 512"><path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/></svg>
                                          </button>
                                          <button
                                            onClick={() => createTemplate(badge.badge, "download", login , score , avatar , badge.name)}
                                            className="bg-blue-700 w-1/2 p-1 rounded-full"
                                            disabled={!imageClicked}
                                          >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px"  fill="#ffffff" viewBox="0 0 512 512"><path d="M376.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3c0-12.3-10-22.3-22.3-22.3H304V160c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32v96H150.3C138 256 128 266 128 278.3c0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z"/></svg>
                                          </button>
                                        </div>
                                      </div>
                                      )}
                                    </div>
                                  );
                                })
                              }
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
