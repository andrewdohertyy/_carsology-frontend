import React from 'react'
import "./Pagination.scss";

const Pagination = ({coursesPerPage, totalCourses, paginate}) => {

    const pageNumbers = [];
    for (let i= 1; i<= Math.ceil(totalCourses / coursesPerPage); i++){
        pageNumbers.push(i);
    }
  return (
    <div>
        <ul className="pagination">
            {pageNumbers.map(number => (
                <li key={number} className="pagination__item">
                    <button onClick={() => paginate(number)}  className='pagination__link'>{number}</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Pagination