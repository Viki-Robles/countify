import React from 'react';
import './App.css';
import NavBar from "./NavBar/NavBar";
import ServicesCards from "./Services/ServicesCards/ServicesCards";

function App() {
  return (
    <div className="App">
      <header>Countify</header>
      <NavBar />
      <br />
      <ServicesCards />
    </div>
  );
}

export default App;
