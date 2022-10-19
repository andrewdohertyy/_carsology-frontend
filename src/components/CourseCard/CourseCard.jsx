import React from "react";
import "./CourseCard.scss";
import { Link } from "react-router-dom";

const CourseCard = ({ make, image, model, year, id, price, type }) => {
  // const trimmedDescription = description.substring(0, 50) + "...";

  console.log(image);

  return (
    <div className="coursecard">
      <img className="coursecard__image" src={image} alt="" />
      <h3 className="coursecard__title">{make}</h3>
      <p className="coursecard__price">{model}</p>
      <p className="coursecard__info">{price}</p>
      <p className="coursecard__year">{year}</p>
      <p className="coursecard__type">{type}</p>
      <Link to={`/moreInfo/${id}`}>
        <button className="coursecard__moreinfo">More Info</button>
      </Link>
    </div>
  );
};

export default CourseCard;
