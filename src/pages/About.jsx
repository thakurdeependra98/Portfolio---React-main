import React, { useState } from 'react';
import Aboutdetails from '../components/Aboutdetails';
import react from '../assets/react.png';
import node from '../assets/nodejs.png';
import mongodb from '../assets/Mongodb.png';
import express from '../assets/express.png';
import tailwind from '../assets/tailwind-css.png';
import frontend from '../assets/frontend.png';

const About = () => {
  const [value, setValue] = useState("Education");

  const handleDetailsEnter = (e) => {
    setValue(e.target.innerText);
  };

  const experience = {
    title: 'My Experience',
    items: [
      {
        institutionName: 'Bestpeers InfoTech',
        certificate: 'Training & Internship Full Stack Development',
        duration: 'Jan 2022 - Mar 2022',
      },
      {
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
        institutionName: 'Bhabha University',
        degree: 'Master of Computer Application',
        duration: '2022 - 2024',
        score: '7.85 CGPA '
      },
      {
        institutionName: 'Barkatullah University',
        degree: 'Bachelor of Science',
        duration: '2017 - 2020',
        score: '60%'
      },
      {
        institutionName: 'MP Board',
        degree: '12th',
        duration: '2016 - 2017',
        score: '70.2%'
      },
      {
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
      { icon: frontend },
      { icon: react },
      { icon: node },
      { icon: express },
      { icon: mongodb },
      { icon: tailwind }
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
    <div className="max-w-screen-xl md:h-screen h-screen md:flex items-center mx-auto px-4 md:px-10 md:py-0 py-30 overflow-hidden">
      <div className="md:w-full flex flex-col md:h-full md:flex-row items-center gap-10">
        <div className="w-full md:w-1/3 flex flex-row md:flex-col justify-between md:justify-start md:items-start items-center md:gap-4 md:mb-[15vh]">
          {["Education", "Experience", "Skills", "Certificates"].map((item) => (
            <button
              key={item}
              className={`px-4 py-2 rounded-full text-xs md:text-lg font-medium transition-all duration-300 md:w-[10vw] w-fit ${
                value === item ? 'bg-white text-black' : 'text-white border border-white'
              }`}
              onClick={handleDetailsEnter}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="w-full h-[45vh] md:w-2/3 rounded-xl shadow-lg min-h-[300px]">
          <Aboutdetails data={getDetails()} />
        </div>
      </div>
    </div>
  );
};

export default About;
