import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import userLogo from "../../assets/icons8-male-user-32.png";
import car from "../../assets/icons8-car-30.png";

const Nav = ({ title }) => {
  // const getCarsFilter = () => {
  //   setURL(
  //     "https://api.punkapi.com/v2/beers?brewed_before=01-2010?page=1&per_page=30"
  //   );
  // };

  // const getAlcoholFilter = () => {
  //   const carFilter = courses.filter((course) => course.type == "car");
  //   setCourses(carFilter);
  // };

  // const getVanFilter = () => {
  //   const vanFilter = courses.filter((course) => course.type == "van");
  //   setCourses(vanFilter);
  // };

  // const getSupercarFilter = () => {
  //   const supercarFilter = courses.filter((course) => course.type == "supercar");
  //   setCourses(supercarFilter);
  // };

  // const handleSelect = (e){
  //   if(e.target.value === "Cars"){
  //     getCarsFilter();
  //   } else if (e.target.value === "Vans"){
  //     getVansFilter();
  //   } else if (e.target.value === "Supercars"){
  //     getSupercarsFilter();
  //   }
  // };

  return (
    //add handleSelect to ul class menu

    <div className="nav">
      <section class="top-nav">
        <Link id="title" to="/">
          <nav className="nav__title--container">
            <div className="nav__title">{title}</div>
            <img className="nav__car" src={car} alt="" />
          </nav>
        </Link>
        <input id="menu-toggle" type="checkbox" />
        <label class="menu-button-container" for="menu-toggle">
          <div class="menu-button"></div>
        </label>
        <ul class="menu">
          <li>Cars</li>
          <li>Vans</li>
          <li>Supercars</li>
          <img className="userLogo" src={userLogo} alt="My Profile" />
        </ul>
      </section>
    </div>
  );
};

export default Nav;
