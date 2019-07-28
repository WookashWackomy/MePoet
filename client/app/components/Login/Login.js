import React, { Component } from "react";
import ReactDOM from "react-dom";
import FacebookProvider from "react-facebook/module/FacebookProvider";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: "",
      isLoggedIn: false,
      userID: "",
      email: "",
      name: ""
    };
  }

  handleResponseFB = data => {
    console.log("logged");
    console.log(data);
    const user = {
      fbID: data.id,
      username: data.name,
      email: data.email
    };

    axios
      .post(`/api/auth/facebook`, user)
      .then(res => {
        //setredux state
        this.setState({
          isLoggedIn: true,
          name: data.profile.name,
          email: data.profile.email
        });
        if (res.status === 400) {
          console.log("already present in the database");
        }
      })
      .catch(err => console.log(err));
  };

  handleErrorFB = error => {
    this.setState({ error });
  };

  render() {
    let LoginContent;

    if (this.state.isLoggedIn) {
      LoginContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <h2>You have been logged in {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      );
    } else {
      LoginContent = (
        <Container>
          <Row className="justify-content-center">
            <Col>
              <h1>Please log in</h1>
              <FacebookLogin
                appId="421761521759707"
                autoLoad={true}
                fields="name,email,picture"
                callback={this.handleResponseFB}
                textButton={"Login via Facebook"}
              />
            </Col>
          </Row>
        </Container>
      );
    }

    return <div>{LoginContent}</div>;
  }
}

export default Login;
