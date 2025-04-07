// components/Aboutdetails.jsx
import React from 'react';
import AboutCard from './AboutCard';

const Aboutdetails = ({ data }) => {
  if (!data) return null;

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-6 text-[yellow]">{data.title}</h2>

      {data.title === "My Skills" ? (
        <div className='flex flex-col md:items-start items-center justify-center'>
          <div className="md:w-[40vw] w-[70vw] bg-zinc-800 p-6 rounded-lg shadow-md shadow-slate-400">
            <div className="flex flex-wrap gap-6 justify-center items-center ">
              {data.items.map((item, i) => (
                <img
                  key={i}
                  src={item.icon}
                  alt="skill"
                  className="w-16 h-16 md:w-24 md:h-20 object-contain hover:scale-110 transition-transform"
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap md:justify-start items-center justify-center gap-6">
          {data.items.map((item, i) => (
            <AboutCard key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Aboutdetails;
