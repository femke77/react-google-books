import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";
import Search from "../components/Search";
import { Container, Row, Col } from "../components/Grid"
import { BookList, BookItem } from '../components/BookList';

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
    //this is where will hit our route that will hit googleBooks for the search term
  
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
                    key={book.title}
                    title={book.title}
                    href={book.previewLink}
                    authors={book.authors}
                    description={book.description}
                    thumbnail={book.imageLinks.thumbnail}
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