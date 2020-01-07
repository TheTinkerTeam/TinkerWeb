import React, { Component } from "react";
import WelcomeList from "./WelcomeList";

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
          <div className='red-title rotate-title'>
            <span>Welcome to </span>
            <span className='supertinker-text'>SuperT</span>
            <span className='supertinker-text' id='supertinker-i'>
              i
            </span>
            <span className='supertinker-text'>nker</span>
          </div>
        </div>
        <WelcomeList items={this.state.items} />
      </div>
    );
  }
}

export default WelcomeComponent;
