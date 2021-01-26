// const baseURL = "https://api.themoviedb.org/3/";
// const APIKey = "eaa473bdd4b06e0d19833bf37c1d6100";
// //api.themoviedb.org/3/movie/550?api_key=eaa473bdd4b06e0d19833bf37c1d6100

import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";
const APIKey = "eaa473bdd4b06e0d19833bf37c1d6100";

export const getTrendingFilm = () => {
  return axios
    .get(`${baseURL}trending/movie/day?api_key=${APIKey}`)
    .then(({ data }) => data.results);
};

export const getFilmWithId = (id) => {
  const newId = id.slice(1);
  return axios
    .get(`${baseURL}movie/${newId}?api_key=${APIKey}&language=en-US`)
    .then(({ data }) => data);
};

export const getCredits = (id) => {
  const newId = id.slice(1);
  return axios
    .get(`${baseURL}movie/${newId}/credits?api_key=${APIKey}`)
    .then(({ data }) => data);
};

export const getReviews = (id) => {
  const newId = id.slice(1);
  return axios
    .get(`${baseURL}movie/${newId}/reviews?api_key=${APIKey}`)
    .then(({ data }) => data.results);
};

export const fetchMovieByQuery = (query) => {
  return axios
    .get(
      `${baseURL}search/movie?api_key=${APIKey}&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then(({ data }) => data.results);
};
