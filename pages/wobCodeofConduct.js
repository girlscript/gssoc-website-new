import { useState, React } from "react";
import Head from "next/head";
import wobCoCData from "./api/wobcodeofconductData";
const Content = () => {
  return (
    <>
      <Head>
        <title>
          Code of Conduct | GirlScript Winter of Blockchain | GirlScript
          Foundation India
        </title>
        <meta
          name="description"
          content="GirlScript Winter of Blockchain Certificates"
        />
      </Head>
      <div className="w-full flex items-center justify-center gap-[2px]">
          <div className="flex-grow pt-2 flex items-center justify-start">
            <div className="h-0 w-full rounded-md bg-gradient-to-r from-[#00008B] to-[#ADD8E6] p-[2px]" />
          </div>
          <h1 className="m-0 text-4xl sm:text-5xl font-semibold text-transparent bg-gradient-to-r from-[#00008B] to-[#ADD8E6] bg-clip-text">
            Code of&nbsp; Conduct
          </h1>
          <div className="flex-grow flex pt-2 items-center justify-end">
            <div className="h-0 w-full rounded-md bg-gradient-to-r from-[#00008B] to-[#ADD8E6] p-[2px]" />
          </div>
        </div>
      <div className="container transition-colors mx-auto mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-12 lg:px-40 2xl:px-50 dark:bg-darkmode_gray-0 dark:transition-colors ">
        

        {wobCoCData
          .filter((data) => {
            return data;
          })
          .map((data, j) => {
            return (
              <div className="container" key={j}>
                <div className="flex flex-col md:grid grid-cols-13 text-gray-50">
                  <div className="flex md:contents">
                    <div className="list relative mb-10">
                      <span className="absolute z-[1] bg-[#527ABD] px-7 py-2 rounded-full font-serif text-xl">
                        {j + 1}
                      </span>
                      <h3 className="relative mt-5 ml-5 bg-[#DBF6FF] text-[#50508E] dark:bg-code_of_conduct-0 dark:text-white shadow-xl rounded-lg px-5 py-8 font-serif text-xl">
                        {data.head}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Content;
