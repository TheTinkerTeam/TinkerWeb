import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../Nav/Nav';

const mapStateToProps = state => ({
  user: state.user,
});

class TeacherInfoPage extends Component {
 



  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <p>
            Teacher Info Page
          </p>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(TeacherInfoPage);
