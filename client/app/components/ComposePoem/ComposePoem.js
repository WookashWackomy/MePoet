import React, {Component} from 'react';
import {AxiosInstance as axios} from "axios";
import ResizableTextarea from '../ResizableTextarea/ResizableTextarea';
import './ComposePoem.css';

class ComposePoem extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);

    this.state = {
      author: "",
      title: "",
      poemBody: "",
      rows: 5,
      minRows: 5,
      maxRows: 10,
    };
  }

  validateForm() {
    return this.state.poemBody.length > 0;
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.poemBody);

    const poem = {
      author: this.state.author,
      title: this.state.title,
      body: this.state.poemBody
    };


    axios.post(url, poem).then(response => {
      if (response.status === 200) {
        this.props.history.push({
          pathname: '/',
          state: {login: this.state.login}
        });
      } else {
        throw new Error(response.status)
      }
    })
      .catch((error) => {
        console.log('error ' + error.message);
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleTextAreaChange(event){
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

    this.setState({
      poemBody: event.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows,
    });
  };

  render() {
    return (
      <div id="textarea">
        <textarea
          rows={this.state.rows}
          value={this.state.poemBody}
          placeholder={'Enter your poem here...'}
          className={'textarea'}
          onChange={this.handleTextAreaChange}
        />
      </div>
    );
  }
}

export default ComposePoem;
