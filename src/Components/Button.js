import React from "react";
import { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { Example } from ".";
import ExampleEncryptButton from "./EncryptButton";
import ButtonWrapper from "./SpotLightButton";
import BorderOutlineButton from "./BorderOutlineButton";

const Button = () => {
  return (
    <>
      <div className=" flex justify-between items-center border-red-500  px-32 py-10 w-screen">
        <button className="p-10 px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
          Sektch
        </button>
        <button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
          Simple
        </button>
        <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
          Invert it
        </button>
      </div>

      <div className=" flex justify-between items-center border-red-500  px-32 py-10 w-screen">
        <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
          Gradient
        </button>
        <button className="px-8 py-2 border border-black bg-transparent text-black relative group transition duration-200">
          <div className="absolute -bottom-2 -right-2 bg-yellow-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
          <span className="relative">Unapologetic</span>
        </button>
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Lit up borders
          </div>
        </button>
      </div>

      <div className=" flex justify-between items-center border-red-500  px-32 py-10 w-screen">
        <button className="px-8 py-0.5  border-2 border-black uppercase bg-white text-neutarl-700 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition duration-200">
          Brutal
        </button>
        <button className="px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
          Favourite
        </button>
        <button className="px-4 py-2 rounded-xl border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
          Outline
        </button>
      </div>

      <div className=" flex justify-between items-center border-red-500  px-32 py-10 w-screen">
        <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
          Next.js Blue
        </button>
        <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
          Next White
        </button>
        <button className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
          Spotify
        </button>
      </div>

      <div className=" flex justify-between items-center border-red-500  px-32 py-10 w-screen">
        <button className="shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white transition duration-200">
          Playlist
        </button>
        <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
          Figma
        </button>
        <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border-black text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
          Figma Outline
        </button>
        <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
          Hover me
        </button>
      </div>
      <div>
        <Example />
        <ExampleEncryptButton />
        <ButtonWrapper/>
        <BorderOutlineButton/>
      </div>
    </>
  );
};

export default Button;
