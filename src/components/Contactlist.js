import React from "react";
import { Link } from "react-router-dom";
import Contactcard from "./Contactcard";

 const Contactlist = (props) => {
     console.log(props);

     const deleteContactHandler=(id)=>{
         props.getContactId(id);
     };

     const renderContactlist=props.contacts.map((contact) => {
         return(
            <Contactcard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
         );
     });
     return (
         <div class="main">
             <h2>Contact List
                  <button className="ui button blue right">Add Contact</button>
             </h2>
             <h2>Contact List
        
             </h2>
             <Link to="/add">
                 <button className="ui button blue right">Add Contact</button>
                 </Link>
             
             <div className="ui celled list">{renderContactlist}</div>
       
         </div>
     );
     
 };

 export default Contactlist;