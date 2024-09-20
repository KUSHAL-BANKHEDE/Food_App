

const menudata = async(req , res)=>{
    const {resId} = req.params 
    
    const url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.1766701&lng=78.00807449999999&restaurantId="+resId;

    const headers = {
        "Content-Type": "application/json",
        "Origin" : "https://www.swiggy.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.3",
      };

      try {
        const response = await fetch(url, {
            method: "GET",
            headers : headers 
        })

        if(!response.ok){
            throw new Error("Error");
        }
        const data = await response.json();
         
        console.log(data);
        res.status(200).json(data);
      }
      catch{
        console.log("error");
      }
}
module.exports = menudata;