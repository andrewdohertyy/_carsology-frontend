import React from "react";
import "./CarCard.scss";
import { Link } from "react-router-dom";

const CarCard = ({ make, image, model, year, id, price }) => {
  // const trimmedDescription = description.substring(0, 50) + "...";



  return (
    <div className="carcard">
      <img className="carcard__image" src={image} alt="car" />
      <h2 className="carcard__title">{make} ({model})</h2>
      <p className="carcard__facts">E400 4Matic AMG Line Premium Plus 2dr 9G-Tronic</p>

      <ul className="carcard__tags">
            <li className="carcard__tag">{year}</li>
            <li className="carcard__tag">5,000 Miles</li>
            <li className="carcard__tag">Petrol</li>
            <li className="carcard__tag">Automatic</li>
          </ul>
      <h3 className="carcard__price">Price: £{price}</h3>
      
      <Link to={`/moreInfo/${id}`}>
        <button className="carcard__moreinfo">More Info</button>
      </Link>
    </div>
  );
};

export default CarCard;
