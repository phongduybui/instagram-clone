import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Login}
        name="Login"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
