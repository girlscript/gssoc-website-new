import Head from "next/head";
function info() {
  return (
    <div>
      <Head>
        <title>
        How GSSoC Works? | GirlScript Summer of Code 2024 | GirlScript Foundation India
        </title>
        <meta name="description" content="GirlScript Summer of Code Certificates" />
      </Head>
      <div className="container transition-colors mx-auto mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-12 lg:px-40 2xl:px-50 dark:bg-darkmode_gray-0 dark:transition-colors ">
        <div className="items-center justify-center">
          <div className="font-sans text-center text-2xl font-extrabold">
            <p className="text-black dark:text-white text-4xl text center font-extrabold mb-10 underline underline-offset-4 decoration-primary_orange-0">
              What {""}
              <span className="text-primary_orange-0">they</span> do?
            </p>
          </div>
        </div>
        <div className="first-section mb-10 flex flex-col md:flex-row justify-between flex-auto items-center flex-wrap mb-24">
          <div data-aos="flip-left" data-aos-duration="500">
            <img
              src="https://raw.githubusercontent.com/girlscript/gssoc-assets/07bf179210769ea9a280f7e87e1f6e5cdc464953/Info/Triangle.svg"
              // height="453"
              // width="320"
              alt="Rectangle light"
            />
          </div>
          <div className="basis-full mt-4 md:basis-6/12 md:order-last lg:basis-1/2 lg:order-last relative">
            <div className="text-black dark:text-white font-medium text-lg 2.25rem 3rem mb-5 font-sans">
              <ul className="list-disc">
                <li>
                <strong className="text-blue-500 text-2xl">Project Admins</strong> own the projects where the contributors are
                  free to contribute in the form of documentation, bug fixes or
                  adding new features.
                </li>
                <li>
                  PAs have to routinely connect with mentors to discuss about
                  the progress, proceedings &amp; future vision of the project.
                </li>
                <li>
                  PAs are responsible for final reviews, merging PRs, assigning
                  labels, guiding the mentors in the review process &amp;
                  resolving doubts in server.
                </li>
              </ul>
            </div>

            <div className="text-black dark:text-white font-medium text-lg 2.25rem 3rem mb-5 font-sans">
              <ul className="list-disc">
                <li>
                <strong className="text-green-500 text-2xl">Mentors</strong> review the Pull Requests, check for plagiarism, and
                  suggest changes based on the project&apos;s Contribution
                  guidelines.
                </li>
                <li>
                  They solve queries, debug issues faced by contributors &amp;
                  are responsible for guiding contributors actively throughout
                  the program.{" "}
                </li>
              </ul>
            </div>

            <div className="text-black dark:text-white font-medium text-lg 2.25rem 3rem mb-5 font-sans">
              <ul className="list-disc">
                <li>
                <strong className="text-yellow-500 text-2xl">Contributors</strong> should feel free to ask their doubts within the
                  GSSoC server/Github project repositories.
                </li>
                <li>
                  Contributors actively and consistently contribute to the
                  projects after they&apos;re assigned to a particular issue by
                  a PA/mentor.
                </li>
                <li>
                  The contributors are free to choose &amp; contribute to
                  multiple projects but they need to submit PRs to the assigned
                  issues within the fixed time bar set by the particular
                  project; failing to do so shall result in reassigning of the
                  issue to someone else.{" "}
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div className="items-center justify-center">
          <div className="font-sans text-center text-2xl font-extrabold text-black-100">
            <p className="text-black dark:text-white text-4xl text center font-extrabold mb-10 underline underline-offset-4 decoration-primary_orange-0">
              <span className="text-primary_orange-0">How&nbsp;</span>
              they do ?
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around flex-wrap sm:flex-wrap mb-28">
        <div className="flex flex-col justify-around align-center items-center sm:flex-col">
          <div className="flex flex-col text-white dark:text-gray-800 text-2xl font-bold text-center bg-primary_orange-0 p-4 rounded-lg max-w-[29rem] w-full">
            Contributors
          </div>
          <div className="flex" data-aos="flip-left" data-aos-duration="700">
            <img
              src="https://raw.githubusercontent.com/girlscript/gssoc-assets/8eba35cb8c2fefb3c64cc489d191c4f5a8e4d5a6/Logos/participantinfo.svg"
              // height="453"
              // width="320"
              alt="Rectangle light"
            />
          </div>
        </div>
        <div className="flex flex-col justify-evenly align-center items-center sm:flex-col mt-5">
          <div className="flex m-auto flex-col text-white dark:text-gray-800 text-2xl font-bold text-center bg-primary_orange-0 p-4 mb-6 rounded-lg max-w-[29rem] w-full">
            Mentors
          </div>
          <div className="flex" data-aos="flip-left" data-aos-duration="700">
            <img
              src="https://raw.githubusercontent.com/girlscript/gssoc-assets/b30ac90ea12dc937c2aa57c77e1dbe904b83d0dd/Logos/mentors-info.svg"
              // height="483"
              // width="320"
              alt="Rectangle light"
            />
          </div>
          <div className="flex flex-col text-white dark:text-gray-800 text-2xl font-bold text-center bg-primary_orange-0 p-4 mb-6 rounded-lg max-w-[29rem] w-full">
            Project Admin
          </div>
          <div className="flex" data-aos="flip-left" data-aos-duration="700">
            <img
              className="h-0 w-0 dark:h-full dark:w-full invisible dark:visible"
              src="https://raw.githubusercontent.com/girlscript/gssoc-assets/736b2e588142af26560791b90ee898b6de44bead/Logos/projectadmin.svg"
              // height="453"
              // width="320"
              alt="Rectangle light"
            />
            <img
              className="dark:hidden"
              src="https://raw.githubusercontent.com/girlscript/gssoc-assets/cbfaa0b0ff78f8fd0cf01a6b966ce6dc18271249/Logos/projectadmins.svg"
              // height="453"
              // width="320"
              alt="Rectangle light"
            />
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col">
       <div className="flex flex-row justify-around align-center items-center">
        <div className="flex flex-start text-black bg-primary_orange-0 p-3 rounded-lg ">Participants</button>
        <button className="flex flex-start text-black bg-primary_orange-0 p-3 rounded-lg ">Mentors</button>
       </div>  
       <div className="flex justify-around flex-row ">
          <div className="flex p-8">
            <div className="flex" data-aos="flip-left" data-aos-duration="700">
              <img
                src="https://raw.githubusercontent.com/girlscript/gssoc-assets/8eba35cb8c2fefb3c64cc489d191c4f5a8e4d5a6/Logos/participantinfo.svg"
                // height="453"
                // width="320"
                alt="Rectangle light"
              />
            </div>
            <div data-aos="flip-left" data-aos-duration="700">
              <img
                src="https://raw.githubusercontent.com/girlscript/gssoc-assets/b30ac90ea12dc937c2aa57c77e1dbe904b83d0dd/Logos/mentors-info.svg"
                // height="453"
                // width="320"
                alt="Rectangle light"
              />
            </div>
          </div>
       </div>
      </div> */}
    </div>
  );
}

export default info;
