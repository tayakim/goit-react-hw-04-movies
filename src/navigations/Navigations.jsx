import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navigations.module.css";

const Navigation = () => (
  <div className={styles.wrapper}>
    <ul className={styles.list}>
      <li>
        <NavLink
          to="/"
          exact
          activeClassName={styles.active}
          className={styles.link}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movie"
          activeClassName={styles.active}
          className={styles.link}
        >
          Movie
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navigation;
