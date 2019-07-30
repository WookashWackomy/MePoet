import React, { Component, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PoemList from "../PoemList/PoemList";
import { connect } from "react-redux";
import { searchPoems } from "../../module/actions";
import { Fragment } from "react";

const SearchPoems = props => {
  const { match, searchPoems, poems } = props;

  useEffect(() => {
    const searchQuery = match.params.q;
    searchPoems(searchQuery);
  }, [searchPoems]);

  return (
    <Fragment>
      <Container className="poem-container" fluid>
        <Row className="justify-content-center">
          <Col>
            <h1>Search results</h1>
            <Row>
              <PoemList poems={poems} />
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  poems: state.poems.poems
});

const mapDispatchToProps = { searchPoems: searchPoems };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPoems);
