import React, { Component } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookShareCount
} from "react-share";

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
      <div key={poem._id}>
        <h3>{poem.title}</h3>
        <p>{poem.body}</p>
        <FacebookShareButton
          url={"https://mepoet.herokuapp.com"}
          quote={poem.body}
          className="share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <FacebookShareCount
          url={"https://mepoet.herokuapp.com"}
          className="share-count"
        >
          {count => count}
        </FacebookShareCount>
      </div>
    ));
    return (
      <div>
        <h1>Poems</h1>
        {poemItems}
      </div>
    );
  }
}

export default Home;
