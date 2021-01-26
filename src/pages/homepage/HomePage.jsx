import React, { Component } from "react";
import * as API from "../../service/API";
import MovieList from "../../components/movieList/MovieList";
import styles from "../homepage/homepage.module.css";

class HomePage extends Component {
  state = { films: [] };

  componentDidMount() {
    API.getTrendingFilm().then((results) => this.setState({ films: results }));
  }

  render() {
    const { films } = this.state;
    return (
      <div>
        <h2 className={styles.homepage}>Trending today:</h2>
        <MovieList films={films} />
      </div>
    );
  }
}

export default HomePage;
