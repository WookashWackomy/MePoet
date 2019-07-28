import React, {Component} from 'react';
import 'whatwg-fetch';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poems: []
    };
  }

  componentDidMount() {
    fetch('/api/poems')
      .then(res => res.json())
      .then(json => {
        this.setState({
          poems: json
        });
        console.log(json);
      });
  }

  render() {
    const poemItems = this.state.poems.map(poem =>(
      <div key={poem._id}>
        <h3>{poem.title}</h3>
        <p>{poem.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Poems</h1>
        {poemItems}
      </div>
    )
  }
}

export default Home;
