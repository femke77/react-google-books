import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";
import Search from "../components/Search";
import { Container, Row, Col } from "../components/Grid"
import { BookList, BookItem } from '../components/BookList';
import API from "../utils/API";

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
    API.getGoogleBooks(this.state.search)
    .then(res => this.setState({ results: res.data}))
    .catch(err => console.log(err));
  }

  onClick = () => {
    console.log("clicked")
  }

  render() {
    return (
      <>
        <Jumbotron>
          <h1>Books, Books, and More Books!</h1>
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
          <Row>
            <Col size="md-12">
              <h5>Results</h5>
              <BookList>
                {this.state.results.map(book => {
                  return (
                    <BookItem 
                    key={book.volumeInfo.id}
                    title={book.volumeInfo.title}
                    href={book.volumeInfo.previewLink}
                    authors={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    thumbnail={book.volumeInfo.imageLinks.thumbnail}
                    onClick={this.onClick}
                    />
                  );
                })}
              </BookList>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Home;