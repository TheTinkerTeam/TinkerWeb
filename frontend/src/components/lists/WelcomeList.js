import React, { Component } from "react";

import WelcomeListItem from "../items/WelcomeListItem";

class WelcomeList extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className="welcomelist">
        {items &&
          items
            .slice(0, 3)
            .map((item, index) => <WelcomeListItem key={index} item={item} />)}
      </div>
    );
  }
}

export default WelcomeList;
