import React from "react";
import { Grid } from "semantic-ui-react";
import { Route, Redirect, Switch } from "react-router-dom";

import SettingsNav from "./SettingsNav";
import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import PhotosPage from "./PhotosPage";
import AccountPage from "./AccountPage";

import { connect } from "react-redux";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_CURRENT_USER = gql`
  query GetCurrentUser($uid: String!) {
    user(uid: $uid) {
      uid
      email
      firstName
      lastName
      username
      school
      role
    }
  }
`;

const mapStateToProps = (state) => ({
  currentUser: state.firebase.auth,
});

const SettingsDashboard = ({ currentUser }) => {
  const { loading, error, data } = useQuery(GET_CURRENT_USER, {
    variables: { uid: `${currentUser.uid}` },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log({ error });
  }
  // if (error) return <p>Error :(</p>;

  const user_from_gql = data.user;

  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from='/settings/' to='/settings/basics' />
          <Route
            path='/settings/basics'
            render={() => (
              <BasicPage currentUser={currentUser} userInfo={user_from_gql} />
            )}
          />
          <Route
            path='/settings/about'
            render={() => <AboutPage userInfo={user_from_gql} />}
          />
          <Route path='/settings/photos' component={PhotosPage} />
          <Route path='/settings/account' component={AccountPage} />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapStateToProps)(SettingsDashboard);
