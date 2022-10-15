import React from "react";
import { useParams } from "react-router-dom";
import "./CourseMoreInfo.scss"

const CourseMoreInfo = ({courses}) => {
  //set param to make link
  const { id } = useParams();
  //new variable to find the clicked beer
  const clickedCourses = courses.filter((course) => course.id == id);
 

  return (
    <>
      <h1 className="title">MORE INFO</h1>
  
      <div className="moreinfo">
        <img className="moreinfo__image" src={clickedCourses[0].image_url} alt="" />
        <h1 className="moreinfo__name">{clickedCourses[0].name}</h1>
        
        <p className="moreinfo__description">{clickedCourses[0].description}</p>
        <p className="moreinfo__food"><b>Goes well with: </b> <br />{clickedCourses[0].food_pairing.join(", ")}</p>
        <h3 className="moreinfo__brewed">First brewed: {clickedCourses[0].first_brewed}</h3>
        <h3 className="moreinfo__abv">{clickedCourses[0].abv}%</h3>
        <button className="moreinfo__button">Add To Basket</button>
      </div>
      <div className="home">
        <p className="home__text">Click the logo at the top to go home!</p>
      </div>
    </>
  );
};


export default CourseMoreInfo