import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AUTH_SCREENS} from '@const/routs';
import LoginScreen from '@screens/login';
import {AuthStackParamList} from '@types/navigator';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={AUTH_SCREENS.LOGIN}>
      <Stack.Screen name={AUTH_SCREENS.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
