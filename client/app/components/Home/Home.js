import React, { Component } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookShareCount
} from "react-share";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poems: []
    };
  }

  componentDidMount() {
    fetch("/api/poems")
      .then(res => res.json())
      .then(json => {
        this.setState({
          poems: json
        });
        console.log(json);
      });
  }

  render() {
    const poemItems = this.state.poems.map(poem => (
      <Col key={poem._id} xl={3} lg={4} md={6} sm={8} xs={8}>
        <h3>{poem.title}</h3>
        <p>{poem.body}</p>
        <Row className="justify-content-center">
          <FacebookShareButton
            url={"https://mepoet.herokuapp.com"}
            quote={poem.body}
            className="share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <p>share count:</p>
          <FacebookShareCount
            url={"https://mepoet.herokuapp.com"}
            className="share-count"
          >
            {count => count}
          </FacebookShareCount>
        </Row>
      </Col>
    ));
    return (
      <Container>
        <Row>
          <Col>
            <h1>Poems</h1>
            <Row>{poemItems}</Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
