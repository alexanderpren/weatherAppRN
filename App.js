
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../WeatherApp/src/components/HomeScreen";
import ListDetailScreen from "../WeatherApp/src/components/ListDetailScreen";
import DetailScreen from "../WeatherApp/src/components/DetailScreen";
import { LogBox } from 'react-native';
import { useSelector } from "react-redux";
import { COLORS } from '../WeatherApp/src/global/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createNativeStackNavigator();


function App({ navigation }) {
  const { cityName } = useSelector(state => state.weather);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HomeScreen} screenOptions={({ navigation, route }) => ({
        headerStyle: {
          backgroundColor: COLORS.headerColor,

        },
        headerTintColor: COLORS.white,
        headerLeft: () => (
          <Icon name="arrow-left-thin" size={35} color={COLORS.white} style={{ width: 35 }} onPress={() => navigation.goBack()} />
        ),

      })} >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ListDetail" component={ListDetailScreen} options={{ title: cityName }} />
        <Stack.Screen name="DetailWeather" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;