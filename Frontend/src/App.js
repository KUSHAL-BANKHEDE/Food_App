import Header from "./Components/Header";
import Body from "./pages/Body";
import './App.css';
import {createBrowserRouter , Outlet} from'react-router-dom';
import Help from "./pages/Help";
import Error from "./Components/Error";
import Contect from "./pages/Contect";
import About from "./pages/About";
import RestaurentMenu from "./Components/menu/ExtractMenuData";
import ItemCard from "./Components/Carousel/ItemCard";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./Components/Cart";



const  AppLayout = () => { 
  return (
      <Provider store={appStore}>
          <div className ="app">
               <Header/>
               <Outlet/>
          </div>
      </Provider>

  )
  
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/help",
        element:<Help/>
      },
    
      {
        path:"/contect",
        element:<Contect/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurentMenu/>
      },
      {
        path:"/item/:itemId",
        element:<ItemCard/>
      },
      {
        path:"/cart",
        element: <Cart/>
      }
    
    ]
  },
  

]
)
 
export default appRouter;
