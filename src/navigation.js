import React from 'react';
import { Text, View } from 'react-native';
import { MyList, Events, Filters } from './screens'
import { Icon } from 'native-base';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';


const HomeStack = createStackNavigator({
  Home: Events,
  Filters: Filters,
});

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-home" style={{color: tintColor }} size={24} />,
    },
  },
  Settings: {
    screen: MyList,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
      <Icon 
        name="bookmark" 
        style={{color: tintColor }} 
        type='FontAwesome'
        size={24} />
      ),
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: '#85e9b3',
    inactiveTintColor: '#a58ec9',
    showLabel: false,
  },
});



export default createAppContainer(TabNavigator);