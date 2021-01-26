import React from "react";
import styles from "./movie.module.css";

const baseURLImage = "https://image.tmdb.org/t/p/w185";

const Movie = ({
  poster_path,
  title,
  overview,
  genres,
  vote_average,
  release_date,
}) => {
  const percent = vote_average * 10;
  const date = release_date.slice(0, 4);

  return (
    <>
      <div className={styles.wrap}>
        <img
          className={styles.movieImg}
          src={`${baseURLImage}${poster_path}`}
          alt={title}
        />
        <div>
          <h3 className={styles.movieTextTitle}>
            {title} ({date})
          </h3>
          <p className={styles.movieText}>
            <span className={styles.movieTextBold}>User Score:</span> {percent}%
          </p>
          <h3 className={styles.movieTextBold}>Overview:</h3>
          <p className={styles.movieText}>{overview}</p>
          <h3 className={styles.movieTextBold}>Genres:</h3>
          {genres.map((genre) => (
            <p className={styles.movieText} key={genre.id}>
              {genre.name}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movie;
