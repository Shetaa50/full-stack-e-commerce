import React, { createContext } from "react";
import all_product from '../components/assets/all_product';
import { useState } from "react";


export const ShopContext = createContext(null);    
const GetDefaultCart =()=>{
    var cart = [];
    for(let index=0;index<=all_product.length+1;index++){
        cart[index]=0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const[cartItems,setCartItems] = useState(GetDefaultCart());


    const AddToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
    }
     const removefromCart = (itemId)=>{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        }

const contextValue = {all_product,cartItems,AddToCart,setCartItems};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider