import Head from "next/head";
import React, { useState } from "react";
import { accordionData } from "./api/FAQdata";
import DiabloAccordion from "../components/diabloAccordion";

function Faq() {
  const [data] = useState(accordionData);

  return (
    <>
      <Head>
        <title>
          FAQs | GirlScript Summer of Code 2024 | GirlScript Foundation India
        </title>
        <meta name="description" content="FAQs of GirlScript Summer of Code" />
      </Head>
      <>
      <div className="flex flex-row dark:text-white font-sans text-3xl md:text-5xl text-center font-extrabold flex-wrap justify-center items-center">
       <h1 className=" underline">
       <span style={{ color:'#f97316' }}>Frequently Asked Questions</span>
        </h1>
      <h1 className="">(FAQs)</h1>
      </div>


        <div className="flex flex-col w-full justify-center px-16 mt-20 mb-10">
          {data.map((curElem) => (
            <DiabloAccordion key={curElem.id} {...curElem} />
          ))}
        </div>
      </>
    </>
  );
}

export default Faq;
