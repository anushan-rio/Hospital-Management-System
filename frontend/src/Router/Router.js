import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PatientLogin from "../Pages/Login/PatientLogin";
import DoctorLogin from "../Pages/Login/DoctorLogin";
import Dashboard from "../Pages/Dashboard/Dashboard";

const Routerconfig = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/PatientLogin" element={<PatientLogin/>} />
          <Route path="/DoctorLogin" element={<DoctorLogin/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Routerconfig;






//   export const PatientVerifyOtp = otpverify=>{
//     return fetch(`${API}/verifyotp`,{
//         method:"Post",
//         headers:{
//             Accept:"application/json",
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify(otpverify)
//     })
//     .then(response=>{   
//         return response.json()
//     })
//     .catch(err=>{
//         console.log("Error In Sigup Page")
//     })
// }