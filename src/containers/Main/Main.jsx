import React from "react";
import Header from "../../components/Header/Header";
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import CardContainer from "../CardContainer/CardContainer";
import { useState, useEffect } from "react";
import Pagination from "../../components/Pagination/Pagination";


const Main = ({courses, getCourses, setURL, setCourses}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(6);
  const [searchValue, setSearchValue] = useState("");

  const getSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);


const paginate = pageNumber => {
  setCurrentPage(pageNumber);
}

  console.log(currentCourses);


  return (
    <div>
      <Header title={"Find your next car here!"} />
      <SearchFilter courses={courses} getSearchValue={getSearchValue} setCourses={setCourses} getCourses={getCourses} setURL={setURL}/>
      <CardContainer
        currentCourses={currentCourses}
        courses={courses}
        getSearchValue={getSearchValue}
        searchValue={searchValue}
      />
      <Pagination coursesPerPage={coursesPerPage} totalCourses={courses.length} paginate={paginate}/>
    </div>
  );
};

export default Main;
