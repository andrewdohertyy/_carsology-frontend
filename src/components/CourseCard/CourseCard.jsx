import React from 'react';
import "./CourseCard.scss";

const CourseCard = () => {
  return (
    <div className='coursecard'>
        <img className='coursecard__img' src="" alt="card image" />
        <h2 className='coursecard__title'>title prop</h2>
        <p className='coursecard__info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam cumque harum, culpa voluptatem quo minus unde dolorum ipsa. Ipsam magni quae voluptatem vero iure ad inventore totam ab corrupti. Saepe?</p>
        <p className='coursecard__price'>price prop</p>
        <button className='coursecard__moreinfo'>more info</button>
    </div>
  )
}

export default CourseCard