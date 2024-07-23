import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OnboardingScreen from '../DisplayScreens/OnBoardingScreen';
import HomeScreen from '../DisplayScreens/HomeScreen';
import CardScreen from '../DisplayScreens/CardScreen';
import QRScannerScreen from '../DisplayScreens/QRScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      
      tabBarStyle: {
        backgroundColor: '#f5f5f5',
        borderTopWidth: 0,
        height: 40,
        paddingHorizontal: 16,
      },
      tabBarActiveTintColor: '#2196F3',
      tabBarInactiveTintColor: '#888',
      tabBarLabelStyle: {
        fontSize: 12,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home-outline" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Cards"
      component={CardScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="card-outline" color={color} size={size} />
        ),
      }}
    />
   
  </Tab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
