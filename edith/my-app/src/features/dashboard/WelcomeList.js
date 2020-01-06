import React, { Component } from "react";
import WelcomeListItem from "./WelcomeListItem";

class WelcomeList extends Component {
  state = {
    items: ["Try out starter projects", "Join a class with your class code", "Download the Tinker Cart plans", "wow"]
  };

  render() {
    return (
      <div className='welcomelist'>
        {this.state.items.slice(0,3).map((item, index) => (
          <WelcomeListItem key={index} item={item} />
        ))}
      </div>
    );
  }
}

export default WelcomeList;
