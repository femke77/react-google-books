import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import Button from '../SaveBtn';

export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function BookItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  authors,
  description,
  href,
  onClick
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <h4>{authors}</h4>
            <p>{description}</p>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Book Preview
            </a>
            <Button type="success" className="float-right" onClick={onClick}>Save</Button>
          </Col>
        </Row>
      </Container>
    </li>

  )
}