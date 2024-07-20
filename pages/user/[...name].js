
import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Skeleton,
  Stack,
} from "@chakra-ui/react";
const columns = [
  { id: "No", label: "No", minWidth: 50 },
  { id: "Repository", label: "Repository", minWidth: 50 },
  { id: "Title", label: "Title", minWidth: 170 },

  {
    id: "Level",
    label: "Level",
    minWidth: 100,
    align: "center",
  },
  {
    id: "Commits",
    label: "Commits",
    minWidth: 100,
    align: "right",
  },
  {
    id: "Comments",
    label: "Comments",
    minWidth: 100,
    align: "right",
  
  },
  {
    id: "Merged",
    label: "Merged At",
    minWidth: 100,
    align: "right"
  },
  {
    id: "Related",
    label: "Related Issues",
    minWidth: 100,
    align: "right"
  }
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
export default function Stats() {
    const { theme } = useTheme();
    let [time,setTime]=useState('')
    let [rows,setRows]=useState([])
    let [totalData, setTotalData] = useState([]);
    let [login, setLogin] = useState("");
    let [avatar, setAvatar] = useState("");
    let [isLboardLoading, setIsLboardLoading] = useState(false);
    const [activePage, setActivePage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(50);
    useEffect(()=>{
      let data=JSON.parse(localStorage.getItem('data'))
      console.log(data)
      data.map((d)=>{
        fetchPRDetails(d)
      })
      setLogin(localStorage.getItem('login'))
      setAvatar(localStorage.getItem('avatar'))
      setTime(localStorage.getItem('time'))

    },[])
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
         
          setTotalData((prev)=>[...prev,arr]);
          setRows((prev)=>[...prev,arr])
          return arr
        } catch (error) {
          console.error(`Error fetching PR details: ${error.message}`);
          return null;
        }
      }
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
  
      const handlePageChange = (pageNumber) => {
        // console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber);
      };
    
    
  return (
    <>
    
    <div
        className="container transition-colors mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-10 lg:px-20 2xl:px-32 dark:bg-darkmode_gray-0 dark:transition-colors "
        style={{ margin: "auto" }}
      >
        <div className="items-center justify-center">
          <div className="font-sans text-center text-2xl font-extrabold">
            <div className="text-black  dark:text-white flex flex-col text-4xl text center font-extrabold mb-10 underline underline-offset-4 decoration-primary_orange-0">
             <img width={'100px'} height={'100px'} className="m-auto rounded-full" src={avatar}></img>
             <span className="text-gray-500 text-lg font-semibold "><i>{time}</i></span>
             <p>
              <span className="text-primary_orange-0"> {login} </span>
              Stat&apos;s
              </p> 
            </div>
          </div>
        </div>
        <div>
          {/* <Backdrop className={classes.backdrop} open={openn}>
            <CircularProgress color="inherit" />
          </Backdrop> */}
          <div className="py-5 px-0 xl:pb-12 xl:px-24 xl:pt-0 text-center">
            

          

            {/* <Paper> */}
            <div className=" max-h-[100vh] w-full overflow-x-auto" /*component={Paper}*/>
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
                                    <div
                                      className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-neutral-900 dark:text-white font-medium"
                                      key={'sdsdsd'}
                                      // align={column.align}
                                      style={{ verticalAlign: "middle" }}
                                    >
      {i+1}                                    </div>
      <div
                                      className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-neutral-900 dark:text-white font-medium"
                                      key={'sdsdsd'}
                                      // align={column.align}
                                      style={{ verticalAlign: "middle" }}
                                    >
      {row[7]}                                    </div> <div
                                      className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-neutral-900 dark:text-white font-medium"
                                      key={'sdsdsd'}
                                      // align={column.align}
                                      style={{ verticalAlign: "middle" }}
                                    >
     {row[0]}                                    </div> <div
                                      className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-neutral-900 dark:text-white font-medium"
                                      key={'sdsdsd'}
                                      // align={column.align}
                                      style={{ verticalAlign: "middle" }}
                                    >
      {row[1]}                                    </div> <div
                                      className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-neutral-900 dark:text-white font-medium"
                                      key={'sdsdsd'}
                                      // align={column.align}
                                      style={{ verticalAlign: "middle" }}
                                    >
      {row[2]}                                    </div> <div
                                      className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-neutral-900 dark:text-white font-medium"
                                      key={'sdsdsd'}
                                      // align={column.align}
                                      style={{ verticalAlign: "middle" }}
                                    >
     {row[3]}                                   </div> <div
                                      className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-neutral-900 dark:text-white font-medium"
                                      key={'sdsdsd'}
                                      // align={column.align}
                                      style={{ verticalAlign: "middle" }}
                                    >
      {row[4]}                                   </div> 
      <div
                                      className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-neutral-900 dark:text-white font-medium"
                                      key={'sdsdsd'}
                                      // align={column.align}
                                      style={{ verticalAlign: "middle" }}
                                    >
          <a target="_blank" rel="noreferrer"  className="text-green-500 text-center" href={row[5]}>{row[6]}</a>                              </div> 
                               
                              </div>
                            ) : (
                              <div
                              className="table-row"
                              role="checkbox"
                              aria-checked="false"
                              tabIndex={-1}
                              key={row.username}
                            >
                                  <div
                                    className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-[#262323] dark:text-white font-medium"
                                    key={'sdsdsd'}
                                    // align={column.align}
                                    style={{ verticalAlign: "middle" }}
                                  >
    {i+1}                                    </div>
    <div
                                    className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-[#262323] dark:text-white font-medium"
                                    key={'sdsdsd'}
                                    // align={column.align}
                                    style={{ verticalAlign: "middle" }}
                                  >
    {row[7]}                                    </div> <div
                                    className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-[#262323] dark:text-white font-medium"
                                    key={'sdsdsd'}
                                    // align={column.align}
                                    style={{ verticalAlign: "middle" }}
                                  >
   {row[0]}                                    </div> <div
                                    className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-[#262323] dark:text-white font-medium"
                                    key={'sdsdsd'}
                                    // align={column.align}
                                    style={{ verticalAlign: "middle" }}
                                  >
    {row[1]}                                    </div> <div
                                    className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-[#262323] dark:text-white font-medium"
                                    key={'sdsdsd'}
                                    // align={column.align}
                                    style={{ verticalAlign: "middle" }}
                                  >
    {row[2]}                                    </div> <div
                                    className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-[#262323] dark:text-white font-medium"
                                    key={'sdsdsd'}
                                    // align={column.align}
                                    style={{ verticalAlign: "middle" }}
                                  >
   {row[3]}                                   </div> <div
                                    className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-[#262323] dark:text-white font-medium"
                                    key={'sdsdsd'}
                                    // align={column.align}
                                    style={{ verticalAlign: "middle" }}
                                  >
    {row[4]}                                   </div> 
    <div
                                    className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-[#262323] dark:text-white font-medium"
                                    key={'sdsdsd'}
                                    // align={column.align}
                                    style={{ verticalAlign: "middle" }}
                                  >
        <a target="_blank"  rel="noreferrer" className="text-green-500 text-center" href={row[5]}>{row[6]}</a>                              </div> 
                             
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
           
           
          </div>
          {/* <div className="pagination-holder">
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
                  handleItemsPerPageChange(e);
                }}
              />
            </div> */}
        </div>
      </div>
      
  </>
  )
}
