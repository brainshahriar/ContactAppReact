import React from "react";
import Contactcard from "./Contactcard";

 const Contactlist = (props) => {
     console.log(props);

     const deleteContactHandler=(id)=>{
         props.getContactId(id);
     };
     const contacts=[{
         id:"1",
         name:"Shahriar",
         email:"shahriar@gmail.com",
        
     },
    ];
     const renderContactlist=contacts.map((contact) => {
         return(
            <Contactcard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></Contactcard>
         );
     });
     return <div className="ui celled list">
            {renderContactlist}
         </div>
     
 };

 export default Contactlist;