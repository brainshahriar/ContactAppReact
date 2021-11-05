import React from "react";

const Contactcard =(props) =>{
    const {id,name,email} =props.contact;
    return(
        <div className="item">
        <div className="content">
           <div className="header">
               {name}
           </div>
           <div>{email}</div>
        </div>
        <i className="trash alternate outline icon"
        style={{ color:"red",maginTop:"7px" }}></i>
    </div>
    );

};
export default Contactcard;