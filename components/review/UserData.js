import React from "react";

function UserData({ user, onUpdate }) {
  const data = user;
  let sNo = 1;
  const transformPRData = (prs) => {
    return prs?.reduce((acc, pr) => {
      const repoIndex = acc.findIndex((item) => item.repo === pr.repo);
      if (repoIndex !== -1) {
        acc[repoIndex].data.push(pr);
      } else {
        acc.push({ repo: pr.repo, data: [pr] });
      }
      return acc;
    }, []);
  };
  const transformedData = transformPRData(data.pullRequests);
  return (
    <div>
      <div className="w-[95%] m-auto flex  p-4 justify-evenly rounded-lg ">
        <h1 className="text-black text-xl font-semibold ">{data.username}</h1>
        <p className="text-black text-xl font-semibold">
          Last Updated:{" "}
          <span className="text-black text-lg font-normal">
            {data.lastUpdated || "Never"}
          </span>
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-800 w-[130px] h-[40px] rounded-lg text-white font-semibold"
          onClick={onUpdate}
        >
          Update Now
        </button>
      </div>
      <div>
        <h2 className="text-black text-xl font-semibold text-center">
          Pull Requests
        </h2>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Repo</th>
              <th>Title</th>
              <th>Labels</th>
              <th>Merged</th>
            </tr>
          </thead>
          <tbody>
            {transformedData.map((repoData, repoIndex) => {
              return repoData.data.map((pr, prIndex) => (
                <React.Fragment key={`${repoIndex}-${prIndex}`}>
                  {prIndex === 0 && repoIndex !== 0 && (
                    <tr className="separator">
                      <td colSpan="2"></td>
                    </tr>
                  )}
                  <tr>
                    {prIndex === 0 && (
                      <td rowSpan={repoData.data.length}>{sNo++}</td>
                    )}
                    {prIndex === 0 && (
                      <td rowSpan={repoData.data.length}>
                        <a
                          className="hover:underline"
                          href={pr.repo_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {repoData.repo}
                        </a>
                      </td>
                    )}
                    <td>
                    <span className="mr-2">{prIndex+1}</span>
                      <a
                        className="hover:underline"
                        href={pr.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {pr.title}
                      </a>
                    </td>
                    <td>{pr.labels.join(", ")}</td>
                    <td>
                      {pr.merged
                        ? new Date(pr.merged).toLocaleString()
                        : "Not Merged"}
                    </td>
                  </tr>
                </React.Fragment>
              ));
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserData;
