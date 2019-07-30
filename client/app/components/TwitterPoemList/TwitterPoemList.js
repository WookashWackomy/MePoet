import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Poem from "../Poem/Poem";

const TwitterPoemList = props => {
  const formatTwitterPoems = poems => {
    let poemsFormatted = [];
    poems.forEach(p => {
      poemsFormatted.push({
        body: p.text,
        author: p.user,
        hashtags: p.hashtags,
        url: p.url,
        id: p.id
      });
    });
    return poemsFormatted;
  };

  return formatTwitterPoems(props.poems).map(poem => (
    <Col key={poem.id} xl={3} lg={4} md={6} sm={8} xs={8}>
      <Poem poem={poem} />
    </Col>
  ));
};

TwitterPoemList.propTypes = {};

export default TwitterPoemList;
