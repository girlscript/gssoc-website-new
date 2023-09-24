import React, { useState } from "react";
import { schedData } from "../pages/api/scheduleData";
import ScheduleRow from "./scheduleRow";
function Schedule() {
  const [data] = useState(schedData);
  return (
    <div>
      <div className="p-4 mb-10 flex flex-col">
        <h1 className="text-4xl text-center  w-fit  ml-50 md:w-2/5 md:text-right dark:text-white text-gray-800 font-semibold mb-6">
          <span className="text-primary_orange-0 lg:dark:bg-darkmode_gray-0 lg:bg-white text-4xl 2.25rem 3rem pl-10 py-5">
            Schedule{" "}
          </span>
          <span className="md:dark:bg-darkmode_gray-0 lg:bg-white pr-10 py-5">
            of GSSoC 2023!
          </span>
        </h1>
        <div data-aos="zoom-out" className="container">
          <div className="flex flex-col md:grid grid-cols-12 text-gray-50 cursor-default">
            {data.map((curElem, i) => {
              return <ScheduleRow key={i} curElem={curElem} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
