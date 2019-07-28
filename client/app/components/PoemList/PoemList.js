import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Poem from "../Poem/Poem";

const PoemList = props => {
  return props.poems.map(poem => (
    <Col key={poem._id} xl={3} lg={4} md={6} sm={8} xs={8}>
      <Poem poem={poem} />
    </Col>
  ));
};

PoemList.propTypes = {};

export default PoemList;
