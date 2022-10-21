import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";

import "./CarMoreInfo.scss"
import Form from "../../components/Form/Form";

const CarMoreInfo = ({cars}) => {
  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);
  const [carData, setCar] = useState(null);
  const navigate = useNavigate();

  const clickedCars = cars.filter((car) => car.id == id);
  const handleShowForm = () => setShowForm(!showForm);

  const getCarById = async id => {
    const url = `http://localhost:8080/cars/${id}`;
    const response = await fetch(url);
    const carData = await response.json();
    setCar(carData);
  };
  useEffect(() => {
    getCarById(id);
  }, [id]);


  const handleDelete = async carData => {
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
      <h1 className="title">{clickedCars[0].make} {clickedCars[0].model} </h1>
      <div className="moreinfo">
        <div className="container__images">
        <img className="moreinfo__image" src={clickedCars[0].image} alt="car" />
        <img className="moreinfo__image" src={clickedCars[0].image2} alt="car" />
        <img className="moreinfo__image" src={clickedCars[0].image3} alt="car" />
        </div>
        <h1 className="moreinfo__swipe">Swipe to see more images</h1>
        <h1 className="moreinfo__name">{clickedCars[0].make} {clickedCars[0].model}</h1>
        <p className="moreinfo__price">Price: £{clickedCars[0].price}</p>
        <h3 className="moreinfo__year">Year: {clickedCars[0].year}</h3>
        {/* <button className="moreinfo__button">Make An Enquiry</button> */}
        <button className="moreinfo__edit moreinfo__button" onClick={handleShowForm}>Edit</button>
        <button className="moreinfo__delete moreinfo__button" onClick={handleDelete}>Delete</button>
      </div>
      <div className="home">
        <p className="home__text">Click the logo at the top to go home!</p>
      </div>
      </div>
      {showForm && <Form />}
    </>
  );
};


export default CarMoreInfo