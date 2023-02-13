const RestaurantCard = ({ name, cuisines, locality, cloudinaryImageId }) => {
    return (
      <div className="card">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
        <h5>{name}</h5>
        <h5>{cuisines}</h5>
        <h5>{locality}</h5>
      </div>
    );
  };

  export default RestaurantCard;