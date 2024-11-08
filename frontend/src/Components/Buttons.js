import React from "react"

const Buttons=({label,type,onClick})=>{
    return(
        <button type={type} onClick={onClick}  className="btn btn-block btn-custom">
        {label}     
        </button>
    )
}

export default Buttons