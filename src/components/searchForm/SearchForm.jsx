import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "./searchForm.module.css";

class SearchForm extends Component {
  state = {
    name: "",
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
  };

  render() {
    const { name } = this.state;

    return (
      <>
        <form onSubmit={this.onHandleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            autoComplete="off"
            onChange={this.onHandleChange}
            placeholder="Search..."
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </>
    );
  }
}

export default withRouter(SearchForm);
