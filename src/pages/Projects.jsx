import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Ecommerce from "../assets/Shop E-Commerce.png";
import Recipe from "../assets/Recipes _ app.png"
import TwoGood from "../assets/Two Good clone.png"

const projectData = [
  {
    id: 1,
    title: 'Shop E-commerce',
    image: Ecommerce,
    description: 'A role-based e-commerce platform with Admin, Seller, and Buyer panels. Features include secure authentication, product management, cart & wishlist, and a responsive UI for a seamless shopping experience.',
    techStack: 'React, Redux, Tailwind CSS',
    link: 'https://e-commerce-react-app-sigma.vercel.app',
  },
  {
    id: 2,
    title: 'Recipe App',
    image: Recipe,
    description: 'A dynamic recipe management app where users can create, read, and delete recipes effortlessly. Built with Redux for state management and a responsive UI for a smooth user experience.',
    techStack: 'React, Redux, Tailwind CSS',
    link: 'https://recipe-app-bay-one.vercel.app',
  },
  {
    id: 3,
    title: 'Two Good Clone',
    image: TwoGood,
    description: 'A pixel-perfect TwoGood website clone featuring smooth animations and interactive UI using GSAP. Designed with responsive layouts, engaging transitions, and optimized performance, closely replicating the original user experience.',
    techStack: 'HTML, CSS, JavaScript and Gsap',
    link: 'https://two-good-project.vercel.app',
  },
];

const Projects = () => {
  return (
    <div className='md:max-w-screen-xl md:h-[100vh] h-[40vh] flex flex-col md:justify-end mx-auto px-10 md:py-0 py-10'>
      <h1 className='text-[2vw] text-yellow-500 font-semibold tracking-[1px] mb-4'>Projects</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={'auto'}
        // slidesPerGroup={2}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        className='w-[80vw] h-[24vh] md:h-[80vh]'
      >
        {projectData.map((project, index) => (
          <SwiperSlide key={project.id}>
            <div className='w-full md:h-[70vh] h-[20vh] object-contain relative'>
              <img className='w-full h-full' src={project.image} alt={project.title} />
              <div className='w-full h-full absolute bg-[#000000a5] top-0 left-0 group'>
                <h1 className='text-[7vw] font-semibold ml-5 absolute right-4 md:-top-6 z-50 text-zinc-300'>{`0${index + 1}`}</h1>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <h1 className='md:text-[1.2vw] text-[2.2vw] absolute left-0 font-normal -bottom-10 flex items-center gap-4 text-white'>
                    {project.title} <MdOutlineArrowOutward />
                  </h1>
                </a>
                <div className='w-full absolute bottom-0 left-0 bg-[#0000007e] px-6 py-4 hidden group-hover:block duration-1000 ease-linear'>
                  <h3 className='md:text-[1.3vw] text-[2vw] md:mb-4 mb-2 text-white'>Tech Stack: {project.techStack}</h3>
                  <p className='md:text-[1.1vw] text-[1.6vw] text-white'>{project.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
