import { useState, useEffect } from "react";
import { Box, Skeleton, SkeletonCircle, Spacer } from "@chakra-ui/react";
import Head from "next/head";
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

const blog = () => {
  const [users, setUsers] = useState([]);
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getUsers2022 = async () => {
    const response = await fetch(
      "https://opensheet.elk.sh/1Pl4_0G2AILRaUsFoG71xA4AXUaN0_otl_S0hpal0bZs/CAshoutout"
    );
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers2022();
  }, []);

  return (
    <>
    <Head>
    <title>
        Blog | GirlScipt Summer of Code 2022 | GirlScript Foundation India
        </title>
        <meta name="description" content="GirlScipt Summer of Code Team" />
      </Head>
      <div className="items-center justify-center">
        <p className="font-sans text-center text-2xl font-extrabold text-black-100">
          <p className="text-black text-5xl text center font-extrabold mb-10 dark:text-white">
            Blogs
          </p>
        </p>
      </div>

      <div class="carousel-wrapper">
        <span id="item-1"></span>
        <span id="item-2"></span>
        <span id="item-3"></span>
        <div class="carousel-item item-1">
        <a href="#item-3" class="arrow-prev arrow"></a>
        <a href="#item-2" class="arrow-next arrow"></a>
        </div>

        <div class="carousel-item item-2">
        <a href="#item-1" class="arrow-prev arrow"></a>
        <a href="#item-3" class="arrow-next arrow"></a>
        </div>

        <div class="carousel-item item-3">
        <a href="#item-2" class="arrow-prev arrow"></a>
        <a href="#item-1" class="arrow-next arrow"></a>
        </div>
      </div>
        
      <Spacer mt={20} />
      <div className="flex flex-row justify-center flex-wrap items-center gap-x-60 gap-y-10 w-100">
        {users.map((curElem, i) => {
          return (
            <>
              {curElem == null ? (
                <div
                  className="flex flex-col items-center justify-center w-80 h-80 gap-3"
                  key={i}
                >
                  <SkeletonCircle size="80" />
                  <br />
                  <Skeleton>
                    <Box className="text-center px={4}"> Cogito ergo Sum </Box>
                  </Skeleton>
                  <Skeleton>
                    <Box className="text-center px={4}">
                      {" "}
                      Connection is power - DedSec
                    </Box>
                  </Skeleton>
                </div>
              ) : (
                <div className="flex items-center justify-center w-60" key={i}>
                  <div className="p-2 justify-center shadow  bg-black rounded-xl w-full md:h-fit">

                  <div className="mb-4 mt-4 pr-2 font-semibold px-1 pt-3 rounded-lg lg:my-2 lg:px-2 lg:py-2 ">
            <div className="bg-gradient-to-b from-primary_orange-0 to-orange-600 text-md rounded-lg my-1 px-1 w-34 sm:w-fit">
              <div className="dark:text-black pl-8 text-md text-white 1.5rem 1.5rem ">
                {" "}
                What is the GirlScript Summer of code ?
                GSSoC is only for girls
              </div>
            </div>
          </div>

                      <div className="flex flex-col items-center justify-center ">
                      <div className="font-bold text-center text-white md:text-xl border-orange-500 border rounded-md my-1 px-6">
                        {curElem["Name"]}
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full ">
                      <div className="font-bold text-center text-black md:text-xl">
                        {curElem["Name"]}
                        <button ref={btnRef} onClick={onOpen} 
        className=" bg-gradient-to-b from-primary_orange-0 to-orange-600 text-lg text-white dark:text-black font-medium rounded-b-md py-1 hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 w-full bottom-0"
        >
        Read More
      </button>
                      </div>
                    </div>
                  </div>
                </div>

              )}
            </>
          );
        })}
      </div>
      <Spacer mt={20} />
    </>
  );
};

export default blog;