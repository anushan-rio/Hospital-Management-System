import React, { useState } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css"; 
import "../../index.css"
import Buttons from "../../Components/Buttons"
import ToastMessage from "../../Utility/ToastMessage.js";
import {PatientOtpSend} from "../../Services/Auth.Service.js"

const PatientLogin = () => {
    //UseState
    const [values, setValues]=useState("")
    const {Email}=values

    //Handlechange
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    
    //Onsubmit Functionality
    const onSubmit = event => {
        event.preventDefault();
        var message;
        var messagetype;
        PatientOtpSend({Email})
        .then(data => {
            if (data.errors && data.errors.length > 0 && data.errors[0].msg) {
                message = data.errors[0].msg;
                messagetype = "Error";
            } else if (data.message) {
                message = data.message;
                messagetype = "Success";
            } else {
                message = "An unknown error occurred.";
                messagetype = "Error";
            }
            ToastMessage(message, messagetype);
    })         
}
    return (
    <div>   
    <div className="container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
         <div className="col-md-6 text-center image-container">
            <img src={require('../../Assets/img/Login.png')}  alt="Placeholder" className="img-fluid" />
         </div>
         <div className="col-md-6">
            <div className="form-container">
            <form>
                <div className="form-group">
                    <p><b>Patient Login</b></p>
                <input type="Email" onChange={handleChange("Email")} className="form-control" placeholder="Email" value={Email} required/>
                </div>
               
                <Buttons type="submit" onClick={onSubmit} label="SendOTP"/>
            </form>
         </div>
        </div>
    </div>
    </div>
    <ToastContainer />
    </div>
);
};

export default PatientLogin;
