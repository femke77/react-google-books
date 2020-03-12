import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";
import Search from "../components/Search";
import { Container, Row, Col } from "../components/Grid"

class Home extends Component {
  state = {
    search: "",
    results: [],
    error: ""
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    //this is where will hit googleBooks for the search term
    console.log("yup")
  }


  render() {
    return (
      <>
        <Jumbotron>
          <h1>Google Books API</h1>
          <h3>Search and save books using Google Books API</h3>
        </Jumbotron>
        <Container>
          <Row>
            <Col size="md-12">
            <Search
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Home;