
const restourentData =  async (req , res)=>{
    
     const url="https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

     const headers = {
        "Content-Type": "application/json",
        "Origin" : "https://www.swiggy.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.3",
      };


     try {
        const responce = await fetch( url , {
            method: "GET",
            headers: headers
        })

        if(!responce.ok){
            throw new Error("Error in ferching swiggy api");
        }

        const jsondata = await(responce.json());
        res.status(200).json(jsondata?.data);
        
     }
     catch{
        return res.status(500).send("Error in fetching data");
     }


}
module.exports = restourentData;