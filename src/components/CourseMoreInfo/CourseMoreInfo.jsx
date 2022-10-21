import React from "react";
import { useParams } from "react-router-dom";
import "./CourseMoreInfo.scss"

const CourseMoreInfo = ({cars}) => {
  const { id } = useParams();
  const clickedCars = cars.filter((car) => car.id == id);
 
  return (
    <>
    <div className="container">
      <h1 className="title">{clickedCars[0].make} {clickedCars[0].model} </h1>
      <div className="moreinfo">
        <div className="container__images">
        <img className="moreinfo__image" src={clickedCars[0].image} alt="car" />
        <img className="moreinfo__image" src={clickedCars[0].image2} alt="car" />
        <img className="moreinfo__image" src={clickedCars[0].image3} alt="car" />
        </div>
        <h1 className="moreinfo__swipe">Swipe to see more images</h1>
        <h1 className="moreinfo__name">{clickedCars[0].make} {clickedCars[0].model}</h1>
        <p className="moreinfo__price">Price: £{clickedCars[0].price}</p>
        <h3 className="moreinfo__year">Year: {clickedCars[0].year}</h3>
        {/* <button className="moreinfo__button">Make An Enquiry</button> */}
        <button className="moreinfo__edit moreinfo__button">Edit</button>
        <button className="moreinfo__delete moreinfo__button">Delete</button>
      </div>
      <div className="home">
        <p className="home__text">Click the logo at the top to go home!</p>
      </div>
      </div>
    </>
  );
};


export default CourseMoreInfo