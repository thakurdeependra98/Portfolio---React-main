import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Resume from '../assets/Deependra Singh CV.pdf';
import Profile from "../assets/laptop.webp";

export const Home = () => {
  return (
    <div className="max-w-screen-xl min-h-screen flex flex-col-reverse md:flex-row items-end md:justify-between justify-end mx-auto px-6 md:pb-28 text-white relative">
      
      <div className="md:w-1/2 w-full text-center md:text-left absolute pl-10 sm:pl-0 bottom-20 md:bottom-32">
        <h2 className="text-xl md:text-xl mb-2">Hello,</h2>
        <h1 className="text-2xl md:text-6xl font-normal mb-4">
          I'm <span className="text-yellow-500 font-semibold">Deependra Singh</span> <br /> Web Developer
        </h1>
        <p className="text-base md:text-lg mb-6 text-gray-300">
          I'm a full-stack Web developer with a passion for creating engaging and user-centric experiences.
        </p>
        <div className="flex justify-center md:justify-start items-center gap-4 flex-wrap md:pt-10">
          <a href={Resume} download="Resume">
            <button className=" border rounded-md px-6 py-2 font-semibold flex items-center gap-2 text-sm md:text-base bg-[#23b623] text-white shadow-md shadow-black hover:bg-[#23b623ee] duration-200 border-[#23b623]">
              Download CV <MdOutlineFileDownload className="text-lg" />
            </button>
          </a>
          <a href="https://github.com/thakurdeependra98" target="_blank" rel="noreferrer" className="border p-3 rounded-full bg-[#23b623] text-white shadow-md shadow-black hover:bg-[#23b623ee] duration-200 border-[#23b623]">
            <FaGithub className="text-white text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/deependra-singh-5b9574244/" target="_blank" rel="noreferrer" className=" p-3 rounded-full border bg-[#23b623] text-white shadow-md shadow-black hover:bg-[#23b623ee] duration-200 border-[#23b623]">
            <FaLinkedinIn className="text-white text-xl" />
          </a>
        </div>
      </div>
      <div className="md:w-1/2 w-full flex md:justify-end justify-center mb-8 md:mb-0 md:absolute right-0 sm:bottom-48 mt-32 md:mt-0">
        <img src={Profile} alt="Profile" className="w-3/4 md:w-[400px] opacity-70 md:opacity-100" />
        {/* <div className='w-32 h-32 bg-[#23b623] rounded-full'></div> */}
      </div>
    </div>
  );
};

export default Home;
