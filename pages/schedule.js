import Head from "next/head";
import Schedule from "../components/ScheduleMap";

function schedule() {
  return (
    <div>
      <Head>
        <title>
          Schedule | GirlScript Summer of Code 2024 | GirlScript Foundation India
        </title>
        <meta
          name="description"
          content="Schedule of GirlScript Summer of Code"
        />
        {/* <link
          rel="icon"
          href="https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png"
        /> */}
      </Head>
      <div className="hidden lg:block 3xl:hidden">
        <div className="hor absolute top-32 left-0 right-0">
          <img
            src="https://user-images.githubusercontent.com/64256342/153624332-dee821db-58d5-4aa2-bcd4-7ecdd76d4e76.svg"
            alt="line"
          />
        </div>
        {/* <div className="absolute left-[16.35rem] top-0">
          <img
            src="https://user-images.githubusercontent.com/64256342/153626648-efc6d52f-38fa-4248-ab00-961b6da78a34.svg"
            alt="line"
          />
        </div> */}
      </div>
      <div>
        <div className="relative">
          <Schedule />
        </div>
      </div>
    </div>
  );
}

export default schedule;
