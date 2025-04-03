import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div className='md:max-w-screen-xl md:h-[100vh] flex flex-col justify-center mx-auto px-10'>
      <h1 className='text-[2vw] text-yellow-500 font-semibold tracking-[1px] mb-[8vh]'>Contact us</h1>
      <div className='w-[80vw] flex items-center justify-between relative'>
        <div className='w-[30vw]'>
          <h3 className='text-[1.3vw] tracking-[1px] leading-6 mb-10 font-medium'>Feel free to contact us any time. I will get back to you as soon as i can!</h3>
          <form className='w-[30vw] flex flex-col gap-[1vw]'>
            <input type='text' placeholder='Your Name' className='w-full p-2 bg-transparent border-b-2 outline-none' />
            <input type='email' placeholder='Your Email' className='w-full p-2 bg-transparent border-b-2 outline-none' />
            <textarea placeholder='Your Message' className='w-full p-2 bg-transparent border-b-2 outline-none' />
            <button className='w-full p-2 bg-yellow-500 text-white rounded-md tracking-[1px] mt-10'>Send Message</button>
          </form>
        </div>
        <div className='w-[30vw] bg-zinc-800 p-10 rounded-md absolute right-20 z-50'>
          <h3 className='text-[1.3vw] tracking-[1px] leading-6 mb-16 font-medium'>My Contact Information</h3>
          <p className='text-[1.2vw] mt-3 flex items-center gap-5'><TfiEmail /> sdeependra1234@gmail.com</p>
          <p className='text-[1.2vw] mt-3 flex items-center gap-5'><FaPhoneAlt /> +91 9425653710</p>
          <p className='text-[1.2vw] mt-3 flex items-center gap-5'><IoHomeSharp /> Bhopal, Madhyapradesh, 462010</p>
        </div>
          <div className='w-[20vw] h-[52vh] bg-[yellow] z-30 absolute -top-8 -right-16 rounded-lg '></div>
      </div>
    </div>
  )
}

export default Contact