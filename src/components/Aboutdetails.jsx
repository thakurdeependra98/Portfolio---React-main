// components/Aboutdetails.jsx
import React from 'react';
import AboutCard from './AboutCard';

const Aboutdetails = ({ data }) => {
  if (!data) return null;

  return (
    <div className="">
      {/* <h2 className="text-2xl font-bold mb-6 text-[yellow]">{data.title}</h2> */}

      {data.title === "My Skills" ? (
        <div className='w-full vflex flex-col md:items-start items-center justify-center'>
          <div className="rounded-lg">
            <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-6">
              {data.items.map((item, i) => (
                <div className='bg-[#071b2b] flex items-center justify-center gap-2 flex-col px-6 py-6 shadow-sm shadow-[#2a3e4f] rounded-lg'>
                  <img
                  key={i}
                  src={item.icon}
                  alt="skill"
                  className="w-16 h-16 md:w-28 md:h-24 object-contain hover:scale-110 transition-transform duration-900 ease-in-out"
                />
                  <h1 className='text-white font-medium text-xl text-center'>{item.title}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-6">
          {data.items.map((item, i) => (
            <AboutCard key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Aboutdetails;
