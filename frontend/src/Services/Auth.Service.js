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
