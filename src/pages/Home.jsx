import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Resume from '../assets/Deependra_Resume.pdf';
import Profile from "../assets/laptop.webp";

export const Home = () => {
  return (
    <div className="max-w-screen-xl min-h-screen flex flex-col-reverse md:flex-row items-center md:justify-between justify-center mx-auto px-6 md:py-0">
      
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-2xl md:text-xl text-gray-400 mb-2">Hello,</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          I'm <span className="text-yellow-400">Deependra Singh</span><br /> Web Developer
        </h1>
        <p className="text-gray-400 text-base md:text-lg mb-6">
          I'm a full-stack Web developer with a passion for creating engaging and user-centric experiences.
        </p>
        <div className="flex justify-center md:justify-start items-center gap-4 flex-wrap">
          <a href={Resume} download="Resume">
            <button className=" border-2 rounded-full px-6 py-2 font-semibold flex items-center gap-2 text-sm md:text-base">
              Download CV <MdOutlineFileDownload className="text-lg" />
            </button>
          </a>
          <a href="https://github.com/thakurdeependra98" target="_blank" rel="noreferrer" className="border-2 p-3 rounded-full">
            <FaGithub className="text-black text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/deependra-singh-5b9574244/" target="_blank" rel="noreferrer" className=" p-3 rounded-full border-2">
            <FaLinkedinIn className="text-black text-xl" />
          </a>
        </div>
      </div>
      <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
        <img src={Profile} alt="Profile" className="w-3/4 md:w-[70%] max-w-[500px] opacity-70 md:opacity-100" />
      </div>
    </div>
  );
};

export default Home;
