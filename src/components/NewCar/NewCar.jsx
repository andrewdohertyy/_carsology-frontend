import React from "react";
import "./NewCar.scss";

const NewCar = () => {
  return (
    <div className="form__container">
      <h1 className="form__container--title">Add Car To Database</h1>
      <form action="" className="form">
        <div className="form__input--text">
          <label htmlFor="">Make:</label>
          <input className="form__input--make input" type="text" />
          <label htmlFor="">Model:</label>
          <input className="form__input--model input" type="text" />
          <label htmlFor="">Type:</label>
          <input className="form__input--type input" type="text" />
          <label htmlFor="">Price: </label>
          <input type="text" className="form__input--price input" />
          <label htmlFor="">Year:</label>
          <input type="text" className="form__input--year input" />
        </div>
        <div className="form__input--images">
          <label htmlFor="">Image 1:</label>
          <input className="form__input--image input" type="text" />
          <label htmlFor="">Image 2:</label>
          <input className="form__input--image2 input" type="text" />
          <label htmlFor="">Image 3:</label>
          <input className="form__input--image3 input" type="text" />
        </div>
        {/* <input type="text" className="form__input--id" /> */}
        <button className="form__submit">Submit</button>
      </form>
    </div>
  );
};

export default NewCar;
