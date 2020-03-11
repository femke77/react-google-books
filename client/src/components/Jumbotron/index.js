import React from "react";
import {Jumbotron as J} from "react-bootstrap/Jumbotron";
import "./style.css";

function Jumbotron() {
  return (
    <J>
      <h1>Google Books</h1>
      <p>
        Search the Google Books API and save results.
      </p>
    </J>

  );
}

export default Jumbotron;