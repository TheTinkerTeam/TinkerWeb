import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

const mapStateToProps = state => ({
  user: state.user,
});

class StudentInfoPage extends Component {
 



  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <p>
            Student Info Page
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
export default connect(mapStateToProps)(StudentInfoPage);
