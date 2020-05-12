import React, { Component } from "react";
// import { connect } from "react-redux";

import TinkerNewsList from "../lists/TinkerNewsList";

// const mapStateToProps = state => ({
//   news: state.news
// });

class TinkerNews extends Component {
  render() {
    const { news } = this.props;

    return (
      <div>
        <div className="red-title">Tinker News</div>
        <TinkerNewsList news={news} />
      </div>
    );
  }
}

// export default connect(mapStateToProps)(TinkerNews);
export default TinkerNews;
