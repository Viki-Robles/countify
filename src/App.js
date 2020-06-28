import React from 'react';
import './App.css';
import NavBar from "./NavBar/NavBar";
import ServicesCards from "./Services/ServicesCards";

function App() {
  return (
    <div className="App">
      <header>Countify</header>
      <NavBar/>
      <ServicesCards/>
    </div>
  );
}

export default App;
