import React, { Component } from "react";

class WelcomeListItem extends Component {
	render() {
    return (
      <div className='welcomelistitem'>
        {this.props.item.description}
      </div>
    );
  }
}

export default WelcomeListItem;