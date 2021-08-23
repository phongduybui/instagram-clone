import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { AppNavigator } from './AppNavigator';
// import { AuthNavigator } from './AuthNavigator';

export function RootNavigator() {
  // const user = useSelector(getUser);

  return (
    <NavigationContainer theme={theme[scheme]}>
      {/* {user ? <AppNavigator /> : <AuthNavigator />} */}
    </NavigationContainer>
  );
}
