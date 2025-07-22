import React, { useState } from 'react';
import Aboutdetails from '../components/Aboutdetails';
import react from '../assets/react.png';
import node from '../assets/node-js.png';
import mongodb from '../assets/mongoDb.png';
import express from '../assets/express.png';
import tailwind from '../assets/Tailwind_CSS_Logo.svg.png';
import frontend from '../assets/frontend.png';
import html5 from "../assets/html.webp"
import css from "../assets/css.png"
import javaScript from "../assets/javascript.webp"
import { GraduationCap } from 'lucide-react';

const About = () => {
  const [value, setValue] = useState("Education");

  const handleDetailsEnter = (e) => {
    setValue(e.target.innerText);
  };

  const experience = {
    title: 'My Experience',
    items: [
      {
        no: "01",
        companyName: 'Tryidol Technologies Pvt. Ltd.',
        position: 'Software Engineer',
        duration: 'May 2025 - Present',
      },
      {
        no: "02",
        companyName: 'Bestpeers InfoSystem Pvt. Ltd.',
        position: 'Full Stack Web Development',
        duration: 'Jan 2025 - Apr 2025',
      },
      {
        no: "03",
        companyName: 'CRTD Technologies',
        position: 'Frontend Developer Intern',
        duration: 'Jun 2024 - July 2024'  
      }
    ]
  };

  const education = {
    title: 'My Education',
    items: [
      {
        no: "01",
        institutionName: 'Bhabha University',
        degree: 'Master of Computer Application',
        duration: '2022 - 2024',
        score: '7.85 CGPA '
      },
      { 
        no: "02",
        institutionName: 'Barkatullah University',
        degree: 'Bachelor of Science',
        duration: '2017 - 2020',
        score: '60%'
      },
      { 
        no: "03",
        institutionName: 'MP Board',
        degree: '12th',
        duration: '2016 - 2017',
        score: '70.2%'
      },
      { 
        no: "04",
        institutionName: 'MP Board',
        degree: '10th',
        duration: '2014 - 2015',
        score: '81.8%'
      }
    ]
  };

  const skills = {
    title: 'My Skills',
    items: [
      { icon: html5, title: "HTML"},
      { icon: css, title: "CSS"},
      { icon: javaScript, title: "JavaScript"},
      { icon: tailwind, title: "Tailwind CSS" },
      { icon: react, title: "React JS" },
      { icon: node, title: "Node JS"},
      { icon: express, title: "Express JS" },
      { icon: mongodb, title: "MongoDB" },
    ]
  };

  const Certificates = {
    title: 'My Certificates',
    items: [
      {
        institutionName: 'Bestpeers InfoTech pvt ltd',
        certificate: 'Training & Internship Full Stack Development',
      },
      {
        institutionName: 'Sheryians Coding School',
        certificate: 'Full Stack Development',
      },
    ]
  };

  const getDetails = () => {
    switch (value) {
      case "Experience":
        return experience;
      case "Education":
        return education;
      case "Skills":
        return skills;
      case "Certificates":
        return Certificates;
      default:
        return experience;
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:py-10 py-30 overflow-hidden">
      <div className='mb-14 flex flex-col gap-2 text-white '>
        <div className='flex gap-2 items-center'><GraduationCap />
          <h1 className='md:text-[1.8vw] text-[2.8vw] font-medium'>My <span className='text-yellow-500'>
            Acedmic and Professional</span> Journey </h1></div>
            <h2 className='text-base md:text-md mt-6 text-gray-300'>
I'm  passionate and results-driven Full Stack Web Developer specializing in the MERN Stack (MongoDB, Express.js, React.js, Node.js), I bring both technical expertise and real-world experience to every project I work on.

With hands-on industries level experience, I've had the opportunity to work on live projects where I developed scalable web applications, collaborated in agile teams, and tackled both frontend and backend challenges. From building responsive and dynamic user interfaces in React to designing robust RESTful APIs and managing databases, I thrive in fast-paced development environments.
            </h2>
        </div>
      <div className="md:w-full flex flex-col md:h-full gap-5 border-green-600">
        <div className="w-full flex flex-row rounded-md">
          {["Education", "Experience", "Skills"].map((item) => (
            <button
              key={item}
              className={`px-6 py-2 text-xs md:text-lg rounded-md font-medium transition-all duration-300 ${
                value === item ? 'bg-[#23b623] text-white' : 'text-white'
              }`}
              onClick={handleDetailsEnter}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="w-full rounded-xl">
          <Aboutdetails data={getDetails()} />
        </div>
      </div>
    </div>
  );
};

export default About;
