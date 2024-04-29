import Image from "next/image";
import React from "react";
import Input from "../components/Input";
import Link from "next/link";
import TelePhone from "../components/IconAssets/TelePhone";
import Email from "../components/IconAssets/Email";
import Location from "../components/IconAssets/Location";
import Facebook from "../components/IconAssets/Facebook";
import Instagram from "../components/IconAssets/Instagram";
import LinkedIn from "../components/IconAssets/LinkedIn";
import Twitter from "../components/IconAssets/Twitter";

function Contact() {
  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    alert("Message Sent!");
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
        <div className="bg-white p-3 gap-10 md:shadow-[0_0_20px_3px_rgba(0,0,0,0.1)] rounded-lg md:flex items-center justify-between my-10">
          <div className="relative">
            <div className="absolute top-10 z-10 left-0">
              <Image
                src="/GS_logo_contact.svg"
                alt="GS Logo"
                width={600}
                height={100}
              />
              <div className="pl-10 text-white">
                <span className="text-2xl font-semibold">
                  Contact Information
                </span>
                <br />
                <span className="text-[#c9c9c9] text-sm">
                  Say something to start a live chat
                </span>
              </div>
              <div className="text-white ml-10 mt-10">
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
            <Image
              src="/GSSoC_Contact_BG.svg"
              alt="Contact Us"
              height={850}
              width={650}
            />
            <div className="absolute bottom-5 left-5 z-10 flex gap-3 items-center">
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
            className="bg-white w-full text-black mr-3 px-5 md:px-0"
            onSubmit={(e) => handleSubmit(e)}
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
            <Input
              text="Message"
              type="textarea"
              placeholder="Enter your message..."
              value={data.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
            />
            {/* TODO : Add Validation before Submitting */}
            <div className="text-center md:text-right my-4">
              <button
                className="bg-black text-white rounded-md px-8 py-3 text-sm hover:bg-slate-800 transition duration-300"
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
