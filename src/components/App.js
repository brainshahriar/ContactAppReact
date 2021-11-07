import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { uuid } from 'uuidv4';
import './App.css';
import Header from './Header'
import Addcontact from './Addcontact'
import Contactlist from './Contactlist'
import ContacDetail from './ContactDetail';


function App() {
const LOCAL_STORAGE_KEY="contacts";
const [contacts,setContacts]=useState([]);
const addContactHandler =(contact)=>{
  console.log(contact);
  setContacts([...contacts,{id:uuid(),...contact}]);
};
const removeContactHandler = (id) => {
  const newContactList = contacts.filter((contact)=>{
     return contact.id !== id;
  });
  setContacts(newContactList);
}
useEffect(()=>{
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
},[]);
useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
},[contacts]);

  return (
    <div className="ui container">
      <Router>
      <Header />  
      <Switch>
      <Route path="/" exact render={(props)=>(<Contactlist{...props} contacts={contacts} getContactId={removeContactHandler}/>)} />
      <Route path="/add" 
      render={(props)=>(<Addcontact{...props} addContactHandler={addContactHandler} />)}
      />
      <Route path="/contact/:id" component={ContacDetail} />
        </Switch>
      </Router>

    </div>
  );
  
}

export default App;
