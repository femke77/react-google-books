import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import './App.css';


function App () {
  return (
    <Router>
      <div>
        <Navbar />
       
      </div>
    </Router>
  );
}

export default App;
