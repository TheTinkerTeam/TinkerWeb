import React, { Component } from "react";

import WelcomeListItem from "src/components/items/WelcomeListItem";

class WelcomeList extends Component {
  render() {
    const { items } = this.props;
    console.log(this.props);

    return (
      <div className='welcomelist'>
        {items.slice(0, 3).map((item, index) => (
          <WelcomeListItem key={index} item={item} />
        ))}
      </div>
    );
  }
}

export default WelcomeList;
