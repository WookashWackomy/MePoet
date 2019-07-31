import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share";
import "./Poem.scss";

import StarRatingComponent from "react-star-rating-component";

const Poem = props => {
  const { poem, showSocialTab } = props;
  const [values, setValues] = useState({
    rating: 0,
    globalRating: Math.floor(poem.starSum / poem.numberOfVotes),
    globalRatingExact: poem.numberOfVotes
      ? Math.round((poem.starSum / poem.numberOfVotes) * 100) / 100
      : 0
  });

  const onStarClick = (nextValue, prevValue, name) => {
    setValues({ rating: nextValue });

    const newPoem = {
      author: poem.author,
      title: poem.title,
      body: poem.body,
      rating: nextValue
    };

    fetch("/api/poems/" + poem._id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPoem)
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  };

  return (
    <Fragment>
      <Container className="poem">
        <Col>
          <Row>
            <Col>
              <div className="poem-header">
                <p>title :{poem.title} </p>
                <p>
                  author : {poem.author !== "" ? poem.author : "anonymous"}{" "}
                </p>
              </div>
              <p>{poem.body}</p>
            </Col>
          </Row>
          {showSocialTab ? (
            <Col className="social-footer">
              <Row>
                <p>rating: {values.globalRatingExact}/5</p>
                <StarRatingComponent
                  name={"star-rating-global"}
                  starCount={5}
                  value={values.globalRating}
                  editing={false}
                />
              </Row>
              <Row>
                <p>rate this poem!</p>
                <StarRatingComponent
                  name={"star-rating"}
                  starCount={5}
                  value={values.rating}
                  onStarClick={onStarClick}
                />
              </Row>
              <Row>
                share on facebook!
                <FacebookShareButton
                  url={"https://mepoet.herokuapp.com"}
                  quote={poem.body}
                  className="share-button"
                >
                  <FacebookIcon size={32} />
                </FacebookShareButton>
              </Row>
              <Row>
                share on twitter!
                <TwitterShareButton
                  url={"https://mepoet.herokuapp.com"}
                  title={poem.body + "\n #mepoet\n"}
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
              </Row>
            </Col>
          ) : null}
        </Col>
      </Container>
    </Fragment>
  );
};
Poem.defaultProps = {
  showSocialTab: true
};

Poem.propTypes = {
  poem: PropTypes.object.isRequired,
  showSocialTab: PropTypes.bool
};

export default Poem;
