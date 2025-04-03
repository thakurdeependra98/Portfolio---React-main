import React from "react";

const AboutCard = ({ item }) => {
  return (
    <>
      <div className="w-[22vw] h-[10vw] bg-zinc-800 rounded-lg mt-[2vw] py-[1vw] px-[2vw] flex flex-col shadow-md border shadow-white justify-between">
        <div>
          {item.position && <p className="text-xl ">{item.position}</p>}
          {item.degree && <p className="text-xl">{item.degree}</p>}
          {item.certificate && <p className="text-xl">{item.certificate}</p>}
          {/* {item.skill && <h3 className="text-[1vw] font-semibold">{item.skill}</h3>} */}
        </div>
        <div>
          {item.score && (<h3 className="text-sm font-semibold">{item.score}</h3>)}
          <div className="w-full flex justify-between">
            {item.icon && <img className="w-fit h-20 mb-5 text-center" src = {item.icon} alt="" />}
            {item.companyName && (<h3 className="text-md text-gray-500 font-semibold">{item.companyName}</h3>)}
            {item.institutionName && (<h3 className="text-md text-gray-500 font-semibold">{item.institutionName}</h3>)}
            <p className="text-sm text-gray-400 mt-1">{item.duration}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
