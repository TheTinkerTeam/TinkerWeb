import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import WelcomeList from "./WelcomeList";

class WelcomeComponent extends Component {
  render() {
    return (
      <div>
        <div className='red-title'>Welcome to SuperTinker</div>
        <WelcomeList />
      </div>
    );
  }
}

export default WelcomeComponent;
