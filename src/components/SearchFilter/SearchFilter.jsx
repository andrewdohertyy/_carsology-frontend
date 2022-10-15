import React from 'react'
import "./SearchFilter.scss"

const SearchFilter = ({getSearchValue, courses, setCourses, getCourses, setURL}) => {

  const clearFilters = () => {
    getCourses();
    setURL("https://api.punkapi.com/v2/beers?per_page=30");
  };

  // const sortByAge = () => {
  //   const ageAscending = [...courses].sort((a, b) => (a.age > b.age ? 1 : -1));
  //   setCourses(ageAscending);
  // };

  // const sortByMilage = () => {
  //   const milageAscending = [...courses].sort((a, b) => a.milage - b.milage);
  //   setCourses(milageAscending);
  // };

  // const sortByPrice = () => {
  //   const priceAscending = [...courses].sort((a, b) => a.price - b.price);
  //   setCourses(priceAscending);
  // };


  // const handleSort = (e) => {
  //   if (e.target.value === "Age A-Z") {
  //     sortByAge();
  //   } else if (e.target.value === "Milage Low-High") {
  //     sortByMilage();
  //   } else if (e.target.value === "Sort:") {
  //     clearFilters();
  //   } else if (e.target.value === "Price Low-High") {
  //     sortByPrice();
  //   }
  // };


  return (

    //add handle sort to select tag
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
