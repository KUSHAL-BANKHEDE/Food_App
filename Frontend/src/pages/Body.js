import { useEffect, useRef, useState } from "react";
import Restrocart from "../Components/Restrocart";
import Shimmer from "../Components/shimmers/bodyShimmer";
import { Link } from "react-router-dom";
import CirculerCard from "../Components/Carousel/CircularCarousel";
import { RESTAURENT_API, UPDATE_API } from "../Utils/constant";



const Body =()=>{

  const[listOfRestro , setListOfRestro] = useState([]);
  const[searchText , setSearchText] = useState("");
  const[filterRestro ,setFilterRestro]= useState([]);
  const[topReso , setTopReso] = useState([]);
  const[onMind , setOnMind] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const[isLoading , setIsLoading] = useState("true");

    useEffect(()=>{
        fetchData();
    } , [])

    const fetchData = async()=>{
        const data = await fetch(RESTAURENT_API);
        
        const json = await data.json();

        console.log(json);
        
        // console.log(json);

        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setOnMind (json?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
        setTopReso(json?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestro(json?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestro(json?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setIsLoading(false);

        // console.log(listOfRestro);
        console.log(onMind)
    
      }
    
      const fetchMoreData = async()=>{
        const data = await fetch(UPDATE_API);
        const json = await data.json();
        console.log(json);
      }

      if(isLoading){
        return <Shimmer/>
      }
     

      const handleSortChange = (e) => {
        const sortOption = e.target.value;
        setSortOption(sortOption);
        let sortedRestros = [...filterRestro];
    
        switch (sortOption) {
          case "priceLowToHigh":
            sortedRestros.sort((a, b) => a.info.costForTwo - b.info.costForTwo);
            break;
          case "priceHighToLow":
            sortedRestros.sort((a, b) => b.info.costForTwo - a.info.costForTwo);
            break;
          case "time":
            sortedRestros.sort((a, b) => a.info.sla.deliveryTime- b.info.sla.deliveryTime);
            break;
          case "rating":
            sortedRestros.sort((a, b) => b.info.avgRating - a.info.avgRating);
            break;
          default:
            break;
        }
    
        setFilterRestro(sortedRestros);
      };
      
      
      
     
    return(
      <div className="mx-10">

       
       {/* //Circular Carousel */}
          
      <div className="p-4 m-4 py-16 border-b-2">
        <h4 className="font-extrabold py-7 text-3xl">What's on your mind?</h4>
        <div className="flex overflow-x-auto whitespace-nowrap">
          {onMind.map((item) => (
            <Link key={item.id} to={`item/${item.id}`}>
              <CirculerCard itemData={item} />
            </Link>
          ))}
        </div>
      </div>
       
       {/* //chaning */}

        <div className="p-4 m-4 py-16 border-b-2">
      <h4 className="font-extrabold py-7 text-3xl">Top restaurant chains</h4>
      <div className="flex overflow-x-auto  whitespace-nowrap">
        {topReso.map((restaurant) => (
          <Link key={restaurant.info.id} to={`restaurant/${restaurant.info.id}`}>

            <Restrocart resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>

    <div className="search"> 
        <div className=" py-4 p-4 m-4 bg-slate-600 rounded-xl flex items-baseline ">
              <input type="text" className=" border border-solid border-back h-8" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
              }}/>
              <button 
                className="px-4 py-1 bg-green-100 m-4 rounded-lg shadow-lg"
              onClick={()=>{
                 console.log(searchText);
                
                 const searchRestro = listOfRestro.filter((res)=>
                 res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
                 );
                 setFilterRestro(searchRestro);
              }}
              >
                Search
                </button>
              
              <select
               className=" bg-green-100 m-4 rounded-lg ml-auto "
               value={sortOption}
               onChange={handleSortChange}
              >
                 <option value="">Sort by</option>
                  <option value="priceLowToHigh">Price: Low to High</option>
                  <option value="priceHighToLow">Price: High to Low</option>
                  <option value="time">Delivery Time</option>
                  <option value="rating">Rating</option>
              </select>
                 
        </div>
        </div>


        <div className="restro-cart flex flex-wrap p-4 m-4 space-x-1 space-y-1 "> 
        
        {filterRestro.map((restaurant)=>(
          <Link key={restaurant.info.id}
             to={"restaurant/"+restaurant.info.id}>
              
               <Restrocart  resData={restaurant}/>
               
              
              
           </Link>
        ))}
        </div>

      </div>
    )
}

export default Body;