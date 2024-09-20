import React from 'react';
import { Link } from "react-router-dom";
import { LOGO_URL } from "../Utils/constant";
import { useSelector } from 'react-redux';
import { CartIcon } from '../Utils/Icons';
const Header = ()=>{
        // const cartItem = useSelector((store)=> store.cart.items);
        const cart = useSelector((store)=>store.cart.items);
        console.log(cart); 
    return (
      <div className="flex justify-between shadow-xl">
            <div className="flex flex-row justify-between ">
              <img className="w-24 mx-5 my-2 " src={LOGO_URL}/>
            </div>
            <div className="naveItem ">
                <ul className='flex p-4 m-4 space-x-4  items-center'>
                  <li>
                    <Link to="/" className=' font-medium text-lg hover:text-[#fe8b00] underline-animation whitespace-nowrap'>Home</Link>
                  </li>
                  <li>
                    <Link to="/contect" className='font-medium text-lg hover:text-[#fe8b00] underline-animation whitespace-nowrap'>contact Us</Link>
                    
                  </li>

                  <li>
                     <Link to="/about" className=' font-medium text-lg hover:text-[#fe8b00] underline-animation whitespace-nowrap'>About us</Link>
                  </li>
                 
                </ul>
  
                 
            </div>
            <div className='flex m-4 p-4 '>                     
                      <Link to="/cart" className=" relative mx-3 px-3 py-0.5 text-lg group underline-animation">
                          <CartIcon className="w-8 h-8" />
                          {cart.length !== 0 && (
                              <div className="absolute -top-1 right-1.5 bg-red-600 group-hover:bg-[#fe8b00] text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
                                  {cart.length}
                              </div>
                          )}
                      </Link>                
            </div>
      </div>
    )
  }
  export default Header;