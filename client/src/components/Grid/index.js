import React from "react";
import { Container as Con } from "react-bootstrap/Container";
import { Row as R } from "react-bootstrap/Row";
import { Col as C } from "react-bootstrap/Col";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children }) {
  return <Con className={`container${fluid ? "-fluid" : ""}`}>{children}</Con>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, children }) {
  return <R className={`row${fluid ? "-fluid" : ""}`}>{children}</R>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
  return (
    <C
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </C>
  );
}