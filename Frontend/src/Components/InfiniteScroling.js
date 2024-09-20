import { useState, useEffect } from 'react';
import { UPDATE_API } from '../Utils/constant';


const useInfiniteScroll = (restaurents) => {

    const [endRiched , setEndRiched] = useState(false);

    useEffect(()=>{
       window.addEventListener('scroll' , handalScroll);
       return () => window.removeEventListener('scroll' , handalScroll);
    } ,[restaurents , endRiched])
  
 const handalScroll =()=>{
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement || document.body;

    if(scrollTop + clientHeight >=scrollHeight - 10 && !endRiched ){
        console.log('End Riched');
        updateApi();
        setEndRiched(true);

    }
    else if(scrollTop + clientHeight < scrollHeight - 10 && endRiched){
           setEndRiched(false);
    }

 }
 const updateApi =()=>{

    

 }

  return { restaurants, loading, hasMore };
};

export default useInfiniteScroll;
