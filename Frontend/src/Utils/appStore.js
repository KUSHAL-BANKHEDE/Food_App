import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer : {
        //this cart reducer came from cartslice , if we have more reducer so we have to add it here because this is a big reducer or app reducer which contain aal the small reducer

        cart: cartReducer,

        

    },
});
export default appStore;