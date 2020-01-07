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
        <div className='title-tinkercart-image'>
          <div className='red-title'>Welcome to SuperTinker</div>
          {/* <a className='tinkercart-img-position'>
          <img src={tinkercart} alt='Tinker Cart model' height='90em' width='90em' />
        </a> */}
          <img
            src={tinkercart}
            className='tinkercart-img-position'
            alt='Tinker Cart model'
            height='90em'
            width='90em'
          />
        </div>
        <WelcomeList items={this.state.items} />
      </div>
    );
  }
}

export default WelcomeComponent;
