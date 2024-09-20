import { useDispatch, useSelector } from "react-redux";
import ItemList from "./menu/ItemList";

import { clearCart } from "../Utils/cartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = ()=>{
    const[itemcount , setItemcount] = useState(0);
   
    const cartItem = useSelector((store)=> store.cart.items);

    const dispatch = useDispatch();

    const clearCartHandler = ()=>{
        dispatch(clearCart());
    }
    


    return (
        <div className=" text-center m-10 p-10">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="p-2 m-2 bg-red-400 rounded-lg"
               onClick={clearCartHandler}
            >
                Clear Cart
                
            </button>
            {cartItem.length === 0 &&(
                <div className="text-2xl font-bold">Cart is empty. Add Item to the cart!
                            
                            <div className=" font-thin">Good food is always cooking! Go ahead, order some yummy items from the menu.</div>
                <button className="bg-amber-200 m-3 p-3 rounded-lg">
                    <Link to="/"> Go to Home</Link>
                </button>
                </div>
            
            )}
            


           <ItemList item = {cartItem}/>
        </div>
    )
}

export default Cart;