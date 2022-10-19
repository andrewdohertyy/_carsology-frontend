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
        {/* <img className="moreinfo__image" src={clickedCars[0].image} alt="car" /> */}
       <img className="moreinfo__image" src='https://images.pexels.com/photos/13857619/pexels-photo-13857619.jpeg?cs=srgb&dl=pexels-mike-b-13857619.jpg&fm=jpg&_gl=1*1orq5xa*_ga*MTgzMjEwOTA4OS4xNjY2MTE1NTQy*_ga_8JE65Q40S6*MTY2NjE3NzU5My4yLjAuMTY2NjE3NzU5My4wLjAuMA..' alt="" /> 

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