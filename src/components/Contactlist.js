import React from "react";
import Contactcard from "./Contactcard";

 const Contactlist = (props) => {
     console.log(props);

     const renderContactlist=props.contacts.map((contact) => {
         return(
            <Contactcard contact={contact}></Contactcard>
         );
     });
     return <div className="ui celled list">
            {renderContactlist}
         </div>
     
 };

 export default Contactlist;