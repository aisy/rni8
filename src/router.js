import React from 'react';

// import library react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AntIcon from 'react-native-vector-icons/AntDesign';

// import Pages
import Home from './pages/Home';
import Profile from './pages/Profile';
import Config from './pages/Config';

// membuat navigator
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

// membuat component halaman Account untuk menampilkan kedua halaman
const AccountPage = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name={"Profile"} component={Profile} />
      <TopTab.Screen name={"Config"} component={Config} />
    </TopTab.Navigator>
  )
}

// default route
const RouteApp = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        tabBarOptions={{
          activeTintColor: "red", //menambah warna ketika halaman aktif
          style: {
            height: 65,
            paddingBottom: 5,
            paddingTop: 5,
          },
          labelStyle: {
            fontSize: 12
          }
        }}
      >
        <BottomTab.Screen
          name={"Home"}
          component={Home}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <AntIcon name={"home"} color={color} size={focused ? 24 : 20} />
            )
          }}
        />
        <BottomTab.Screen
          name={"Account"}
          component={AccountPage}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <AntIcon name={"user"} color={color} size={focused ? 24 : 20} />
            )
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default RouteApp