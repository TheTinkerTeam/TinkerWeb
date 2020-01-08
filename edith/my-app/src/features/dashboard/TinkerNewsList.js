import React, { Component } from "react";
import TinkerNewsItem from "./TinkerNewsItem";

class TinkerNewsList extends Component {
  render() {
    const { news } = this.props;
    console.log({ news });

    return (
      <div className='tinkernewslist-scroll'>
        {news.map((notification, index) => (
          <TinkerNewsItem key={news[index].id} notification={notification} />
        ))}
      </div>
    );
  }
}

export default TinkerNewsList;
