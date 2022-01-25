import Head from "next/head";
import React, { Component } from 'react';
import Image from "next/image";
import Link from 'next/link'
import styles from "../styles/Home.module.css";
import Card from "../components/homepage/Card";
import Navbar from "../components/Navbar"
import { Icon, InlineIcon } from "@iconify/react";
import Data from "../components/Data"
import useState from 'react';

export default function Modal() {
  const [searchTerm,setSearchTerm]= React.useState('');
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <Head>
        <title>
          GirlScipt Summer of Code 2022 | GirlScript Foundation India
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
        </style>
      </Head>

      <div classname=" items-center justify-center mb-24">
              <p className="font-serif text-center text-2xl font-extrabold text-black-100 mb-12">
              <p className="text-primary_orange-0 text-5xl text center font-extrabold mb-10">
                Projects 2021
              </p>
                "unfinished project are the symbol of progress,<br/> not of imperfection"
              </p> 

              <div class="flex items-center justify-center">


    <div className="flex border-2 rounded mb-24 border-orange-400">
        <input type="text"
         className="px-4 py-2 w-80" 
         placeholder="Search..."
         onChange={(event)=>{
           setSearchTerm(event.target.value);
         }}
        />
       {/* {Data.map((post)=>{
          if(searchTerm ==""){
            return post
          }
          else if(post.repo_fullname.toLowerCase().includes(searchTerm.toLowerCase())){
            return post
          }
        })}*/}
        <button className="flex border-orange-400 items-center justify-center px-4 border-l">
            <svg className="border-orange-400 w-8 h-8 text-orange-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
        </button>
    </div>
</div>
</div>

<div className="post flex-auto">
  {Data.map(post=> {
  return (
    <div key={post.project_id} className="post">

{showModal ? (
  
        <>
        <div key={post.project_id} className="post">
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-bold text-primary_orange-0">
                  {post.project_name}
                    <div className="font-bold text-xl text-slate-900	mt-2 font-serif	">
                <a href={post.github} target="_blank">{post.repo_fullname}
                </a>
                </div>
                  </h3>

                  <button
                    className="p-1 ml-auto bg-orange-400 rounded-lg shadow-xl shadow-orange-300 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-orange-400 text-white h-4 w-10 text-4xl block outline-none focus:outline-none mb-6">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <h3 className="text-2xl font-bold text-primary_orange-0 mb-6">
                    DESCRIPTION
                  </h3>
                 <p className="my-4 text-blueGray-500 text-lg leading-relaxed font-serif	">
                 {post.project_description}
                  </p>
                </div>

              <div className="relative p-6 flex-auto ">
                
              <div className="relative p-2 flex-auto float-right">
                <h3 className="text-2xl font-bold text-primary_orange-0 mb-2">
                    TECH STACK
                    <div className=" w-28  mt-6 text-white font-serif rounded-md ml-2 ">
                    <div className=" h-8 w-28 border-2 bg-orange-400 border-orange-400  text-lg block outline-none focus:outline-none mb-2 rounded-md pl-8">
                    {post.technology_used}
                    </div>
                    
                    </div>
                  </h3>

                  <h3 className="p-2 text-2xl font-bold text-primary_orange-0 mb-4">
                    OWNER
                  </h3>
                 <p className="my-4 text-blueGray-500 text-lg leading-relaxed font-serif	">
                   {post.owner_name}
                  </p>

                  <h3 className="text-2xl font-bold text-primary_orange-0 mb-2">
                    ADMIN EMAIL
                  </h3>
                 <p className="my-4 text-blueGray-500 text-lg leading-relaxed font-serif	">
                   {post.email}
                  </p>

                </div>
                
                <h3 className="text-2xl font-bold text-primary_orange-0 mb-2">
                    PROJECT VIDEO

                    <div className="font-bold text-lg text-primary_orange-0 mt-2 font-serif	">
                <a href={post.project_video_link} target="_blank">
                </a>
                </div>
                  </h3>

                  <h3 className="text-2xl font-bold text-primary_orange-0 mb-2">
                    MENTORS
                    <div className=" w-28  mt-6 text-slate-900 font-serif rounded-md ml-2 ">
                    <div className=" h-8 w-28 border-2 border-orange-400  text-lg block outline-none focus:outline-none mb-2 rounded-md pl-8">
                      name
                    </div>
                    <div className=" h-8 w-28 border-2 border-orange-400  text-lg block outline-none focus:outline-none mb-2 rounded-md pl-8">
                      name
                    </div>      
                    </div>
                  </h3>
              </div>
              
              </div>

            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

          </div>
        </>
      ) : null}

<div className="p-10 ">  
    <div className="max-w-sm rounded overflow-hidden shadow-xl shadow-orange-300">
      <div className="px-6 py-4">
        <div className="relative ">
        <button
        className="absolute inset-y-0 top-0 right-0 text-center pb-5 bg-orange-400 text-white active:bg-orange-600 font-bold uppercase text-sm px-2 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none m-1 mb-6 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}>explore</button>
    </div>
        <div className="font-bold text-xl mb-6 text-primary_orange-0">{post.project_name}</div>
        <p className="text-gray-700 text-base mt-2">
          {post.project_description}  </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-orange-400 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{post.technology_used}</span>

      </div>
    </div>
  </div>
  </div>


    
  )

})}
</div>



{/*modal */}
{/*
<button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
</button>*/}
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-bold text-primary_orange-0">
                    NAME
                    <div className="font-bold text-xl text-slate-900	mt-2 font-serif	">
                <a href="/" target="_blank">&nbsp;&nbsp;github/username
                </a>
                </div>
                  </h3>

                  <button
                    className="p-1 ml-auto bg-orange-400 rounded-lg shadow-xl shadow-orange-300 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-orange-400 text-white h-4 w-10 text-4xl block outline-none focus:outline-none mb-6">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <h3 className="text-2xl font-bold text-primary_orange-0 mb-6">
                    DESCRIPTION
                  </h3>
                 <p className="my-4 text-blueGray-500 text-lg leading-relaxed font-serif	">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>

              <div className="relative p-6 flex-auto ">
                
              <div className="relative p-2 flex-auto float-right">
                <h3 className="text-2xl font-bold text-primary_orange-0 mb-2">
                    TECH STACK
                    <div className=" w-28  mt-6 text-white font-serif rounded-md ml-2 ">
                    <div className=" h-8 w-28 border-2 bg-orange-400 border-orange-400  text-lg block outline-none focus:outline-none mb-2 rounded-md pl-8">
                      name
                    </div>
                    <div className=" h-8 w-28 border-2 bg-orange-400 border-orange-400  text-lg block outline-none focus:outline-none mb-2 rounded-md pl-8">
                      name
                    </div>
                    
                    </div>
                  </h3>

                  <h3 className="p-2 text-2xl font-bold text-primary_orange-0 mb-4">
                    OWNER
                  </h3>
                 <p className="my-4 text-blueGray-500 text-lg leading-relaxed font-serif	">
                   NAME
                  </p>

                  <h3 className="text-2xl font-bold text-primary_orange-0 mb-2">
                    ADMIN EMAIL
                  </h3>
                 <p className="my-4 text-blueGray-500 text-lg leading-relaxed font-serif	">
                   EMAIL
                  </p>

                </div>
                
                <h3 className="text-2xl font-bold text-primary_orange-0 mb-2">
                    PROJECT VIDEO

                    <div className="font-bold text-lg text-primary_orange-0 mt-2 font-serif	">
                <a href="/" target="_blank">&nbsp;&nbsp;https://www.youtube.com/watch?v=mWX6hYbJ5Ec
                </a>
                </div>
                  </h3>

                  <h3 className="text-2xl font-bold text-primary_orange-0 mb-2">
                    MENTORS
                    <div className=" w-28  mt-6 text-slate-900 font-serif rounded-md ml-2 ">
                    <div className=" h-8 w-28 border-2 border-orange-400  text-lg block outline-none focus:outline-none mb-2 rounded-md pl-8">
                      name
                    </div>
                    <div className=" h-8 w-28 border-2 border-orange-400  text-lg block outline-none focus:outline-none mb-2 rounded-md pl-8">
                      name
                    </div>
                    
                    </div>
                  </h3>

              </div>
              
                {/*footer*/}
             {/*   <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-md">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
      */}
              </div>

            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
{/* modal end here*/}

    <div className="flex mb-24 grid grid-cols-3 gap-3">
    <div className="p-10 ">  
    <div className="max-w-sm rounded overflow-hidden shadow-xl shadow-orange-300">
      <div className="px-6 py-4">
        <div className="relative ">
        <button
        className="absolute inset-y-0 top-0 right-0 text-center pb-5 bg-orange-400 text-white active:bg-orange-600 font-bold uppercase text-sm px-2 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none m-1 mb-6 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}>explore</button>
    </div>
        <div className="font-bold text-xl mb-2 text-primary_orange-0">Manthan</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-orange-400 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">photography</span>
        <span className="inline-block bg-orange-400 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">travel</span>
        <span className="inline-block bg-orange-400 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">winter</span>
      </div>
    </div>
  </div>

  
  <div class="p-10 ">  
    <div className="max-w-sm rounded overflow-hidden shadow-xl shadow-orange-300">
      <div className="px-6 py-4">
      <div className="relative ">
        <button
        className="absolute inset-y-0 top-0 right-0 text-center pb-5 bg-orange-400 text-white active:bg-orange-600 font-bold uppercase text-sm px-2 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none m-1 mb-6 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}>explore</button>
    </div>
        <div className="font-bold text-xl mb-2 text-primary_orange-0">Manthan</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-orange-400 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">photography</span>
        <span className="inline-block bg-orange-400 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">travel</span>
        <span className="inline-block bg-orange-400 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">winter</span>
      </div>
    </div>
  </div>

  
  <div class="p-10 ">  
    <div className="max-w-sm rounded overflow-hidden shadow-xl shadow-orange-300">
      <div className="px-6 py-4">
      <div className="relative ">
        <button
        className="absolute inset-y-0 top-0 right-0 text-center pb-5 bg-orange-400 text-white active:bg-orange-600 font-bold uppercase text-sm px-2 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none m-1 mb-6 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}>explore</button>
    </div>
        <div className="font-bold text-xl mb-2 text-primary_orange-0">Manthan</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-orange-400 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">photography</span>
        <span className="inline-block bg-orange-400 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">travel</span>
        <span className="inline-block bg-orange-400 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">winter</span>
      </div>
    </div>
  </div>

  <div class="p-10 ">  
    <div className="max-w-sm rounded overflow-hidden shadow-xl shadow-orange-300">
      <div className="px-6 py-4">
      <div className="relative ">
        <button
        className="absolute inset-y-0 top-0 right-0 text-center pb-5 bg-orange-400 text-white active:bg-orange-600 font-bold uppercase text-sm px-2 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none m-1 mb-6 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}>explore</button>
    </div>
        <div className="font-bold text-xl mb-2 text-primary_orange-0">Manthan</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-orange-400 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">photography</span>
        <span className="inline-block bg-orange-400 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">travel</span>
        <span className="inline-block bg-orange-400 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">winter</span>
      </div>
    </div>
  </div>

  <div class="p-10 ">
    <div className="max-w-sm rounded overflow-hidden shadow-xl shadow-orange-300">
      <div className="px-6 py-4">
      <div className="relative ">
        <button
        className="absolute inset-y-0 top-0 right-0 text-center pb-5 bg-orange-400 text-white active:bg-orange-600 font-bold uppercase text-sm px-2 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none m-1 mb-6 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}>explore</button>
    </div>  
        <div className="font-bold text-xl mb-2 text-primary_orange-0">Manthan</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
      <div className="relative ">
        <button
        className="absolute inset-y-0 top-0 right-0 text-center pb-5 bg-orange-400 text-white active:bg-orange-600 font-bold uppercase text-sm px-2 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none m-1 mb-6 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}>explore</button>
    </div>
        <span className="inline-block bg-orange-400 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">photography</span>
        <span className="inline-block bg-orange-400 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">travel</span>
        <span className="inline-block bg-orange-400 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">winter</span>
      </div>
    </div>
  </div>

  <div class="p-10 ">  
    <div className="max-w-sm rounded overflow-hidden shadow-xl shadow-orange-300">
      <div className="px-6 py-4">
      <div className="relative ">
        <button
        className="absolute inset-y-0 top-0 right-0 text-center pb-5 bg-orange-400 text-white active:bg-orange-600 font-bold uppercase text-sm px-2 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none m-1 mb-6 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}>explore</button>
    </div>
        <div className="font-bold text-xl mb-2 text-primary_orange-0">Manthan</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-orange-400 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">photography</span>
        <span className="inline-block bg-orange-400 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">travel</span>
        <span className="inline-block bg-orange-400 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">winter</span>
      </div>
    </div>
  </div>

  
  </div>

  
  <div classname=" items-center justify-center">
              <p className="font-serif text-center text-2xl font-extrabold text-black-100">
              <p className="text-primary_orange-0 text-4xl text-center font-extrabold mb-10">
                Checkout some previous year Projects
            </p>
            </p>
      </div>

      <div className="flex justify-center mx-6">
        <button
          className={"bg-orange-500 p-4 text-white rounded hover:bg-orange-700 hover:shadow-xl mx-4"}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          Project 2020
        </button>

        <button
          className={"bg-orange-500 p-4 text-white rounded hover:bg-orange-700 hover:shadow-xl mx-4"}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          Project 2020
        </button>

        <button
          className={"bg-orange-500 p-4 text-white rounded hover:bg-orange-700 hover:shadow-xl mx-4"}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          Project 2019
        </button>

        <button
          className={"bg-orange-500 p-4 text-white rounded hover:bg-orange-700 hover:shadow-xl mx-4"}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          Project 2018
        </button>
      </div>
    </div>
      
  );
}
