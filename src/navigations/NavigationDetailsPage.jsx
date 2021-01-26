import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import styles from "./navigations.module.css";

class NavigationDetailsPage extends Component {
  render() {
    const movieId = this.props.match.params.movieId;

    return (
      <>
        <ul className={styles.box}>
          <li className={styles.list}>
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              to={{
                pathname: `/movie/${movieId}/cast`,
                state: { from: this.props.location },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li className={styles.list}>
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              to={{
                pathname: `/movie/${movieId}/reviews`,
                state: { from: this.props.location },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </>
    );
  }
}

export default withRouter(NavigationDetailsPage);
