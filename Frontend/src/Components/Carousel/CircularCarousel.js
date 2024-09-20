const CirculerCard = (props) => {
    const { itemData } = props;
  
    if (!itemData) {
      return null; // Return null or a fallback component if itemData is undefined
    }
  
    const { imageId } = itemData;
    const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${imageId}`; // Modify this URL as per your requirement
  
    return (
      <div className="w-44">
        <img 
        src={imageUrl} alt="Circular Card"
        
         />
      </div>
    );
  };
  
  export default CirculerCard;