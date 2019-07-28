import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import "./PoemWritingHelper.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const PoemWritingHelper = props => {
  const { poems } = props;

  const formatPoems = poems
    ? Object.entries(poems).map(([key, poem]) => (
        <Col xl={3} lg={4} md={6} sm={8} xs={8} key={key}>
          <Row>
            <div className="display-linebreak">
              <p>{poem}</p>
            </div>
          </Row>
        </Col>
      ))
    : null;

  return <div>{formatPoems}</div>;
};

PoemWritingHelper.propTypes = {};

export default PoemWritingHelper;
