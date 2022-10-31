import Footer from "./components/Footer/Footer";
import Main from "./containers/Main/Main";
import Nav from "./containers/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarMoreInfo from "./components/CarMoreInfo/CarMoreInfo";
import { useState, useEffect } from "react";
import NewCar from "./components/NewCar/NewCar";
import "../src/App.scss";

// import { firestore } from "./firebase";
// import { collection, addDoc } from "firebase/firestore";

function App() {
  const [cars, setCars] = useState([]);
  const [url, setURL] = useState("http://localhost:8080/cars");

  const getCars = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setCars(data);
  };

//   const carsFirestore = 
//     {
//         "id": 5,
//         "image": "https://vcache.arnoldclark.com/imageserver/ASRLNX0746DD-B-/800/f",
//         "image2": "https://vcache.arnoldclark.com/imageserver/ASRLNX0746DD-B-/800/r",
//         "image3": "https://vcache.arnoldclark.com/imageserver/ASRLNX0746DD-B-/800/4",
//         "make": "BMW",
//         "model": "M3",
//         "type": "car",
//         "price": 53495,
//         "year": 2017,
//         "milage": 16701,
//         "fuelType": "Petrol",
//         "gearbox": "Automatic",
//         "description": "Here at _Carsology, we have this lovely example of a BMW M3. Our example has excellent body condition, service history and two keys. ",
//         "shortDescription": "M3 4dr DCT [Competition Pack]"
//     }

// const handleCreate = () => {
//   const carsCollection = collection(firestore, "cars");
//   addDoc(carsCollection, carsFirestore)

// }

  useEffect(
    () => {
      getCars();
    },
    [url]
  );

  return (
    <Router>
      <>
        <Nav
          title={"_Carsology"}
          cars={cars}
          setCars={setCars}
          setURL={setURL}
          getCars={getCars}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                cars={cars}
                getCars={getCars}
                setURL={setURL}
                setCars={setCars}
              />
            }
          ></Route>
          <Route path="/car" element={<NewCar/>} />
          <Route
            path="/moreInfo/:id"
            element={<CarMoreInfo cars={cars} />}
          ></Route>
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
