import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./Global.css";
import UpperNav from "./Components/UpperNav/UpperNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UpperNav />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
};

export default App;
