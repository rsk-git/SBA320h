import React from 'react';
import { useState } from 'react'
// import ReactDOM from "react-dom/client";
import '/src/App.css';
import {CoffeeProvider} from './components/CoffeeContext.jsx';
import CoffeeList from './components/CoffeeList.jsx';
import Navbar from './components/Navbar.jsx';
// import styles from '/src/components/styles.css'

const App =() =>{
  const [searchTerm, setSearchTerm]= useState ('');

return (
    <CoffeeProvider>
   <div className = "App">
 
    <h1>Hot Coffee Menu</ h1>
    <Navbar onSearch={setSearchTerm} />
    <CoffeeList searchTerm = {searchTerm} />
  
   </div>
    </CoffeeProvider>
  );
 
};

export default App;
