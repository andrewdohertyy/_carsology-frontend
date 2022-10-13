import React from 'react'
import "./SearchFilter.scss"

const SearchFilter = ({courses, getSearchValue}) => {
  return (
    <div className='searchfilter'>
      <input className='searchfilter__search' type="text" placeholder='Search...' onChange={getSearchValue} />

      <div className="searchfilter__dropdown">
          <select>
            <option>Lowest price</option>
            <option>Alphabetical</option>
            <option>Completion Time</option>
          </select>
        </div>
    </div>
  )
}

export default SearchFilter
