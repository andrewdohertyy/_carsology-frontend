import React from "react";
import "./CourseCard.scss";
import { Link } from "react-router-dom";

const CourseCard = ({ make, image, model, year, id, price, type }) => {
  // const trimmedDescription = description.substring(0, 50) + "...";



  return (
    <div className="coursecard">
      <img className="coursecard__image" src='https://images.pexels.com/photos/13857619/pexels-photo-13857619.jpeg?cs=srgb&dl=pexels-mike-b-13857619.jpg&fm=jpg&_gl=1*1orq5xa*_ga*MTgzMjEwOTA4OS4xNjY2MTE1NTQy*_ga_8JE65Q40S6*MTY2NjE3NzU5My4yLjAuMTY2NjE3NzU5My4wLjAuMA..' alt="car" />
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
