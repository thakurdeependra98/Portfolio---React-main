import React from 'react'
// import Route from '../routes/Routes';

import { FaRegMessage } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-screen absolute'>
        <nav className='md:max-w-screen-xl md:h-[6vw] mx-auto px-10 pt-8 flex justify-between items-center '>
            <div>
                <h1 className='md:text-[1.2vw] text-[3.5vw] text-[yellow] tracking-[1px] font-semibold'>Deependra</h1>
            </div>
            <div className='flex gap-[3vw]'>
                <Link to="/" className="menuItemList text-white cursor-pointer text-[1.2vw] pb-1">Home</Link>
                <Link to="/about" className="menuItemList text-white cursor-pointer text-[1.2vw] pb-1">About</Link>
                <Link to="/project" className="menuItemList text-white cursor-pointer text-[1.2vw] pb-1">Projects</Link>
                <Link to="/contact" className="menuItemList text-white cursor-pointer text-[1.2vw] pb-1">Contact</Link>
            </div>
            <div>
                <button className="contactButton w-[12vw] bg-white text-black rounded-full py-[0.5vw] font-semibold flex items-center justify-center gap-[0.5vw] tracking-[1px] text-[1vw]"> <FaRegMessage className='fill-black bg-transparent text-[1.2vw]' /> Contact me</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar