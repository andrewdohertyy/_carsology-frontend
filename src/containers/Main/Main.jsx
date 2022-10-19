import React from "react";
import Header from "../../components/Header/Header";
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import CardContainer from "../CardContainer/CardContainer";
import { useState, useEffect } from "react";
import Pagination from "../../components/Pagination/Pagination";
import "./Main.scss";


const Main = ({cars, getCars, setURL, setCars}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(6);
  const [searchValue, setSearchValue] = useState("");

  const getSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);


const paginate = pageNumber => {
  setCurrentPage(pageNumber);
}

  // console.log(currentCourses);


  return (
    <div className="main">
      <Header title={"_Carsology - Find your next car here!"} />
      <SearchFilter cars={cars} getSearchValue={getSearchValue} setCars={setCars} getCars={getCars} setURL={setURL}/>
      <CardContainer
        currentCars={currentCars}
        cars={cars}
        getSearchValue={getSearchValue}
        searchValue={searchValue}
      />
      <Pagination carsPerPage={carsPerPage} totalCars={cars.length} paginate={paginate}/>
    </div>
  );
};

export default Main;
