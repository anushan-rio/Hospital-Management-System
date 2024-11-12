import {API} from "../Backend"


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
        console.log("Error In Sigup Page")
    })
}