import React from "react";
import styles from "./reviews.module.css";

const ReviewsComponent = ({ onReviews }) => {
  return (
    <>
      <ul>
        {onReviews.length > 0 ? (
          onReviews.map((review) => (
            <li key={review.id}>
              <h3 className={styles.text}>Author: {review.author}</h3>
              <p className={styles.text}>{review.content}</p>
            </li>
          ))
        ) : (
          <p className={styles.text}>
            Sorry, we don't have any reviews for this movie!
          </p>
        )}
      </ul>
    </>
  );
};

export default ReviewsComponent;
