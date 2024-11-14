import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css"; 
import "../../index.css"
import Buttons from "../../Components/Buttons"
import ToastMessage from "../../Utility/ToastMessage.js"
import { LoginAdmin, Authenticate } from "../../Services/Auth.Service.js";
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [values, setValues]=useState({Email: "",password: ""})
    const {Email, password}=values
    const navigate = useNavigate();
    console.log("EMailpassword", values);
    //Handlechange
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    //Onsubmit Functionality
    const onSubmit = event => {
        event.preventDefault();
        var message;
        var messagetype;
        LoginAdmin({Email, password})
        .then(data => {
            
            if (data.errors && data.errors.length > 0 && data.errors[0].msg) {
                message = data.errors[0].msg;
                messagetype = "Error";
            } else if (data.user._id){
               
                Authenticate(data)  
                navigate('/dashboard')
            } else {
                message = data.error;
                messagetype = "Error";
            }
            ToastMessage(message, messagetype);
        })         
    }

    return (
    <div>
        <div className="position-realtive top-0 start-0  p-3 float-right">
            <button type="button" className="btn btn-dark">
                <Link to="/PatientLogin" className="text-white" style={{ textDecoration: 'none' }}><b>Patient |</b></Link> 
                
                <Link to="/DoctorLogin" className="text-white" style={{ textDecoration: 'none' }}><b> Doctor</b></Link>  
            </button>        
        </div>
    <div className="container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 text-center image-container">
            <img src={require('../../Assets/img/Login.png')}  alt="Placeholder" className="img-fluid" />
        </div>
        <div className="col-md-6">
            <div className="form-container">
           
        
            <form>
                <div className="form-group">
                <input type="email" onChange={handleChange("Email")} className="form-control" placeholder="Email" value={Email} required/>
                </div>
                <div className="form-group">
                <input type="password" onChange={handleChange("password")} className="form-control" placeholder="Password" value={password} required/>
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

export default Login;
