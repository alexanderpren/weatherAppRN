
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "../WeatherApp/src/components/HomeScreen";
import ListDetailScreen from "../WeatherApp/src/components/ListDetailScreen";
import DetailScreen from "../WeatherApp/src/components/DetailScreen";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  ListDetail: { screen: ListDetailScreen },
  Detail: { screen: DetailScreen },
}, { initialRouteName: 'Home' });

export default createAppContainer(AppNavigator);