import "./SearchFilter.scss"

const SearchFilter = ({getSearchValue, cars, setCars, getCars, setURL}) => {

  const clearFilters = () => {
    getCars();
    setURL("http://localhost:8080/cars");
  };

  const sortByAge = () => {
    const ageAscending = [...cars].sort((a, b) => (a.year < b.year ? 1 : -1));
    setCars(ageAscending);
  };

  // const sortByMilage = () => {
  //   const milageAscending = [...courses].sort((a, b) => a.milage - b.milage);
  //   setCourses(milageAscending);
  // };

  const sortByPrice = () => {
    const priceAscending = [...cars].sort((a, b) => b.price - a.price);
    setCars(priceAscending);
  };


  const handleSort = (e) => {
    if (e.target.value === "Age") {
      sortByAge();
    // } else if (e.target.value === "Milage Low-High") {
    //   sortByMilage();
    } else if (e.target.value === "Sort:") {
      clearFilters();
    } else if (e.target.value === "Price High-Low") {
      sortByPrice();
    }
  };

  return (
    <div className='searchfilter'>
    <h3 className='searchfilter__title'>The best cars available here!</h3>
      <input className='searchfilter__search' type="text" placeholder='Search...' onChange={getSearchValue} />
      <div>
          <select onChange={handleSort} className="searchfilter__dropdown" placeholder='Filter'>
            <option>Sort:</option>
            <option>Price High-Low</option>
            <option>Age</option>
          </select>
        </div>
    </div>
  )
}

export default SearchFilter
