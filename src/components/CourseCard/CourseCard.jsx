import React from 'react';
import "./CourseCard.scss";

const CourseCard = ({name, image, description, tagline, id}) => {

  const trimmedDescription = description.substring(0,50) + "...";

  return (
    <div className='coursecard'>
        <img className='coursecard__img' src="{image}" alt="" />
        <h3 className='coursecard__title'>{name}</h3>
        <p className='coursecard__price'>{tagline}</p>
        <p className='coursecard__info'>{trimmedDescription}</p>
        <button className='coursecard__moreinfo'>More Info</button>
    </div>
  )
}

export default CourseCard