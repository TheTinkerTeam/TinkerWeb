import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const profilePage = ({ user, profile }) => {
  if (profile) {
    return (
      <Fragment>
        <ul>
          <li>Email: {profile.email}</li>
          <li>
            Name: {profile.firstName} {profile.lastName}
          </li>
          <li>Username: {profile.username}</li>
          <li>School: {profile.school}</li>
        </ul>
      </Fragment>
    );
  }
  return <Fragment></Fragment>;
};

profilePage.propTypes = {
  user: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.auth.profile
});

export default connect(mapStateToProps)(profilePage);
