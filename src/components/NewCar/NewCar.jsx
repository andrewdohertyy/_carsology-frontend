import Form from "../Form/Form";
import "./NewCar.scss";
import {  useNavigate } from "react-router-dom";

const NewCar = () => {

  const navigate = useNavigate();

  const handleSubmit = async car => {
    const res = await fetch("http://localhost:8080/car", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    });

    if (res.ok) {
      alert("Car added");
      navigate("/");
    } else {
      const message = await res.text();
      alert(message);
    }
  };

  const defaultFormState = {make: "", model: "", type: "", price: null, year: null, image: "", image2: "", image3: "", milage: null, gearbox: "", fuelType: "", description: "", shortDescription: ""};


  return (
    <Form handleSubmit={handleSubmit} defaultFormState={defaultFormState} formTitle={"New Car"}/>
  );
};

export default NewCar;
