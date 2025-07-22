import React, { useState } from 'react';
import { FaRegMessage } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Icons for menu and close

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-screen absolute z-50'>
      <nav className='md:max-w-screen-xl w-full mx-auto px-6 md:px-7 pt-6 md:pt-8 flex justify-between items-center relative'>

        <div>
          <h1 className='md:text-[1.4vw] text-[5vw] font-semibold text-yellow-500'>Deependra</h1>
        </div>

        {/* <div className='hidden md:flex gap-[3vw]'>
          <Link to="/" className="text-white cursor-pointer text-[1.2vw] pb-1">Home</Link>
          <Link to="/about" className="text-white cursor-pointer text-[1.2vw] pb-1">About</Link>
          <Link to="/project" className="text-white cursor-pointer text-[1.2vw] pb-1">Projects</Link>
          <Link to="/contact" className="text-white cursor-pointer text-[1.2vw] pb-1">Contact</Link>
        </div> */}

        <div className='hidden md:flex'>
          <button className="w-[12vw] bg-[#23b623] text-white rounded-md py-[0.7vw] font-semibold flex items-center justify-center gap-[0.5vw] tracking-[1px] text-[1vw] shadow-md shadow-black hover:bg-[#23b623ee] duration-200 border border-green-600">
            <FaRegMessage className='text-[1.2vw]' /> Contact me
          </button>
        </div>
        <div className='md:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX className='text-white text-3xl' /> : <HiMenuAlt3 className='text-white text-3xl' />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className='md:hidden bg-zinc-900 px-6 py-4 flex flex-col gap-4 absolute w-full left-0 z-40'>
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-white text-lg">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-white text-lg">About</Link>
          <Link to="/project" onClick={() => setMenuOpen(false)} className="text-white text-lg">Projects</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-white text-lg">Contact</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-yellow-500 text-black rounded-md py-2 font-semibold mt-2">Contact me</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
