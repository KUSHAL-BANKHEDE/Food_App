import { useEffect, useState } from "react";
import Shimmer from "../shimmers/bodyShimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../Utils/constant";
import { RestaurentCategory} from "./RestaurentCategory";

const RestaurentMenu =()=>{
    const[menu ,setMenu] = useState(null);
    const {resId} = useParams();
    const [showIndex, setShowIndex] = useState(null)
    //console.log(useParams());
    useEffect(()=>{
        fetchmanu();
    } ,[]);

    const fetchmanu = async()=>{
        const data = await fetch(MENU_API+resId);
       // console.log(MENU_API+resId);
         const json = await data.json();
       // console.log(json.data);
        setMenu(json.data);
        
    }

    if(menu === null) return <Shimmer/>;
      
     const{name, cuisines, costForTwoMessage }= menu?.cards[2]?.card?.card?.info;
    
     const{itemCards} = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    

     const categories = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>
            c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
     );
     
     //console.log(categories);
    
    return(
       
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-lg my-4">{name}</h1>
            <h3 className="font-bold text-lg my-2">{cuisines.join(", ")}</h3>
            <h2 className="text-lg my-2">{costForTwoMessage}</h2>
            {categories.map( (category, index) => (
        <RestaurentCategory 
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItem={showIndex === index}
          index={index}
          setShowItem={() => { setShowIndex(prevIndex => (prevIndex === index ? -1 : index))} }
        />
      ))}
        </div>
    )

}
export default RestaurentMenu;