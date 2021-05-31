import React from 'react';
import { Router, Scene, Stack, Drawer } from 'react-native-router-flux';

import Login from './Login';
import SignUp from './SignUp';
import DrawerContent from './DrawerContent';

const Routes = (): JSX.Element => {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="login"
          hideNavBar={false}
          component={Login}
          initial={true} />
        <Drawer
          key="drawer"
          hideNavBar={true}
          contentComponent={DrawerContent}
          drawerWidth={300}
          drawerPosition="left">
          <Scene
            key="home"
            hideNavBar={false}
            component={SignUp}
            title="Home" />
        </Drawer>
      </Stack>
    </Router>
  );
};

export default Routes;
