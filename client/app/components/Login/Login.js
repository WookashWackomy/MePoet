import React, { Component } from "react";
import ReactDOM from "react-dom";
import FacebookProvider from "react-facebook/module/FacebookProvider";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { loginFacebook } from "../../module/actions";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ""
    };
  }

  handleResponseFB = data => {
    console.log("logged");
    console.log(data);
    const userData = {
      fbID: data.id,
      username: data.name,
      email: data.email
    };

    loginFacebook(userData);
  };

  handleErrorFB = error => {
    this.setState({ error });
  };

  render() {
    let LoginContent;
    const { user } = this.props;
    if (user.isLoggedIn) {
      LoginContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <h2>You are logged in {user.name}</h2>
          Email: {user.email}
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

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = { loginFacebook: loginFacebook };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
