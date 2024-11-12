import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PatientLogin from "../Pages/Login/Patient.Login";

const Routerconfig = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/PatientLogin" element={<PatientLogin/>} />
          
          <Route path="/Register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Routerconfig;