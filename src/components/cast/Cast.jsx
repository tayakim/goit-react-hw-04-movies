import React from "react";
import styles from "../cast/cast.module.css";

const baseURLImage = "https://image.tmdb.org/t/p/w92";

const CastComp = ({ cast }) => {
  console.log("cast:", cast);
  return (
    <>
      <ul className={styles.castList}>
        {cast &&
          cast.map((actor) => (
            <li key={actor.id}>
              <img
                className={styles.castImg}
                src={`${baseURLImage}${actor.profile_path}`}
                alt={actor.name}
              ></img>
              <p className={styles.active}> {actor.name}</p>
              <p className={styles.castText}>Character: {actor.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default CastComp;
