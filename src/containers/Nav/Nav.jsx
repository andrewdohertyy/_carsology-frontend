import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import add from "../../assets/add_white_button_icon_227863.png";
import car from "../../assets/icons8-car-30.png";

const Nav = ({ title, cars, setCars, getCars, setURL }) => {

  const clearFilters = () => {
    getCars();
    setURL("http://localhost:8080/cars");
  };


  const getCarFilter = () => {
    const carFilter = cars.filter((car) => car.type == "car");
    setCars(carFilter);
  };

  const getVanFilter = () => {
    const vanFilter = cars.filter((car) => car.type == "van");
    setCars(vanFilter);
  };

  const getSupercarFilter = () => {
    const supercarFilter = cars.filter((car) => car.type == "supercar");
    setCars(supercarFilter);
  };

  const handleSelect = (e) => {
    if(e.target.value == "Cars"){
      getCarFilter();
    } else if (e.target.value == "Vans"){
      getVanFilter();
    } else if (e.target.value == "Supercars"){
      getSupercarFilter();
    } else if (e.target.value == "All"){
      clearFilters();
    }
  };

  return (

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
        <ul class="menu" onClick={handleSelect}>
          <option>All</option>
          <option>Cars</option>
          <option>Vans</option>
          <option>Supercars</option>
          <Link id="new" to="/car">
          <img className="userLogo" src={add} alt="My Profile" />
          </Link>
        </ul>
      </section>
    </div>
  );
};

export default Nav;
