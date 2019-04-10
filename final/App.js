import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from './pages/HomeScreen';
import AboutScreen from './pages/AboutScreen';
import PowerScreen from './pages/PowerScreen';
import CardioScreen from './pages/CardioScreen';
import YogaScreen from './pages/YogaScreen';
import RowingScreen from './pages/RowingScreen';
import CyclingScreen from './pages/CyclingScreen';


const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Power: { screen: PowerScreen },
    Cardio: { screen: CardioScreen },
    Yoga: { screen: YogaScreen },
    Rowing: { screen: RowingScreen },
    Cycling: { screen: CyclingScreen },
  },
  {    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ffa035',
      },
      headerTintColor: '#FFFFFF',
      title: 'iFitMusic',
      },
  }
);

const AboutStack = createStackNavigator(
  {
    About: { screen: AboutScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ffa035',
      },
      headerTintColor: '#FFFFFF',
      title: 'About Us',
    },
  }
);

const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    About: { screen: AboutStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        return <IconComponent name={iconName} size={4} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ffa035',
      inactiveTintColor: 'gray',
    },
  }
);
export default createAppContainer(App);
