import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/views/Auth/Splash';
import Welcome from './src/views/Auth/Welcome';
import SignIn from './src/views/Auth/SignIn';
import SignUp from './src/views/Auth/SignUp';

function App() {
  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <RootStack.Screen
          options={{headerShown: false}}
          name="Welcome"
          component={Welcome}
        />
        <RootStack.Screen
          options={{headerShown: false}}
          name="SignIn"
          component={SignIn}
        />
        <RootStack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUp}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
