import { useState, useEffect } from "react";
import { Box, Skeleton, SkeletonCircle, Spacer } from "@chakra-ui/react";
import Head from "next/head";
import Link from 'next/link';
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import SliderBlog from "../components/SliderBlog";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getBlogs = async () => {
    const response = await fetch(
      "https://opensheet.elk.sh/1yAcu1TICHh2BHOTk82WjD68oukbPwAQPWJCKdNxlAss/Blogs2022"
    );
    setBlogs(await response.json());
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <Head>
        <title>
        Blog | GirlScript Summer of Code 2024 | GirlScript Foundation India
        </title>
        <meta name="description" content="GirlScript Summer of Code Team" />
      </Head>
      <div className="items-center justify-center">
        <div className="font-sans text-center text-2xl font-extrabold text-black-100">
          <p className="text-black text-5xl text center font-extrabold mb-10 dark:text-white">
            Blogs
          </p>
        </div>
      </div>
      <Spacer mt={20} />
      <div className="items-center justify-center px-20">
        <SliderBlog />
      </div>
      <Spacer mt={20} />
      <div className="flex flex-row justify-center flex-wrap items-center gap-x-32 gap-y-10 w-100">
        {blogs.map((curElem, i) => {
          return (
            <>
                <div className="flex items-center justify-center w-60" key={i}>
                  <div className="justify-center shadow dark:bg-black text-black dark:text-white rounded-xl w-full overflow-y-clip rounded-lg h-fit md:h-60 shadow-xl dark:shadow-none shadow-slate-400">
                      
                    <div className="flex items-center justify-center mb-4 font-semibold px-1 pt-2">
                      <div className="flex justify-center bg-orange-100 dark:bg-gradient-to-b dark:from-primary_orange-0 to-orange-600 text-md rounded-lg m-2 h-28">
                        <div className="text-primary_orange-0 dark:text-black text-md m-2">
                          {curElem["title"]}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center pb-3.5 px-3">
                      <div className="flex flex-col items-center justify-center font-bold text-center dark:text-white md:text-lg light:bg-orange-50 border-orange-500 border my-1 w-full rounded-lg">
                        {curElem["author"]}
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="font-bold text-center text-black md:text-xl w-full">
                          <Link 
                            href={curElem.link}
                          >
                        <button
                          ref={btnRef} 
                          onClick={onOpen} 
                          className=" bottom-0 bg-gradient-to-b from-primary_orange-0 to-orange-600 text-lg text-white dark:text-black font-medium rounded-b-md py-1 hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 w-full"
                        > 
                            Read Blog
                        </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
            </>
          );
        })}
      </div>
      <Spacer mt={20} />
    </>
  );
};

export default Blog;
