import React, { Component, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PoemList from "../PoemList/PoemList";
import { connect } from "react-redux";
import { getMyPoems } from "../../module/actions";
import { Fragment } from "react";
import "./MyPoems.scss";

const MyPoems = props => {
  const { getMyPoems, poems, user } = props;

  useEffect(() => {
    getMyPoems(user);
  }, [getMyPoems]);

  return (
    <Fragment>
      <Container className="poem-container" fluid>
        {user.isLoggedIn ? (
          <Row className="justify-content-center">
            <Col>
              <h1>My poems</h1>
              <Row>
                <PoemList poems={poems} />
              </Row>
            </Col>
          </Row>
        ) : (
          <h1>please log in with facebook first</h1>
        )}
      </Container>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  poems: state.poems.poems,
  user: state.user
});

const mapDispatchToProps = { getMyPoems: getMyPoems };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPoems);
