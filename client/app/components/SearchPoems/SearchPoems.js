import React, { Component, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PoemList from "../PoemList/PoemList";
import { connect } from "react-redux";
import { searchPoems, searchPoemsTwitter } from "../../module/actions";
import { Fragment } from "react";
import TwitterPoemList from "../TwitterPoemList/TwitterPoemList";

const SearchPoems = props => {
  const { match, searchPoems, poems, twitterPoems } = props;
  useEffect(() => {
    const searchQuery = match.params.q;
    const searchQueryTwitter = decodeURIComponent(match.params.q)
      .split(" ")
      .filter(w => (w.charAt(0) === "#" ? true : false));
    searchPoems(searchQuery);
    searchPoems(searchQuery);
    searchPoemsTwitter(searchQueryTwitter);
  }, [searchPoems]);

  return (
    <Fragment>
      <Container className="poem-container" fluid>
        <Row className="justify-content-center">
          <Col>
            <h1>Search results</h1>
            <h2>Our user database...</h2>
            <Row>
              <PoemList poems={poems} />
            </Row>

            <h2>from twitter...</h2>
            <Row>
              <TwitterPoemList poems={twitterPoems} />
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  poems: state.poems.poems,
  twitterPoems: state.twitter.poems
});

const mapDispatchToProps = { searchPoems: searchPoems };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPoems);
