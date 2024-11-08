import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css"; 
import "../../index.css"
import Buttons from "../../Components/Buttons"
import ToastMessage from "../../Utility/ToastMessage.js"

const Login = () => {

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
            <img src={require('../../Assets/img/Login.png')}  alt="Placeholder" className="img-fluid" />
        </div>
        <div className="col-md-6">
            <div className="form-container">
            <form>
                <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" required/>
                </div>
                <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" required/>
                </div>
                <Buttons type="submit" onClick={onSubmit} label="Log In"/>
            </form>
            </div>
        </div>
        </div>
    </div>
    <ToastContainer />
    </div>
);
};

export default Login
