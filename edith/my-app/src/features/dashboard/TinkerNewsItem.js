import React, { Component } from "react";

class TinkerNewsItem extends Component {
  render() {
    return (
      <div>
        <div className='tinkernewsitem-title'>
          {this.props.notification.title}
        </div>
        <div className='tinkernewsitem-decription'>
          {this.props.notification.description}
        </div>
      </div>
    );
  }
}

export default TinkerNewsItem;
