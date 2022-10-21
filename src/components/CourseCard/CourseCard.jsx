import React from "react";
import "./CourseCard.scss";
import { Link } from "react-router-dom";

const CourseCard = ({ make, image, model, year, id, price }) => {
  // const trimmedDescription = description.substring(0, 50) + "...";



  return (
    <div className="coursecard">
      <img className="coursecard__image" src={image} alt="car" />
      <h3 className="coursecard__title">{make} ({model})</h3>
      <p className="coursecard__year">Year: {year}</p>
      <p className="coursecard__info">Price: £{price}</p>
      
      <Link to={`/moreInfo/${id}`}>
        <button className="coursecard__moreinfo">More Info</button>
      </Link>
    </div>
  );
};

export default CourseCard;
