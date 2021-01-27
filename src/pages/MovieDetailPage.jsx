import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import * as API from "../service/API";
import Movie from "../components/movie/Movie";
import NavigationDetailsPage from "../navigations/NavigationDetailsPage";
import styles from "../components/cast/cast.module.css";

const AsyncCast = lazy(() => import("./Cast" /* webpackChunkName: "Cast" */));

const AsyncReviews = lazy(() =>
  import("./Review" /* webpackChunkName: "Reviews" */)
);

const getIdFromProps = (props) => props.match.params.movieId;

class MovieDetailsPage extends Component {
  state = {
    film: null,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    API.getFilmWithId(id).then((film) => this.setState({ film }));
  }

  handleGoBack = () => {
    this.props.history.push({
      pathname: "/",
    });
  };

  render() {
    const { film } = this.state;
    if (film) {
      console.log("film:", film);
    }
    return (
      <div>
        <button
          className={styles.button}
          type="button"
          onClick={this.handleGoBack}
        >
          Go back
        </button>
        {film && <Movie {...film} />}
        <p className={styles.castText}>Additional information:</p>
        <NavigationDetailsPage />
        <Suspense fallback={<h2 className={styles.castText}>Loading...</h2>}>
          <Switch>
            <Route
              path={`${this.props.match.path}/cast`}
              exact
              component={AsyncCast}
            />
            <Route
              path={`${this.props.match.path}/reviews`}
              component={AsyncReviews}
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default MovieDetailsPage;
