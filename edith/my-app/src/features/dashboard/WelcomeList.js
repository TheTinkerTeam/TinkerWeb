import React, { Component } from "react";
import WelcomeListItem from "./WelcomeListItem";

class WelcomeList extends Component {

  render() {
    return (
      <div className='welcomelist'>
        {this.props.items.slice(0,3).map((item, index) => (
          <WelcomeListItem key={index} item={item} />
        ))}
      </div>
    );
  }
}

export default WelcomeList;
