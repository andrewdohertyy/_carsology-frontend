import React from 'react'
import "./Pagination.scss";
// import  { useState } from 'react'

const Pagination = ({carsPerPage, totalCars, paginate}) => {

    // const [currentPage, setCurrentPage] = useState(0)

    const pageNumbers = [];
    for (let i= 1; i<= Math.ceil(totalCars / carsPerPage); i++){
        pageNumbers.push(i);
    }
  return (
    <div>
        <ul className="pagination">

                {/* {pageNumbers.includes(currentPage - 1) && <a className='pagination__button' onClick={() => {
                    setCurrentPage(currentPage - 1);
                    paginate(currentPage - 1);
                }}>Previous</a>} */}
            {/* <button className='pagination__button'>Previous</button> */}
            {pageNumbers.map(number => (
                <li key={number} className="pagination__items">
                    <button onClick={() => paginate(number)}  className='pagination__link'>{number}</button>
                </li>
            ))}
            {/* <button className='pagination__button'>Next</button> */}
        </ul>
    </div>
  )
}

export default Pagination