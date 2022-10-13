import React from 'react'
import CourseCard from '../../components/CourseCard/CourseCard';
import "./CardContainer.scss";

const CardContainer = ({courses, searchValue}) => {

  const filterCourses = (courses, searchValue) => {
    return courses.filter((course) => course.name.toLowerCase().includes(searchValue.toLowerCase()))
  }

const coursesJSX = (courses) => {
  return filterCourses(courses, searchValue).map((course, index) => {
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
        {coursesJSX(courses)}
      </div>
  );
  }
export default CardContainer;