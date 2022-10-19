import React from "react";
import { useParams } from "react-router-dom";
import "./CourseMoreInfo.scss"

const CourseMoreInfo = ({cars}) => {
  //set param to make link
  const { id } = useParams();
  //new variable to find the clicked beer
  const clickedCars = cars.filter((car) => car.id == id);
 

  return (
    <>
      <h1 className="title">MORE INFO</h1>
  
      <div className="moreinfo">
        <img className="moreinfo__image" src={clickedCars[0].image} alt="car" />
        <h1 className="moreinfo__name">{clickedCars[0].make}</h1>
        
        <p className="moreinfo__description">{clickedCars[0].model}</p>
        <p className="moreinfo__food">{clickedCars[0].price}</p>
        <h3 className="moreinfo__brewed">{clickedCars[0].year}</h3>
        <h3 className="moreinfo__abv">{clickedCars[0].type}</h3>
        {/* <button className="moreinfo__button">Add To Basket</button> */}
      </div>
      <div className="home">
        <p className="home__text">Click the logo at the top to go home!</p>
      </div>
    </>
  );
};


export default CourseMoreInfo