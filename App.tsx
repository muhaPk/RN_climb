import React from 'react';
import { StatusBar, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { MainLayout } from './src/shared/ui/layout/mainLayout';

import { Home } from 'pages/home/Home';
import { Settings } from 'pages/settings/Settings';
import { Registration } from 'pages/registration/Registration'

import { createDrawerNavigator } from '@react-navigation/drawer';

// import { Registration } from './src/pages/auth/Registration';
// import {Auth} from './src/pages/auth/Auth';
import { store } from './src/app/store/index';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store}>

          <Navigator />
          <StatusBar backgroundColor='#354052' />

    </Provider>
  );
}

const Navigator = () => {

  // const isAuth = useSelector(state => state.users.isAuth)


  return (
    <NavigationContainer>

        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>

          <Stack.Screen name="Home">
            {() => (<MainLayout><Home /></MainLayout>)}
          </Stack.Screen>

          <Stack.Screen name="Registration">
            {() => (<MainLayout><Registration /></MainLayout>)}
          </Stack.Screen>

          <Stack.Screen name="Settings">
            {() => (<MainLayout><Settings /></MainLayout>)}
          </Stack.Screen>

        </Stack.Navigator>

    </NavigationContainer>
  )
}
