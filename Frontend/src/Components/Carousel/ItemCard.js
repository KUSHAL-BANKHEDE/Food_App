import { useEffect, useState } from "react";
import Restrocart from "../Restrocart";
import Shimmer from "../shimmers/bodyShimmer";
import { Link } from "react-router-dom";

const ItemCard = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestro, setFilterRestro] = useState([]);
  const [topReso, setTopReso] = useState([]);
  const [onMind, setOnMind] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();

    // Extracting the restaurant array from the fetched data
    const restaurants = json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setListOfRestro(restaurants);
    setFilterRestro(restaurants);
    console.log(listOfRestro);
  };

  if (listOfRestro.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="restro-cart flex flex-wrap p-4 m-4 space-x-1 space-y-1">
      {filterRestro.map((restaurant) => (
        <Link key={restaurant?.info.id} to={"restaurant/" + restaurant?.info.id}>
          
            <Restrocart resData={restaurant} />

        </Link>
      ))}
    </div>
  );
};

export default ItemCard;
