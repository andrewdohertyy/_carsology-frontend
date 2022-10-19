import React from 'react'
import CourseCard from '../../components/CourseCard/CourseCard';
import "./CardContainer.scss";

const CardContainer = ({searchValue, currentCars}) => {

  console.log(currentCars);

  const filterCars = (currentCars, searchValue) => {
    return currentCars.filter((car) => car.make.toLowerCase().includes(searchValue.toLowerCase()))
  }

const carsJSX = (currentCars) => {
  return filterCars(currentCars, searchValue).map((car, index) => {
    return (
      <div key={index}>
          <CourseCard
          id={car.id}
          make={car.make}
          image={car.image}
          model={car.model}
          price={car.price} 
          type={car.type}
          year={car.year}
          />
      </div>
  );
  });
};

  return (
      <div className="container__grid">
        {carsJSX(currentCars)}
      </div>
  );
  }
export default CardContainer;