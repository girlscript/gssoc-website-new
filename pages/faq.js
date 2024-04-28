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
          FAQs | GirlScript Summer of Code 2023 | GirlScript Foundation India
        </title>
        <meta name="description" content="FAQs of GirlScript Summer of Code" />
      </Head>
      <>
        <div className="dark:text-white font-sans text-3xl md:text-5xl text center font-extrabold flex wrap justify-center flex-col md:flex-row underline decoration-orange-500  underline-offset-8">
          <h1 className="text-primary_orange-0">
            Frequently Asked Questions&nbsp;
          </h1>
          <h1>(FAQs) </h1>
        </div>
        <div className="flex md:gap-1 w-full justify-center px-16 mt-20 mb-10">
          <div className="w-1/2">
            {data.slice(0, Math.ceil(data.length / 2)).map((curElem) => (
              <DiabloAccordion key={curElem.id} {...curElem} />
            ))}
          </div>
          <div className="w-1/2">
            {data
              .slice(Math.ceil(data.length / 2), data.length)
              .map((curElem) => (
                <DiabloAccordion key={curElem.id} {...curElem} />
              ))}
          </div>
        </div>
      </>
    </>
  );
}

export default Faq;
