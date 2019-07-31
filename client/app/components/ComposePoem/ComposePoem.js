import React, { Component } from "react";
import CustomInput from "../ResizableTextarea/CustomInput";
import "./ComposePoem.scss";
import Button from "react-bootstrap/Button";
import PoemWritingHelper from "../PoemWritingHelper/PoemWritingHelper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { withRouter } from "react-router-dom";
import { postPoem } from "../../module/actions";

import { connect } from "react-redux";

class ComposePoem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isIdle: false,
      author: "xD",
      title: "",
      poemBody: "",
      phrase: "",
      helperPoems: null,
      rows: 5,
      minRows: 5,
      maxRows: 10
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.timerId = null;
  }

  validateForm() {
    return this.state.poemBody.length > 0 && this.state.title.length > 0;
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.poemBody);

    const poem = {
      author: this.state.author,
      authorFBID: this.props.user.fbID,
      title: this.state.title,
      body: this.state.poemBody
    };
    this.props.postPoem(poem);
    history.go(-1);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleTextAreaChange(event) {
    const textareaLineHeight = 24;
    const { minRows, maxRows } = this.state;

    const previousRows = event.target.rows;
    event.target.rows = minRows; // reset number of rows in textarea

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }

    clearTimeout(this.timerId);
    const currentPhrase = event.target.value.split(" ").reverse()[0];
    console.log(currentPhrase);
    this.setState({
      isIdle: false,
      phrase: currentPhrase,
      poemBody: event.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows
    });
    this.hidingTimer();
  }

  hidingTimer() {
    this.timerId = setTimeout(() => {
      this.getPoemExamplesWhenIdle(this.state.phrase);
      this.setState({ isIdle: true });
    }, 1 * 1000);
  }
  getPoemExamplesWhenIdle = phrase => {
    fetch("/api/fetchPoemLine/" + phrase).then(response =>
      response.json().then(poems => {
        this.setState({ helperPoems: poems });
        console.log(poems);
        return poems;
      })
    );
  };

  render() {
    const { title, rows, poemBody, helperPoems } = this.state;
    return (
      <Container>
        <Col>
          <Row className="justify-content-center">
            <div id="poem-submit-form">
              <form onSubmit={this.handleSubmit}>
                <CustomInput
                  labelText="Title"
                  id="title"
                  value={title}
                  onChange={this.handleChange}
                />
                <textarea
                  rows={rows}
                  value={poemBody}
                  placeholder={"Enter your poem here..."}
                  className={"textarea"}
                  onChange={this.handleTextAreaChange}
                />
                <Row className="justify-content-center">
                  <Button
                    variant="secondary"
                    type="submit"
                    disabled={!this.validateForm()}
                  >
                    Submit poem!
                  </Button>
                </Row>
              </form>
            </div>
            <PoemWritingHelper poems={helperPoems} />
          </Row>
        </Col>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = { postPoem: postPoem };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ComposePoem)
);
