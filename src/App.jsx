import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./Global.css";
import UpperNav from "./Components/UpperNav/UpperNav";
import AboutUs from "./Components/AboutUs/AboutUs";
import OurServices from "./Components/OurServices/OurServices";
import Heading from "./Components/Heading/Heading";
const App = () => {
  return (
    <div>
      <UpperNav />
      <NavBar />
      <Heading />
      <AboutUs />
      <OurServices />
    </div>
  );
};

export default App;
