// components/AboutCard.jsx
import React from "react";

const AboutCard = ({ item }) => {
  return (
    <div className="w-full h-[24vh] rounded-lg px-6 py-3 shadow-sm flex flex-col justify-between bg-[#071b2b] shadow-[#2a3e4f] text-white">
      <div>
        {item.no && <p className="text-4xl font-bold text-yellow-500">{item.no}</p>}
        {item.certificate && <p className="text-lg font-medium">{item.certificate}</p>}
      </div>
      <div className="text-sm mt-2">
        <div className="flex flex-col sm:items-center sm:flex-row justify-between sm:gap-2">
          {item.position && <p className="text-lg font-medium">{item.position}</p>}
          {item.degree && <p className="text-lg font-medium">{item.degree}</p>}
          {item.score && <p>{item.score}</p>}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:gap-2">
          {item.institutionName && <p>{item.institutionName}</p>}
          {item.companyName && <p>{item.companyName}</p>}
          {item.duration && <p>{item.duration}</p>}
        </div>
        {/* {item.icon && <img src={item.icon} alt="" className="w-16 h-16 mt-2" />} */}
      </div>
    </div>
  );
};

export default AboutCard;
