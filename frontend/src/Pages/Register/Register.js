import React, { useState } from "react"
import { ToastContainer } from 'react-toastify';
import {Sigup} from "../../Services/Auth.Service.js"
import 'react-toastify/dist/ReactToastify.css';
import ToastMessage from  "../../Utility/ToastMessage.js"
import "./Register.css"
import "../../index.css"
import Buttons from "../../Components/Buttons"

const Register = () => {

    //UseState
    const [values, setValues]=useState({Email: "",password: "",HospitalName: "",Phno: ""})
    const {Email,password,HospitalName,Phno}=values

    //HandleChange
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    //Onsubmit Functionality
    const onSubmit = event => {
        event.preventDefault();
        var message;
        var messagetype;
        Sigup({Email,password,HospitalName,Phno})
        .then(data=>{
            if( data.errors && data.errors.length > 0 && data.errors[0].msg){
                message =data.errors[0].msg;
                messagetype="Error";
            }
            if(data.message){
                message =data.message;
                messagetype="Warning";
            }
            if(data.Savedflag==="1"){
                message ="Data Saved SucessFully";
                messagetype="Success";
                setValues({Email: "",password: "",HospitalName: "",Phno: ""});
            }
            ToastMessage(message,messagetype);
        })
        
    }



    return (
    <div>
    <div className="container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 text-center image-container">
            <img src={require('../../Assets/img/SiginUp.png')}  alt="Placeholder" className="img-fluid" />
        </div>
        <div className="col-md-6">
            <div className="form-container">
            <form>
                <div className="form-group">
                <input type="Email" onChange={handleChange("Email")} value={Email} className="form-control" placeholder="Email" required/>
                </div>
                <div className="form-group">
                <input type="password" onChange={handleChange("password")} value={password} className="form-control" placeholder="password" required/>
                </div>
                <div className="form-group">
                <input type="HospitalName" onChange={handleChange("HospitalName")}  value={HospitalName} className="form-control" placeholder="HospitalName" required/>
                </div>
                <div className="form-group">
                <input type="Phno"  onChange={handleChange("Phno")} value={Phno} className="form-control" placeholder="Phno" required/>
                </div>
                <Buttons type="submit" onClick={onSubmit}  label="Sign Up"/>
            </form>
            </div>
        </div>
        </div>
    </div>
    <ToastContainer />
    </div>
);
};

export default Register;