import React, { Component } from "react";
import WelcomeList from "./WelcomeList";
import tinkercart from "./img/tinkercart.png";

class WelcomeComponent extends Component {
  state = {
    items: [
      "Try out starter projects",
      "Join a class with your class code",
      "Download the Tinker Cart plans",
      "wow"
    ]
  };

  render() {
    return (
      <div>
        <div className='red-title'>Welcome to SuperTinker</div>
        <a>
          <img src={tinkercart} alt='Tinker Cart model' height='42' width='42' />
        </a>
        <WelcomeList items={this.state.items} />
      </div>
    );
  }
}

export default WelcomeComponent;
