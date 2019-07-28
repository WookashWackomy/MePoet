import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PoemList from "../PoemList/PoemList";

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
    return (
      <Container>
        <Row>
          <Col>
            <h1>Poems</h1>
            <Row>
              <PoemList poems={this.state.poems} />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
