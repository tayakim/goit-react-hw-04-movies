import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Navigations from "./navigations/Navigations";

const AsyncMovieDetails = lazy(() => import("./pages/MovieDetailPage"));
const AsyncMovies = lazy(() => import("./pages/Movie"));

const App = () => (
  <div>
    <Navigations />
    <Suspense fallback={<h2> Loading...</h2>}>
      {" "}
      <Switch>
        <Route exact path="/" component={HomePage} />{" "}
        <Route path="/movie/:movieId" component={AsyncMovieDetails} />{" "}
        <Route path="/movie" component={AsyncMovies} />{" "}
        <Route component={HomePage} />{" "}
      </Switch>{" "}
    </Suspense>{" "}
  </div>
);

export default App;
