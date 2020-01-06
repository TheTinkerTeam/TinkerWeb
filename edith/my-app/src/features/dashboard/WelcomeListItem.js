import React, { Component } from "react";

class WelcomeListItem extends Component {
	render() {
    return (
      <div className='welcomelistitem'>
        {this.props.item}
      </div>
    );
  }
}

export default WelcomeListItem;