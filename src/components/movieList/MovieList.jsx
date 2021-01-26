/* eslint-disable */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import styles from "./movieList.module.css";

class MoviesList extends Component {
  render() {
    const { films } = this.props;
    return (
      <>
        <ol>
          {films.map((film) => {
            if (film.title !== "Undefined") {
              return (
                <li key={film.id} className={styles.moviesLi}>
                  <Link
                    className={styles.moviesListItem}
                    to={{
                      pathname: `/movie/:${film.id}`,
                      state: { from: this.props.location },
                    }}
                  >
                    {film.title}
                  </Link>
                </li>
              );
            }
          })}
        </ol>
      </>
    );
  }
}

export default withRouter(MoviesList);
