import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "./SearchForm.scss";
import { withRouter } from "react-router-dom";

const SearchForm = props => {
  const [values, setValues] = useState({ searchQuery: "" });

  const handleSearchSubmit = e => {
    e.preventDefault();

    if (values.searchQuery !== "") {
      props.history.push(
        encodeURIComponent("/searchpoems/" + values.searchQuery)
      );
    } else {
      props.history.push("/");
    }
    setValues({ searchQuery: "" });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Form inline onSubmit={handleSearchSubmit} id="search-form">
      <FormControl
        className="form-control-input"
        name="searchQuery"
        value={values.searchQuery}
        onChange={handleChange}
        placeholder="search for a poem"
        autoComplete="off"
      />
      <FormControl as={Button} type="submit" variant="dark">
        Search
      </FormControl>
    </Form>
  );
};

SearchForm.propTypes = {};

export default withRouter(SearchForm);
