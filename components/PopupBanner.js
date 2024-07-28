import React from "react";
import Image from "next/image";
import Link from "next/link";

const PopupBanner = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg relative shadow-lg text-center animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-center h-7 w-7 text-2xl"
        >
          &times;
        </button>
        <Image
          src="/postman_challenge.png"
          alt="Postman Challenge"
          width={600}
          height={300}
          className="rounded-lg"
        />
        <div className="mt-4">
          <p className="text-2xl font-bold text-orange-600">
            Postman Challenge is live now!!!
          </p>
          <p className="text-lg text-gray-700">
            Get Postman Badge +500 points on GSSoC Leaderboard
          </p>

          <div className="mt-4 gap-5 flex max-md:flex-col w-full items-center justify-center">
            <a
              className=""
              href="https://www.postman.com/student-program/student-expert/?utm_campaign=PTS&utm_medium=referral&utm_source=external&utm_term=girlscript&utm_content=gssoc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                id="CTA-button"
                data-aos="fade-down"
                className=" bg-gradient-to-b w-full from-primary_orange-0 to-orange-600 text-md text-white font-semibold px-4 py-4 rounded-2xl md:text-2xl md:py-2 hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600"
              >
                Register Here
              </button>
            </a>
            <a
              className=""
              href="https://gssoc24.github.io/Postman-Challenge/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                id="CTA-button"
                data-aos="fade-down"
                className=" bg-gradient-to-b w-full from-primary_orange-0 to-orange-600 text-md text-white font-semibold px-4 py-4 rounded-2xl md:text-2xl md:py-2 hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600"
              >
                Documentation Help
              </button>
            </a>
          </div>
          <div className="flex flex-row gap-4 mt-5 max-w-36 m-auto">
            <a
              href="https://www.linkedin.com/company/postman-platform/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-[36px] h-[36px]"
                src="/LinkedInIcon.png"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://x.com/getpostman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-[36px] h-[36px]"
                src="/TwitterIcon.png"
                alt="Twitter"
              />
            </a>
            <a
              href="https://www.instagram.com/getpostman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-[36px] h-[36px]"
                src="/instagramlogo.png"
                alt="instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupBanner;
