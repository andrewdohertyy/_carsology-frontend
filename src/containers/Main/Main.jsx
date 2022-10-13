import React from "react";
import Header from "../../components/Header/Header";
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import CardContainer from "../CardContainer/CardContainer";
import { useState, useEffect } from "react";

const Main = () => {
  const [courses, setCourses] = useState([]);
  const [url, setURL] = useState(
    "https://api.punkapi.com/v2/beers?per_page=30"
  );

  const getCourses = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setCourses(data);
  };

  useEffect(() => {
    getCourses();
  }, []);

  const [searchValue, setSearchValue] = useState("");

  const getSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <Header title={"Find your next course here!"} />
      <SearchFilter courses={courses} getSearchValue={getSearchValue} />
      <CardContainer
        courses={courses}
        getSearchValue={getSearchValue}
        searchValue={searchValue}
      />
    </div>
  );
};

export default Main;
