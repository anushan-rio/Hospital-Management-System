import {API} from "../Backend"

// Admin Signup
export const Sigup=UserData=>{
    return fetch(`${API}/signup`,{
        method:"Post",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(UserData)
    })
    .then(response=>{   
        return response.json()
    })
    .catch(err=>{
        console.log("Error In Sigup Page")
    })
}
//Admin Signin

export const LoginAdmin = Admin=>{
    return fetch(`${API}/signin`,{
        method:"Post",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(Admin)
    })
    .then(response=>{   
        return response.json()
    })
    .catch(err=>{
        console.log("Error In Sigin Page")
    })
}


//Patient Signin using OTP

export const PatientOtpSend= PatientData=>{
    console.log("-------Patient",PatientData)
    console.log("API-----",API);
    return fetch(`${API}/sendotp`,{
        method:"Post",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(PatientData)
    })
    .then(response=>{   
        return response.json()
    })
    .catch(err=>{
        console.log("Error In Sigin Page")
    })
}


export const PatientVerifyOtp = otpverify=>{
    return fetch(`${API}/verifyotp`,{
        method:"Post",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(otpverify)
    })
    .then(response=>{   
        return response.json()
    })
    .catch(err=>{
        console.log("Error In Signin Page")
    })
}

//Authenticate Function

export const Authenticate = (data)=>{
    localStorage.setItem('userData', JSON.stringify(data));
}