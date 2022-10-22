import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./CarMoreInfo.scss";
import Form from "../../components/Form/Form";

const CarMoreInfo = ({ cars }) => {
  const { id } = useParams();
  // const [showForm, setShowForm] = useState(false);
  const [carData, setCar] = useState(null);
  const navigate = useNavigate();

  const clickedCars = cars.filter((car) => car.id == id);
  // const handleShowForm = () => setShowForm(!showForm);

  const getCarById = async (id) => {
    const url = `http://localhost:8080/cars/${id}`;
    const response = await fetch(url);
    const carData = await response.json();
    setCar(carData);
  };
  useEffect(() => {
    getCarById(id);
  }, [id]);

  const handleDelete = async (carData) => {
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

  return (
    <>
      <div className="container">
        <h1 className="title">
          {clickedCars[0].make} {clickedCars[0].model}{" "}
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
          <p className="moreinfo__facts">E400 4Matic AMG Line Premium Plus 2dr 9G-Tronic</p>
          <ul className="moreinfo__tags">
            <li className="moreinfo__tag">{clickedCars[0].year}</li>
            <li className="moreinfo__tag">5,000 Miles</li>
            <li className="moreinfo__tag">Petrol</li>
            <li className="moreinfo__tag">Automatic</li>
          </ul>
          
          <p className="moreinfo__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam reiciendis iste, doloribus officiis est laudantium aliquam ab quo aperiam iusto sequi qui vitae culpa adipisci, veniam corporis ipsam laboriosam eaque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste neque veritatis assumenda consequuntur tempore ullam recusandae rerum dolorum cumque id! Sint recusandae voluptatum, qui aperiam nobis similique porro facere adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur culpa laudantium ut ab a commodi quos iure nulla vel amet, nobis quo labore perspiciatis alias soluta provident accusantium asperiores harum.</p>
          <h2 className="moreinfo__price">Price: £{clickedCars[0].price}</h2>
          <button
            className="moreinfo__edit moreinfo__button"
            // onClick={handleShowForm}
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
    </>
  );
};

export default CarMoreInfo;
