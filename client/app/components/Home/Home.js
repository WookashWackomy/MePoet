import React, { Component, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PoemList from "../PoemList/PoemList";
import { connect } from "react-redux";
import { getPoems } from "../../module/actions";
import { Fragment } from "react";

const Home = props => {
  const { getPoems, poems } = props;

  useEffect(() => {
    getPoems();
  }, [getPoems]);

  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <h1>Poems</h1>
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

const mapDispatchToProps = { getPoems: getPoems };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
