import React from 'react';
import './App.css';
import Header from './Header'
import Addcontact from './Addcontact'
import Contactlist from './Contactlist'

function App() {
  const contacts=[
    {
      id:"1",
      name:"shahriar",
      email:"shahriarmehedi94@gmail.com",
    },
    {
      id:"2",
      name:"mehedi",
      email:"shahriar@gmail.com",
    }
  ];
  return (
    <div className="ui container">
      <Header />    
      <Addcontact />
      <Contactlist />
    </div>
  );
  
}

export default App;
