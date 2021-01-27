import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import * as API from "../service/API";
import Movie from "../components/movie/Movie";
import NavigationDetailsPage from "../navigations/NavigationDetailsPage";
import styles from "../components/cast/cast.module.css";

const AsyncCast = lazy(() => import("./Cast"));

const AsyncReviews = lazy(() => import("./Review"));

const getIdFromProps = (props) => props.match.params.movieId;

class MovieDetailsPage extends Component {
  state = {
    film: null,
    from: "",
    search: "",
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    API.getFilmWithId(id).then((film) => this.setState({ film }));
    this.props.location.state.from &&
      this.setState({
        from: this.props.location.state.from.pathname,
        search: this.props.location.state.from.search,
      });
  }

  handleGoBack = () => {
    const { from, search } = this.state;
    const { history } = this.props;
    if (from && search) {
      history.push(`${from}${search}`);
    } else {
      history.push("/");
    }
  };

  render() {
    const { film } = this.state;
    if (film) {
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
