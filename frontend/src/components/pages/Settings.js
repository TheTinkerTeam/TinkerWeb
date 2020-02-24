import React from "react";
import { Grid } from "semantic-ui-react";
import { Route, Redirect, Switch } from "react-router-dom";

import SettingsNav from "src/components/pages/SettingsPage/SettingsNav";
import BasicPage from "src/components/pages/SettingsPage/BasicPage";
import AboutPage from "src/components/pages/SettingsPage/AboutPage";
import PhotosPage from "src/components/pages/SettingsPage/PhotosPage";
import AccountPage from "src/components/pages/SettingsPage/AccountPage";

const SettingsDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from='/settings/' to='/settings/basics' />
          <Route path='/settings/basics' component={BasicPage} />
          <Route path='/settings/about' component={AboutPage} />
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

export default SettingsDashboard;
