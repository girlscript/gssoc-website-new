import Link from "next/link";

function UnderConstruction() {
  let random_index = Math.floor(Math.random() * 5);
  const reviews = [
    {
      review:
        "While working with GirlScript Foundation I saw a team that worked very hard, with unbelievable dedication and that has inspired me a lot. It is rightly said that hard work is the stepping stone to success. The team has done effortless work in generating awareness about tech equality and spreading knowledge .I am very sure that they will double their success in half the time! Cheers to GirlScript Foundation!",
      author: "Rahilsha Diwan",
    },
    {
      review:
        "Transitioning from the first nervous event to organizing such events back to back, simply because it was so much fun, I got to learn a lot over those few months - a lot not just about event organization, teamwork or leadership, but also a lot about myself. More than this growing experience, the two things which made these experiences more than worth it the immense support and guidance. Thank GirlScript India for helping me achieve more than I ever thought of.",
      author: "Manvi Singhwal",
    },
    {
      review:
        "I feel Girlscript is the only organisation of its kind which works both for curbing down the gap of uneven distribution of techphilic environment in society and at the same time promotes, share and spread knowledge without any condition equally. I'm glad to be a part of the organisation and also work and upheld it's motto in near future.",
      author: "Manthan Ojha",
    },
    {
      review:
        "GirlScript Foundation is the biggest inspiration one can get to continue following their dreams and never give up on their goals. GirlScript has expanded a lot of chapters into numerous cities in a very short period of time. When I worked with the GirlScript Foundation, I saw a team that  worked very hard, with unbelievable dedication and that has inspired me a lot.",
      author: "Samyuktha Prabhu",
    },
    {
      review:
        "GirlScript Foundation is one of the greatest platform with vast network across India and tons of opportunities. I recently joined GirlScript as a Chapter leader of Mangalore. The activities that were taking place inspired me and kept motivated me to join GirlScript.Also, I am sure that if the same value based approach is carried on then there is no doubt of GirlScript's success in a shorter period of time.",
      author: "Vineet Nayak",
    },
  ];
  return (
    <div className="h-[100vh] md:h-[100vh] py-5 flex flex-col items-center justify-between md:justify-center px-2">
      <div className="text__container">
        <h1 className="text-3xl dark:text-white text-gray-900 font-sans">
          <span className="bg-gradient-to-r bg-clip-text text-transparent text-4xl from-[#00008B] to-[#85C6DC]">WOB</span> Coming soon 🚧
        </h1>
      </div>
      <div className="redirect__container flex mt-10">
        <Link href="/">
          <p className="text-2xl dark:text-white font-serif text-center cursor-pointer mb-5 md:mb-10">
            Meanwhile you can hangout at our{" "}
            <span className="text-[#85C6DC] ">awesome GSSoC Homepage</span>
          </p>
        </Link>
      </div>
      <div className="review__container md:w-1/2 font-sans italic dark:bg-gray-800 bg-[#ADD8E6] px-5 py-5 rounded-xl">
        <p className="dark:text-white text-[#00008B] ">
          {reviews[random_index].review}
        </p>
        <p className="dark:text-[#23A3CD] text-black text-right">
          {"- "}
          {reviews[random_index].author}
        </p>
      </div>
    </div>
  );
}

export default UnderConstruction;
