import Footer from "./components/Footer/Footer";
import Main from "./containers/Main/Main";
import Nav from "./containers/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseMoreInfo from "./components/CourseMoreInfo/CourseMoreInfo";
import { useState, useEffect } from "react";


function App() {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setURL] = useState(
    "http://localhost:8080/cars"
  );



  const getCourses = async () => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setCourses(data);
    setLoading(false);
  };

  useEffect(() => {
    getCourses();
  }, [url], []);

  return (
    <Router>
      <>
          <Nav title={"_Carsology"} />
          <Routes>
            <Route
            path="/"
            element = {
            <Main courses={courses} getCourses={getCourses} setURL={setURL} setCourses={setCourses}/>
            }>
          </Route>
          <Route
              path="/moreInfo/:id"
              element={<CourseMoreInfo courses={courses} />}
          ></Route>
          </Routes>
          <Footer />
      </>
      </Router>
   
  );
}

export default App;
