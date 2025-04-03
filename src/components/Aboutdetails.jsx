import React from 'react';
import AboutCard from './AboutCard';

const Aboutdetails = ({ data }) => {
  return (
    <div>
      <h2 className='text-[2vw] text-[yellow] font-semibold tracking-[1px]'>{data.title}</h2>
      <div className='grid grid-cols-2 mt-4'>
        {data.items.map((item, index) => (
          <AboutCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Aboutdetails;
