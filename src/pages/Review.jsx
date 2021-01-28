import React, { Component } from "react";
import ReviewsComponent from "../components/reviews/Reviews";
import * as API from "../service/API";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    API.getReviews(this.props.id).then((reviews) => this.setState({ reviews }));
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        <ReviewsComponent onReviews={reviews} />
      </>
    );
  }
}

export default Reviews;
