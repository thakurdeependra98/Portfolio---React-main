// components/AboutCard.jsx
import React from "react";

const AboutCard = ({ item }) => {
  return (
    <div className="w-[80vw] md:w-[22vw] h-[18vh] bg-zinc-800 rounded-lg p-4 shadow-md flex flex-col justify-between gap-4 shadow-slate-400">
      <div>
        {item.position && <p className="text-lg font-medium">{item.position}</p>}
        {item.degree && <p className="text-lg font-medium">{item.degree}</p>}
        {item.certificate && <p className="text-lg font-medium">{item.certificate}</p>}
      </div>
      <div className="text-sm text-zinc-400 mt-2">
        {item.score && <p>{item.score}</p>}
        {item.duration && <p>{item.duration}</p>}
        {item.companyName && <p>{item.companyName}</p>}
        {item.institutionName && <p>{item.institutionName}</p>}
        {item.icon && <img src={item.icon} alt="" className="w-16 h-16 mt-2" />}
      </div>
    </div>
  );
};

export default AboutCard;
