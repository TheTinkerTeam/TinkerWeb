import React, { Component } from "react";

import TinkerNewsItem from "../items/TinkerNewsItem";

class TinkerNewsList extends Component {
  render() {
    const { news } = this.props;
    return (
      <div className="tinkernewslist-scroll">
        {news &&
          news.map((notification, index) => (
            <TinkerNewsItem key={news[index].id} notification={notification} />
          ))}
      </div>
    );
  }
}

export default TinkerNewsList;
