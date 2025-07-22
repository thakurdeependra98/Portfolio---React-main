import React from 'react';
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div className='max-w-screen-xl w-full flex flex-col justify-center mx-auto px-4 py-20'>
      <h1 className='text-xl sm:text-2xl md:text-[2vw] text-yellow-500 font-semibold tracking-[1px] mb-12'>
        Contact me
      </h1>

      <div className='w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-10 relative'>

        <div className='w-full md:w-[30vw]'>
          <h3 className='text-base sm:text-lg md:text-[1.1vw] text-white mb-8 font-medium'>
            Feel free to contact us any time. I will get back to you as soon as I can!
          </h3>
          <form className='w-full flex flex-col gap-4 text-white'>
            <input
              type='text'
              placeholder='Your Name'
              className='w-full p-2 bg-transparent border-b-2 outline-none'
            />
            <input
              type='email'
              placeholder='Your Email'
              className='w-full p-2 bg-transparent border-b-2 outline-none'
            />
            <textarea
              placeholder='Your Message'
              className='w-full p-2 bg-transparent border-b-2 outline-none'
            />
            <button
              type='submit'
              className='w-full p-3 bg-[#23b623] text-white rounded-md tracking-[1px] mt-6'
            >
              Send Message
            </button>
          </form>
        </div>

        <div className='w-full md:w-[30vw] bg-white p-6 md:p-10 rounded-md z-40 md:mr-20'>
          <h3 className='text-lg md:text-[1.3vw] leading-6 mb-10 font-semibold'>
            My Contact Information
          </h3>
          <p className='text-sm md:text-[1.2vw] mt-3 flex items-center gap-4'>
            <TfiEmail /> sdeependra1234@gmail.com
          </p>
          <p className='text-sm md:text-[1.2vw] mt-3 flex items-center gap-4'>
            <FaPhoneAlt /> +91 9425653710
          </p>
          <p className='text-sm md:text-[1.2vw] mt-3 flex items-center gap-4'>
            <IoHomeSharp /> Bhopal, Madhyapradesh, 462010
          </p>
        </div>

        <div className='hidden md:block w-[20vw] h-full bg-[#23b623] z-30 absolute -top-8 -right-0 rounded-lg'></div>
      </div>
    </div>
  );
};

export default Contact;
