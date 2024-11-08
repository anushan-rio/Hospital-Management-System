import React from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastMessage from "../../Utility/ToastMessage.js"
import "./Register.css"
import "../../index.css"
import Buttons from "../../Components/Buttons"

const Register = () => {

    //Onsubmit Functionality
    const onSubmit = event => {
        event.preventDefault();
        ToastMessage();
    }

    return (
    <div>
    <div className="container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 text-center image-container">
            <img src={require('../../Assets/img/Register.png')}  alt="Placeholder" className="img-fluid" />
        </div>
        <div className="col-md-6">
            <div className="form-container">
            <form>
                <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" required/>
                </div>
                <div className="form-group">
                <input type="password" className="form-control" placeholder="password" required/>
                </div>
                <div className="form-group">
                <input type="HospitalName" className="form-control" placeholder="HospitalName" required/>
                </div>
                <div className="form-group">
                <input type="Phno" className="form-control" placeholder="Phno" required/>
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

export default Register