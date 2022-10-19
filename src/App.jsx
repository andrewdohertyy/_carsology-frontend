import Footer from "./components/Footer/Footer";
import Main from "./containers/Main/Main";
import Nav from "./containers/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseMoreInfo from "./components/CourseMoreInfo/CourseMoreInfo";
import { useState, useEffect } from "react";


function App() {

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setURL] = useState(
    "http://localhost:8080/cars"
  );



  const getCars = async () => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setCars(data);
    setLoading(false);
  };

  useEffect(() => {
    getCars();
  }, [url], []);

  return (
    <Router>
      <>
          <Nav title={"_Carsology"} />
          <Routes>
            <Route
            path="/"
            element = {
            <Main cars={cars} getCars={getCars} setURL={setURL} setCars={setCars}/>
            }>
          </Route>
          <Route
              path="/moreInfo/:id"
              element={<CourseMoreInfo cars={cars} />}
          ></Route>
          </Routes>
          <Footer />
      </>
      </Router>
   
  );
}

export default App;
