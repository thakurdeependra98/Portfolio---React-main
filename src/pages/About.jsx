import React, { useState } from 'react';
import Aboutdetails from '../components/Aboutdetails';
import react from '../assets/react.png'
import node from '../assets/nodejs.png'
import mongodb from '../assets/Mongodb.png'
import express from '../assets/express.png'
import tailwind from '../assets/tailwind-css.png'
import frontend from '../assets/frontend.png'


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
              certificate: 'Trainning & Internship Full Stack Development',
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
            },{
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
            { icon : tailwind}
        ]
    };

    const Certificates = {
      title: 'My Certificates',
      items: [
        {
          institutionName: 'Bestpeers InfoTech pvt ltd',
          certificate: 'Trainning & Internship Full Stack Development',
        },
        {
          institutionName: 'Sheryians Coding School',
          certificate: 'Full Stack Development',
        },
      ]
  };
    // Function to return data based on selection
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
        <div className='md:max-w-screen-xl flex flex-col items-start mx-auto px-10'>
            <div className='md:w-[80vw] md:h-[81vh] flex mt-[10vw]'>
                <div className='aboutlist w-[30vw] flex flex-col items-left justify-start gap-[1vw] py-[2vw]'>
                    {[ "Education", "Experience", "Skills", "Certificates"].map((item) => (
                        <h2
                            key={item}
                            className={`w-[12vw] md:text-[1.5vw] text-[6vw] tracking-[1px] rounded-full mb-2 px-3 py-[0.2vw] cursor-pointer ${
                                value === item ? 'bg-white text-black ' : 'text-white '
                            }`}
                            onClick={handleDetailsEnter}
                        >
                            {item}
                        </h2>
                    ))}
                </div>
                <div className='w-full h-[25vw] rounded-lg px-[1vw] py-[1vw]'>
                    <Aboutdetails data={getDetails()} />
                </div>
            </div>
        </div>
    );
};

export default About;
