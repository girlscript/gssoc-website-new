import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Email from "../components/IconAssets/Email";
import Facebook from "../components/IconAssets/Facebook";
import Instagram from "../components/IconAssets/Instagram";
import LinkedIn from "../components/IconAssets/LinkedIn";
import Location from "../components/IconAssets/Location";
import TelePhone from "../components/IconAssets/TelePhone";
import Twitter from "../components/IconAssets/Twitter";
import Input from "../components/Input";
import Head from "next/head";

function WobContact() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    isWob: true
  });

  const handleInputChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(data);
      const result = await axios.post("/api/email/send-email", data);
      if (result.error) {
        console.error(result.error);
        return;
      }
      alert("Message Sent!");
      setData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email");
    }
  };

  return (
    <>
      <Head>
        <title>
          Contact | GirlScript Winter of Blockchain 2024 | GirlScript Foundation
          India
        </title>
        <meta
          name="description"
          content="GirlScript Winter of Blockchain Contact"
        />
        <link rel="icon" href="/WoB/Favicon.ico" />
      </Head>

      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-spacing {
          line-height: 1.7; /* Adjust this value to increase or decrease spacing */
        }

        .animated-text {
          animation: fadeInDown 3s ease-in-out;
        }
      `}</style>
      <div className="w-full flex items-center mb-7 justify-center gap-[2px]">
        <div className="flex-grow pt-2 flex items-center justify-start">
          <div className="h-0 w-full rounded-md bg-gradient-to-r animated-text from-[#00008B] to-[#ADD8E6] p-[2px]" />
        </div>
        <h1 className="m-0 text-4xl sm:text-5xl font-semibold animated-text text-transparent bg-gradient-to-r from-[#00008B] to-[#ADD8E6] bg-clip-text">
          Contact Us
        </h1>
        <div className="flex-grow flex pt-2 items-center justify-end">
          <div className="h-0 w-full rounded-md bg-gradient-to-r animated-text from-[#00008B] to-[#ADD8E6] p-[2px]" />
        </div>
      </div>
      <div className="text-[#85C6DC] mt-3 text-center">
        <span className="font-medium my-2 animated-text">
          Feel free to contact us if you have any questions or remarks!
        </span>
      </div>
      <div className="grid place-content-center">
        <div className="bg-white dark:bg-gray-800 p-3 gap-10 md:shadow-[0_0_20px_3px_rgba(0,0,0,0.1)] rounded-lg md:flex items-center justify-between my-10">
          <div className="relative">
            <div className="md:absolute w-full top-10 z-[5] left-0">
              <div className="m-auto flex px-7 w-auto justify-items-center py-6 md:py-0 bg-[#DFF4FF] md:bg-transparent rounded-lg">
                <Image
                  src="/WoB/WOB_Black.png"
                  alt="GS Logo"
                  width={300}
                  height={80}
                />
              </div>
              <div className="pl-10 hidden md:block text-white">
                <span className="text-2xl font-semibold">
                  Contact Information
                </span>
                <br />
                <span className="text-[#c9c9c9] text-sm">
                  Say something to start a live chat
                </span>
              </div>
              <div className="text-black dark:text-white md:text-white ml-10 mt-5 flex flex-col gap-4">
                <Link href="tel:+918999917506">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <TelePhone /> +91 8999917506
                  </div>
                </Link>
                <Link href="mailto:gssoc@girlscript.tech">
                  <div className="flex items-center gap-2">
                    <Email /> wob@girlscript.tech
                  </div>
                </Link>
                <div className="flex items-center gap-2">
                  <Location /> India
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/WoB/Wob_Contact_BG.png"
                alt="Contact Us"
                className="rounded-md"
                height={850}
                width={650}
              />
            </div>
            <div className="flex flex-row  md:flex-row md:absolute md:bottom-5 md:left-9 md:z-1 md:gap-3 md:items-center  ">
              <a
                href="https://www.instagram.com/wob__girlscript"
                className="cursor-pointer"
              >
                <Instagram />
              </a>
              <a
                href="https://www.linkedin.com/company/winter-of-blockchains/"
                className="cursor-pointer"
              >
                <LinkedIn />
              </a>
              <a
                href="https://x.com/WoB__girlscript"
                className="cursor-pointer"
              >
                <Twitter />
              </a>
            </div>
          </div>
          <form
            className="w-full text-black mr-3 px-5 md:px-0 mt-16 md:mt-0"
            onSubmit={handleSubmit}
          >
            <div className="md:flex items-center justify-between gap-10">
              <Input
                text="First Name"
                type="text"
                placeholder="Enter your first name"
                className="w-full"
                value={data.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
              <Input
                text="Last Name"
                type="text"
                placeholder="Enter your last name"
                className="w-full"
                value={data.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
            </div>
            <div className="md:flex items-center justify-between gap-10">
              <Input
                text="Email"
                type="email"
                placeholder="Enter your email"
                className="w-full"
                value={data.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              <Input
                text="Phone Number"
                type="number"
                placeholder="Enter your phone number"
                className="w-full"
                value={data.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
              />
            </div>

            <textarea
              className="w-full my-3 rounded-lg dark:text-white p-4 border-b-2 border-gray-300 focus:outline-none focus:border-black dark:focus:border-[#FF7F0D]"
              placeholder="Enter your message..."
              value={data.message}
              required
              rows={5}
              maxLength={5000}
              onChange={(e) => handleInputChange("message", e.target.value)}
            />
            {/* TODO : Add Validation before Submitting */}
            <div className="text-center md:text-right my-4">
              <button
                className="bg-gradient-to-r from-[#00008B] to-[#85C6DC] text-white rounded-md px-8 py-3 text-sm hover:bg-gradient-to-tr transition duration-300"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default WobContact;
