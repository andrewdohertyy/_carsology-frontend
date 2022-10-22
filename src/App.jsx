import Footer from "./components/Footer/Footer";
import Main from "./containers/Main/Main";
import Nav from "./containers/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarMoreInfo from "./components/CarMoreInfo/CarMoreInfo";
import { useState, useEffect } from "react";
import NewCar from "./components/NewCar/NewCar";

function App() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setURL] = useState("http://localhost:8080/cars");

  const getCars = async () => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setCars(data);
    setLoading(false);
  };

  useEffect(
    () => {
      getCars();
    },
    [url],
    []
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
          <Route 
          path="/cars/create" 
          element={<NewCar />} />
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
