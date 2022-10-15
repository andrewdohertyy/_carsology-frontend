import React from 'react'
import CourseCard from '../../components/CourseCard/CourseCard';
import "./CardContainer.scss";

const CardContainer = ({searchValue, currentCourses}) => {

  console.log(currentCourses);

  const filterCourses = (currentCourses, searchValue) => {
    return currentCourses.filter((course) => course.name.toLowerCase().includes(searchValue.toLowerCase()))
  }

const coursesJSX = (currentCourses) => {
  return filterCourses(currentCourses, searchValue).map((course, index) => {
    return (
      <div key={index}>
          <CourseCard
          id={course.id}
          name={course.name}
          image={course.image_url}
          description={course.description}
          tagline={course.tagline} 
          />
      </div>
  );
  });
};

  return (
      <div className="container__grid">
        {coursesJSX(currentCourses)}
      </div>
  );
  }
export default CardContainer;