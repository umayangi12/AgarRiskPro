import React from "react";
import "./app.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Facilities from "./Components/Facilities/Facilities";
import SeverityPredictor from "./Components/SeverityPredictor/SeverityPredictor";

const App = () => {
  return <div>
    <NavBar/>
    <Home/>
    <Facilities/>
    {/* <SeverityPredictor/> */}
  </div>;
};

export default App;
