import React from "react";
import { AiFillStar } from "react-icons/ai";
import { CDN_URL } from "../Utils/constant";

const Restrocart = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;
  
  const retingColour = (reting)=>{
    if(reting>=4){
      return 'bg-green-400'
    }
    else if(reting>=3){
      return 'bg-yellow-400'
    }
    else{
      return 'bg-red-'
    }
  }

  return (
    <div className="resoCart w-56 min-h-96 bg-orange-200 shadow-lg rounded-lg p-2 m-3 transition-transform transform hover:scale-105 hover:cursor-pointer hover:border hover:border-black flex flex-col justify-between" style={{ backgroundColor: "F0F0F0" }}>
      <div>
        <img
          className="res-logo w-full h-42 object-cover rounded-t-lg"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h2 className="font-bold py-2 line-clamp-1">{name}</h2>
        
      </div>
      <div className="flex justify-between ">
        <h4 className="flex items-baseline">
    
          <AiFillStar className={`text-white mx-1 ${retingColour(avgRating)}`} /> {avgRating} . {sla.slaString}
        </h4>
        
      </div>
      <h4 className="font-thin line-clamp-1"> {cuisines.join(", ")} </h4>
      <h4 className="mt-2">{costForTwo}</h4>
    </div>
  );
};



export default Restrocart;
