import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Ecommerce from "../assets/Shop E-Commerce.png";
import Recipe from "../assets/Recipes _ app.png";
import TwoGood from "../assets/Two Good clone.png";

const projectData = [
  {
    id: "01",
    title: "Shop E-commerce",
    image: Ecommerce,
    description:
      "A full-featured, role-based e-commerce platform with dedicated panels for Admin, Seller, and Buyer. It includes secure user authentication, dynamic product management, a shopping cart and wishlist system, and a responsive interface for an optimal shopping experience across all devices. Built using React, Redux, and Tailwind CSS for robust performance and clean design.",
    link: "https://e-commerce-react-app-sigma.vercel.app",
  },
  {
    id: "02",
    title: "Recipe App",
    image: Recipe,
    description:
      "A dynamic and intuitive recipe management application where users can effortlessly create, read, and delete recipes. The app features responsive layouts and state handling with Redux, offering a smooth and consistent user experience. Built using React, Redux, and Tailwind CSS for a modern UI and efficient state control.",
    link: "https://recipe-app-bay-one.vercel.app",
  },
  {
    id: "03",
    title: "Two Good Clone",
    image: TwoGood,
    description:
      "A highly polished clone of the Two Good Co. website, crafted with pixel-perfect design accuracy. It includes responsive layouts, fluid scroll-based animations, and an engaging interface powered by GSAP. Developed using HTML, CSS, JavaScript, and GSAP to closely replicate the interactive and aesthetic essence of the original site.",
    link: "https://two-good-project.vercel.app",
  },
];


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projectData[0]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10 mt-10">
      <h1 className="text-2xl md:text-3xl font-semibold text-yellow-500 mb-6">
        Projects
      </h1>

      <div className="bg-[#071b2b] shadow-sm shadow-[#2a3e4f] rounded-lg">
        {/* Top Tab Row */}
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 py-1">
    {projectData.map((project) => (
      <div
        key={project.id}
        onClick={() => setSelectedProject(project)}
        className={`cursor-pointer rounded-lg min-w-[200px] text-center transition-all duration-300 
          overflow-hidden relative group
          ${
            selectedProject.id === project.id
              ? 'opacity-100 scale-105' // Highlight selected
              : 'opacity-40 hover:opacity-70' // Dim others, allow hover feedback
          }`}
      >
        <img
          src={project.image}
          className="rounded-lg w-full h-full object-cover"
          alt={project.title}
        />
        {/* Overlay dark filter */}
        <div
          className={`absolute inset-0 rounded-lg bg-black transition-all duration-300
            ${
              selectedProject.id === project.id
                ? 'bg-opacity-0' // No overlay on selected
                : 'bg-opacity-60' // Dark overlay on unselected
            }`}
        ></div>
      </div>
    ))}
  </div>

        {/* Selected Project Details */}
        <div className="rounded-lg px-6 py-4">
          <div className="flex flex-col">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold text-yellow-500 mb-10">
              {selectedProject.id}
            </h2>
              <a href={selectedProject.link}>
                <h2 className="text-xl md:text-2xl font-medium text-white mb-2">
                {selectedProject.title}
              </h2>
              </a>
              <p className="text-gray-300 mb-4">
                {selectedProject.description}
              </p>
              {/* <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-yellow-500 hover:underline text-md"
              >
                Visit Project <MdOutlineArrowOutward className="ml-1" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
