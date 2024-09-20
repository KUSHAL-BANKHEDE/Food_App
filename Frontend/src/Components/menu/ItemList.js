import { useDispatch, useSelector} from "react-redux"
import { CDN_URL } from "../../Utils/constant"
import { addItem, removeItem } from "../../Utils/cartSlice";
import { useState } from "react";


const ItemList = ({item}) => {

  const cartItem = useSelector((store)=> store.cart.items);

   const dispatch = useDispatch();
    const handleAddItem =(data)=>{
       dispatch(addItem(data)) ;
    }
    const handleRemoveItem = (data)=>{
      dispatch(removeItem(data)) ;
    }
     

    const [itemCount , setItemCount] = useState(0);

    const additem =(item)=>{
      setItemCount(itemCount+1);
      handleAddItem(item);
    }
    const removeitem =(item)=>{
      setItemCount(itemCount-1);
      handleRemoveItem(item);

    }
    return (
      <div className="shadow-lg rounded-lg text-left">
          {item.map( (data) => (
            <div key={data?.card?.info?.id} className="p-2 m-3 border-gray-300 border-b flex justify-between">
              <div className="w-9/12 flex flex-col justify-between h-full">
                  <span className="py-2">{data?.card?.info?.name}</span>
                  <span >{" "} ₹{data?.card?.info?.price ? 
                      data?.card?.info?.price/100 : data?.card?.info?.defaultPrice/100 }
                  </span>
                  <p className="text-sm text-gray-500 py-3">{data?.card?.info?.description}</p>
              </div>
              <div className="w-3/12 relative flex items-end justify-center">
                  <div className="absolute my-2">
                      
                  {cartItem.length > 0 ? (
                    <div className="flex px-4 py-1 bg-white shadow-lg rounded-lg text-green-600">
                      <button onClick={() => additem(data)} className="px-2">+</button>
                      <span className="px-4">{itemCount}</span>
                      <button onClick={() => removeitem(data)} className="px-2">-</button>
                    </div>
                  ) : (
                    <button
                      className="px-4 py-1 bg-white shadow-lg rounded-lg text-green-600"
                      onClick={() => additem(data)}
                    >
                      Add +
                    </button>
                  )}

                      {/* <button className="px-4 py-1 bg-white shadow-lg rounded-lg text-green-600 "
                              onClick={()=>handleAddItem(data)}
                      >
                        
                        Add +
                      </button> */}
                  </div>
                  <img className="px-2"  src={CDN_URL+data?.card?.info?.imageId} alt="dish" />
              </div>
            </div>
          ))}
      </div>
    )
  }
  
  export default ItemList