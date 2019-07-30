import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Poem from "../Poem/Poem";

const TwitterPoemList = props => {
  return props.poems.map(poem => (
    <Col key={poem.id} xl={3} lg={4} md={6} sm={8} xs={8}>
      <Poem poem={poem} showSocialTab={false} />
    </Col>
  ));
};

TwitterPoemList.propTypes = {};

export default TwitterPoemList;
