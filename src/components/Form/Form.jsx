import "./Form.scss";
import { useState } from "react";

const Form = ({ formTitle, defaultFormState, handleSubmit }) => {
  const [cars, setCars] = useState(defaultFormState);
  const handleValidation = (event) => {
    event.preventDefault();

    if (Object.values(cars).some((value) => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }
    console.log(cars);
    handleSubmit(cars);
  };

  return (
    <div className="form__container">
      <h1 className="form__container--title">{formTitle}</h1>
      <form action="" className="form" onSubmit={handleValidation}>
        <div className="form__input--text">
          <label htmlFor="">Make:</label>
          <input
            className="form__input--make input"
            type="text"
            value={cars.make}
            onInput={(event) => setCars({ ...cars, make: event.target.value })}
          />

          <label htmlFor="">Model:</label>
          <input
            className="form__input--model input"
            type="text"
            value={cars.model}
            onInput={(event) => setCars({ ...cars, model: event.target.value })}
          />

          <label htmlFor="">Type:</label>
          <input
            className="form__input--type input"
            type="text"
            value={cars.type}
            onInput={(event) => setCars({ ...cars, type: event.target.value })}
          />

          <label htmlFor="">Price: </label>
          <input
            type="text"
            className="form__input--price input"
            value={cars.price}
            onInput={(event) => setCars({ ...cars, price: event.target.value })}
          />

          <label htmlFor="">Year:</label>
          <input
            type="text"
            className="form__input--year input"
            value={cars.year}
            onInput={(event) => setCars({ ...cars, year: event.target.value })}
          />
        </div>

        <div className="form__input--text2">
          <label htmlFor="">Milage:</label>
          <input
            className="form__input--milage input"
            type="text"
            value={cars.milage}
            onInput={(event) =>
              setCars({ ...cars, milage: event.target.value })
            }
          />

          <label htmlFor="">Fuel Type:</label>
          <input
            className="form__input--fuelType input"
            type="text"
            value={cars.fuelType}
            onInput={(event) =>
              setCars({ ...cars, fuelType: event.target.value })
            }
          />

          <label htmlFor="">Gearbox:</label>
          <input
            className="form__input--gearbox input"
            type="text"
            value={cars.gearbox}
            onInput={(event) =>
              setCars({ ...cars, gearbox: event.target.value })
            }
          />

          <label htmlFor="">Description:</label>
          <input
            className="form__input--description input"
            type="text"
            value={cars.description}
            onInput={(event) =>
              setCars({ ...cars, description: event.target.value })
            }
          />

          <label htmlFor="">Short Description:</label>
          <input
            className="form__input--shortDescription input"
            type="text"
            value={cars.shortDescription}
            onInput={(event) =>
              setCars({ ...cars, shortDescription: event.target.value })
            }
          />
        </div>

        <div className="form__input--images">
          <label htmlFor="">Image 1:</label>
          <input
            className="form__input--image input"
            type="text"
            value={cars.image}
            onInput={(event) => setCars({ ...cars, image: event.target.value })}
          />

          <label htmlFor="">Image 2:</label>
          <input
            className="form__input--image2 input"
            type="text"
            value={cars.image2}
            onInput={(event) =>
              setCars({ ...cars, image2: event.target.value })
            }
          />

          <label htmlFor="">Image 3:</label>
          <input
            className="form__input--image3 input"
            type="text"
            value={cars.image3}
            onInput={(event) =>
              setCars({ ...cars, image3: event.target.value })
            }
          />
        </div>
        {/* <input type="text" className="form__input--id" /> */}
        <button className="form__submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
