import React, { Component } from "react";
import CastComp from "../components/cast/Cast";
import * as API from "../service/API";

export default class Cast extends Component {
  state = {
    credits: null,
  };

  componentDidMount() {
    API.getCredits(this.props.id).then((credits) => this.setState({ credits }));
  }

  render() {
    console.log(this.props.location);
    const { credits } = this.state;

    return (
      <>
        <CastComp {...credits} />
      </>
    );
  }
}
