import axios from 'axios';
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

function Contact() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const handleSubmit =async(e) => {
    e.preventDefault();
    try {
      console.log(data);
    const result=  await axios.post('/api/email/send-email', data);
      if (result.error) {
        console.error(result.error);
        return;
      }
      alert('Message Sent!');
      setData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending the email');
    }
  };

  return (
    <div className="grid place-content-center">
      <>
        <div className="text-[#FF7F0D] text-center">
          <h1 className="text-4xl font-bold my-2">Contact Us</h1>
          <span className="font-medium my-2">
            Any questions or remarks? Just write us a message!
          </span>
        </div>
        <div className="bg-white dark:bg-gray-800 p-3 gap-10 md:shadow-[0_0_20px_3px_rgba(0,0,0,0.1)] rounded-lg md:flex items-center justify-between my-10">
          <div className="relative">
            <div className="md:absolute top-10 z-10 left-0">
              <div className="w-full py-6 md:py-0 bg-[#FF7F0D] md:bg-transparent rounded-lg">
                <Image
                  src="/GS_logo_contact.svg"
                  alt="GS Logo"
                  width={600}
                  height={100}
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
                    <Email /> gssoc@girlscript.tech
                  </div>
                </Link>
                <div className="flex items-center gap-2">
                  <Location /> India
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/GSSoC_Contact_BG.svg"
                alt="Contact Us"
                height={850}
                width={650}
              />
            </div>
            <div className="hidden md:flex absolute bottom-5 left-5 z-10 gap-3 items-center">
              <Link href="https://facebook.com">
                <Facebook />
              </Link>
              <Link href="https://instagram.com">
                <Instagram />
              </Link>
              <Link href="https://linkedi.com">
                <LinkedIn />
              </Link>
              <Link href="https://x.com">
                <Twitter />
              </Link>
            </div>
          </div>
          <form
            className=" w-full text-black mr-3 px-5 md:px-0 mt-16 md:mt-0"
            onSubmit={ handleSubmit}
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
            text="Message"
            className="w-full my-3 rounded-lg dark:text-white  p-4  "
            placeholder="Enter your message..."
            value={data.message}
            required
            maxLength={5000}
            onChange={(e) => handleInputChange("message", e.target.value)}
          />
            {/* TODO : Add Validation before Submitting */}
            <div className="text-center md:text-right my-4">
              <button
                className="bg-black dark:text-[#FF7F0D] text-white rounded-md px-8 py-3 text-sm hover:bg-slate-800 transition duration-300"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </>
    </div>
  );
}

export default Contact;
