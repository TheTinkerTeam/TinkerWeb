import React, { Component } from "react";
import WelcomeList from "./WelcomeList";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  welcomeItems: state.welcomeItems
});

class WelcomeComponent extends Component {
  render() {
    const { welcomeItems } = this.props;

    return (
      <div>
        <div className='title-tinkercart-image'>
          <div className='red-title rotate-title'>
            <span>Welcome to </span>
            <span className='supertinker-text'>SuperT</span>
            <span className='supertinker-text' id='supertinker-i'>
              i
            </span>
            <span className='supertinker-text'>nker</span>
          </div>
        </div>
        <WelcomeList items={welcomeItems} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(WelcomeComponent);
