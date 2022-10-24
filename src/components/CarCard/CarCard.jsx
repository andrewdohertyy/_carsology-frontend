import React from "react";
import "./CarCard.scss";
import { Link } from "react-router-dom";

const CarCard = ({ make, image, model, year, id, price, fuelType, milage, shortDescription, gearbox }) => {
  // const trimmedDescription = description.substring(0, 50) + "...";



  return (
    <div className="carcard">
      <img className="carcard__image" src={image} alt="car" />
      <h2 className="carcard__title">{make} ({model})</h2>
      <p className="carcard__facts">{shortDescription}</p>

      <ul className="carcard__tags">
            <li className="carcard__tag">{year}</li>
            <li className="carcard__tag">{milage} Miles</li>
            <li className="carcard__tag">{fuelType}</li>
            <li className="carcard__tag">{gearbox}</li>
          </ul>
      <h3 className="carcard__price">Price: £{price}</h3>
      
      <Link to={`/moreInfo/${id}`}>
        <button className="carcard__moreinfo">More Info</button>
      </Link>
    </div>
  );
};

export default CarCard;
