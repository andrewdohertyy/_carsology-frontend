import Footer from "./components/Footer/Footer";
import Main from "./containers/Main/Main";
import Nav from "./containers/Nav/Nav";
// import { BrowserRouter as Router, Routes, Route } from "react";

function App() {
  console.log("i work");

  return (
      <>
          <Nav title={"_courseology"} />
          
          <Main />
       
          <Footer />
      </>
   
  );
}

export default App;
