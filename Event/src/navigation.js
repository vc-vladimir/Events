import React from 'react';
import { Text, View } from 'react-native';
import { MyList, Events } from './screens'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
  Home: Events,
  Settings: MyList,
});

export default createAppContainer(TabNavigator);