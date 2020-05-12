import React, { Component } from "react";

class TinkerNewsItem extends Component {
  render() {
    return (
      <div>
        <div className='tinkernewsitem-title' style={{maxWidth: "350px"}}>
          {this.props.notification.title}
        </div>
        <div className='tinkernewsitem-description' style={{maxWidth: "350px"}}>
          {this.props.notification.description}
        </div>
      </div>
    );
  }
}

export default TinkerNewsItem;
