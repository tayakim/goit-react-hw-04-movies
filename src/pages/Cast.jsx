import React, { Component } from "react";
import CastComp from "../components/cast/Cast";
import * as API from "../service/API";

const getIdProps = (props) => props.match.params.movieId;

export default class Cast extends Component {
  state = {
    credits: null,
  };

  componentDidMount() {
    const id = getIdProps(this.props);
    API.getCredits(id).then((credits) => this.setState({ credits }));
  }

  render() {
    const { credits } = this.state;

    return (
      <>
        <CastComp {...credits} />
      </>
    );
  }
}
