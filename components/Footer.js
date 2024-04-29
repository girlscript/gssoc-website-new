import Link from "next/link";

const Footer = () => {
  return (
    <footer id="Contact">
      <div className="footer-2 bg-gradient-to-b from-[#FF8500] to-[#FF6701] pt-6 md:pt-8">
        <div className="container px-4 mx-auto">
          <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-8">
            <div className="footer-info lg:w-1/3 md:px-4">
              {/* <h4 className="text-white text-2xl font-medium mb-4">
                Made with ❤️ by GirlScript India
  </h4>*/}
              <Link href="https://girlscript.tech/">
                <img
                  className="cursor-pointer"
                  src="./GS_Foundation_logo_Black.svg"
                  alt="logo"
                />
              </Link>
            </div>

            <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
              <div className="sm:flex">
                <div className="sm:flex-1">
                  <h6 className="text-lg font-bold text-black uppercase mt-4 md:mt-0 mb-4 hover:underline">
                    ABOUT GSSOC
                  </h6>
                  <div>
                    <Link href="/contact">
                      <span className="font-normal text-black py-1 hover:underline block cursor-pointer">
                        Contact Us
                      </span>
                    </Link>
                    {/* <a
                      href="#"
                      className="font-normal text-black py-1 block hover:underline"
                    >
                      Past Programs
                    </a> */}
                    <Link href="/codeofconduct">
                      <a className="font-normal text-black py-1 block hover:underline">
                        Code of Conduct
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="sm:flex-1 mt-4 sm:mt-0">
                  <h6 className="text-lg font-bold text-black uppercase mt-4 md:mt-0 mb-4 hover:underline">
                    LEGAL
                  </h6>
                  <div>
                    <a
                      href="https://gwoc.girlscript.tech/"
                      className="font-normal text-black py-1 block hover:underline"
                    >
                      GWoC
                    </a>
                    <a
                      href="https://uplift.girlscript.tech/"
                      className="font-normal text-black py-1 block hover:underline"
                    >
                      Uplift Project
                    </a>
                    <a
                      href="https://www.linkedin.com/company/gssummit2021/?originalSubdomain=in"
                      className="font-normal text-black py-1 block hover:underline"
                    >
                      GirlScript India Summit
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 md:px-4 md:text-left mt-12 lg:mt-0">
              <h5 className="text-lg text-black font-medium mb-4">
                GirlScript is the fastest growing tech-community in India. It is
                a non-profit project brought to you by GirlScript Foundation to
                help beginners in technology. Be a part, spread knowledge {"& "}
                happiness.
              </h5>
              <a href="https://www.linkedin.com/company/girlscript-foundation/?originalSubdomain=in">
                <button className="bg-black text-white hover:bg-slate-800 rounded py-2 px-4 md:px-12 transition-colors duration-300">
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-solid border-gray-900 mt-4 py-4">
          <div className="container px-4 mx-auto">
            <div className="md:flex md:-mx-4 md:items-center">
              <div className="md:flex-1 md:px-4 text-center ">
                <p className="text-black">
                  &copy;{" "}
                  <strong>
                    2024 GirlScript Foundation. Made with 🖤️ by GirlScript
                    India. All rights reserved.
                  </strong>
                </p>
              </div>
              {/* <div className="md:flex-1 md:px-4 text-center md:text-right">
                <a
                  href="#"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Privacy Policy
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
