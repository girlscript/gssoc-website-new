import { useEffect, useState } from "react";
import Head from "next/head";
import Confetti from "react-confetti";
import { SkeletonCircle,SkeletonText } from "@chakra-ui/react";
import Pagination from "react-js-pagination";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useCallback } from "react";
const columns = [
    { id: "reposiory", label: "Reposiory", minWidth: 50 },
    { id: "title", label: "Title", minWidth: 170 },
    // { id: "commits", label: "Commits", minWidth: 50 },
    { id: "mergedAt", label: "Merged At", minWidth: 50 },
    { id: "Related Issue", label: "Related Issue", minWidth: 50 },
   
]

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

function pullrequestProfile() {
    const [username,setUsername] = useState("Vyomrana02") ;
    const { theme } = useTheme();
    const[searchData,setSearchData] = useState([])
    const [datas,setDatas] = useState([])
    let [showConfetti, setShowConfetti] = useState(false);
    let [isLoading, setIsLoading] = useState(false);
    let [isLboardLoading,setIsLboardLoading] = useState(false);
    let [lastupdated, setLastupdated] = useState("");
    const [activePage, setActivePage] = useState(1);
    const { height, width } = useWindowDimensions();

    useEffect(()=>{
      // setUsername(window.location.href.substring(window.location.href.lastIndexOf('/') + 1))
      // console.log(window.location.href.substring(window.location.href.lastIndexOf('/') + 1))
      // console.log(username)
        const url = `https://api.github.com/search/issues?q=type:pr+author:${window.location.href.substring(window.location.href.lastIndexOf('/') + 1)}+is:merged+closed:2024-05-10..2024-08-10+label:gssoc&per_page=100`;
  
        const headers = {
          Authorization: `YOUR_TOKEN`,
          Accept: 'application/vnd.github.v3+json',
        };
        try {
          const response = fetch(url, { headers })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`GitHub API error: ${response.status}`);
            }
            setActivePage(1)
            const tempData = response.json();
            tempData.then((data)=> {console.log(data.items); setSearchData(data.items); isLboardLoading=true})
            // console.log(response.json())
            // setSearchData([])
            // console.log(searchData)
          })
        } catch (error) {
          console.log("Trying Out....")
        }
      
    },[])

    useEffect(() => {
      if ((activePage - 1) * 50 + 50 < searchData.length) {
        setDatas(
          searchData.slice((activePage - 1) * 50, (activePage - 1) * 50 + 50)
        );
      } else {
        setDatas(searchData.slice((activePage - 1) * 50));
      }
    }, [activePage, searchData]);

    const handlePageChange = (pageNumber) => {
      // console.log(`active page is ${pageNumber}`);
      setActivePage(pageNumber);
    };


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
        //   {showConfetti && <Confetti className="fullscreen" />}
    )}
        <div
        className="container transition-colors mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-10 lg:px-20 2xl:px-32 dark:bg-darkmode_gray-0 dark:transition-colors "
        style={{ margin: "auto" }}
      />
        <div className="items-center justify-center">
          <div className="font-sans text-center text-2xl font-extrabold">
            <div className="text-black dark:text-white text-4xl text center font-extrabold mb-10 underline underline-offset-4 decoration-primary_orange-0">
              <span className="text-primary_orange-0"> GSSoC 2024 </span>
              {/* Top Performers */}
            </div>
          </div>
        </div>

        <div className="py-5 px-0 xl:pb-12 xl:px-24 xl:pt-0 text-center">
              <div className="flex md:flex-row justify-center gap-y-1 gap-x-1 md:gap-x-2 items-center my-10">
                <div className="bg-white shadow-2xl dark:bg-black rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4  relative inline-block w-28 md:w-auto">
                  {datas === undefined && (
                    <>
                      <SkeletonCircle className="skeleton-circle-lg" />
                      <SkeletonText mt="4" noOfLines={1} spacing="4" />
                    </>
                  )}
  
                  {datas !== undefined && (
                    <>
                      <img
                        className="w-12 md:w-16 lg:w-40 rounded-full m-auto bg-white"
                        src={
                          datas && 
                          datas[0]?.user !== undefined
                            ? datas[0].user.avatar_url
                            : null
                        }
                      />
                      <FontAwesomeIcon
                        className="invisible lg:visible w-10 h-10 rounded-full border-5 border-white absolute bottom-1/4 right-1/4 bg-cyan-200 inline-block"
                        icon={faGithub}
                        size="3x"
                      />
                      <h3 className="text-black dark:text-primary_orange-0 font-semibold mt-4 text-xs sm:text-sm md:text-md">
                        {datas !== undefined ?  datas[0]?.user.login : null}
                      </h3>
                    </>
                  )}
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
              <div className="w-full overflow-x-auto">
                <div className="table w-full">
                  <div className="table-header-group ">
                    <div className="table-row">
                      {columns.map((column) => (
                        <div
                          className="table-cell font-serif px-4 py-4 bg-black text-white dark:bg-primary_orange-0 dark:text-black"
                          key={column.id}
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
                        {datas?.map((i) => {
                            return (
                              <div className="table-row">
                              <div className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-neutral-900 dark:text-white font-medium"><a href={i.html_url.split('/').slice(0, 5).join('/')} target="_blank">{i.repository_url.substring(i.repository_url.lastIndexOf('/') + 1)}</a></div>
                              <div className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-neutral-900 dark:text-white font-medium">{i.title}</div>
                              <div className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-neutral-900 dark:text-white font-medium">{ new Date(i.pull_request.merged_at).toLocaleDateString('en-IN', {
                                        // dateStyle: 'medium',
                                        day: '2-digit',
                                        month: 'short',
                                        year: '2-digit',
                                    })}</div>
                                    <div className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-neutral-900 dark:text-white font-medium"><a href={i.html_url} target="_blank">#{i.url.substring(i.url.lastIndexOf('/') + 1)}</a></div>
                              </div>
                            )
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
                  // console.log(e);
                  handlePageChange(e);
                }}
              />
            </div>
            </div>
        </>
    )
}
export default pullrequestProfile;