import React, { Component } from "react";
import { connect } from "react-redux";

import WelcomeList from "../lists/WelcomeList";

const mapStateToProps = state => ({
  welcomeItems: state.welcomeItems
});

class WelcomeComponent extends Component {
  render() {
    const { welcomeItems } = this.props;

    return (
      <div>
        <div className="title-tinkercart-image">
          <div className="red-title rotate-title welcome-title">
            <span style={{whiteSpace: "no wrap"}}>Welcome to </span>
            <span style={{whiteSpace: "pre"}}>
            <span className="supertinker-text">SuperT</span>
            <span className="supertinker-text" id="supertinker-i">
              i
            </span>
            <span className="supertinker-text">nker</span></span>
          </div>
        </div>
        <WelcomeList items={welcomeItems} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(WelcomeComponent);
