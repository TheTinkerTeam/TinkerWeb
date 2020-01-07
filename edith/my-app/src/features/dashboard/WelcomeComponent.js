import React, { Component } from "react";
import WelcomeList from "./WelcomeList";

class WelcomeComponent extends Component {
  state = {
    items: ["Try out starter projects", "Join a class with your class code", "Download the Tinker Cart plans", "wow"]
  };

  render() {
    return (
      <div>
        <div className='red-title'>Welcome to SuperTinker</div>
        <WelcomeList items={this.state.items}/>
      </div>
    );
  }
}

export default WelcomeComponent;
