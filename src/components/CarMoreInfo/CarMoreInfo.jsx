import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./CarMoreInfo.scss";
import Form from "../../components/Form/Form";

const CarMoreInfo = ({cars}) => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const clickedCars = cars.filter((car) => car.id == id);

  const getCarById = async id => {
    const url = `http://localhost:8080/cars/${id}`;
    const response = await fetch(url);
    const carData = await response.json();
    setCar(carData);
  };


  useEffect(() => {
    getCarById(id);
  }, [id]);


  const handleUpdate = async updatedCar => {
    const result = await fetch(`http://localhost:8080/cars/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCar),
    });

    if (result.ok) {
      alert("Car updated");
      setCar(updatedCar);
      navigate("/");
      window.location.reload();
      
    } else {
      const message = await result.text();
      alert(message);
    }
  };



  const handleDelete = async updatedCar => {
    const result = await fetch(`http://localhost:8080/cars/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (result.ok) {
      alert("Car deleted");
      navigate("/");
      window.location.reload();
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleShowForm = () => setShowForm(!showForm);
console.log(clickedCars[0]);

  return (
    <>
      <div className="container">
        <h1 className="title">
          {clickedCars[0].make} {clickedCars[0].model}
        </h1>
        <div className="moreinfo">
          <div className="container__images">
            <img
              className="moreinfo__image"
              src={clickedCars[0].image}
              alt="car"
            />
            <img
              className="moreinfo__image"
              src={clickedCars[0].image2}
              alt="car"
            />
            <img
              className="moreinfo__image"
              src={clickedCars[0].image3}
              alt="car"
            />
          </div>
          <h1 className="moreinfo__swipe">Swipe to see more images <span>&#8594;</span></h1>
          <h1 className="moreinfo__name">
            {clickedCars[0].make} {clickedCars[0].model}
          </h1>
          <p className="moreinfo__facts">{clickedCars[0].shortDescription}</p>
          <ul className="moreinfo__tags">
            <li className="moreinfo__tag">{clickedCars[0].year}</li>
            <li className="moreinfo__tag">{clickedCars[0].milage} Miles</li>
            <li className="moreinfo__tag">{clickedCars[0].fuelType}</li>
            <li className="moreinfo__tag">{clickedCars[0].gearbox}</li>
          </ul>
          
          <p className="moreinfo__description">{clickedCars[0].description} Drop into our showroom between 9am-5pm Monday - Sunday to take a look and request a test-drive! Our prices are checked daily, and our group is one of the UKs fastest growing car dealer groups. We also offer competitive part exchange valuations and will do all that we can to ensure you leave our nationwide car dealerships as a happy guest.</p>
          <h2 className="moreinfo__price">Price: £{clickedCars[0].price}</h2>
          <button
            className="moreinfo__edit moreinfo__button"
            onClick={handleShowForm}
          >
            Edit
          </button>
          <button
            className="moreinfo__delete moreinfo__button"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
        <div className="home">
          <p className="home__text">Click the logo at the top to go home!</p>
        </div>
      </div>
      {showForm && <Form defaultFormState={car} formTitle={"Edit Car"} handleSubmit={handleUpdate} />}
    </>
  );
};

export default CarMoreInfo;
